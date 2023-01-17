import React from 'react'
import Directory from '../../components/directory/Directory'
import { Sections } from '../../data/section'

import './home.scss'

export const Home = () => {
  return (
    <div className='homepage'>
        <Directory sections={Sections} />
    </div>
  )
}
