import React from 'react';
import UserCreate from './UserCreate';
import { LanguageStore } from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';
import LanguageSelector from './LanguageSelector';
class App extends React.Component {
    
    render() {
        return (
            <div className="ui container">
                <LanguageStore>
                    <LanguageSelector />
                    {/* This appears to be what's needed to transmit the changing context to the other components. (creates a pipe) */}
                    <ColorContext.Provider value="red">
                        <UserCreate />
                    </ColorContext.Provider>
                </LanguageStore>
            </div>
        );
    }
}

export default App;