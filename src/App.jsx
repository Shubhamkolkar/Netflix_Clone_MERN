import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Navbar from './Components/Navbar'
import { AuthContextProvider } from './Context/authContext'
import ProtectedRoute from './Components/ProtectedRoute'

const App = () => {
  return (
<>
<AuthContextProvider>
<Navbar/>
<Routes>
  <Route path='/' element={<Home/>}></Route>
  <Route path='/profile' element={<ProtectedRoute><Profile/></ProtectedRoute>}></Route>
  <Route path='/login' element={<Login/>}></Route>
  <Route path='/signup' element={<Signup/>}></Route>
</Routes>
</AuthContextProvider>
</>
  )
}

export default App