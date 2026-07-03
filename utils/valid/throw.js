/**
 * In my license, all codes can be shared free of charge. 
 * However, If my code is taken for commercial use, please maintain it yourself. 
 * I am not obligated to take responsibility for your business application.
 * Here is my email "pangdongcan@live.com"
 * 
 * Copyright © 2025 Micheal Pang. All rights reserved.
 * 
 * @file This file "throw.js" is part of project "pdc-js-framework" , which is belong to Michael Pang (It's Me).
 * @module utils/valid/throw
 * @author  Micheal Pang (Dongcan Pang)
 * @since  2025-08-12
 * @description  这是校验处理的基础模块 utils/valid/throw.js，它负责抛出异常
 */
"use strict"; // 这是严格模式下的 Javascript 代码

import { ParameterError, ClassCreationError } from "../../models/errors.js";
import * as du from "../datatype.js";
import { myToString } from "../string.js";

/**
 * 当满足 condition 这个条件时，将抛出一个异常。而 异常的类型 和 信息，将由你自己指定。
 * @param {boolean} condition 默认为 true 。当这个条件成立，抛出一个你指定的异常。
 * @param {string} errorInfo 默认为 '这是一条默认的异常信息，说明你抛出异常了'。 这是你指定的要抛出的异常类，对应的异常信息。（注意：需要是非空字符串）
 * @param {Error} errorType 默认为 Error。这是你指定的要抛出的异常类。
 * @throws 这里有2个抛异常的可能：1、本函数的参数校验不通过 抛 ParameterError。2、本函数按用户指定，抛出指定的 errorType 异常。
 */
function throwError(condition=true, errorInfo='这是一条默认的异常信息，说明你抛出异常了', errorType=Error){
    // 参数校验
    if(!du.isBoolean(condition)) 
        throw new ParameterError(`throwError 函数, 参数 condition=${myToString(condition)} 不是布尔型数据，请检查。`);
    if(!du.isString(errorInfo) || du.isEmptyString(errorInfo)) 
        throw new ParameterError(`throwError 函数, 参数 errorInfo=${myToString(errorInfo)} 不是非空字符串数据，请检查。`);
    if(!du.isTargetClass(errorType, Error)) 
        throw new ParameterError(`throwError 函数, 参数 errorType=${myToString(errorType)} 不是合法的异常类型，请检查。`);
    // 收集结果
    let tempCondition = du.valueOfBoolean(condition);
    let tempErrorInfo = du.valueOfString(errorInfo);
    // 根据条件值来判断，是否抛指定的异常
    if(tempCondition) throw new errorType(tempErrorInfo);
}

/**
 * 当满足 condition 这个条件时，将抛出一个 ParameterError 异常。而信息，将由你自己指定。
 * @param {boolean} condition 默认为 true 。当这个条件成立，抛出一个你指定的异常。
 * @param {string} errorInfo 默认为 '这是 throwParameterError 的默认异常信息，说明你抛出异常了'。 
 * @throws 这里有2个抛异常的可能：1、本函数、依赖函数的参数校验不通过 抛 ParameterError。2、本函数按用户指定，抛出 ParameterError 异常。
 */
function throwParameterError(condition=true, errorInfo='这是 throwParameterError 的默认异常信息，说明你抛出异常了'){
    throwError(condition, errorInfo, ParameterError);
}

/**
 * 当满足 condition 这个条件时，将抛出一个 ClassCreationError 异常。而 信息，将由你自己指定。
 * @param {boolean} condition 默认为 true 。当这个条件成立，抛出一个你指定的异常。
 * @param {string} errorInfo 默认为 '这是 throwCreationError 的默认异常信息，说明你抛出异常了'。 
 * 这是你指定的要抛出的异常类，对应的异常信息。（注意：需要是非空字符串）
 * @throws 这里有2个抛异常的可能：1、本函数、依赖函数的参数校验不通过 抛 ParameterError。2、本函数按用户指定，抛出 ClassCreationError 异常。
 */
function throwClassCreationError(condition=true, errorInfo='这是 throwCreationError 的默认异常信息，说明你抛出异常了'){
    throwError(condition, errorInfo, ClassCreationError);
}

/**
 * 当满足 condition 这个条件时，将抛出一个 ClassCreationError 异常。异常信息已经写好，只需要指定静态类的类名。
 * 注意：这个函数一般用于“静态类”的构造函数中。用于提示这个类，不能被 new 初始化
 * @param {boolean} condition 默认为 true 。当这个条件成立，抛出一个你指定的异常。
 * @param {class} functionOrClass 这个是类、函数。因为报错信息都是差不多的。所以，传递一个类、函数就可以。参数有 isClass 校验。
 * @throws 这里有2个抛异常的可能：1、本函数、依赖函数的参数校验不通过 抛 ParameterError。2、本函数按用户指定，抛出 ClassCreationError 异常。
 */
function throwCannotNewError(condition=true, functionOrClass){
    // 参数校验
    if(!du.isClass(functionOrClass)) 
        throw new ParameterError(`throwCannotNewError 函数，接收的参数 functionOrClass=${myToString(functionOrClass)} 不是一个类或者函数。`);
    // 设置异常类的信息
    let errorMessage = `请注意，${functionOrClass.name} 是一个静态类，它不能被直接实例化`;
    // 抛出一个 ClassCreationError 异常
    throwClassCreationError(condition, errorMessage);
}

/**
 * 导出公用内容
 */
export { throwError, throwParameterError, throwClassCreationError, throwCannotNewError }