import { isLoading, hasErrored, editProject } from '../actions';

export const editRoomThunk = (id, name, type, description) => {
  return async (dispatch) => {
    const url = "https://hometrackr.herokuapp.com//api/v1/graphql"
    try {
      dispatch(isLoading(true));
      const response = await fetch(url, {
        body: JSON.stringify({
          "query": `mutation {updateRoom (room: {id: "${id}", name: "${name}", type: "${type}", description: "${description}"}) {id name type description roomMaterials{id}}}`
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
      console.log(data)
      // dispatch(editRoom(data.data.updateProject))
    } catch(error) {
      dispatch(hasErrored(error.message))
    }
  }
}