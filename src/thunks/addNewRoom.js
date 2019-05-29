import { isLoading, hasErrored, addRoom } from '../actions';

export const addNewRoom = (id, name, description, type) => {
  return async (dispatch) => {
    const url = "https://hometrackr.herokuapp.com//api/v1/graphql"
    try {
      dispatch(isLoading(true));
      const response = await fetch(url, {
        body: JSON.stringify({"query": `mutation { addProjectRoom (project_id: "${id}", room: {name: "${name}", description: "${description}", type: "${type}"}) {id name description type project {id}}}`}),
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      if(!response.ok) {
        throw Error(response.statusText)
      }
      const data = await response.json();
      console.log(data.data.addProjectRoom);
      dispatch(isLoading(false));
      dispatch(addRoom(data.data.addProjectRoom));
    } catch(error) {
      dispatch(hasErrored(error.message))
    }
  }
}