function lab1() {
  var numOfn = prompt("how many number you want to get the sum of ?");
  var arr = [];
  if (!isNaN(numOfn)) {
    for (var i = 0; i < numOfn; i++) {
      arr.push(Number(prompt("number " + (i + 1))));
    }
    var sum = 0;
    arr.forEach((element) => {
      sum += element;
    });
  }
  alert(`sum of numbers = ${sum} and average = ${sum / numOfn}`);
}

function lab2() {
  var phoneBook = [];
  var option = prompt(
    "you want to add new name or search\n 1- add \n 2-search"
  );
  while (option) {
    if (option == "add") {
      let contact = {
        name: prompt("enter name"),
        phone: prompt("enter phone"),
      };
      phoneBook.push(contact);
    } else if (option == "search") {
      var searchContact = prompt("who you want to find ? ");
      if (isNaN(searchContact)) {
        var index = phoneBook.findIndex(
          (element) => element.name == searchContact
        );
        alert(
          "name  : " +
            phoneBook[index].name +
            " phone : " +
            phoneBook[index].phone
        );
      } else {
        var index = phoneBook.findIndex(
          (element) => element.phone == searchContact
        );
        alert(
          "name  : " +
            phoneBook[index].name +
            " phone : " +
            phoneBook[index].phone
        );
      }
    }
    option = prompt("you want to add new name or search\n 1- add \n 2-search");
  }
}
const areaCalculator=()=>
{
let cancel=false;

while(!cancel){
let shapeName=prompt("enter the name of the shape you want to calc area");
let area=0;
if(shapeName==null)
{
    cancel=true;
}
else
{
    switch (shapeName)
    {
        case"circle":
            area=Math.pow(Number(prompt(`enter radius of the ${shapeName}`)),2)*Math.PI;
            break;
        case "triangle":
            area=0.5*Number(prompt(`enter base of the ${shapeName}`))*Number(prompt(`enter height of the ${shapeName}`));
            break;    
        case"square":
            area=Math.pow(Number(prompt(`enter length of side of the ${shapeName}`)),2);
            break;
        case "rectangle":
            area=Number(prompt(`enter length of the ${shapeName}`))*Number(prompt(`enter width of the ${shapeName}`));
            break;  
        case"parallelogram":
            area=Number(prompt(`enter base of the ${shapeName}`))*Number(prompt(`enter height of the ${shapeName}`));
            break;
        case "trapezium":
            area=0.5*(Number(prompt(`enter length of parallel side 1 ${shapeName}`))+Number(prompt(`enter length of parallel side 2 ${shapeName}`)))*Number(prompt(`enter height of the ${shapeName}`));
            break; 
        case "ellipse":
            area=Number(prompt(`enter minor axis of the ${shapeName}`))*Number(prompt(`enter major axis of the ${shapeName}`))*Math.PI;
            break;   
        default:
            alert("enter one of these \ncircle,triangle,square,rectangle,parallelogram,trapezium,ellipse")
    }
    alert(`area of the ${shapeName} = ${area} m2`)
}
}
}
