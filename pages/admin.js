import * as React from "react";
import { motion } from "framer-motion";

const icon = {
   hidden: {
      opacity: 0,
      pathLength: 0,
      fill: "rgba(255, 255, 225, 0)"
   },
   visible: {
      opacity: 1,
      pathLength: 1,
      fill: "rgba(255, 255, 255, 1)"
   }
};

export default function Example() {
   return (
      <div style={{
         display: 'flex', justifyContent: 'center',
         alignItems: 'center', height: '100vh',
         backgroundColor: 'purple'
      }}>
         <div style={{ width: 200, height: 200 }}>

            <motion.svg
               xmlns="http://www.w3.org/2000/svg"
               viewBox="0 0 100 100"
               style={{
                  width: '56 %',
                  overflow: 'visible',
                  stroke: 'white',
                  strokeWidth: 2,
                  strokeLinejoin: 'round',
                  strokeLinecap: 'round',
               }}
            >
               <motion.path
                  d="M0 100V0l50 50 50-50v100L75 75l-25 25-25-25z"
                  variants={icon}
                  initial="hidden"
                  animate="visible"
                  transition={{
                     default: { duration: 3, ease: "easeInOut" },
                     fill: { duration: 3, ease: [1, 0, 0.8, 1] }
                  }}
               />
            </motion.svg>
            <motion.svg height="210" width="300"
               style={{
                  width: '56 %',
                  overflow: 'visible',
                  stroke: 'white',
                  strokeWidth: 2,
                  strokeLinejoin: 'round',
                  strokeLinecap: 'round',
                  backgroundColor: 'red'
               }}
            >
               <motion.path d="M150 0 L75 200 L225 200 Z"
                  variants={icon}
                  initial="hidden"
                  animate="visible"
                  transition={{
                     default: { duration: 3.8, ease: "easeInOut" },
                     fill: { duration: 3, ease: [1, 0, 0.8, 1] }
                  }}
               />
            </motion.svg>
         </div>
      </div>
   )
}
