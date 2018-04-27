import * as React from 'react';
import logo from './logo.svg';
import SecondsSinceStart from './SecondsSinceStart';
import {hot} from 'react-hot-loader';
import * as styles from './app-styles';

class App extends React.Component {
    render() {
        return (
            <div className={styles.app}>
                <header className={styles.header}>
                    <img src={logo} className={styles.logo} alt="logo"/>
                    <h1 className={styles.title}>Welcome to React</h1>
                </header>
                <p className={styles.intro}>
                    To get started, edit <code>src/App.js</code> and save to reload.
                    <br/>
                    <SecondsSinceStart/>
                </p>
            </div>
        );
    }
}

export default hot(module)(App);
