// creates an object to keep track of values
const Calculator = {
    // displays 0 on the screen
    Display_Value: '0',
    // this will hold first operand for any expressions, set to null for now
    First_Operand: null,
    // checks whether or not the second operand has been input
    Wait_Second_Operand: false,
    // this will hold operator, setting to null for now
    operator: null,
};

// modifies values each time a button is clicked
function Input_Digit(digit) {
    const { Display_Value, Wait_Second_Operand } = Calculator;
    // checking to see if Wait_Second_Operand is true and set Display_Value to key that was clicked
    if (Wait_Second_Operand === true) {
        Calculator.Display_Value = digit;
        Calculator.Wait_Second_Operand = false;
    } else {
        // overwrites Display_Value if current value is 0 otherwise it adds onto it
        Calculator.Display_Value = Display_Value === '0' ? digit : Display_Value + digit;
    }
}

// this section handles decimal points
function Input_Decimal(dot) {
    // this ensures that accidental clicking of decimal point doesn't cause bugs in operation
    if (Calculator.Wait_Second_Operand === true) return;
    if (!Calculator.Display_Value.includes(dot)) {
        // if Display_Value does not contain a decimal point we want to add a decimal point
        Calculator.Display_Value += dot;
    }
}

// this section handles operators
function Handle_Operator(Next_Operator) {
    const { First_Operand, Display_Value, operator } = Calculator
    // when operator key is pressed, we convert the current number displayed on screen 
    // to a number then store the result in Calculator.First_Operand if it doesn't already exist
    const Value_of_Input = parseFloat(Display_Value);
    // checks if an operator already exists and if Wait_Second_Operand is true, updates the operator and exits from the function
    if (operator && Calculator.Wait_Second_Operand) {
        Calculator.operator = Next_Operator;
        return;
    }
    if (First_Operand == null) {
        Calculator.First_Operand = Value_of_Input;
    } else if (operator) { 
        const Value_Now = First_Operand || 0;
        // if operator exists, property lookup is performed for the operator in the Preform_Calculation object
        // and the function that matches the operator is executed
        let result = Perform_Calculation[operator] (Value_Now, Value_of_Input);
        // fixed amount of numbers after the decimal
        result = Number(result).toFixed(9)
        // will remove any trailing 0's
        result = (result * 1).toString()
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
    '=': (First_Operand, Second_Operand) => Second_Operand
};

function Calculator_Reset() {
    Calculator.Display_Value = '0';
    Calculator.First_Operand = null;
    Calculator.Wait_Second_Operand = false;
    Calculator.operator = null;
}
// This function updates the screen with the contents of Display_Value
function Update_Display() {
    const display = document.querySelector('.calculator-screen');
    display.value = Calculator.Display_Value;
}

Update_Display();
// this sections monitors button clicks
const keys = document.querySelector('.calculator-keys');
keys.addEventListener('click', (event) => {
    // the target variable is an object that represents the element that was clicked
    const { target } = event;
    // if the element that was clicked on is not a button, exit the function
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

    // ensures that AC clears the numbers from Calc.
    if (target.classList.contains('all-clear')) {
        Calculator_Reset();
        Update_Display();
        return;
    }

    Input_Digit(target.value);
    Update_Display();
})