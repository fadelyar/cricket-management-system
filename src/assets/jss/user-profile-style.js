export const styles = function (theme) {
	return {
		root: {
			display: 'flex',
			flexDirection: 'column',
			// height: '100%'
		},
		avatar: {
			width: 130,
			height: 130,
			position: 'absolute',
			marginTop: -20,
		},
		profileBody: {
			backgroundColor: 'white',
			// width: 340,
			display: 'flex',
			flexDirection: 'column',
			height: '100%',
			marginTop: theme.spacing(2.5),
			borderRadius: 5,
			paddingTop: theme.spacing(12.5),
			alignItems: 'center',
			padding: 20
		},
		typography: {
			fontFamily: 'Inconsolata'
		}
	}
}