export const login = (dispatch, name) => {
  dispatch({type: 'login', payload: name})
}

export default login
