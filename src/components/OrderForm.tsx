import React, { useState } from "react"

interface OrderFormProps{
    onSubmit(order:{name:string,quantity:number}):void
}

const OrderForm = ({onSubmit}:OrderFormProps) => {

    const [name,setName]=useState<string>("")
    const [quantity,setQuantity]=useState<number>(0)


    const handleSubmit=(e:React.FormEvent<HTMLFormElement>)=>{
e.preventDefault()
onSubmit({name,quantity})
    }

  return <form onSubmit={handleSubmit}>
    <label>Product Name:</label>
    <input value={name} type="text" onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setName(e.target.value)} />
    <label>Quantity:</label>
    <input value={quantity} type="number" onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setQuantity(Number(e.target.value))} />
        <button type="submit">Submit</button>
  </form>
}

export default OrderForm
