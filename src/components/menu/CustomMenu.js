import React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {makeStyles} from "@material-ui/core/styles";
import {blue} from "@mui/material/colors";

const useStyle = makeStyles((theme) => ({
	menuItem: {
		width: (props) => props.width,
		fontFamily: 'Inconsolata',
		'&:hover': {
			backgroundColor: blue['500'],
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