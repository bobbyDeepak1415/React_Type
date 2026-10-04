import ChaiCard from "./components/ChaiCard"
import ChaiList from "./components/ChaiList"

import type { Chai } from "./types"

const menu:Chai[]=[
  {id:1,name:"Toner",price:400},
  {id:2,name:"Ink",price:280},
  {id:3,name:"Sugar",price:120},
]

const App = () => {
  return (
    <div>
      <h2>Hello</h2>
      <ChaiCard name="Coffee" price={180} isSpecial={true}/>
      <div>
        <ChaiList items={menu}/>
      </div>
    </div>
  )
}

export default App
