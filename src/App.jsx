import { useState } from 'react'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export const App = () => {
  const format = (username) => `@${username}`

  const users = [
    {
      userName: 'srcendales',
      name: 'Santiago Cendales',
      isFollowing: true
    },
    {
      name: 'Julian DuranS',
      isFollowing: false
    },
    {
      userName: 'elonmusk',
      name: 'Elon Musk',
      isFollowing: true
    }
  ]

  return (
    <section className='App'>
      {
        users.map(user => (
          <TwitterFollowCard 
            key={user.userName}
            formatUsername={format}
            userName={user.userName}
            name={user.name}
            isFollow={user.isFollowing}
          />
        ))
      }
      {/* <TwitterFollowCard formatUsername={format} userName='elonmusk' name="Elon Musk" isFollow />
      <TwitterFollowCard formatUsername={format} userName='srcendales' name="Santiago Cendales" />
      <TwitterFollowCard formatUsername={format} name="Andres Duran"/> */}
    </section>
  )
}
