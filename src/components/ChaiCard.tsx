export function ChaiCard({name,price,isSpecial=false}){
    return (
        <div>
            <article>

            <h2>{name} {isSpecial && <span>⭐</span>}</h2>
            <p>{price}</p>
            </article>
        </div>
    )
}