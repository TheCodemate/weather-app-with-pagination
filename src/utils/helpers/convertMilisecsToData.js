const convertMilisecsToData = miliseconds => {
  const fullDate = new Date(miliseconds * 1000);
  const monthName = fullDate.toLocaleString('default', { month: 'long' });
  const dayName = fullDate.toLocaleString('default', { weekday: 'long' });
  const month =
    fullDate.getMonth() + 1 < 2
      ? `0${fullDate.getMonth() + 1}`
      : fullDate.getMonth() + 1;
  const day =
    fullDate.getDate().toString().length < 2
      ? `0${fullDate.getDate()}`
      : fullDate.getDate();
  const year = fullDate.getFullYear().toString();
  const currentDateString = `${day}/${month}/${year}`;

  return {
    fullDate,
    monthName,
    dayName,
    currentDateString
  };
};

export default convertMilisecsToData;
