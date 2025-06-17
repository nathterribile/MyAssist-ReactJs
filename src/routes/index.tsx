import Schedule from '../pages/Schedule';
import NotFound from '../pages/NotFound';
import Home from '../pages/Home';
import Admin from '../pages/Admin';
import { Routes, Route } from 'react-router-dom';
import { ProtectedRoute } from '../context/ProtectedRoute';


export function RoutesMain() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/Admin' element={<ProtectedRoute><Admin /></ProtectedRoute>} />
      <Route path='/Schedule' element={<Schedule />} />
      <Route path='/*' element={<NotFound />} />
    </Routes>
  );
}