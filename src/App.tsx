import './App.css'
import { ChaiCard } from './components/ChaiCard.tsx'

function App() {

  return (
  <div>
    <h2>Hello</h2>
    <ChaiCard name="HeadPhones" price={3000}/> 
    <ChaiCard name="Purifier" price={8000} isSpecial={true}/> 
  </div>
  )
}

export default App
