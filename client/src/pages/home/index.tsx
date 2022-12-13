import React from "react";
import { StagesComponent } from "../../components";
import { SubscriptionComponent } from "../../components";
import { HomeContainer } from './styles';
import { PriceComponent } from "../../components";

import { LogoCITi } from '../../assets';


export const Home: React.FC = () => {
    return (
     
        <div>
            <StagesComponent/>
            <SubscriptionComponent />
            <PriceComponent />
        </div>
    );
}