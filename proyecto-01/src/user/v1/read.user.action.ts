import { UserModel, UserType } from "./user.model";

// DECLARE ACTION FUNCTION
async function readUsersAction(query: object): Promise<UserType[]> {
    const results = await UserModel.find(query);

    return results;
}

// EXPORT ACTION FUNCTION
export default readUsersAction;
