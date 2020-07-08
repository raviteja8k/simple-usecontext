import React from 'react';
import {UserConsumer} from './userContext'

const ComponentC = () => (
    <UserConsumer>
         {
         state => 
                  <div>
                      <h1>Hola! Simple useContext App</h1>
                           {state.user.firstName ? 
                           <span>Hello {state.user.firstName} !</span> : 
                           <span>Logged Out!</span>}  
                           <br />
                       <button onClick={() => state.sampleFunc()}>Log out</button>
                  </div>
        }
        
    </UserConsumer>
    );

export default ComponentC;