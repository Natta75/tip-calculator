document.getElementById('calculateBtn').addEventListener('click', function() {
    const billAmount = parseFloat(document.getElementById('billAmount').value);
    const tipPercent = parseFloat(document.getElementById('tipPercent').value);

    if (isNaN(billAmount) || isNaN(tipPercent)) {
        document.getElementById('tipAmount').textContent = '—';
        document.getElementById('totalAmount').textContent = 'Введите корректные данные';
        return;
    }

    if (billAmount < 0 || tipPercent < 0) {
        document.getElementById('tipAmount').textContent = '—';
        document.getElementById('totalAmount').textContent = 'Значения должны быть положительными';
        return;
    }

    const tipAmount = billAmount * tipPercent / 100;
    const total = billAmount + tipAmount;

    document.getElementById('tipAmount').textContent = tipAmount.toFixed(2) + ' ₽';
    document.getElementById('totalAmount').textContent = total.toFixed(2) + ' ₽';
});
