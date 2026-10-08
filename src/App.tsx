import ProductCard from "./components/ProductCard"

const App = () => {
  return (
    <div>
      <h1>Hello</h1>
      <ProductCard name="Coffee" price={300} isSpecial={true}/>
      
    </div>
  )
}

export default App

