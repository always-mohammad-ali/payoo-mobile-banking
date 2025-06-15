document.getElementById('cashOutForm').addEventListener('click', function(){

    document.getElementById('cashOutFormSection').classList.remove('hidden');

    document.getElementById('addMoneyFormSection').classList.add('hidden');
})

document.getElementById('addMoneyForm').addEventListener('click', function(){

    document.getElementById('addMoneyFormSection').classList.remove('hidden');

    document.getElementById('cashOutFormSection').classList.add('hidden');


})