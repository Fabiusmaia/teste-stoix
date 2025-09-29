import { useState } from 'react'
import { register } from '../../services/auth/auth'
import { useNavigate } from 'react-router-dom'

export default function Register() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await register(name, email, password)
      navigate('/login')
    } catch {
      alert('Erro ao registrar')
    }
  }

  return (
    <div className="flex flex-col items-center mt-10">
      <h2 className="text-2xl font-bold mb-4">Cadastro</h2>
      <form onSubmit={handleRegister} className="flex flex-col gap-2 w-64">
        <input
          type="text"
          placeholder="Nome"
          className="border p-2"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          className="border p-2"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Senha"
          className="border p-2"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="bg-green-600 text-white p-2 rounded">
          Registrar
        </button>
      </form>
    </div>
  )
}
