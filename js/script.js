

// ==========================================================//

const toggleBtn = document.getElementById('toggleBtn');
const menu = document.getElementById('menu');

// Toggle Menu when the button is clicked
toggleBtn.addEventListener('click', function(){

    if(menu.style.display==="none"){
        menu.style.display="block";
    }else{
        menu.style.display="none";
    }

});

const alertButton = document.getElementById('alert');
alertButton.addEventListener('click',function(){
    alert("Hi You Click Me!");
});


// ========================================================================//

    const addParagraphBtn = document.getElementById('addParagraphBtn');
    const paragraphContainer = document.getElementById('paragraph-Container');


    addParagraphBtn.addEventListener('click',()=>{

    const newParagraph = document.createElement('p'); //Creates a new <p> (paragraph element) in memory.

    newParagraph.textContent = 'Congratulation on Learning Practical Javascript';

    paragraphContainer.appendChild(newParagraph);  //Adds the new paragraph inside the container, so it becomes visible on the page.

});
// =====================================================================//



// =======================================================//
const greetBtn = document.getElementById('greetBtn')
const usernameInput = document.getElementById('username')
const greetMessage = document.getElementById('greetMessage')


function isValidName(name){
    const namePattern = /^[a-z A-Z\s]+$/;
    return namePattern.test(name);
}

greetBtn.addEventListener('click',function(){
   
    const username = usernameInput.value.trim();
          usernameInput.value = '';
    
        if(username ===''){
        greetMessage.innerText = 'Please enter your name';
    }else if(!isValidName(username)){
        greetMessage.textContent ='Invalid input! use only letters.';
    }else{
        greetMessage.textContent =`Hello ${username}!`;
    }

});

// =============================================================//


// Increement Decreement Button
const increement = document.getElementById('increement');
const decreement = document.getElementById('decreement');
const counterDisplay = document.getElementById('counter');
const reset =document.getElementById('reset');

let counter = 0;
increement.addEventListener('click',()=>{
    
    counter = counter + 1;
    counterDisplay.textContent = counter;
    // counter ++;
    // counterDisplay.textContent = counter;
});


decreement.addEventListener('click',()=>{
    
        counter --;
        counterDisplay.textContent = counter;

    // counter = counter > 0 ? counter - 1 : counter;
    // counterDisplay.textContent = counter;
});

    reset.addEventListener('click',function(){
     location.reload();
 });

