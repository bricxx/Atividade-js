// ============================================
// EXERCICIOS DE JAVASCRIPT COM DOM
// Resolva cada exercicio seguindo as instrucoes
// ============================================


// ---------- Exercicio 1 ----------
// Ao clicar no botao, mude o texto do elemento #texto1
// para "Texto alterado com sucesso!"
//
// Dica: use document.getElementById() e .textContent

const botao1 = document.getElementById('btn1'); // Substitua pelo ID real do seu botão se necessário
const texto1 = document.getElementById('texto1');

botao1.addEventListener('click', function() {
    texto1.textContent = "Texto alterado com sucesso!";
});


// ---------- Exercicio 2 ----------
// Ao clicar no botao, mude a cor do texto #texto2 para azul
//
// Dica: use .style.color = "blue"

const botao2 = document.getElementById('btn2'); // Substitua pelo ID real do seu botão se necessário
const texto2 = document.getElementById('texto2');

botao2.addEventListener('click', function() {
    texto2.style.color = "blue";
});



// ---------- Exercicio 3 ----------
// Ao clicar no botao, esconda o elemento #texto3
//
// Dica: use .style.display = "none"

const botao3 = document.getElementById('btn3'); // Substitua pelo ID real do seu botão se necessário
const texto3 = document.getElementById('texto3');

botao3.addEventListener('click', function() {
    texto3.style.display = "none";
});



// ---------- Exercicio 4 ----------
// Ao clicar no botao, adicione um novo <li> com o texto
// "Novo item" dentro da lista #lista4
//
// Dica: use document.createElement() e .appendChild()

const botao4 = document.getElementById('btn4'); // Substitua pelo ID real do seu botão se necessário
const lista4 = document.getElementById('lista4');

botao4.addEventListener('click', function() {
    const novoItem = document.createElement('li');
    novoItem.textContent = "Novo item";
    lista4.appendChild(novoItem);
});



// ---------- Exercicio 5 ----------
// Ao clicar no botao, mude a cor de fundo da #caixa5
// para amarelo
//
// Dica: use .style.backgroundColor = "yellow"

const botao5 = document.getElementById('btn5'); // Substitua pelo ID real do seu botão se necessário
const caixa5 = document.getElementById('caixa5');

botao5.addEventListener('click', function() {
    caixa5.style.backgroundColor = "yellow";
});



// ---------- Exercicio 6 ----------
// Ao clicar no botao, aumente o numero do #contador6 em 1
//
// Dica: leia o valor atual com .textContent, converta para
// numero com Number() e some 1

const botao6 = document.getElementById('btn6'); // Substitua pelo ID real do seu botão se necessário
const contador6 = document.getElementById('contador6');

botao6.addEventListener('click', function() {
    let valorAtual = Number(contador6.textContent);
    contador6.textContent = valorAtual + 1;
});



// ---------- Exercicio 7 ----------
// Ao clicar no botao, pegue o valor digitado no #input7
// e mostre dentro do #resultado7
//
// Dica: use .value para pegar o texto do input

const botao8 = document.getElementById('btn7'); // Substitua pelo ID real do seu botão se necessário
const input7 = document.getElementById('input7');
const resultado7 = document.getElementById('resultado7');

botao8.addEventListener('click', function() {
    resultado7.textContent = input7.value;
});


// ---------- Exercicio 8 ----------
// Ao clicar no botao, adicione a classe "destaque" ao #texto8
//
// Dica: use .classList.add("destaque")

const botao7 = document.getElementById('btn8'); // Substitua pelo ID real do seu botão se necessário
const texto8 = document.getElementById('texto8');

botao7.addEventListener('click', function() {
    texto8.classList.add("destaque");
});



// ---------- Exercicio 9 ----------
// Ao clicar no botao, remova o ultimo <li> da #lista9
//
// Dica: use .lastElementChild e .removeChild()

const botao9 = document.getElementById('btn9'); // Substitua pelo ID real do seu botão se necessário
const lista9 = document.getElementById('lista9');

botao9.addEventListener('click', function() {
    const ultimoItem = lista9.lastElementChild;
    if (ultimoItem) {
        lista9.removeChild(ultimoItem);
    }
});



// ---------- Exercicio 10 ----------
// Ao clicar no botao, troque o src da #imagem10 para
// "https://placecats.com/300/200"
//
// Dica: use .src = "nova-url"

const botao10 = document.getElementById('btn10'); // Substitua pelo ID real do seu botão se necessário
const imagem10 = document.getElementById('imagem10');

botao10.addEventListener('click', function() {
    imagem10.src = "https://placecats.com/300/200";
});

