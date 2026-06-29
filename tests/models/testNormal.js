/**
 * In my license, all codes can be shared free of charge. 
 * However, If my code is taken for commercial use, please maintain it yourself. 
 * I am not obligated to take responsibility for your business application.
 * Here is my email "pangdongcan@live.com"
 * 
 * Copyright © 2026 Micheal Pang. All rights reserved.
 * 
 * @file This file "testNormal.js" is part of project "pdc-js-framework" , which is belong to Michael Pang (It's Me).
 * @author  Micheal Pang (Dongcan Pang)
 * @since  2026-06-29
 * @description  这里是关于 models 文件夹下的 normal.js 模块测试的代码
 */
"use strict"; // 这是严格模式下的 Javascript 代码

import { Assert } from "../testTools.js";
import { ObjectLiteral } from "../../models/normal.js";

/**
 * 关于 ObjectLiteral 类的测试
 */
function testObjectLiteral() {
    // 构造函数测试，这里不应该抛异常，而且创建的是 异常类对象
    Assert.throwsErrorsNone(()=>{
        // 
        let o1 = new ObjectLiteral();
        // 
        Assert.equalsStrictly('ObjectLiteral', o1.name);
        Assert.equalsStrictly(true, o1 instanceof ObjectLiteral);
        Assert.equalsStrictly(true, o1 instanceof Object);
    });
}

//========== 导出测试函数
export {
    testObjectLiteral
}