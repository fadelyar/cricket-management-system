import React from 'react'
import { makeStyles } from '@material-ui/styles'
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyle = makeStyles((theme) => ({
   backdrop: {
      zIndex: 5,
      backgroundColor: 'rgba(0,0,0, 0.5)'
   }
}))

export default function Loader(props) {
   const classes = useStyle()
   return (
      <Backdrop className={classes.backdrop} open={props.open}>
         <CircularProgress color='primary' />
      </Backdrop>
   )
}