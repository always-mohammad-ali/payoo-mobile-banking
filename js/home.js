document.getElementById('add-money-btn').addEventListener('click', function(event){
    event.preventDefault();

    const amountInput = document.getElementById('amount-input').value;
    console.log(amountInput);
    const pinInput = document.getElementById('pin-input').value;
    console.log(pinInput);
})