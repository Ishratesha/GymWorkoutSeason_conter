import React, { useEffect, useState } from 'react';
import Cart from './Cart';
import userimg from '../../img/user-2.png'
const FitnessCart = () => {
    const [workOut_item,setWorkOutItem]=useState([])
    useEffect(()=>{
        fetch('./data.json')
        .then(res=>res.json())
        .then(data=>setWorkOutItem(data))
    },[])

    return (
        <div className='item-container'>
             
           <div className='cart-container'>
         
            {
                workOut_item.map(item=> <Cart
                key={item._id}
                item={item}
                ></Cart>)
            }
           </div>
           <div className='aside'>
                <div className='flot'>
                    <img  className="proimg"src={userimg} alt="" /> <h2>Ishrat Jahan</h2>
                </div>
                <br />
                
                   
                    <div >
                    Add a Break 
                        <ul >
                            <li>20m</li>
                            <li>30m</li>
                            <li>40m</li>
                            <li>50m</li>
                          
                        </ul>
                    </div>
                    
                    <div>
                        <br />
                        <br />
                        <h3>Exercise Details</h3>
                        <div className='input-part'>
                            <h4>Exercise time:</h4>
                            <input type="text" name="" id="" />
                            </div>
                            <div className='input-part'>
                            <h4>Break time :</h4>
                            <input type="text" name="" id="" />
                            </div>
                         <button>Activity Completed</button>
                    </div>

                </div>
                
            </div>
        
       
     
    );
};

export default FitnessCart;