import React from "react";
import { initializeApollo } from '../../src/apolloclient/apolloClient'
import { GET_MATCH_BY_ID } from "../../src/apolloclient/queries";
import { styles } from '../../src/assets/jss/history-style'
import makeStyles from "@material-ui/core/styles/makeStyles";
import Typography from "@material-ui/core/Typography";
import CustomTab from "../../src/components/customtab/CustomTab";
import ScoreCard from "../../src/components/scorecard/ScoreCard";
import { List, ListItem, ListItemText, Paper } from "@material-ui/core";
// import {TabPanel} from "@material-ui/lab";

const useStyles = makeStyles(styles)

export default function MatchDetails(props) {
	const classes = useStyles()
	const [value, setValue] = React.useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};
	return (
		<div style={{ padding: 5 }}>
			<div style={{ marginTop: 20 }}>
				<div className={classes.background} style={{
					backgroundImage: 'url( /background_image/login.jpg )'
				}} />
				<div className={classes.eachDiv}>
					<div className={classes.eachMatchHeader}>
						<div className={classes.teamNameDiv} style={{
							textAlign: 'right'
						}}>
							<Typography className={classes.teamNameTypography}>
								{props.data['getMatchById']['teamSet'][0]['teamName']}
							</Typography>
						</div>
						<div style={{
							background: 'yellow',
							padding: 2,
							borderRadius: 3
						}}>
							<Typography variant='caption'>
								Result
							</Typography>
						</div>
						<div className={classes.teamNameDiv}>
							<Typography className={classes.teamNameTypography}>
								{props.data['getMatchById']['teamSet'][1]['teamName']}
							</Typography>
						</div>
					</div>
					<div className={classes.eachMatchHeader}>
						<div className={classes.teamNameDiv} style={{
							textAlign: 'right'
						}}>
							<Typography style={{ color: 'lightgray' }}>
								{
									props.data['getMatchById']['teamSet'][0]['scorecard']['total']
								}
								-
								{
									props.data['getMatchById']['teamSet'][0]['scorecard']['wktOut']
								}
								(
								{
									props.data['getMatchById']['teamSet'][0]['scorecard']['overPlayed']
								}
								)
							</Typography>
						</div>
						<div style={{ width: 40 }} />
						<div className={classes.teamNameDiv}>
							<Typography style={{ color: 'lightgray' }}>
								{
									props.data['getMatchById']['teamSet'][1]['scorecard']['total']
								}
								-
								{
									props.data['getMatchById']['teamSet'][1]['scorecard']['wktOut']
								}
								(
								{
									props.data['getMatchById']['teamSet'][1]['scorecard']['overPlayed']
								}
								)
							</Typography>
						</div>
					</div>
					<Typography variant='caption' className={classes.teamNameTypography}>
						{props.data['getMatchById']['result']}
					</Typography>
				</div>
			</div>
			<div className={classes.tabsDiv}>
				<CustomTab tabs={
					props.data['getMatchById']['teamSet'].map(team => {
						return {
							label: team['teamName'],
							content: <ScoreCard label={team['teamName']}
								scoreCard={team['scorecard']}
								captain={team.captain.name}
							/>
						}
					})
				} />
			</div>
			<div className={classes.squadDiv}>
				<Paper style={{ display: 'flex', width: '80%', gap: 20, padding: 10 }}>
					<List style={{ width: '50%' }}>
						<ListItem>
							<ListItemText>
								<Typography style={{ fontWeight: 'bold' }}>
									{props.data.getMatchById.teamSet[0].teamName}
								</Typography>
							</ListItemText>
						</ListItem>
						{
							props.data.getMatchById.teamSet[0].scorecard.playerentitySet
								.map((player) => {
									return <ListItem style={{
										borderBottom: '1px solid lightgray',
									}}>
										<ListItemText>
											<Typography variant="button" style={{
												fontFamily: 'Inconsolata',
												fontSize: '110%'
											}}>
												{player.player.name}
											</Typography>
										</ListItemText>
									</ListItem>
								})
						}
					</List>
					<List style={{ width: '50%' }}>
						<ListItem>
							<ListItemText>
								<Typography style={{ fontWeight: 'bold' }}>
									{props.data.getMatchById.teamSet[1].teamName}
								</Typography>
							</ListItemText>
						</ListItem>
						{
							props.data.getMatchById.teamSet[1].scorecard.playerentitySet
								.map((player) => {
									return <ListItem style={{ borderBottom: '1px solid lightgray' }}>
										<ListItemText>
											<Typography variant="button" style={{
												fontFamily: 'Inconsolata',
												fontSize: '110%'
											}}>
												{player.player.name}
											</Typography>
										</ListItemText>
									</ListItem>
								})
						}
					</List>
				</Paper>
			</div>
		</div>
	)
}

export async function getServerSideProps(context) {
	const { id } = context.query
	const apollo = initializeApollo()
	const { data, error } = await apollo.query({
		query: GET_MATCH_BY_ID,
		variables: {
			id: id
		}
	})

	return {
		props: {
			data
		}
	}
}
