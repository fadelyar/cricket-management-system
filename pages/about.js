import React, { useState, useEffect } from 'react'
import { AnimatePresence, motion, useAnimation } from 'framer-motion'
import { Button } from '@material-ui/core'

export default function About(props) {
   const [display, setDisplay] = useState('row')
   return (
      <div style={{
         display: 'flex', flexDirection: display, padding: 20,
         border: '1px solid black', justifyContent: 'space-around',
         alignItems: 'stretch', height: 500
      }}>
         {
            [1, 2, 3, 4].map((item) => {
               return (
                  <motion.div
                     layout
                     transition={{
                        duration: 1,
                        stiffness: 2000,
                     }}
                     style={{ width: 70, height: 70, backgroundColor: 'purple' }}>

                  </motion.div>
               )
            })
         }
         <motion.div
            layout
            transition={{
               duration: 1
            }}
            style={{ width: 70, height: 70 }}
         >
            <Button onClick={() => {
               setDisplay((prev) => {
                  return prev === 'row' ? 'column' : 'row'
               })
            }}>
               Change
            </Button>
         </motion.div>
      </div>
   )
}