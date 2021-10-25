import React from 'react';
import {makeStyles} from '@mui/styles'
import {loginPage} from '../src/assets/jss/login-style'
import {motion} from 'framer-motion'
import Typography from "@material-ui/core/Typography";
import {useMediaQuery, useTheme} from "@material-ui/core";
import {useRouter} from "next/router";

const useStyle = makeStyles((theme) => loginPage(theme))

function Login(props) {
	const classes = useStyle()
	const theme = useTheme()
	const mobile = useMediaQuery(theme.breakpoints.between(200, 500))
	const router = useRouter()
	return (
		<div className={classes.root}>
			<div className={classes.background} style={{
				backgroundImage: "url( sidebar-2.jpg )", backgroundSize: "cover",
				backgroundPosition: "center center",
			}}/>
			<motion.div className={classes.formDiv}
							animate={{y: mobile ? 50 : 100, opacity: 1}}
							transition={{duration: 0.8, stiffness: 2000}}
							initial={{y: -200, opacity: 0}}
			>
				<div className={classes.formHeader}>
					<Typography variant='h5' color='inherit'>
						Login
					</Typography>
				</div>
				<div style={{marginTop: '50px'}}/>
				<div className={classes.formBody}>

				</div>
			</motion.div>
		</div>
	);
}

export default Login;