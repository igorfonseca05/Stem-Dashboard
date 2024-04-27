import React from 'react'

import "./CardContainer.css"
import MiniCards from '../MiniCards/MiniCards'


function CardContainer({ title, dados }) {

  function selectThreeGames() {
     return dados?.filter((item, index, data) => data.indexOf(item) <= 2)
  }

  const selected = selectThreeGames()

  return (
    <div className='standard-setting'>
      <div className='title'>
        <h4>{title}</h4>
        <a href="#">See all <span className='material-symbols-outlined'>chevron_right</span></a>
      </div>
      <div className="cards-container">
        {selected?.map(({ id, name, tags, image_path }) => (
          // console.log(id, name, tags[0], image_path)
          <MiniCards key={id} game={`${name}`} tag={`${tags[0]}`} url={`${image_path}`} />

        ))}
      </div>
    </div>
  )
}

export default CardContainer