import React, { createContext, useEffect } from 'react';
import jwtDecode from 'jwt-decode';
import AxiosInstance from '../../axiosClient';
import Loading from '../../components/Loading';
import localStorageHelper from '../localstorageHelper';
import { useDispatch, useSelector } from 'react-redux';
import { defaultState } from '../reducers/auth';
import { AppActions } from '../actions';
import * as Api from '../api';

const isValidToken = (accessToken) => {
    if (!accessToken) {
        return false
    }

    const decodedToken = jwtDecode(accessToken)
    const currentTime = Date.now() / 1000
    return decodedToken.exp > currentTime
}

export const setSession = (accessToken, refreshToken) => {
    if (accessToken) {
        localStorageHelper.accessToken = accessToken;
        localStorageHelper.refreshToken = refreshToken;
        AxiosInstance.defaults.headers.common.Authorization = accessToken
    } else {
        localStorageHelper.clearAuthData()
        delete AxiosInstance.defaults.headers.common.Authorization
    }
}

const AuthContext = createContext({
    ...defaultState,
    method: 'JWT',
    login: () => Promise.resolve(),
    logout: () => { },
    register: () => Promise.resolve(),
})

export const AuthProvider = ({ children }) => {
    const dispatch = useDispatch()
    const authState = useSelector(state => state.authState)

    const login = async (email, password) => {
        try {
            const response = await Api.LOGIN_USER({email, password})
            const { token, refreshToken } = response.data

            setSession(token, refreshToken)

            dispatch(AppActions.userLogInSuccessAction({user: {email}}))
            dispatch(AppActions.userProfileFetchAction())
        } catch (e) {
            console.log(e)
        }
    }

    const register = async (email, password) => {
        try {
            const response = await Api.SIGNUP_USER({email, password})
            const { token, refreshToken } = response.data
            setSession(token, refreshToken)
    
            dispatch(AppActions.userLogInSuccessAction({user: {email}}))
        } catch (e) {
            console.log(e)
        }
    }

    const logout = () => {
        setSession(null)
        dispatch(AppActions.terminateStatesAction())
        dispatch(AppActions.logoutAction())
    }

    useEffect(() => {
        ; (async () => {
            try {
                const accessToken = localStorageHelper.accessToken
                const refreshToken = localStorageHelper.refreshToken

                if (accessToken && isValidToken(accessToken)) {
                    setSession(accessToken, refreshToken)
                    const response = await Api.GET_PROFILE()
                    dispatch(AppActions.userProfileFetchSuccessAction(response.data))
                    dispatch(AppActions.initAction({isAuthenticated: true}))
                } else {
                    dispatch(AppActions.initAction({isAuthenticated: false}))
                }
            } catch (err) {
                console.error(err)
                dispatch(AppActions.initAction({isAuthenticated: false}))
            }
        })()
    }, [dispatch])

    if (!authState.isInitialised) {
        return <Loading />
    }

    return (
        <AuthContext.Provider
            value={{
                ...authState,
                method: 'JWT',
                login,
                logout,
                register,
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext
