import ChaiCard from "./components/ChaiCard"
import ChaiList from "./components/ChaiList"

import type { Chai } from "./types"

const menu:Chai[]=[
{id:1,name:"Toner",price:250},
{id:2,name:"Ink",price:400},
{id:3,name:"Sugar",price:75}
]
  


const App = () => {
  return (
    <div>
      <h1>Hello</h1>

      <ChaiCard name="Coffee" price={350} isSpecial={true}/>

<div>
  <ChaiList items={menu} />
</div>
      
    </div>
  )
}

export default App
