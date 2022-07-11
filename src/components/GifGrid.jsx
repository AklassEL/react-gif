import React, { useState,useEffect } from 'react'
import { getGif } from '../helpers/getgif';
import { useFetchGifs } from '../hook/useFetchGifs';
import { GifItem } from './GifItem';


       



export const GifGrid = ({categoria}) => {



const {images,isLoading} = useFetchGifs(categoria);








    
   
  
return (
    <>
    <h3>{categoria}</h3>
    {
      
       
      isLoading && (<h2>Cargando</h2>)
        
    }
        
        <div className='card-grid'>
        {images.map((image) => (
                <GifItem 
                key={image.id}
                {...image}
               
                />
            ))}
        </div>
isLoading
        
    </>


  )
}
