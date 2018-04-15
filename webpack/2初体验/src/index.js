import _ from 'lodash';
// amd
require(["./amd.js"],function (sum) {
    console.log("sum(3,6)",sum(3,6))
});
//es6
import es6Sum from "./es6module";

console.log("es6Sum(3, 6)",es6Sum(3, 6));
//commonJs
var commonSum = require("./common");

console.log("commonSum(3, 6)",es6Sum(3, 6));

function component() {
    var element = document.createElement('div');
    // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    return element;
}
document.body.appendChild(component());