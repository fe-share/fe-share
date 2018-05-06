### https
https: http通信不安全，http通过SSL(secure socket Layer)或TSL(transport layer security)组合使用加密，

https是加密+认证+完整性保护的http。

常见的两种加密方式对称加密和非对称加密。

  对称加密采用一个秘钥加密解密。缺点：秘钥被窃取了；
  
  非对称加密：服务器持有私钥(只有服务器知道)，发布给客户端公钥，客户端拿到公钥加密报文发给服务器，服务器私钥解密。缺点：无法得知公钥的正确性(中间人攻击);
  
  组合加密：CA数字证书认证机构，证书机构的公钥和私钥，服务器将公钥发给证书机构，证书机构采用公钥加密(hash算法)得到数字证书，和服务器的公钥绑定在一起；
  客户端请求时会先获取到公钥+数字证书，数字证书会采用CA的私钥进行解密用来确定服务器的公钥是否正确。没问题后就可以采用服务器公钥加密通信。
  
通信步骤(11步)：
![https通信步骤](http://wx1.sinaimg.cn/mw690/0060lm7Tly1fr1mxjxj9tj30qw0xw7dg.jpg)
1.	客户端发送client hello报文开始SSL通信   (包含支持的SSL版本，加密组件，算法，秘钥)
2.	服务端发送server hello报文作为应答 (包含加密组件)
3.	服务端发送certificate报文，包含公开密钥证书
4.	服务器发送server hello Done第一次SSL握手结束
5.	客户端接着发送client key exchange 报文回应，报文中包含pre-master secret随机密码串(用公开密钥加密过的)
6.	客户端接着发送change cipher spec 报文，表示准备开始用pre-master secret秘钥加密来进行通信
7.	客户端发送finished报文，这次是否成功以服务器能否解密来判定
8.	服务端发送change cipher spec
9.	服务端发送finished报文
10.	完毕后ssl建立完成，开始进行http通信。。。。
