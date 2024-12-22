export const createFixedLengthArray = (arrayLength: number) => {
  return new Array(arrayLength).join('.').split('.');
};
