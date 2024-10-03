import { model, Schema } from "mongoose";

// DECLARE MODEL TYPE
type UserType = {
  id: number,
  name: string,
  hobbies: string[],
  years: number,
  team: string,
  faction: string,
};

// DECLARE MONGOOSE SCHEMA
const UserSchema = new Schema<UserType>({
  id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
  },
  hobbies: {
    type: [String],
  },
  years: {
    type: Number,
    min: 0,
  },
  team: {
    type: String,
  },
  faction: {
    type: String,
  },
});

// DECLARE MONGO MODEL
const UserModel = model<UserType>("User", UserSchema);

// DATOS:
const users: UserType[] = [
  {
    "id": 21,
    "name": "Captain Piett",
    "hobbies": ["singing", "walking", "guitar"],
    "years": 2,
    "team": "clscwe",
    "faction": "Rebels"
  },
  {
    "id": 27,
    "name": "General Veers",
    "hobbies": ["swimming", "guitar"],
    "years": 12,
    "team": "axvedw",
    "faction": "Empire"
  },
  {
    "id": 32,
    "name": "Admiral Ozzel",
    "hobbies": ["walking", "swimming", "guitar"],
    "years": 7,
    "team": "axvedw",
    "faction": "Rebels"
  },
  {
    "id": 41,
    "name": "Commander Jerjerrod",
    "hobbies": ["swimming", "singing"],
    "years": 3,
    "team": "clscwe",
    "faction": "Empire"
  },
  {
    "id": 10,
    "name": "Poe Dameron",
    "hobbies": ["walking", "singing"],
    "years": 14,
    "team": "clscwe",
    "faction": "Empire"
  },
  {
    "id": 2,
    "name": "Temmin 'Snap' Wexley",
    "hobbies": ["swimming", "drums"],
    "years": 30,
    "team": "axvedw",
    "faction": "Rebels"
  },
  {
    "id": 44,
    "name": "Tallissan Lintra",
    "hobbies": ["walking", "walking"],
    "years": 16,
    "team": "clscwe",
    "faction": "Empire"
  },
  {
    "id": 99,
    "name": "Ello Asty",
    "hobbies": ["guitar", "singing"],
    "years": 2,
    "team": "axvedw",
    "faction": "Empire"
  },
  {
    "id": 3,
    "name": "Wedge Antilles",
    "hobbies": ["guitar", "walking"],
    "years": 22,
    "team": "clscwe",
    "faction": "Rebels"
  },
  {
    "id": 8,
    "name": "Ciena Ree",
    "hobbies": ["guitar", "singing"],
    "years": 15,
    "team": "clscwe",
    "faction": "Empire"
  },
  {
    "id": 40,
    "name": "Iden Versio",
    "hobbies": ["drums", "walking"],
    "years": 37,
    "team": "clscwe",
    "faction": "Rebels"
  },
  {
    "id": 66,
    "name": "Thane Kyrell",
    "hobbies": ["drums", "singing"],
    "years": 10,
    "team": "axvedw",
    "faction": "Rebels"
  }
];

// EXPORT ALL
export { UserModel, UserSchema, UserType, users };