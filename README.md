# Documentação da API para Envio Automático de E-mails - estudiocode.sendmail.api

Esta API permite enviar e-mails automaticamente em resposta a uma solicitação recebida em uma rota específica. A aplicação utiliza o Nodemailer para enviar e-mails.

## Endpoint

`POST /sendmail`

Envia um e-mail em resposta à solicitação recebida.

Esta API permite enviar e-mails automaticamente em resposta a uma solicitação recebida em uma rota específica. A aplicação utiliza o Nodemailer para enviar e-mails.

### Requisição
````
Método: POST
Corpo da Requisição (JSON):

{
  "name": "your name",
  "email": "exemplo@email.com",
  "message": "your message"
}
````
