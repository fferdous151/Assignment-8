import React from 'react';
import './Product.css'

const Product = (props) => {
    const { name, img, details, age, time } = props.product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h2>Name: {name}</h2>
                <h5>Details: {details}</h5>
                <h5>For Age: {age}</h5>
                <h5>Time Required: {time}s</h5>

            </div>
            <button onClick={() => props.addToCart(props.product)} className='btn-cart'>Add To List</button>

        </div>
    );
};

export default Product;