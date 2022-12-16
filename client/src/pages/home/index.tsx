import React from "react";
import  {PartnershipsComponent, HowWorksComponent, MonitoringComponent}  from "../../components";
import { StagesComponent } from "../../components";
import { SubscriptionComponent } from "../../components";
import { IntroductionComponent }  from "../../components";
import { PriceComponent } from "../../components";


export const Home: React.FC = () => {
    return (
        <div>
            <IntroductionComponent/>
            <HowWorksComponent/>
            <StagesComponent/>
            <MonitoringComponent/>
            <PriceComponent/>
            <SubscriptionComponent />
            <PartnershipsComponent />
        </div>
    );
}