import OrderForm from './components/OrderForm'
import ProductCard from './components/ProductCard'
import ProductList from './components/ProductList'


const items=[
  {id:1,title:"Toner",price:250},
  {id:2,title:"Ink",price:530},
  {id:3,title:"Paper",price:452},
  {id:4,title:"Sugar",price:65},
  {id:5,title:"Milk",price:800},
]


const App = () => {
  return (
    <div>
      <h2>
        
        Cart Page
        </h2>
        <ProductCard title="Coffee" price={300} isSpecial={true} />
<ProductList products={items}/>
<br></br>
<OrderForm onSubmit={(product)=>{
  console.log('order placed: ', product.name,product.price)
}}/>

    </div>
  )
}

export default App
