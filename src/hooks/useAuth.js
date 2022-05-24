import React, { useContext } from 'react'
import AuthContext from '../store/contexts/JWTAuthContext'

const useAuth = () => useContext(AuthContext)

export default useAuth