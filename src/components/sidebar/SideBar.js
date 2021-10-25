import React, {useState} from 'react';
import {
	Drawer,
	IconButton,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	useMediaQuery
} from "@material-ui/core";
import ListItemButton from "@mui/material/ListItemButton";
import classNames from "classnames";
import User from "@mui/icons-material/Facebook";
import {makeStyles, useTheme} from "@mui/styles";
import {styles} from '../../assets/jss/sidebar-style'
import MenuIcon from '@mui/icons-material/Menu'
import {useRouter} from "next/router";


const routerList = [
	{id: 'dash_board', title: 'Dash Board', url: ''},
	{id: 'profile', title: 'Profile', url: '/profile'},
	{id: 'compression', title: 'Compression', url: '/compression'},
	{id: 'history', title: 'History', url: '/history'},
	{id: 'social', title: 'Social', url: '/social'},
	{id: 'login', title: 'Login', url: '/login'},
]

const useStyle = makeStyles(styles)

function SideBar(props) {

	const classes = useStyle()
	const [open, setOpen] = useState(true)
	const [selectedButton, setSelectedButton] = useState(3)
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
					<div style={{flexGrow: 1}}/>
					<IconButton color='inherit' size='small'>
						<MenuIcon fontSize='large'/>
					</IconButton>
				</div>
				<List className={classes.list}>
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
					style={{backgroundImage: "url( sidebar-2.jpg )"}}
				/>
			</Drawer>
		</div>
	);
}

export default SideBar;