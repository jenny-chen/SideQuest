import React from 'react';
import { Switch } from 'react-router';
import { Route } from 'react-router-dom';
import SearchPage from './Pages/SearchPage';
import SubmitPage from './Pages/SubmitPage';
import HomePage from './Pages/HomePage';

function App() {
    return (
        <div className="App">
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/search" component={SearchPage} />
                <Route exact path="/submit" component={SubmitPage} />
            </Switch>
        </div>
    );
}

export default App;
