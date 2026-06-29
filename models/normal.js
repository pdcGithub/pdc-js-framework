/**
 * In my license, all codes can be shared free of charge. 
 * However, If my code is taken for commercial use, please maintain it yourself. 
 * I am not obligated to take responsibility for your business application.
 * Here is my email "pangdongcan@live.com"
 * 
 * Copyright © 2026 Micheal Pang. All rights reserved.
 * 
 * @file This file "normal.js" is part of project "pdc-js-framework" , which is belong to Michael Pang (It's Me).
 * @author  Micheal Pang (Dongcan Pang)
 * @since  2026-06-29
 * @description  这里是一些普通的数据模型。
 */
"use strict"; // 这是严格模式下的 Javascript 代码

/**
 * 这个类用于表示“对象字面量”。因为字面量不是普通的对象，没法用 Object 来作为类型，所以单独搞一个 ObjectLiteral 类，方便类型检测。
 */
class ObjectLiteral extends Object {

    /**
     * 这里创建一个 ObjectLiteral 对象。因为字面量不是普通的对象，没法用 Object 来作为类型，所以单独搞一个 ObjectLiteral 类，方便类型检测
     * @param {String} message 一个描述信息字符串
     */
    constructor(){
        super();
        this.name = ObjectLiteral.name;
    }
}

export {
    ObjectLiteral
}