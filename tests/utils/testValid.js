/**
 * In my license, all codes can be shared free of charge. 
 * However, If my code is taken for commercial use, please maintain it yourself. 
 * I am not obligated to take responsibility for your business application.
 * Here is my email "pangdongcan@live.com"
 * 
 * Copyright © 2026 Micheal Pang. All rights reserved.
 * 
 * @file This file "testValid.js" is part of project "pdc-js-framework" , which is belong to Michael Pang (It's Me).
 * @author  Micheal Pang (Dongcan Pang)
 * @since  2026-06-29
 * @description  这里负责测试 utils/valid.js 这个模块的处理是否有问题。
 */
"use strict"; // 这是严格模式下的 Javascript 代码

//======= 导入各个子模块的测试程序
import {
    testThrowError, testThrowParameterError, testThrowClassCreationError, testThrowCannotNewError
} from "./valid/testThrow.js";

import {
    testValidString, testValidBoolean, testValidNumber, testValidRegExp, testValidFunction,
    testValidClass, testValidTargetClass, testValidObject, testValidArray, testValid2DArray,
    testValidObjectLiteral, testValidTargetObject, testValidTargetObjectSet, testValidTargetObjectArray, testValidTargetObject2DArray,
    testValidHtmlElement, testValidHtmlElementList
} from "./valid/testVerify.js";

import {
    testHandleDescInfoObj,
    testAutoVnAofString, testAutoVnAofNumber, testAutoVnAofBoolean, testAutoVnAofRegExp,
    testAutoVnAofMap, testAutoVnAofSet, testAutoVnAofArray, testAutoVnAof2DArray,
    testAutoVnAofObjectLiteral, testAutoVnAofTargetObject, testAutoVnAofTargetObjectSet, testAutoVnAofTargetObjectArray,
    testAutoVnAofTargetObject2DArray, testAutoVnAofHtmlElement, testAutoVnAofHtmlElementList
} from "./valid/testAuto.js";

// 导入 Assert 断言工具
import { Assert } from "../testTools.js";

// 导入要测试的常量（这个只是对外接口，引入即可）
import * as vu from "../../utils/valid.js";

/**
 * 测试 valid.js 这个对外接口是否可用
 */
function testValidUtil(){
    // 查看常量 和 函数是否可以引用
    // 每一个子模块，选择一个函数判断。
    Assert.equalsStrictly(true, typeof vu === 'object');
    Assert.equalsStrictly(true, typeof vu.throwError === 'function');
    Assert.equalsStrictly(true, typeof vu.validArray === 'function');
    Assert.equalsStrictly(true, typeof vu.autoVnAofHtmlElement === 'function');
}

// 把这些测试函数，导出给 外部调用
export{
    testThrowError, testThrowParameterError, testThrowClassCreationError, testThrowCannotNewError,

    testValidString, testValidBoolean, testValidNumber, testValidRegExp, testValidFunction,
    testValidClass, testValidTargetClass, testValidObject, testValidArray, testValid2DArray,
    testValidObjectLiteral, testValidTargetObject, testValidTargetObjectSet, testValidTargetObjectArray, testValidTargetObject2DArray,
    testValidHtmlElement, testValidHtmlElementList,

    testHandleDescInfoObj,
    testAutoVnAofString, testAutoVnAofNumber, testAutoVnAofBoolean, testAutoVnAofRegExp,
    testAutoVnAofMap, testAutoVnAofSet, testAutoVnAofArray, testAutoVnAof2DArray,
    testAutoVnAofObjectLiteral, testAutoVnAofTargetObject, testAutoVnAofTargetObjectSet, testAutoVnAofTargetObjectArray,
    testAutoVnAofTargetObject2DArray, testAutoVnAofHtmlElement, testAutoVnAofHtmlElementList,

    testValidUtil
}