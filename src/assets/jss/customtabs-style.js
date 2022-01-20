import {headerColor} from "../colors";

export const styles = function (theme) {
	return {
		tabsRoot: {
			minHeight: "unset !important",
			overflowX: "visible",
		},
		selectedTab: {
			backgroundColor: headerColor,
			color: 'white',
			fontWeight: 'bold'
		},
		indicator: {
			display: 'none'
		},
		wrap: {
			[theme.breakpoints.down('sm')]: {
				flexDirection: 'column'
			}
		},
		card: {
			width: '80%',
			[theme.breakpoints.down('sm')]: {
				width: "98%"
			}
		}
	}
}
