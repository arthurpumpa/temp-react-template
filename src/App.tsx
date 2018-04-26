import * as React from 'react';
import logo from './logo.svg';
import './App.css';
import SecondsSinceStart from './SecondsSinceStart';
import {hot} from 'react-hot-loader';

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                    <SecondsSinceStart/>
                </p>
            </div>
        );
    }
}

export default hot(module)(App);
