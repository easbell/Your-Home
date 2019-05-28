import { isLoading, hasErrored, setMaterials } from '../actions';


export const fetchRoomMaterials = (id) => {
  return async (dispatch) => {
    const url = "https://hometrackr.herokuapp.com//api/v1/graphql"
    try {
      dispatch(isLoading(true));
      const response = await fetch(url, {
        body: JSON.stringify({
          "query": `query { getRoomsMaterials(room_id: ${id})}`
          }),
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      if(!response.ok) {
        throw Error(response.statusText)
      }
      const data = await response.json()
      dispatch(isLoading(false))
      dispatch(setMaterials(data.data.getRoomsMaterials))
    } catch(error) {
      dispatch(hasErrored(error.message))
    }
  }
}