import React, { useState } from "react";
import { StyledSubscriptionComponent, SubscriptionContainer, StyledSubscriptionForm, StyledSubscriptionField, StyledButton } from "./styles";
import apiAxios from "../../services/api";
import axios from "axios";

type SubscriptionFieldType = {
    labelTitle?: string;
    onChangeFunction: Function;
}

type Subscription = {
    firstName: string;
    phoneNumber: string;
    email: string;
    company: string;
    partnersNumber: number;
    segment: string;
    solutionDescribe: string;
    site: string;
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

    const [firstName, setFirstName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");
    const [company, setCompany] = useState("");
    const [partnersNumber, setPartnersNumber] = useState("");
    const [segment, setSegment] = useState("");
    const [solutionDescribe, setSolutionDescribe] = useState("");
    const [site, setSite] = useState("");

    const handleSubmit = () => {
        if (
            firstName &&
            phoneNumber &&
            email &&
            company &&
            partnersNumber &&
            segment &&
            solutionDescribe
        ) {

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
            }
            ).then(log => {
                console.log(log);
                alert("Obrigado por sua inscri????o!");
            })
            .catch(err => {
                console.log(err);
                alert("Houve um erro e a inscri????o n??o foi conclu??da. Por favor, tente de novo.");
            })
    
            apiAxios.post('/email',
            {
                "firstName": firstName,
                "phoneNumber": phoneNumber,
                "email": email,
                "company": company,
                "partnersNumber": partnersNumber,
                "segment": segment,
                "solutionDescribe": solutionDescribe,
                "site": site
            }
            ).then(log => {console.log(log)})
            .catch(err => {console.log(err)})
            
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
        } else {
            alert('?? obrigat??rio preencher todos os campos, exceto de "Site:"');
        }
    }


    return (
        <StyledSubscriptionForm>
            <SubscriptionField 
                labelTitle="Nome:"

                onChangeFunction={setFirstName}
            />

            <SubscriptionField 
                labelTitle="Telefone:"
                
                onChangeFunction={setPhoneNumber}
            />

            <SubscriptionField 
                labelTitle="E-mail:"
                
                onChangeFunction={setEmail}
            />

            <SubscriptionField 
                labelTitle="Empresa:"
                
                onChangeFunction={setCompany}
            />

            <SubscriptionField 
                labelTitle="Quantidade de s??cios:"
                
                onChangeFunction={setPartnersNumber}
            />

            <SubscriptionField 
                labelTitle="Segmento:"
                
                onChangeFunction={setSegment}
            />

            <SubscriptionField 
                labelTitle="Descreva a sua solu????o:"
                
                onChangeFunction={setSolutionDescribe}
            />

            <SubscriptionField 
                labelTitle="Site:"
                
                onChangeFunction={setSite}
            />

            <StyledButton>
                <button 
                    onClick={handleSubmit}
                >
                    Inscri????o
                </button>
            </StyledButton>
        </StyledSubscriptionForm>
    );
}

const SubscriptionField = ({ labelTitle, onChangeFunction }: SubscriptionFieldType) => {
    return (
        <StyledSubscriptionField>
            <label 
            >
                {labelTitle}
            </label>

            <input 
                type="text"
                onChange={value => onChangeFunction(value.target.value)}
            />
        </StyledSubscriptionField>
    );
}
