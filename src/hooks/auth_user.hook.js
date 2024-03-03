import React, { useState, useEffect } from "react";

export const useAuthUser = () => {
    const [token2, setToken2] = useState(null)
    const [userId2, setUserId2] = useState(null)
    const [email2, setEmail2] = useState(null)
    const [name2, setName2] = useState(null)
    const [isReady2, setIsReady2] = useState(false)

    const login2 = (jwtToken, id, email, name2) => {
        setToken2(jwtToken)
        setUserId2(id)
        setEmail2(email)
        setName2(name2)
        localStorage.setItem('user', JSON.stringify({
            userId: id,
            token: jwtToken,
            name2: name2,
            email: email,
        }))
    }

    const logout2 = () => {
        setToken2(null)
        setUserId2(null)
        setEmail2(null)
        setName2(null)
        localStorage.removeItem('user')
    }

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('user'))
        if (data && data.token) {
            login2(data.token, data.userId, data.email, data.name2)
        }
        setIsReady2(true)
    }, [login2])

    return { login2, logout2, token2, userId2, isReady2, email2, name2 }
}