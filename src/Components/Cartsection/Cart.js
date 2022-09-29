import React from 'react';

const Cart = (props) => {
    const {picture,name,about,age,time} =props.item
    return (
        <div className='two-part'>
            <div className='cart-part'>
            <div className='carts'>
            <img className='cart-img' src={picture} alt="" />
            <h3>{name}</h3>
            <p>{about}</p>
            <h6>Age: {age}</h6>
            <h5>Time :{time}</h5>
            <button>Add to List</button>
            </div>
            </div>
           
        </div>
    );
};

export default Cart;