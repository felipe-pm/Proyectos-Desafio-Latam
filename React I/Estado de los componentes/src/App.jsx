import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import Alert from './components/Alert'
import Login from './components/Login'
import { Container } from 'react-bootstrap';

const App = () => {

  const [alerta, setAlerta] = useState({msg: '', color: ''})

  return (
    <>
      <Container>
        <Login setAlerta={setAlerta} />
        <Alert alerta={alerta} />
      </Container>
    </>
  )
}

export default App
