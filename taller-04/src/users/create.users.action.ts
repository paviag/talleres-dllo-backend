import { UserType } from "./users.model";
import checkUserExistsAction from "./checkIfExists.users.action";

// DECLARE ACTION FUNCTION
async function createUserAction(userData: UserType): Promise<UserType> {
  if (await checkUserExistsAction(userData.id)) {
    throw Error("User data invalid.");
  }
  const fs = require('fs');
  const users: UserType[] = require('./23-taller-04-datos.json');
  users.push(userData);
  fs.writeFileSync('./src/users/23-taller-04-datos.json', JSON.stringify(users, null, 2));
  
  return userData;
}
