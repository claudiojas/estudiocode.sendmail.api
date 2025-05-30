export function html_email(name: string) {
    const year = new Date().getFullYear();

    return `<!DOCTYPE html>
    <html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Confirmação de Contato</title>
    </head>
    <body style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f9f9f9; padding: 20px;">

        <main style="background-color: #fff; padding: 30px; border-radius: 8px; box-shadow: 0 0 10px rgba(0,0,0,0.1); text-align: center;">
            <h1 style="color: #333;">Olá, ${name}!</h1>
            <p style="font-size: 16px; color: #555;">
                Agradecemos seu contato com a <strong>Estúdio Code</strong>.
            </p>
            <p style="font-size: 16px; color: #555;">
                Somos uma empresa especializada no desenvolvimento de soluções web sob medida para empresas e pessoas físicas.
            </p>
            <p style="font-size: 16px; color: #555;">
                Recebemos sua mensagem e nossa equipe irá analisá-la cuidadosamente. 
                <strong>Muito em breve</strong>, entraremos em contato no email informado para agendarmos uma reunião e conversarmos sobre os detalhes do seu projeto.
            </p>
            <p style="font-size: 16px; color: #555;">
                Enquanto isso, fique à vontade para nos responder caso tenha alguma dúvida ou informação adicional.
            </p>

            <img src="https://estudio-code-assets.s3.sa-east-1.amazonaws.com/estudiocode_logo.png" 
                alt="Imagem ilustrativa" 
                style="width: 260px; margin-top: 20px;"
            >
        </main>

        <footer style="margin-top: 30px; text-align: center; color: #777;">
            <p>Atenciosamente,</p>
            <p><strong>Equipe Estúdio Code ${year}</strong></p>
        </footer>

    </body>
    </html>`;
}
