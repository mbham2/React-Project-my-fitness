import React from 'react';
import styled from 'styled-components';
import TopSectionBackgroundImg from '../images/fruits.jpg';
import BikingImg from '../images/biking.jpg';
import JoggingImg from '../images/jogging.jpg';
import { BrandLogo } from '../../components/BrandLogo';


const TopSectionContainer = styled.div`
width:100%;
min-height:100%;
padding:4.5%;
background-image:url(${TopSectionBackgroundImg}), url(${BikingImg}), url(${JoggingImg});
background-position:center,left,right;
background-repeat:no-repeat;
background-size:100% 100%;
animation: 50s shake infinite alternate;
@keyframes shake {
    0% { transform: skewX(-15deg); }
  5% { transform: skewX(15deg); }
  10% { transform: skewX(-15deg); }
  15% { transform: skewX(15deg); }
  20% { transform: skewX(0deg); }
  100% { transform: skewX(0deg); }
}

@media only screen and (min-width: 400px) {
    background-image:url(${TopSectionBackgroundImg}), url(${BikingImg}), url(${JoggingImg});
    background-position:top,middle,bottom;
    background-repeat:no-repeat;
    background-size:40% 100%;
    animation: 50s shake infinite alternate;
    @keyframes shake {
        0% { transform: skewX(-15deg); }
      5% { transform: skewX(15deg); }
      10% { transform: skewX(-15deg); }
      15% { transform: skewX(15deg); }
      20% { transform: skewX(0deg); }
      100% { transform: skewX(0deg); }
    } 
}
`;

const BackgroundFilter = styled.div`
width:100%;
height:800px;
background-color:rgba(255, 249, 238, .10);
display:flex;
flex-direction:column;
`;

const TopSectionInnerContainer = styled.div`
width:100%
height:100%;
display:flex;
align-items:center;
justify-content:sapce-evenly;
`;


const LogoContainer = styled.div`
display:flex;
flex-direction:column;
flex: 2 0 0;
`;

export function TopSection(props) {
    return <TopSectionContainer>
        <BackgroundFilter>
            <TopSectionInnerContainer>
                <LogoContainer>
                    <BrandLogo />
                </LogoContainer>
            </TopSectionInnerContainer>
        </BackgroundFilter>
    </TopSectionContainer>
}