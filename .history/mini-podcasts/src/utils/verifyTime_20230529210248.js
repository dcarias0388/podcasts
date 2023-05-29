export const verifyTime = time=> {
    const msDay = 60 * 60 * 24 * 1000 // milisegundos per day
    const now = Date.now();
    return now - time > msDay;
  }