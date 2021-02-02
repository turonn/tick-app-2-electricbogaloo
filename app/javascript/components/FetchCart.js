import React, {useState, useEffect} from 'react'
import CartCard from './CartCard'

const FetchCart = () => {
    const [cart, setCart] = useState([]);

    const csrfToken = document.querySelector("[name='csrf-token']").content

    useEffect( () => {
      fetch('/cart.json', { method: 'GET', headers: { "X-CSRF-Token": csrfToken }}) 
      .then((resp) => resp.json())
      .then((data) => setCart([...data]))
    },[]);
  
    let cartData = []
    if (cart[0]) {
        cartData = cart.map((item) => { //might need to get Game by ID...
            return (
                <CartCard
                    key={item.id} //need to reformat this
                    attributes={item}
                />
            )
        })
    } else {
        cartData = <div style={{textAlign: 'center', fontSize: '1.5rem'}}>Your cart is empty.</div>
    }
    return(
        <div>{cartData}</div>
    );
}
export default FetchCart
