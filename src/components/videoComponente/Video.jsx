import { useRef } from 'react'

import './Video.css'

import video from "../../assets/videos/Ghost of Tsushima Director's Cut - Announcement Trailer _ PS5, PS4 (1).mp4"

function Video() {

  return (
      <iframe id="ytplayer" type="text/html" width="700" height="330"
        src="http://www.youtube.com/embed/A5gVt028Hww?autoplay=1&controls=1&rel=0&rel=0&origin=http://example.com" allowFullScreen/>
  )
}

export default Video