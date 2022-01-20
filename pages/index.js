import React, { useState } from 'react';
import SideBar from "../src/components/sidebar/SideBar";
import Header from "../src/components/header/Header";
import { makeStyles } from "@material-ui/core/styles";
import { styles } from '../src/assets/jss/common-style'
import SlideShow from '../src/components/slideshow';

const useStyle = makeStyles(styles)


function Index() {
	const classes = useStyle()
	const [open, setOpen] = useState(false)
	const handleOpen = function () {
		setOpen(true)
	}
	const handleClose = function () {
		setOpen(false)
	}
	return (
		<div>
			<SideBar selectedBar='DashBoard' open={open} handleClose={handleClose} />
			<div className={classes.root}>
				<Header title='DashBoard' openDrawer={handleOpen} disabled/>
				<div>
				</div>
			</div>
		</div>
	);
}

export default Index;