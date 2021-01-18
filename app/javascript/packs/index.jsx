import React from 'react'
import ReactDOM from 'react-dom'
import App from '../components/App'
import GameCard from '../components/GameCard'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <App />,
    document.getElementById('app'),
  )
})

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <GameCard />,
    document.getElementById('game-card'),
  )
})