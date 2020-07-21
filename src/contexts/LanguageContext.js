// reason we make this a separate file is because we will import it into only the files we care about. 
import React from 'react';

const Context = React.createContext('english'); // how are we getting information into and out of the context? Well first of all set a default value of 'english'. Now we can use this.context in any component we import this to and any of their child components. Context must be capitalized because otherwise JSX thinks it's html tag instead of a Context from React.

// this is for setting language property in the overarching state.
export class LanguageStore extends React.Component {
    state = { language: 'english' } // default initialization
    onLanguageChange = (language) => {
        this.setState({ language });
    }
    render() {
        return (
            // What is the purpose of this context provider? To provide a context. What about the value? It passes on information gives to the Consumer function at the other end. We're passing in the current state (which says what the current language is) and the ability to change the language.
            <Context.Provider value={{ ...this.state, onLanguageChange: this.onLanguageChange }}>
                {this.props.children} {/* applies to any generic children we don't know ahead of time*/}
            </Context.Provider>
        );
    }
}

export default Context;