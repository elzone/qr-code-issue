export const sortByDate = (arr: unknown, sortFieldName: string) => {
  return arr.sort((a, b) => {
    if (a[sortFieldName] > b[sortFieldName]) {
      return -1;
    } else if (a[sortFieldName] < b[sortFieldName]) {
      return 1;
    } else {
      return 0;
    }
  });
};
