import { MailServer } from "src/services/MailServer";
import dotenv from "dotenv";
import { Request, Response } from "express";

dotenv.config();

const SendMail = async (request: Request, response: Response) => {

    try {
        const { firstName, 
            phoneNumber, 
            email, 
            company, 
            partnersNumber, 
            segment, 
            solutionDescribe,
        site } = request.body;

        await MailServer({
            destinationUser: process.env.EMAIL_WILL_RECEIVE,
            subjectText: 'nodemailer funfando',
            htmlOption: `<p>
                Um novo cadastro foi realizado!
                
                Estas foram as informações enviadas:

                Nome: ${firstName}
                Número de telefone: ${phoneNumber}
                E-mail: ${email}
                Empresa: ${company}
                Número de sócios: ${partnersNumber}
                Segmento: ${segment}
                Descrição da solução: ${solutionDescribe}
                Site: ${site}
            </p>`
        })

        return response.status(200).send({
            answer: "Enviado."
        })

    } catch (error) {
        console.log(error)

        return response.status(error.responseCode).send({
            answer: "Desculpe, houve algum tipo de problema."
        })
    }

}

export {
    SendMail
}