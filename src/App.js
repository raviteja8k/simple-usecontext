import React from 'react';
import './App.css';
import ComponentA from './components/ComponentA';
import {UserProvider} from './components/userContext';


// const {Provider, Consumer} = createContext({
//   user: {},
//   sampleFunc: () => {},
// });

//const ComponentA = () => <ComponentB />;
// const ComponentB = () => <ComponentC />;
// const ComponentC = () => (
// <Consumer>
//   {({user, sampleFunc}) => <div>Component C ! Passed Name: {user.firstName} <br />
//                             <button onClick={() => sampleFunc()}>Click for function</button></div>}  
// </Consumer>
// );

class App extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = {
      user: {
        "id": 1,
        "userName": "ravi2101",
        "firstName": "Ravi Teja",
        "lastName": "T" 
      },
      sampleFunc: () => this.sampleFunc()
    };
  }

  sampleFunc(){
    console.log('Sample Func called !');
  }

  render(){
  return (       
      <div className="App">
        <h1>Hola! Simple useContext App</h1>        
        <UserProvider value={this.state}>  
          <ComponentA />
        </UserProvider> 
      </div>
    
  );
  }
}

export default App;
