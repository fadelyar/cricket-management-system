import { gql } from '@apollo/client'

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
export const LOGIN = gql`
	mutation TokenAuth($name: String!, $password: String!) {
 		tokenAuth(name: $name, password: $password) {
			token
			payload
			user {
     		 	id
				name
				firstName
				lastName
				email
				aboutMe
			}
  		}
	}
`

export const UPDATE_USER = gql`
	mutation UpdatedUser($userId: String!, $email: String, $firstName: String, $lastName: String, $aboutMe: String){
	  updateUser(userId: $userId, firstName: $firstName, lastName: $lastName, email: $email, aboutMe: $aboutMe){
   	 user {
     		 	id
				firstName
				lastName
				email
				aboutMe
    		}
  		}
	}
`
export const CREATE_USER = gql`
	mutation TokenAuth($name: String!, $password: String!, $lastName: String, $email: String) {
		registerUser(name: $name, password: $password, lastName: $lastName, email: $email) {
			user {
				id
				name
			}
		}
	}
`