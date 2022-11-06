import React from 'react'
import './index.css'

const Popup = (props) => {
  return (
    <React.Fragment>
        <div className='body-pop-up'>
            <div className='container-image'>
                <img src={props.image} alt='convento' />
            </div>
            <div className='header-pop-up'>
                <h1>{props.name}</h1>
            </div>
            <div className='section-pop-up'>
                <p><span>Descrição:</span> {props.description}</p>
                <p><span>Endereço:</span> {props.address}</p>
            </div>
            <div className='footer-pop-up'>
                <button><a href={props.linkMaps}>Ver no Mapa</a></button>
                <button><a href={props.linkComments} >Comentário</a></button>
            </div>
        </div>
    </React.Fragment>
  )
}

export default Popup;