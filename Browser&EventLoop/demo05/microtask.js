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