import React, { useState } from 'react'

export const AddCategoria = ({OnNewCategory}) => {

  const [inputValue, setinputValue] = useState("Primero")

  const cambiar = ({target}) => {
    
    setinputValue(target.value)
   
    
  }

  const onSubmit = (event) => {
    event.preventDefault();
    if(inputValue.trim().length <=1) return;

    OnNewCategory(inputValue)
    //setcategoria(categoria => [inputValue,...categoria])

  }

  return (
    <>
    <form onSubmit={onSubmit}>
    <input 
    type="text"
    placeholder="Buscar..."
    value={inputValue}
    onChange={cambiar}
    />
    </form>
    </>
  )
}
