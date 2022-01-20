import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import {makeStyles} from "@material-ui/core/styles";
import {headerColor} from "../../assets/colors";

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
									 onClick={props.handleClose}>
							{item}
						</MenuItem>
					)
				})
			}
		</Menu>
	);
}

export default CustomMenu;