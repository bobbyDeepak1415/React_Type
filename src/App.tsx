import OrderForm from "./components/OrderForm"
import ProductCard from "./components/ProductCard"
import ProductList from "./components/ProductList"

import type { Product } from "./types"

const products:Product[]=[
  {id:1,name:"Sugar",price:350},
  {id:2,name:"Milk",price:150},
  {id:3,name:"Ink",price:200},
  {id:4,name:"Toner",price:400},
]

const App = () => {
  return (
    <div>
      <h1>Hello</h1>
      <ProductCard name="Coffee" price={300} isSpecial={true}/>
      <ProductList items={products}/>
      <OrderForm 
      onSubmit={(order)=>{
        console.log("Placed order:",order.name,order.cups)
      }}
      />
      
    </div>
  )
}

export default App

