import React, { useEffect, useState } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import SideBar from "../src/components/sidebar/SideBar";
import { styles } from '../src/assets/jss/common-style'
import Header from "../src/components/header/Header";
import Button from "@material-ui/core/Button";
import Autocomplete from '@material-ui/lab/Autocomplete'
import TextField from '@material-ui/core/TextField'
import { arrayColor, findUniqueElement, selectCorrectColor } from "../src/assets/utils";
import { Line } from 'react-chartjs-2'
import CloseIcon from '@material-ui/icons/Close'
import { useApolloClient, useLazyQuery, useQuery } from "@apollo/client";
import { GET_ALL_PLAYERS, GET_PLAYER_ENTRIES } from '../src/apolloclient/queries'

const useStyles = makeStyles(styles)

function Comparison(props) {
	const classes = useStyles()
	const [open, setOpen] = useState(false)
	const handleOpen = function () {
		setOpen(true)
	}
	const handleDrawer = function () {
		setOpen(false)
	}
	const [searchFields, setSearchFields] = useState([])
	const [searchFieldsValue, setSearchFieldsValue] = useState({})
	const [colors, setColors] = useState([])
	const [chartType, setChartType] = useState('line')
	const [show, setShow] = useState(false)
	const [lastMatches, setLastMatches] = useState('10 matches')
	const [role, setRole] = useState('score')
	const apollo = useApolloClient()
	const [chartData, setChartData] = useState({
		labels: ['M#1', 'M#2', 'M#3', 'M#4', 'M#5', 'M#5', 'M#6', 'M#7', 'M#8', 'M#9', 'M#10'],
		datasets: []
	})
	const { data: playerNamesData = [], loading, error: s } = useQuery(GET_ALL_PLAYERS)
	const [getPLayerEntry, { data, error, refetch }] = useLazyQuery(GET_PLAYER_ENTRIES)
	useEffect(() => {
		setShow(searchFields.length > 0)
	}, [searchFields])
	useEffect(() => {
		if (data) {
			setChartData((prev) => {
				return {
					...prev, datasets: prev.datasets.concat({
						label: data['playersByName']['name'],
						data: data['getPlayerEntities'].map((score) => {
							return score[role]
						}),
						fill: false,
						borderColor: colors[colors.length - 1],
						tension: 0.3,
						borderWidth: 2
					})
				}
			})
		}
	}, [data])
	useEffect(() => {
		Object.values(searchFieldsValue).forEach((name, index) => {
			if (name && name.length > 0) {
				const data = apollo.readQuery({
					query: GET_PLAYER_ENTRIES,
					variables: {
						name: name,
						last: parseInt(lastMatches.split(' ')[0])
					}
				})
				if (data) {
					setChartData((prev) => {
						return {
							...prev, datasets: prev.datasets.concat({
								label: data['playersByName']['name'],
								data: data['getPlayerEntities']
									.map((score) => {
										return score[role]
									}),
								fill: false,
								borderColor: colors[index],
								tension: 0.1,
								borderWidth: 2
							})
						}
					})
				}
			}
		})
	}, [role])
	const handleAdd = function () {
		const value = Date.now()
		setSearchFields(prevState => {
			return [...prevState, {
				id: String(value),
				color: selectCorrectColor(colors, arrayColor)
			}]
		})
		setSearchFieldsValue((prev) => {
			return { ...prev, [String(value)]: '' }
		})
		setColors((prev) => {
			return [...prev, selectCorrectColor(colors, arrayColor)]
		})
	}
	const handleClose = function (arrayItem, playerName) {
		setSearchFields(prevState => {
			return prevState.filter((item) => {
				return item.id !== arrayItem.id
			})
		})
		setColors(prevState => {
			return prevState.filter((color) => {
				return color !== arrayItem.color
			})
		})
		setSearchFieldsValue((prev) => {
			return { ...prev, [arrayItem.id]: null }
		})
		handleClosePlayer(playerName)
	}
	const handleChange = function (event, newValue, id) {
		if (newValue === null || newValue.trim().length === 0) {
			return
		}
		if (searchFieldsValue[id].length > 0) {
			setChartData((prev) => {
				return {
					...prev, datasets: prev.datasets.filter((en) => {
						return en.label !== searchFieldsValue[id]
					})
				}
			})
		}

		setSearchFieldsValue((prev) => {
			return { ...prev, [String(id)]: newValue }
		})
		getPLayerEntry({
			variables: {
				name: newValue,
				last: parseInt(lastMatches.split(' ')[0])
			}
		})
	}
	const handleClosePlayer = function (playerName) {
		setChartData((prev) => {
			return {
				...prev, datasets: prev.datasets.filter((en) => {
					return en.label !== playerName
				})
			}
		})
	}
	// if (loading) return <h2>Loading</h2>
	// if (error) return <h2>{JSON.stringify(error)}</h2>
	// if (entityError) return <h2>{JSON.stringify(entityError)}</h2>
	return (<div>
		<SideBar selectedBar='Comparison' open={open} handleClose={handleDrawer} />
		<div className={classes.root}>
			<Header title='Comparison' openDrawer={handleOpen} />
			<div className={classes.comparisonSearchDiv}>
				<div className={classes.comparisonDiv}>
					{searchFields.map((value, index) => {
						return (<div key={index} style={{
							height: '100%', width: 270, display: 'flex', flexDirection: 'column',
							justifyContent: 'flex-start', // alignItems: 'center'
						}}>
							<CloseIcon fontSize='small'
								style={{
									position: 'absolute',
									cursor: 'pointer',
									zIndex: 2,
									color: 'white'
								}}
								onClick={() => {
									handleClose(value, searchFieldsValue[value.id])
								}}
							/>
							<div style={{
								height: 18, width: '100%', backgroundColor: value.color
							}} />
							<Autocomplete
								size='small'
								fullWidth
								value={searchFieldsValue[String(value.id)]}
								onChange={(event, newValue) => {
									handleChange(event, newValue, value.id)
								}}
								id={'kjkk'}
								options={findUniqueElement(
									playerNamesData['players'].map((player) => {
										return player.name
									}), Object.values(searchFieldsValue)
								)}
								renderInput={(params) => {
									return (<TextField {...params} disabled variant='outlined' />)
								}}
							/>
						</div>)
					})}
					<Button style={{ flexGrow: 1 }} variant='contained'
						color='inherit'
						onClick={handleAdd}
						disabled={searchFields.length === 5 ||
							Object.values(searchFieldsValue).includes('')}
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
							value={lastMatches}
							onChange={(event, newValue) => {
								setChartData((prev) => {
									return { ...prev, datasets: [] }
								})
								setLastMatches(newValue)
								setSearchFields([])
								setSearchFieldsValue({})
								setColors([])
							}}
							id="free-solo-demo"
							options={['10 matches', '30 matches', '50 matches']}
							renderInput={(params) => {
								return (<TextField {...params}
									label='Matches(Last)' variant='outlined' />)
							}}
						/>
						<Autocomplete
							fullWidth
							size='small'
							// fullWidth
							id="free-"
							value={role}
							onChange={(event, newValue) => {
								setChartData((prev) => {
									return { ...prev, datasets: [] }
								})
								setRole(newValue)
							}}
							options={['score', 'strikeRate', 'wkt', 'sixes', 'fours']}
							renderInput={(params) => {
								return (<TextField {...params}
									label='Role' variant='outlined' />)
							}}
						/>
						<Autocomplete
							fullWidth
							size='small'
							value={chartType}
							onChange={(event, newValue) => {
								setChartType(newValue)
							}}
							id="free-solo-demo"
							options={['line', 'bar']}
							renderInput={(params) => {
								return (<TextField {...params}
									label='Graph Type' variant='outlined' />)
							}}
						/>
					</div>
					<Line type={"line"} data={chartData} />
				</div>
			</div>
		</div>
	</div>)
}

export default Comparison