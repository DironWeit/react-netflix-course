import { useState } from "react"

export function FavoriteButton() {
  const [isFavorite, setIsFaforite] = useState(false)
  return (<button onClick={() => setIsFaforite(!isFavorite)}> 
    {isFavorite ? '❤️' :'🤍'}
  </button>
  )
}