import React from 'react';
import './home.css';
import TodoList from './ToDoList';
function Home() {
  return (
    <div>
        <div className='home-title'>
            <h2>
                Welcome Murad!
            </h2>
        </div>
        {/* <div className='home-sec-title'>
            <h5>
                Team 
            </h5>
        </div> */}
        <div className='row home-body'>
            <div className='home-body-left' style={{width:"80%"}}>
               {/* <h4>
                    To do list 
                </h4> */}
                <TodoList/>
            </div>
            <div className='home-body-right' style={{width:"20%"}}>
               <h5 >
                    Online - offline
                </h5> 
                <div>
                    List of employees
                    Name Status
                </div>
            </div>
            
        </div>

    </div>
  )
}

export default Home