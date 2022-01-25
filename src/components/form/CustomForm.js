import React from 'react';
import { styles } from '../../assets/jss/custom-form-style'
import { makeStyles } from "@material-ui/core/styles";
import UserIcon from "@material-ui/icons/SupervisorAccount";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import Button from "@material-ui/core/Button";
import { headerColor } from "../../assets/colors";
import { useMutation } from '@apollo/client';
import { UPDATE_USER } from '../../../src/apolloclient/queries'
import { useSession, signOut, getSession } from 'next-auth/react';
import { useRouter } from 'next/router';

const useStyles = makeStyles(styles)

function CustomForm(props) {
	const classes = useStyles(props)
	const router = useRouter()
	const [updateUser, { data, error }] = useMutation(UPDATE_USER, {
		onCompleted: () => {
			signOut()
			router.replace('/login')
		}
	})
	const { data: session } = useSession()
	const [values, setValues] = React.useState({
		name: '',
		firstName: '',
		lastName: '',
		email: '',
		aboutMe: ''
	})

	React.useEffect(() => {
		if (session) {
			setValues((prev) => {
				return {
					...prev,
					name: session?.user.name,
					firstName: session?.user.firstName,
					lastName: session?.user.lastName,
					email: session?.user.email,
					aboutMe: session?.user.aboutMe
				}
			})
		}
	}, [session])

	const handleChange = function (event, name) {
		setValues((prev) => {
			return { ...prev, [name]: event.target.value }
		})
	}

	const updateUserHandler = function () {
		updateUser({
			variables: {
				userId: session.user.id,
				firstName: values['firstName'],
				lastName: values['lastName'],
				email: values['email'],
				aboutMe: values['aboutMe']
			}
		})
	}

	return (<div className={classes.root}>
		<div style={{
			display: 'flex', alignItems: 'center',
		}}>
			<div className={classes.header}>
				<UserIcon color='inherit' fontSize='large' />
			</div>
			<Typography variant='h6' className={classes.typography}
				style={{ marginLeft: 80, paddingTop: 10, color: 'gray' }}>
				Edit Profile
			</Typography>
		</div>
		<div className={classes.body}>
			<div className={classes.eachDiv}>
				<TextField variant='standard' color='secondary' className={classes.textField}
					placeholder='UserName'
					inputProps={{
						style: {
							fontFamily: 'Inconsolata', fontSize: '110%', color: 'gray',
						}
					}}
					value={values['name']}
					onChange={(event) => handleChange(event, 'name')}
				/>
				<TextField variant='standard' color='secondary' className={classes.textField}
					placeholder='FirstName'
					inputProps={{
						style: {
							fontFamily: 'Inconsolata', fontSize: '110%', color: 'gray'
						}
					}}
					value={values['firstName']}
					onChange={(event) => handleChange(event, 'firstName')}
				/>
				<TextField variant='standard' color='secondary' className={classes.textField}
					placeholder='LastName'
					inputProps={{
						style: {
							fontFamily: 'Inconsolata', fontSize: '110%', color: 'gray'
						}
					}}
					value={values['lastName']}
					onChange={(event) => handleChange(event, 'lastName')}
				/>
			</div>
			<div className={classes.eachDiv}>
				<TextField variant='standard' color='secondary' className={classes.textField}
					placeholder='Email'
					inputProps={{
						style: {
							fontFamily: 'Inconsolata', fontSize: '110%', color: 'gray'
						}
					}}
					value={values['email']}
					onChange={(event) => handleChange(event, 'email')}
				/>
				{/* <TextField variant='standard' color='secondary' className={classes.textField}
							   label='Phone'
							   inputProps={{
								   style: {
									   fontFamily: 'Inconsolata', fontSize: '110%', color: 'gray'
								   }
							   }}
					/> */}
			</div>
			<div style={{
				width: '100%',
				paddingRight: 7
			}}>
				<Typography variant='body1' className={classes.typography}
					style={{ marginBottom: 10, color: 'gray' }}>
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
					value={values['aboutMe']}
					onChange={(event) => handleChange(event, 'aboutMe')}
				/>
			</div>
			<div style={{ textAlign: 'center', width: '100%', marginTop: 30 }}>
				<Button style={{ backgroundColor: headerColor, color: 'white' }}
					variant='contained'
					onClick={updateUserHandler}
				>
					Update Profile
				</Button>
			</div>
		</div>
	</div>
	)
}



export default CustomForm;