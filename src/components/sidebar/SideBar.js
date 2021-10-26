import React, {useState} from 'react';
import {Drawer, List, ListItem, ListItemIcon, ListItemText, useMediaQuery} from "@material-ui/core";
import ListItemButton from "@mui/material/ListItemButton";
import classNames from "classnames";
import User from "@mui/icons-material/Facebook";
import {makeStyles, useTheme} from "@material-ui/core/styles";
import {styles} from '../../assets/jss/sidebar-style'
import {useRouter} from "next/router";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";


const routerList = [
	{id: 'dash_board', title: 'Dash Board', url: ''},
	{id: 'profile', title: 'Profile', url: '/profile'},
	{id: 'comparison', title: 'Comparison', url: '/comparison'},
	{id: 'history', title: 'History', url: '/history'},
	{id: 'social', title: 'Social', url: '/social'},
	{id: 'login', title: 'Login', url: '/login'},
]

const useStyle = makeStyles(styles)

function SideBar(props) {

	const classes = useStyle()
	const [open, setOpen] = useState(true)
	const [selectedButton, setSelectedButton] = useState(0)
	const theme = useTheme()
	const query = useMediaQuery(theme.breakpoints.up('md'))
	const router = useRouter()

	const handleOpen = function () {
		setOpen(true)
	}

	const handleClose = function () {
		setOpen(false)
	}

	return (
		<div>
			<Drawer
				transitionDuration={500}
				// hidden={!query}
				variant="persistent"
				anchor={"left"}
				open={open && query}
				classes={{
					paper: classes.drawerPaper
				}}
				onClose={handleClose}
				ModalProps={{
					keepMounted: true, // Better open performance on mobile.
				}}
			>
				<div className={classes.header}>
					<Avatar src='background_image/logo.jpg' style={{width: 45, height: 40}}/>
					<div style={{flexGrow: 1}}/>
					<Typography variant='h4' style={{fontFamily: 'Inconsolata'}}>
						CMS
					</Typography>
				</div>
				<List className={classes.list}>
					<Divider style={{backgroundColor: 'gray', marginBottom: 15}}/>
					{
						routerList
							.map((value, index) => {
								return (
									<ListItem className={classes.item}
												 classes={{
													 root: classes.root
												 }}
												 key={value.id}
									>
										<ListItemButton
											onClick={async (event) => {
												setSelectedButton(event.currentTarget.id)
												return router.push(value.url)
											}}
											id={index}
											style={{
												height: '50px',
												borderRadius: 4,
												margin: 0,
												width: '100%',
												paddingLeft: 5
											}}
											className={classNames({
												[classes.selectedButton]:
												selectedButton == index
											})}
										>
											<ListItemIcon
												style={{
													width: '30px',
													padding: 0,
													minWidth: '40px',
													color: 'lightgray'
												}}

											>
												<User color='inherit' fontSize={'large'}
												/>
											</ListItemIcon>
											<ListItemText
												primaryTypographyProps={{
													style: {fontSize: '120%', fontFamily: 'Inconsolata'}
												}}
												primary={value.title}
												className={classes.itemText}
												// disableTypography={true}
											/>
										</ListItemButton>
									</ListItem>
								)
							})
					}
				</List>
				<div
					className={classes.background}
					style={{
						backgroundImage: "url( background_image/depositphotos_103196520-stock-photo-backyard-cricket-bat-ball-and.jpg )",
						backgroundSize: "cover",
						backgroundPosition: "center center",
					}}
				/>
			</Drawer>
		</div>
	);
}

export default SideBar;