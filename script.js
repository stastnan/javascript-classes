let currentTime = new Date()
let year = currentTime.getFullYear() 


class User {
    constructor (firstName, lastName, age) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._age = age;
    }

    get birthYear() {
        return year - this._age;
    }
    get fullName() {
        return `${this._firstName} ${this._lastName}`;
    } 

}


class Student extends User {
    static MIN_GRADE_FOR_SCHOLARSHIP = 4;
    constructor (firstName, lastName, age, group, averageGrade) {
        super (firstName, lastName, age)
        this.group = group;
        this.averageGrade = averageGrade;
    }

    
    isEligibleForScholarship = function (){
        if (this.averageGrade >= Student.MIN_GRADE_FOR_SCHOLARSHIP) {
            return true;
        } else {
            return false;
        }   
    }
    
}


class Teacher extends User {
    constructor (firstName, lastName, age, groups, yearsOfExperience) {
        super(firstName, lastName, age)
        this.groups = groups;
        this.yearsOfExperience = yearsOfExperience;
    }


    isGroupTeacher = function(groupName) {
        for (let i = 0; i < this.groups.length; i++) {
            let thisGroupName = this.groups[i];
            if (groupName === thisGroupName) {
                return true;
            }
        } return false;
    }
}

const teacher1 = new Teacher('Brad', 'Pitt', 59, ['50b', '51c'], 41);
const student1 = new Student('Tom', 'Cruise', 60, '50b', 4.9);
const student2 = new Student('Leonardo', 'DiCaprio', 48, '62c', 3.9);

console.log(student1.fullName); // Tom Cruise
console.log(student2.birthYear); //1975
console.log(student1.isEligibleForScholarship()); // true
console.log(student2.isEligibleForScholarship()); // false
console.log(teacher1.isGroupTeacher(student1.group)); //true 
console.log(teacher1.isGroupTeacher(student2.group)); // false
console.log(Student.MIN_GRADE_FOR_SCHOLARSHIP); // 4 