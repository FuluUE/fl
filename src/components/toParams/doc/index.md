# toParams(args)

转换（拼接）为查询字符串格式。

```javascript
toParams('{ "key": "value", "key1": "value1"}');
// => key=value&key1=value1
toParams({key: value, key1: value1});
// => key=value&key1=value1
```
