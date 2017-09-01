export default (num, n) => {
  return num.toString().replace( new RegExp( "^(\\-?\\d*\\.?\\d{0,"+ n +"})(\\d*)$" ), "$1");
};
