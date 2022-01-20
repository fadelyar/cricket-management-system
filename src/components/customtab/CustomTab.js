import React from 'react';
import Card from "@material-ui/core/Card";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import CardContent from "@material-ui/core/CardContent";
import {styles} from '../../assets/jss/customtabs-style'
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(styles)

function CustomTab({tabs, ...props}) {
	const [value, setValue] = React.useState(0);
	const handleChange = (event, value) => {
		setValue(value);
	};
	const classes = useStyles()
	return (
		<Card className={classes.card}>
			<Tabs value={value} onChange={handleChange} className={classes.tabsRoot}
				  variant='fullWidth'
				  classes={{
					  indicator: classes.indicator,
					  flexContainer: classes.wrap
				  }}
			>
				{
					tabs.map((tab, key) => {
						return (
							<Tab
								classes={{
									selected: classes.selectedTab,
								}}
								className={classes.tab}
								textColor='primary'
								key={key}
								label={tab.label}/>
						)
					})
				}
			</Tabs>
			<CardContent>
				{tabs.map((tab, key) => {
					if (key === value) {
						return <div key={key}>{tab.content}</div>;
					}
					return null;
				})}
			</CardContent>
		</Card>
	)
}

export default CustomTab;
