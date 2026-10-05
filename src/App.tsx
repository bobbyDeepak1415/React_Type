import ChaiCard from "./components/ChaiCard"
import ChaiList from "./components/ChaiList"

import type { Chai } from "./types"


const menu:Chai[]=[
  {id:1,name:"Ink",price:350},
  {id:2,name:"Toner",price:400},
  {id:3,name:"Paper",price:200},
]
const App = () => {
  return (
    <div>
      <h1>
        Hello
        </h1>
        <div>
          <ChaiCard name="Coffee" price={250} isSpecial={true}/>
          <ChaiList items={menu}/>

        </div>


    </div>
    )
}

export default App
