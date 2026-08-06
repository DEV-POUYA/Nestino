import { model, models, Schema } from "mongoose";


const reserveSchema = new Schema(
  {
    // Room information
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

    
    //   Guests
    guests: {
      adults: {
        type: Number,
        required: true,
        min: 1,
      },
      kids: {
        type: Number,
        default: 0,
        min: 0,
      },
    },
    //   Reservation Status
    status: {
      type: String,
      enum: ["pending", "confirmed", "cancelled"],
      default: "confirmed",
    },
  },
  {
    timestamps: true,
  },
);

const Reservation = models.Reservation || model("Reservation", reserveSchema);

export default Reservation;
