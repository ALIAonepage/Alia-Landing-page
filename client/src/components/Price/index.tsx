import React from "react";
import { PriceContainer, StyledPriceTag, DiscountDeliveredBy } from "./styles";

type PriceTagType = {
    priceStage?: string;
    priceNumber?: string;
}

export const PriceComponent: React.FC = () => {
    return (
        <PriceContainer>
            <StyledPriceTag>
                <PriceTag 
                    priceStage="firstPrice"
                    priceNumber="700" 
                />
            </StyledPriceTag>

            <StyledPriceTag>
                <PriceTag 
                    priceStage="modifiedPrice"
                    priceNumber="70" 
                />
            </StyledPriceTag>

            <DiscountDeliveredBy>
                Desconto fornecido por SEBRAE-PE
            </DiscountDeliveredBy>
        </PriceContainer>
    );
}

const PriceTag = ({ priceStage, priceNumber }: PriceTagType) => {
    return (
        <div className={priceStage}>
            <p className="cifra">
                R$
            </p>
            <p className="number">
                {priceNumber}
            </p>
        </div>
    );
}