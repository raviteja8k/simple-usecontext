import React from 'react';
import './App.css';

const ComponentA = () => <ComponentB />;
const ComponentB = () => <ComponentC />;
const ComponentC = () => <div>Component C here!</div>;

class App extends React.Component {
  render(){
  return (
    <div className="App">
      <h1>Hola! Simple useContext App</h1>
      <ComponentA />
    </div>
  );
  }
}

export default App;
