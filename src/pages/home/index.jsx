import React from 'react';
import { inject, observer } from 'mobx-react';
import { Link } from "react-router-dom";
import Style from './index.scss';
import Logo from '../../assets/react.svg';

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
            <div className={Style['home-wrapper']}>
                <h1>Home</h1>
                <h1><Link to="/about">About</Link></h1>
                <img src={Logo} alt="logo"/>
            </div>
        );
    }
}

export default Home;
