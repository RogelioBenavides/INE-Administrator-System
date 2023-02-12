import React from 'react'
import { Navigate } from 'react-router-dom'
function LoggedIn({ isLoggedIn }) {
  if (isLoggedIn) {
    return <Navigate to="/" replace />
  }
}
export default LoggedIn;