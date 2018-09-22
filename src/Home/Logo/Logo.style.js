import styled from 'styled-components';

const StyledLogo = styled.div`
    position: fixed;
    z-index: 2;
    margin: 20px;
    
    .image {
        height: 70px;
    }

    .name {
        letter-spacing: 10px;
        font-size: 40px;
        display: inline-block;
        margin-left: 16px;
        transform: translateY(-20px);
        color: #3D3636;
    }
`;

export default StyledLogo;
