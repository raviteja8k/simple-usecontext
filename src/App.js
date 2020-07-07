import React, { createContext} from 'react';
import './App.css';

const {Provider, Consumer} = createContext({
  user: {},
  sampleFunct: () => {}
});

const ComponentA = () => <ComponentB />;
const ComponentB = () => <ComponentC />;
const ComponentC = () => <div>Component C here! Username: {user.firstName}</div>;

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

  // componentDidMount(){
  //   fetch('http://localhost:3000/user')
  //   .then(res => res.json())
  //   .then(user => console.log(user))
    
  // }

  sampleFunc(){
    console.log('Sample Func called !');
  }

  render(){
  return (   
    <Provider value={this.state}>
      <div className="App">
        <h1>Hola! Simple useContext App</h1>
        <ComponentA />
      </div>
    </Provider> 
  );
  }
}

export default App;
