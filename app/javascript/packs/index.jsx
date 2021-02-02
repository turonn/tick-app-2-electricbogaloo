import React from 'react'
import ReactDOM from 'react-dom'
import App from '../components/App'
import FetchGames from '../components/FetchGames'
import BottomBar from '../components/BottomBar'
import FetchCart from '../components/FetchCart'

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
      <FetchGames />,
      game_card,
    )
  }

  const bottombar = document.getElementById('bottom-bar')
  if (bottombar) {
    ReactDOM.render(
      <BottomBar />,
      bottombar,
    )
  }

  const cartcard = document.getElementById('cart-card')
  if (cartcard) {
    ReactDOM.render(
      <FetchCart />,
      cartcard,
    )
  }
})

