import React from "react";
import { StagesComponent } from "../../components";
import { SubscriptionComponent } from "../../components";
import { IntroductionComponent }  from "../../components";
import { PriceComponent } from "../../components";



export const Home: React.FC = () => {
    return (
     
        <div>
            <IntroductionComponent/>
            <StagesComponent/>
            <PriceComponent />
            <SubscriptionComponent />
        </div>
    );
}