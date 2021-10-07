import React from 'react';
import './Product.css';

function Product({title,price,image,rating}){
    return(
        <div className='product'>
            <div className='product__info'>
                <p>{title}</p>
                <p className='product__price'>
                    <p><small>Rs</small></p>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {Array(rating).fill().map((_,i)=>
                    (
                        // eslint-disable-next-line
                        <p><span>⭐</span></p>
                    ))}
                </div>
                <img src={image} alt=""/>
                <button>Add to Basket</button>
            </div>
            
        </div>
    )       
}

export default Product;