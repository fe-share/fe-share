function sleep(delay) {
  var start = (new Date()).getTime();
  while ((new Date()).getTime() - start < delay) {
    continue;
  }
}

console.log('script start')
console.time('time')
setTimeout(function() {
  console.timeEnd('time')  
}, 1000)
sleep(3000)
console.log('script end')