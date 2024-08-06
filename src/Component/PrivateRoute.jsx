import React, { useContext } from 'react'
import { AuthContext } from './AuthContextProvider'
import { Navigate } from 'react-router-dom'

function PrivateRoute({children}) {
    const {Auth}=useContext(AuthContext)
  return (
   Auth.isAuth?children : <Navigate to="/login"/>
  )
}

export default PrivateRoute
