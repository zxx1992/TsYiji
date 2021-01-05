
/**
 *
 * 定义一个point类
 * @class Point
 */
class Point {
    /**
     * 
     * @param {string} x the x value
     * @param {string} y the y value 
     * @memberof Point
     * @description point 构造函数需要传两个参数 try
     */
    constructor(x: string, y: string) {

    }

    /**
     * 定义getY方法，获取y值
     * @param {string} y  
     * @return {*}
     * @memberof Point
     */
    getY(y: string) {
        return y
    }
}

/**
 *
 * 定义一个Fruits接口
 * @interface Fruits
 */
interface Alarm {
    /**
     *  @memberof Fruits
     *  @function alert
     */
    alert(): void;
}

/**
 *
 * 标明函数是一个构造器函数，意味着需要使用 new 关键字来返回一个实例，即使用 new 关键字实例化
 * @class Door
 */
class Door {

}

/**
 *
 *
 * @class SecurityDoor
 * @extends {Door}
 * @implements {Alarm}
 */
class SecurityDoor extends Door implements Alarm {
    /**
     *
     * 
     * @memberof SecurityDoor
     */
    alert() {
        console.log("SecurityDoor alert")
    }
}

/**
 *
 *
 * @class Car
 * @implements {Alarm}
 */
class Car implements Alarm {
    /**
     *
     * 
     * @memberof Car
     */
    alert() {
        console.log("car alert")
    }
}


/**
 *
 *
 * @param {string} some
 * @return {string} "some"
 * @description @ignore标签表示在你的代码中的注释不应该出现在文档中，注释会被直接忽略。这个标签优先于所有其他标签
 */
var getSome = function (some: string): string {
    return "some"
};

/**
 *  调用getSome函数
 *  @function 
 * */
var a = getSome("some");



/**
 *
 *
 * @interface Animal
 */
interface Animal {
    name: string;
    age: number;
}
/** @type {*} */
var hua: Animal = {
    name: "huahua",
    age: 1,
};


