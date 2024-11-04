import { UserModel } from "./user.model";

// DECLARE ACTION FUNCTION
async function checkEnabledUserAction(userId: string): Promise<boolean> {
    const user = await UserModel.findById(userId);
    if (user && !user.disabled) {
        return true;
    }
    return false;
}

// EXPORT ACTION FUNCTION
export default checkEnabledUserAction;
