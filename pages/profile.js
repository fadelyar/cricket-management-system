import React, { useState } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import SideBar from "../src/components/sidebar/SideBar";
import Header from "../src/components/header/Header";
import { styles } from '../src/assets/jss/common-style'
import CustomForm from "../src/components/form/CustomForm";
import { headerColor } from "../src/assets/colors";
import UserProfile from "../src/components/user-profile/UserProfile";
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router';
import Snackbar from '@material-ui/core/Snackbar'
import Alert from '@material-ui/lab/Alert'

const useStyles = makeStyles(styles)

function Profile(props) {
	const classes = useStyles()
	const [open, setOpen] = useState(false)
	const { status } = useSession()
	const router = useRouter()
	const [openSnack, setOpenSnack] = React.useState(true)
	const handleCloseSnack = function () {
		setOpenSnack(false)
	}
	const handleOpenSnack = function () {
		setOpenSnack(true)
	}
	const handleOpen = function () {
		setOpen(true)
	}
	const handleClose = function () {
		setOpen(false)
	}
	React.useEffect(() => {
		if (status === 'unauthenticated') {
			router.replace('/login')
		}
	}, [status])
	return (
		<div>
			<SideBar selectedBar='Profile' open={open} handleClose={handleClose} />
			<div className={classes.root}>
				<Header title='Profile' openDrawer={handleOpen} disabled />
				<div className={classes.profileBody}>
					<div className={classes.formDiv}>
						<CustomForm color={headerColor} currentUser={props.data} />
					</div>
					<div className={classes.profileDiv}>
						<UserProfile />
					</div>
				</div>
				<Snackbar open={openSnack} autoHideDuration={12000} onClose={handleCloseSnack}>
					<Alert onClose={handleCloseSnack} severity="warning" variant='filled'>
						Any Changes to profile, you have to re login!
					</Alert>
				</Snackbar>
				<div className={classes.footer}>

				</div>
			</div>
		</div>
	)
}

export async function getStaticProps(cont) {

	return {
		props: {
			data: []
		}
	}
}

export default Profile;