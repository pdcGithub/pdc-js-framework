/**
 * In my license, all codes can be shared free of charge. 
 * However, If my code is taken for commercial use, please maintain it yourself. 
 * I am not obligated to take responsibility for your business application.
 * Here is my email "pangdongcan@live.com"
 * 
 * Copyright © 2025 Micheal Pang. All rights reserved.
 * 
 * @file This file "valid.js" is part of project "pdc-js-framework" , which is belong to Michael Pang (It's Me).
 * @module utils/valid
 * @author  Micheal Pang (Dongcan Pang)
 * @createDate  2025-08-12
 * @description  这是一个用于校验信息的模块，它附带一些处理
 * （注意：请不要直接调用这个模块下面的子模块，因为它们可能修改路径。使用时，请统一导入本模块。）
 */
"use strict"; // 这是严格模式下的 Javascript 代码

import {
    throwError, throwParameterError, throwClassCreationError, throwCannotNewError
} from "./valid/throw.js";

import { 
    validString, validBoolean, validNumber, validRegExp, validFunction, validClass,
    validTargetClass, validObject, validArray, valid2DArray, validObjectLiteral, 
    validTargetObject, validTargetObjectSet, validTargetObjectArray, validTargetObject2DArray,
    validHtmlElement, validHtmlElementList
} from "./valid/verify.js";

import {
    //
    DESC_INFO_OBJ, handleDescInfoObj,
    //
    autoVnAofString, autoVnAofNumber, autoVnAofBoolean, autoVnAofRegExp,
    autoVnAofMap, autoVnAofSet, 
    autoVnAofArray, autoVnAof2DArray,
    autoVnAofObjectLiteral, autoVnAofTargetObject, autoVnAofTargetObjectSet, autoVnAofTargetObjectArray, autoVnAofTargetObject2DArray,
    autoVnAofHtmlElement, autoVnAofHtmlElementList
} from "./valid/auto.js";

// 把子模块的内容全部导出。在使用上这里是一个对外接口模块。因为内容太多不好管理，分开实现再统一导出。
export {
    // 基础的异常抛出处理
    throwError, throwParameterError, throwClassCreationError, throwCannotNewError,
    // 对于各种类型的数据，进行数据校验
    validString, validBoolean, validNumber, validRegExp, validFunction, validClass,
    validTargetClass, validObject, validArray, valid2DArray, validObjectLiteral, 
    validTargetObject, validTargetObjectSet, validTargetObjectArray, validTargetObject2DArray,
    validHtmlElement, validHtmlElementList,
    // 对于各种类型的数据，进行校验的同时，还可以把处理好的值返回。
    DESC_INFO_OBJ, handleDescInfoObj,
    autoVnAofString, autoVnAofNumber, autoVnAofBoolean, autoVnAofRegExp,
    autoVnAofMap, autoVnAofSet, 
    autoVnAofArray, autoVnAof2DArray,
    autoVnAofObjectLiteral, autoVnAofTargetObject, autoVnAofTargetObjectSet, autoVnAofTargetObjectArray, autoVnAofTargetObject2DArray,
    autoVnAofHtmlElement, autoVnAofHtmlElementList
}