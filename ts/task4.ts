enum UserRole {
    Admin = "Admin",
    User = "User",
    Guest = "Guest"
}

const roleMessages: { [key in UserRole]: string } = {
    [UserRole.Admin]: "You have full access as an Admin.",
    [UserRole.User]: "You have limited access as a User.",
    [UserRole.Guest]: "You have guest access."
}

const getRoleMsg = (role: UserRole): string => roleMessages[role] || "Invalid role.";

const role: UserRole = UserRole.Admin as UserRole;
console.log(getRoleMsg(role)); 

const anotherRole: UserRole = "User" as UserRole;
console.log(getRoleMsg(anotherRole)); 
