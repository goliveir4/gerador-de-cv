const express = require('express');
const puppeteer = require('puppeteer');
const path = require('path');

const app = express();
const port = 3000; 

app.use(express.json()); 
app.use(express.static(path.join(__dirname))); 

function gerarHtmlDoCurriculo(dados) {
    const { dadosPessoais, dadosFormacao, dadosExperiencia, dadosHabilidade } = dados;
    let html = `
        <!DOCTYPE html>
        <html lang="pt-br">
        <head>
            <meta charset="UTF-8">
            <title>Currículo</title>
            <style>
                body { font-family: Arial, sans-serif; line-height: 1.6; }
                .container { max-width: 800px; margin: auto; padding: 20px; }
                h2 { border-bottom: 2px solid #3498db; padding-bottom: 10px; color: #2c3e50; }
                .item-curriculo { page-break-inside: avoid; margin-bottom: 15px; }
            </style>
        </head>
        <body>
            <div class="container">
    `;

    if (dadosPessoais) {
        html += `
            <h1>${dadosPessoais.nome} ${dadosPessoais.sobrenome}</h1>
            <p><strong>E-mail:</strong> ${dadosPessoais.email} | <strong>Telefone:</strong> ${dadosPessoais.telefone}</p>
        `;
    }

    if (dadosFormacao && dadosFormacao.length > 0) {
        html += '<h2>Formação Acadêmica</h2>';
        dadosFormacao.forEach(f => {
            html += `<div class="item-curriculo"><p><strong>Curso:</strong> ${f.curso}<br><strong>Instituição:</strong> ${f.instituicao}<br><strong>Conclusão:</strong> ${f.ano}</p></div>`;
        });
    }

    if (dadosExperiencia && dadosExperiencia.length > 0) {
        html += '<h2>Experiências Profissionais</h2>';
        dadosExperiencia.forEach(exp => {
            html += `<div class="item-curriculo"><p><strong>Cargo:</strong> ${exp.cargo}<br><strong>Empresa:</strong> ${exp.empresa}<br><strong>Período:</strong> ${exp.tempo}<br><strong>Atividades:</strong> ${exp.atividades}</p></div>`;
        });
    }

    if (dadosHabilidade && dadosHabilidade.length > 0) {
        html += '<h2>Habilidades</h2>';
        dadosHabilidade.forEach(h => {
            html += `<p class="item-curriculo">${h.habilidade}</p>`;
        });
    }

    html += `</div></body></html>`;
    return html;
}

app.post('/gerar-pdf', async (req, res) => {
    try {
        console.log('Recebido pedido para gerar PDF...');
        
        const htmlContent = gerarHtmlDoCurriculo(req.body);

        const browser = await puppeteer.launch();
        const page = await browser.newPage();

        await page.setContent(htmlContent, { waitUntil: 'networkidle0' });

        const pdfBuffer = await page.pdf({ format: 'A4', printBackground: true });

        await browser.close();

        res.setHeader('Content-Type', 'application/pdf');
        res.setHeader('Content-Disposition', 'attachment; filename=curriculo.pdf');
        res.send(pdfBuffer);

        console.log('PDF gerado e enviado com sucesso!');

    } catch (error) {
        console.error('Erro ao gerar PDF:', error);
        res.status(500).send('Ocorreu um erro ao gerar o PDF.');
    }
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});