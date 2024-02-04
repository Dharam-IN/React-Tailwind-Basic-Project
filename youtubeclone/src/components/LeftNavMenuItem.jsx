import React from 'react'

const LeftNavMenuItem = ({text, icon, action, className}) => {
  return (
    <div className={'text-white cursor-pointer text-sm h-10 flex items-center px-3 mb-1 rounded-lg hover:bg-white/[0.15] ' + className} onClick={action}>
      <span className='text-xl mr-5 flex items-center gap-2'>{icon}</span>
      {text}
    </div>
  )
}

export default LeftNavMenuItem