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
            subjectText: 'Nova inscrição no Programa de Aceleração da Alia',
            htmlOption: `<div>
                <p>Uma nova inscrição foi realizada!</p>
                <br />
                <p>Estas foram as informações enviadas:</p>
                <br />
                <p>Nome: ${firstName}</p>
                <p>Número de telefone: ${phoneNumber}</p>
                <p>E-mail: ${email}</p>
                <p>Empresa: ${company}</p>
                <p>Número de sócios: ${partnersNumber}</p>
                <p>Segmento: ${segment}</p>
                <p>Descrição da solução: ${solutionDescribe}</p>
                <p>Site: ${site}</p>
            </div>`
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