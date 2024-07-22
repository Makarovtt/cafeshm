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
function getMonth(month: number) {
  const months = [
    "января",
    "февраля",
    "марта",
    "июня",
    "июля",
    "августа",
    "сентября",
    "октября",
    "ноября",
    "декабря",
  ];
  return months[month - 2];
}

export const ORDER_DAY = [
  `Сегодня`,
  `Завтра`,
  `${getDay(date.getDay() + 2)}, ${Number(date.getDate() + 2)} ${getMonth(date.getMonth())}`,
  `${getDay(date.getDay() + 3)}, ${Number(date.getDate() + 3)} ${getMonth(date.getMonth())}`,
  `${getDay(date.getDay() + 4)}, ${Number(date.getDate() + 4)} ${getMonth(date.getMonth())}`,
  `${getDay(date.getDay() + 5)}, ${Number(date.getDate() + 5)} ${getMonth(date.getMonth())}`,
  `${getDay(date.getDay() + 6)}, ${Number(date.getDate() + 6)} ${getMonth(date.getMonth())}`,
];
