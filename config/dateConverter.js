import { Result } from "postcss";

function dateConverter(input, type) {
  const date = new Date(input * 1000); //   let result = null;
  const options = {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
    timeZone: "Asia/Tehran",
  };
  const iranTime = new Intl.DateTimeFormat("en" , options).format(date);
  return iranTime;
}

export { dateConverter };
