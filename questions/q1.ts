class User {
	readonly createdTimestamp: number = Date.now();
	readonly userID: number;
	emailAddress: string;
	groupID: number;

	constructor(emailAddress: string, groupID: number = getRandom(), userID: number = getRandom()) {
		this.emailAddress = emailAddress;
		this.groupID = groupID;
		this.userID = userID;
	}
}

class UserManager {
	users: User[];

	constructor(users) {
		this.users = users;
	}

	// getUser(userID: int): User {
	// *** type should be "number," not "int."
	getUser(userID: number): User {
		// let user: User; // *** unnecessary variable
		// let user: User; // *** declare type for "currentUser."

		// for(int i = 0; i < this.users.length; i++) {
		// *** the variable "i" is not declared;
		// *** it should be declared as type "number," not "int."
		// for (let i: number = 0; i < this.users.length; i++) {
		// 	currentUser = this.users[i]
		// 	// console.log(i, currentUser, this.users[i].userID)
		// 	if (currentUser.userID === userID) { // *** use strict comparison
		// 		return currentUser; // *** no need to iterate more times than you need to
		// 	}
		// }
		for (let user of this.users) {
			// console.log(user);
			if (user.userID === userID) {
				return user;
			}
		}
		return;
	}

	// getUsersForGroup(groupID: int): User[] {
	// *** type should be "number," not "int."
	getUsersForGroup(groupID: number): User[] {
		let groupUsers: User[] = []; // *** need to initialize as empty array
		// for(int i = 0; i < this.users.length; i++) {
		// *** the variable "i" is not declared;
		// *** it should be declared as type "number," not "int."
		for (let i: number = 0; i < this.users.length; i++) {
			let currentUser = this.users[i];
			// console.log(i, currentUser, this.users[i].groupID)
			if (currentUser.groupID === groupID) { // *** use strict comparison
				groupUsers.push(currentUser);
			}
		}
		return groupUsers;
	}
}

const getRandom = () => Math.floor((Math.random()*10000000000));

let user1 = new User('test@gmail.com', 11);
let user2 = new User('test@gmail.com', 12);
let user3 = new User('test@gmail.com', 18, 3);
let user4 = new User('test@gmail.com', user3.groupID, 4);
let user5 = new User('test@gmail.com', user3.groupID, 5);
let user6 = new User('test@gmail.com', user3.groupID, 6);
let user7 = new User('test@gmail.com', user1.groupID, 7);
let user8 = new User('test@gmail.com', user1.groupID, 8);

let userList = [
	user1,
	user2,
	user3,
	user4,
	user5,
	user6,
	user7,
	user8,
];

let mgr = new UserManager(userList);

console.log(mgr.getUser(400));
