export const hasErrored = (message) => ({
  type: 'HAS_ERRORED',
  message
});

export const isLoading = (bool) => ({
  type: 'IS_LOADING',
  isLoading: bool
});

export const addProject = (project) => ({
  type: 'ADD_PROJECT',
  project
});

export const setProjects = (projects) => ({
  type: 'SET_PROJECTS',
  projects
});

export const deleteAProject = (id) => ({
  type: 'DELETE_PROJECT',
  id
});

export const editProject = (project) => ({
  type: 'EDIT_PROJECT',
  project
});

export const deleteARoom = (id, projectId) => ({
  type: 'DELETE_ROOM',
  id,
  projectId
})

export const setMaterials = (materials) => ({
  type: 'SET_MATERIALS',
  materials
});

export const addMaterial = (material) => ({
  type: 'ADD_MATERIAL',
  material
});

export const addRoom = (room) => ({
  type: 'ADD_ROOM',
  room
});