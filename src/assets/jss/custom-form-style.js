export const styles = function (theme) {
	return {
		root: {
			paddingLeft: theme.spacing(2)
		},
		header: (props) => {
			return {
				backgroundColor: props.color,
				width: 63,
				height: 66,
				borderRadius: 5,
				position: 'absolute',
				// left: 50,
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				color: 'white',
				zIndex: 2,
				marginTop: -10,
			}
		},
		body: {
			// backgroundColor: 'white',
			height: '100%',
			marginTop: theme.spacing(5),
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'flex-start',
			// border: '1px solid black'
		},
		typography: {
			fontFamily: 'Inconsolata'
		},
		eachDiv: {
			display: 'flex',
			alignItems: 'center',
			width: '100%',
			marginBottom: theme.spacing(6),
			transition: 'all 2s',
			[theme.breakpoints.down('sm')]: {
				width: '100%',
				flexDirection: 'column'
			}
		},
		textField: {
			marginRight: 10,
			width: '100%',
		}
	}
}