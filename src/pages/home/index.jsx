import React from 'react';
import { inject, observer } from 'mobx-react'

@inject('homeStore') @observer
class Home extends React.Component {
    constructor (props) {
        super(props);
        this.store = props.homeStore;
    }

    componentDidMount () {
        this.store.fetchData();
    }

    render () {
        return (
            <div className="home-wrapper">
                <h1>Home</h1>
            </div>
        );
    }
}

export default Home;
