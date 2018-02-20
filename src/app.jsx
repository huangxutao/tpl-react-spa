import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    clickHandler = () => {
        // console.log('click -->', this.h1);
    }

    render () {
        return (
            <div className="app-wrapper">
                <h1>
                    A eact SPA Project.
                </h1>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));

if (module.hot) {
    module.hot.accept()
}

export default App;