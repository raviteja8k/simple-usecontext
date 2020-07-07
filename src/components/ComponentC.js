import React from 'react';
import {UserConsumer} from './userContext'

const ComponentC = () => (
    <UserConsumer>
         {
         state => 
                            <div>
                                Component C ! Passed Name: {state.user.firstName} <br />
                                <button onClick={() => state.sampleFunc()}>Click for function</button>
                             </div>
        }
        
    </UserConsumer>
    );

export default ComponentC;