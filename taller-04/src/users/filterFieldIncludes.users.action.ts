import { UserType } from "./users.model";

// DECLARE ACTION FUNCTION
async function filterUsersByFieldIncludesAction(field: string, value: string): Promise<UserType[]> {
  const users: UserType[] = require('./23-taller-04-datos.json');
  const results: UserType[] = users.filter((u: UserType) => {
    try {
      return (u[field as keyof UserType] as Array<string | number>).includes(value);
    } catch (e) {
      return 0;
    }
  });

  return results;
}

// EXPORT ACTION FUNCTION
export default filterUsersByFieldIncludesAction;
