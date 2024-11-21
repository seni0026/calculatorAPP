// load calculation from the local storage into the calculation variable
let calculation = localStorage.getItem('calculation') || '';
// updateCalculation ('');
showCalculation();

function updateCalculation (btn) {
    calculation += btn;

    showCalculation();

    // save calculation to local storage
    localStorage.setItem('calculation', calculation);
}

// create a function to display the calculations
function showCalculation() {
    document.querySelector('.js-calculate').innerHTML = calculation;
}