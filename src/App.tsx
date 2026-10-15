import { Navigate, Route, Routes } from 'react-router-dom'
import PublicLayout from './layouts/PublicLayout'
import DashboardLayout from './layouts/DashboardLayout'
import Home from './pages/Home'
import About from './pages/About'
import Login from './pages/Login'
import Dashboard from './pages/dashboard/Dashboard'
import Projects from './pages/dashboard/Projects'
import Settings from './pages/dashboard/Settings'
import NotFound from './pages/NotFound'

function App() {
  return (
    <Routes>
      {/* public — navbar tampil, tanpa sidebar */}
      <Route element={<PublicLayout />}>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Route>

      {/* dashboard — navbar disembunyikan, sidebar tampil */}
      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="projects" element={<Projects />} />
        <Route path="settings" element={<Settings />} />
      </Route>
    </Routes>
  )
}

export default App
