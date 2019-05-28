
import { isLoading, hasErrored, addProject } from '../actions';

export const addNewProject = (body) => {
  return async (dispatch) => {
    const url = "https://hometrackr.herokuapp.com//api/v1/graphql"
    try {
      dispatch(isLoading(true));
      const response = await fetch(url, {
        body: JSON.stringify(body),
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
      dispatch(addProject(data.data.createProject))
    } catch(error) {
      dispatch(hasErrored(error.message))
    }
  }
}
