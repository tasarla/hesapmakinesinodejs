const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let firstOperand, secondOperand, operator;

function getFirstOperand() {
  rl.question('Birinci sayıyı girin: ', (input) => {
    firstOperand = parseFloat(input);
    getOperator();
  });
}

function getOperator() {
  rl.question('İşlemi girin (+, -, *, /): ', (input) => {
    if (['+', '-', '*', '/'].includes(input)) {
      operator = input;
      getSecondOperand();
    } else {
      console.log('Geçersiz işlem! Lütfen +, -, *, / işlemlerinden birini seçin.');
      getOperator();
    }
  });
}

function getSecondOperand() {
  rl.question('İkinci sayıyı girin: ', (input) => {
    secondOperand = parseFloat(input);
    calculateResult();
  });
}

function calculateResult() {
  let result;
  switch (operator) {
    case '+':
      result = firstOperand + secondOperand;
      break;
    case '-':
      result = firstOperand - secondOperand;
      break;
    case '*':
      result = firstOperand * secondOperand;
      break;
    case '/':
      if (secondOperand !== 0) {
        result = firstOperand / secondOperand;
      } else {
        console.log('Hata: Sıfıra bölme hatası!');
        rl.close();
        return;
      }
      break;
  }

  console.log(`Sonuç: ${result}`);
  rl.close();
}

console.log('Basit Hesap Makinesi');
getFirstOperand();
