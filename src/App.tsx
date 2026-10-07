import ProductCard from "./components/ProductCard"
import ProductList from "./components/ProductList"

import type { Product } from "./types"

const products:Product[]=[
  {id:1,name:'Coffee',price:300},
  {id:2,name:'Sugar',price:150},
  {id:3,name:'Toner',price:350},
  {id:4,name:'Ink',price:200},
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
