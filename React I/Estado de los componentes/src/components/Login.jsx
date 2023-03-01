import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'

const Login = ({setAlerta}) => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const handleSubmit = e => {
    e.preventDefault()
    if(email.trim() === 'adl@desafiolatam.com' && password.trim() === '252525'){
        setAlerta({msg: 'Sesión Iniciada Correctamente', color: 'success'})
    }else{
        setAlerta({msg: 'Datos incorrectos', color: 'danger'})
    }
  }

  return (
    <div>

      <h1>Desafio - Eventos y Componentes</h1>

      <form>
        <Form.Group className="mb-3" controlId="email">
            <Form.Label>Dirección Email</Form.Label>
            <Form.Control type="email" placeholder="nombre@ejemplo.com" onChange={(e)=>setEmail(e.target.value)} value={email}/>
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="password">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control type="password" placeholder="**********" onChange={(e)=>setPassword(e.target.value)} value={password}/>
        </Form.Group>
      </form>
    
      <Button variant="dark" disabled={!email.trim() || !password.trim()} onClick={handleSubmit}>Iniciar Sesión</Button>
        
    </div>
  )
}

export default Login
