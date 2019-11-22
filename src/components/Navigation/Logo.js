import React from 'react'

import { LogoWrapepr } from './styles'

const Logo = ({ color, height = 32, onClick }) => (
  <LogoWrapepr onClick={onClick}>
    <svg height={height} viewBox="0 0 400 39" style={{ color }}>
      <path fill="currentColor" d="M4.6,7.2v30.1H0V0h4.8l21.5,29.5V0h4.6v37.4h-4.5L4.6,7.2z"/>
      <path fill="currentColor" d="M39.6,0h4.6v22.7c0,6.8,3.7,11.1,10.6,11.1c6.9,0,10.6-4.3,10.6-11.1V0h4.6v22.8C70.1,32.1,65,38,54.9,38
        c-10.1,0-15.2-6-15.2-15.2V0z"/>
      <path fill="currentColor" d="M90.9,22.5h-7.4v14.8h-4.6V0h15c6.8,0,11.7,4.4,11.7,11.3c0,6.7-4.6,10.4-9.7,10.9L106,37.4h-5.5L90.9,22.5z
        M93.3,4.1h-9.8v14.3h9.8c4.4,0,7.4-3,7.4-7.2S97.7,4.1,93.3,4.1z"/>
      <path fill="currentColor" d="M127.3,0h24.5v4.1H132v12h19.4v4.1H132v12.9h19.8v4.1h-24.5V0z"/>
      <path fill="currentColor" d="M159.2,0h4.6v37.4h-4.6V0z"/>
      <path fill="currentColor" d="M177.2,7.2v30.1h-4.6V0h4.8l21.5,29.5V0h4.6v37.4H199L177.2,7.2z"/>
      <path fill="currentColor" d="M212.2,0h24.5v4.1h-19.8v12h19.4v4.1h-19.4v12.9h19.8v4.1h-24.5V0z"/>
      <path fill="currentColor" d="M258.5,0h16.6c6.5,0,10.5,3.9,10.5,9.5c0,4.7-3.1,7.8-6.6,8.6c4,0.6,7.3,4.7,7.3,9.2c0,6-4,10.1-10.8,10.1h-17
        V0z M274.4,16.2c4.2,0,6.4-2.6,6.4-6c0-3.4-2.2-6-6.4-6h-11.2v12H274.4z M274.6,33.2c4.4,0,6.9-2.5,6.9-6.4c0-3.4-2.4-6.4-6.9-6.4
        h-11.4v12.9H274.6z"/>
      <path fill="currentColor" d="M293.8,0h4.6v22.7c0,6.8,3.7,11.1,10.6,11.1c6.9,0,10.6-4.3,10.6-11.1V0h4.6v22.8c0,9.3-5.1,15.2-15.2,15.2
        c-10.1,0-15.2-6-15.2-15.2V0z"/>
      <path fill="currentColor" d="M345.1,22.5h-7.4v14.8H333V0h15c6.8,0,11.7,4.4,11.7,11.3c0,6.7-4.6,10.4-9.7,10.9l10.1,15.2h-5.5L345.1,22.5z
        M347.4,4.1h-9.8v14.3h9.8c4.4,0,7.4-3,7.4-7.2S351.8,4.1,347.4,4.1z"/>
      <path fill="currentColor" d="M384.7-0.6c6.6,0,11.2,2.9,14.5,7l-3.7,2.3c-2.4-3-6.3-5.2-10.8-5.2c-8.2,0-14.4,6.3-14.4,15.2
        c0,8.8,6.2,15.2,14.4,15.2c4.5,0,8.2-2.2,10-4v-7.6h-12.8v-4.1h17.5v13.5c-3.5,3.9-8.6,6.4-14.7,6.4c-10.6,0-19.2-7.8-19.2-19.4
        C365.5,7.1,374.1-0.6,384.7-0.6z"/>
    </svg>
  </LogoWrapepr>
)

export default Logo