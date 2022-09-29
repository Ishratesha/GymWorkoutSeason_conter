import React from 'react';

const ReactQUAnswer = () => {
    return (
        <div>
            <div>
               <h2># Ques-1 : How React works?</h2>
               One of the biggest advantages of using React is that you can infuse HTML code with JavaScript.

Users can create a representation of a DOM node by declaring the Element function in React. The code below contains a combination of HTML and JavaScript :
A React app usually has a single root DOM node. Rendering an element into the DOM will change the user interface of the page.

For instance, the following code displays “Hello World” on the page by rendering the element into a DOM node called root.
            </div>
            <br />
            <div>
              <h2># Ques-2 : difference between props and state react ?</h2>
              
              The key difference between props and state is that state is internal and controlled by the component itself while props are external and controlled by whatever renders the component.
              props (short for “properties”) and state are both plain JavaScript objects. While both hold information that influences the output of render, they are different in one important way: props get passed to the component similar to function parameters whereas state is managed within the component similar to variables declared within a function.

So simply state is limited to our current component but props can be pass to any component we wish.
 We can pass the state of the current component as prop to other components.
                
            </div>
            <br />
            <div>
                <h2># Ques-3 : where the useEffect use expect fetching data ?</h2>
                <p>
        
1.Reading from local storage
2.Registering and deregistering event listeners.
 when components (re-)render because effects run after every render cycle.
Effects are always executed after render, but  options to opt out from this behavior.
To opt out or skip effects, basic JavaScript concepts about values. An effect is only rerun if at least one of the values specified as part of the effect’s dependencies has changed since the last render cycle. This constitutes another strategy to skip unnecessary reruns of effects.
                </p>
            </div>
        </div>
    );
};

export default ReactQUAnswer;