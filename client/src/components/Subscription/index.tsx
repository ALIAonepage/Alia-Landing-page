import React, { useState } from "react";
import { StyledSubscriptionComponent, SubscriptionContainer, StyledSubscriptionForm, StyledSubscriptionField, StyledButton } from "./styles";
import apiAxios from "../../services/api";

type SubscriptionFieldType = {
    dataField?: string;
    labelTitle?: string;
    inputType?: string;
    onChangeFunction: Function;
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

const SubscriptionForm: React.FC = () => {

    const [firstName, setFirstName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState(0);
    const [email, setEmail] = useState('');
    const [company, setCompany] = useState('');
    const [partnersNumber, setPartnersNumber] = useState(0);
    const [segment, setSegment] = useState('');
    const [solutionDescribe, setSolutionDescribe] = useState('');
    const [site, setSite] = useState('');

    const handleSubmit = () => {
        apiAxios.post('/subscription',
        {
            "firstName": firstName,
            "phoneNumber": phoneNumber,
            "email": email,
            "company": company,
            "partnersNumber": partnersNumber,
            "segment": segment,
            "solutionDescribe": solutionDescribe,
            "site": site
        }).then(log => {console.log(log)})
        .catch(err => {console.log(err)})
    }

    console.log(
        `
        firstName: ${firstName}
        phoneNumber: ${phoneNumber}
        email: ${email}
        company: ${company}
        partnersNumber: ${partnersNumber}
        segment: ${segment}
        solutionDescribe: ${solutionDescribe}
        site: ${site}
        `
    )

    return (
        <StyledSubscriptionForm>
            <SubscriptionField 
                dataField="firstName"
                labelTitle="Nome:"

                onChangeFunction={setFirstName}
            />

            <SubscriptionField 
                dataField="phoneNumber"
                labelTitle="Telefone:"
                inputType="number"
                
                onChangeFunction={setPhoneNumber}
            />

            <SubscriptionField 
                dataField="email"
                labelTitle="E-mail:"
                inputType="email"
                
                onChangeFunction={setEmail}
            />

            <SubscriptionField 
                dataField="company"
                labelTitle="Empresa:"
                
                onChangeFunction={setCompany}
            />

            <SubscriptionField 
                dataField="partnersNumber"
                labelTitle="Quantidade de sócios:"
                inputType="number"
                
                onChangeFunction={setPartnersNumber}
            />

            <SubscriptionField 
                dataField="segment"
                labelTitle="Segmento:"
                
                onChangeFunction={setSegment}
            />

            <SubscriptionField 
                dataField="solutionDescribe"
                labelTitle="Descreva a sua solução:"
                
                onChangeFunction={setSolutionDescribe}
            />

            <SubscriptionField 
                dataField="site"
                labelTitle="Site:"
                
                onChangeFunction={setSite}
            />

            <StyledButton>
                <button 
                    type="submit"
                    onClick={handleSubmit}
                >
                    Inscrição
                </button>
            </StyledButton>
        </StyledSubscriptionForm>
    );
}

const SubscriptionField = ({ dataField, labelTitle, inputType="text", onChangeFunction }: SubscriptionFieldType) => {
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

                onChange={value => onChangeFunction(value.target.value)}
            />
        </StyledSubscriptionField>
    );
}
