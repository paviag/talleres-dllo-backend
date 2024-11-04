import { model, Schema } from "mongoose";

// DECLARE MODEL TYPE
type ReservationType = {
    bookId: string,
    userId: string,
    reservationDate: Date,
    returnDate: Date,
}

// DECLARE MONGOOSE SCHEMA
const ReservationSchema = new Schema<ReservationType>({
    bookId: {
        type: String,
        required: true,
    },
    userId: {
        type: String,
        required: true,
    },
    reservationDate: {
        type: Date,
        default: new Date(),
    },
    returnDate: {
        type: Date,
        default: null,
    },
});

// DECLARE MONGO MODEL
const ReservationModel = model<ReservationType>("Reservation", ReservationSchema);

// EXPORT ALL
export { ReservationModel, ReservationSchema, ReservationType };
