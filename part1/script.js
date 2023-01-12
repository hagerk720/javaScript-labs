function login() {
  var userName = prompt("Enter user name");
  var password = prompt("enter password");

  if (userName == "admin" && password == "421$$") {
    alert("Welcome login success");
  } else if (userName != "admin" && password == "421$$") {
    alert("incorrect user name");
  } else if (userName == "admin" && password != "421$$") {
    alert("incorrect password");
  } else alert("incorrect password and user name");
}

function calc() {
  var fNum = Number(prompt("first number"));
  var operation = prompt(
    "choose from (sum , multi , subtract , division , moduls)"
  );
  console.log(operation);
  var sNum = Number(prompt("second number"));
  console.log(sNum);

  while (fNum != null && sNum != null && operation != null) {
    switch (operation.toLowerCase()) {
      case "sum":
      case "+":
        operation = prompt(`${fNum} + ${sNum} = ` + (fNum + sNum));
        fNum = fNum + sNum;
        break;

      case "multi":
      case "*":
        operation = prompt(`${fNum} * ${sNum} = ` + fNum * sNum);
        fNum = fNum * sNum;
        break;

      case "subtract":
      case "-":
        operation = prompt(`${fNum} - ${sNum} = ` + (fNum - sNum));
        fNum = fNum - sNum;
        break;

      case "division":
      case "/":
        operation = prompt(`${fNum} / ${sNum} = ` + fNum / sNum);
        fNum = fNum / sNum;
        break;

      case "moduls)":
      case "%":
        operation = prompt(`${fNum} % ${sNum} = ` + (fNum % sNum));
        fNum = fNum % sNum;
        break;
      default:
        alert("please enter only these operation (+ , * , - , / ,% )");
        operation = prompt(
          "choose from (sum , multi , subtract , division , moduls)"
        );
    }
    if (operation == null) break;
    sNum = Number(prompt("second number"));
  }
}
