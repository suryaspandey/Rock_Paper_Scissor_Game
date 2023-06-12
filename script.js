
const option_imgs = document.querySelectorAll('.option-img');

let userChoice;

const compChoices = ['rock','paper','scissor'];

let  globalDecision = false;
let userPoints = 0;
let compPoints = 0;
let noOfPlays = 0; // increase no of plays 
let chances = 5; // remaining chances


option_imgs.forEach(option_img =>{
    option_img.addEventListener('click',(e)=>{

        // user's image selection on click
        userChoice = e.target.id; // targetting all the images using images' id
    
        const user_img_sec = document.getElementsByClassName("user-img-sec")[0];
        const user_image_holder = document.createElement('div');
        const user_img  = 
        `<h3>You</h3>
        <img id="user-img" src="./images/${userChoice}.jpg" alt="">`;

        user_image_holder.innerHTML = user_img;
        user_img_sec.innerHTML = '';
        user_img_sec.appendChild(user_image_holder);


        // computer's random image selection
        const random_choice = Math.floor(Math.random()*3);
        const comp_random_img = compChoices[random_choice];
        // console.log("compchoice"+comp_random_img);


        const comp_img_sec = document.getElementsByClassName("comp-img-sec")[0];
        const comp_image_holder = document.createElement('div');
        const comp_img  = 
        `
        <h3>Computer</h3>
        <img id="user-img" src="./images/${comp_random_img}.jpg" alt="">`;
        
        comp_image_holder.innerHTML = comp_img;
        comp_img_sec.innerHTML = '';
        comp_img_sec.appendChild(comp_image_holder);

        const result  = document.getElementById('result');
        const userPointsDisplay = document.getElementById('userPoints');
        const compPointsDisplay = document.getElementById('compPoints');
        const chancesRemaining  = document.getElementById('chancesRemaining');



        if (userChoice === comp_random_img) {
            result.innerHTML = "Draw";
            result.style.color = "rgb(120, 80, 80)";
  
            noOfPlays++; 
            chances--;
            chancesRemaining.innerHTML = `Chances Remaining: ${chances}`;

        } 
        else{
            const isUserWinner = user_winning_options.some(optn => 
                optn.userChoice === userChoice && optn.comp_random_img === comp_random_img);
                if(isUserWinner) {
                    result.innerHTML = "You Win";
                    result.style.color = "rgb(23, 178, 23)"; // green
                    userPoints+=5;
                    // userPointsDisplay.innerHTML = userPoints;
                    // compPointsDisplay.innerHTML = compPoints;
                    noOfPlays++;
                    chances--;
                    chancesRemaining.innerHTML = `Chances Remaining: ${chances}`;
                }
                else{
                    result.innerHTML = "Computer Wins";
                    result.style.color = "red";
                    compPoints+=5;
                    // userPointsDisplay.innerHTML = userPoints;
                    // compPointsDisplay.innerHTML = compPoints;
                    noOfPlays++;
                    chances--;
                    chancesRemaining.innerHTML = `Chances Remaining: ${chances}`;

                }
        } 

            // console.log(noOfPlays);
            userPointsDisplay.textContent = userPoints;
            compPointsDisplay.textContent = compPoints;

            // noOfPlays++;

            if(noOfPlays === 5 && chances == 0){

                setTimeout(()=>{
                    if(userPoints>compPoints){
                        result.innerHTML = "Final Winner : You!!";
                        result.style.color = "rgb(23, 178, 23)";
                    }
    
                    else if(userPoints<compPoints){
                        result.innerHTML = "Final Winner : Computer!!";
                        result.style.color = "red";
                    }
    
                    else if(userPoints==compPoints){
                        result.innerHTML = "It is a Draw!";
                        result.style.color = "rgb(120, 80, 80)";
                    }
    
    
                    userPoints = 0;
                    compPoints = 0;
    
                    userPointsDisplay.textContent = "";
                    compPointsDisplay.innerHTML = "";
    
                    noOfPlays = 0;
                    chances = 0;
         
                    chancesRemaining.innerHTML = `Chances Remaining: ${0}`;

                },1000);
               
            }
    })
})

// various combinations to win the game
    const user_winning_options = [
        {
            userChoice:'paper',
            comp_random_img: 'rock'
        },

        {
            userChoice:'rock',
            comp_random_img: 'scissor'
        },
        {
            userChoice:'scissor',
            comp_random_img: 'paper'
        } 
    ]


