import React, { useEffect } from 'react'

import Plyr from 'plyr'
import poster from '../assets/poster.jpg'

export interface PlayerProps {
  info: { url: string; currentTime?: number }
  closeButtonClick: (player: Plyr) => void
}

const Player: React.FC<PlayerProps> = ({ info, closeButtonClick }) => {
  useEffect(() => {
    const controls = `
      <button id="player-close">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="26"
          height="26"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#fff"
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
      <div class="plyr__controls"><button class="plyr__controls__item plyr__control" type="button" data-plyr="play" aria-label="Play"><svg class="icon--pressed" aria-hidden="true" focusable="false"><use xlink:href="#plyr-pause"></use></svg><svg class="icon--not-pressed" aria-hidden="true" focusable="false"><use xlink:href="#plyr-play"></use></svg><span class="label--pressed plyr__sr-only">Pause</span><span class="label--not-pressed plyr__sr-only">Play</span></button><div class="plyr__controls__item plyr__progress__container"><div class="plyr__progress"><input data-plyr="seek" type="range" min="0" max="100" step="0.01" value="0" autocomplete="off" role="slider" aria-label="Seek" aria-valuemin="0" aria-valuemax="1435.063" aria-valuenow="0" id="plyr-seek-7987" aria-valuetext="00:00 of 23:55" style="--value:0%;" seek-value="1.4500884726597902"><progress class="plyr__progress__buffer" min="0" max="100" value="0.22167207990171858" role="progressbar" aria-hidden="true">% buffered</progress><span class="plyr__tooltip" style="left: 1.8644%;">00:26</span></div></div><div class="plyr__controls__item plyr__time--current plyr__time" aria-label="Current time">00:00</div><div class="plyr__controls__item plyr__volume"><button type="button" class="plyr__control" data-plyr="mute"><svg class="icon--pressed" aria-hidden="true" focusable="false"><use xlink:href="#plyr-muted"></use></svg><svg class="icon--not-pressed" aria-hidden="true" focusable="false"><use xlink:href="#plyr-volume"></use></svg><span class="label--pressed plyr__sr-only">Unmute</span><span class="label--not-pressed plyr__sr-only">Mute</span></button><input data-plyr="volume" type="range" min="0" max="1" step="0.05" value="1" autocomplete="off" role="slider" aria-label="Volume" aria-valuemin="0" aria-valuemax="100" aria-valuenow="100" id="plyr-volume-7987" aria-valuetext="100.0%" style="--value:100%;"></div><button class="plyr__controls__item plyr__control" type="button" data-plyr="pip"><svg aria-hidden="true" focusable="false"><use xlink:href="#plyr-pip"></use></svg><span class="plyr__sr-only">PIP</span></button><button class="plyr__controls__item plyr__control" type="button" data-plyr="fullscreen"><svg class="icon--pressed" aria-hidden="true" focusable="false"><use xlink:href="#plyr-exit-fullscreen"></use></svg><svg class="icon--not-pressed" aria-hidden="true" focusable="false"><use xlink:href="#plyr-enter-fullscreen"></use></svg><span class="label--pressed plyr__sr-only">Exit fullscreen</span><span class="label--not-pressed plyr__sr-only">Enter fullscreen</span></button></div>
      <button type="button" class="plyr__control plyr__control--overlaid" data-plyr="play" aria-label="Play"><svg aria-hidden="true" focusable="false"><use xlink:href="#plyr-play"></use></svg><span class="plyr__sr-only">Play</span></button>
    `

    // eslint-disable-next-line no-new
    const player = new Plyr('#player', { controls, autoplay: true })
    // player.poster = 'poster.jpg'

    let setTime = true
    player.on('playing', () => {
      if (info.currentTime && setTime) {
        player.currentTime = info.currentTime
      }
      setTime = false
    })

    document
      .getElementById('player-close')
      ?.addEventListener('click', () => closeButtonClick(player))
  }, [])

  return (
    <video id="player" data-poster={poster}>
      <source src={info.url} type="video/mp4" />
    </video>
  )
}

export default Player
