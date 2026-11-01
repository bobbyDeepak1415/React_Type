

interface ProductProps{
  title:string,
  price:number,
  isSpecial?:boolean

}
const ProductCard = ({title,price,isSpecial}:ProductProps) => {
  return (
    <div>
      {title}
      <br></br>
      {price}
      {isSpecial &&
      
      <span>🌟</span>
      }
    </div>
  )
}

export default ProductCard
