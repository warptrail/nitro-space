// Each function has it's own role

//Scope evertying inside the game function so you do not have global variables
const game = () => {
    // these variables will be needed across multiple functions so they are declared up here
    let pScore = 0;
    let cScore = 0;
    let tScore = 0;

    const startGame = () => {
        // this variable will only be needed in this function
        const playBtn = document.querySelector('.intro-button');
        const introScreen = document.querySelector('.intro');
        const match = document.querySelector('.match');

        playBtn.addEventListener('click', () => {
            introScreen.classList.add('wacky');
            console.log('something');
        });
    };
    // play match
    const playMatch = () => {
        const options = document.querySelectorAll('.options button');
        const playerHand = document.querySelector('.player-hand');
        const computerHand = document.querySelector('.computer-hand');


        // computer options
        const computerOptions = ['rock', 'paper', 'scissors'];

        options.forEach(option => {
            // use a normal function so you can use "this" to select whatever button
            option.addEventListener('click', function () {
                console.log(this);
                // The computer choice - a random number between 0 and 2
                const computerNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[computerNumber];
                console.log(computerChoice);

                // Here is where we call compareHands
                compareHands(this.textContent, computerChoice);

                // Update Images
                playerHand.src = `${this.textContent}.png`;
                computerHand.src = `${computerChoice}.png`;

            })
        })
    }

    // update score
    const updateScore = () => {
        const playerScore = document.querySelector('.player-score p');
        const computerScore = document.querySelector('.computer-score p');
        const tieScore = document.querySelector('.tie-count p');
        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
        tieScore.textContent = tScore;
    }

    // compare the player hand with the commputer hand
    const compareHands = (playerChoice, computerChoice) => {
        const winner = document.querySelector('.winner');
        // check for a tie
        if (playerChoice === computerChoice) {
            winner.textContent = 'It is a tie';
            tScore++;
            updateScore();
            return;
        }
        // check for rock
        if (playerChoice == 'rock') {
            if (computerChoice === 'scissors') {
                winner.textContent = 'Player Wins!';
                pScore++;
                updateScore();
                return;
            } else {
                winner.textContent = 'Computer Wins!';
                cScore++;
                updateScore();
                return;
            }
        }
        // check for paper
        if (playerChoice == 'paper') {
            if (computerChoice === 'scissors') {
                winner.textContent = 'Computer Wins!';
                cScore++;
                updateScore();
                return;
            } else {
                winner.textContent = 'Player Wins!';
                pScore++;
                updateScore();
                return;
            }
        }
        // check for scissors
        if (playerChoice == 'scissors') {
            if (computerChoice === 'rock') {
                winner.textContent = 'Computer Wins!';
                cScore++;
                updateScore();
                return;
            } else {
                winner.textContent = 'Player Wins!';
                pScore++;
                updateScore();
                return;
            }
        }
    }

    // call all the inner functions
    startGame();
    playMatch();
}

//start the game function
game();