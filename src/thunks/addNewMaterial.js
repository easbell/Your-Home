import { isLoading, hasErrored, addMaterial } from '../actions';

export const addNewMaterial = (body) => {
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
      console.log(data)
      dispatch(isLoading(false))
      // dispatch(addMaterial(data.data.createProject))
    } catch(error) {
      dispatch(hasErrored(error.message))
    }
  }
}