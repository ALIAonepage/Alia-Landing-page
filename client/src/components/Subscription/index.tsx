import React from "react";
import { StyledSubscriptionComponent, SubscriptionContainer, StyledSubscriptionForm, StyledSubscriptionField, StyledButton } from "./styles";

type SubscriptionFormType = {
    propriedade?: string;
}

type SubscriptionFieldType = {
    dataField?: string;
    labelTitle?: string;
    inputType?: string;
}

export const SubscriptionComponent: React.FC = () => {
    return (
        <StyledSubscriptionComponent>
            
            <SubscriptionContainer>
                <h2 id="Forms">
                    Inscreva-se no nosso programa
                </h2>

                <SubscriptionForm />
            </SubscriptionContainer>

        </StyledSubscriptionComponent>
    );
}

const SubscriptionForm = ({ propriedade }: SubscriptionFormType) => {
    return (
        <StyledSubscriptionForm>
            <form action="" method="post">
                <SubscriptionField 
                    dataField="firstName"
                    labelTitle="Nome:"
                />

                <SubscriptionField 
                    dataField="phoneNumber"
                    labelTitle="Telefone:"
                    inputType="number"
                />

                <SubscriptionField 
                    dataField="email"
                    labelTitle="E-mail:"
                    inputType="email"
                />

                <SubscriptionField 
                    dataField="company"
                    labelTitle="Empresa:"
                />

                <SubscriptionField 
                    dataField="partnersNumber"
                    labelTitle="Quantidade de sócios:"
                    inputType="number"
                />

                <SubscriptionField 
                    dataField="segment"
                    labelTitle="Segmento:"
                />

                <SubscriptionField 
                    dataField="solutionDescribe"
                    labelTitle="Descreva a sua solução:"
                />

                <SubscriptionField 
                    dataField="site"
                    labelTitle="Site:"
                />

                <SubmitButton />
            </form>
        </StyledSubscriptionForm>
    );
}

const SubscriptionField = ({ dataField, labelTitle, inputType="text" }: SubscriptionFieldType) => {
    return (
        <StyledSubscriptionField>
            <label 
                htmlFor={dataField}
            >
                {labelTitle}
            </label>

            <input 
                required
                type={inputType} 
                name={dataField}
                id={dataField}
            />
        </StyledSubscriptionField>
    );
}

const SubmitButton: React.FC = () => {
    return (
        <StyledButton>
            <button type="submit">
                Inscrição
            </button>
        </StyledButton>
    );
}