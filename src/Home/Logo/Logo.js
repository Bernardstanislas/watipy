import React from 'react';

import logo from './logo.svg';
import StyledLogo from './Logo.style';

export default class Category extends React.PureComponent {
    render() {
        return (
            <StyledLogo>
                <img className='image' src={logo} alt='The logo'/>
                <div className='name'>
                    WATIPY
                </div>
            </StyledLogo>
        );
    }
}
