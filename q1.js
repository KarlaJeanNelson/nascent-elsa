class UserManager {
 
	public users: User[];
	
	public constructor(users) {
				this.users = users;
	}
	
	public getUser(userID: int): User {
	
				let user: User;
	
				for(int i = 0; i < this.users.length; i++) {
				
							 let currentUser = this.users[i];
							 if (currentUser.userID == userID) {
											user = currentUser;
							 }
				}
				
				return user;
	}

	public getUsersForGroup(groupID: int): User[] {

				let groupUsers: User[];

				for(int i = 0; i < this.users.length; i++) {
				
							 let currentUser = this.users[i];
							 if (currentUser.groupID == groupID) {
											groupUsers.push(currentUser);
							 }
				}
				
				return groupUsers;
	}
}
