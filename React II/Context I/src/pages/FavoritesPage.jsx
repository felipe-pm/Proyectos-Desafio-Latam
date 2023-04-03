import React, { useContext } from 'react'
import Hearth from '../components/Hearth'
import { MyContext } from '../context/MyContext'

const FavoritesPage = () => {

  const {fotos, setFotos} = useContext(MyContext)

  return (
    <div>
      <h2 className='text-center mt-4 mb-3 text-success'>Pagina en construcción 😞</h2>
      <div className='galeria grid-columns-5 p-3'>
      {fotos.map((foto) => (
        <div
          className='foto'
          key={foto.id}
          style={{ backgroundImage: `url(${foto.src})` }}>

            <Hearth filled={foto.favorito} />
            <h5 className='mb-3'>{foto.desc}</h5>
            <h4>{foto.favorito}</h4>
        </div>
      ))}
      </div>
    </div>
  )
}

export default FavoritesPage
