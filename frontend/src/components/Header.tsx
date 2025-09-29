import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="flex justify-between items-center p-4 bg-gray-900 text-white shadow">
      <h1 className="text-xl font-bold">Task Manager</h1>
      <nav className="flex gap-6">
        <Link to="/login" className="hover:text-blue-400 transition">
          Login
        </Link>
        <Link to="/register" className="hover:text-green-400 transition">
          Cadastro
        </Link>
      </nav>
    </header>
  )
}
