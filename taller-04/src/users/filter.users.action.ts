import { UserType } from "./users.model";

// DECLARE ACTION FUNCTION
async function filterUsersByFieldAction(field: string, value: string): Promise<UserType[]> {
  const users: UserType[] = require('./23-taller-04-datos.json');
  const results = users.filter((u: UserType) => u[field as keyof UserType] == value) // await UserModel.find({ [field]: value });

  return results;
}

// EXPORT ACTION FUNCTION
export default filterUsersByFieldAction;
