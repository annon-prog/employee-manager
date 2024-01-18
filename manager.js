const Employee = require("./employee");

class Manager extends Employee {
    constructor(name, salary, title, manager) {
        super(name, salary, title, manager);
        this.employees = [];

    }

    addEmployee(employee) {
        this.employees.push(employee);
    }

    _totalSubSalary() {
        let sum = 0;

        for (let employee of this.employees) {
            sum += employee.salary

            if (employee instanceof Manager) {
                sum += employee._totalSubSalary();
            }
        }

        return sum;
    }
    
    calculateBonus(multiplier) {
        return (this.salary + this._totalSubSalary()) * multiplier;
    }
}

module.exports = Manager;

