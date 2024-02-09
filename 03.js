const faturamentoEstados = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53
  };
  
   const valorTotalMensal = Object.values(faturamentoEstados).reduce((total, valor) => total + valor, 0);
  

  const percentuaisEstados = {};
  for (const estado in faturamentoEstados) {
    const percentual = (faturamentoEstados[estado] / valorTotalMensal) * 100;
    percentuaisEstados[estado] = percentual.toFixed(2);
  }
  
 
  console.log('Valor total mensal:', valorTotalMensal.toFixed(2));
  console.log('Percentuais de representação por estado:');
  for (const estado in percentuaisEstados) {
    console.log(`${estado}: ${percentuaisEstados[estado]}%`);
  }
  