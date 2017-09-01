export default (args) => {
    if (typeof args == 'string') {
        // 如果传入的 args 是一个字符串（经过 JSON.stringify() 处理）：'{ "key": "value", "key1": "value1"}'
        args = JSON.parse(args);
    }

    // 如果传入的 args 是一个对象：{key: "value", key1: "value1"}
    var key, value, _str, str, strResult;

    for (key in args) {
        value = args[key];

        // 拼接一个单元
        _str = '&' + key + '=' + value;

        // 拼接所有
        str += _str;

        // 返回一个去掉 "undefined&" 的子字符串
        strResult = str.substring(10)
    }

    return strResult;
};
