import { MONTHS, DAYS } from './DateConstants';

let date = new Date();

export function getWeekDays() {
  const dayInAWeek = new Date().getDay();
  const days = DAYS.slice(dayInAWeek, DAYS.length).concat(
    DAYS.slice(0, dayInAWeek)
  );
  return days;
}

export function getDayMonthFromDate() {
  const month = MONTHS[date.getMonth()].slice(0, 3);
  const day = date.getUTCDate();

  return day + ' ' + month;
}

export function transformDateFormat() {
  const month = date.toLocaleString('en-US', { month: '2-digit', timeZone: 'Asia/Manila' });
  const day = date.toLocaleString('en-US', { day: '2-digit', timeZone: 'Asia/Manila' });
  const year = date.getFullYear();
  const time = date.toLocaleString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hourCycle: 'h24',
    timeZone: 'Asia/Manila',
  });

  const newFormatDate = year.toString().concat('-', month, '-', day, ' ', time);
  return newFormatDate;
}

export function getUTCDatetime() {
  const utcTime = date.toLocaleString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hourCycle: 'h12',
    timeZone: 'UTC',
    timeZone: 'Asia/Manila',
  });

  const isoDateString = new Date().toISOString();
  const utcDate = isoDateString.split('T')[0].concat(' ', utcTime);
  return utcDate;
}

export function getUTCTime() {
  const philippineTime = new Date(date.getTime() + (4 * 60 * 60 * 1000)).toLocaleString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hourCycle: 'h24',
    timeZone: 'Asia/Manila',
  });

  return philippineTime;
}

setInterval(() => {
  date = new Date();
}, 1000);