import {useEffect, useState } from "react"

export function FavoriteButton() {
  const [isFavorite, setIsFaforite] = useState(false)

  useEffect(() => {
      console.log("Изменяем состояние isFavorite = ", isFavorite)
    },[isFavorite])

  return (<button onClick={() => setIsFaforite(!isFavorite)}> 
    {isFavorite ? '❤️' :'🤍'}
  </button>
  )
}