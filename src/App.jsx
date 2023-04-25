import { useState } from 'react'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export const App = () => {
  const format = (username) => `@${username}`

  return (
    <section className='App'>
      <TwitterFollowCard formatUsername={format} userName='elonmusk' name="Elon Musk" isFollow />
      <TwitterFollowCard formatUsername={format} userName='srcendales' name="Santiago Cendales" />
      <TwitterFollowCard formatUsername={format} name="Andres Duran"/>
    </section>
  )
}
