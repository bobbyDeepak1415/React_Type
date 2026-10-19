import ProductCard from "./components/ProductCard"
import ProductList from "./components/ProductList"

import type { Product } from "./types"


const items:Product[]=[
{id:1,name:"Sugar",price:100},
{id:2,name:"Ink",price:400},
{id:3,name:"Paper",price:100},
{id:4,name:"Toner",price:870},
]

const App = () => {
  return (
    <div>
      <h1>Hello</h1>
<ProductCard name="Coffee" price={250} isSpecial={true}/>

<ProductList products={items}/>
    </div>
  )
}

export default App

