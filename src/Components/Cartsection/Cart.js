import React from 'react';

const Cart = (props) => {
    const {picture,name,about,age,time} =props.item;
    
    return (
        <div>
        
            <div className='carts'>
            <img className='cart-img' src={picture} alt="" />
            <h3>{name}</h3>
            <div>
            <p>{about}</p>
            <h6>Age: {age}</h6>
            <h5><span className='firstname'>Time: </span>{time} sec</h5>
            <button onClick={()=>props.addTocart(props.item)}>Add to List</button>
            </div>
            </div>
            
           
        </div>
    );
};

export default Cart;