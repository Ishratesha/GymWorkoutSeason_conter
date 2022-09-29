import React, { useEffect, useState } from 'react';
import Cart from './Cart';

const FitnessCart = () => {
    const [workOut_item,setWorkOutItem]=useState([])
    useEffect(()=>{
        fetch('./data.json')
        .then(res=>res.json())
        .then(data=>setWorkOutItem(data))
    },[])

    return (
        <div className='two-part'>
             
           <div className='cart-section'>
         
            {
                workOut_item.map(item=> <Cart
                key={item._id}
                item={item}
                ></Cart>)
            }
           </div>
           <div className='aside'>
                <div className='flot'>
                    <img src="" alt="" /> <h2>Ishrat Jahan</h2>
                </div>
                <br />
                
                   
                    <div >
                    Add a Break 
                        <ul >
                            <li>20m</li>
                            <li>30m</li>
                            <li>40m</li>
                            <li>50m</li>
                            <li>60m</li>
                        </ul>
                    </div>
                    
                    <div>
                        <h2>Exercise Details</h2>
                        <div className='input-part'>
                            <h3>Exercise time:</h3>
                            <input type="text" name="" id="" />
                            </div>
                            <div className='input-part'>
                            <h3>Break time :</h3>
                            <input type="text" name="" id="" />
                            </div>
                         <button>Activity Completed</button>
                    </div>

                </div>
                
            </div>
        
       
     
    );
};

export default FitnessCart;