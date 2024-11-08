import { model, Schema } from "mongoose";

// DECLARE MODEL TYPE
type PermissionsType = {
    [key: string]: boolean;
    "UPDATE-USERS": boolean;
    "DELETE-USERS": boolean;
    "CREATE-BOOKS": boolean;
    "UPDATE-BOOKS": boolean;
    "DELETE-BOOKS": boolean;
}

type UserType = {
    _id: string,
    name: string,
    idNum: string,
    email: string,
    password: string,
    permissions: PermissionsType,
    disabled: boolean
};

// DECLARE MONGOOSE SCHEMA
const UserSchema = new Schema<UserType>({
    name: {
        type: String,
        required: true,
    },
    idNum: {
        type: String,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    permissions: {
        type: Object,
        default: {
            "UPDATE-USERS": false,
            "DELETE-USERS": false,
            "CREATE-BOOKS": false,
            "UPDATE-BOOKS": false,
            "DELETE-BOOKS": false,
        },
    },
    disabled: {
        type: Boolean,
        default: false,
    },
},{
    timestamps: true,
    versionKey: false,
});

// DECLARE MONGO MODEL
const UserModel = model<UserType>("User", UserSchema);

// EXPORT ALL
export { UserModel, UserSchema, UserType };
