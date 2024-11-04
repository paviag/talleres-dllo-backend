import mongoose from "mongoose";
import { env } from "process";

export default function handleMongoConnection() {
    mongoose.connect(process.env.MONGO_CONN_STRING as string).then(() => {
        console.log("Connected to mongo server.");
    });
}
