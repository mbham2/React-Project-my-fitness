import React from 'react';
import styled from 'styled-components';

const ButtonWrapper = styled.button`
border: none;
outline:none;
color:Black;
padding: 5px 1em;
font-size:18px;
font-weight:600;
width:15%;
border-radius:3px;
background-color:rgba(247,202,24,1);
cursor:pointer;
margin-left:80%;
transition:all 200ms ease-in-out;

&:hover {
    background-color:#7FFF00;
}

&:focus {
    outline:black;
}`

export function Button(props) {
    return(
   <ButtonWrapper>{props.children}</ButtonWrapper>
   )
 }
