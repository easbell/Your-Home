import { isLoading, hasErrored, setProjects } from '../actions';

export const fetchAllProjects = () => {
  return async (dispatch) => {
    const url = "https://hometrackr.herokuapp.com//api/v1/graphql"
    try {
      dispatch(isLoading(true));
      const response = await fetch(url, {
        body: JSON.stringify({
          "query": "query { projects { id name description address rooms { id name type description }}}"
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
      dispatch(setProjects(data.data.projects))
    } catch(error) {
      dispatch(hasErrored(error.message))
    }
  }
}