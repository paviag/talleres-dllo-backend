import { ReservationModel, ReservationType } from "./reservation.model";
import { CreateReservationType } from "./reservation.types";

// DECLARE ACTION FUNCTION
async function createReservationAction(reservationData: CreateReservationType): Promise<ReservationType> {
  const results = await ReservationModel.create(reservationData);

  return results;
}

// EXPORT ACTION FUNCTION
export default createReservationAction;
