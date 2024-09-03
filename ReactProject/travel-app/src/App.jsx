import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Login } from './pages/Login'
import { Authentication } from './pages/Authentication'
import { Dashboard } from './pages/Dashboard'
import { Register } from './pages/Register'
function App() {

  return (
    <Routes>
      <Route exact path="/" element={<Login />} />
      <Route path="/login" element={<Authentication/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/back" element={<Login />} />
    </Routes>

  )
}

export default App
