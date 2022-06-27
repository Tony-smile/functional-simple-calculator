const getHistory = () => {
     return document.getElementById("history-value").innerText;
}


const printHistory = (num) => {
     document.getElementById("history-value").innerText = num;
}


const getOutput = () => {
     return document.getElementById("output-value").innerText;
}

const printOutput = (num) => {
     if (num == "") {
          document.getElementById("output-value").innerText = num;
     }
     else {
          document.getElementById("output-value").innerText = getFormattedNumber(num);
     }

}

const getFormattedNumber = (num) => {
     if(num == "-"){
          return ""
     }
     let n = Number(num)
     let value = n.toLocaleString("en")
     return value;
}


const reverserseNumberFormat = (num) => {
    
     return Number(num.replace(/,/g, ""));
}

let operator = document.getElementsByClassName("operator")
for (let j = 0; j < operator.length; j++) {
     operator[j].addEventListener("click", function () {
          if (this.id == "clear") {
               printHistory("")
               printOutput("")
          }
          else if (this.id == "backspace") {
               let output = reverserseNumberFormat(getOutput()).toString();
               if (output) {
                    output = output.slice(0, output.length - 1);
                    printOutput(output)
               }
          } 
          else if (this.id == "%") {
               let output = getHistory()/100
               printOutput(output)
          }
          else {
               let output = getOutput()
               let history = getHistory()
               if(output == "" && history !=""){
                    if(isNaN(history[history.length-1])){
                         history = history.slice(0, history.length-1)
                    }
               }
               if (output != "" || history !="") {
                    output = output ==""?
                    output: reverserseNumberFormat(output);
                    history = history + output;
                    if (this.id == "=") {
                         let result = eval(history)
                         printOutput(result)
                         printHistory("");
                    }else{
                         history = history+this.id;
                         printHistory(history)
                         printOutput("")
                    }
               }
          }

     })
}
let number = document.getElementsByClassName("number")
for (let j = 0; j < number.length; j++) {
     number[j].addEventListener("click", function () {
          let output = reverserseNumberFormat(getOutput());
          if (output != NaN) {
               output = output + this.id;
               printOutput(output);
          }

     })
}