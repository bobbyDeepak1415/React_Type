


interface ProductCardProps{
  name:string,
  price:number,
  isSpecial?:boolean
}
const ProductCard = ({name,price,isSpecial}:ProductCardProps) => {
  return (
    <div>
      <h2></h2>
    </div>
  )
}

export default ProductCard
