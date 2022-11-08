import React from 'react'
import Logo from '../../Image/logo.png'
import { data } from '../../DataBase'
import './index.css'
import Popup from '../../Components/PopupAttractions'

const Touristspots = () => {

  const highlights = data.map((item, index) => {
    if(item.known === true && item.unknown === false){
      return(
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
    }
  })

  const unknown = data.map((item, index) => {
    if(item.known === false && item.unknown === true){
      return(
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
    }
  })

  return (
    <React.Fragment>
      <nav className='Navbar'>
        <a href='/'><img src={Logo} alt="logo" /></a>
      </nav>
      <div className='section-touristspots'>
        <div className='row'>
          <div className='header-row'>
            <h1>Desconhecidos</h1>
          </div>
          <div className="section-row">
            {unknown}
          </div>
        </div>
        <div className='row'>
          <div className='header-row'>
            <h2>Destaques</h2>
          </div>
          <div className="section-row">
            {highlights}
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Touristspots;