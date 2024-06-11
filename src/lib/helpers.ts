export function trimText(input: string, maxLength: number = 100): string {
  if (input.length <= maxLength) return input;
  return input.substring(0, maxLength - 3) + "...";
}
export function getCurrentTimeInBrazil(): Date {
  // Create a date object with the current UTC time
  const now = new Date();

  // Convert the UTC time to Brazil's time
  const offsetBrazil = 3; // Brazil is (UTC-3), but you might need to adjust this based on Daylight Saving Time
  now.setHours(now.getUTCHours() - offsetBrazil);

  return now;
}

export function formatTimeForBrazil(date: Date): string {
  const options: Intl.DateTimeFormatOptions = {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true, // This will format the time in 12-hour format with AM/PM
    timeZone: "Brazil/East", 
  };

  let formattedTime = new Intl.DateTimeFormat("en-US", options).format(date);

  // Append the time zone abbreviation. You can automate this with libraries like `moment-timezone`.
  formattedTime += " UTC-3";

  return formattedTime;
}

export function formatDate(date: Date): string {
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
