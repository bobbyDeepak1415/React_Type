import { useState } from "react"

interface OrderFormProps{
    onSubmit(order:{name:string,quantity:number}):void
}

const OrderForm = ({onSubmit}:OrderFormProps) => {

    const [name,setName]=useState()

  return <form>
    <label>Product Name:</label>
    <input/>
  </form>
}

export default OrderForm
