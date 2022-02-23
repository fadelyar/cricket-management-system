import React, { useState } from 'react';
import {
	Drawer,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	useMediaQuery
} from "@material-ui/core";
import classNames from "classnames";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { styles } from '../../assets/jss/sidebar-style'
import { useRouter } from "next/router";
import Avatar from "@material-ui/core/Avatar";


const routerList = [
	{
		id: 'dash_board',
		title: 'DashBoard',
		url: '/',
		icon: '/sidebar-icons/icons8-dashboard-48.png'
	},
	{
		id: 'profile',
		title: 'Profile',
		url: '/profile',
		icon: '/sidebar-icons/icons8-user-male-100.png'
	},
	{
		id: 'comparison',
		title: 'Comparison',
		url: '/comparison',
		icon: '/sidebar-icons/icons8-comparison-64.png'
	},
	{
		id: 'history',
		title: 'History',
		url: '/history',
		icon: '/sidebar-icons/icons8-activity-history-100.png'
	},
	{
		id: 'login',
		title: 'Login',
		url: '/login',
		icon: '/sidebar-icons/icons8-login-128.png'
	},
]

const useStyle = makeStyles(styles)

function SideBar(props) {

	const classes = useStyle()
	const [selectedButton, setSelectedButton] = useState(0)
	const theme = useTheme()
	const query = useMediaQuery(theme.breakpoints.down('sm'))
	const router = useRouter()

	return (
		<Drawer
			transitionDuration={500}
			// hidden={!query}
			variant={query ? 'temporary' : 'persistent'}
			anchor={"left"}
			open={!query ? true : props.open}
			classes={{
				paper: classes.drawerPaper
			}}
			onClose={props.handleClose}
			ModalProps={{
				keepMounted: true, // Better open performance on mobile.
			}}
		>
			<div className={classes.header}>
				<Avatar src='background_image/logo.jpg' style={{ width: 45, height: 40 }} />
				<div style={{ flexGrow: 1 }} />
			</div>
			<List className={classes.list}>
				{
					routerList
						.map((value, index) => {
							return (
								<ListItem className={classes.item}
									// classes={{
									//   root: classes.root
									// }}
									style={{
										cursor: 'pointer'
									}}
									key={value.id}
								>
									<div
										onClick={async (event) => {
											setSelectedButton(event.currentTarget.id)
											return router.push(value.url)
										}}
										id={index}
										style={{
											display: 'flex',
											alignItems: 'center',
											height: '50px',
											borderRadius: 4,
											margin: 0,
											width: '100%',
											paddingLeft: 5
										}}
										className={classNames({
											[classes.selectedButton]:
												value.title === props.selectedBar
										})}
									>
										<ListItemIcon
											style={{
												width: '30px',
												padding: 0,
												minWidth: '40px',
												marginRight: 10,
												color: 'lightgray'
											}}

										>
											<img src={value.icon}
												style={{
													width: '30px',
													height: '30px',
												}}
												alt="" />
										</ListItemIcon>
										<ListItemText
											primaryTypographyProps={{
												style: {
													fontSize: '120%',
													fontFamily: 'Zen Kurenaido',
													fontWeight: 'bold'
												}
											}}
											primary={value.title}
											className={classes.itemText}
										/>
									</div>
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
	);
}

export default SideBar;