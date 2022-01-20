import {drawerWidth} from "../utils";
import {headerColor} from "../colors";

export const styles = function (theme) {
	return {
		root: {
			// padding: 1,
			backgroundColor: '#f2f1f1',
			// height: '100vh',
			transition: 'margin 0.6s',
			marginLeft: 0,
			[theme.breakpoints.up('md')]: {
				marginLeft: drawerWidth,
				transition: 'margin 0.6s',
			}
		},
		bodyDiv: {
			paddingTop: 20,
			paddingLeft: 20,
			paddingRight: 20,
			display: 'flex',
			justifyContent: 'center',
			backgroundColor: 'white',
			flexDirection: 'column'
		},
		matchesDiv: {
			display: 'flex',
			marginTop: 20,
			justifyContent: 'center',
			flexDirection: 'column'
		},
		matchesHeader: {
			backgroundColor: headerColor,
			padding: 5,
			color: 'white',
			borderRadius: 3
		},
		eachDiv: {
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
			zIndex: 100,
			position: 'relative',
			padding: 5,
			marginBottom: theme.spacing(2)
		},
		eachMatchHeader: {
			display: 'flex',
			width: '100%',
			justifyContent: 'center',
			alignItems: 'center',
			gap: 10
		},
		teamNameDiv: {
			// flexGrow: 1,
			width: '45%',
			// border: '1px solid green'
		},
		bodyTypography: {
			color: 'gray'
		},
		dateDiv: {
			backgroundColor: 'gray',
			color: 'white',
			borderRadius: 3,
			width: '100%',
			textAlign: 'center',
			marginBottom: 10,
		},
		button: {
			backgroundColor: headerColor,
			color: 'white'
		},
		buttonLabel: {
			textTransform: 'capitalize'
		},
		background: {
			position: "absolute",
			zIndex: "1",
			height: '140px',
			width: "100%",
			display: "block",
			top: "0",
			left: "0",
			"&:after": {
				position: "absolute",
				zIndex: "3",
				width: "100%",
				height: "100%",
				content: '""',
				display: "block",
				background: 'black',
				opacity: ".4",
			},
		},
		teamNameTypography: {
			color: 'white',
			fontWeight: 'bold'
		},
		tabsDiv: {
			marginTop: 60,
			display: 'flex',
			justifyContent: 'center'
		},
		selectedTab: {
			backgroundColor: 'red'
		},
		squadDiv: {
			marginTop: 30,
			display: 'flex',
			justifyContent: 'center'
		},
		hover: {
			cursor: 'pointer',
			'&:hover': {
				opacity: 0.8
			}
		}
	}
}
