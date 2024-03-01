import { useContext } from 'react'
import { ShoppingCardContext } from '../../Context'
import { XMarkIcon } from '@heroicons/react/20/solid'
import './style.css'

const CheckoutSideMenu = () => {
  
    const { isCheckoutSideMenu, closeCheckoutSideMenu } = useContext(ShoppingCardContext);

  return (
    <aside className={`${isCheckoutSideMenu ? 'flex' : 'hidden' } checkout-side-menu flex-col fixed right-0 border border-black rounded-lg bg-white`}>
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">My Order</h2>
        <div> 
            <XMarkIcon className="h-6 w-6 text-black cursor-pointer"
            onClick={() => closeCheckoutSideMenu()} />
        </div>
        
      </div>
    </aside>
  )
}

export default CheckoutSideMenu