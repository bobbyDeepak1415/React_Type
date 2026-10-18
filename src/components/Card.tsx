
import type {PropsWithChildren,ReactNode} from 'react'

interface CardProps extends PropsWithChildren{
    title:string,
    footer?:ReactNode
}

const Card = ({title,children,footer}:CardProps) => {
  return (
    <section>
        
    </section>
  )
}

export default Card
