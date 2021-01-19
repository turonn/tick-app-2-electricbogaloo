import React, { useEffect, useState } from 'react'

const GameCard = () => {
    const [games, setGames] = useState(['test']);

    useEffect( () => {
        fetch('/games') //how to call our Games database
        .then((resp) => resp.json())
        .then((json) => setGames(json));
      },[])

    return(
        <div>
            <p>{games}</p>
        </div>
    )
}

export default GameCard