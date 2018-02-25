import React from 'react';
import { inject, observer } from 'mobx-react';
import { Link } from "react-router-dom";
import Style from "./index.scss";

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
            <div className={Style['about-wrapper']}>
                <h1>About</h1>
                <h1><Link to="/home">back to home</Link></h1>
            </div>
        );
    }
}

export default About;
