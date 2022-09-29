import React from 'react';
import userimg from '../../../img/user-2.png'
const Selectitem = ({cart}) => {
    let total_workout_time =0;
    for(const item of cart ){
        total_workout_time =  parseInt ( total_workout_time) + parseInt (item.time)
    }
    const Breaktimearray =[
        {time : 20},
        {time : 30},
        {time : 40},
        {time : 50}
    ]
    const addtotalBreaktime=(time)=>{
        console.log("added",time)
    
    }
    
    return (
        <div>
              <div className='flot'>
                    <img  className="proimg"src={userimg} alt="" /> <h2>Ishrat Jahan</h2>
                </div>
                <br />
                
                   
                    <div >
                    Add a Break 
                        <ul >
                           {
                            Breaktimearray.map(breaktime=><li onClick={() => addtotalBreaktime(breaktime.time)}>{breaktime.time}m</li>)
                           }
                          
                        </ul>
                    </div>
                    
                    <div>
                        <br />
                        <br />
                        <h3>Exercise Details</h3>
                        <p>Selected Items: {cart.length}</p>
                        <div className='input-part'>
                            <h4>Exercise time:</h4>
                            {total_workout_time}
                            </div>
                            <div className='input-part'>
                            
                           
                            </div>
                         <button>Activity Completed</button>
                    </div>
        </div>
    );
};

export default Selectitem;