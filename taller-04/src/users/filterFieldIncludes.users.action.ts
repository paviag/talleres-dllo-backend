import { users, UserType } from "./users.model";

// DECLARE ACTION FUNCTION
async function filterUsersByFieldIncludesAction(field: string, value: string): Promise<UserType[]> {
  const results = users.filter((u: UserType) => {
    try {
      return (u[field as keyof UserType] as Array<string | number>).includes(value);
    } catch (e) {
      return 0;
    }
  }); // await UserModel.find({ [field]: value });

  return results;
}

// EXPORT ACTION FUNCTION
export default filterUsersByFieldIncludesAction;
