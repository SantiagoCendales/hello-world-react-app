export const TwitterFollowCard = ({userName, name, isFollow}) => {
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
          <span className='tw-followCard-infoUserName'>{userName}</span>
        </div>
      </header>
        <p style={{display: isFollow? 'inherit': 'none'}}>Follow</p>
      <aside>
        <button className='tw-followCard-button'>
          Seguir
        </button>
      </aside>
    </article>
  )
}
