import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import SideBar from "../src/components/sidebar/SideBar";
import Header from "../src/components/header/Header";
import {currentUser} from '../src/assets/fake-data'
import {styles} from '../src/assets/jss/common-style'
import CustomForm from "../src/components/form/CustomForm";
import {primaryColor} 	from "../src/assets/colors";
import UserProfile from "../src/components/user-profile/UserProfile";

const useStyles = makeStyles(styles)

function Profile(props) {
	const classes = useStyles()
	return (
		<div>
			<SideBar selectedBar='Profile'/>
			<div className={classes.root}>
				<Header title='Profile'/>
				<div className={classes.profileBody}>
					<div className={classes.formDiv}>
						<CustomForm color={primaryColor[0]} currentUser={props.data}/>
					</div>
					<div className={classes.profileDiv}>
						<UserProfile/>
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