function employee() {}

employee.prototype.firstName = "jini";
employee.prototype.lastName = "thakar";
employee.prototype.startDate = new Date();
employee.prototype.signedNDA = true;
employee.prototype.fullName = function(){
    console.log(this.firstName + " " + this.lastName);
};

var jini = new employee()
console.log(jini.fullName());
console.log(jini.signedNDA);
