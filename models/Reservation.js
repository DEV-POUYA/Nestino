import { model, models, Schema } from "mongoose";

const reserveSchema = new Schema(
  {
    roomId: {
      type: Number,
      required: true,
    },

    roomName: {
      type: String,
      required: true,
    },

    address: {
      type: String,
      required: true,
    },

    price: {
      type: Number,
      required: true,
    },

    status: {
      type: String,
      enum: ["pending", "confirmed", "cancelled"],
      default: "confirmed",
    },
  },
  {
    timestamps: true,
  }
);

const Reservation =
  models.Reservation || model("Reservation", reserveSchema);

export default Reservation;