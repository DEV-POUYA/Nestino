export function canReserveRoom(booking, room) {
  if (!room) {
    return {
      ok: false,
      message: "Room information is unavailable.",
    };
  }

  if (!room.guest) {
    return {
      ok: false,
      message: "Room capacity information is unavailable.",
    };
  }

  const nights = Number(booking?.nights ?? 0);
  const adults = Number(booking?.adults ?? 0);
  const kids = Number(booking?.kids ?? 0);

  const maxNights = Number(room.duration ?? 0);
  const maxAdults = Number(room.guest.adults ?? 0);
  const maxKids = Number(room.guest.kids ?? 0);

  if (nights > 0 && nights > maxNights) {
    return {
      ok: false,
      message: `Maximum reservation is ${maxNights} nights.`,
    };
  }

  if (adults > maxAdults) {
    return {
      ok: false,
      message: "Selected adults exceed room capacity.",
    };
  }

  if (kids > maxKids) {
    return {
      ok: false,
      message: "Selected kids exceed room capacity.",
    };
  }

  return {
    ok: true,
    message: null,
  };
}