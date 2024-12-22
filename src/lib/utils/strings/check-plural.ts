export const checkPlural = (value: number) => {
  if (value > 4 || value === 0) {
    return 'ов';
  } else if (value > 1) {
    return 'а';
  }

  return '';
};
