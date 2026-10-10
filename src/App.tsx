import ProductCard from "./components/ProductCard"
import ProductList from "./components/ProductList"


import type { Product } from "./types"

const products:Product[]=[
  {id:1,name:"Ink",price:320},
  {id:2,name:"Toner",price:250},
  {id:3,name:"Paper",price:150},
  {id:4,name:"Sugar",price:400},
]

const App = () => {
  return (
    <div>
      <h1>Hello</h1>
<ProductCard name="Coffee" price={250} isSpecial={true}/>
<ProductList items={products}/>
    </div>
  )
}

export default App


