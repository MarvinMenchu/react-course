import { useContext } from 'react'
import { ShoppingCardContext } from '../../Context'
import { XMarkIcon } from '@heroicons/react/20/solid'
import OrderCard from '../OrderCard'
import './style.css'

const CheckoutSideMenu = () => {
  
  const { isCheckoutSideMenu, closeCheckoutSideMenu,  cartProducts} = useContext(ShoppingCardContext)
  return (
    <aside className={`${isCheckoutSideMenu ? 'flex' : 'hidden' } checkout-side-menu flex-col fixed right-0 border border-black rounded-lg bg-white`}>
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">My Order</h2>
        <div> 
            <XMarkIcon className="h-6 w-6 text-black cursor-pointer"
            onClick={() => closeCheckoutSideMenu()} />
        </div>
      </div>
      <div className="px-6">
            {cartProducts.map(product => (
                <OrderCard
                key={product.id}
                title={product.title}
                imageUrl={product.image}
                price={product.price}
                />
            ))}
        </div>
    </aside>
  )
}

export default CheckoutSideMenu