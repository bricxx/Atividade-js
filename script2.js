// ============================================
// EXERCICIOS DE JAVASCRIPT COM DOM - PARTE 2
// Resolva cada exercicio seguindo as instrucoes
// ============================================


// ---------- Exercicio 11 ----------
// Ao clicar no botao #btn11, desabilite-o
//
// Dica: use .disabled = true

const botao = document.getElementById('btn11');

botao.addEventListener('click', function() {
    this.disabled = true; 
});


// ---------- Exercicio 12 ----------
// Ao clicar no botao #btn12, troque o texto dele
// de "Curtir" para "Curtido!"
//
// Dica: use .textContent no proprio botao


document.getElementById('btn12').addEventListener('click', function() {
    this.textContent = "Curtido!";
});



// ---------- Exercicio 13 ----------
// Ao clicar no botao, mude o tamanho da fonte do
// #texto13 para "32px"
//
// Dica: use .style.fontSize = "32px"


document.getElementById('btn13').addEventListener('click', function() {
    document.getElementById('texto13').style.fontSize = "32px";
});



// ---------- Exercicio 14 ----------
// Ao clicar no botao, remova todos os itens da #lista14
//
// Dica: use .innerHTML = ""


document.getElementById('btn14').addEventListener('click', function() {
    document.getElementById('lista14').innerHTML = "";
});



// ---------- Exercicio 15 ----------
// Ao clicar no botao, pegue o valor do #input15 e
// adicione como novo <li> na #lista15
//
// Dica: use document.createElement("li"), .textContent
// e .appendChild()


const btn15 = document.getElementById('btn15');
const input = document.getElementById('input15');
const lista = document.getElementById('lista15');

botao.addEventListener('click', function() {
    
    const novoItem = document.createElement('li');
    
    
    novoItem.textContent = input.value;
    
    
    lista.appendChild(novoItem);
    
    input.value = "";
});



// ---------- Exercicio 16 ----------
// Ao clicar no botao, alterne a visibilidade do #texto16
// Se esta visivel (display != "none"), esconda.
// Se esta escondido (display == "none"), mostre.
//
// Dica: use um if/else com .style.display


const btn16 = document.getElementById('btn16');
const texto = document.getElementById('texto16');

botao.addEventListener('click', function() {
    
    if (texto.style.display === "none") {
        texto.style.display = "block"; 
    } else {
        texto.style.display = "none"; 
    }
});




// ---------- Exercicio 17 ----------
// Ao clicar no botao, adicione uma borda "3px solid red"
// na #caixa17
//
// Dica: use .style.border = "3px solid red"


document.getElementById('btn17').addEventListener('click', function() {
    document.getElementById('caixa17').style.border = "3px solid red";
});



// ---------- Exercicio 18 ----------
// Ao clicar no botao, copie o valor do #input18a
// para o #input18b
//
// Dica: use .value para ler e definir o texto dos inputs


const botao = document.getElementById('btn18');
const inputA = document.getElementById('input18a');
const inputB = document.getElementById('input18b');

botao.addEventListener('click', function() {
    /
    inputB.value = inputA.value;
});



// ---------- Exercicio 19 ----------
// Ao clicar em #btn19mais, aumente o valor do #contador19 em 1
// Ao clicar em #btn19menos, diminua o valor do #contador19 em 1
//
// Dica: use Number() para converter o texto em numero


const btnMais = document.getElementById('btn19mais');
const btnMenos = document.getElementById('btn19menos');
const contador = document.getElementById('contador19');


btnMais.addEventListener('click', function() {
    let valorAtual = Number(contador.textContent);
    contador.textContent = valorAtual + 1;
});


btnMenos.addEventListener('click', function() {
    let valorAtual = Number(contador.textContent);
    contador.textContent = valorAtual - 1;
});



// ---------- Exercicio 20 ----------
// Ao clicar no botao, pegue a cor selecionada no #corInput20
// e aplique como cor de fundo da #caixa20
//
// Dica: input type="color" tambem tem .value


const botao = document.getElementById('btn20');
const inputCor = document.getElementById('corInput20');
const caixa = document.getElementById('caixa20');

botao.addEventListener('click', function() {
    
    caixa.style.backgroundColor = inputCor.value;
});