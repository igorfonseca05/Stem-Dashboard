import React from 'react'

import "./MiniCards.css"

function MiniCards({game, tag, url}) {

  // console.log(url)
  return (

    <div className='miniCards'>
      <figure>
        <img src={url} alt="" />
      </figure>
      <div className='image-footer'>
        <p>{game}</p>
        <span className='tag'> <span className='material-symbols-outlined'>sell</span>{tag}</span>
      </div>
    </div>

  )
}

export default MiniCards