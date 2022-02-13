import React,{useState} from 'react';
import SideBar from "../../src/components/sidebar/SideBar";
import Header from "../../src/components/header/Header";
import { styles } from '../../src/assets/jss/history-style'
import { makeStyles } from "@material-ui/core/styles";
import { GET_ALL_MATCHES } from '../../src/apolloclient/queries'
import Typography from "@material-ui/core/Typography";
import { useRouter } from "next/router";
import MatchSummary from "../../src/components/match-summary/MatchSummary";
import Button from "@material-ui/core/Button";
import { useQuery } from '@apollo/client'
import Loader from '../../src/components/Loader'


const useStyles = makeStyles(styles)


function Index(props) {
	const classes = useStyles()
	const [open, setOpen] = useState(false)
	const handleOpen = function () {
		setOpen(true)
	}
	const handleClose = function () {
		setOpen(false)
	}
	const router = useRouter()
	const { data, loading, fetchMore, error } = useQuery(GET_ALL_MATCHES, {
		variables: {
			offset: 0,
			limit: 10
		}
	})
	const handleClick = function (id) {
		return router.push(`/history/${id}`)
	}
	const handleFechMore = function () {
		fetchMore({
			variables: {
				offset: data.matches.length
			}
		})
	}
	// if (loading) return <h2>Loadling...</h2>
	return (
		<div>
			<SideBar selectedBar='History' open={open} handleClose={ handleClose}/>
			<div className={classes.root}>
				<Header title='History' openDrawer={ handleOpen}/>
				<div className={classes.bodyDiv}>
					{
						loading ? <Loader open={loading} />
							:
							<>
								<div className={classes.matchesHeader}>
									<Typography variant='body1'>
										Baghe-Dawood Friendly Matches
									</Typography>
								</div>
								<div className={classes.matchesDiv}>
									{
										data && data.matches.map((match, index, arr) => {
											return (
												<MatchSummary handleClick={handleClick} match={match}
													index={index} arr={arr} key={match.id }/>
											)
										})
									}
								</div>
								<Button variant='contained' className={classes.button}
									disableElevation
									classes={{
										label: classes.buttonLabel
									}}
									onClick={handleFechMore}
								>
									Load More...
								</Button>
							</>
					}
				</div>
			</div>
		</div>
	)
}

export default Index;