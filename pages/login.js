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
import Button from "@material-ui/core/Button";
import { headerColor, roseColor } from "../src/assets/colors";
import { signIn } from 'next-auth/react'
import Snackbar from '@material-ui/core/Snackbar'
import Alert from '@material-ui/lab/Alert'
import { route } from 'next/dist/server/router';

const useStyle = makeStyles((theme) => loginPage(theme))

function Login(props) {
	const classes = useStyle()
	const theme = useTheme()
	const mobile = useMediaQuery(theme.breakpoints.between(200, 500))
	const router = useRouter()
	const [name, setName] = React.useState('')
	const [password, setPassword] = React.useState('')
	const [openSnack, setOpenSnack] = React.useState(false)
	const [error, setError] = React.useState('')
	const handleCloseSnack = function () {
		setOpenSnack(false)
	}
	const handleOpenSnack = function () {
		setOpenSnack(true)
	}
	const changeName = function (event) {
		setName(event.target.value)
	}
	const changePassword = function (event) {
		setPassword(event.target.value)
	}
	const submit = function () {
		signIn('credentials',
			{
				name: name,
				password: password,
				// The page where you want to redirect to after a 
				// successful login
				// callbackUrl: `${window.location.origin}/account_page`
				redirect: false
			}
		)
			.then(({ error, status, ok, url }) => {
				if (error) {
					console.log('then is executed!', error, status, ok, url);

					setOpenSnack(true)
					setError(error)
					return
				}
				router.replace('/')
				console.log('then is executed!', error, status, ok, url);
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
				animate={{ y: mobile ? 50 : 100, opacity: 1 }}
				transition={{ duration: 1.1, stiffness: 2000 }}
				initial={{ y: -200, opacity: 0 }}
			>
				<div className={classes.formHeader}>
					<Typography variant='h5' color='inherit'>
						Login
					</Typography>
				</div>
				<div style={{ marginTop: '20px' }} />
				<div className={classes.formBody}>
					<div style={{
						marginTop: 140,
						display: 'flex',
						flexDirection: 'column'
					}}>
						<div className={classes.inputDiv}>
							<TextField fullWidth color='secondary' variant='standard'
								placeholder='User Name...'
								inputProps={{
									style: { fontFamily: 'Inconsolata', fontWeight: 'bold' }
								}}
								value={name}
								onChange={changeName}
							/>
							<UserIcon className={classes.icon} color='inherit' />
						</div>

						<div className={classes.inputDiv}>
							<TextField fullWidth color='secondary' variant='standard'
								placeholder='Password...'
								type='password'
								inputProps={{
									style: {
										fontFamily: 'Inconsolata',
										fontWeight: 'bold',
										fontSize: 17
									}
								}}
								value={password}
								onChange={changePassword}
							/>
							<PasswordIcon className={classes.icon} color='inherit' />
						</div>
						<Button style={{ color: headerColor, marginTop: 15 }}
							variant='outlined'
							onClick={submit}
						>
							Submit
						</Button>
						<Button style={{ color: headerColor, marginTop: 20 }}
							variant='outlined'
							onClick={submit}
							onClick={() => router.push('/signup')}
						>
							Don't have an account
						</Button>
					</div>
				</div>
			</motion.div>
		</div>
	);
}

export default Login;