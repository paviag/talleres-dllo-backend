import { UserModel, UserType } from "./user.model";

// DECLARE ACTION FUNCTION
async function readUserAction(query: object): Promise<UserType> {
    const results = await UserModel.findOne(query) as UserType;

    return results;
}

// EXPORT ACTION FUNCTION
export default readUserAction;
