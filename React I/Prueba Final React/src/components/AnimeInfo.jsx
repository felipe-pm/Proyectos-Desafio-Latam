import React from 'react'

const AnimeInfo = (props) => {
    const {title,images:{jpg:{large_image_url}},source,rank,score,popularity,members,status,rating,duration}=props.animeInfo

  return (
    <>
      <div className="anime-content">
        <h2>{title}</h2><br />
        <img src={large_image_url} alt="" /><br /><br />
        <div className="info">
            <h3>#Rank: {rank}</h3>
            <h3>#Puntuación: {score}</h3>
            <h3>#Popularidad: {popularity}</h3><br /><hr /><br />
            <h4>Miembros: {members}</h4>
            <h4>Fuente: {source}</h4>
            <h4>Duración: {duration}</h4>
            <h4>Estado: {status}</h4>
            <h4>Clasificación: {rating}</h4>
        </div>
      </div>
    </>
  )
}

export default AnimeInfo
