import createUserAction from "./create.user.action";
import readUsersAction from "./read.user.action";
import updateUserAction from "./update.user.action";
import disableUserAction from "./disable.user.action";
import jwt from 'jsonwebtoken';
import * as argon2 from "argon2";
import { UserType } from "./user.model";
import { CreateUserType, UpdateUserType } from "./user.types";

// DECLARE CONTROLLER FUNCTIONS
async function createUser(userData: CreateUserType): Promise<UserType> {
    const createdUser = await createUserAction(userData);
    return createdUser;
}

async function loginUser(email: string, password: string): Promise<string> {
    const user = await readUsersAction({email: email});

    if (user) {
        if (await argon2.verify(user[0].password, password)) {
            const token = jwt.sign(
                { _id: user[0]._id, permissions: user[0].permissions },
                process.env.JWT_SECRET as string,
                { expiresIn: '1h' }
            );
            return token;
        } else {
            throw new Error('Invalid email or password.');
        }
    } else {
        throw new Error('Invalid email or password.');
    }

}

async function updateUser(targetUserId: string, updateData: UpdateUserType): Promise<UserType> {
    if (updateData.password) {
        updateData.password = await argon2.hash(updateData.password);
    }
    const updatedUser = await updateUserAction(targetUserId, updateData);

    return updatedUser;
}

async function disableUser(targetUserId: string) {
    await disableUserAction(targetUserId);
}

// EXPORT CONTROLLER FUNCTIONS
export { createUser, loginUser, updateUser, disableUser };
