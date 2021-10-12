
import React from 'react';
import './Checkout.css';
import Subtotal from './Subtotal';
import CheckoutProduct from './CheckoutProduct';
import {useStateValue} from "./StateProvider"

function Checkout(){

    const [{basket},dispatch] =  useStateValue();

    return(
        <div className="checkout">
            <div className='checkout__left'>
                <div className="check">
                <img
                    className='checkout__ad'
                    src="https://m.media-amazon.com/images/G/01/cart/empty/kettle-desaturated._CB445243794_.svg"
                    alt=""
                />
                </div>

                <div>
                    <h2 className='checkout__title'>
                        Your Shopping Basket is empty
                    </h2>

                    {basket.map((item) => (
                        <CheckoutProduct id ={item.id}
                        image = {item.image}
                        title = {item.title}
                        price = {item.price}
                        />

                    ))} 
                </div>
            </div>

            <div className = 'checkout__right'>
                <Subtotal/>
            </div>
        </div>
    );
}

export default Checkout;