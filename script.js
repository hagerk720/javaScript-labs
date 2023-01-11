function task1() {
  let age = Number(prompt("please enter your age"));
  console.log(age);
  while (age > 0 && !isNaN(age)) {
    if (age > 1 && age <= 10) alert("you are child");
    else if (age >= 11 && age <= 18) alert("you are Teenager ");
    else if (age >= 19 && age <= 50) alert("you are Grown up  ");
    else if (age > 50) alert("you are old ");
    age = Number(prompt("please enter your age"));
  }
}

function task2() {
  let str = prompt("please enter any string");
  let numOfVowels = 0;
  while (isNaN(str) && str.length > 0) {
    alert(`number of vowels in that string = ${str.match(/[aeoui]/gi).length}`);
    str = prompt("please enter any string");
  }
}
function task3() {
  let clock = prompt("please enter clock in 24");
  console.log(clock);

  while (clock != null) {
    if (clock < 12 && clock >= 1) {
      alert(`the clock is ${clock} AM`);
    } else if (clock == 0) {
      alert(`the clock is ${12} AM`);
    } else if (clock > 12 && clock <= 24) {
      alert(`the clock is ${clock - 12} PM`);
    }
    clock = prompt("please enter clock in 24");
  }
}
