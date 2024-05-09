import React, { useEffect, useState } from 'react'

import './Warnings.css'

function Warnings({Warning, mensage}) {


  return (
    <div className={`infos-container ${Warning}`}><p>{mensage}</p></div>
  )
}

export default Warnings