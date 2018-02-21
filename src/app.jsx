import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react'
import RouteConfig from './router';
import stores from './store';

const App = () => {
    return (
        <Provider {...stores}>
            {RouteConfig}
        </Provider>
    );
}

ReactDOM.render(<App />, document.getElementById('app'));

if (module.hot) {
    module.hot.accept()
}
