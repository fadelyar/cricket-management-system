import {headerColor, roseColor} from '../colors'

export const loginPage = function (theme) {
	return {
		root: {
			display: 'flex',
			justifyContent: 'center',
			[theme.breakpoints.down('sm')]: {
				padding: 10
			}
		},
		background: {
			position: "fixed",
			zIndex: "1",
			height: "100%",
			width: "100%",
			display: "block",
			top: "0",
			left: "0",
			backgroundSize: "cover",
			backgroundPosition: "center center",
			"&:after": {
				position: "fixed",
				zIndex: "3",
				width: "100%",
				height: "100%",
				content: '""',
				display: "block",
				background: 'black',
				opacity: ".8",
			},
		},
		formDiv: {
			opacity: 0.4,
			height: '470px',
			width: '370px',
			zIndex: 2,
			display: 'flex',
			// justifyContent: 'center',
			alignItems: 'center',
			flexDirection: 'column'
		},
		formHeader: {
			backgroundColor: headerColor,
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			height: '120px',
			width: '90%',
			borderRadius: 10,
			color: 'white',
			position: 'absolute'
		},
		formBody: {
			flexGrow: 1,
			width: '100%',
			backgroundColor: 'white',
			borderRadius: 5,
			padding: theme.spacing(2)
		},
		inputDiv: {
			// border: '1px solid black',
			marginBottom: theme.spacing(5),
			display: 'flex',
			color: 'gray',
			flexDirection: 'row-reverse'
		},
		icon: {
			position: 'absolute'
		}
	}
}