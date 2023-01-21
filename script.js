// using constructor function
function Person1(name, money, sleepMood, healthRate) {
  this.name = name;
  this.money = money;
  this.sleepMood = sleepMood;
  this.healthRate = healthRate;
}
Person1.prototype.sleep = function (hours) {
  if (hours === 7) {
    this.sleepMood = "happy";
  } else if (hours > 7) {
    this.sleepMood = "lazy";
  } else {
    this.sleepMood = "tired";
  }
};
Person1.prototype.eat = function (meals) {
  switch (meals) {
    case 3:
      this.healthRate = 100;
      break;
    case 2:
      this.healthRate = 75;
      break;

    case 1:
      this.healthRate = 50;
      break;
  }
};
Person1.prototype.buy = function (items) {
  this.money -= 10 * items;
};
const person1 = new Person1("hager", 50000, "happy", 100);
console.log(person1);

// using classes
class Person2 {
  constructor(name, money, sleepMood, healthRate) {
    this.name = name;
    this.money = money;
    this.sleepMood = sleepMood;
    this.healthRate = healthRate;
  }
  sleep(hours) {
    if (hours === 7) {
      this.sleepMood = "happy";
    } else if (hours > 7) {
      this.sleepMood = "lazy";
    } else {
      this.sleepMood = "tired";
    }
  }
  eat(meals) {
    switch (meals) {
      case 3:
        this.healthRate = 100;
        break;
      case 2:
        this.healthRate = 75;
        break;

      case 1:
        this.healthRate = 50;
        break;
    }
  }
  buy(items) {
    this.money -= 10 * items;
  }
}
const person2 = new Person2("hager2", 50000, "happy", 75);
console.log(person2);
// Using Objects Linking to Other Objects (OLOO)
var Person3 = {
  init: function (name, money, sleepMood, healthRate) {
    this.name = name;
    this.money = money;
    this.sleepMood = sleepMood;
    this.healthRate = healthRate;
  },
  sleep(hours) {
    if (hours === 7) {
      this.sleepMood = "happy";
    } else if (hours > 7) {
      this.sleepMood = "lazy";
    } else {
      this.sleepMood = "tired";
    }
  },
  eat(meals) {
    switch (meals) {
      case 3:
        this.healthRate = 100;
        break;
      case 2:
        this.healthRate = 75;
        break;

      case 1:
        this.healthRate = 50;
        break;
    }
  },
  buy(items) {
    this.money -= 10 * items;
  },
};
const person3 = Object.create(Person3);
person3.init("hager3", 50000, "happy", 75);
console.log(person3);
//  Using Factory functions
function Person4(name, money, sleepMood, healthRate) {
  return {
    name: name,
    money: money,
    sleepMood: sleepMood,
    healthRate: healthRate,
    sleep: function (hours) {
      if (hours === 7) {
        this.sleepMood = "happy";
      } else if (hours > 7) {
        this.sleepMood = "lazy";
      } else {
        this.sleepMood = "tired";
      }
    },
    eat: function (meals) {
      switch (meals) {
        case 3:
          this.healthRate = 100;
          break;
        case 2:
          this.healthRate = 75;
          break;

        case 1:
          this.healthRate = 50;
          break;
      }
    },
    buy: function (items) {
      this.money -= 10 * items;
    },
  };
}
const person4 = Person4("hager4", 50000, "happy", 75);
console.log(person4);
