import { useState } from "react"

interface OrderFormProps{
    onSubmit(order:{name:string,quantity:number}):void
}

const OrderForm = ({onSubmit}:OrderFormProps) => {

    const [name,setName]=useState<string>("Water bottle")
    const [quantity,setQuantity]=useState<number>(150)

  return <form>
    <label>Product Name:</label>
    <input value={name} type="text" onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setName(e.target.value)} />
    <label>Quantity:</label>
    <input value={quantity} type="number" onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setQuantity(e.target.value)} />
  </form>
}

export default OrderForm
