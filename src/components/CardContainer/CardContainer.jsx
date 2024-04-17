import React from 'react'

import "./CardContainer.css"
import MiniCards from '../cardsGrid/MiniCards'


function CardContainer({title, game1, tag1}) {
  return (
    <div className='standard-setting'>
      <div className='title'>
      <h4>{title}</h4>
       <a href="#">See all <span className='material-symbols-outlined'>chevron_right</span></a>
      </div>
        <div className="cards-container">
          <MiniCards game='F11 22' tag='Racing' url='f1.jpg'/>
          <MiniCards game='Call of Duty: Modern Warfare' tag='Action' url='call.jpg'/>
          <MiniCards game='Fifa 22' tag='Sports' url='fifa-22.webp'/>
              
        </div>
    </div>
  )
}

export default CardContainer