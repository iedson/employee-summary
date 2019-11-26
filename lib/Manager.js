//copy pasta Intern or Engineer 
let Employee = require('./Employee');
//extend employee by adding schoool, role should be Manager here
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super (name, id, email);
        this.officeNumber = officeNumber;
    }
    //get office Number
    getOfficeNumber(){
        return this.officeNumber;
    }

    //get role
    getRole() {
        return 'Manager';
    }
}
module.exports = Manager;