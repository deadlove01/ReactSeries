import React, { useState } from 'react'
import Directory from '../../components/directory/Directory'
import SECTIONS_DATA from '../../data/section'

import './home.scss'

export const Home = () => {

    const [sections, setSections] = useState(SECTIONS_DATA)


  return (
    <div className='homepage'>
        <Directory sections={sections} />
    </div>
  )
}
