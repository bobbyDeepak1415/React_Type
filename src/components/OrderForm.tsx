import React, { useState } from "react"


interface OrderFormProps{
  onSubmit(order:{name:string,cups:number}):void
}

export default function OrderForm({onSubmit}:OrderFormProps) {

  const [name,setName]=useState<string>("Masala")
  const [cups,setCups]=useState<number>(1)

  return <form onSubmit={handleSumit}>
<label>Product Name:</label>
<input onChange={(e)=>setName(e.target.value)}/>
  </form>
}

