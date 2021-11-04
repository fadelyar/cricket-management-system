import {headerColor} from "../colors";

const styles = function (theme) {
	return {
		toolBar: {
			display: 'flex',
			alignItems: 'center',
			backgroundColor: headerColor,
			paddingLeft: 15,
			paddingRight: 5,
		},
		typography: {
			fontFamily: 'Inconsolata',
			color: 'gray'
		},
		hideTypo: {
			fontFamily: 'Inconsolata',
			color: 'white',
			[theme.breakpoints.down('xs')]: {
				display: 'none'
			}
		},
		leftSideDiv: {
			display: 'flex',
			alignItems: 'center',
			[theme.breakpoints.down('xs')]: {
				width: '100%'
			}
		},
		searchDiv: {
			display: 'flex',
			border: '1px solid lightgray',
			borderRadius: 10,
			alignItems: 'center',
			width: 220,
			paddingLeft: 5,
			color: 'white',
			height: 32,
			transition: 'all 1s',
			[theme.breakpoints.down('xs')]: {
				width: '100%'
			}
		},
		divGrow: {
			flexGrow: 1,
		},
		notiDiv: {
			display: 'flex',
			alignItems: 'center',
			color: 'white',
			[theme.breakpoints.down('xs')]: {
				display: 'none'
			}
		}
	}
}

export default styles