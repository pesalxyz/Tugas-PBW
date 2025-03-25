const calculate = () => {
    const num1 = parseFloat(prompt("Masukkan angka pertama:"));
    const num2 = parseFloat(prompt("Masukkan angka kedua:"));
    const operator = prompt("Masukkan operator (+, -, *, /, %):");
    let result = 0;
  
    if (isNaN(num1) || isNaN(num2)) {
      console.log("Masukkan kedua angka yang valid!");
      return;
    }
  
    switch (operator) {
      case "+":
        result = num1 + num2;
        break;
      case "-":
        result = num1 - num2;
        break;
      case "*":
        result = num1 * num2;
        break;
      case "/":
        if (num2 === 0) {
          console.log("Pembagi tidak boleh 0!");
          return;
        }
        result = num1 / num2;
        break;
      case "%":
        result = num1 % num2;
        break;
      default:
        console.log("Operasi tidak valid!");
        return;
    }
  
    console.log(`Hasil: ${num1} ${operator} ${num2} = ${result}`);
  };
  
  calculate();
  