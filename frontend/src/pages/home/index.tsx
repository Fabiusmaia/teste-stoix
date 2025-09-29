import { useEffect, useState } from 'react'
import {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
} from '../../services/tasks/tasks'

interface Task {
  id: number
  title: string
  description?: string
  completed: boolean
}

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [newTitle, setNewTitle] = useState('')
  const [newDescription, setNewDescription] = useState('')

  const fetchTasks = async () => {
    const res = await getTasks()
    setTasks(res.data)
  }

  useEffect(() => {
    fetchTasks()
  }, [])

  const handleCreate = async () => {
    if (!newTitle) return
    await createTask(newTitle, newDescription)
    setNewTitle('')
    setNewDescription('')
    fetchTasks()
  }

  const handleToggleComplete = async (task: Task) => {
    await updateTask(task.id, { completed: !task.completed })
    fetchTasks()
  }

  const handleDelete = async (taskId: number) => {
    await deleteTask(taskId)
    fetchTasks()
  }

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Minhas Tarefas</h2>

      <div className="mb-4 flex flex-col space-y-2">
        <input
          type="text"
          placeholder="Título"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          className="border p-2 rounded"
        />
        <input
          type="text"
          placeholder="Descrição"
          value={newDescription}
          onChange={(e) => setNewDescription(e.target.value)}
          className="border p-2 rounded"
        />
        <button
          onClick={handleCreate}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Adicionar Tarefa
        </button>
      </div>

      <ul className="space-y-2">
        {tasks.map((task) => (
          <li
            key={task.id}
            className="p-2 border rounded flex justify-between items-center"
          >
            <div>
              <span className={task.completed ? 'line-through' : ''}>
                {task.title}
              </span>
              {task.description && (
                <p className="text-sm text-gray-500">{task.description}</p>
              )}
            </div>

            <div className="flex space-x-2">
              <button
                onClick={() => handleToggleComplete(task)}
                className="bg-green-500 text-white px-2 py-1 rounded"
              >
                {task.completed ? 'Desmarcar' : 'Completar'}
              </button>
              <button
                onClick={() => handleDelete(task.id)}
                className="bg-red-500 text-white px-2 py-1 rounded"
              >
                Deletar
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
