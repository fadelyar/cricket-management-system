import React from 'react';
import SideBar from "../src/components/sidebar/SideBar";
import Header from "../src/components/header/Header";
import {makeStyles} from "@material-ui/core/styles";
import {styles} from '../src/assets/jss/common-style'

const useStyle = makeStyles(styles)

function Index() {
	const classes = useStyle()
	return (
		<div>
			<SideBar selectedBar='DashBoard'/>
			<div className={classes.root}>
				<Header title='DashBoard'/>
				<div>

				</div>
			</div>
		</div>
	);
}

export default Index;