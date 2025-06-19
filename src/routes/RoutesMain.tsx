import { Schedule } from '../pages/Schedule/index.tsx'
import { Home } from '../pages/Home/index.tsx'
import { Admin } from '../pages/Admin/index.tsx'
import { Routes, Route } from 'react-router-dom'
import { ProtectedRoute } from '../context/ProtectedRoute.tsx'

export function RoutesMain () {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/Admin' element={<ProtectedRoute><Admin/></ProtectedRoute>} />
      <Route path='/Schedule' element={<Schedule />} />
    </Routes>
  )
}
