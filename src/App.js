import React from 'react';
import './App.css';

const ComponentA = (props) => <ComponentB user={props.userName}/>;
const ComponentB = (props) => <ComponentC user={props.user}/>;
const ComponentC = (props) => <div>Component C here! Username: {props.user}</div>;

class App extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = {
      user: 'Ravi'
    };
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
