import filterUsersByFieldAction from "./filter.users.action";
import checkUserExistsAction from "./checkIfExists.users.action";
import createUserAction from "./create.users.action";
import filterUsersByFieldIncludesAction from "./filterFieldIncludes.users.action";
import { UserType } from "./users.model";

// DECLARE CONTROLLER FUNCTIONS
async function filterUsersByField(field: string, value: string): Promise<UserType[]> {
  const users = await filterUsersByFieldAction(field, value);

  return users;
}

async function filterUsersByFieldIncludes(field: string, value: string): Promise<UserType[]> {
  const users = await filterUsersByFieldIncludesAction(field, value);

  return users;
}

async function checkUserExists(userId: number): Promise<boolean> {
  const userExists = await checkUserExistsAction(userId);

  return userExists;
}

async function getTotalTeamExperience(teamName: string): Promise<number> {
  const teamUsers = await filterUsersByFieldAction("team", teamName);
  console.log(teamUsers);
  console.log(teamUsers.map(u => u.years).join("+"));
  const total = teamUsers.map(u => u.years).reduce((a, b) => a + b);

  return total;
}

async function createUser(userData: UserType): Promise<UserType> {
  const newUser = await createUserAction(userData);

  return newUser;
}

// EXPORT CONTROLLER FUNCTIONS
export { filterUsersByField, checkUserExists, getTotalTeamExperience, createUser, filterUsersByFieldIncludes };
