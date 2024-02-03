import React, { useContext, useState } from 'react'
import { Context } from '../context/contextApi'
import { useLocation, useNavigate } from 'react-router-dom'

const Header = () => {

  const [searchQuery, setSearchQuery] = useState()

  const {loading, mobileMenu, setMobileMenu} = useContext(Context)

  const navigate = useNavigate()
  
  const searchQueryHandler = (event)=>{
    if((event?.key === "Enter" || event === "searchButton") && searchQuery?.length > 0){
      navigate(`/searchResult/${searchQuery}`)
    }
  };

  const mobileMenuToggle = ()=>{
    setMobileMenu(!mobileMenu)
  }

  const {pathname} = useLocation()

  return (
    <div>Header</div>
  )
}

export default Header