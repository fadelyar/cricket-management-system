import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles'
import { styles } from '../../assets/jss/history-style'
import Typography from "@material-ui/core/Typography";
import { isShowBorder } from '../../assets/utils'
import Divider from "@material-ui/core/Divider";
import className from 'classnames'

const useStyles = makeStyles(styles)

function MatchSummary({ match, index, arr, ...props }) {
	const classes = useStyles()
	return (
		<div className={className({
			[classes.eachDiv]: true,
			[classes.hover]: true
		})} onClick={() => props.handleClick(match.id)}>
			{
				index === 0 ?
					<div className={classes.dateDiv}>
						<Typography>
							{new Date(match['createdAt']).toLocaleDateString()}
						</Typography>
					</div> :
					isShowBorder(match['createdAt'], arr[index - 1]['createdAt']) ?
						<div className={classes.dateDiv}>
							<Typography>
								{new Date(match['createdAt']).toLocaleDateString()}
							</Typography>
						</div> :
						null
			}
			<div className={classes.eachMatchHeader}>
				<div className={classes.teamNameDiv} style={{
					textAlign: 'right'
				}}>
					<Typography style={{ color: props.contentColor }}>
						{match['teamSet'][0]['teamName']}
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
					<Typography style={{ color: props.contentColor }}>
						{match['teamSet'][1]['teamName']}
					</Typography>
				</div>
			</div>
			<div className={classes.eachMatchHeader}>
				<div className={classes.teamNameDiv} style={{
					textAlign: 'right'
				}}>
					<Typography className={classes.bodyTypography}>
						{
							match['teamSet'][0]['scorecard']['total']
						}
						-
						{
							match['teamSet'][0]['scorecard']['wktOut']
						}
						(
						{
							match['teamSet'][0]['scorecard']['overPlayed']
						}
						)
					</Typography>
				</div>
				<div style={{ width: 40 }} />
				<div className={classes.teamNameDiv}>
					<Typography className={classes.bodyTypography}>
						{
							match['teamSet'][1]['scorecard']['total']
						}
						-
						{
							match['teamSet'][1]['scorecard']['wktOut']
						}
						(
						{
							match['teamSet'][1]['scorecard']['overPlayed']
						}
						)
					</Typography>
				</div>
			</div>
			<div>
				<Typography variant='caption' style={{ color: props.contentColor }}>
					{match['result']}
				</Typography>
			</div>
			{
				index < arr.length - 1 && !isShowBorder(match['createdAt'], arr[index + 1]['createdAt']) ?
					<Divider style={{ width: '100%', marginTop: 5 }} /> :
					null
			}
		</div>
	);
}

export default MatchSummary;