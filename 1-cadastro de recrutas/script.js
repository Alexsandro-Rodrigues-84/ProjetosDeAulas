var ano = new Date();


function enviar() {
    let nome = document.querySelector('#nome').value;
    let sobreNome = document.querySelector('#sobreNome').value;
    let idade = document.querySelector('#idade').value;

    let anoBase = ano.getFullYear();
    parseInt(idade);
    let idadeAtual = anoBase - idade;

    document.querySelector('.output').innerHTML = 'Nome: '+ nome;
    document.querySelector('.output1').innerHTML = 'Sobrenome: ' + sobreNome;
    document.querySelector('.output2').innerHTML = 'Idade Atual: ' + idadeAtual;
}