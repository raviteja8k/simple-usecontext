import React from 'react';
import ThemeContext from './themeContext';
import ComponentC from './ComponentC';
import './Component.css';

// const ComponentB = () => <ComponentC />;
class ComponentB extends React.Component{
    render(){
        return (
            <div className={this.context}>
                <ComponentC />
            </div>
        );
    }
}

ComponentB.contextType = ThemeContext;

export default ComponentB;