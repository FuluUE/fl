# serializeJSON(args)

序列化为 JSON 字符串。

```javascript
serializeJSON('key=value&key1=value1');
// => '{ "key": "value", "key1": "value1"}'
serializeJSON({ key: 'value', key1: 'value1'});
// => '{ "key": "value", "key1": "value1"}'
```
