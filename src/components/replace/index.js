export default (str, opt) => {
  var endStr, middleStr, middleStrReplace, options, startStr;
    options = {
        format: (opt != null ? opt.format : void 0) || "*",
        start: (opt != null ? opt.start : void 0) || 1,
        end: (opt != null ? opt.end : void 0) * -1 || 1 * -1
    };

    startStr = str.slice(0, options.start);
    middleStr = str.slice(options.start, options.end);
    endStr = str.slice(options.end);

    middleStrReplace = new Array(middleStr.length + 1).join(options.format);

    if (str.length > 2) {
        return startStr + middleStrReplace + endStr;
    } else {
        return new Array(str.length + 1).join(options.format);
    }
};
