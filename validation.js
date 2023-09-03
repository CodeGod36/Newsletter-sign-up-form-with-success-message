document.addEventListener("DOMContentLoaded", function(){
    //Getting the email inputs and btn//
    const emailInput = document.querySelector("input[name='email']")
    const subBtn = document.querySelector("#btn")

    //adding event listener to the button//
    subBtn.addEventListener("click", function(){
       const emailvalue = emailInput.value.trim()

        //Cheacking if the email is invalid or empty//
        if(emailvalue === "" || !isValidEmail(emailvalue)){
            //Dispaly Error Message//
            displayErrorMessage("Valid email Please")
        }else{
            clearErrorMessage()
        }
    })

    // Function to validate an email address using a regular expression//
    function isValidEmail(email){
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
        return emailPattern.test(email)
    }

    //Function to display the error message//
    function displayErrorMessage(message){
        const errorMessage = document.createElement("div")
        errorMessage.className = "error-message"
        errorMessage.textContent = message

        errorMessage.style.color = "Tomato"

        emailInput.style.borderColor = "Tomato"

        //appending the error message to the parent element(form)//
        emailInput.parentNode.appendChild(errorMessage)
    }

    //function to clear the error message//
    function clearErrorMessage(){
        const errorMessage = document.querySelector(".error-message")
        if(errorMessage){
            errorMessage.parentNode.removeChild(errorMessage)

            emailInput.style.borderColor = ""

            const form = document.getElementById("subscribeForm")

            if(form){
                form.submit()
                window.location.href = "Success.html"
            }
        }
    }
});