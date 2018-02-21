import React from 'react';
import ReactDOM from 'react-dom';
import RouteConfig from './router';

class App extends React.Component {
    render () {
        return (
            <div className="app-wrapper">
                {RouteConfig}
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));

if (module.hot) {
    module.hot.accept()
}

// export default App;