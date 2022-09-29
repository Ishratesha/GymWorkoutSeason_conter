import React, { useEffect, useState } from 'react';
import Cart from './Cart';
import userimg from '../../img/user-2.png'
import Selectitem from './SelectCart.js/Selectitem';
const FitnessCart = () => {
    const [workOut_item,setWorkOutItem]=useState([])
    const [cart, setCart] = useState([]);
    useEffect(()=>{
        fetch('./data.json')
        .then(res=>res.json())
        .then(data=>setWorkOutItem(data))
    },[])
    const addTocart =(item)=>{
        console.log('added', item)
    
    const newCart = [...cart, item];
        setCart(newCart);
    }
    return (
        <div className='item-container'>
             
           <div className='cart-container'>
         
            {
                workOut_item.map(item=> <Cart
                key={item._id}
                item={item}
                addTocart ={addTocart}
                ></Cart>)
            }
           </div>
           <div className='aside'>
              <Selectitem cart ={cart}></Selectitem>

                </div>
                
            </div>
        
       
     
    );
};

export default FitnessCart;