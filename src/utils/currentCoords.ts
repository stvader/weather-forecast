export const getPosition = () =>
  new Promise((res, rej) => {
    navigator.geolocation.getCurrentPosition(res, rej);
  });
