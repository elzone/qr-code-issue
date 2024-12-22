export const dateFormatOptions = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
};

export const setDateFormat = (date: string, dateFormatOptions?: unknown) => {
  /*const options = dateFormatOptions ?? {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  if (Intl) {
    return new Intl.DateTimeFormat('ru-RU', options).format(new Date(date));
  } else {*/
  return new Date(date).toLocaleDateString();
  //}
};

export const setTimeFormat = (date: string, dateFormatOptions?: unknown) => {
  /*const options = dateFormatOptions ?? {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  if (Intl) {
    return new Intl.DateTimeFormat('ru-RU', options).format(new Date(date));
  } else {*/
  return new Date(date).toLocaleTimeString().split(':').slice(0, 2).join(':');
  //}
};
