function Pizza({pizzaList}){
    const soldOut = pizzaList.soldOut;
    return(
        <li className = {`pizza ${soldOut ? 'sold-out' : ''}`}>
            <img src = {pizzaList.photoName} />
            <div>
                <h3>{pizzaList.name}</h3>
                <p>{pizzaList.ingredients}</p>
                <span>{(pizzaList.soldOut) ? 'SOLD OUT' : `$${pizzaList.price}.00`}</span>
            </div>
        </li>
    )

}

export default Pizza;