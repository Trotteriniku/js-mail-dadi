const employeMail = ['example@1.com','example@2.com','example@3.com','example@4.com'];
const mailValue =document.getElementById('email').value;
const mailCeckBtn =document.querySelector('button');
console.log(mailValue);

mailCeckBtn.addEventListener('click',function () {
        if (employeMail.includes(mailValue)) {
            alert=('Perfetto benvenuto')
            console.log(mailValue);
        } else{
            alert=('mi spiace ma non riconosciamo l'')
        }
        
   
})
   