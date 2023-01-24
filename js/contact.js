console.log("Script was correctly detected.");
window.addEventListener('load', function(){
    console.log('The window has finished loading');
})

//form-inputs variables
const inputFormName = document.querySelector('#ContactName'); //INPUT name
const inputFormEmail = document.querySelector('#ContactEmail'); //INPUT email
const inputFormMessage = document.querySelector('#ContactMessage'); //TEXTAREA message
const contactForm = document.querySelector('.form'); //All the contact form variable, it's a submit.

//object
const message = { //the form will send the info to this object
    ContactName: '',
    ContactEmail: '',
    ContactMessage: ''
}

//event function to register text inside the pripieties of the object 
function registerText(event){
    message[event.target.id] = event.target.value; //to change the object id.value to the target value value
    console.log(message); //to read the object in console
    //note: event is 'change' target is 'inputFormName' value is 'id' which is #contactName and his value is gonna change for the new writen value.
}

//event listeners
inputFormName.addEventListener('change', registerText); //after leave the input, excecutes the function.
inputFormEmail.addEventListener('change', registerText);
inputFormMessage.addEventListener('input', registerText); //while write in the input, excecutes the function. This could be used to count words.




contactForm.addEventListener('submit', function(e){ //submit event listener, submit var in line 10
    e.preventDefault(); //prevents the page to recharge when clicking

    //validate form
        //destructuring element (converts every object properties to a variable, giving access to they, which are gonna be used in the next two if)
        const {ContactName, ContactEmail, ContactMessage} = message;

        //if there are inputs without text, then >
        if (ContactName == '' || ContactEmail == '' || ContactMessage == '') {
            formAlert('Todos los campos son obligatorios, favor de revisar','error'); //this happens if there's no text, the second argument is error
            return; //breaks the code excecution if there's no name
        };
        //if all the inpurs have text, then >
        if (ContactName != '' || ContactEmail != '' || ContactMessage != '') {
            formAlert('Su mensaje ha sido enviado! Pronto nos pondremos en contacto con usted.'); //this happens if every input is filled.
            return; //breaks the code excecution if everything's okay
        };



    //send form

    console.log('Se esta enviando el formulario...');
})


//formAlert
function formAlert(message, error = null){ //if there's no error, then it's null
    let alertMessage = document.createElement('P'); //creates the element P
    alertMessage.textContent = message; //converts the message obtained in the lines 38 or 43 to a text.

    if(error) { //adds class of error or success message
        alertMessage.classList.add('form__error--msg');
    } else {
        alertMessage.classList.add('form__success--msg');
    };
    contactForm.appendChild(alertMessage); //adds the element to the html
    setTimeout(() =>{
        alertMessage.remove();
    }, 5000); //END timeOut
}; //END formAlertFunction

//NOTE to develop better: Actually, there's a better way to do this, letting only error or null as a main arguments in the two ifs, and writing the message inside the formAlert function.//////////


