import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCardContext } from '../../Context'
import { XMarkIcon } from '@heroicons/react/20/solid'
import OrderCard from '../OrderCard'
import { totalPrice } from '../../utils'
import './style.css'

const CheckoutSideMenu = () => {
  
  const { isCheckoutSideMenu, closeCheckoutSideMenu,  cartProducts, setCartProducts, order, setOrder, setSearchByTitle} = useContext(ShoppingCardContext)

  const handlerDelete = (id) => {
    const filteredProducts = cartProducts.filter(product => product.id !== id)
    setCartProducts(filteredProducts)
  }

  const handleCheckout = () => {
    const orderToAdd = {
      date: '04.03.23',
      products: cartProducts,
      totalProducts: cartProducts.length,
      totalPrice: totalPrice(cartProducts)
    }
    setOrder([...order, orderToAdd])
    setCartProducts([])
    setSearchByTitle(null)
  }

  return (
    <aside className={`${isCheckoutSideMenu ? 'flex' : 'hidden' } checkout-side-menu flex-col fixed right-0 border border-black rounded-lg bg-white`}>
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">My Order</h2>
        <div> 
            <XMarkIcon className="h-6 w-6 text-black cursor-pointer"
            onClick={() => closeCheckoutSideMenu()} />
        </div>
      </div>
      <div className="px-6 overflow-scroll flex-1">
            {cartProducts.map(product => (
                <OrderCard
                key={product.id}
                id={product.id}
                title={product.title}
                imageUrl={product.image}
                price={product.price}
                handlerDelete={handlerDelete}
                />
            ))}
        </div>
        <div className="px-6 mb-6">
          <p className="flex justify-between items-center mb-2">
            <span className="font-light">Total</span>
            <span className="font-medium text-2xl">${totalPrice(cartProducts)}</span>
          </p>
          <Link to="/my-orders/last">
            <button className="bg-black py-3 text-white w-full rounded-lg" onClick={() => handleCheckout()}>Checkout</button>
          </Link>
        </div>
    </aside>
  )
}

export default CheckoutSideMenu