import React from 'react'


interface ProductProps{
  title:string,
  price:number,
  isSpecial?:boolean

}
const ProductCard = ({}:ProductProps) => {
  return (
    <div>
      Product Card
    </div>
  )
}

export default ProductCard
