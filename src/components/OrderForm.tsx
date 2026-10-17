import { useState } from "react"


interface OrderFormProps{
    onSubmit:(order:{name:string,quantity:number})=>void
}

const OrderForm = ({onSubmit}:OrderFormProps) => {

    const [name,setName]=useState<string>("")
    const [quantity,setQuantity]=useState<number>(0)


    const handleSubmit=(e)=>{
e.preventDefault()
onSubmit({name,quantity})
    }

  return <form onSubmit={handleSubmit}>
    <label>Order Name:</label>
    <input value={name} type="text" onChange={(e)=>setName(e.target.value)}/>
    <label>Quantity:</label>
    <input value={quantity} type="number" onChange={(e)=>setQuantity(Number(e.target.value))}/>
  </form>
}

export default OrderForm
