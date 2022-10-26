// Creates object to keep track of values
const Calculator = {
    Display_Value: '0',
    // Holds the first operand for any expressions
    First_Operand: null,
    // Checks whether or not the second operand has been inputted
    Wait_Second_Operand: false,
    // Holds the operator
    operator: null,
};

// Modifies values each time a button is clicked
function Input_Digit(digit) {
    const {Display_Value, Wait_Second_Operand} = Calculator;
    // Checks if the Wait_Second_Operand is true and sets Display_Value to key that was clicked
    if (Wait_Second_Operand === true) {
        Calculator.Display_Value = digit;
        Calculator.Wait_Second_Operand = false;
    } else {
        // Overwrites Display_Value if current value is 0, otherwise it adds onto it
        Calculator.Display_Value = Display_Value === '0' ? digit : Display_Value + digit;
    }
}

// Handles decimal points
function Input_Decimal(dot) {
    // Ensures that accidental clicking of decimal point doesn't cause bugs
    if (Calculator.Wait_Second_Operand === true) return;
    if (!Calculator.Display_Value.includes(dot)) {
        // If Display_Value does not contain decimal point we want to add one
        Calculator.Display_Value += dot;
    }
}

// Handles Operators
function Handle_Operator(Next_Operator) {
    const {First_Operand, Display_Value, operator} = Calculator;
    // When an operator key is pressed the current number displayed on the screen is converted to
    // a number and then stored in Calculator.First_Operand if it doesn't already exist
    const Value_Of_Input = parseFloat(Display_Value);
    // Checks if an operator already exists and if Wait_Second_Operand is true,
    // then updates the operator and exits from the function
    if (operator && Calculator.Wait_Second_Operand) {
        Calculator.operator = Next_Operator;
        return;
    }
    if (First_Operand == null) {
        Calculator.First_Operand = Value_of_Input;
    } else if (operator) { //Checks if an operator already exists
        const Value_Now = First_Operand || 0;
        // If operator exists, property lookup is performed for the operator in the
        // Perform_Calculation object and the function that matches the operator is executed
        let result = Perform_Calculation[operator](Value_Now, Value_of_Input);
        // Here we add a fixed amount of numbers after the decimal
        result = Number(result).toFixed(9);
        // This remove any trailing 0's
        result = (result *1).toString();
        Calculator.Display_Value = parseFloat(result);
        Calculator.First_Operand = parseFloat(result); 
    }
    Calculator.Wait_Second_Operand = true;
    Calculator.operator = Next_Operator;
}

const Perform_Calculation = {
    '/': (First_Operand, Second_Operand) => First_Operand / Second_Operand,
    '*': (First_Operand, Second_Operand) => First_Operand * Second_Operand,
    '+': (First_Operand, Second_Operand) => First_Operand + Second_Operand,
    '-': (First_Operand, Second_Operand) => First_Operand - Second_Operand,
    '=': (First_Operand, Second_Operand) => Second_Operand,
};

function Calculator_Reset() {
    Calculator.Display_Value = '0';
    Calculator.First_Operand = null;
    Calculator.Wait_Second_Operand = false;
    Calculator.operator = null;
}

// This function updates the calculator screen with contents of Display_Value
function Update_Display() {
    // Makes use of the calculator-screen class to target the input tag in HTML
    const display = document.querySelector('.calculator-screen');
    display.value = Calculator.Display_Value;
}
Update_Display();

// This section monitors button clicks
const keys = document.querySelector('.calculator-keys');
keys.addEventListener('click', (event) => {
    // The target variable is an object that represents the element that was clicked
    const {target} = event;
    // If the element that was clicked on is not a button, exit the function
    if (!target.matches('button')) {
        return;
    }
    if (target.classList.contains('operator')) {
        Handle_Operator(target.value);
        Update_Display();
        return;
    }
    if (target.classList.contains('decimal')) {
        Input_Decimal(target.value);
        Update_Display();
        return;
    }
    // Ensures that AC clears all inputs from the calculator screen
    if (target.classList.contains('all-clear')) {
        Calculator_Reset();
        Update_Display();
        return;
    }
    Input_Digit(target.value);
    Update_Display();
})
