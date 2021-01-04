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
/** Class representing a p. */
var Point = /** @class */ (function () {
    function Point(x, y) {
        // ...
    }
    Point.prototype.getX = function () {
        // ...
    };
    /**
     * Get the y value.
     * @return {number} The y value.
     */
    Point.prototype.getY = function () {
        // ...
    };
    /**
     * @param  {} str
     */
    Point.fromString = function (str) {
        // ...
    };
    return Point;
}());
var Animal = /** @class */ (function (_super) {
    __extends(Animal, _super);
    function Animal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Animal;
}(Point));
/**
 * @param  {string} name
 * @returns string
 */
function DoSome(name) {
    return name;
}
var a = DoSome("zxx");
console.log(a, "a");
