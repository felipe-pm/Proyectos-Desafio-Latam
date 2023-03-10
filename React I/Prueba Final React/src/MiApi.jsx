import React, { useEffect, useState } from 'react'
import AddToList from './components/AddToList'
import AnimeInfo from './components/AnimeInfo'
import AnimeList from './components/AnimeList'
import RemoveFromList from './components/RemoveFromList'
import './components/style.css'

const MiApi = () => {

  const [search, setSearch] = useState('')
  const [animeData, setAnimeData] = useState('')
  const [animeInfo, setAnimeInfo] = useState('')
  const [myAnimeList, setMyAnimeList] = useState([])

  {/* Función para agregar animes a tu lista de favoritos*/}
  const addTo=(anime)=>{
    {/*Con este paso evitamos que se agregue mas de una vez el mismo anime a tu lista de favoritos*/}
    const index = myAnimeList.findIndex((myanime)=>{
      return myanime.mal_id === anime.mal_id
    })
    if(index < 0){
      const newArray=[...myAnimeList, anime]
      setMyAnimeList(newArray)
    }
  }

  {/*Función para eliminar animes de tu lista de favoritos*/}
  const removeFrom=(anime)=>{
    const newArray=myAnimeList.filter((myanime)=>{
      return myanime.mal_id !== anime.mal_id
    })
    setMyAnimeList(newArray)
  }

  {/* Se conecta a la API mediante esta función*/}
  const getData = async()=>{
    const res = await fetch(`https://api.jikan.moe/v4/anime?q=${search}&limit=50`)
    const resData = await res.json();
    setAnimeData(resData.data)
  }

  {/* Se llama a la función previamente creada enviandole como parametro lo ingresado en el buscador*/}
  useEffect(()=>{
    getData()
  },[search])

  return (
    <>
      {/* Se crea el Header y el input donde se agrega el valor de busqueda*/}
      <div className='header'>
        <h1>Tu<strong>Anime</strong>Database</h1>

        <div className="search-box">
          <input type="search" placeholder='Busca tu anime...' onChange={(e)=>setSearch(e.target.value)} />
        </div>
      </div>

      {/* Se crea el container, que en este caso seria la estructura main*/}
      <div className="container">

        <div className="animeInfo">
          {/* Si tenemos un valor en animeInfo estos datos se pasan al componente que muestra dichos datos */}
          {animeInfo && <AnimeInfo animeInfo={animeInfo} />}
        </div>

        <div className="anime-row">
          <h2 className="text-heading">Anime</h2>
          <div className="row">
            {/* En esta sección es donde creamos el componente que tendra o bien mostrara el listado de animes inical y los listados de busqueda */}
            <AnimeList
            // Lista de animes
            animelist={animeData}
            // Datos del anime
            setAnimeInfo={setAnimeInfo} 
            // Aqui se agrega el componente que nos permite agregar animes a nuestra lista de favoritos
            animeComponent={AddToList}
            // Si se agrega dicho anime, llamamos a la función que se creo previamente
            handleList={(anime)=>addTo(anime)}
            />
          </div>
          <h2 className="text-heading">Mi Lista</h2>
          <div className="row">
            <AnimeList
            animelist={myAnimeList}
            setAnimeInfo={setAnimeInfo} 
            // Aqui se agrega el componente que nos permite eliminar animes de nuestra lista de favoritos
            animeComponent={RemoveFromList}
            // Si se quiere quitar dicho anime, llamamos a la función que se creo previamente
            handleList={(anime)=>removeFrom(anime)}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default MiApi
