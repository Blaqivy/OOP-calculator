// const btn = document.querySelectorAll("button");
// const result = document.getElementById("result");
// const resultContainer = document.getElementById("result-container");

// class Calc {
//   constructor(result, btn) {
//     this.result = result;
//     this.btn = btn;
//     this.clearResult();
//   }
//   clearResult() {
//     this.result.value = "";
//   }
//   // to delete a number from display
//   delete() {
//     let currentResult = this.result.value;
//     currentResult = currentResult.replace(/\D/g, "");
//     currentResult = currentResult.slice(0, -1);
//     currentResult = this.formatNumber(currentResult);

//     this.result.value = currentResult;
//   }
//   // to insert a number to the result
//   insertNumber(num) {
//     if (num === "." && this.result.value.includes(".")) return;
//     let currentResult = this.result.value;
//     currentResult += num;
//     const formattedResult = this.formatNumber(currentResult);

//     this.result.value = formattedResult;
//   }
//   // calculations
//   compute() {
//     result.value = eval(this.result.value);
//   }
//   // updates display when value changes
//   updateDisplay(num) {
//     result.value += num;
//   }
//   // helps format the numbers with comma
//   formatNumber(number) {
//     return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
//   }
// }
// // creating a new calculator class
// const calculator = new Calc(result, btn);

// // iterates through the buttons to give function
// btn.forEach((num) => {
//   num.addEventListener("click", () => {
//     let numValue = num.textContent;
//     if (numValue === "C") {
//       calculator.clearResult();
//     } else if (numValue === "=") {
//       calculator.compute();
//     } else if (numValue === "DEL") {
//       calculator.delete();
//     } else if (numValue === "+") {
//       numValue = "+";
//       calculator.updateDisplay(numValue);
//     } else {
//       if (numValue === "*" || numValue === "%") {
//         calculator.updateDisplay(numValue);
//       } else {
//         calculator.insertNumber(numValue);
//       }
//     }
//   });
// });
// to adjust the font size to prevent overflow
// function adjustFontSize() {
//   const maxwidth = resultContainer.clientWidth;
//   const textWidth = result.scrollWidth;
//   const fontSize = Math.floor(
//     (maxWidth / textWidth) * parseFloat(getComputedStyle(result).fontSize)
//   );
//   result.style.fontSize = fontSize + "px";
// }


const btn = document.querySelectorAll("button");
const result = document.getElementById("result");
const resultContainer = document.getElementById("result-container");

class Calc {
  constructor(result, btn) {
    this.result = result;
    this.btn = btn;
    this.clearResult();
  }
  clearResult() {
    this.result.value = "";
  }
  // to delete a number from display
  delete() {
    let currentResult = this.result.value;
    currentResult = currentResult.replace(/\D/g, "");
    currentResult = currentResult.slice(0, -1);
    currentResult = this.formatNumber(currentResult);

    this.result.value = currentResult;
  }
  // to insert a number to the result
  insertNumber(num) {
    if (num === "." && this.result.value.includes(".")) return;
    let currentResult = this.result.value;
    currentResult += num;
    const formattedResult = this.formatNumber(currentResult);

    this.result.value = formattedResult;
  }
  // calculations
  compute() {
    this.result.value = eval(this.result.value);
  }
  // updates display when value changes
  updateDisplay(num) {
    this.result.value += num;
  }
  // helps format the numbers with comma
  formatNumber(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
}

// creating a new calculator class
const calculator = new Calc(result, btn);

// iterates through the buttons to give function
btn.forEach((num) => {
  num.addEventListener("click", () => {
    let numValue = num.textContent;
    if (numValue === "C") {
      calculator.clearResult();
    } else if (numValue === "=") {
      calculator.compute();
    } else if (numValue === "DEL") {
      calculator.delete();
    } else if (numValue === "+") {
      numValue = "+";
      calculator.updateDisplay(numValue);
    } else {
      if (numValue === "*" || numValue === "%") {
        calculator.updateDisplay(numValue);
      } else {
        calculator.insertNumber(numValue);
      }
    }
  });
});
