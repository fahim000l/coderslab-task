export default function formatDate(date: Date): string {
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const dayWithOrdinal = getOrdinal(day);
  const monthName = monthNames[month];

  return `${dayWithOrdinal} ${monthName}, ${year}`;
}

function getOrdinal(day: number): string {
  if (day > 3 && day < 21) return day + "th"; // Handle 11th, 12th, 13th
  switch (day % 10) {
    case 1:
      return day + "st";
    case 2:
      return day + "nd";
    case 3:
      return day + "rd";
    default:
      return day + "th";
  }
}

// Example usage:
// const formattedDate = formatDate(new Date());
// console.log(formattedDate);
