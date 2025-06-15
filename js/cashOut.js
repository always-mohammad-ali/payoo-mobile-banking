document.getElementById('cashOut-btn').addEventListener('click', function(event){
    event.preventDefault();
   
    const cashOutInput = document.getElementById('cashOut-input').value;

    const cashOutPin = document.getElementById('cashOut-pin').value;
    
    const accountBalance = document.getElementById('account-balance').innerText;

    const parseCashOutInput = parseFloat(cashOutInput);
    const parseAccountBalance = parseFloat(accountBalance);

    if(cashOutPin === '1234'){
         const newBalance = parseAccountBalance - parseCashOutInput;

         document.getElementById('account-balance').innerText = newBalance;
    }
    else{
        alert('Try again kindly');
    }

})