
interface ChaiCardProps{
    name:string,
    price:number,
    isSpecial?:boolean
}

export function ChaiCard({name,price,isSpecial}:ChaiCardProps){
return (
    <div>
        <h2>Hello</h2>
        <h2>{name} {isSpecial && <span>⭐</span>}</h2>
        <p>{price}</p>
    </div>
)
}

