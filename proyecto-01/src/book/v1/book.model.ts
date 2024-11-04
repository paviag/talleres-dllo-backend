import { model, Schema } from "mongoose";

// DECLARE MODEL TYPE
type BookType = {
    _id: string,
    name: string,
    author: string,
    pubDate: Date,
    genre: string,
    publisher: string,
    reserved: boolean,
    disabled: boolean,
};

const BookSchema = new Schema<BookType>({
    name: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    pubDate: {
        type: Date,
        required: true,
    },
    genre: {
        type: String,
        required: true,
    },
    publisher: {
        type: String,
        required: true,
    },
    reserved: {
        type: Boolean,
        default: false,
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
const BookModel = model<BookType>("Book", BookSchema);

// EXPORT ALL
export { BookModel, BookSchema, BookType };
