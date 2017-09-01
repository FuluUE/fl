export default (num, n) => {
  // return num.toFixed(n);
  return Math.round( num * Math.pow(10, n) ) / Math.pow(10, n);
};
