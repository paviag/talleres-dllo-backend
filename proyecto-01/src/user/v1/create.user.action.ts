import { UserModel, UserType } from "./user.model";
import { CreateUserType } from "./user.types";
import * as argon2 from "argon2";

// DECLARE ACTION FUNCTION
async function createUserAction(userData: CreateUserType): Promise<UserType> {
  userData.password = await argon2.hash(userData.password);
  const results = await UserModel.create(userData);

  return results;
}

// EXPORT ACTION FUNCTION
export default createUserAction;
