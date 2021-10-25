import {roseColor} from '../colors'

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
		formDiv: {
			opacity: 0.4,
			height: '500px',
			width: '350px',
			zIndex: 2,
			display: 'flex',
			// justifyContent: 'center',
			alignItems: 'center',
			flexDirection: 'column'
		},
		formHeader: {
			backgroundColor: roseColor[3],
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
			borderRadius: 5
		}
	}
}