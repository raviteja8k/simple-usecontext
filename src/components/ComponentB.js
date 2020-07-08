import React from 'react';
import ThemeContext from './themeContext';
import ComponentC from './ComponentC';
import './Component.css';
import ThemeButton from './ThemeButton';

// const ComponentB = () => <ComponentC />;
class ComponentB extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            theme: '',
            changeTheme: () => this.changeTheme()
        } 
    }

    static contextType = ThemeContext;
    // Another method for pulling contextType
    
    componentDidMount(){
        this.setState({theme: this.context})
        // Assigning theme to this.context 
    };

    changeTheme(){
        let newTheme = this.state.theme;
        
        if(newTheme === 'dark'){
            newTheme = 'light'
        }else {
            newTheme = 'dark'
        }
       this.setState({theme: newTheme});
    }

    render(){
        
        return (
            <div className={this.state.theme + ' block'}>
                <ComponentC />
    
                <ThemeContext.Provider value={this.state}>
                    <ThemeButton />
                </ThemeContext.Provider>   
                {/* <button onClick={() => this.state.changeTheme()}>Click to Change theme!</button> */}
            </div>
        );
    }
}

// ComponentB.contextType = ThemeContext;
// One way of initialising contextType

export default ComponentB;