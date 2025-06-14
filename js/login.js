document.getElementById('login-button').addEventListener('click', function(event){
    event.preventDefault();

    const mobileNumber = document.getElementById('mobile-number').value;
    const pinNumber = document.getElementById('pin-number').value;

    if(mobileNumber === '5' && pinNumber === '1234'){
        console.log('you are logged in');
        window.location.href = '/home.html';
    }
    else{
        alert('Enter correct phone or pin number')
    }

    


})