import React from 'react';
import { BrandLogo } from '../BrandLogo';
import styled from 'styled-components';


const NavbarContainer = styled.div`
width:100%;
height:100px;
display:flex;
alignment-items:center;
`;



export function Navbar(props) {
    return (
        <NavbarContainer>
            <div className="navbar">
                <div className="leftSide">
                    <BrandLogo />
                </div>
                <div className="rightSide">
                    <div className="links">
                        <a href="/home">Home</a>
                        <a href="/diet">Diet</a>
                        <a href="/fitness">Fitness</a>
                        <a href="/bmi">BMI</a>
                        
                    </div>
                </div>
            </div>


        </NavbarContainer>
    );
}