import React from 'react';
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import {makeStyles} from "@material-ui/core/styles";
import style from '../../assets/jss/header-style'
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import NotificationAdd from "@mui/icons-material/Notifications";
import UserIcon from "@mui/icons-material/SupervisorAccount";
import CustomMenu from "../menu/CustomMenu";

const useStyles = makeStyles(style)

function Header(props) {

	const classes = useStyles()
	const [anchorEl, setAnchorEl] = React.useState(null);
	const open = Boolean(anchorEl);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};
	return (
		<AppBar position='relative' variant='outline'>
			<CustomMenu open={open} handleClose={handleClose} anchorEl={anchorEl}
							menuItems={['Profile', 'Login', 'Logout']}
							width={120}
			/>
			<Toolbar className={classes.toolBar}>
				<Typography className={classes.hideTypo}
								variant='h6'>
					{props.title}
				</Typography>
				<div className={classes.divGrow}/>
				<div className={classes.leftSideDiv}>
					<div className={classes.searchDiv}>
						<InputBase placeholder='Search...' className={classes.typography}
									  style={{width: '100%'}}/>
						<IconButton color='inherit'>
							<SearchIcon/>
						</IconButton>
					</div>
					<div className={classes.notiDiv}>
						<IconButton color='inherit'>
							<NotificationAdd/>
						</IconButton>
						<IconButton onClick={handleClick} color='inherit'>
							<UserIcon/>
						</IconButton>
					</div>
				</div>
			</Toolbar>
		</AppBar>
	)
}

export default Header