import React from 'react';

import StyledHome from './Home.style';
import Category from './Category';
import Logo from './Logo';

const colors = [
    { backgroundColor: '#fef9f9', textColor: '#ff4e00' },
    { backgroundColor: '#f5fefd', textColor: '#1cd0c4' },
    { backgroundColor: '#ffffff', textColor: '#594e4e' }
];

const horizontalCenters = [ 1/6, 1/2, 5/6 ];

export default class Home extends React.PureComponent {
    render() {
        const { collections, onMouseMove } = this.props;

        return (
            <StyledHome onMouseMove={onMouseMove}>
                <Logo/>
                {collections.map((collection, index) => (
                    <Category
                        title={collection.title.toUpperCase()}
                        key={collection.title}
                        backgroundColor={colors[index].backgroundColor}
                        textColor={colors[index].textColor}
                        horizontalCenter={horizontalCenters[index]}
                    />
                ))}
            </StyledHome>
        );
    }
}
