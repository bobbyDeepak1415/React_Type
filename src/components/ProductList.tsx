
import type { Product } from "../types";
import ProductCard from "./ProductCard";
interface ProductListProps{
items:Product[]
}

const ProductList = ({items}:ProductListProps) => {
  return (
    <div>
      {items.map((product)=>{
        return <ProductCard key={product.id} name={product.name} price={product.price} isSpecial={product.price>300}/>
      })}
    </div>
  )
}

export default ProductList
