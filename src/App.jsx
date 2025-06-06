import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './layout/Home'
import Nosotros from './layout/Nosotros'
import GaleriaDeProductos from './layout/GaleriaDeProductos'
import Contacto from './layout/Contacto'
import NotFound from './layout/NotFound'
import DetallesProducto from './components/DetallesProducto'

function App() {
  const [cart, setCart] = useState([])
  const [productos, setProductos] = useState([])
  const [cargando, setCargando] = useState([true])
  const [error, setError] = useState([false])

  useEffect( ()=> {
    fetch('../public/productos.json')
    .then(respuesta => respuesta.json())
    .then(datos => {
      setTimeout(()=>{
        setProductos(datos.productos)
        setCargando(false)
      })
    }, 2000)
      
    .catch(error =>{
      console.log('Error', error)
      setCargando(false)
      setError(true)
    })
  }, [])

  const handleAddToCart = (product, cantidad) => {

    const productInCart = cart.find((item) => item.id === product.id);
    if(productInCart){
      setCart(cart.map((item) => item.id === product.id ? {...item, quantity:item.quantity+cantidad} :item));
    }else{
      setCart([...cart, {...product, quantity:cantidad}]);
    }
  };

const handleDeleteFromCart = (productId) => {
  setCart(prevCart => {
    return prevCart.map(item => {
      if (item.id === productId) {
        return { ...item, quantity: item.quantity - 1 };
      } else {
        return item;
      }
    }).filter(item => item.quantity > 0);
  });
};




  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Home borrarProducto={handleDeleteFromCart} agregarCarrito={handleAddToCart} cart={cart} productos={productos} cargando={cargando} />} />

        <Route path='/nosotros' element={<Nosotros borrarProducto={handleDeleteFromCart} agregarCarrito={handleAddToCart} cart={cart} productos={productos} />} />

        <Route path='/galeria' element={<GaleriaDeProductos borrarProducto={handleDeleteFromCart} agregarCarrito={handleAddToCart} cart={cart} productos={productos} />} />
        
        <Route path='/galeria/:id' element={<DetallesProducto productos={productos}/>} />

        <Route path='/contacto' element={<Contacto cart={cart} />} />
        
        <Route path='/*' element={<NotFound />} />

      </Routes>
    </Router>
    </>
  )
}

export default App
