
import type { Product } from '../types'
import ProductCard from './ProductCard'

interface ProductListProps{
products:Product[]
}
const ProductList = ({products}:ProductListProps) => {
  return (
    <div>
      {products.map((product)=>(
        <ProductCard key={product.id} title={product.title} price={product.price} isSpecial={product.price>300}/>
      ))}
      
    </div>
  )
}

export default ProductList
