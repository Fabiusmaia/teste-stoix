import { api } from '../api'

export const getTasks = () => api.get('/api/tasks')

export const createTask = (title: string, description?: string) =>
  api.post('/api/tasks', { title, description })

export const updateTask = (
  id: number,
  updates: { title?: string; description?: string; completed?: boolean },
) => api.put(`/api/tasks/${id}`, updates)

export const deleteTask = (id: number) => api.delete(`/api/tasks/${id}`)
