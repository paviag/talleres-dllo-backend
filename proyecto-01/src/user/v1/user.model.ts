import { model, Schema } from "mongoose";

// DECLARE MODEL TYPE
type HistoryType = {
    name: string;
    identifier: string;
    reservationDate: Date;
    deliveryDate: Date;
}

type UserType = {
    _id: string;
    name: string;
    idNum: string;
    email: string;
    password: string;
    permissions: string[];
    disabled: boolean;
    history: HistoryType[];
};

// DECLARE MONGOOSE SCHEMA
const UserSchema = new Schema<UserType>({
    name: {
        type: String,
        required: true,
    },
    idNum: {
        type: String,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    permissions: {
        type: Array<String>,
        default: [],
    },
    disabled: {
        type: Boolean,
        default: false,
    },
    history: {
        type: Array<HistoryType>,
        default: [],
    }
},{
    timestamps: true,
    versionKey: false,
});

// DECLARE MONGO MODEL
const UserModel = model<UserType>("User", UserSchema);

// EXPORT ALL
export { UserModel, UserSchema, UserType, HistoryType };
