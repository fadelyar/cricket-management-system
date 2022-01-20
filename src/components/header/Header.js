import React from 'react';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from "@material-ui/core/styles";
import style from '../../assets/jss/header-style'
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import IconButton from "@material-ui/core/IconButton";
import NotificationAdd from "@material-ui/icons/Notifications";
import UserIcon from "@material-ui/icons/SupervisorAccount";
import CustomMenu from "../menu/CustomMenu";
import { useTheme, useMediaQuery } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles(style)

function Header(props) {

	const classes = useStyles()
	const [anchorEl, setAnchorEl] = React.useState(null);
	const open = Boolean(anchorEl);
	const theme = useTheme()
	const query = useMediaQuery(theme.breakpoints.down('sm'))
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};
	return (
		<AppBar position='sticky' variant='outline'>
			<CustomMenu open={open} handleClose={handleClose} anchorEl={anchorEl}
				menuItems={['Profile', 'Login', 'Logout']}
				width={120}
			/>
			<Toolbar className={classes.toolBar} style={{
				minHeight: 54
			}}>
				{
					query && <IconButton style={{ marginRight: 10, color: 'white' }}
						onClick={props.openDrawer}>
						<MenuIcon />
					</IconButton>
				}
				<Typography className={classes.hideTypo}
					variant='h6'>
					{props.title}
				</Typography>
				{/*<div className={classes.divGrow}/>*/}
				<div className={classes.leftSideDiv}>
					<div className={classes.searchDiv}>
						<InputBase placeholder='Search...' className={classes.typography}
							style={{ width: '100%' }}
							disabled={props.disabled}
							inputProps={{
								style: {
									color: 'white',
									textAlign: 'center',
									fontSize: '130%',
								}
							}}
						/>
						<IconButton color='inherit'>
							<SearchIcon />
						</IconButton>
					</div>
					<div className={classes.notiDiv}>
						<IconButton color='inherit'>
							<NotificationAdd />
						</IconButton>
						<IconButton onClick={handleClick} color='inherit'>
							<UserIcon />
						</IconButton>
					</div>
				</div>
			</Toolbar>
		</AppBar>
	)
}

export default Header