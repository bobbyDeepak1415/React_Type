import React, { useState } from "react"


interface OrderFormProps{
  onSubmit(order:{name:string,cups:number}):void
}

export default function OrderForm({onSubmit}:OrderFormProps) {

  const [name,setName]=useState<string>("Masala")
  const [cups,setCups]=useState<number>(1)

  return <form onSubmit={handleSubmit}>
    <label>Product name:</label>
    <input onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{
      setName(e.target.value)
    }}/>
  </form>
}

