import {hexToRgb} from '../utils'
import {blackColor, successColor, whiteColor} from '../colors'


export const styles = function (theme) {
	return {
		drawerPaper: {
			border: 'none',
			position: 'fixed',
			top: 0,
			bottom: 0,
			left: 0,
			zIndex: 1,
			width: 260,
			boxShadow:
				"0 10px 30px -12px rgba(" +
				hexToRgb(blackColor) +
				", 0.42), 0 4px 25px 0px rgba(" +
				hexToRgb(blackColor) +
				", 0.12), 0 8px 10px -5px rgba(" +
				hexToRgb(blackColor) +
				", 0.2)",
		},
		background: {
			position: "absolute",
			zIndex: "1",
			height: "100%",
			width: "100%",
			display: "block",
			top: "0",
			left: "0",
			backgroundSize: "cover",
			backgroundPosition: "center center",
			"&:after": {
				position: "absolute",
				zIndex: "3",
				width: "100%",
				height: "100%",
				content: '""',
				display: "block",
				background: 'black',
				opacity: ".8",
			},
		},
		list: {
			marginTop: theme.spacing(2),
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

			// "&:hover,&:focus,&:visited,&": {
			// 	color: scale: 1,
			// },
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
			backgroundColor: successColor[2],
			"&:hover,&:focus,&:visited,&": {
				backgroundColor: successColor[2],
			},
		},
		header: {
			zIndex: 2,
			color: 'white',
			// border: '1px solid white',
			display: 'flex',
			// padding: theme.spacing(1),
			// border: '1px solid white',
		}
	}
}