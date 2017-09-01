export default (array) => {
  var hash, i, item, len;
    hash = {};
    for (i = 0; len = array.length; i < len; i++) {
        item = array[i];
        if (hash[item]) {
            return true;
        }
        hash[item] = true;
    }
    return false;
};
