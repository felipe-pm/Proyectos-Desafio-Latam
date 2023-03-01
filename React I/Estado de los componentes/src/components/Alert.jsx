import React from 'react'

const Alert = ({alerta}) => {
  return (
    <div className={`alert alert-${alerta.color} my-3`}>
        {alerta.msg}
    </div>
  )
}

export default Alert
