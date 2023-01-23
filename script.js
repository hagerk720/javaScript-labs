class Person {
  #money;
  #sleepMood;
  #healthRate;
  constructor(name) {
    this.name = name;
  }
  /**
   * @param {number} value
   */
  set money(value) {
    this.#money = value;
  }

  /**
   * @param {any} value
   */
  set sleepMood(value) {
    this.#sleepMood = value;
  }
  /**
   * @param {any} value
   */
  set healthRate(value) {
    if (value >= 0 && value <= 100) {
      this.#healthRate = value;
    }
  }
  get money() {
    return this.#money;
  }
  get sleepMood() {
    return this.#sleepMood;
  }
  get healthRate() {
    return this.#healthRate;
  }
  sleep(hours) {
    if (hours === 7) {
      this.#sleepMood = "happy";
    } else if (hours > 7) {
      this.#sleepMood = "lazy";
    } else {
      this.#sleepMood = "tired";
    }
  }
  eat(meals) {
    switch (meals) {
      case 3:
        this.#healthRate = 100;
        break;
      case 2:
        this.#healthRate = 75;
        break;

      case 1:
        this.#healthRate = 50;
        break;
    }
  }
  buy(items) {
    this.#money -= 10 * items;
  }
}
class Employee extends Person {
  #workMood;
  #salary;
  constructor(name, id, isManager) {
    super(name);
    this.id = id;
    this.isManager = isManager;
  }
  work(hours) {
    if (hours == 8) this.#workMood = "happy";
    else if (hours > 8) this.#workMood = "tired";
    else this.#workMood = "lazy";
  }
  set workMood(value) {
    this.#workMood = value;
  }
  get workMood() {
    return this.#workMood;
  }
  set salary(value) {
    if (value >= 1000) {
      this.#salary = value;
    }
  }
  get salary() {
    return this.#salary;
  }
}
class Office {
  constructor(name, employees) {
    this.name = name;
    this.employees = employees;
  }
  getAllEmployess() {
    return this.employees;
  }
  getEmployee(id) {
    for (let emp of this.employees) {
      if (emp.id == id) {
        return emp;
      } else {
      }
    }
  }
  hire(employee) {
    this.employees.push(employee);
  }
  fire(empId) {
    this.employees = this.employees.filter((emp) => emp.id != empId);
  }
}
var emp1 = new Employee("hager", "1", false);
emp1.salary = 5000;
emp1.money = 10000;
var emp2 = new Employee("mariam", "2", false);
emp2.eat(3);
var employees = [emp1, emp2];
var office = new Office("office", employees);
do {
  var option = prompt(
    "you can \n 1- add an employee \n 2- fire an employee  \n 3- display all employees \n 4- display data of employee by his id \n 5- to Exit write (q)"
  );
  console.log();
  menuFunction();
} while (option != "q");

function menuFunction() {
  switch (option) {
    case "1":
      displayEmployee(fillEmployee());
      break;

    case "2":
      var eId = prompt("enter his/her id ");
      office.fire(eId);
      console.log(office.getAllEmployess());

      break;
    case "3":
      office.getAllEmployess().forEach((emp) => displayEmployee(emp));
      break;
    case "4":
      var eId = prompt("enter his/her id ");
      displayEmployee(office.getEmployee(eId));
      break;
  }
}
function uniqueNumber(employees) {
  var eId = Math.floor(Math.random() * 100);
  if (!employees.includes(eId)) {
    return eId;
  } else {
    uniqueNumber(employees);
  }
}
function fillEmployee() {
  var isManager =
    prompt(
      "is this emplyee manger or normal employee ? \n if manger write (mngr) \n if normal employee write (nrml) "
    ) == "mngr"
      ? true
      : false;
  var eName = prompt("enter his/her name ");
  var eAge = prompt("enter his/her age");
  var employee = new Employee(
    eName,
    uniqueNumber(office.getAllEmployess()),
    isManager
  );
  office.hire(employee);

  return employee;
}

function displayEmployee(employee) {
  alert(
    "name : " +
      employee.name +
      "\n" +
      "Id : " +
      employee.id +
      "\n" +
      "salary : " +
      employee.salary +
      "\n" +
      "is manager : " +
      employee.isManager +
      "\n" +
      "sleep mood  : " +
      employee.sleepMood +
      "\n" +
      "health Rate : " +
      employee.healthRate +
      "\n" +
      "work Mood: " +
      employee.workMood
  );
}
