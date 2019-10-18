import request from 'superagent'

export const TEAMS_FETCHED = 'TEAMS_FETCHED'

const baseUrl = 'http://localhost:4000'

const teamsFetched = teams => ({
  type: TEAMS_FETCHED,
  teams
})

export const loadTeams = () => (dispatch, getState) => {
  // when the state already contains teams, we don't fetch them again
  if (getState().teams) return

  // a GET /teams request
  request(`${baseUrl}/team`)
    .then(response => {
      // dispatch an TEAMS_FETCHED action that contains the teams
      dispatch(teamsFetched(response.body))
    })
    .catch(console.error)
}