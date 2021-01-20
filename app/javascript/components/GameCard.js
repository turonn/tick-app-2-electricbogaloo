import React, { useEffect, useState } from 'react'

const GameCard = () => {
    const [games, setGames] = useState(['test']);

    useEffect( () => {
        fetch('/games.json') //how to call our Games database
        .then((resp) => {
            return resp.json()
        })
        .then((data) => {
            const results = data.map((pokemon, idx) => {
                return {...pokemon, idx: idx + 1 };
              });
              setGames({...data});
        
        })
      },[])

    return(
        <div>
            <p>{games[0].home_team}</p>
        </div>
    )
}

export default GameCard