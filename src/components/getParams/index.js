export default (str) => {
    var _str, args, obj;

    if (str != null) {
        _str = str.indexOf("?");
        if (_str !== -1) {
            args = str.substr(_str + 1);
        } else {
            return;
        }
    } else {
        args = window.location.search.substr(1);
    }

    obj = {};

    args.replace(/([^&]*)=([^&]*)/g, function(match, key, value) {
        return obj[key] = value;
    });

    return obj;
};
