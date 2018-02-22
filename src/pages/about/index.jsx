import React from 'react';
import { inject, observer } from 'mobx-react'

@inject('aboutStore') @observer
class About extends React.Component {
    constructor (props) {
        super(props);

        this.store = props.aboutStore;
    }

    componentWillMount () {
        this.store.fetchData();
    }

    render () {
        console.log('page about')
        return (
            <div className="about-wrapper">
                <h1>About</h1>
            </div>
        );
    }
}

export default About;
