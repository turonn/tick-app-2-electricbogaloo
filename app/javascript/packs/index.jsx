import React from 'react'
import ReactDOM from 'react-dom'
import App from '../components/App'
import Fetch from '../components/Fetch'

document.addEventListener('DOMContentLoaded', () => {
  const app =  document.getElementById('app')
  if (app) {
    ReactDOM.render(
      <App />,
      app,
    )
  }

  const game_card = document.getElementById('game-card')
  if (game_card) {
    ReactDOM.render(
      <Fetch />,
      game_card,
    )
  }
})

