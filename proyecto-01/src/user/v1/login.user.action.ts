import jwt from 'jsonwebtoken';
import * as argon2 from "argon2";
import { UserModel, UserType } from "./user.model";

// DECLARE ACTION FUNCTION
async function loginUserAction(email: string, password: string): Promise<string> {
    const user = await UserModel.find({ "email": email });
    if (user) {
        console.log("logging in:");
        console.log("user passw:"+user.password);
        const hash = await argon2.hash(password);
        console.log("login passw:"+hash);

        if (await argon2.verify(user.password, password)) {
            const token = jwt.sign(
                { _id: user._id, permissions: user.permissions },
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

// EXPORT ACTION FUNCTION
export default loginUserAction;
