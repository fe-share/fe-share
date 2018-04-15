import './style.css';
import _ from 'lodash';
import "./getData";
import {rendOne} from "./addDom";
import {insertTwo} from "./insert";

rendOne();
var app = document.getElementById("two");
var list = insertTwo();
app.appendChild(list);
function component() {
    var element = document.createElement('div');
    // lodash 是由当前 script 脚本 import 导入进来的
    element.innerHTML = "hel1233";
    element.classList.add('hello');
    element.classList.add('hello2');
    return element;
}
document.body.appendChild(component());

// if(module.hot)
// {
//     module.hot.accept();//这样设置就会出现什么问题呢?控制台可以看到修改后dom增多,说明生效了
// }
if(module.hot)
{
    module.hot.accept("./insert.js",function () {
        console.log(1);
        var insert= require("./insert")//这引过来的时候是一个对象
        app.removeChild(list);
        var newList = insert.insertTwo();
        console.log(newList)
        app.appendChild(newList);
        list = newList
    });
}