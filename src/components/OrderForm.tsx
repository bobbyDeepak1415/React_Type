import React, { useState } from "react"


interface OrderFormProps{
  onSubmit(order:{name:string,cups:number}):void
}

export default function OrderForm({onSubmit}:OrderFormProps) {

  const [name,setName]=useState<string>("Masala")
  const [cups,setCups]=useState<number>(1)


  function handleSubmit(){

  }

  return <form onSubmit={handleSubmit}>
    <label>Chai Name:</label>
    <input type="string" value={name} onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setName(e.target.value)}/>
    <label>Cups</label>
    <input type="number"/>
  </form>
}

