import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

import Home from "./Home";
import Loader from './Loader';

@inject('collectionStore')
@observer
class HomeContainer extends Component {
    componentWillMount() {
        this.props.collectionStore.fetchAll();
    }

    render() {
        const { collectionStore, ...otherProps } = this.props;
        if (collectionStore.loading) {
            return <Loader/>;
        }
        return <Home {...otherProps} collections={collectionStore.collections} />;
    }
}

export default HomeContainer;
