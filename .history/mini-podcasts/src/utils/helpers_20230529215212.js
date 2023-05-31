export const verifyTime = timestamp=> {
    const msDay = 60 * 60 * 24 * 1000 // milisegundos per day
    return Date.now() - timestamp > msDay;
  }