import React, { useEffect, useState } from 'react';
import Menu from './Menu/Menu';
import Product from './Product/Product';
import './Shop.css';

const Shop = () => {

    const [products, setProducts] = useState([]);
    const [showMenu, setShowMenu] = useState([])
    useEffect(() => {
        fetch('info.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const addToCart = (product) => {
        const newShow = [...showMenu, product]
        setShowMenu(newShow);
    }

    return (
        <div className='shop-container'>
            <div className='bg'>
                <div className='header-bg'>
                    <h2>FITNESS CLUB</h2>
                    <h3>Select today's exercise</h3>
                </div>
                <div className="products-container">
                    {

                        products.map(product => <Product
                            key={product.id}
                            product={product}
                            addToCart={addToCart}
                        ></Product>)
                    }
                </div>
            </div>
            <div className="menu-container">

                {/* <div className='pic-name'>
                    <h2>Fahim Ferdous</h2>
                </div>
                <div className='info'>
                    <div>
                        <h4>75kg</h4>
                        <h5>Weight</h5>
                    </div>
                    <div>
                        <h4>5'7"</h4>
                        <h5>Height</h5>
                    </div>
                    <div>
                        <h4>25years</h4>
                        <h5>Age</h5>
                    </div>
                </div>
                <h2>Add A Break</h2>
                <div className='break'>
                    <button className='button-time'>10s</button>
                    <button className='button-time'>20s</button>
                    <button className='button-time'>30s</button>
                    <button className='button-time'>40s</button>
                </div>
                <h2>Exercise Details</h2>
                <div className='exercise-time'>
                    <h4>Exercise time {totalTime}s</h4>
                </div>
                <div className='break-time'>
                    <h4>Break time</h4>
                </div>
                <button className='btn-complete'>Activity Completed</button> */
                    <Menu showMenu={showMenu}></Menu>
                }
            </div>
        </div>
    );
};

export default Shop;