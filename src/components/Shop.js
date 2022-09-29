import React, { useEffect, useState } from 'react';
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
                <div className='pic-name'>
                    <h2>Fahim Ferdous</h2>
                </div>
            </div>
        </div>
    );
};

export default Shop;