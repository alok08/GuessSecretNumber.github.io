'use strict';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'new number!';
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 58;
// document.querySelector('.score').textContent = 22;

let secretnumber = Math.trunc(Math.random()*20)+1;
// document.querySelector('.number').textContent = secretnumber;
let score = 20;
let highscore = 0;
let impmsgcount = 0;
document.querySelector('.check').addEventListener
('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    if(!guess)
    {
        document.querySelector('.message').textContent = '⛔You Choosen No Number Yet.'
        impmsgcount++;
    }
    else if(guess === secretnumber)
    {
        document.querySelector('.message').textContent = '🎉 You Chossen Right Number.'
        score+=2;
        document.querySelector('.score').textContent = score
        document.querySelector('.number').textContent = secretnumber;
        //this is for css
        document.querySelector('body').style.backgroundColor = '#8df542';
        //implementation for highscore
        if(score>highscore)
        {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
        impmsgcount++;
        if(impmsgcount>0)
        {
            document.querySelector('.impmsg').textContent = "";
        }
    }
    else if(guess === secretnumber+1 || guess === secretnumber-1)
    {
        if(score>2)
        {
            document.querySelector('.message').textContent = '😯 You are very close to number.';
            score-=2;
            document.querySelector('.score').textContent = score
            //this is for css
            document.querySelector('body').style.backgroundColor = '#e342f5';
        }
        else
        {
            document.querySelector('.score').textContent = 0;
            document.querySelector('.message').textContent = '🙇‍♂️ Sorry! You lost the Game.';
            //this is for css
            document.querySelector('body').style.backgroundColor = '#f54254';
        }
        impmsgcount++;
        if(impmsgcount>0)
        {
            document.querySelector('.impmsg').textContent = "";
        }
    }
    else if(guess > secretnumber+1)
    {
        if(score>2)
        {
            document.querySelector('.message').textContent = '🙇‍♂️ Too high.';
            score-=2;
            document.querySelector('.score').textContent = score
            //this is for css
            document.querySelector('body').style.backgroundColor = '#f542c5';
        }
        else
        {
            document.querySelector('.score').textContent = 0;
            document.querySelector('.message').textContent = '🙇‍♂️ Sorry! You lost the Game.';
            //this is for css
            document.querySelector('body').style.backgroundColor = '#f54254';
        }
        impmsgcount++;
        if(impmsgcount>0)
        {
            document.querySelector('.impmsg').textContent = "";
        }
    }
    else if(guess < secretnumber+1)
    {
        if(score>2)
        {
            document.querySelector('.message').textContent = '🙇‍♂️ Too low.';
            score-=2;
            document.querySelector('.score').textContent = score
            //this is for css
            document.querySelector('body').style.backgroundColor = '#f542c5';
        }
        else
        {
            document.querySelector('.score').textContent = 0;
            document.querySelector('.message').textContent = '🙇‍♂️ Sorry! You lost the Game.';
            //this is for css
            document.querySelector('body').style.backgroundColor = '#f54254';
        }
        impmsgcount++;
        if(impmsgcount>0)
        {
            document.querySelector('.impmsg').textContent = "";
        }
    }
});

document.querySelector('.again').addEventListener
('click', function(){
    score = 20;
    secretnumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.score').textContent = score;
    document.querySelector('.highscore').textContent = 0;
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.message').textContent = 'Start Guessing.....';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = ' ';
    document.querySelector('.highscore').textContent = highscore;
    document.querySelector('.impmsg').textContent = "Right now you have 20 points but as soon as you guess the wrong number, your points get reduced by 2 and as soon as your points are, you will lose the game.";
});

