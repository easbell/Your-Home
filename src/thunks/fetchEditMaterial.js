import { isLoading, hasErrored, editMaterial } from '../actions';

export const fetchEditMaterial = (request) => {
  return async (dispatch) => {
    console.log(request.body)

    const url = "https://hometrackr.herokuapp.com//api/v1/graphql"
    try {
      dispatch(isLoading(true));
      const response = await fetch(url, {
        body: JSON.stringify(request.body),
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
      dispatch(editMaterial(data.data.updateProjectMaterial, request.oldType))
    } catch(error) {
      dispatch(hasErrored(error.message))
    }
  }
}