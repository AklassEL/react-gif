import React, { useState } from 'react'
import { AddCategoria } from './components/AddCategoria'
import { GifGrid } from './components/GifGrid'

export const GifExpert = () => {

  const [categoria, setcategoria] = useState(['Marvel','ADC'])  
  
  const agregar = (newCategory) => {

    if( categoria.includes(newCategory))return 

    setcategoria([...categoria, newCategory])
  }


  
  return (
    <>

    
    <h1>Gif Expert APP</h1>
    <AddCategoria 
    
    OnNewCategory={agregar}
    
    
    />
    
    <ol>
        {
        categoria.map((categoria) => 
             (
                <GifGrid key={categoria} categoria={categoria}/>
            )
        )
        
        }
    </ol>

    </>
  )
}
