document.getElementById('add-money-btn').addEventListener('click', function(event){
    event.preventDefault();

    const amountInput = document.getElementById('amount-input').value;
   
    const parseAmountInput = parseFloat(amountInput);

    const accountBalance = document.getElementById('account-balance').innerText;

    const parseAccountBalance = parseFloat(accountBalance);

    const pinInput = document.getElementById('pin-input').value;

    if(pinInput === '1234'){
        const newAccountBalance = parseAmountInput + parseAccountBalance;

        document.getElementById('account-balance').innerText = newAccountBalance;
    }
    else{
        alert('Failed to add Money. Please try again kindly sire!')
    }
    
})