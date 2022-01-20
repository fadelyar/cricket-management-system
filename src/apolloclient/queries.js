import {gql} from '@apollo/client'

export const GET_PLAYER_ENTRIES = gql`
	query PLayerEntries($name: String!, $last: Int!) {
  		getPlayerEntities(name: $name, last: $last) {
  			id
    		score
    		strikeRate
    		wkt
    		fours
    		sixes
        }
        playersByName(playerName:$name){
    		name
    		id
  		}
	}
`
export const GET_ALL_MATCHES = gql`
	query Matches($offset: Int!, $limit: Int!) {
		matches(offset: $offset, limit: $limit) {
			id
			overs
			matchNumber
			createdAt
			result
			teamSet {
				  id
				  teamName
				  scorecard {
					id
					overPlayed
					total
					wktOut
				  }
    		}
  		}
	}	
`
export const GET_ALL_PLAYERS = gql`
	query Players {
		players {
			name
    		id
  		}
	}
`
export const GET_MATCH_BY_ID = gql`
	query PLayerEntries($id: String!) {
	  getMatchById(id: $id) {
		id
		overs
		matchNumber
		result
		createdAt
		teamSet {
		  id
		  captain {
			name
		  }
		  teamName
		  scorecard {
			overPlayed
			total
			wktOut
			id
			playerentitySet {
			  player {
				name
			  }
			  score
			  ballFaced
			  scoreGiven
			  overs
			  wkt
			  fours
			  sixes
			  strikeRate
			  economyRate
			}
		  }
		}
	  }
	}
`
