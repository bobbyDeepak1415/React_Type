import React, { useState } from "react"


interface OrderFormProps{
    onSubmit:(order:{name:string,quantity:number})=>void
}

const OrderForm = ({onSubmit}:OrderFormProps) => {

    const [orderName,setOrderName]=useState("")

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>Order:</label>
            <input value={orderName} type="text" onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setOrderName(e.target.value)}/>
                <button>Submit</button>
        </form>
      
    </div>
  )
}

export default OrderForm
