import React from 'react';
import {styles} from '../../assets/jss/custom-form-style'
import {makeStyles} from "@material-ui/core/styles";
import UserIcon from "@material-ui/icons/SupervisorAccount";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import Button from "@material-ui/core/Button";
import {headerColor} from "../../assets/colors";

const useStyles = makeStyles(styles)

function CustomForm(props) {
	const classes = useStyles(props)
	return (<div className={classes.root}>
			<div style={{
				display: 'flex', alignItems: 'center',
			}}>
				<div className={classes.header}>
					<UserIcon color='inherit' fontSize='large'/>
				</div>
				<Typography variant='h6' className={classes.typography}
							style={{marginLeft: 80, paddingTop: 10, color: 'gray'}}>
					Edit Profile
				</Typography>
			</div>
			<div className={classes.body}>
				<div className={classes.eachDiv}>
					<TextField variant='standard' color='secondary' className={classes.textField}
							   label='UserName'
							   inputProps={{
								   style: {
									   fontFamily: 'Inconsolata', fontSize: '110%', color: 'gray',
								   }
							   }}
					/>
					<TextField variant='standard' color='secondary' className={classes.textField}
							   label='FirstName'
							   inputProps={{
								   style: {
									   fontFamily: 'Inconsolata', fontSize: '110%', color: 'gray'
								   }
							   }}
					/>
					<TextField variant='standard' color='secondary' className={classes.textField}
							   label='LastName'
							   inputProps={{
								   style: {
									   fontFamily: 'Inconsolata', fontSize: '110%', color: 'gray'
								   }
							   }}
					/>
				</div>
				<div className={classes.eachDiv}>
					<TextField variant='standard' color='secondary' className={classes.textField}
							   label='Email'
							   inputProps={{
								   style: {
									   fontFamily: 'Inconsolata', fontSize: '110%', color: 'gray'
								   }
							   }}
					/>
					<TextField variant='standard' color='secondary' className={classes.textField}
							   label='Phone'
							   inputProps={{
								   style: {
									   fontFamily: 'Inconsolata', fontSize: '110%', color: 'gray'
								   }
							   }}
					/>
				</div>
				<div style={{
					width: '100%',
					paddingRight: 7
				}}>
					<Typography variant='body1' className={classes.typography}
								style={{marginBottom: 10, color: 'gray'}}>
						About Me
					</Typography>
					<TextareaAutosize
						style={{
							borderRadius: 5,
							borderWidth: 0.8,
							borderColor: 'lightgray',
							padding: 4,
							color: 'gray'
						}}
						minRows={10} className={classes.textField}
						placeholder='write something special about yourself!'
						color='secondary'
					/>
				</div>
				<div style={{textAlign: 'center', width: '100%', marginTop: 30}}>
					<Button style={{backgroundColor: headerColor, color: 'white'}} variant='contained'>
						Update Profile
					</Button>
				</div>
			</div>
		</div>
	)
}

export default CustomForm;