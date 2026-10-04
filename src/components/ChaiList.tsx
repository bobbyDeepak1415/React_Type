

import type { Chai } from "../types"
import ChaiCard from "./ChaiCard"

interface ChaiListProps{
items:Chai[]
}

const ChaiList = ({items}:ChaiListProps) => {
  return (
    <div>
      {items.map((chai)=>{
        return <ChaiCard name={chai.name} key={chai.id} price={chai.price} isSpecial={chai.price>300}/>
      })}
      
    </div>
  )
}

export default ChaiList
