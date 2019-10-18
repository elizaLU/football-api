const eventsFetched = (state = null, action = {}) => {
  switch (action.type) {
    case 'EVENTS_FETCHED':
      return [...action.payload]
    default:
      return state
  }
}



export default eventsFetched