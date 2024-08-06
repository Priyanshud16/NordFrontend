import React, { createContext, useState } from 'react'

export const AuthContext=createContext()
function AuthContextProvider({children}) {
    const [Auth,setAuth]=useState({
        isAuth:false,
        token:null
    })

    const LoginUser=(token)=>{
        setAuth((prev)=>({
            ...prev,
            isAuth:true,
            token:token
        }))
    }
  return (
    <div>
      <AuthContext.Provider value={{LoginUser,Auth}}>
        {children}
      </AuthContext.Provider>
    </div>
  )
}

export default AuthContextProvider
