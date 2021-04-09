//******es5*******
// var a = require("./a.js")

// let b = 100;
// let [c, d, e] = [333, 555, 222];

// console.log(d);

// a.haha();
// a.xixi();

//******es6*******
import { haha, xixi } from "./a";

require("../less/1.less") // this is less entrance, the 'less to css' translation will be written in side all.js

let b = 100;
let [c, d, e] = [333, "wocao666666", 222];

console.log(d);

let obj={
    m:1,
    n:2,
    v:10
}

let obj2={
    ...obj,// if here is a high level Syntax
    v:888888
}

console.log(obj2);// here will output correct obj
//"@babel/preset-env", have done every thing. no need use "plugins: ["transform-object-rest-spread"]"....


haha();
xixi();