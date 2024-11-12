import React from 'react';
import ProductCard from './ProductCard';

const ProductList = ({ products }) => {
  return (<>
    <h2 style={{display: 'flex', flexDirection: 'column', textAlign: 'center', paddingTop: 20}}>Nasze Produkty</h2>
    <section className="product-list">
      <div className="product-cards">
        {products.length === 0 ? (
          <p>Ładowanie produktów...</p>
        ) : (
          products.map((product) => <ProductCard key={product.id} product={product} />)
        )}
      </div>
    </section>
   </>);
};

export default ProductList;