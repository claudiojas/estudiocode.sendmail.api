    import  { FastifyInstance } from "fastify"
    import nodemailer from "nodemailer";
    import { html_email } from "../htmlTemplateEmail/email_html_tenplate";


    interface IMenssengeEmailType {
        name: string,
        email: string,
        message: string,
    }

    export async function SendEmail (app: FastifyInstance) {

        app.post("/sendmail", async (request, reply)=>{

            try {
                const {name, email, message}:IMenssengeEmailType = request.body as IMenssengeEmailType;

                const transport = nodemailer.createTransport({
                    host: process.env.MAIL_HOST,
                    port:  587,
                    secure: false,
                    auth: {
                        user: process.env.MAIL_USER,
                        pass: process.env.MAIL_PASS
                    }
                });

                
                // ✔️ Email de resposta para o cliente
                const emailToClient = await transport.sendMail({
                    from: process.env.MAIL_FROM,
                    to: email,
                    subject: `Recebemos sua mensagem - Estúdio Code`,
                    html: html_email(name),
                });

                // ✔️ Email de notificação para você (empresa)
                const emailToOwner = await transport.sendMail({
                    from: process.env.MAIL_FROM,
                    to: process.env.MAIL_USER, // Vai para você
                    subject: `🛎️ Nova mensagem recebida no site`,
                    html: `
                    <h2>Nova mensagem recebida</h2>
                    <p><strong>Nome:</strong> ${name}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Mensagem:</strong></p>
                    <p>${message}</p>
                    `,
                });
                 
                return "Email successfully sent!"
        
            } catch (error) {
                console.error('Error during event create:', error);
                reply.status(500).send({ error: "Error during creation!" });
            }
        })
    }