import createUserAction from "./create.user.action";
import readUserAction from "./read.user.action";
import loginUserAction from "./login.user.action";
import { UserType } from "./user.model";
import { CreateUserType } from "./user.types";

// DECLARE CONTROLLER FUNCTIONS
async function readUsers(): Promise<UserType[]> {
    const users = await readUserAction();
    return users;
}
async function createUser(userData: CreateUserType): Promise<UserType> {
    const createdUser = await createUserAction(userData);
    return createdUser;
}
async function loginUser(email: string, password: string): Promise<string> {
    const authToken = await loginUserAction(email, password);
    return authToken;
}

// EXPORT CONTROLLER FUNCTIONS
export { readUsers, createUser, loginUser };
