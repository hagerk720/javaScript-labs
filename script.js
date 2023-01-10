
function task1(){
    let firstName = prompt("please enter your first name");
    let lastName = prompt("please enter your last name");
    confirm(`Is your name  ${firstName +' '+ lastName + '?'}`);
    let birthYear = prompt("please enter your birth year");
    let age = 2023 - birthYear ; 
    alert(`Welcome ${firstName +' '+ lastName }you are ${age} years old `);
}
function task2(){
    alert('it’s the first release of a calculator that only has a summation feature.');
    let firstNum =Number(prompt("please enter first number")) ;
    let lastNum = Number(prompt("please enter second number"));
    alert(`${firstNum} + ${lastNum} = ${firstNum+lastNum}`)
}