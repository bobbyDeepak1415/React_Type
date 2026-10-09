import { useState } from "react"


interface OrderFormProps{
  onSubmit(order:{name:string,quantity:number}):void
}
export default function OrderForm({onSubmit}:OrderFormProps) {

const [name,setName]=useState<string>("Water Bottle")
const [quantity,setQuantity]=useState<number>(2)

const handleSubmit=(e:React.FormEvent<HTMLFormElement>)=>{
e.preventDefault()
onSubmit({name,quantity})
}

  return <form onSubmit={handleSubmit}>
    <label>Product Name:</label>
    <input type="string" value={name} onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setName(e.target.value)}/>
    <label>Quantity:</label>
    <input type="number" value={quantity} onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setQuantity(Number(e.target.value))}/>
      <button type="submit">Submit</button>
  </form>
}
