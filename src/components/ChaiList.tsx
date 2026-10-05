import type { Chai } from "../types"
import ChaiCard from "./ChaiCard"

interface ChaiListProps{
items:Chai[]

}
const ChaiList = ({items}:ChaiListProps) => {
  return (
    <div>
      {items.map((chai)=>{
        return <ChaiCard key={chai.id} name={chai.name} isSpecial={chai.price>300} price={chai.price}/>
      })}
      
    </div>
  )
}

export default ChaiList
