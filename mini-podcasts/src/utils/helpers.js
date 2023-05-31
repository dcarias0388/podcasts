
export const verifyTime = timestamp=> {
    const msDay = 60 * 60 * 24 * 1000 // milisegundos per day
    return Date.now() - timestamp > msDay;
}

export const msToHours = (millis) => {
  let ms = millis % 1000;
  millis = (millis - ms) / 1000;
  let secs = millis % 60;
  secs = (secs < 10)? `0${secs}` : secs;
  millis = (millis - secs) / 60;
  let mins = millis % 60;
  mins = (mins < 10)? `0${mins}` : mins;
  let hrs = (millis - mins) / 60;
  hrs = (hrs < 10)? `0${hrs}` : hrs;

  return `${hrs} : ${mins} : ${secs}`;
}