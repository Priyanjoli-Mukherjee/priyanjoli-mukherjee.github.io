// hour: between 0 and 23
export function getDisplayTime(hour: number) {
  const period = hour >= 12 ? "PM" : "AM";
  // convert to 1 - 12
  const hour12 = hour % 12 || 12;
  return `${hour12} ${period}`;
}
