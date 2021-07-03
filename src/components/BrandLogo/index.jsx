import React from 'react';
import styled from 'styled-components';
import LogoImg from '../../containers/images/logo.png';


const BrandLogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const LogoImage = styled.div`
width: ${({ size }) => (size ? size + "px" : "5em")};
height: ${({ size }) => (size ? size + "px" : "5em")};
img {
    width:100%;
    height:100%;
}
`;

const LogoTitle = styled.h2`
margin:0;
font-size:${({ size }) => (size ? size + "px" : "25px")}
color:#ffff
font-weight:900;
`;

export function BrandLogo(props) {
    const {size} = props;
    return (
    <BrandLogoContainer>
        <LogoImage>
            <img src={LogoImg} alt="logoimage"/>
        </LogoImage>
        <LogoTitle size={size}>
            
        </LogoTitle>
    </BrandLogoContainer>
    );
}