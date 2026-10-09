import React, { useState } from "react"


interface OrderFormProps{
  onSubmit(order:{name:string,cups:number}):void
}

export default function OrderForm({onSubmit}:OrderFormProps) {

  const [name,setName]=useState<string>("Masala")
  const [cups,setCups]=useState<number>(1)

  function handleSumit(e:React.FormEvent<HTMLFormElement>){

  }

  return <form onSubmit={handleSumit}>
<label>Chai Name:</label>
<input value={name} onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setName(e.target.value)}/>
<label>Cups:</label>
<input value={cups} type="number" onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setCups(Number(e.target.value) || 0)}/>
  </form>
}

