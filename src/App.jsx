import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import MyRoute from './routes/MyRoute'
import Footer from './components/Footer/Footer'
import AdminRoute from './routes/AdminRoute'
import { AuthContext } from './context/AuthContext'
import { useAuth } from './hooks/auth.hook'
import { useAuthUser } from './hooks/auth_user.hook'

function App() {
  const { logIn, logout, token, userId, isReady, login } = useAuth()
  const { login2, logout2, token2, userId2, isReady2, email2, name2 } = useAuthUser()
  const isAdmin = !!token
  const isLogin = !!token2
  return (
    <AuthContext.Provider value={{ logIn, logout, token, userId, isReady, login, login2, logout2, token2, userId2, isReady2, email2, name2 }}>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path='/*' element={<MyRoute isLogin={isLogin} />} />
            <Route path='/admin/*' element={<AdminRoute isAdmin={isAdmin} />} />
          </Routes>
        </div>
      </BrowserRouter>
    </AuthContext.Provider>
  )
}

export default App
