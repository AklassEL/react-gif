export const getGif = async(categoria) =>{

    const url = `https://api.giphy.com/v1/gifs/search?api_key=KahfeTrMWj74qI7UK7PPCayGYYobH0ZG&q=${categoria}&limit=5`
    
    const resp = await fetch(url)
    const {data} = await resp.json()

    console.log(data)
    
    const gifd = data.map(img => ({
    
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }))
    
    console.log(gifd)
    return gifd;
       }


