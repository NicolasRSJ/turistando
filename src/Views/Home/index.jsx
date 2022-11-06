import React from 'react'
import Logo from '../../Image/logo.png'
import "./index.css"

const Home = () => {
  return (
    <React.Fragment>
      <nav className='Navbar'>
        <img src={Logo} alt="logo" />
      </nav>
      <section>
        <div className='item-1'>
          <h1>Turismo <br/><span>Capixaba</span></h1>
          <p className='typing-demo'>Descubra, explore e encante-se!</p>
        </div>
        <div className='item-2'>
          <button><a href='/pontosturisticos'>Ver mais</a></button>
        </div>
        <div className='item-3'/>
      </section>
    </React.Fragment>
  )
}

export default Home
