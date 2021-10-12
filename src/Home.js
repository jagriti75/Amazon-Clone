import React from 'react';
import './Home.css';
import Product from './Product'

function Home(){
    return(
        <div className='home'>
            <div className='home__container'>
                <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/dealspaget3/Desktop_Header1500x178_EN.jpg" alt=""/>
                <div className="home__row home__rowone">
                <Product id="1" title="Redmi 10 (Sporty Orange, 4GB RAM, 64GB Storage) | 2.3GHz Mediatek Helio G35 Octa core Processor" price={25000} image="https://m.media-amazon.com/images/I/41tbmj1WoyL.jpg " rating={5} />
                <Product id="2" title="Redmi 9 (Sporty Orange, 4GB RAM, 64GB Storage) | 2.3GHz Mediatek Helio G35 Octa core Processor" price={15000} image="https://m.media-amazon.com/images/I/911TJ1CDbLL._SL1500_.jpg" rating={4}/>
            </div>
            <div className="home__row">
                <Product id="3" title="Redmi Note 10S (Deep Sea Blue, 6GB RAM, 64GB Storage)" price={12999} image="https://m.media-amazon.com/images/I/81B0HJigO-L._SL1500_.jpg" rating={4}/>
                <Product id="4" title="Redmi 9 Power (Blazing Blue, 4GB RAM, 64GB Storage)" price={14999} image="https://m.media-amazon.com/images/I/71hEzQGO5qL._SL1500_.jpg " rating={3}/>
                <Product id="5" title="Oppo A54 (Moonlight Gold, 4GB RAM, 128GB Storage)" price={20000} image="https://m.media-amazon.com/images/I/61O5zV2kwkS._SL1500_.jpg " rating={4}/>
                
            </div>
            <div className="home__row">
            <Product id="6" title=" Samsung 80 cm (32 Inches) Wondertainment Series HD Ready LED Smart TV UA32T4340AKXXL (Glossy Black) (2020 Model)" price={45000} image="https://m.media-amazon.com/images/I/71AzHe9Vv+L._SL1200_.jpg " rating={5}/>
            </div>
        </div>
        
        </div>

    )
}

export default Home;