import {drawerWidth, hexToRgb} from '../utils'
import {blackColor, headerColor, whiteColor} from '../colors'

export const styles = function (theme) {
	return {
		drawerPaper: {
			border: 'none',
			position: 'fixed',
			top: 0,
			bottom: 0,
			left: 0,
			zIndex: 1,
			width: drawerWidth,
			// boxShadow:
			// 	"0 10px 30px -12px rgba(" +
			// 	hexToRgb(blackColor) +
			// 	", 0.42), 0 4px 25px 0px rgba(" +
			// 	hexToRgb(blackColor) +
			// 	", 0.12), 0 8px 10px -5px rgba(" +
			// 	hexToRgb(blackColor) +
			// 	", 0.2)",
		},
		background: {
			position: "fixed",
			zIndex: "1",
			height: "100%",
			width: drawerWidth,
			display: "block",
			top: "0",
			left: "0",
			backgroundSize: "cover",
			backgroundPosition: "center center",
			"&:after": {
				position: "fixed",
				zIndex: "3",
				width: drawerWidth,
				height: "100%",
				content: '""',
				display: "block",
				background: 'black',
				opacity: ".8",
			},
		},
		list: {
			marginTop: theme.spacing(1.15),
			paddingLeft: "0",
			paddingTop: "0",
			paddingBottom: "0",
			marginBottom: "0",
			listStyle: "none",
			position: "unset",
			zIndex: 2
		},
		item: {
			position: "relative",
			display: "block",
			textDecoration: "none",
			margin: 0,
			height: 'auto',
			padding: 7,
		},
		itemText: {
			margin: "0",
			lineHeight: "30px",
			fontSize: "14px",
			color: 'white',
			fontFamily: ''
		},
		itemIcon: {
			width: "24px",
			height: "30px",
			fontSize: "24px",
			lineHeight: "30px",
			float: "left",
			marginRight: "15px",
			textAlign: "center",
			verticalAlign: "middle",
			color: "rgba(" + hexToRgb(whiteColor) + ", 0.8)",
		},
		selectedButton: {
			backgroundColor: headerColor,
			"&:hover,&:focus,&:visited,&": {
				backgroundColor: headerColor,
			},
		},
		header: {
			zIndex: 2,
			height: 53,
			color: 'white',
			display: 'flex',
			justifyContent: 'center',
			backgroundColor: headerColor,
			padding: '10px 5px 5px 8px',
			alignItems: 'center',
		}
	}
}