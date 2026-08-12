import { NextResponse } from "next/server";
import connectDB from "../../../lib/db";
import Reservation from "../../../models/Reservation";

export async function GET() {
  try {
    await connectDB();

    const reservations = await Reservation.find().sort({
      createdAt: -1,
    });

    return NextResponse.json(
      {
        status: "success",
        reservations,
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("GET reservations error:", error);

    return NextResponse.json(
      {
        status: "failed",
        message: "Failed to fetch reservations.",
      },
      { status: 500 },
    );
  }
}

export async function POST(request) {
  try {
    await connectDB();

    const body = await request.json();

    const { roomId, roomName, address, price } = body;

    // Basic validation
    if (roomId === undefined || !roomName || !address || price === undefined) {
      return NextResponse.json(
        {
          status: "failed",
          message: "Missing required fields.",
        },
        { status: 400 },
      );
    }

    const reservation = await Reservation.create({
      roomId,
      roomName,
      address,
      price: Number(price),
      status: "confirmed",
    });

    return NextResponse.json(
      {
        status: "success",
        message: "Reservation registered successfully.",
        reservation,
      },
      { status: 201 },
    );
  } catch (error) {
    console.error("POST reservation error:", error);

    return NextResponse.json(
      {
        status: "failed",
        message: "Failed to register reservation.",
      },
      { status: 500 },
    );
  }
}

export async function DELETE(request) {
  try {
    await connectDB();

    const { id } = await request.json();

    if (!id) {
      return NextResponse.json({
        status: "failed",
        message: "Reservation id is required",
      });
    }

    const deleteReservation = await Reservation.findByIdAndDelete(id);

    if (!deletedReservation) {
      return NextResponse.json({
        status: "failed",
        message: "Reservation not found",
      });
    }

    return NextResponse.json({
      status: "success",
      message: "Reservation cancelled successfully",
    });
  } catch (err) {
    console.error("Delete reservation error:", error);

    return NextResponse.json({
      status: "failed",
      message: "Failed to cancel reservation",
    });
  }
}
