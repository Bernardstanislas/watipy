import React from 'react';
import styled from 'styled-components';

import PointerContext from 'pointer';

const StyledCategory = styled.div`
    width: 33%;
    background-color: ${props => props.backgroundColor};
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 70px;
    overflow-x: hidden;
    
    &:nth-of-type(3) {
        z-index: 1;
    }
    
    &:nth-of-type(4) {
        z-index: 2;
    }
    
    .title {
        position: relative;
    }
    
    .name {
        font-size: 60px;
        letter-spacing: 15px;
        color: #191c1b;
    }
    
    .dropped-text-container {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        display: flex;
        flex-direction: column;
        color: ${props => props.textColor};
        font-size: 200px;
        justify-content: center;
        line-height: 0.35;
    }
    
    .dropped-text {
        transform: translate(${props => props.xOffset * 30}px, ${props => props.yOffset * 30}px);
        opacity: 0.13;
    }
`;

export default ({ horizontalCenter, backgroundColor, textColor, children}) => (
    <PointerContext.Consumer>
        {({ x, y }) => (
            <StyledCategory
                backgroundColor={backgroundColor}
                textColor={textColor}
                xOffset={horizontalCenter - x}
                yOffset={0.5 - y}
            >
                {children}
            </StyledCategory>
        )}
    </PointerContext.Consumer>
);
