import styled, { keyframes } from 'styled-components';

const glowAnimation = keyframes`
    0% {
        transform: scale(1);
    }
    
    50% {
        transform: scale(1.3);
    }
    
    100% {
        transform: scale(1);
    }
`;

const StyledLoader = styled.div`
    img {
        width: 200px;
        position: fixed;
        left: calc(50vw - 100px);
        top: calc(50vh - 100px);
        animation: ${glowAnimation} 3s ease-in-out infinite;
    }
`;

export default StyledLoader;
