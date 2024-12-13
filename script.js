const form=document.querySelector('form')

//we should not select the height  and weiht values here because if we select here then null values are stored so we have to select the values after submit event.

form.addEventListener('submit',(e)=>{

    e.preventDefault()

    // e.preventDefault(); stops the page from reloading or navigating away, so the JavaScript code that calculates the BMI and updates 
    // the HTML elements with the results can run immediately on the same page.

    const height=parseInt(document.querySelector("#height").value)
    const weight=parseInt(document.querySelector("#weight").value)
    const results=document.querySelector("#results")
    const message=document.querySelector('#message')

    if(height===''||height<0||isNaN(height)){
        results.innerHTML="please Enter a Valid Height"

    }

    else if(weight===''||weight<0||isNaN(height)){
        results.innerHTML="please Enter a Valid Weight"

    }
    else{
        const bmi=(weight/((height*height)/10000)).toFixed(2)
        results.innerHTML=`<span> ${bmi} </span>`


        const messagee = function(bmi) {
            if (bmi < 18.6) {
                return "You are underweight";
            } else if (bmi >= 18.6 && bmi <= 24.9) {
                return "You are fit and healthy";
            } else {
                return "You are overweight";
            }
        };
        // messagee(bmi)

        // Call the messagee function with the calculated BMI and display it
        message.innerHTML=`<span>${messagee(bmi)}<span>`
        
        
        
            
        
    }

})