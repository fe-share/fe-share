const a = '赵印盘';
const b = new Set([1,2,3,4,1,2,3]);
console.log(b);
const c = [1,2,3];
console.log(c.includes(1));
const promise = new Promise((resolve,reject) => {
    setTimeout(()=>{
        resolve()
    },2000)
} )
promise.then(()=>{
    console.log(1)
})
import 'test.ts'