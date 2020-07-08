import React, { useContext } from 'react';
import ThemeContext from './themeContext';

const ThemeButton = () => {
    let context = useContext(ThemeContext);
    // Calling context in funtion based components through useContext
        return(
        // <div>Theme Button {context}</div>
        <button onClick={() => context.changeTheme()}>Change theme</button>
        );
}

export default ThemeButton;