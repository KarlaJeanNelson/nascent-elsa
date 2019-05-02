var User = /** @class */ (function () {
    function User(emailAddress, groupID, userID) {
        if (groupID === void 0) { groupID = getRandom(); }
        if (userID === void 0) { userID = getRandom(); }
        this.createdTimestamp = Date.now();
        this.emailAddress = emailAddress;
        this.groupID = groupID;
        this.userID = userID;
    }
    return User;
}());
var UserManager = /** @class */ (function () {
    function UserManager(users) {
        this.users = users;
    }
    // getUser(userID: int): User {
    // *** type should be "number," not "int."
    UserManager.prototype.getUser = function (userID) {
        // let user: User; // *** unnecessary variable
        var user; // *** declare type for "currentUser."
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
        for (var _i = 0, _a = this.users; _i < _a.length; _i++) {
            user = _a[_i];
            // console.log(user);
            if (user.userID === userID) {
                return user;
            }
        }
        return user;
    };
    // getUsersForGroup(groupID: int): User[] {
    // *** type should be "number," not "int."
    UserManager.prototype.getUsersForGroup = function (groupID) {
        var groupUsers = []; // *** need to initialize as empty array
        // for(int i = 0; i < this.users.length; i++) {
        // *** the variable "i" is not declared;
        // *** it should be declared as type "number," not "int."
        for (var i = 0; i < this.users.length; i++) {
            var currentUser = this.users[i];
            // console.log(i, currentUser, this.users[i].groupID)
            if (currentUser.groupID === groupID) { // *** use strict comparison
                groupUsers.push(currentUser);
            }
        }
        return groupUsers;
    };
    return UserManager;
}());
var getRandom = function () { return Math.floor((Math.random() * 10000000000)); };
var user1 = new User('test@gmail.com', 11);
var user2 = new User('test@gmail.com', 12);
var user3 = new User('test@gmail.com', 18, 3);
var user4 = new User('test@gmail.com', user3.groupID, 4);
var user5 = new User('test@gmail.com', user3.groupID, 5);
var user6 = new User('test@gmail.com', user3.groupID, 6);
var user7 = new User('test@gmail.com', user1.groupID, 7);
var user8 = new User('test@gmail.com', user1.groupID, 8);
var userList = [
    user1,
    user2,
    user3,
    user4,
    user5,
    user6,
    user7,
    user8,
];
var mgr = new UserManager(userList);
console.log(mgr.getUser(400));
