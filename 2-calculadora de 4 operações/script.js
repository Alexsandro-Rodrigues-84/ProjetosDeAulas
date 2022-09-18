function calc() {
    let num1 = document.querySelector('#num1').value;
    let num2 = document.querySelector('#num2').value;

    let num01 = parseInt(num1);
    let num02 = parseInt(num2);


    let soma = num01 + num02;
    let subtracao = num01 - num02;
    let multiplicacao = num01 * num02;
    let divisao = num01 / num02;


    document.querySelector('.result1').innerHTML = 'A Soma dos dois numeros é = ' + soma;
    document.querySelector('.result2').innerHTML = 'A Subtração dos dois numeros é = ' + subtracao;
    document.querySelector('.result3').innerHTML = 'A Multiplicação dos dois numeros é = ' + multiplicacao;
    document.querySelector('.result4').innerHTML = 'A Divisão dos dois numeros é = ' + divisao;
};