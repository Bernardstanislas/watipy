import React from 'react';
import { Provider as MobxProvider } from 'mobx-react';

import PointerContext from './pointer';
import Home from './Home';
import collectionStore from 'stores/collection.store';

class App extends React.Component {
    state = {
        x: 0.5,
        y: 0.5
    };

    onMouseMove = (event) => {
        const { width, height } = document.querySelector('body').getBoundingClientRect();
        this.setState({
            x: event.clientX / width,
            y: event.clientY / height
        });
    };

    render() {
        return (
            <MobxProvider collectionStore={collectionStore}>
                <PointerContext.Provider value={this.state}>
                    <Home onMouseMove={this.onMouseMove}/>
                </PointerContext.Provider>
            </MobxProvider>
        );
    }
}

export default App;
