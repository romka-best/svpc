const DAY_MS = 24 * 60 * 60 * 1000;
const BOOKING_LEAD_MONTHS = 1;
const MONDAY_WEEKDAY = 1;

const toDateKey = (date: Date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');

  return `${year}-${month}-${day}`;
};

const parseDateKey = (value: string) => {
  const [
    year,
    month,
    day,
  ] = value.split('-').map(Number);

  return new Date(year, month - 1, day);
};

const startOfDay = (date: Date) => {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
};

const addMonths = (date: Date, months: number) => {
  const year = date.getFullYear();
  const monthIndex = date.getMonth() + months;
  const lastDayOfMonth = new Date(year, monthIndex + 1, 0).getDate();
  const day = Math.min(date.getDate(), lastDayOfMonth);

  return new Date(year, monthIndex, day);
};

const getMondayOnOrAfter = (date: Date) => {
  const start = startOfDay(date);
  const daysUntilMonday = (MONDAY_WEEKDAY - start.getDay() + 7) % 7;

  return new Date(
    start.getFullYear(),
    start.getMonth(),
    start.getDate() + daysUntilMonday,
  );
};

const getFirstAvailableTourDate = (from = new Date()) => {
  return getMondayOnOrAfter(addMonths(startOfDay(from), BOOKING_LEAD_MONTHS));
};

const formatRangeLabel = (startDate: string, endDate: string) => {
  const formatter = new Intl.DateTimeFormat('en-US', {
    day: 'numeric',
    month: 'short',
  });
  const startLabel = formatter.format(parseDateKey(startDate));

  if (startDate === endDate) {
    return startLabel;
  }

  return `${startLabel} – ${formatter.format(parseDateKey(endDate))}`;
};

const formatLongDate = (dateKey: string) => {
  return new Intl.DateTimeFormat('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(parseDateKey(dateKey));
};

/** Inclusive calendar days (e.g. Aug 19 → Aug 23 = 5). */
const getTourDayCount = (startDate: string, endDate: string) => {
  const start = parseDateKey(startDate).getTime();
  const end = parseDateKey(endDate).getTime();

  return Math.floor((end - start) / DAY_MS) + 1;
};

export {
  formatLongDate,
  formatRangeLabel,
  getFirstAvailableTourDate,
  getTourDayCount,
  parseDateKey,
  startOfDay,
  toDateKey,
};
