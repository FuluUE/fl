# replace(str, opt)

置换字符为特定字符。

```javascript
replace('12');
// => **
replace('123');
// => 1*3
replace('1234');
// => 1**4
replace('12345678', {start: 2, end: 2});
// => 12****78
replace('13012341234', {start: 3, end: 4});
// => 130****1234
replace('13012341234', {format: '-', start: 3, end: 3});
// => 130-----234
```
