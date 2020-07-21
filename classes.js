/* 
  Once you complete a problem, refresh ./classes.html in your browser and check to see if the problem's test(s) are passing.
  Passed tests will be indicated by a green circle.
  Failed tests will be indicated by a red X.

  You can refresh the page at any time to re-run all the tests.

  Classes are a tool for building similar objects over and over again.
  They are a construct that helps your organize your code.

  Let's work with some employees at a company.
  You work for Widget Co. They have hundreds of employees.
*/

////////// PROBLEM 1 //////////

/*
  Make a class to help us build all of the employees.
  Each employee has the following properties:
    - first_name
    - last_name
    - email
    - age
  Each employee has the following methods:
    - makeWidget
      - This returns a string equal to the employees first name + last name + the word Widget
      - Example: "Dave Smith Widget"

  Call your class Employee and receive all the data in the constructor in the order listed above.
*/

//Code Here
class Employee {
  constructor(first_name, last_name, email, age){
    this.first_name = first_name;
    this.last_name = last_name;
    this.email = email;
    this.age = age;
  }
  makeWidget() {
    let statement = this.first_name + " " + this.last_name + " " + "Widget"
    return statement
  }
}

////////// PROBLEM 2 //////////

/*
  Next, make a manager for Widget Co. that extends Employee
  Each manager has all of the same properties as an employee with the following additional properties:
    - reports (other employees) that defaults to an empty array
  Each manager has the following additional methods:
    - hire (employee)
      - Accepts a new employee as a parameter and pushes it to their list of reports.
    - fire (index)
      - Fire removes employees from their list of reports at the given index

  Call your new class Manager
*/

//Code Here

class Manager extends Employee {
  constructor(first_name, last_name, email, age, reports=[]) {
    super(first_name, last_name, email, age);
    this.reports = reports;
  }
  hire(employee){
    this.reports.push(employee)
  }
  fire(employee_index){
    this.reports.splice(employee_index,employee_index)
  }

}

let dudels = new Manager("Dudels", "Boberson", "aAaa@a", 25)

////////// PROBLEM 3 //////////

/*
  Managers for Widget Co. get promoted when they get more employees, and get a bonus when they fire employees.
  create a class ProgressiveManager that extends Manager.  A Progressive Manager has all of the same properties as a manager with the following additional properties:
    - title - default 'Not a manager'
    - bonus - default 0

  When employees are hired or fired, the manager's title should be updated based on the number of reports.
    0if (reports === 0) newTitle = Not a manager
    1-3if (reports === 0) newTitle = Barely Manager
    4-10if (reports === 0) newTitle = Mostly Manager
    11-50if (reports === 0) newTitle = Manager
    51-100if (reports === 0) newTitle = Manager Plus
    101+if (reports === 0) newTitle = Bestest Manager

  Everytime they fire an employee they get $100 added to their bonus.

  Call your new class ProgressiveManager
*/

//Code Here
class ProgressiveManager extends Manager {
  constructor(first_name, last_name, email, age, reports=[],
    title='Not a manager', bonus=0) {

    super(first_name, last_name, email, age);
    this.reports = reports;
    this.title = title;
    this.bonus = bonus;
  }

  updateTitle() {
    let newTitle = ""

    let reports = this.reports.length

    if (reports >  100) newTitle = 'Bestest Manager'
    if (reports <= 100) newTitle = 'Manager Plus'
    if (reports <= 50 ) newTitle = 'Manager'
    if (reports <= 10 ) newTitle = 'Mostly Manager'
    if (reports <= 3  ) newTitle = 'Barely Manager'
    if (reports <= 0  ) newTitle = 'Not a manager'

    return this.title = newTitle
  }

  hire(employee){
    super.hire()
    this.updateTitle()
  }
  fire(employee_index){
    super.fire()
    this.updateTitle()
    this.bonus += 100
  }


}


////////// PROBLEM 4 - Black Diamond //////////

/*
  Widget Co has a factory that makes widgets.
  Factories have Machines.

  Make a Machine class that takes in no parameters
  A Machine has the following properties:
    - widgets_made_count - default 0
    - wear_and_tear_count - default 0
    - needs_reboot - default false

  A Machine has the following methods:
    - makeWidgets
        - This function takes in a number and increases widgets_made_count by that amount
        - It also increases wear_and_tear_count by 1 for every 50
    - fixMachine
        - This function sets needs_reboot to true
    - reboot
        - This function returns an anonymous function that is called when the machine is done rebooting
        - The anonymous function should decrease wear_and_tear_count by 10, and set needs_reboot to false
*/

//Code Here

// class Machine{
//   constructor(widgets_made_count = 0, wear_and_tear_count = 0, needs_reboot = false){
//     this.widgets_made_count = widgets_made_count
//     this.wear_and_tear_count = wear_and_tear_count
//     this.needs_reboot = needs_reboot 
//   }
//   makeWidgets(num){
//     this.widgets_made_count += num
//     for (let i =0; i<num; i += 50){
//       this.wear_and_tear_count += 1
//     }
//   }

//   fixMachine(){
//     this.needs_reboot = true;
//     console.log("fixMachine()", this.needs_reboot)
//     return this.needs_reboot = true;
//   }

//   reboot() {
//     let func = function() {
//       this.wear_and_tear_count -= 10;
//       this.needs_reboot = false;
//       console.log("called inner func")
//     }
//     return func
//   }

// }

class Machine {
  constructor() {
  this.widgets_made_count = 0;
  this.wear_and_tear_count = 0;
  this.needs_reboot = false;
  }
  makeWidgets(num){
    this.widgets_made_count += num;
    this.wear_and_tear_count += (num/50); 
  }
  fixMachine(){
  this.needs_reboot = true;
  }
  reboot(){
    return () => {
      this.wear_and_tear_count -= 10;
      this.needs_reboot = false;
    }
  }
}