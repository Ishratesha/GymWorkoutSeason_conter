import React from 'react';

const Cart = (props) => {
    const {picture,name,about,age,time} =props.item;
    const addTocart =(time)=>{
        console.log('added',time)
    }
    return (
        <div>
        
            <div className='carts'>
            <img className='cart-img' src={picture} alt="" />
            <h3>{name}</h3>
            <div>
            <p>{about}</p>
            <h6>Age: {age}</h6>
            <h5>Time :{time} sce</h5>
            <button onClick={()=>addTocart(time)}>Add to List</button>
            </div>
            </div>
            
           
        </div>
    );
};

export default Cart;