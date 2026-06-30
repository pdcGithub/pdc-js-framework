/**
 * In my license, all codes can be shared free of charge. 
 * However, If my code is taken for commercial use, please maintain it yourself. 
 * I am not obligated to take responsibility for your business application.
 * Here is my email "pangdongcan@live.com"
 * 
 * Copyright © 2026 Micheal Pang. All rights reserved.
 * 
 * @file This file "ObjectLiteral.js" is part of project "pdc-js-framework" , which is belong to Michael Pang (It's Me).
 * @author  Micheal Pang (Dongcan Pang)
 * @since  2026-06-30
 * @description  这是一个对象字面量的模型类。一般不做什么处理，只是用于数据判断而已。
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

// ============  导出这个 类
export {
    ObjectLiteral
}