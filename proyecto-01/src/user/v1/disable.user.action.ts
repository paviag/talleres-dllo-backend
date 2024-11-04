import { UserModel } from "./user.model";

// DECLARE ACTION FUNCTION
async function disableUserAction(targetUserId: string) {
    await UserModel.findByIdAndUpdate(targetUserId, {disabled: true});
}

// EXPORT ACTION FUNCTION
export default disableUserAction;
