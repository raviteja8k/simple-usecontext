import React, { createContext} from 'react';
import './App.css';

const {Provider, Consumer} = createContext({
  user: {},
  sampleFunc: () => {}
});

const ComponentA = (props) => <ComponentB user={props.userName}/>;
const ComponentB = (props) => <ComponentC user={props.user}/>;
const ComponentC = (props) => <div>Component C here! Username: {props.user.firstName}</div>;

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
    <div className="App">
      <h1>Hola! Simple useContext App</h1>
      <ComponentA userName={this.state.user}/>
    </div>
  );
  }
}

export default App;
