import { NextResponse } from "next/server";
import connectDB from "../../../lib/db";
import Reservation from "../../../models/Reservation";

export async function POST(request) {
  try {
    await connectDB();
  } catch (err) {
    console.error(err);
    return NextResponse.json({
      status: "failed",
      message: "Error in Connection to DB",
    });
  }

  const body = request.json();

  const { roomId, roomName, address, price, guests, duration } = body;

  // Validation
  if (!roomId || !roomName || !address || !price || !guests || !duration) {
    return NextResponse.json({
      status: "failed",
      message: "Missing Required Fileds",
    });
  }

  // Store and create a new Reservation

  try {
    const registerRoom = await Reservation.create({
      roomId,
      roomName,
      address,
      price,
      guests,
      duration,
      status: "confirmed",
    });

    return NextResponse.json({
      status: "success",
      message: "Reservation is Registered successfully!",
    });
  } catch (err) {
    console.error(err);

    return NextResponse.json({
      status: "failed",
      message: "Internal Server Error",
    });
  }
}
