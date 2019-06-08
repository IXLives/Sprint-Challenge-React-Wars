# Answers

1.  What is React JS and what problems does it try and solve?
    React is a front-end library for JavaScript that abstracts away much of the DOM manipulation syntax, allows us to remember the State of a component, and pass Props between components. It allows for ease of design and updating of that design with new information in real-time.

1.  What does it mean to _think_ in react?
    To be able to see a web app in terms of the components that compose its design and functionality, and intuit how they were constructed. Or to look at a design and see it in terms of individual components, rather than as a whole design.

1.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.
    A class component has State, extends the React.Component, and generally is used for functionality and holding data. A functional component, despite the misnomer, is more often used for presentation or design.

1.  Describe state.
    An object on class/stateful components that holds dev-defined information, can be updated with the setState() method.

1.  Describe props.
    Props are defined when calling a component from a higher order component, and can be referenced by a dev-defined key in the component they were defined in the invocation of. Both the key and the value are dev-defined in the invocation and the value can be anything in the higher order component that the dev can define.
