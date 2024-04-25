import React from 'react'

import "./CardContainer.css"
import MiniCards from '../MiniCards/MiniCards'


function CardContainer({title, dados}) {

  // console.log(dados)

  return (
    <div className='standard-setting'>
      {/* <div className='title'>
      <h4>{title}</h4>
       <a href="#">See all <span className='material-symbols-outlined'>chevron_right</span></a>
      </div>
        <div className="cards-container">
          {dados?.map(({game, tag, url}, i) => (
            <MiniCards key={i} game={`${game}`} tag={`${tag}`} url={`${url}`}/>
     
          ))}
        </div> */}
    </div>
  )
}

export default CardContainer