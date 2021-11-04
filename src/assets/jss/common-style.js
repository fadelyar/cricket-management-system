import {drawerWidth} from "../utils";

export const styles = function (theme) {
	return {
		root: {
			// padding: 1,
			backgroundColor: '#f2f1f1',
			transition: 'margin 0.6s',
			marginLeft: 0,
			[theme.breakpoints.up('md')]: {
				marginLeft: drawerWidth,
				transition: 'margin 0.6s',
			}
		},
		profileBody: {
			display: 'flex',
			[theme.breakpoints.down('sm')]: {
				flexDirection: 'column',
				paddingRight: 50,
				paddingBottom: 20
			}
		},
		formDiv: {
			marginRight: 40,
			width: '60%',
			marginTop: 50,
			marginLeft: 20,
			backgroundColor: 'white',
			borderRadius: 10,
			paddingBottom: 10,
			[theme.breakpoints.down('sm')]: {
				width: '100%',
			}
		},
		profileDiv: {
			width: '35%',
			marginTop: 30,
			marginRight: 20,
			[theme.breakpoints.down('sm')]: {
				width: '100%',
				marginLeft: 20,
				marginTop: 50,
			}
		},
		footer: {},
		comparisonSearchDiv: {
			paddingLeft: 20,
			paddingRight: 20,
			backgroundColor: 'white',
		},
		comparisonDiv: {
			display: 'flex',
			// height: 140,
			// borderLeft: '1px solid lightgray',
			// borderRight: '1px solid lightgray',
			// borderBottom: '1px solid lightgray'
		},
		chartDiv: {
			marginTop: 5,
			// display: 'flex',
			// flexDirection: 'column'
		}
	}
}