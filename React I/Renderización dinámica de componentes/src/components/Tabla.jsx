import React, { useState } from 'react'
import TableRow from './TableRow'

const Tabla = ({usuarios}) => {
  const [palabra, setPalabra] = useState('')
  let results = []
  if (!palabra){
    results = usuarios;
  }else{
    results = usuarios.filter(
      (user) =>
      user.name.toLowerCase().includes(palabra.toLowerCase()) ||
      user.email.toLowerCase().includes(palabra.toLowerCase())
    )
  }

  return (
    <div>
      <div className='mb-5 bg-primary p-2 text-white'>
        <h2>Buscador de Colaboradores</h2>
        <input
          className='form-control w-50 p-2'
          type='text'
          placeholder='Busca un colaborador'
          value={palabra}
          onChange={(e) => setPalabra(e.target.value)}
        />
      </div>

      <h2>Listado de Colaboradores</h2>

      <table className='table table-striped table-hover mt-5 shadow-lg'>
        <thead className='bg-primary text-white'>
          <tr>
            <th>Nombre</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {results.length > 0 ? ( results.map((user) => <TableRow key={user.id} user={user} />)
          ) : (
            <tr>
              <td>No hay resultados</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

export default Tabla
