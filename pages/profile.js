import React, { useState } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import SideBar from "../src/components/sidebar/SideBar";
import Header from "../src/components/header/Header";
import { currentUser } from '../src/assets/fake-data'
import { styles } from '../src/assets/jss/common-style'
import CustomForm from "../src/components/form/CustomForm";
import { headerColor } from "../src/assets/colors";
import UserProfile from "../src/components/user-profile/UserProfile";

const useStyles = makeStyles(styles)

function Profile(props) {
	const classes = useStyles()
	const [open, setOpen] = useState(false)
	const handleOpen = function () {
		setOpen(true)
	}
	const handleClose = function () {
		setOpen(false)
	}
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
				<div className={classes.footer}>
				</div>
			</div>
		</div>
	)
}

export async function getStaticProps() {
	return {
		props: {
			data: currentUser
		}
	}
}

export default Profile;