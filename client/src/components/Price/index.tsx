import React, { useEffect, useState } from "react";
import { PriceContainer, StyledPriceTag, DiscountDeliveredBy } from "./styles";
import axios from "axios";

type PriceTagType = {
    priceStage?: string;
    priceNumber?: string;
}

export const PriceComponent: React.FC = () => {

    const [firstPrice, setFirstPrice] = useState('');
    const [modifiedPrice, setModifiedPrice] = useState('');

    useEffect(() => {
        axios.get('http://localhost:3001/price')
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }, [])

    return (
        <PriceContainer>
            <StyledPriceTag>
                <PriceTag 
                    priceStage="firstPrice"
                    priceNumber={firstPrice} 
                />
            </StyledPriceTag>

            <StyledPriceTag>
                <PriceTag 
                    priceStage="modifiedPrice"
                    priceNumber={modifiedPrice}
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