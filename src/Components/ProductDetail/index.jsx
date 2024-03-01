import { useContext } from 'react'
import { ShoppingCardContext } from '../../Context'
import { XMarkIcon } from '@heroicons/react/20/solid'
import './style.css'

const ProductDetail = () => {
  
    const { isProductDetailOpen, closeProductDetail } = useContext(ShoppingCardContext);

  return (
    <aside className={`${isProductDetailOpen ? 'flex' : 'hidden' } product-detail flex-col fixed right-0 border border-black rounded-lg bg-white`}>
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">Detail</h2>
        <XMarkIcon className="h-6 w-6 text-black" onClick={() => closeProductDetail()} />
      </div>
    </aside>
  )
}

export default ProductDetail