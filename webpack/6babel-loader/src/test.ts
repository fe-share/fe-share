const NUM = 45;
interface Cat{
    name:String,
    gender:String
}
function touchCat(cat:Cat){
    console.log("mao", cat.name);
}
touchCat({
    name:'tom',
    gender:"nan"
})
//不按照ts会报错