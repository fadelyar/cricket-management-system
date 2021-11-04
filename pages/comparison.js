import React, {useEffect, useState} from 'react';
import {makeStyles} from "@material-ui/core/styles";
import SideBar from "../src/components/sidebar/SideBar";
import {styles} from '../src/assets/jss/common-style'
import Header from "../src/components/header/Header";
import Button from "@mui/material/Button";
import {Autocomplete, TextField} from "@mui/material";
import {arrayColor} from "../src/assets/utils";
import {Line} from 'react-chartjs-2'
import CloseIcon from '@mui/icons-material/Close'

const useStyles = makeStyles(styles)

const labels = ['M#1', 'M#2', 'M#3', 'M#4', 'M#5', 'M#5', 'M#6', 'M#7', 'M#8', 'M#9']

const data = {
	labels: labels,
	datasets: [
		{
			label: 'Faisal',
			data: [65, 59, 80, 81, 56, 55, 40, 89, 67, 45, 20],
			fill: false,
			borderColor: arrayColor[0],
			tension: 0.1,
			borderWidth: 2,
			// borderRadius: 10
		},
		{
			label: 'Ahmad',
			data: [56, 23, 34, 100, 34, 12, 39, 77],
			fill: false,
			borderColor: arrayColor[1],
			tension: 0.1,
			borderWidth: 2

		},
		{
			label: 'Abid',
			data: [23, 30, 28, 12, 10, 30, 28, 27],
			fill: false,
			borderColor: arrayColor[2],
			tension: 0.1,
			borderWidth: 2
		}
	]
}

function Comparison(props) {
	const classes = useStyles()
	const [items, setItems] = useState([])
	const [colors, setColors] = useState(arrayColor)
	const [selectChart, setSelectChart] = useState('line')
	const [show, setShow] = useState(false)
	useEffect(() => {
		setShow(items.length > 0)
	}, [items])
	const handleAdd = function () {
		// if (item.length === 3) return
		// setColors(prevState => {
		// 	return prevState.filter((item, index) => {
		//
		// 	})
		// })
		setItems(prevState => {
			const value = Date.now()
			console.log(value)
			return [...prevState, {id: value, color: colors[0]}]
		})
		setColors(colors.slice(1))
	}
	const handleClose = function (arrayItem) {
		setItems(prevState => {
			return prevState.filter((item, index) => {
				return item.id !== arrayItem.id
			})
		})
		setColors(prevState => {
			return [...prevState, arrayItem.color]
		})
	}
	return (
		<div>
			<SideBar selectedBar='Comparison'/>
			<div className={classes.root}>
				<Header title='Comparison'/>
				<div className={classes.comparisonSearchDiv}>
					<div className={classes.comparisonDiv}>
						{
							items.map((value, index) => {
								return (
									<div key={index} style={{
										height: '100%',
										width: 270,
										display: 'flex',
										flexDirection: 'column',
										// border: '1px solid lightgray',
										justifyContent: 'flex-start',
										// alignItems: 'center'
									}}>
										<CloseIcon fontSize='small'
													  style={{
														  position: 'absolute',
														  cursor: 'pointer',
														  zIndex: 2,
														  color: 'white'
													  }}
													  onClick={() => {
														  handleClose(value)
													  }}
										/>
										<div style={{
											height: 18,
											width: '100%',
											backgroundColor: value.color
										}}/>
										<Autocomplete
											size='small'
											fullWidth
											id="free-solo-demo"
											disablePortal
											options={['faisal', 'adelyar'].map((item) =>
												item.toUpperCase())}
											renderInput={(params) => {
												return (
													<TextField {...params}/>
												)
											}}
										/>
									</div>
								)
							})
						}
						<Button style={{flexGrow: 1}} variant='contained'
								  color='inherit'
								  onClick={handleAdd}
								  disabled={items.length === 5}
						>
							Add
						</Button>
					</div>
					<div hidden={!show} className={classes.chartDiv}>
						<div style={{
							// height: '50px',
							// backgroundColor: 'lightgray',
							display: 'flex',
							justifyContent: 'space-between',
							paddingTop: 10,
							paddingLeft: 33,
							paddingRight: 14
						}}>
							<Autocomplete
								fullWidth
								size='small'
								// fullWidth
								id="free-solo-demo"
								disablePortal
								options={['last 10 matches', 'last 25 matches'].map((item) =>
									item.toUpperCase())}
								renderInput={(params) => {
									return (
										<TextField {...params} label='Matches'/>
									)
								}}
							/>
							<Autocomplete
								fullWidth
								size='small'
								// fullWidth
								id="free-solo-demo"
								disablePortal
								options={['Batting', 'Bowling'].map((item) =>
									item.toUpperCase())}
								renderInput={(params) => {
									return (
										<TextField {...params} label='Role'/>
									)
								}}
							/>
							<Autocomplete
								fullWidth
								size='small'
								// fullWidth
								id="free-solo-demo"
								disablePortal
								options={['Line', 'Bar'].map((item) =>
									item.toUpperCase())}
								renderInput={(params) => {
									return (
										<TextField {...params} label='Graph Type'/>
									)
								}}
							/>
						</div>
						<Line type={"line"} data={data}/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Comparison