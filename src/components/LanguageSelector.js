import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

class LanguageSelect extends React.Component {
    // here we'll use this.context instead of setting up Consumer since we only need one context.
    static contextType = LanguageContext;
    render() {
        // suddenly a this.context should exist with contextType = LanguageContext (contextType is specially named) and needs a Context from React.createContext();
        return (
            <div>
                Select a language:
                <i className="flag us" onClick={() => this.context.onLanguageChange('english')} />
                <i className="flag fr" onClick={() => this.context.onLanguageChange('french')} />
            </div>
        )
    }
}

export default LanguageSelect;