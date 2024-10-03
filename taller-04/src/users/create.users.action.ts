import { users, UserType } from "./users.model";

// DECLARE ACTION FUNCTION
async function createUserAction(userData: UserType): Promise<UserType> {
  users.push(userData)
  
  return userData;
}

// EXPORT ACTION FUNCTION
export default createUserAction;