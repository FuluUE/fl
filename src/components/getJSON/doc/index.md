## getJSON(url, options)

获取异步 JSON 数据，基于 axios 封装，包括异常处理逻辑。

GET 请求：

```javascript
getJSON('/user/12345');
```

```javascript
getJSON('/user?ID=12345');
// 或
getJSON('/user', {
  params: {
    ID: 12345
  }
});
```

POST 请求：

```javascript
getJSON('/user', {
  method: 'post',
  data: {...}
});
```
