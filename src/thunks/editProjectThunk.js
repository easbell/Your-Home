// { "query":"mutation{updateProject(project: {id: 2, name: \"Updated House\", city: \"Different City\"}) {id name city state}}"
// }

// name, address, description

import { isLoading, hasErrored, editProject } from '../actions';

export const editProjectThunk = (id, name, address, description) => {
  return async (dispatch) => {
    const url = "https://hometrackr.herokuapp.com//api/v1/graphql"
    try {
      dispatch(isLoading(true));
      const response = await fetch(url, {
        body: JSON.stringify({
          "query": `mutation {updateProject (project: {id: "${id}", name: "${name}", address: "${address}", description: "${description}"}) {id name address description}}`
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
      console.log(data.data.updateProject)
      dispatch(isLoading(false))
      dispatch(editProject(data.data.updateProject))
    } catch(error) {
      dispatch(hasErrored(error.message))
    }
  }
}