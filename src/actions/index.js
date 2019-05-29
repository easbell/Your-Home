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