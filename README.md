This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Simple App to Understand useContext in React
Keep checking the git log for retracing the steps

1. Create userContext from createContext method in React
2. export Provider and Consumer contexts (refer to components/userContext.js)
3. Top level of the app import Provider and pass value (in this case refer to App.js)
4. Use Consumer context in the component where we are going to use the value (refer to components/ComponentC.js)
5. Pass function as it's child where funtion receives context parameter..use it to display/logic


## Alternate of using Consumer is contextType
Refer to components/themeContext.js for initiating themeContext

I am consuming it in components/ComponentB
1. One method of initiating is 'className.contextType = exported-themecontext' (works in Class based components only)  -refer to components/ComponentB.js
2. Another method is 'static contextType = exported-themecontext' -refer to components/ComponentB.js
3. In both the above cases you can access context value through 'this.context'  -refer to components/ComponentB.js
4. In Function based components, we use 'useContext(exported-themecontext)' hook to access context -refer to components/ThemeButton.js
