# gerador-de-cv
📝 Gerador de Currículo Dinâmico (Full-Stack)
Este projeto é uma aplicação web full-stack que permite a criação de currículos profissionais de forma intuitiva. O frontend, construído com HTML, CSS e JavaScript puro, guia o usuário através de um formulário multi-etapas. O backend, desenvolvido em Node.js com Express, utiliza o Puppeteer para gerar um PDF de alta fidelidade a partir dos dados fornecidos, garantindo um resultado profissional e com formatação perfeita.

(Sugestão: Tire um print da sua aplicação e substitua o link acima para mostrar o visual final do seu projeto)

✨ Funcionalidades
Interface Multi-Etapas: Processo dividido em seções (Dados Pessoais, Formação, Experiência, Habilidades) para uma experiência de usuário fluida.

Gerenciamento Dinâmico de Conteúdo: Adicione e remova múltiplos blocos de formação, experiência e habilidades de forma interativa.

Persistência de Dados no Cliente: Uso do localStorage para salvar os dados no navegador, permitindo que o usuário não perca seu progresso ao navegar entre as páginas.

Backend Robusto para Geração de PDF: Um servidor Node.js com Express recebe os dados do currículo.

PDF de Alta Qualidade com Puppeteer: Utiliza o motor de renderização do Google Chrome no servidor para criar PDFs com layout perfeito, respeitando todas as regras de CSS e quebras de página inteligentes.

Visualização Instantânea: O currículo é montado e exibido na página final antes do download.

🚀 Tecnologias Utilizadas
Frontend
HTML5

CSS3

JavaScript (ES6+)

Backend
Node.js: Ambiente de execução para o JavaScript no servidor.

Express.js: Framework para a criação do servidor e da API.

Puppeteer: Biblioteca para automação do Chrome, usada para a geração do PDF.

📂 Estrutura do Projeto
/gerador-de-cv
|-- node_modules/         # Dependências do projeto
|-- css/
|   |-- style.css         # Folha de estilos principal
|-- js/
|   |-- app.js            # Lógica do frontend
|
|-- index.html            # Página inicial
|-- dados-pessoais.html
|-- formacao.html
|-- experiencia.html
|-- habilidade.html
|-- curriculo.html        # Página de visualização e download
|
|-- server.js             # Arquivo do servidor backend
|-- package.json          # Metadados e dependências do projeto
|-- package-lock.json
|-- jsconfig.json         # Configuração do VS Code para o projeto JS
|-- README.md             # Este arquivo
⚙️ Pré-requisitos
Antes de começar, garanta que você tenha o Node.js instalado em sua máquina (que inclui o npm).

🛠️ Instalação e Execução
Clone o repositório:

Bash

git clone https://github.com/seu-usuario/gerador-de-cv.git
cd gerador-de-cv
Instale as dependências do backend:
Abra o terminal na pasta raiz do projeto e execute o comando:

Bash

npm install
Inicie o servidor:
Ainda no terminal, execute o comando para iniciar o servidor Node.js.

Bash

node server.js
Você deverá ver a mensagem Servidor rodando em http://localhost:3000 no terminal.

Acesse a aplicação:
Abra seu navegador e acesse o endereço:
http://localhost:3000