// load calculation from the local storage into the calculation variable
let calculation = localStorage.getItem('calculation') || '';

function updateCalculation (btn) {
    calculation += btn;
    console.log(calculation);

    // save calculation to local storage
    localStorage.setItem('calculation', JSON.stringify(calculation));
}

