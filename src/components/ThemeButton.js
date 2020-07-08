import React, { useContext } from 'react';
import ThemeContext from './themeContext';

const ThemeButton = () => {
    let context = useContext(ThemeContext);

        return(
        <div>Theme Button {context}</div>
        );
}

export default ThemeButton;