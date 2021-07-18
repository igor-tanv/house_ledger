export default function formatDate(date) {
  return new Intl.DateTimeFormat("en-GB", {
    weekday: "short",
    month: "long",
    day: "2-digit"
  }).format(date)
}