const axios = require('axios');

const url = 'https://drive.google.com/uc?id=1qXvCPjEL4jerElN-hnScoKkEVmSQ8A2L';

async function fetchData() {
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        console.error('Erro ao baixar o arquivo:', error.message);
        return null;
    }
}


function calcularMenorFaturamento(faturamentoDiario) {
    return Math.min(...faturamentoDiario.map(item => item.valor));
}


function calcularMaiorFaturamento(faturamentoDiario) {
    return Math.max(...faturamentoDiario.map(item => item.valor));
}


function calcularMediaMensal(faturamentoDiario) {
    const diasComFaturamento = faturamentoDiario.filter(item => item.valor > 0);
    const somaFaturamento = diasComFaturamento.reduce((soma, item) => soma + item.valor, 0);
    return somaFaturamento / diasComFaturamento.length;
}


function contarDiasAcimaDaMedia(faturamentoDiario, mediaMensal) {
    return faturamentoDiario.filter(item => item.valor > mediaMensal).length;
}


async function main() {
   
    const faturamentoDiario = await fetchData();

    if (faturamentoDiario) {
        
        const menorFaturamento = calcularMenorFaturamento(faturamentoDiario);
        const maiorFaturamento = calcularMaiorFaturamento(faturamentoDiario);
        const mediaMensal = calcularMediaMensal(faturamentoDiario);
        const diasAcimaDaMedia = contarDiasAcimaDaMedia(faturamentoDiario, mediaMensal);

        
        console.log(`Menor faturamento: ${menorFaturamento}`);
        console.log(`Maior faturamento: ${maiorFaturamento}`);
        console.log(`Média mensal: ${mediaMensal}`);
        console.log(`Número de dias acima da média: ${diasAcimaDaMedia}`);
    }
}


main();
