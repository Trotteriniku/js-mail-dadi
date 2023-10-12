

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
   
// DADI
const spinbtn=document.getElementById('dicebtn')


spinbtn.addEventListener('click',function () {
    const dicespin = Math.floor((Math.random() * 6) + 1);
    const dice =document.querySelector('.dice');
    dice.innerText= dicespin
    const results =document.getElementById('results');
    const dicespinBot = Math.floor((Math.random() * 6) + 1);
    const diceBot = document.querySelector('.dicebot');
    diceBot.innerText= dicespinBot

    if (dicespin < dicespinBot) {
       
        // results.className('alert alert-warning');
        results.innerHTML='Hai perso!'
    } else if (dicespin > dicespinBot) {
        results.innerHTML='hai vinto'
    } else{
        results.innerHTML='Pareggio'
    }
    
})

