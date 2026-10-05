import ProductCard from "./components/ProductCard"

const App = () => {
  return (
    <div>
      <h1>Hello</h1>
      <ProductCard name="Coffee" price={300} isSpecial={true}/>
      <ProductCard name="Milk" price={150}/>

    </div>
  )
}

export default App
