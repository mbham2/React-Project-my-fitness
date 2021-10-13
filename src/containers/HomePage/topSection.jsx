import React from 'react';
import styled from 'styled-components';
import TopSectionBackgroundImg from '../images/fruits.jpg';
import JoggingImg from '../images/jogging.jpg';



const TopSectionContainer = styled.div`
width:100%;
min-height:100%;
padding:4.5%;
background-image:url(${TopSectionBackgroundImg}),url(${JoggingImg});
background-position:left,bottom right;
background-repeat:no-repeat;
background-size:150% 150%;
animation: 50s shake infinite alternate;
@keyframes shake {
    0% { transform: skewX(-5deg); }
  5% { transform: skewX(5deg); }
  10% { transform: skewX(-5deg); }
  15% { transform: skewX(5deg); }
  20% { transform: skewX(0deg); }
  100% { transform: skewX(0deg); }
}

@media only screen and (min-width: 400px) {
    background-image:url(${TopSectionBackgroundImg}),url(${JoggingImg});
    background-position:left, bottom right;
    background-repeat:no-repeat;
    background-size:50% 100%;
    animation: 50s shake infinite alternate;
    @keyframes shake {
        0% { transform: skewX(-1deg); }
      5% { transform: skewX(1deg); }
      10% { transform: skewX(-1deg); }
      15% { transform: skewX(1deg); }
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


export function TopSection(props) {
    const { children } = props;

    return <TopSectionContainer>
        <BackgroundFilter>
            {children}
           
        </BackgroundFilter>
        
    </TopSectionContainer>
}