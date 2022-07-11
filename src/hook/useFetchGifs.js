import { useState, useEffect } from "react"
import { getGif } from "../helpers/getgif"

export const useFetchGifs = (categoria) => {
    
const [images, setImages] = useState([])
const [isLoading, setisLoading] = useState(true)

  const getImages = async() =>{
        const newImages = await getGif(categoria)
        setImages(newImages)
        setisLoading(false)
        
        
  }

    useEffect(() => {
        getImages();
        
    },[])

    return{
        images,
        isLoading
    }
}
