export default (args) => {
    if (typeof args == 'string') {
        // 如果传入的 str 是一个表单字符串：key=value&key1=value1
        let obj = {};

        args.replace(/([^&]*)=([^&]*)/g, function (match, key, value) {
            return obj[key] = value;
        });

        return JSON.stringify(obj);
    } else if (typeof args == 'object') {
        // 如果传入的 args 是一个对象：{ key: 'value', key1: 'value1'}
        return JSON.stringify(args);
    }
};
