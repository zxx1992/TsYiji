"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 *
 * 定义一个point类
 * @class Point
 */
var Point = /** @class */ (function () {
    /**
     *
     * @param {string} x the x value
     * @param {string} y the y value
     * @memberof Point
     * @description point 构造函数需要传两个参数 try
     */
    function Point(x, y) {
    }
    /**
     * 定义getY方法，获取y值
     * @param {string} y
     * @return {*}
     * @memberof Point
     */
    Point.prototype.getY = function (y) {
        return y;
    };
    return Point;
}());
/**
 *
 * 标明函数是一个构造器函数，意味着需要使用 new 关键字来返回一个实例，即使用 new 关键字实例化
 * @class Door
 */
var Door = /** @class */ (function () {
    function Door() {
    }
    return Door;
}());
/**
 *
 *
 * @class SecurityDoor
 * @extends {Door}
 * @implements {Alarm}
 */
var SecurityDoor = /** @class */ (function (_super) {
    __extends(SecurityDoor, _super);
    function SecurityDoor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     *
     *
     * @memberof SecurityDoor
     */
    SecurityDoor.prototype.alert = function () {
        console.log("SecurityDoor alert");
    };
    return SecurityDoor;
}(Door));
/**
 *
 *
 * @class Car
 * @implements {Alarm}
 */
var Car = /** @class */ (function () {
    function Car() {
    }
    /**
     *
     *
     * @memberof Car
     */
    Car.prototype.alert = function () {
        console.log("car alert");
    };
    return Car;
}());
/**
 *
 *
 * @param {string} some
 * @return {string} "some"
 * @description @ignore标签表示在你的代码中的注释不应该出现在文档中，注释会被直接忽略。这个标签优先于所有其他标签
 */
var getSome = function (some) {
    return "some";
};
/**
 *  调用getSome函数
 *  @function
 * */
var a = getSome("some");
/** @type {*} */
var hua = {
    name: "huahua",
    age: 1,
};
