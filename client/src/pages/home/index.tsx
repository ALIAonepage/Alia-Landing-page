import React from "react";

import { SubscriptionComponent } from "../../components";
import { HomeContainer } from './styles';
import { PriceComponent } from "../../components";

import { LogoCITi } from '../../assets';


export const Home: React.FC = () => {
    return (
        <div>
            <SubscriptionComponent />
            <PriceComponent />
        </div>
    );
}