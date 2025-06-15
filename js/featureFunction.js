function showSectionById(id){
    document.getElementById('addMoneyFormSection').classList.add('hidden');

    document.getElementById('cashOutFormSection').classList.add('hidden');

    

    document.getElementById(id).classList.remove('hidden');
}