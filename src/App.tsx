// import OrderForm from "./components/OrderForm"

import ProductCard from "./components/ProductCard"





const App = () => {
  return (
    <div>
      <h1>Hello</h1>
      <ProductCard name="Coffee" price={250} isSpecial={true}/>
{/* <OrderForm onSubmit={(product)=>{
  console.log("Order placed:",product.name,product.quantity)
}}/> */}
    </div>
  )
}

export default App


