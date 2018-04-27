import * as React from 'react';

interface SecondsSinceStartState {
    secondsSinceReload: number;
}

class SecondsSinceStart extends React.Component<{}, SecondsSinceStartState> {
    interval;

    state = {
        secondsSinceReload: 0,
    };

    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState(({secondsSinceReload}) => ({secondsSinceReload: ++secondsSinceReload}));
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return `Seconds since reload: ${this.state.secondsSinceReload}s`;
    }
}

export default SecondsSinceStart;
