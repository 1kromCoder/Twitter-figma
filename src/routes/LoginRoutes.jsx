import React from 'react'
import { paths } from '../hooks/Path'
import { Route, Routes } from 'react-router-dom'
import Login from '../pages/Login'

const LoginRoutes = () => {
    return (
        <Routes>
            <Route path={paths.home} element={<Login />} />
        </Routes>
    )
}

export default LoginRoutes