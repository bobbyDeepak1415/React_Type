

interface ProductCardProps{
  name:string,
  price:number,
  isSpecial?:boolean
}
const ProductCard = ({name,price,isSpecial}:ProductCardProps) => {
  return (
    <div>

      <h2>{name} {isSpecial&& <span>⭐</span>}</h2>
      <p>{price}</p>
    </div>
  )
}

export default ProductCard
