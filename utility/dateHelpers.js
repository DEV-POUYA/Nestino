import {
  parseISO,
  isValid,
  isAfter,
  isBefore,
  startOfDay,
  format,
} from "date-fns";

// Date Validation use before dispatch
export function validateBookingDate(checkIn, checkOut) {
  if (!checkIn || !checkOut) {
    return { ok: false, message: "Please select check-in and check-out dates" };
  }

  const inDate = parseISO(checkIn);
  const outDate = parseISO(checkOut);

  if (!isValid(inDate) || !isValid(outDate)) {
    return { ok: false, message: "Invalid Date Format" };
  }

  const today = startOfDay(new Date());

  if (isBefore(inDate, today)) {
    return { ok: false, message: "Check-In cannot be in the past" };
  }

  if (!isAfter(outDate, inDate)) {
    return { ok: false, message: "Check-Out must be after Check-In" };
  }

  return { ok: true, message: null };
}

// Date formatting — use when displaying reservations
export function formatDate(datestr, pattern = "dd mmm yyy") {
  if (!datestr) return "";

  const date = parseISO(datestr);
  if (!isValid(date)) return "";
  return format(date, pattern);
}

// Date Parsing use inside hotelCards
export function parseDate(dateStr) {
  if (!dateStr) return null;

  const date = parseISO(dateStr);
  return isValid(date) ? date : null;
}
