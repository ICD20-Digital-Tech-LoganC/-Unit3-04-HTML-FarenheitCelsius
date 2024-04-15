// ./js/script.js

function convertToFahrenheit() {
    const fahrenheitInput = document.getElementById('fahrenheit');
    const result = document.getElementById('result');

    if (!fahrenheitInput.value) {
        result.innerText = 'Please enter a valid Fahrenheit value.';
        return;
    }

    const fahrenheit = parseFloat(fahrenheitInput.value);
    const celsius = ((fahrenheit - 32) * 5/9).toFixed(1);

    result.innerText = `${fahrenheit}°F is approximately ${celsius}°C`;
}