"use strict";
var _ = require("lodash");
var chai = require("chai");
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
var expect = chai.expect;
chai.use(sinonChai);

var main = require("../lib/main.js");


describe("测试描述", function(){
    sinon.spy(console, 'log');

    it("输入0", function(){

        let result = main(0);
        let expect_string = `No more bottles of beer on the wall, no more bottles of beer.
Go to the store and buy some more, 99 bottles of beer on the wall.`;

        expect(expect_string).to.equal(result);
    });

    it("输入1", function(){

        var result = main(1);
        var expect_string = `1 bottle of beer on the wall, 1 bottle of beer.
Take one down and pass it around, no more bottles of beer on the wall.
No more bottles of beer on the wall, no more bottles of beer.
Go to the store and buy some more, 99 bottles of beer on the wall.`;

        expect(expect_string).to.equal(result);
    });

    it("输入5", function(){


        let result =main(5);
        let expect_string = `5 bottles of beer on the wall, 5 bottles of beer.
Take one down and pass it around, 4 bottles of beer on the wall.
4 bottles of beer on the wall, 4 bottles of beer.
Take one down and pass it around, 3 bottles of beer on the wall.
3 bottles of beer on the wall, 3 bottles of beer.
Take one down and pass it around, 2 bottles of beer on the wall.
2 bottles of beer on the wall, 2 bottles of beer.
Take one down and pass it around, 1 bottle of beer on the wall.
1 bottle of beer on the wall, 1 bottle of beer.
Take one down and pass it around, no more bottles of beer on the wall.
No more bottles of beer on the wall, no more bottles of beer.
Go to the store and buy some more, 99 bottles of beer on the wall.`;

        expect(expect_string).to.equal(result);
    });


//     it("测试用例2", function(){
//
//         main(5);
//         let result = _.flatten(console.log.args).join("\n");
//         let expect_string = `5 bottles of beer on the wall, 5 bottles of beer.
// Take one down and pass it around, 4 bottles of beer on the wall.
// 4 bottles of beer on the wall, 4 bottles of beer.
// Take one down and pass it around, 3 bottles of beer on the wall.
// 3 bottles of beer on the wall, 3 bottles of beer.
// Take one down and pass it around, 2 bottles of beer on the wall.
// 2 bottles of beer on the wall, 2 bottles of beer.
// Take one down and pass it around, 1 bottle of beer on the wall.
// 1 bottle of beer on the wall, 1 bottle of beer.
// Take one down and pass it around, no more bottles of beer on the wall.
// No more bottles of beer on the wall, no more bottles of beer.
// Go to the store and buy some more, 99 bottles of beer on the wall.`;
//
//         expect(expect_string).to.equal(result);
//     });
//     it("测试用例3", function(){
//
//         main(1);
//         let result = _.flatten(console.log.args).join("\n");
//         let expect_string = `1 bottle of beer on the wall, 1 bottle of beer.
// Take one down and pass it around, no more bottles of beer on the wall.
// No more bottles of beer on the wall, no more bottles of beer.
// Go to the store and buy some more, 99 bottles of beer on the wall.`;
//
//         expect(expect_string).to.equal(result);
//     });
//     it("测试用例4", function(){
//
//         main(0);
//         let result = _.flatten(console.log.args).join("\n");
//         let expect_string = `No more bottles of beer on the wall, no more bottles of beer.
// Go to the store and buy some more, 99 bottles of beer on the wall.`;
//
//         expect(expect_string).to.equal(result);
//     });
});