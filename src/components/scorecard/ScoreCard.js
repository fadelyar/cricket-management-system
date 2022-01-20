import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { style } from '../../assets/jss/scorecard-style'
import Typography from "@material-ui/core/Typography";
import CustomTable from "../customtable/CustomTable";

function selectProperty(obj, captain) {
	let { name } = obj['player']
	if (name === captain) {
		name = `${name}(C)`
	}
	const { score, ballFaced, fours, sixes, strikeRate } = obj
	return { name, score, ballFaced, fours, sixes, strikeRate }
}

function selectBowllerProperty(obj) {
	let { name } = obj['player']
	const { overs, scoreGiven, wkt, economyRate } = obj
	return { name, overs, scoreGiven, wkt, economyRate }
}

const useStyle = makeStyles(style)

function ScoreCard(props) {
	const classes = useStyle()
	return (
		<div className={classes.root}>
			<Typography>
				{props.label}
			</Typography>
			<CustomTable header={['Batter', 'Runs', 'Ball', '4sss', '6sss', 'SRss']}
				body={
					props.scoreCard['playerentitySet'].filter((player) => {
						// Correct here please!
						return player.ballFaced !== 0
					}).map((player) => {
						return selectProperty(player, props.captain)
					})
				}
				footer={[`Total (${props.scoreCard['overPlayed']} overs)`,
				`${props.scoreCard['total']}-${props.scoreCard['wktOut']}`]}
			/>
			<CustomTable
				header={['Bowller', 'Overs', 'Runs', 'Wickets', 'Econ']}
				body={
					props.scoreCard['playerentitySet'].filter((player) => {
						// Correct here please!
						return player.overs !== 0
					}).map((player) => {
						return selectBowllerProperty(player, props.captain)
					})
				}
			/>
		</div>
	)
}

export default ScoreCard;
