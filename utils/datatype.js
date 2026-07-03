/**
 * In my license, all codes can be shared free of charge. 
 * However, If my code is taken for commercial use, please maintain it yourself. 
 * I am not obligated to take responsibility for your business application.
 * Here is my email "pangdongcan@live.com"
 * 
 * Copyright © 2025 Micheal Pang. All rights reserved.
 * 
 * @file This file "datatype.js" is part of project "pdc-js-framework" , which is belong to Michael Pang (It's Me).
 * @module utils/datatype
 * @author  Micheal Pang (Dongcan Pang)
 * @since  2025-06-20
 * @description 这里是一个 数据处理的工具包，它划分了3个模块：base (基础数据类型处理)、object (对象类型数据处理)、 transform (数据转换处理)。
 * 在使用时，直接调用 datatype.js 模块就行了。3个子模块是为了方便以后扩展和修改，才拆分的。
 * （注意：请不要直接调用这个模块下面的子模块，因为它们可能修改路径。使用时，请统一导入本模块。）
 */
"use strict"; // 这是严格模式下的 Javascript 代码

import {
    isNullValue, NotNullValue, /* 异常值 */
    isStringValue, isStringObject, isString, isEmptyString, valueOfString, /* 字符串 */
    isBooleanValue, isBooleanObject, isBoolean, valueOfBoolean, /* 布尔值 */
    isNumberValue, isNumberObject, isNumber, valueOfNumber, /* 数值 */
    isSymbol, isRegexp, isRegexpOk /* Symbol 值 和 正则 */
} from "./datatype/base.js";

import {
    isFunction, isClass, isTargetClass, isObject,  /* 基础对象 和 类 判断 */
    isObjectLiteral, /* 对象字面量判断 */
    isTargetObject, isTargetObjectSet, isTargetObjectArray, isTargetObject2DArray,  /* 目标对象和数组判断 */
    isHtmlElement, isHtmlElementList                             /* Html元素对象和数组判断 */
} from "./datatype/object.js";

import { 
    objToMap, /* 将对象转 Map */
    genMap,   /* 快速生成一个 Map */
    copyObject, /* 复制一个对象 */
    mergeObject, /* 合并一个或者多个对象 */
    mergeObjectIgnoreCase, /* 合并一个或者多个对象，这里不区分键名的大小写。 */
    // 两个常量
    TO_LOWERCASE,
    TO_UPPERCASE
} from "./datatype/transform.js";


// 把子模块的内容全部导出。在使用上这里是一个对外接口模块。因为内容太多不好管理，分开实现再统一导出。
export {
    isNullValue, NotNullValue, /* 异常值 */
    isStringValue, isStringObject, isString, isEmptyString, valueOfString, /* 字符串 */
    isBooleanValue, isBooleanObject, isBoolean, valueOfBoolean, /* 布尔值 */
    isNumberValue, isNumberObject, isNumber, valueOfNumber, /* 数值 */
    isSymbol, isRegexp, isRegexpOk, /* Symbol 值 和 正则 */

    isFunction, isClass, isTargetClass, isObject,  /* 基础对象 和 类 判断 */
    isObjectLiteral, /* 对象字面量判断 */
    isTargetObject, isTargetObjectSet, isTargetObjectArray, isTargetObject2DArray,  /* 目标对象和数组判断 */
    isHtmlElement, isHtmlElementList,                             /* Html元素对象和数组判断 */

    objToMap, /* 将对象转 Map */
    genMap,   /* 快速生成一个 Map */
    copyObject, /* 复制一个对象 */
    mergeObject, /* 合并一个或者多个对象 */
    mergeObjectIgnoreCase, /* 合并一个或者多个对象，这里不区分键名的大小写。 */
    // 两个常量
    TO_LOWERCASE,
    TO_UPPERCASE
}