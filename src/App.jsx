import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export const App = () => {
  return (
    <section className='App'>
      <TwitterFollowCard userName='midudev' name="Miguel Duran" isFollow />
      <TwitterFollowCard userName='srcendales' name="Santiago Cendales" isFollow={false}/>
      <TwitterFollowCard userName='elonmusk' name="Elon Musk" isFollow={true}/>
      <TwitterFollowCard userName='elonmusk' name="Elon Musk" isFollow={false}/>
    </section>
  )
}
