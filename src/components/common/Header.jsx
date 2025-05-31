import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import Cart from '../Cart'

const Header = ({ cartItems, borrarProducto }) => {
const [isCartOpen, setCartOpen] = useState(false)

  return (
    <header>
        <nav className='bg-yellow-500 font-semibold text-white p-4'>
            <div className='flex justify-center'>
                <ul className='flex gap-24'>
                    <li><Link to='/' className='no-underline text-white hover:text-gray-900'>HOME</Link></li>
                    <li><Link to='/nosotros' className='no-underline text-white hover:text-gray-900'>NOSOTROS</Link></li>
                    <li><Link to='/galeria' className='no-underline text-white hover:text-gray-900'>TIENDA</Link></li>
                    <li><Link to='/contacto' className='no-underline text-white hover:text-gray-900'>CONTACTO</Link></li>
                    <li>
                      <button className='cursor-pointer no-underline text-white hover:text-gray-900' onClick={()=> setCartOpen(true)}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                          <path strokeLinecap="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                        </svg>
                      </button>
                      <Cart borrarProducto={borrarProducto} cartItems={cartItems} isOpen={isCartOpen} onClose={()=>setCartOpen(false)} />
                    </li>
                </ul>
            </div>
        </nav>
    </header>
  )
}

export default Header