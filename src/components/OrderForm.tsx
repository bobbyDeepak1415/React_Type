import React, { useState } from 'react'


interface OrderFormProps{
  onSubmit:(order:{name:string,price:number})=>void
}
const OrderForm = ({onSubmit}:OrderFormProps) => {

  const [name,setName]=useState<string>("")
  const [price,setPrice]=useState<number>(0)

  const handleSubmit=(e:React.FormEvent<HTMLFormElement>)=>{
e.preventDefault()

e.preventDefault()

onSubmit({name,price})

  }

  return (
    <div>
      <h3>
        Order here:
        </h3>
        <form onSubmit={handleSubmit}>


        <label>Item Name:</label>
        <input  value={name} type='text' onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setName(e.target.value)}/>
        <label>Price:</label>
        <input value={price} type='number' onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setPrice(Number(e.target.value))}/>
        <button type='submit'>Order</button>
        </form>

    </div>
  )
}

export default OrderForm
