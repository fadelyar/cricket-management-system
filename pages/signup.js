import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import { loginPage } from '../src/assets/jss/login-style'
import { motion } from 'framer-motion'
import Typography from "@material-ui/core/Typography";
import { useMediaQuery, useTheme } from "@material-ui/core";
import { useRouter } from "next/router";
import TextField from "@material-ui/core/TextField";
import UserIcon from '@material-ui/icons/SupervisedUserCircle'
import PasswordIcon from '@material-ui/icons/LockOutlined'
import EmailIcon from '@material-ui/icons/Email'
import Button from "@material-ui/core/Button";
import { headerColor } from "../src/assets/colors";
import Snackbar from '@material-ui/core/Snackbar'
import Alert from '@material-ui/lab/Alert'
import { CREATE_USER } from '../src/apolloclient/queries'
import { useMutation } from '@apollo/client';
import { Formik, Form, Field } from 'formik'
import * as yup from 'yup'

const useStyle = makeStyles((theme) => loginPage(theme))
const initialValues = {
   name: '',
   password: '',
   firstName: '',
   lastName: '',
   email: ''
}
const validationSchema = yup.object({
   name: yup.string().required('name is required!'),
   password: yup.string().required('password is required!'),
   email: yup.string().email('incorrect email address!'),
   firstName: yup.string(),
   lastName: yup.string()
})

function Signup(props) {
   const classes = useStyle()
   const theme = useTheme()
   const mobile = useMediaQuery(theme.breakpoints.between(200, 500))
   const router = useRouter()
   const [openSnack, setOpenSnack] = React.useState(false)
   const [error, setError] = React.useState('')
   const [createUser] = useMutation(CREATE_USER)
   const handleCloseSnack = function () {
      setOpenSnack(false)
   }
   const handleOpenSnack = function () {
      setOpenSnack(true)
   }
   const submit = function (values) {
      createUser({
         variables: {
            name: values.name,
            password: values.password,
            lastName: values.lastName,
            email: values.email
         }
      })
         .then(() => {
            router.replace('/login')
         })
         .catch((err) => {
            setOpenSnack(true)
            setError(err.message)
         })
   }
   return (
      <div className={classes.root}>
         <Snackbar open={openSnack} autoHideDuration={5000} onClose={handleCloseSnack}>
            <Alert onClose={handleCloseSnack} severity="error" variant='filled'>
               {error}
            </Alert>
         </Snackbar>
         <div className={classes.background} style={{
            backgroundImage: "url( background_image/login.jpg )",
            backgroundSize: "cover",
            backgroundPosition: "center center",
         }} />
         <motion.div className={classes.formDiv}
            animate={{ y: mobile ? 30 : 50, opacity: 1 }}
            transition={{ duration: 1.1, stiffness: 2000 }}
            initial={{ y: -200, opacity: 0 }}
         >
            <div className={classes.formHeader}>
               <Typography variant='h5' color='inherit'>
                  Sign Up
               </Typography>
            </div>
            <div style={{ marginTop: '20px' }} />
            <div className={classes.formBody}>
               <div style={{
                  marginTop: 140,
                  display: 'flex',
                  flexDirection: 'column'
               }}>
                  <Formik onSubmit={submit} initialValues={initialValues}
                     validationSchema={validationSchema}
                  >
                     <Form>
                        <div className={classes.inputDiv}>
                           <Field name='name'>
                              {(field) => {
                                 return (
                                    <TextField fullWidth color='secondary' variant='standard'
                                       label={
                                          field.meta.error && field.meta.touched ?
                                             <Typography variant='body1' style={{ color: 'red' }}>
                                                {field.meta.error}
                                             </Typography> :
                                             'UserName'
                                       }
                                       inputProps={{
                                          style: { fontFamily: 'Inconsolata', fontWeight: 'bold' }
                                       }}
                                       {...field.field}
                                    // value={name}
                                    // onChange={changeName}
                                    />
                                 )
                              }}
                           </Field>
                           <UserIcon className={classes.icon} color='inherit' />
                        </div>
                        <div className={classes.inputDiv}>
                           <Field name='email'>
                              {(field) => {
                                 return (
                                    <TextField fullWidth color='secondary' variant='standard'
                                       label={
                                          field.meta.error && field.meta.touched ?
                                             <Typography variant='body1' style={{ color: 'red' }}>
                                                {field.meta.error}
                                             </Typography> :
                                             'Email'
                                       }
                                       inputProps={{
                                          style: { fontFamily: 'Inconsolata', fontWeight: 'bold' }
                                       }}
                                       {...field.field}
                                    // value={name}
                                    // onChange={changeName}
                                    />
                                 )
                              }}
                           </Field>
                           <EmailIcon className={classes.icon} color='inherit' />
                        </div>
                        <div className={classes.inputDiv}>
                           <Field name='lastName'>
                              {(field) => {
                                 return (
                                    <TextField fullWidth color='secondary' variant='standard'
                                       label={
                                          field.meta.error && field.meta.touched ?
                                             <Typography variant='body1' style={{ color: 'red' }}>
                                                {field.meta.error}
                                             </Typography> :
                                             'LastName'
                                       }
                                       inputProps={{
                                          style: { fontFamily: 'Inconsolata', fontWeight: 'bold' }
                                       }}
                                       {...field.field}
                                    // value={name}
                                    // onChange={changeName}
                                    />
                                 )
                              }}
                           </Field>
                           <UserIcon className={classes.icon} color='inherit' />
                        </div>
                        <div className={classes.inputDiv}>
                           <Field name='password'>
                              {(field) => {
                                 return (
                                    <TextField fullWidth color='secondary' variant='standard'
                                       label={
                                          field.meta.error && field.meta.touched ?
                                             <Typography variant='body1' style={{ color: 'red' }}>
                                                {field.meta.error}
                                             </Typography> :
                                             'Password'
                                       }
                                       inputProps={{
                                          style: { fontFamily: 'Inconsolata', fontWeight: 'bold' }
                                       }}
                                       {...field.field}
                                       // value={name}
                                       // onChange={changeName}
                                       type='password'
                                    />
                                 )
                              }}
                           </Field>
                           <PasswordIcon className={classes.icon} color='inherit' />
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                           <Button style={{ color: headerColor, marginTop: 5 }}
                              variant='outlined'
                              type='submit'
                           >
                              Submit
                           </Button>
                           <Button style={{ color: headerColor, marginTop: 10 }}
                              variant='outlined'
                              onClick={() => {
                                 router.replace('/login')
                              }}
                           >
                              Already have an account
                           </Button>
                        </div>
                     </Form>
                  </Formik>

               </div>
            </div>
         </motion.div>
      </div>
   );
}

export default Signup;