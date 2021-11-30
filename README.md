
qc-time 时间工具

### install

```
yarn add qc-time
```

1.前端esm引入
```
import time from "qc-time"
```
2.node端引入
```
const time = require("qc-time").default;
```


### api
* get_date ：根据传入的分隔符号，返回年月日
* get_time : 根据传入的分隔符号，返回时分秒
* get_week : 返回字符串星期*
* get_stamp10 ：返回10位数字时间戳
* get_stamp13 : 返回13位数字时间戳


### example

```
//验证的时候注意改为commonjs规范

console.log("date",time.get_date("-"));     //date 2021-11-30


console.log("time",time.get_time(":"));     //time 10:04:14

//PS1：年月日时分秒根据传入间隔符拼接


console.log("week",time.get_week());        //week 星期二


console.log("stamp10",time.get_stamp10())   //stamp10 1638237979
console.log("stamp13",time.get_stamp13())   //stamp13 1638237979000
//PS2：分别获取十位时间戳和十三位时间戳，返回为数字
```