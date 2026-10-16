import OrderForm from "./components/OrderForm"

import ProductCard from "./components/ProductCard"
import ProductList from "./components/ProductList"
import type { Product } from "./types"

const items:Product[]=[
  {id:1,name:"Ink",price:340},
  {id:2,name:"Sugar",price:120},
  {id:3,name:"Toner",price:540},
  {id:4,name:"Paper",price:80},
]


const App = () => {
  return (
    <div>
      <h1>Hello</h1>
      <ProductCard name="Coffee" price={250} isSpecial={true}/>
      <ProductList products={items}/>
<OrderForm onSubmit={(product)=>{
  console.log("Order placed:",product.name,product.quantity)
}}/>
    </div>
  )
}

export default App


