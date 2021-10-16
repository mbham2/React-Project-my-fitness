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
margin-leftt:10%;
img {
    width:100%;
    height:100%;
}
`;

const LogoTitle = styled.h2`
margin-left:10px;
font-size:${({ size }) => (size ? size + "px" : "5px")}
font-weight:900;
color:yellow;

span {
    background-color:rgba(0,0,205,.20);
 }
`;

export function BrandLogo(props) {
    const { logoSize } = props;
    return (
        <BrandLogoContainer>
            <LogoImage size={logoSize}>
                <img src={LogoImg} alt="logoimage" />
            </LogoImage>
            <LogoTitle>
                Your Fitness
            </LogoTitle>
        </BrandLogoContainer>
    );
}