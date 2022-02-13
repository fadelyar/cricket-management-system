import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import {makeStyles} from "@material-ui/core/styles";
import {headerColor} from "../../assets/colors";
import { useRouter } from 'next/router';
import {signOut} from 'next-auth/react'

const useStyle = makeStyles((theme) => ({
	menuItem: {
		width: (props) => props.width,
		fontFamily: 'Inconsolata',
		'&:hover': {
			backgroundColor: headerColor,
			color: 'white',
			fontWeight: 'bold',
		}
	}
}))

function CustomMenu(props) {
	const classes = useStyle(props)
	const router = useRouter()
	const navigateTo = function (pathName) {
		if (pathName === 'Profile') {
			props.handleClose()

			return router.push('/profile')
		}
		if (pathName === 'Login') {
			props.handleClose()
			return router.replace('/login')
		}
		signOut().then(() => {
			router.push('/login')
			props.handleClose()
		})
	}
	return (
		<Menu open={props.open} id="demo-positioned-menu" anchorEl={props.anchorEl}
				onClose={props.handleClose}
				anchorOrigin={{
					vertical: 'top',
					horizontal: 'left',
				}}
				transformOrigin={{
					vertical: 'top',
					horizontal: 'left',
				}}
		>
			{
				props.menuItems.map((item, index) => {
					return (
						<MenuItem className={classes.menuItem} divider={item === 'Login'} key={index}
									 onClick={() => navigateTo(item)}>
							{item}
						</MenuItem>
					)
				})
			}
		</Menu>
	);
}

export default CustomMenu;