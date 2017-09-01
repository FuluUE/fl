import _ from 'lodash';

export default (str, opt) => {
    var arrResult, i, item, key, len, objResult, value;

    if (opt != null) {
        if (Array.isArray(opt) || _.isArray(opt)) {
            for (i = 0, len = opt.length; i < len; i++) {
                item = opt[i];
                arrResult = str.replace(/{(\d+)}/g, function(match, position, string) {
                    return item = opt[position];
                });
            }
            return arrResult;
        } else {
            for (key in opt) {
                value = opt[key];
                objResult = str.replace(/{(\d+)}/g, function(match, position, string) {
                    return value = opt[position];
                });
            }
            return objResult;
        }
    } else {
        return str;
    }
};
