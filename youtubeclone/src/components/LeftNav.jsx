import React, {useContext} from 'react'
import {Link, useNavigate} from 'react-router-dom'

import LeftNavMenuItem from './LeftNavMenuItem'
import { categories } from '../utils/constants'
import { Context } from '../context/contextApi'

const LeftNav = () => {

  const {selectCategories, setSelectCategories, mobileMenu} = useContext(Context)
  const navigate = useNavigate()

  const clickHandler = (name, type)=>{
    switch (type) {
      case "category":
        return setSelectCategories(name)

      case "home":
        return setSelectCategories(name)
      
      case "menu":
        return false
      
      default:
        break;
    }
  }
  
  console.log(mobileMenu)

  return (
    <div className={`md:block w-[240px] overflow-y-auto h-full py-4 bg-black absolute md:relative z-10 translate-x-[-240px] md:translate-x-0 transition-all ${mobileMenu ? "translate-x-[0px]" : ""}`}>
      <div className="flex px-5 flex-col">
        {
          categories.map((item)=>{
            return(
              <React.Fragment key={item.name}>
                <LeftNavMenuItem 
                text={item.type === "home" ? "Home" : item.name} 
                icon={item.icon} 
                action={()=>{
                  clickHandler(item.name, item.type); 
                  navigate("/")
                }} 
                className={`${selectCategories === item.name ? "bg-white/[0.15]" : ""}`}/>
                {item.divider && (<hr className='my-5 bg-white/[0.2]'/>)}
              </React.Fragment>
            )
          })
        }
        <hr className='my-5 bg-white/[0.2]'/>
        <div className="text-white/[0.5] text-[12px]">
          Youtube Clone by <Link to={"https://github.com/dharam-in"} target='_blank' className='text-white font-semibold text-sm'>Dharam</Link>
        </div>
      </div>
    </div>
  )
}

export default LeftNav