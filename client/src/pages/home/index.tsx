import React from "react";

import { HomeContainer } from './styles';
import { PriceComponent } from "../../components";

import { LogoCITi } from '../../assets';


export const Home: React.FC = () => {
    return (
        <div>
            <HomeContainer>
                <img src={LogoCITi} alt="" />
                <h1>ReactJS Boilerplate</h1>
                <p>
                    Made with
                    {' '}
                    <strong>&lt; &#x0002F; &gt;</strong>
                    {' '}
                    and
                    {' '}
                    <strong>&hearts;</strong>
                    {' '}
                    by CITi
                </p>
            </HomeContainer>
            <PriceComponent />
        </div>
    );
}