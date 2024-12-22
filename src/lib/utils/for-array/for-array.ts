export const removeDuplicates = (arr1, arr2) => {
  return Array.from(new Set([...arr1, ...arr2]));
};

export const groupBy = (arr, key) => {
  return arr.reduce(function (rv, x) {
    (rv[x[key]] = rv[x[key]] || []).push(x);
    return rv;
  }, {});
};
