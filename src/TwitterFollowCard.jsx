import { useState } from "react";

export const TwitterFollowCard = ({userName = 'unknown', name, isFollow, formatUsername}) => {
  // userName = `@${userName}`; // Esto esta mal ya que las props deben ser inmutable
  // const formatUserName = `@${userName}` // Esto es una mejor practica si necesitamos cambiar una props
  
  const [state, setState] = useState(isFollow);
  const text = state ? 'Siguiendo' : 'Seguir'
  const buttonClassName = state 
  ? 'tw-followCard-button is-following' 
  : 'tw-followCard-button'

  return (
    <article className='tw-followCard'>
      <header className='tw-followCard-header'>
        <img
          className='tw-followCard-avatar'
          src={`https://unavatar.io/${userName}`}
          alt="profile-pic" 
        />
        <div className='tw-followCard-info'>
          <strong>{name}</strong>
          <span className='tw-followCard-infoUserName'>{formatUsername(userName)}</span>
        </div>
      </header>
        <p style={{display: isFollow? 'inherit': 'none'}}>Follow</p>
      <aside>
        <button onClick={() => setState(prevStateValue => !prevStateValue)} className={buttonClassName}>
          {text}
        </button>
      </aside>
    </article>
  )
}
