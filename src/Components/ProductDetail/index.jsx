import { useContext } from 'react'
import { ShoppingCardContext } from '../../Context'
import { XMarkIcon } from '@heroicons/react/20/solid'
import './style.css'

const ProductDetail = () => {
  
    const { isProductDetailOpen, closeProductDetail, productToShow } = useContext(ShoppingCardContext);

  return (
    <aside className={`${isProductDetailOpen ? 'flex' : 'hidden' } product-detail flex-col fixed right-0 border border-black rounded-lg bg-white`}>
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">Detail</h2>
        <XMarkIcon className="h-6 w-6 text-black cursor-pointer" onClick={() => closeProductDetail()} />
      </div>
      <figure className="px-6">
        <img 
            className='w-full h-full rounded-lg' 
            src={productToShow.image} 
            alt={productToShow.title} />
      </figure>
      <p className="flex flex-col p-6">
        <span className="font-medium text-2xl mb-2">${productToShow.price}</span>
        <span className="font-medium text-md">{productToShow.title}</span>
        <span className="font-light text-md">{productToShow.description}</span>
      </p>
    </aside>
  )
}

export default ProductDetail