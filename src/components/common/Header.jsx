import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import Cart from '../Cart'

const Header = ({ cartItems, borrarProducto }) => {
const [isCartOpen, setCartOpen] = useState(false)

  return (
    <header>
        <nav className='bg-gray-300 text-white p-10'>
            <div className='container mx-auto px-6'>
                <ul className='flex gap-8'>
                    <li><Link to='/' className='no-underline text-white hover:text-gray-300'>Home</Link></li>
                    <li><Link to='/nosotros' className='no-underline text-white hover:text-gray-300'>Nosotros</Link></li>
                    <li><Link to='/galeria' className='no-underline text-white hover:text-gray-300'>Galeria de productos</Link></li>
                    <li><Link to='/contacto' className='no-underline text-white hover:text-gray-300'>Contacto</Link></li>
                    <li>
                      <button onClick={()=> setCartOpen(true)}>Carrito</button>
                      <Cart borrarProducto={borrarProducto} cartItems={cartItems} isOpen={isCartOpen} onClose={()=>setCartOpen(false)} />
                    </li>
                </ul>
            </div>
        </nav>
    </header>
  )
}

export default Header