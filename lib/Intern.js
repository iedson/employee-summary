let Employee = require('./Employee');
//extend employee by adding schoool, role should be intern here
class Intern extends Employee {
    constructor(name, id, email, school) {
        super (name, id, email);
        this.school = school;
    }
    //get school
    getSchool(){
        return this.school;
    }

    //get role
    getRole() {
        return 'Intern';
    }
}
module.exports = Intern;