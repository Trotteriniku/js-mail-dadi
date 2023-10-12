

const mailCeckBtn =document.querySelector('button');

mailCeckBtn.addEventListener('click',function () {
const employeMail = ['example@1.com','example@2.com','example@3.com','example@4.com'];
const mailValue = document.getElementById('email').value;
const alertText =document.getElementById('alertText')
let alert =document.querySelector('.alert')
    
        if (employeMail.includes(mailValue)) {
           alert.classList.add('alert-success')
            alertText.innerText= 'Bentornato' 
        } else{
            alertText.innerText= 'Mi spiace ma non riusciamo a trovare la tua email nei nostri reggistri. Riprova con un\'altra mail'
           alert.classList.add('alert-warning')
        }
        
        alert.classList.remove('d-none')
        
})
   