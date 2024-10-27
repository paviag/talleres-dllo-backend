import { Router, Request, Response } from "express";
import { createUser, loginUser } from "./user.controller";
import { CreateUserType, UpdateUserType, LoginUserType } from "./user.types";
import { UserModAuthMiddleware, UserDisableAuthMiddleware } from "../../middleware/auth";
import { UserType } from "./user.model";

// INIT ROUTES
const userRoutes = Router();

// DECLARE ENDPOINT FUNCTIONS
async function CreateUser(request: Request<CreateUserType>, response: Response) {
    try {
        const user = await createUser(request.body);
        
        response.status(200).json({
            message: "Success.",
            user: user,
        });

    } catch (error) {
        response.status(500).json({
            message: "Failure",
            information: (error as any).toString()
        })
    }
}

async function GetOneUser(request: Request<{user: UserType}>, response: Response) {
  const users = await readUsers(request.body);

  response.status(200).json({
    message: "Success.",
    users: users,
  });
}

async function LoginUser(request: Request<LoginUserType>, response: Response) {
    const { email, password } = request.body;
    console.log(`mail ${email} passwo ${password}`)
    
    try {
        const token = await loginUser(email, password);
        return response.status(230).json({ 
            message: "Login successful.",
            token: token,
        });
    } catch (error) {
        return response.status(401).json({ 
            message: "User or password incorrect.",
        });
    }
}
async function UpdateUser(request: Request<UpdateUserType>, response: Response) {
  response.status(200).json({
    message: "Success.",
  });
}

async function DisableUser(request: Request, response: Response) {
  response.status(200).json({
    message: "Success.",
  });
}

// DECLARE ENDPOINTS
//userRoutes.get("/login", UserLoginAuthMiddleware, GetOneUser);        // READ
userRoutes.get("/login", LoginUser);        // READ
userRoutes.post("/create", CreateUser);                               // CREATE
userRoutes.post("/update", UserModAuthMiddleware, UpdateUser);        // UPDATE
userRoutes.post("/delete", UserDisableAuthMiddleware, DisableUser);   // DELETE

// EXPORT ROUTES
export default userRoutes;
