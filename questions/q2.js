var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var User = /** @class */ (function () {
    function User(emailAddress, createdTimestamp) {
        this.emailAddress = emailAddress;
        this.createdTimestamp = createdTimestamp;
    }
    return User;
}());
var CourseOption = /** @class */ (function () {
    function CourseOption(name, grade, ID) {
        this.name = name;
        this.gradeLevel = grade;
        this.ID = ID;
    }
    return CourseOption;
}());
var Catalog = /** @class */ (function () {
    function Catalog(courses) {
        this.courses = courses;
    }
    Catalog.prototype.add = function (course) {
        this.courses.push(course);
    };
    Catalog.prototype.register = function (classId) {
        for (var _i = 0, _a = this.courses; _i < _a.length; _i++) {
            var myClass = _a[_i];
            if (myClass.ID === classId) {
                return myClass;
            }
        }
        return;
    };
    return Catalog;
}());
var calculus, usHistory, gym;
calculus = new CourseOption('Calculus', 12, 1);
usHistory = new CourseOption('AP US History', 11, 2);
gym = new CourseOption('Gym', 9, 3);
var catalog = new Catalog([calculus, usHistory, gym]);
console.log(catalog.register(3));
var Course = /** @class */ (function () {
    function Course(Course) {
        this.ID = Course.ID;
        this.name = Course.name;
        this.gradeLevel = Course.gradeLevel;
        this.enrolledTimestamp = Course.enrolledTimestamp;
    }
    return Course;
}());
var Parent = /** @class */ (function (_super) {
    __extends(Parent, _super);
    function Parent(email, created, parent) {
        var _this = _super.call(this, email, created) || this;
        _this.parentEmailAddress = parent;
        return _this;
    }
    return Parent;
}(User));
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(email, created, parentEmail, courseList) {
        var _this = _super.call(this, email, created, parentEmail) || this;
        _this.courses = courseList;
        return _this;
    }
    Student.prototype.getParentEmail = function () {
        return this.parentEmailAddress;
    };
    Student.prototype.getClassList = function (sortKey) {
        if (sortKey === void 0) { sortKey = 'name'; }
        var compare = function (a, b) {
            var comparison = 0;
            if (a[sortKey] > b[sortKey]) {
                comparison = 1;
            }
            else if (a[sortKey] < b[sortKey]) {
                comparison = -1;
            }
            return comparison;
        };
        return this.courses.sort(compare);
    };
    Student.prototype.getMostRecentRegistration = function () {
        var list = [];
        list = this.getClassList('enrolledTimestamp');
        return list.length === 0 ? null : list.pop();
    };
    Student.prototype.getByGrade = function () {
        var list = [];
        list = this.getClassList('gradeLevel');
        return list;
    };
    return Student;
}(Parent));
var calc = new Course({
    ID: 1,
    name: 'Calculus',
    gradeLevel: 13,
    enrolledTimestamp: Date.now() + 1
});
var historyClass = new Course({
    ID: 2,
    name: 'AP History',
    gradeLevel: 13,
    enrolledTimestamp: Date.now() + 6
});
var health = new Course({
    ID: 3,
    name: 'Health',
    gradeLevel: 10,
    enrolledTimestamp: Date.now()
});
var classList = [];
classList = [calc, historyClass, health];
var student1 = new Student('testemail', Date.now(), 'parentemail', classList);
var student2 = new Student('test2', Date.now(), 'anotherparent', []);
console.log(classList);
console.log(JSON.stringify(student1.getByGrade()));
console.log(JSON.stringify(student2.getMostRecentRegistration()));
