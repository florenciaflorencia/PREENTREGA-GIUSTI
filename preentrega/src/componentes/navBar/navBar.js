import React from 'react'
import './navBar.css';
import cartWidget from '../CartWidget/CartWidget'


function navbar() {
    return (
        <div className='navContainer'>
            <nav className='nav'>
                <div className='title'>
                  <h3 className='titlePri'>DECOHOME</h3> 
                </div>
                <ul className='list'>
                    <li className='listElement'>INICIO</li>
                    <li className='listElement'>PRODUCTOS</li>
                    <li className='listElement'>ENVIOS Y DEVOLUCIONES</li>
                    <li className='listElement'>CONTACTO</li>
                </ul>
                <CartWidget className="ico"/>
            </nav>
        </div>
    )    
}

export default navBar