document.addEventListener('DOMContentLoaded', function() {
    const numberInput = document.getElementById('number-input');
    const findMaxBtn = document.getElementById('find-max-btn');
    const resultBox = document.getElementById('result');

    findMaxBtn.addEventListener('click', function() {
        // entrada
        const inputText = numberInput.value.trim();
        if (!inputText) {
            resultBox.textContent = 'Por favor ingresa números separados por comas';
            resultBox.className = 'result-box highlight';
            return;
        }

        // convertir array de números
        const numbers = inputText.split(',')
            .map(item => parseFloat(item.trim()))
            .filter(num => !isNaN(num));
        
        if (numbers.length === 0) {
            resultBox.textContent = 'No se encontraron números válidos';
            resultBox.className = 'result-box highlight';
            return;
        }

        // encontrar el máximo
        const max = findMax(numbers);
        resultBox.textContent = `El número máximo es: ${max}`;
        resultBox.className = 'result-box';
    });

    // función para encontrar el máximo
    function findMax(arr) {
        // un solo elemento
        if (arr.length === 1) {
            return arr[0];
        }

        // dividir el arreglo 
        const mid = Math.floor(arr.length / 2);
        const left = arr.slice(0, mid);
        const right = arr.slice(mid);

        
        const leftMax = findMax(left);
        const rightMax = findMax(right);

        // retornar el máximo de ambas mitades
        return Math.max(leftMax, rightMax);
    }
});