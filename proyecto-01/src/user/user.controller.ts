import createUserAction from "./create.user.action";
import readUserAction from "./read.user.action";
import updateUserAction from "./update.user.action";
import disableUserAction from "./disable.user.action";
import jwt from 'jsonwebtoken';
import * as argon2 from "argon2";
import { UserType } from "./user.model";
import { CreateUserType, UpdateUserType } from "./user.types";
import { ReservationType } from "../reservation/reservation.model";
import readReservationsAction from "../reservation/read.reservations.action";

// DECLARE CONTROLLER FUNCTIONS
async function createUser(userData: CreateUserType): Promise<UserType> {
    const createdUser = await createUserAction(userData);
    return createdUser;
}

async function loginUser(email: string, password: string): Promise<{token: string, user: UserType, reservationHistory: ReservationType[]}> {
    const user = await readUserAction({email: email});

    if (user) {
        if (await argon2.verify(user.password, password)) {
            const token = jwt.sign(
                { _id: user._id, permissions: user.permissions },
                process.env.JWT_SECRET as string,
                { expiresIn: '1h' }
            );
            const reservationHistory = await readReservationsAction({userId: user._id});

            return {
                token: token,
                user: user,
                reservationHistory: reservationHistory,
            };
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
