### http2.0

HTTP2新特性:
- 二进制传输数据而非文本传输
 ![二进制传输](http://wx2.sinaimg.cn/mw690/0060lm7Tly1fr1qb6kcyoj30uf0ebace.jpg)

- 多路复用

  线头阻塞head-of-line blocking
  h2会将资源拆分成二进制帧，stream形式进行传输，并且每个stream会有ID,length,type,priority,
  flags来进行标识。这些帧可以乱序发送， 然后根据每个帧首部的流标识符重新组装

  only one Tcp connection一个域名下只用一个tcp链接
  https://http2.akamai.com/demo
  ![stream](http://wx2.sinaimg.cn/mw690/0060lm7Tly1fr1qdmc3tdj30yd09xac0.jpg)

- 头部压缩

  h2采用HPACK算法进行头部压缩，
  并且在server端做一个缓存，在连接的有效期内就不用再发请求头了，
  为了server和client同步, 两边都需要保留一份Header list, 并且,每次发送请求时,都会检查更新

- 服务端推送

  PUSH_PROMISE帧服务端推送许可
  ![服务器推送](http://wx2.sinaimg.cn/mw690/0060lm7Tly1fr1qf9dj4ij30im077dhp.jpg)
