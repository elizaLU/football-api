import { TEAMS_FETCHED, TEAM_CREATE_SUCCESS } from "../actions/teams"


export default (state = [], action) => {
  switch (action.type) {
    case TEAMS_FETCHED:
      return [...state, ...action.payload]

    case TEAM_CREATE_SUCCESS:
      return [...state, { ...action.payload }]

    default:
      return state
  }
}