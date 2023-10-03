let exp='';

function appendNumber(num){
    exp+=num;
    document.getElementById('output').value=exp;
}

function appendOperator(op){
    exp+=op;
    document.getElementById('output').value=exp;
}

function clearOUT(){
    exp='';
    document.getElementById('output').value='';
}

function calculate(){
    try{
        const output=eval(exp);
        document.getElementById('output').value=output;
        exp='';
    }catch(error){
        document.getElementById('output').value='Error';
    }
}
// Define a variable to store the calculation history
let calculationHistory = [];

// Function to update the history list
function updateHistory() {
    const historyList = document.getElementById("historyList");
    historyList.innerHTML = ""; // Clear the previous history

    calculationHistory.forEach((calculation, index) => {
        const listItem = document.createElement("li");
        listItem.textContent = `Calculation ${index + 1}: ${calculation}`;
        historyList.appendChild(listItem);
    });
}

// Function to perform a calculation and update history
function calculate() {
    const output = document.getElementById("output");
    const calculation = output.value;

    if (calculation) {
        // Perform the calculation here, e.g., eval() or a custom calculation function
        // Replace the following line with your calculation logic
        const result = eval(calculation);

        // Add the calculation to the history
        calculationHistory.push(calculation);

        // Update the history section
        updateHistory();

        // Update the output field with the result
        output.value = result;
    }
}

// Rest of your existing functions (appendNumber, appendOperator, clearOUT, etc.)
