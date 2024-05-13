import React, { useEffect, useState } from 'react'

import './Warnings.css'

function Warnings({warning, message}) {

  return (
    <div data-js='warning' className={`infos-container ${warning}`}><p>{message}</p></div>
  )
}

export default Warnings