// nested if else

// winning number 19 

// 19 your guess is right 
// 17 too low 
// 20 too high 

// let winningNumber = 19;
// let userGuess = +prompt("Guess a number");

// if(userGuess === winningNumber){
//     console.log("Your guess is right!!");
// }else{
//     if(userGuess < winningNumber){
//         console.log("too low !!!");
//     }else{
//         console.log("too high !!!");
//     }
// }




jayesh = 30 

if(jayesh>=40){
    console.log("pass")
    if (jayesh>40 && jayesh<=60){
        console.log("C")
    }else if (jayesh>60 && jayesh<=80){
        console.log("B")
    }else if (jayesh>80 && jayesh<=100){
        console.log("A")
    }
    else{
        console.log("invalid marks")
    }

}else{
    console.log("fail")
}