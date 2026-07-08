/**
 * In my license, all codes can be shared free of charge. 
 * However, If my code is taken for commercial use, please maintain it yourself. 
 * I am not obligated to take responsibility for your business application.
 * Here is my email "pangdongcan@live.com"
 * 
 * Copyright © 2026 Micheal Pang. All rights reserved.
 * 
 * @file This file "testDatatype.js" is part of project "pdc-js-framework" , which is belong to Michael Pang (It's Me).
 * @author  Micheal Pang (Dongcan Pang)
 * @since  2026-06-16
 * @description  里负责测试 utils/datatype.js 这个模块的处理是否有问题。
 */
"use strict"; // 这是严格模式下的 Javascript 代码

// 导入 Assert 断言工具
import { Assert } from "../testTools.js";

// 导入要测试的常量（这个只是对外接口，引入即可）
import * as du from "../../utils/datatype.js";

// 导入 各个子模块 测试函数
import {
    testIsNullValue, testNotNullValue,
    testIsStringValue, testIsStringObject, testIsString, testIsEmptyString, testValueOfString,
    testIsBooleanValue, testIsBooleanObject, testIsBoolean, testValueOfBoolean,
    testIsNumberValue, testIsNumberObject, testIsNumber, testValueOfNumber,
    testIsSymbol, testIsRegexp, testIsRegexpOk
} from "./datatype/testBase.js";

import {
    testIsFunction, testIsClass, testIsTargetClass, testIsObject, testIsObjectLiteral,
    testIsTargetObject, testIsTargetObjectSet, testIsTargetObjectArray, testIsTargetObject2DArray,
    testIsHtmlElement, testIsHtmlElementList
} from "./datatype/testObject.js";

import {
    testToLowerCase, testToUpperCase, 
    testObjToMap, testGenMap, testCopyObject, testMergeObject, testMergeObjectIgnoreCase,
    testHtmlElementListToArray
} from "./datatype/testTransform.js";

// 测试 对外接口 DataUtil 是否可用
function testDataUtil() {
    // 查看常量 和 函数是否可以引用
    // 每一个子模块，选择一个函数判断。
    Assert.equalsStrictly(true, typeof du === 'object');
    Assert.equalsStrictly(true, typeof du.isNullValue === 'function');
    Assert.equalsStrictly(true, typeof du.isFunction === 'function');
    Assert.equalsStrictly(true, typeof du.mergeObjectIgnoreCase === 'function');
}

// 把这些测试函数，导出给 外部调用
export {
    // == 
    testIsNullValue, testNotNullValue,
    testIsStringValue, testIsStringObject, testIsString, testIsEmptyString, testValueOfString,
    testIsBooleanValue, testIsBooleanObject, testIsBoolean, testValueOfBoolean,
    testIsNumberValue, testIsNumberObject, testIsNumber, testValueOfNumber,
    testIsSymbol, testIsRegexp, testIsRegexpOk,
    // == 
    testIsFunction, testIsClass, testIsTargetClass, testIsObject, testIsObjectLiteral,
    testIsTargetObject, testIsTargetObjectSet, testIsTargetObjectArray, testIsTargetObject2DArray,
    testIsHtmlElement, testIsHtmlElementList,
    // == 
    testToLowerCase, testToUpperCase, 
    testObjToMap, testGenMap, testCopyObject, testMergeObject, testMergeObjectIgnoreCase,
    testHtmlElementListToArray, 
    // == 
    testDataUtil
}