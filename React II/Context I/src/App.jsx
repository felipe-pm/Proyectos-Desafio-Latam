import './App.css'
import React, { useEffect, useState } from 'react'
import AppRouter from './components/AppRouter'
import NavBar from './components/NavBar'
import { MyContext } from './context/MyContext'

function App() {

  const [fotos, setFotos] = useState([])

  const url = './src/data/data.json'

  const getPhotos = async () => {
    const res = await fetch(url)
    let {photos} = await res.json()
    photos = photos.map(photo=> ({
      id: photo.id,
      src: photo.src.tiny,
      desc: photo.alt,
      favorito: false,
    }))

    setFotos(photos)
  }

  useEffect( ()=> {
    getPhotos()
  },[])


  return (
    <>
      <MyContext.Provider value={{fotos, setFotos}}>
        <NavBar />
        <AppRouter />
      </MyContext.Provider>
    </>
  )
}

export default App
