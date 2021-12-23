

alert("Welcome our website !!!")

alert('We are going to check you are robot or not');

alert("You have to answer to our questions")

var answer=prompt("Enter the right solution: 1 + 1 = ");
 if(answer==2)alert("Correct answer")
 else {
     alert("Uncorrect answer \n There must be simple mistake, do you want another question?");
    answer=prompt("Enter the right solution: 2 + 5 = 7")
    if(answer!=7)alert('We see that you are blind, you can not use our website !!!\nGood luck ...')
}
