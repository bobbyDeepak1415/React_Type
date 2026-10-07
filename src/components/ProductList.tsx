import type { Product } from "../types"
import ProductCard from "./ProductCard"
interface ProductListProps{
items:Product[]
}
const ProductList = ({items}:Product) => {
  return (
    <div>
      {items.map((product)=>{
        return <ProductCard/>
      })}
    </div>
  )
}

export default ProductList


