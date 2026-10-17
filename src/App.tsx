import ProductCard from "./components/ProductCard"

import type { Product } from "./types"

const items:Product[]=[
  {id:1,name:"Toner",price:350},
  {id:2,name:"Ink",price:250},
  {id:3,name:"Sugar",price:480},
  {id:4,name:"Bottle",price:70},
]

const App = () => {
  return (
    <div>
      <h1>Hello</h1>
      <ProductCard name="Coffee" price={250} isSpecial={true}/>
    </div>
  )
}

export default App

