import React from 'react'
import Logo from '../../Image/logo.png'
import { data } from '../../DataBase'
import './index.css'
import Popup from '../../Components/PopupAttractions'

const Touristspots = () => {

  return (
    <React.Fragment>
      <nav className='Navbar'>
        <a href='/'><img src={Logo} alt="logo" /></a>
      </nav>
      <div className='section-touristspots'>
        {
          data.map((item, index) => {
            return (
              <Popup
                key={index}
                image={item.image}
                name={item.name}
                description={item.description}
                address={item.address}
                linkMaps={item.linkMaps}
                linkComments={item.linkComments}
              />
            )
          })
        }
      </div>
    </React.Fragment>
  )
}

export default Touristspots;