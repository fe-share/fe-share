### web安全和攻击
攻击:

- 主动攻击:SQL注入攻击和OS注入攻击

1. SQL注入攻击
ex: http://example.com/search?name=lzj--&flag=1

$q = name; SQL语句:SELECT * FROM bookTb1 WHERE author = lzj-- and flag = 1; --后面的会被当做注释干掉，就会将flag这个条件查询忽略掉。 


2. OS命令注入攻击
ex:类似上面的不过是将shell命令中加入非法字符造成信息攻击

3. http首部注入攻击
修改cookie值，
- 被动攻击:跨站脚本攻击(XSS)和跨站点请求伪造(CSRF)

1. XSS：web网站运行非法的HTML标签或js进行的一种攻击
最简单的input输入框输入一些script标签

2. 跨站请求伪造:
用户认证过登陆了，接着触发一些恶意陷阱，执行一些操作(购买，评论等等)

3. session劫持
通过窃听，xss攻击等其他获取cookie信息伪装成用户
