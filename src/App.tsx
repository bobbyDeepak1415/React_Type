import './App.css'
import ChaiCard from './components/ChaiCard'
import ChaiList from './components/ChaiList'


import type { Chai } from './types'

const menu:Chai[]=[
{id:1,name:"Toner",price:250},
{id:1,name:"Ink",price:350},
{id:1,name:"Paper",price:150},
]

function App() {

  return (
    <div>
  <div>
    <h2>Hello</h2>
    <ChaiCard name="Coffee" price={300} />
    </div>
    <div>
      <ChaiList items={menu}/>
      
    </div>
    </div>
  )
}

export default App
