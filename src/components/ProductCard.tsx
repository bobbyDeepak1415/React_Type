

interface ProductCardProps{

}
const ProductCard = ({name,price,isSpecial}:ProductCardProps) => {
  return (
    <div>
        <h2>{name} {isSpecial && <span>⭐</span>}</h2>
      
    </div>
  )
}

export default ProductCard
