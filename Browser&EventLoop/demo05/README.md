## microtask 和 macrotask

先看一道题

```javascript
console.log('script start')

setTimeout(function() {
  console.log('timeout')
}, 0)

Promise.resolve()
  .then(function() {
    console.log('promise 1')
  })
  .then(function() {
    console.log('promise 2')
  })

console.log('script end')
```

这段代码的打印结果为

script start
script end
promise 1
promise 2
timeout

为什么会是如下结果呢，这就涉及到 microtask 和 macrotask 的区别了

首先看一下哪些属于 microtask 和 macrotask

### microtask

* process.nextTick
* promise
* Object.observe

### macrotask

* setTimeout
* setInterval
* setImmediate
* I/O

每个 event loop 中都存在一个 microtask 和 task 的任务队列，而在每个事件循环的周期中，都会把所有的 Microtask 队列内的任务全部执行完毕。

因此对于上述题目，执行顺序如下

1.  打印`script start`
2.  将计时器任务添加到计时器线程，完成后添加到 macrotask 队列
3.  将 promise 任务添加到 microtask 队列
4.  打印`script end`
5.  依次将 microtask 队列中的任务取出执行直至清空 microtask 队列，打印`promise 1`和`promise2`
6.  将 macrotask 队列中任务取出最后一个执行，打印`timeout`