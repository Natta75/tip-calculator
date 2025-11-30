document.getElementById('calculateBtn').addEventListener('click', function() {
    const billAmount = parseFloat(document.getElementById('billAmount').value);
    const tipPercent = parseFloat(document.getElementById('tipPercent').value);

    if (isNaN(billAmount) || isNaN(tipPercent)) {
        document.getElementById('totalAmount').textContent = 'Введите корректные данные';
        return;
    }

    if (billAmount < 0 || tipPercent < 0) {
        document.getElementById('totalAmount').textContent = 'Значения должны быть положительными';
        return;
    }

    const total = billAmount + (billAmount * tipPercent / 100);

    document.getElementById('totalAmount').textContent = total.toFixed(2) + ' ₽';
});
