export const phoneFormat = (input) => {
  if (typeof input === 'undefined') input = '-';
  if (typeof input !== 'string') input = input.toString();
  if (input.length === 11) {
    return input.replace(
      /(\d)(\d{3})(\d{3})(\d{2})(\d{2})/,
      '+$1 ($2) $3 $4 $5'
    );
  } else {
    return undefined;
  }
};
