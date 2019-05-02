class User {
	protected emailAddress: string;
	protected createdTimestamp: number;
	protected constructor(emailAddress: string, createdTimestamp: number) {
		this.emailAddress = emailAddress;
		this.createdTimestamp = createdTimestamp;
	}
}

interface StudentRecord {
	emailAddress: string;
	createdTimestamp: number;
	parentEmailAddress: string;
}

interface CourseEnrollment {
	ID: number;
	name: string;
	gradeLevel: number;
	enrolledTimestamp: number;
}

class CourseOption {
	// readonly ID: number = Math.random() * 1000000;
	ID: number;
	name: string;
	gradeLevel: number;
	constructor(name: string, grade: number, ID: number) {
		this.name = name;
		this.gradeLevel = grade;
		this.ID = ID;
	}
}

class Catalog {
	courses: CourseOption[];
	constructor(courses: CourseOption[]) {
		this.courses = courses;
	}

	add(course: CourseOption): void {
		this.courses.push(course);
	}

	register(classId: number): CourseOption {
		for (let myClass of this.courses) {
			if (myClass.ID === classId) {
				return myClass;
			}
		}
		return;
	}
}

let calculus, usHistory, gym: CourseOption;
calculus = new CourseOption('Calculus', 12, 1);
usHistory = new CourseOption('AP US History', 11, 2);
gym = new CourseOption('Gym', 9, 3);
let catalog = new Catalog([calculus, usHistory, gym])
console.log(catalog.register(3));


class Course implements CourseEnrollment {
	ID: number;
	name: string;
	gradeLevel: number;
	enrolledTimestamp: number;

	constructor(Course: CourseEnrollment) {
		this.ID = Course.ID;
		this.name = Course.name;
		this.gradeLevel = Course.gradeLevel;
		this.enrolledTimestamp = Course.enrolledTimestamp;
	}
}

class Parent extends User {
	protected parentEmailAddress: string;
	protected constructor(email: string, created: number, parent: string) {
		super(email, created);
		this.parentEmailAddress = parent;
	}
}

class Student extends Parent {
	courses: Course[];
	constructor(
		email: string,
		created: number,
		parentEmail: string,
		courseList: Course[]
	) {
		super(email, created, parentEmail);
		this.courses = courseList;
	}

	getParentEmail(): string {
		return this.parentEmailAddress;
	}

	getClassList(sortKey: string = 'name'): Course[] {
		const compare = (a,b) => {
			let comparison: number = 0;
			if (a[sortKey] > b[sortKey]) {
				comparison = 1;
			} else if (a[sortKey] < b[sortKey]) {
				comparison = -1;
			}
			return comparison;
		}
		return this.courses.sort(compare)
	}

	getMostRecentRegistration(): any {
		let list: Course[] = [];
		list = this.getClassList('enrolledTimestamp');
		return list.length === 0 ? null : list.pop();
	}

	getByGrade(): Course[] {
		let list: Course[] = [];
		list = this.getClassList('gradeLevel');
		return list;
	}
}

let calc = new Course({
	ID: 1,
	name: 'Calculus',
	gradeLevel: 13,
	enrolledTimestamp: Date.now() + 1,
});
let historyClass = new Course({
	ID: 2,
	name: 'AP History',
	gradeLevel: 13,
	enrolledTimestamp: Date.now() + 6,
});
let health = new Course({
	ID: 3,
	name: 'Health',
	gradeLevel: 10,
	enrolledTimestamp: Date.now(),
});
let classList: Course[] = [];
classList = [calc, historyClass, health];

let student1 = new Student('testemail', Date.now(), 'parentemail', classList);
let student2 = new Student('test2', Date.now(), 'anotherparent', [])
console.log(classList);
console.log(JSON.stringify(student1.getByGrade()));
console.log(JSON.stringify(student2.getMostRecentRegistration()));


