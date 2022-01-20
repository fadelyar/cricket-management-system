import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {styles} from '../../assets/jss/user-profile-style'
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";

const useStyle = makeStyles(styles)

function UserProfile(props) {
	const classes = useStyle()
	return (
		<div className={classes.root}>
			<div style={{display: 'flex', justifyContent: 'center'}}>
				<Avatar src='background_image/logo.jpg' className={classes.avatar}/>
			</div>
			<div className={classes.profileBody}>
				<Typography className={classes.typography} style={{color: 'gray'}}
							variant='button'>
					Admin
				</Typography>
				<Typography className={classes.typography} variant='h6'>
					Faisal Adelyar
				</Typography>
				<Typography style={{marginTop: 20, color: 'gray'}} className={classes.typography}>
					Don't be scared of the truth because we need to restart the human foundation
					in truth
					And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the
					back
					is...
				</Typography>
			</div>
		</div>
	)
}

export default UserProfile;