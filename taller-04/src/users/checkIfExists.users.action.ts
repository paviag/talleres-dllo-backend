import { UserType } from "./users.model";

// DECLARE ACTION FUNCTION
async function checkUserExistsAction(userId: number): Promise<boolean> {
  let users: UserType[] = require('./23-taller-04-datos.json');
  const user: UserType | undefined = users.find(u => u.id == userId); //await UserModel.findById(userId);
  
  return user != null;
}

// EXPORT ACTION FUNCTION
export default checkUserExistsAction;
