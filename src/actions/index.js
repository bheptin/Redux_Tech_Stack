export const selectLibrary = (libraryId) => {
  return  {
    type: 'select_library',
    payload: libraryId
  };
};

//The function is the Action Creator. The object inside is the Action
