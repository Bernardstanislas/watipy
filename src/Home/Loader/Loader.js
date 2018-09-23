import React from 'react';

import StyledLoader from './Loader.style';
import logo from '../Logo/logo.svg';

class Loader extends React.PureComponent {
    render() {
        return (
            <StyledLoader>
                <div className='image'>
                    <img alt='logo' src={logo} />
                </div>
            </StyledLoader>
        );
    }
}

export default Loader;
