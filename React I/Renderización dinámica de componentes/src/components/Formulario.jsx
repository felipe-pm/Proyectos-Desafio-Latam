import React, { useState } from 'react'
import Error from './Error'
import { getId } from '../helpers/getId'

const Formulario = ({usuarios, setUsuarios}) => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [error, setError] = useState(false)

  const handleSubmit = e =>{
    e.preventDefault();
    
    //Se validan los datos
    if ([name, email].includes('')){
        setError(true)
        return
    }
    setError(false)

    //Se guardan como objetos
    const objetoUsuario = {
        name,
        email,
        id: getId()
    }

    //Guardamos los usuarios previos
    setUsuarios([...usuarios, objetoUsuario])

    //Se reinician los valores de los input
    setName('')
    setEmail('')
  }

  return (
    <div>
      <h2>Agregar Colaboradores</h2>

      <form onSubmit={handleSubmit}>
        {error && <Error message='Todos los datos son obligatorios' /> }
        <div className='mb-3'>
            <label htmlFor="name">Nombre: </label>
            <input className='form-control w-50' id="name" placeholder='Ingresa el nombre del colaborador' type="text" value={name} onChange={e=>setName(e.target.value)} />
        </div>
        <div className='mb-3'>
            <label htmlFor="email">Email: </label>
            <input className='form-control w-50' id="email" placeholder='Ingresa correo del colaborador' type="email" value={email} onChange={e=>setEmail(e.target.value)} />
        </div>

        <button className='btn btn-primary'>Agregar Colaborador</button>
      </form>
    </div>
  )
}

export default Formulario
