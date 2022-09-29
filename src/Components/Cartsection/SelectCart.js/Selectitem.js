import React, { useState } from 'react';
import userimg from '../../../img/user-2.png'

import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
const Selectitem = ({cart}) => {
    //toast 
    const notify = () => toast("Your daily task has completed!",{position:'top-center'});
    //calculate the sum of workout time
    let total_workout_time =0;
    for(const item of cart ){
        total_workout_time =  parseInt ( total_workout_time) + parseInt (item.time)
    }

    const Breaktimearray =[
        {time : 20},
        {time : 30},
        {time : 40},
        {time : 50},

    ]
    
  const [time, settime] = useState([]);
    const addtotalBreaktime=(time)=>{
       console.log("clicked",time) 
        const newtime = time 
        settime(newtime)
    
    }
   
      
  

    
    return (
        <div>
              <div className='flot'>
                    <img  className="proimg"src={userimg} alt="" /> <h2>Ishrat Jahan <br />
                    <small>Ashulia, Dhaka</small></h2>
                </div>
                <br />
                
                   
                    <div >
                        <div className='flot'>
                            <li>weight <br />
                            45Kg</li>
                            <li>hight <br />
                            5.5</li>
                        
                        </div>
                   <h3> Add a Break </h3>
                        <ul >
                           {
                            Breaktimearray.map(breaktime=><li  onClick={() => addtotalBreaktime(breaktime.time)}>{breaktime.time}m</li>)
                           }
                          
                        </ul>
                    </div>
                    
                    <div>
                        <br />
                        <br />
                        <h3>Exercise Details</h3>
                        <p>Selected Items: {cart.length}</p>
                        <div className='input-part'>
                            <h4>Exercise time: </h4>
                            <span className='time'>{total_workout_time} seconds</span>
                            </div>
                            <div className='input-part'>
                            <h4>Break Time :{time} m </h4>
                           
                            </div>
                         <button onClick={notify}>Activity Completed</button>
                        
    <ToastContainer></ToastContainer>
                         



  
   
  


                    </div>

        </div>
    );

};
export default Selectitem ;