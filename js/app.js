document.addEventListener("DOMContentLoaded", () => {
    const salvarDados = (chave, valor) => {
        localStorage.setItem(chave, JSON.stringify(valor));
    };

    const carregarDados = (chave) => {
        const dados = localStorage.getItem(chave);
        return dados ? JSON.parse(dados) : null;
    };

    // Lógica do index.html
    const btnComecar = document.getElementById("btn-comecar");
    if (btnComecar) {
        btnComecar.addEventListener("click", () => {
            localStorage.clear();
            window.location.href = "dados-pessoais.html";
        });
    }

    // Lógica dados-pessoais.html
    const formDadosPessoais = document.getElementById("form-dados-pessoais");
    if (formDadosPessoais) {

        const dadosSalvos = carregarDados("dadosPessoais");
        if (dadosSalvos) {
            document.getElementById("nome").value = dadosSalvos.nome || '';
            document.getElementById("sobrenome").value = dadosSalvos.sobrenome || '';
            document.getElementById("email").value = dadosSalvos.email || '';
            document.getElementById("telefone").value = dadosSalvos.telefone || '';
        }

        formDadosPessoais.addEventListener("submit", (e) => {
            e.preventDefault();
            const dados = {
                nome: document.getElementById("nome").value,
                sobrenome: document.getElementById("sobrenome").value,
                email: document.getElementById("email").value,
                telefone: document.getElementById("telefone").value,
            };
            salvarDados("dadosPessoais", dados);
            window.location.href = "formacao.html";
        });
    }

    // Lógica formação.html
    const formFormacao = document.getElementById("form-formacao");
    if (formFormacao) {
        const listaFormacoes = document.getElementById("lista-formacoes");

        const criarBlocoFormacao = (dados = {}) => {
            const div = document.createElement("div");
            div.classList.add("formacao-item");
            div.innerHTML = `
                <button type="button" class="btn btn-danger btn-remover-formacao">Remover</button>
                <div class="form-group">
                    <label>Curso</label>
                    <input type="text" class="curso-input" value="${dados.curso || ''}" required>
                </div>

                <div class="form-group">
                    <label>Instituição</label>
                    <input type="text" class="instituicao-input" value="${dados.instituicao || ''}" required>
                </div>

                <div class="form-group">
                    <label>Ano de Conclusão</label>
                    <input type="text" class="ano-input" value="${dados.ano || ''}" required>
                </div>
            `;
            div.querySelector('.btn-remover-formacao').addEventListener('click', () => {
                div.remove();
            });
            listaFormacoes.appendChild(div);
        };

        const formacoesSalvas = carregarDados("dadosFormacao");
        if (formacoesSalvas && formacoesSalvas.length > 0) {
            formacoesSalvas.forEach(formacao => criarBlocoFormacao(formacao));
        } else {
            criarBlocoFormacao();
        }

        document.getElementById("btn-adicionar-formacao").addEventListener("click", () => {
            criarBlocoFormacao();
        });

        formFormacao.addEventListener("submit", (e) => {
            e.preventDefault();
            const formacoes = [];
            const itens = document.querySelectorAll(".formacao-item");
            itens.forEach(item => {
                formacoes.push({
                    curso: item.querySelector(".curso-input").value,
                    instituicao: item.querySelector(".instituicao-input").value,
                    ano: item.querySelector(".ano-input").value,
                });
            });
            salvarDados("dadosFormacao", formacoes);
            window.location.href = "experiencia.html";
        });
    }

        // Lógica experiencia.html
const formExperiencia = document.getElementById("form-experiencia");
if (formExperiencia) {
    const listaExperiencias = document.getElementById("lista-experiencia");

    const criarBlocoExperiencia = (dados = {}) => {
        const div = document.createElement("div");
        div.classList.add("experiencia-item");
        div.innerHTML = `
            <button type="button" class="btn btn-danger btn-remover-experiencia">Remover</button>
            <div class="form-group">
                <label>Cargo</label>
                <input type="text" class="cargo-input" value="${dados.cargo || ''}" required>
            </div>

            <div class="form-group">
                <label>Empresa</label>
                <input type="text" class="empresa-input" value="${dados.empresa || ''}" required>
            </div>

            <div class="form-group">
                <label>Tempo de Serviço</label>
                <input type="text" class="tempo-input" value="${dados.tempo || ''}" required>
            </div>

            <div class="form-group">
                <label>Atividades Exercidas</label>
                <input type="text" class="atividades-input" value="${dados.atividades || ''}" required>
            </div>
        `;

        div.querySelector('.btn-remover-experiencia').addEventListener('click', () => {
            div.remove();
        });
        listaExperiencias.appendChild(div);
    };

    const experienciasSalvas = carregarDados("dadosExperiencia");
    if (experienciasSalvas && experienciasSalvas.length > 0) {

        experienciasSalvas.forEach(experiencia => criarBlocoExperiencia(experiencia));
    } else {
        criarBlocoExperiencia();
    }

    document.getElementById("btn-adicionar-experiencia").addEventListener("click", () => {
        criarBlocoExperiencia();
    });

    formExperiencia.addEventListener("submit", (e) => {
        e.preventDefault();
        const experiencias = [];
        const itens = document.querySelectorAll(".experiencia-item");
        itens.forEach(item => {
            experiencias.push({
                cargo: item.querySelector(".cargo-input").value,
                empresa: item.querySelector(".empresa-input").value,
                tempo: item.querySelector(".tempo-input").value,
                atividades: item.querySelector(".atividades-input").value
            });
        });
        salvarDados("dadosExperiencia", experiencias);
        window.location.href = "habilidade.html";
    });
}

        // Lógica habilidade.html
const formHabilidade = document.getElementById("form-habilidade");
if (formHabilidade) {
    const listaHabilidade = document.getElementById("lista-habilidade");

    const criarBlocoHabilidade = (dados = {}) => {
        const div = document.createElement("div");
        div.classList.add("habilidade-item");
        div.innerHTML = `
            <button type="button" class="btn btn-danger btn-remover-habilidade">Remover</button>
            <div class="form-group">
                <label>Habilidade</label>
                <input type="text" class="habilidade-input" value="${dados.habilidade || ''}" required>
            </div>
        `;

        div.querySelector('.btn-remover-habilidade').addEventListener('click', () => {
            div.remove();
        });
        listaHabilidade.appendChild(div);
    };


    const habilidadesSalvas = carregarDados("dadosHabilidade");
    if (habilidadesSalvas && habilidadesSalvas.length > 0) {

        habilidadesSalvas.forEach(habilidade => criarBlocoHabilidade(habilidade));
    } else {

        criarBlocoHabilidade();
    }

    document.getElementById("btn-adicionar-habilidade").addEventListener("click", () => {
        criarBlocoHabilidade();
    });

    formHabilidade.addEventListener("submit", (e) => {
        e.preventDefault();
        const habilidades = [];
        const itens = document.querySelectorAll(".habilidade-item");
        itens.forEach(item => {
            habilidades.push({
                habilidade: item.querySelector(".habilidade-input").value,
            });
        });
        salvarDados("dadosHabilidade", habilidades);
        window.location.href = "curriculo.html";
    });
}

    // Lógica currículo.html
    const curriculoPronto = document.getElementById("curriculo-pronto");
    if (curriculoPronto) {
        const dadosPessoais = carregarDados("dadosPessoais");
        const dadosFormacao = carregarDados("dadosFormacao");
        const dadosExperiencia = carregarDados("dadosExperiencia");
        const dadosHabilidade = carregarDados("dadosHabilidade");
        
        const htmlParaExibicao = gerarHtmlDoCurriculo({ dadosPessoais, dadosFormacao, dadosExperiencia, dadosHabilidade });
        const bodyContent = htmlParaExibicao.match(/<body>(.*)<\/body>/s)[1];
        curriculoPronto.innerHTML = bodyContent;

        document.getElementById("btn-baixar-pdf").addEventListener("click", async () => {
            console.log("Gerando currículo...");
            const botao = document.getElementById("btn-baixar-pdf");
            botao.textContent = 'Gerando...';
            botao.ariaDisabled = true;
            
            const todosOsDados = {
                dadosPessoais,
                dadosFormacao,
                dadosExperiencia,
                dadosHabilidade
            };

            try {
                const response = await fetch('/gerar-pdf', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(todosOsDados), 
                });

                if (!response.ok) {
                    throw new Error('Falha na resposta do servidor');
                }

                const blob = await response.blob();
                const url = window.URL.createObjectURL(blob);

                const a = document.createElement('a');
                a.style.display = 'none';
                a.href = url;
                a.download = 'curriculo.pdf';
                document.body.appendChild(a);
                a.click();

                window.URL.removeObjectURL(url);
                document.body.removeChild(a);

            } catch (error) {
                console.error('Erro ao baixar o PDF:', error);
                alert('Não foi possível gerar o PDF. Tente novamente.');
            } finally {
                botao.textContent ='Baixar em PDF';
                botao.disabled = false;
            }
        });

        function gerarHtmlDoCurriculo(dados) {
            const {dadosPessoais, dadosFormacao, dadosExperiencia, dadosHabilidade} = dados;
            let html = `<body><div class="container">`;

            if (dadosPessoais) {
                html += `<h1>${dadosPessoais.nome} ${dadosPessoais.sobrenome}</h1><p><strong>E-mail:</strong> ${dadosPessoais.email} | <strong>Telefone:</strong> ${dadosPessoais.telefone}</p>`;
            }

            if (dadosFormacao && dadosFormacao.length > 0) {
                html += `<h2>Formação Acadêmica</h2>`;
                dadosFormacao.forEach(f => {
                    html += `<div class="item-curriculo"><p><strong>Curso:</strong> ${f.curso}<br><strong>Instituição:</strong> ${f.instituicao}<br><strong>Ano de Conclusão:</strong> ${f.ano}</p></div>`;
                });
            }

            if (dadosExperiencia && dadosExperiencia.length > 0) {
                html += `<h2>Experiências Profissionais</h2>`;
                dadosExperiencia.forEach(exp => {
                    html += `<div class="item-curriculo"><p><strong>Cargo:</strong> ${exp.cargo}<br><strong>Empresa:</strong> ${exp.empresa}<br><strong>Perríodo:</strong> ${exp.tempo}<br><strong>Atividades:</strong> ${exp.atividades}</p></div>`;
                });
            }

            if (dadosHabilidade && dadosHabilidade.length > 0) {
                html += `<h2>Habilidades</h2>`;
                dadosHabilidade.forEach(h => {
                    html += `<p class="item-curriculo">${h.habilidade}</p>`;
                });
            }

            html += `</div></body>`;
            return html;
        }
    }
});