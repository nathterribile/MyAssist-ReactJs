import { Navigate } from 'react-router-dom'
import { JSX } from 'react/jsx-runtime'

export function ProtectedRoute ({ children }: { children: JSX.Element }) {
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true'
  return isAuthenticated ? children : <Navigate to="/" replace />
}
