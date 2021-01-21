import React, { useEffect, useState } from 'react'

const GameCard = () => {
    const [games, setGames] = useState(['test']);

    useEffect( () => {
        fetch('/games.json') 
        .then((resp) => resp.json())
        .then((data) => setGames({...data}))
      },[games])

    return(
        <div>
            <p>{games[0].visiting_team}</p>
        </div>
    )
}

export default GameCard