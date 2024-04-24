import {useEffect, useState} from 'react'

function Youtube() {

    const [loading, setLoading] = useState(false)

    useEffect(() => {
         setLoading(true)
        const script = document.createElement('script')
        script.src = 'https://www.youtube.com/iframe_api'
        
        document.body.appendChild(script)

        function onYouTubeIframeAPIReady () {
            let player = new YT.Player('video-container', {
                height: '330',
                width: '700',
                videoId: 'A5gVt028Hww',
                playerVars: {
                    'autoplay': 1,
                    'controls': 0,
                    'fs': 0,
                    'iv_load_policy': 1,
                    'showinfo': 0,
                },

                events: {
                    'onReady': onPlayReady,
                }
            })
        }

        function onPlayReady (event) {
            event.target.setVolume(50)
            setLoading(false)
        }

        window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;

        return () => {
            delete window.onYouTubeIframeAPIReady;
        }

    }, [])

  return (
    <div id='video-container'></div>
  )
}

export default Youtube
