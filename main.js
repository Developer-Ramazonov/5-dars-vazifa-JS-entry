alert("Welcome our website !!!")

alert('We are going to check you are robot or not');

alert("You have to answer to our questions")

var answer=prompt("Enter the right solution: 1 + 1 = ");
 if(answer==2){
     alert("Correct answer")
    console.log('Do you want instruction')
    }
 else {
     alert("Uncorrect answer \n There must be simple mistake, do you want another question?");
    answer=prompt("Enter the right solution: 2 + 5 = 7")
    if(answer!=7)alert('It is clear thet you are not real. There is defend from robots, you can not use our website !!!\nGood luck ...')
}


