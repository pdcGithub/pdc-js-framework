/**
 * In my license, all codes can be shared free of charge. 
 * However, If my code is taken for commercial use, please maintain it yourself. 
 * I am not obligated to take responsibility for your business application.
 * Here is my email "pangdongcan@live.com"
 * 
 * Copyright © 2026 Micheal Pang. All rights reserved.
 * 
 * @file This file "testModels.js" is part of project "pdc-js-framework" , which is belong to Michael Pang (It's Me).
 * @author  Micheal Pang (Dongcan Pang)
 * @since  2026-06-03
 * @description  这里是关于 models 文件夹下的模块测试的代码
 */
"use strict"; // 这是严格模式下的 Javascript 代码

import { report, Assert } from "../testTools.js";
import { ClassCreationError, ParameterError, VerificationError } from "../../models/errors.js";

/**
 * 关于 ClassCreationError 类的测试，通过的话会返回 true，否则返回 false
 */
function testClassCreationError() {
    // 构造函数测试，这里不应该抛异常，而且创建的是 异常类对象
    Assert.throwsErrorsNone(()=>{
        // 
        let e1 = new ClassCreationError();
        let e2 = new ClassCreationError('这是一个测试消息，代表这里有 类创建异常');
        // 
        Assert.equalsStrictly('ClassCreationError', e1.name);
        Assert.equalsStrictly('ClassCreationError', e2.name);
        Assert.equalsStrictly('', e1.message);
        Assert.equalsStrictly('这是一个测试消息，代表这里有 类创建异常', e2.message);
    });

    // 这里面是抛异常的测试
    Assert.throwsErrors(()=>{
        // 异常测试，这里应该会抛 TypeError ，因为 类不能像 函数一样使用。
        let e3 = ClassCreationError();
    }, TypeError);
}

/**
 * 关于 ParameterError 类的测试，通过的话会返回 true，否则返回 false
 */
function testParameterError(){
    // 构造函数测试，这里不应该抛异常，而且创建的是 异常类对象
    Assert.throwsErrorsNone(()=>{
        // 
        let e1 = new ParameterError();
        let e2 = new ParameterError('这是一个测试消息，代表这里有 类创建异常');
        // 
        Assert.equalsStrictly('ParameterError', e1.name);
        Assert.equalsStrictly('ParameterError', e2.name);
        Assert.equalsStrictly('', e1.message);
        Assert.equalsStrictly('这是一个测试消息，代表这里有 类创建异常', e2.message);
    });

    // 这里面是抛异常的测试
    Assert.throwsErrors(()=>{
        // 异常测试，这里应该会抛 TypeError ，因为 类不能像 函数一样使用。
        let e3 = ParameterError();
    }, TypeError);
}

/**
 * 关于 VerificationError 类的测试，通过的话会返回 true，否则返回 false
 */
function testVerificationError() {
    // 构造函数测试，这里不应该抛异常，而且创建的是 异常类对象
    Assert.throwsErrorsNone(()=>{
        // 
        let e1 = new VerificationError();
        let e2 = new VerificationError('这是一个测试消息，代表这里有 类创建异常');
        // 
        Assert.equalsStrictly('VerificationError', e1.name);
        Assert.equalsStrictly('VerificationError', e2.name);
        Assert.equalsStrictly('', e1.message);
        Assert.equalsStrictly('这是一个测试消息，代表这里有 类创建异常', e2.message);
    });

    // 这里面是抛异常的测试
    Assert.throwsErrors(()=>{
        // 异常测试，这里应该会抛 TypeError ，因为 类不能像 函数一样使用。
        let e3 = VerificationError();
    }, TypeError);
}

/**
 * 这里执行测试，并把结果汇总出来
 */
report('models/errors.js', testClassCreationError, testParameterError, testVerificationError);