import React, {useState, useEffect} from 'react'
import GameCard from './GameCard'

const Fetch = () => {
    const [games, setGames] = useState([]);
  
    useEffect( () => {
      fetch('/games.json') 
      .then((resp) => resp.json())
      .then((data) => setGames([...data]))
    },[]);
  
      let gameList = []
      if (games[0]) {
          gameList = games.map((game) => {
              return (
                  <GameCard
                      key={game.id}
                      attributes={game}
                  />
              )
          })
      };
      return(
          <div>{gameList}</div>
      );
}
export default Fetch