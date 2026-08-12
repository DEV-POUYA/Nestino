"use server";

import { revalidatePath } from "next/cache";
import connectDB from "../../lib/db";
import Reservation from "../../models/Reservation";

export async function cancelReservation(reservationId) {
  try {
    await connectDB();

    if (!reservationId) {
      throw new Error("Reservation ID is required");
    }

    const deletedReservation =
      await Reservation.findByIdAndDelete(reservationId);

    if (!deletedReservation) {
      throw new Error("Reservation not found");
    }

    // Refresh dashboard data
    revalidatePath("/dashboard");

    return {
      success: true,
      message: "Reservation cancelled successfully",
    };
  } catch (error) {
    console.error("Cancel reservation error:", error);

    return {
      success: false,
      message: error.message,
    };
  }
}
