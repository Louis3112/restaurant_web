function handleSubmit() {
    const total = calcTotal(); 
    const formattedTotal = formatCurrency(total); 
    printTotal(formattedTotal);
    return false;
}

function calcTotal(){
    const items = document.querySelectorAll('.food-item');
    let total = 0;
    items.forEach(item => {
        const priceText = item.querySelector('.food-price').textContent;
        const price = parseInt(priceText.replace(/[^\d]/g, '')) || 0; 
        const quantity = parseInt(item.querySelector('.order-input').value) || 0;
        
        total += price * quantity;
    });
    return total;
}

function formatCurrency(amount) {
    return new Intl.NumberFormat('id-ID', { 
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0
    }).format(amount);
}

function printTotal(formattedTotal) {
    const checkOrder = parseInt(formattedTotal.replace(/[^\d]/g, '')) || 0;
    
    if(checkOrder === 0) {
        alert("You have not ordered any menu yet");
    } else {
        alert(`Your Total is ${formattedTotal}\nPlease wait for a moment`);
    }
}