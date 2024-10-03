import { users } from "./users.model";

// DECLARE ACTION FUNCTION
async function checkUserExistsAction(userId: number): Promise<boolean> {
  const user = users.find(u => u.id == userId); //await UserModel.findById(userId);
  
  return user != null;
}

// EXPORT ACTION FUNCTION
export default checkUserExistsAction;
