import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from '../pages/Login'
import Projects from '../pages/Projects'
import Taskboard from '../pages/Taskboard'

const AppRoutes = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='/projects' element={<Projects/>}/>
            <Route path='/project/:id' element={<Taskboard/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes