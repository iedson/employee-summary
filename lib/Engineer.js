let Employee = require('./Employee');
//need to require Employee consturctors apparently 
class Engineer extends Employee {
    //extending employee by making the employee an engineer with github and role 
    constructor(name, id, email, github) {
        super (name, id, email);
        this.github = github;
        //getting error that role is not defined
        //getting error that github is not defined - moved to consturctor because it's a new constructor
        //super calls the parent "employee" does not add to the constructor 
        
    }
    getGithub() {
        return this.github;
    }
    getRole() {
        return 'Engineer';
    }

}
module.exports = Engineer;