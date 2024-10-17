function appendToDisplay(value) {
    const display = document.getElementById("display");
    
    // Prevent adding more than one decimal point in a number
    if (value === '.') {
        const currentValue = display.value;
        const lastNumber = currentValue.split(/[\+\-\*\/]/).pop(); 
        if (lastNumber.includes('.')) {
            return; 
        }
    }
    
    display.value += value;
}

function resetCalculator() {
    clearDisplay(); 
}

function clearDisplay() {
    document.getElementById("display").value = '';
}

function deleteLastCharacter() {
    const display = document.getElementById("display");
    display.value = display.value.slice(0, -1); 
}

function calculateResult() {
    const display = document.getElementById("display");
    try {
        let result = eval(display.value); 
        if (typeof result === 'number') {
            result = parseFloat(result.toFixed(3)); // Limit to three decimal places
        }
        display.value = result;
    } catch (error) {
        display.value = 'Error';
    }
}

