import './App.css'
import { ChaiCard } from './components/ChaiCard.tsx'
import ChaiList from './components/ChaiList.tsx'
import Counter from './components/Counter.tsx'

import type { Chai } from './types.ts'


const menu:Chai[]=[
  {id:1,name:"Masala",price:350},
  {id:2,name:"Cable",price:400},
  {id:3,name:"Coffee",price:250},
]

function App() {

  return (
    <>
  <div>
    <h2>Hello</h2>
    <ChaiCard name="HeadPhones" price={3000}/> 
    <ChaiCard name="Purifier" price={8000} isSpecial={true}/> 
  </div>
  <div>
    <Counter/>
  </div>
  <div>
<ChaiList items={menu}/>
  </div>
    </>...
  )
}

export default App
