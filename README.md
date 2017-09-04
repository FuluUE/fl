# FL

前端通用解决方案（工具库）

## TODO

需求：

- ~~异步获取数据~~
- 规则验证
- ~~加密/解密（crypto-js）~~
- ~~编码/解码~~
- ~~时间格式处理（moment）~~
- ~~查询字符串处理~~
- 浏览器检测
- ~~UUID 生成（uuid）~~
- 权限
- Excel 导入/导出
- 数据结构化/扁平化处理
- 对象合并
- ~~对象转换为查询字符串~~
- 根据 key 修改对象
- 判断对象是否相等
- 数组去重、排序
- ~~序列化 JSON 字符串~~
- ~~指定位置替换字符串，比如： 13012341234 => 130****1234~~
- ~~替换字符为指定的字符，比如： 123{0}456{1} -> 123a456b~~
- 数字转换为可读性强的钱格式，比如： 1000000 =》 1,000,000
- 阿拉伯数字转换为大写中文格式，比如：0123456789 =》 零壹贰叁肆伍陆柒捌镹拾

## 说明

前端通用解决方案内部方法规则：

- 不应包含 DOM 操作
- 具有一定的通用性，是抽象化的
- 可基于第三方工具库封装：Lodash、Immutable、Ramda

## 第三方工具参考

- [moment：时间格式处理](http://momentjs.com/)
- [normalizr：规范化嵌套的 JSON](https://github.com/paularmstrong/normalizr)
- [validator：字符串验证](https://github.com/chriso/validator.js)
- [is_js：检查库](https://github.com/arasatasaygin/is.js)
- [classnames：CSS 类名操作](https://github.com/JedWatson/classnames)
- [uuid：UUID 生成](https://github.com/kelektiv/node-uuid)
- [crypto-js：JavaScript 加密](https://github.com/brix/crypto-js)
- [qs：查询字符串解析](https://github.com/ljharb/qs)
- [object.omit：省略指定的 key 或 value](https://github.com/jonschlinkert/object.omit)
