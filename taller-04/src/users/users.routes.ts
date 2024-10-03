import { Router, Request, Response } from "express";
import { filterUsersByField, filterUsersByFieldIncludes, checkUserExists, getTotalTeamExperience, createUser } from "./users.controller";

// INIT ROUTES
const userRoutes = Router();

// DECLARE ENDPOINT FUNCTIONS
async function GetUsersByHobby(request: Request, response: Response) {  //params
  const users = await filterUsersByFieldIncludes("hobbies", request.params.hobbyName);
  
  response.status(200).json({
    message: "Success.",
    users: users,
  });
}

async function CheckUserExists(request: Request, response: Response) {  //params
  try {
    const userExists = await checkUserExists(parseInt(request.params.userId));
    response.status(200).json({
      message: "Success.",
      userExists: userExists,
    });
  } catch (e) {
    response.status(400).json({
      message: "Invalid user Id.",
    });
  }

}

async function GetTotalTeamExperience(request: Request, response: Response) { //params
  const teamName = request.params.teamName;
  try {
    const total = await getTotalTeamExperience(teamName);
    response.status(200).json({
      message: "Success.",
      totalTeamExperience: total,
    });
  } catch (e) {
    response.status(400).json({
      message: `Team ${teamName} does not exist.`,
    });
  }
}

async function GetUsersByFaction(request: Request, response: Response) {  //params
  const users = await filterUsersByField("faction", request.params.factionName);

  response.status(200).json({
    message: "Success.",
    users: users,
  });
}

async function CreateUser(request: Request, response: Response) { 
  try {
    const newUser = await createUser(request.body);

    response.status(200).json({
      message: "Success.",
      newUser: newUser,
    });
  } catch (e) {
    response.status(400).json({
      message: "Could not create user from data.",
    });
  }
}

// DECLARE ENDPOINTS
userRoutes.get("/:hobbyName/hobby", GetUsersByHobby);
userRoutes.get("/:userId/exists", CheckUserExists);
userRoutes.get("/:teamName/team-experience", GetTotalTeamExperience);
userRoutes.get("/:factionName/by-faction", GetUsersByFaction);
userRoutes.post("/", CreateUser);

// EXPORT ROUTES
export default userRoutes;
