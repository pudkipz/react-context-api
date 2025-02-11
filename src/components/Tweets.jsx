import { useContext } from 'react'
import CreateTweet from './CreateTweet'
import Tweet from './Tweet'
import { AppContext } from '../App'



export default function Tweets({ user }) {
  const context = useContext(AppContext)
  return (
    <main>
      <div className={context.theme === 'dark' ? 'top-bar dark' : 'top-bar'}>
        <h2 className="title">Home</h2>
      </div>

      <CreateTweet user={user} />

      <div className="show-more-context.tweets">
        <p>Show 35 Tweets</p>
      </div>

      {context.tweets.map((tweet, index) => <Tweet tweet={tweet} key={index} />)}
    </main>
  )
}
