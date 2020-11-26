/* function retornaMaior(a, b) {
    return a > b ? a : b;
}

console.log(retornaMaior(23, 9));

function retornaMaior3(a, b, c) {
    if (a > b && a > c) return a
    if (b > c) return b
    else return c
}

console.log(retornaMaior3(40, 28, 19));

function positiveOrNegative(a) {
    if (a > 0) return 'Positive';
    if (a < 0) return 'Negative';
    if (a == 0) return 'zero';
}

console.log(positiveOrNegative(0));

function podeSerTrinagulo(a, b, c) {
    return a + b + c === 180;
}

console.log(podeSerTrinagulo(10, 100, 60));

function moveChessPiece(a) {
    a = a.toLowerCase();
    if (a == 'peao') return 'diagonal para frente';
    if (a == 'cavalo') return `${a} pula 3 casas mais 1 para LD ou LE`;
    if (a == 'torre') return 'move na orizontal ou vertical';
    if (a == 'bispo') return 'move apenas na diagonal';
    if (a == 'rei') return 'move em todos os sentidos mas apenas uma casa';
    if (a == 'rainha') return 'move em todos os sentidos';
    else return 'Digite o nome de uma peça de xadrez';
}

console.log(moveChessPiece('Cavalo'));

function temPar(a, b, c) {
    return (a % 2 == 0 || b % 2 == 0 || c % 2 == 0);
}
console.log(temPar(2, 5, 7));


function lucro(custo, venda) {
    let custoTotal = custo * 1.2;
    return venda - custoTotal;
}

console.log(lucro(10, 20)); */

function descontaInss(salarioBruto) {
    if (salarioBruto > 5189.82) return 570.88
    if (salarioBruto > 2594.93) return salarioBruto * 0.11
    if (salarioBruto > 1556.95) return salarioBruto * 0.09
    if (salarioBruto <= 1556.95) return salarioBruto * 0.08
};

function descontaIr(salarioBase) {
    if (salarioBase > 4664.68) {
        return salarioBase * 0.275 - 869.36
    } 
    if (salarioBase > 3751.06 ) {
        return salarioBase * 0.225 - 636.13
    } 
    if (salarioBase > 2826.66 ) {
        return salarioBase * 0.15 - 354.80
    } 
    if (salarioBase > 1903.99  ) {
        return salarioBase * 0.075 - 142.80
    } 
    else return salarioBase
}


let salarioBruto = 3000.00
let salarioBase = salarioBruto - descontaInss(salarioBruto);
let salarioLiquido = salarioBase - descontaIr(salarioBase);

console.log(`INSS cobrado de é R$ ${descontaInss(salarioBruto).toFixed(2)}`);
console.log(`O Imposto de renda cobrado é R$ ${descontaIr(salarioBase).toFixed(2)}`);
console.log(`Salário líquido é R$ ${salarioLiquido.toFixed(2)}`);

