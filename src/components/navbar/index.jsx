import React from 'react';
import { BrandLogo } from '../BrandLogo';
import styled from 'styled-components';


const NavbarContainer = styled.div`
width:100%;
height:85px;
display:flex;
alignment-items:center;
`

export function Navbar(props) {
    return(
    <NavbarContainer>
       <BrandLogo/>
    </NavbarContainer>
    );
}