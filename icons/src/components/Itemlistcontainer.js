import React from 'react'


const itemlistcontainer = (props) => {
    console.log (props)
    
  return (
    <div className="saludo">
        <h3>{props.saludo}</h3>
    </div>
  )
}

export default itemlistcontainer