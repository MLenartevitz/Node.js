const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('Digite o primeiro número: ', (num1) => {  //entrada do primeiro valor
  readline.question('Digite o segundo número: ', (num2) => { //entrada do segundo valor
    readline.question('Digite a operação (+, -, *, /): ', (operacao) => //escolha de operação
    {
      let resultado;

      switch (operacao)  //casos da operação
      {
        case '+':
          resultado = Number(num1) + Number(num2);
          break;
        case '-':
          resultado = Number(num1) - Number(num2);
          break;
        case '*':
          resultado = Number(num1) * Number(num2);
          break;
        case '/':
          resultado = Number(num1) / Number(num2);
          break;
        default:
          console.log('Operação inválida!');
          readline.close();
          return;
      }

      console.log(`O resultado é ${resultado}`); //resultado da conta
      readline.close();
    });
  });
});