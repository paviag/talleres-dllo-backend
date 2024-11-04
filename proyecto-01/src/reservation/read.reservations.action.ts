import { ReservationModel, ReservationType } from "./reservation.model";

// DECLARE ACTION FUNCTION
async function readReservationsAction(query: object): Promise<ReservationType[]> {
    const results = await ReservationModel.find(query);

    return results;
}

// EXPORT ACTION FUNCTION
export default readReservationsAction;
