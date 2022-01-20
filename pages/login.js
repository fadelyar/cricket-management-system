import React from 'react';
import {makeStyles} from '@material-ui/core/styles'
import {loginPage} from '../src/assets/jss/login-style'
import {motion} from 'framer-motion'
import Typography from "@material-ui/core/Typography";
import {useMediaQuery, useTheme} from "@material-ui/core";
import {useRouter} from "next/router";
import TextField from "@material-ui/core/TextField";
import UserIcon from '@material-ui/icons/SupervisedUserCircle'
import EmailIcon from '@material-ui/icons/Email'
import PasswordIcon from '@material-ui/icons/LockOutlined'
import Button from "@material-ui/core/Button";
import {headerColor, roseColor} from "../src/assets/colors";

const useStyle = makeStyles((theme) => loginPage(theme))

function Login(props) {
	const classes = useStyle()
	const theme = useTheme()
	const mobile = useMediaQuery(theme.breakpoints.between(200, 500))
	const router = useRouter()
	return (
		<div className={classes.root}>
			<div className={classes.background} style={{
				backgroundImage: "url( background_image/login.jpg )",
				backgroundSize: "cover",
				backgroundPosition: "center center",
			}}/>
			<motion.div className={classes.formDiv}
							animate={{y: mobile ? 50 : 100, opacity: 1}}
							transition={{duration: 1.1, stiffness: 2000}}
							initial={{y: -200, opacity: 0}}
			>
				<div className={classes.formHeader}>
					<Typography variant='h5' color='inherit'>
						Login
					</Typography>
				</div>
				<div style={{marginTop: '20px'}}/>
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
											  style: {fontFamily: 'Inconsolata', fontWeight: 'bold'}
										  }}
							/>
							<UserIcon className={classes.icon} color='inherit'/>
						</div>
						<div className={classes.inputDiv}>
							<TextField fullWidth color='secondary' variant='standard'
										  placeholder='Email...'
										  inputProps={{
											  style: {fontFamily: 'Inconsolata', fontWeight: 'bold'}
										  }}
							/>
							<EmailIcon className={classes.icon} color='inherit'/>
						</div>
						<div className={classes.inputDiv}>
							<TextField fullWidth color='secondary' variant='standard'
										  placeholder='Password...'
										  type='password'
										  inputProps={{
											  style: {fontFamily: 'Inconsolata', fontWeight: 'bold'}
										  }}
							/>
							<PasswordIcon className={classes.icon} color='inherit'/>
						</div>
						<Button style={{color: headerColor, marginTop: 15}} variant='outlined'>
							Submit
						</Button>
					</div>
				</div>
			</motion.div>
		</div>
	);
}

export default Login;