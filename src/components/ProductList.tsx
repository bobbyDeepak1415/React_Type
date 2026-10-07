import type { Product } from "../types"
import ProductCard from "./ProductCard"
interface ProductListProps{
items:Product[]
}
const ProductList = ({items}:ProductListProps) => {
  return (
    <div>
      {items.map((product)=>{
        return <ProductCard isSpecial={product.price>300} name={product.name} price={product.price} key={product.id}/>
      })}
    </div>
  )
}

export default ProductList


