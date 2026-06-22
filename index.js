var Juliana = window.document.getElementById("Juliana")
var Lucas = window.document.getElementById("Lucas")
var Mariana = window.document.getElementById("Mariana")
var setaDireita = window.document.getElementById("seta-direita")
var setaEsquerda = window.document.getElementById("seta-esquerda")

function RolarParaDireita(){
    Juliana.style = "display:none"
    Mariana.style = "display:flex"
    setaDireita.style = "display:none"
    setaEsquerda.style = "display:flex"
}

function RolarParaEsquerda(){
    Juliana.style = "display:flex"
    Mariana.style = "display:none"
    setaDireita.style = "display:flex"
    setaEsquerda.style = "display:none"
}

/*const form = document.getElementById("Forms");
const mensagem = document.getElementById("mensagem");

form.addEventListener("submit", async (e) => {

    e.preventDefault();

    const dados = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        curso: document.getElementById("curso").value
    };

    try {

        const resposta = await fetch(
            "https://script.google.com/macros/s/AKfycbwQULBpxML-nVNs70kFvBJMzgXHvDIYirAFgEa8QAiiujWH3xHe0nNCKm1j0MHOh2sqFw/exec",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(dados)
            }
        );

        const resultado = await resposta.json();

        mensagem.innerHTML =
            "✅ Cadastro enviado com sucesso!";

        form.reset();

    } catch (erro) {

        mensagem.innerHTML =
            "❌ Erro ao enviar cadastro.";

        console.error(erro);
    }

});*/




/*const form = document.getElementById("Forms");
const mensagem = document.getElementById("mensagem");

form.addEventListener("submit", (e) => {

    e.preventDefault();

    const dados = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        curso: document.getElementById("curso").value
    };

    fetch(
        "https://script.google.com/macros/s/AKfycbx03-3oP6n6Jf5tV6AH5Ktn0G97tPoxV7_GY3nwed0QqCopUxkH2navb6MsDwf7exodHQ/exec",
        {
            method: "POST",
            mode: "no-cors",
            body: JSON.stringify(dados)
        }
    )
    .then(() => {
        mensagem.innerHTML = "✅ Cadastro enviado!";
        form.reset();
    })
    .catch((erro) => {
        console.error(erro);
        mensagem.innerHTML = "❌ Erro ao enviar.";
    });

});*/

const urlDoGoogleScript = "https://script.google.com/macros/s/AKfycbx03-3oP6n6Jf5tV6AH5Ktn0G97tPoxV7_GY3nwed0QqCopUxkH2navb6MsDwf7exodHQ/exec";

// Função para disparar quando o formulário for enviado
document.getElementById("Forms").addEventListener("submit", function(e) {
  e.preventDefault(); // Impede a página de recarregar

  // Cria o objeto com os dados dos inputs do formulário
  const dadosDoForm = {
    nome: document.getElementById("name").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    curso: document.getElementById("curso").value
  };

  // Envia para o Google Sheets
  fetch(urlDoGoogleScript, {
    method: "POST",
    mode: "no-cors", // Necessário para evitar erros de segurança do navegador
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(dadosDoForm)
  })
  .then(() => {
    alert("Dados enviados com sucesso para a planilha!");
  })
  .catch(erro => console.error("Erro ao enviar:", erro));
});