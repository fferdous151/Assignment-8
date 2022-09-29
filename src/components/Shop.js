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
                <div className='info'>
                    <div>
                        <p>75kg</p>
                        <p>Weight</p>
                    </div>
                    <div>
                        <p>5'7"</p>
                        <p>Height</p>
                    </div>
                    <div>
                        <p>25years</p>
                        <p>Age</p>
                    </div>
                </div>
                <h2>Add A Break</h2>
                <div className='break'>
                    <button>10s</button>
                    <button>20s</button>
                    <button>30s</button>
                    <button>40s</button>
                </div>
            </div>
        </div>
    );
};

export default Shop;