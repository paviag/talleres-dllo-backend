import { model, Schema } from "mongoose";

// DECLARE MODEL TYPE
type HistoryType = {
    name: string;
    identifier: string;
    reservationDate: Date;
    deliveryDate: Date;
}

type BookType = {
    _id: string;
    name: string;
    author: string;
    pubDate: Date;
    genre: string;
    publisher: string;
    availableUnits: number;
    disabled: boolean;
    history: HistoryType[];
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
    availableUnits: {
        type: Number,
        default: 1,
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
const BookModel = model<BookType>("Book", BookSchema);

// EXPORT ALL
export { BookModel, BookSchema, BookType, HistoryType };
