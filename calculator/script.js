// script.js
const display = document.getElementById('display');

const addToDisplay = (value) => {
    display.value += value;
};

const clearDisplay = () => {
    display.value = '';
};

const calculate = () => {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = 'Error';
    }
};
