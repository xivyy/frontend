import React from 'react';
import { useState } from 'react';


const ProductCard = ({ product }) => {
  const handleSubmit = async () => {
  try {
    const response = await fetch('http://localhost:5000/addProduct', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',  
      },
      body: JSON.stringify({
        name: product.name,
        price: product.price,
        description: product.description,
        soldOut: product.soldOut,
      })
  });
      if(response.ok) {
        const data = await response.json();
        console.log("Odpowiedz serwera: ", data);
        alert("Produkt zostal dodany do koszyka!");
      }
      else {
        const errorData = await response.json();
        console.error("blad: ", errorData);
        alert("Nie udalo sie dodac produktu do koszyka!");
      }
  } catch(error) {
      console.error("blad: ", error);
      alert("Wystapil blad przy laczeniu serwera");
  }
}
  return (<>
    <div className="product-card">
      <div className="product-info">
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <p className="price">{product.price} PLN</p>
        <p>{product.soldOut}</p>
        <button onClick={() => {handleSubmit()}}>Dodaj produkt do koszyka</button>
      </div>
    </div>
  </>);
};


export default ProductCard;