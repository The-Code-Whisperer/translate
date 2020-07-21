import React from 'react';
import LanguageContext from '../contexts/LanguageContext'; // to use a context, we have to set up a contextType (specially recognized).
import ColorContext from '../contexts/ColorContext';

class Button extends React.Component {
    // commented out stuff shows how we did it with languageContext's this.context method. Now we use languageContext's Consumer method. This is better because we can get information out of multiple different context objects inside a single component.

    //static  contextType = LanguageContext; // remember, when we write <Button /> that creates an instance of the Button class. So this line is the equivalent of Button.contextType = LanguageContext; So we can write it either way (this way or this latter line below the class).
    renderSubmit(language) {
        return language === 'english' ? 'Submit' : 'Soumettre';
    }
    renderButton(color) {
        return (
            <button className={`ui button ${color}`}>
                <LanguageContext.Consumer>
                    {/* there must be an argument aka child function in between the consumer tags. It will automatically be called with whatever argument is inside the pipe eg. english or french */}
                    {({language}) => this.renderSubmit(language)}
                </LanguageContext.Consumer>
            </button>
        )
    }
    render() {
        // console.log(this.context);
        // const text = this.context === 'english' ? 'Submit' : 'Soumettre';
        return (
            //refactor the button tag inside an arrow function because only a single function child can be inside the context consumer tag.
            <ColorContext.Consumer>
                {(color) => this.renderButton(color)}
            </ColorContext.Consumer>
        );
    };
}



export default Button;