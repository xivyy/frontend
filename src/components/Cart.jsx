import React, { useState } from 'react';
const Cart = () => {
  const [temp, setTemp] = useState([])
  var ajdi = 0
    const checkCart = async () => {
      try {
        const response = await fetch('http://localhost:5000/cart', {
          method: 'GET',
          headers: {
              'Content-Type': 'application/json',  
          },
      });
          if(response.ok) {
            const data = await response.json();
            console.log("Odpowiedz serwera: ", data);
            setTemp(data)
          }
          else {
            const errorData = await response.json();
            console.error("blad: ", errorData);
          }
      } catch(error) {
          console.error("blad: ", error);
          alert("Wystapil blad przy laczeniu serwera");
      }
    }
 

  const del = async () => {
    try {
      const response = await fetch('http://localhost:5000/deleteProduct', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',  
        },
        body: JSON.stringify({
          id: ajdi,
        })
    });
        if(response.ok) {
          const data = await response.json();
          console.log("Odpowiedz serwera: ", data);
        }
        else {
          const errorData = await response.json();
          console.error("blad: ", errorData);
        }
    } catch(error) {
        console.error("blad: ", error);
    }

  }


  return (
    <section className="cart">
      <h2>Twój Koszyk</h2>
      <button onClick={checkCart}>Odswiez</button>
      {temp.map((e) => (
        <div className='product-card'>
          <div className='product-info'>
            <button onClick={() => {ajdi = e.id; del()}}>USUN</button>
            <h3>{e.name}</h3>
            <p>{e.description}</p>
            <p className="price">{e.price} PLN</p>
            <p>{e.soldOut}</p>
          </div>
        </div>
      ))}
      {/* <div className="cart-total">
          <p>Total: 0 PLN</p>
          <button className="checkout-button">Przejdź do kasy</button>
        </div> */}
    </section>
  );
};

export default Cart;