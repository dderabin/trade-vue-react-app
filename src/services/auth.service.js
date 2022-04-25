import apiClient from '../http-common';

const register = async (username, email, password, firstname, lastname) => {
  try {
    const result = await apiClient.post('/user/new', { username, email, password, firstname, lastname })
    return result;
  } catch (err) {
    throw new Error(err);
  }
}

const login = async (email, password) => {
  try {
    const result = await apiClient.post('/user/login', { email: email, password: password })
    return result;
  } catch (err) {
    throw new Error(err);
  }
}

const reset = async ( email ) => {
  try {
    const result = await apiClient.post('/user/reset', { email })
    return result;
  } catch (err) {
    throw new Error(err);
  }
}

const logout = async () => {
  try {
    const result = await apiClient.post('/user/logout')
    return result;
  } catch (err) {
    throw new Error(err);
  }
}

const AuthService = {
  register,
  login,
  reset,
  logout
}

export default AuthService;
