export const editProjectHelper = (id, name, address, description) => {
  if(name.length === 0 && address.length === 0) {
    return {"query": `mutation {updateProject (project: {id: "${id}", name: "${name}"}) {id name address description}}`}
  } else if ()
  "query": `mutation {updateProject (project: {id: "${id}", name: "${name}", address: "${address}", description: "${description}"}) {id name address description}}`
}