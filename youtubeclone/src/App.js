import React from 'react'
import { AppContext } from './context/contextApi'

const App = () => {
  return (
    <AppContext>
      <div className='text-center text-green-800'>App</div>
    </AppContext>
  )
}

export default App