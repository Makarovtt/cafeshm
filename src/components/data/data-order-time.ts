export const ORDER_TIME = [
  "12:00",
  "12:30",
  // -
  "13:00",
  "13:30",
  // -
  "14:00",
  "14:30",
  // -
  "15:00",
  "15:30",
  //   =
  "16:00",
  "16:30",
  //   =
  "17:00",
  "17:30",
  //   =
  "18:00",
  "18:30",
  //   =
  "19:00",
  "19:30",
  //   =
  "20:00",
  "20:30",
  //   =
  "21:00",
  "21:30",
  //   =
  "22:00",
  "22:30",
  //   =
  "23:00",
];

const date = new Date();
const hour = date.getHours();
const today = hour < 18;
function getDay(day: number) {
  let num = 0;
  if (day > 7) {
    num = day - 7;
  } else {
    num = day;
  }
  const days = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];
  return days[num - 1];
}

const months = [
  "января",
  "февраля",
  "марта",
  "апреля",
  "мая",
  "июня",
  "июля",
  "августа",
  "сентября",
  "октября",
  "ноября",
  "декабря",
];

export const ORDER_DAY = [
  `Сегодня`,
  `Завтра`,
  `${getDay(date.getDay() + 2)}, ${getDayNumber(2)}`,
  `${getDay(date.getDay() + 3)}, ${getDayNumber(3)}`,
  `${getDay(date.getDay() + 4)}, ${getDayNumber(4)}`,
  `${getDay(date.getDay() + 5)}, ${getDayNumber(5)}`,
  `${getDay(date.getDay() + 6)}, ${getDayNumber(6)}`,
];

function getDayNumber(i: number) {
  const fullMonth = [0, 2, 4, 6, 7, 9, 11].includes(date.getMonth()) ? 31 : 30;
  const toDay = Number(date.getDate());
  const dayNumber = toDay + i;

  if (dayNumber > fullMonth) {
    const monthReturn = months[date.getMonth() + 1];
    const dayReturn = dayNumber - fullMonth;
    return `${dayReturn} ${monthReturn}`;
  }
  return `${dayNumber} ${months[date.getMonth()]}`;
}
