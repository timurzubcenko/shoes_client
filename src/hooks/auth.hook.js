import React, { useState, useEffect } from "react";

export const useAuth = () => {
    const [token, setToken] = useState(null)
    const [userId, setUserId] = useState(null)
    const [login, setLogin] = useState(null)
    const [isReady, setIsReady] = useState(false)

    const logIn = (jwtToken, id, login) => {
        setToken(jwtToken)
        setUserId(id)
        setLogin(login)
        localStorage.setItem('admin', JSON.stringify({
            userId: id,
            token: jwtToken,
            login: login,
        }))
    }

    const logout = () => {
        setToken(null)
        setUserId(null)
        setLogin(null)
        localStorage.removeItem('admin')
    }

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('admin'))
        if (data && data.token) {
            logIn(data.token, data.userId, data.login,)
        }
        setIsReady(true)
    }, [login])

    return { logIn, logout, token, userId, isReady, login }
}