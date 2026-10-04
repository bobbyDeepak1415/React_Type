import './App.css'
import { ChaiCard } from './components/ChaiCard.tsx'
import Counter from './components/Counter.tsx'

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
    </>
  )
}

export default App
