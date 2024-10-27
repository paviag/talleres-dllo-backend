import { NextFunction, Request, Response } from "express";
import { decode } from "jsonwebtoken";

async function isSameUserOrHasPermission(request: Request, response: Response, next: NextFunction, permission: string) {
    if (request.headers.authorization === undefined) {
        return response.status(401).json({
            message: "Not authorized."
        })
    }

    const jwtValues = decode(request.headers.authorization);
    const user = jwtValues;
    const targetUserId = request.params.userId;

    if (user._id == targetUserId | user.permissions.includes(permission)) {
        return next(); 
    }
    return response.status(403).json({ message: "Not authorized." });
}

export async function LoginAuthMiddleware(request: Request, response: Response, next: NextFunction) {

    if (request.headers.authorization === undefined) {
        return response.status(401).json({
            message: "Not authorized."
        })
    }

 const jwtValues = decode(request.headers.authorization);
 
 // hago busqueda de usuario usando id de JWT Values
 request.body.user = jwtValues;
 
 next();
}

export async function UserModAuthMiddleware(request: Request, response: Response, next: NextFunction) {
    return await isSameUserOrHasPermission(request, response, next, "UPDATE-USERS");
}

export async function UserDisableAuthMiddleware(request: Request, response: Response, next: NextFunction) {
    return await isSameUserOrHasPermission(request, response, next, "DELETE-USERS");
}