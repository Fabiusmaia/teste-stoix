import { api } from '../api'

export const login = async (email: string, password: string) => {
  await api.get('/sanctum/csrf-cookie') 
  return api.post('/api/login', { email, password })
}

export const register = async (
  name: string,
  email: string,
  password: string,
) => {
  try {
    await api.get('/sanctum/csrf-cookie')
  } catch (error) {
    console.log(error)
  }

  return api.post('/api/register', {
    name,
    email,
    password,
    password_confirmation: password,
  })
}

export const logout = () => api.post('/api/logout')

export const getUser = () => api.get('/api/user')
