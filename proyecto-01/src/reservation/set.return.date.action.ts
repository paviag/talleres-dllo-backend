import { ReservationModel, ReservationType } from "./reservation.model";

// DECLARE ACTION FUNCTION
async function setReturnDateAction(bookId: string, userId: string, returnDate: Date): Promise<ReservationType> {
    const updatedReservation = await ReservationModel.findOneAndUpdate({
        bookId: bookId,
        userId: userId,
        returnDate: null,
    }, {
        returnDate: returnDate,
    }, {
        new: true
    }) as ReservationType;

    if (!updatedReservation) {
        throw new Error("There is no ongoing reservation for this book and user.")
    }
    
    return updatedReservation;
}

// EXPORT ACTION FUNCTION
export default setReturnDateAction;
