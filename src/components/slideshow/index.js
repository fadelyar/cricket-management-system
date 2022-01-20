import * as React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "@popmotion/popcorn";
import { IconButton } from "@material-ui/core";
import ArrowLeft from "@material-ui/icons/ArrowLeft";
import ArrowRight from "@material-ui/icons/ArrowRight";
// import { images } from "./image-data";
const images = [
   '/background_image/login.jpg',
   '/background_image/depositphotos_103196520-stock-photo-backyard-cricket-bat-ball-and.jpg',
]

const variants = {
   enter: (direction) => {
      return {
         x: direction > 0 ? 1000 : -1000,
         opacity: 0
      };
   },
   center: {
      zIndex: 1,
      x: 0,
      opacity: 1
   },
   exit: (direction) => {
      return {
         zIndex: 0,
         x: direction < 0 ? 1000 : -1000,
         opacity: 0
      };
   }
};


/**
 * Experimenting with distilling swipe offset and velocity into a single variable, so the
 * less distance a user has swiped, the more velocity they need to register as a swipe.
 * Should accomodate longer swipes and short flicks without having binary checks on
 * just distance thresholds and velocity > 0.
 */
const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
   return Math.abs(offset) * velocity;
};

export default function SlideShow() {
   const [[page, direction], setPage] = useState([0, 0]);

   // We only have 3 images, but we paginate them absolutely (ie 1, 2, 3, 4, 5...) and
   // then wrap that within 0-2 to find our image ID in the array below. By passing an
   // absolute page index as the `motion` component's `key` prop, `AnimatePresence` will
   // detect it as an entirely new image. So you can infinitely paginate as few as 1 images.
   const imageIndex = wrap(0, images.length, page);

   const paginate = (newDirection) => {
      setPage([page + newDirection, newDirection]);
   };

   return (
      <>
         <AnimatePresence initial={false} custom={direction}>

            <motion.img
               style={{ width: '100%', height: 400 }}
               key={page}
               src={images[imageIndex]}
               custom={direction}
               variants={variants}
               initial="enter"
               animate="center"
               exit="exit"
               transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
               }}
               drag="x"
               dragConstraints={{ left: 0, right: 0 }}
               dragElastic={1}
               onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x);

                  if (swipe < -swipeConfidenceThreshold) {
                     paginate(1);
                  } else if (swipe > swipeConfidenceThreshold) {
                     paginate(-1);
                  }
               }}
            />
         </AnimatePresence>
         <div style={{
            position: 'absolute', display: 'flex',
            justifyContent: 'space-around ',
            zIndex: 5,
            width: '100%',
            color: 'white',
            marginTop: 280
         }}>
            <IconButton color='inherit'>
               <ArrowLeft />
            </IconButton>
            <IconButton color='inherit'>
               <ArrowRight />
            </IconButton>
         </div>
      </>
   );
};