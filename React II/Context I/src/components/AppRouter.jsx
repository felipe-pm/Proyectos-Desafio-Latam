import React from 'react'
import { Route, Routes } from 'react-router-dom'
import FavoritesPage from '../pages/FavoritesPage'
import HomePage from '../pages/HomePage'
import NotFound from '../pages/NotFound'

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='favoritos' element={<FavoritesPage />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default AppRouter
