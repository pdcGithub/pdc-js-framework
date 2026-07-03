/**
 * In my license, all codes can be shared free of charge. 
 * However, If my code is taken for commercial use, please maintain it yourself. 
 * I am not obligated to take responsibility for your business application.
 * Here is my email "pangdongcan@live.com"
 * 
 * Copyright © 2025 Micheal Pang. All rights reserved.
 * 
 * @file This file "auto.js" is part of project "pdc-js-framework" , which is belong to Michael Pang (It's Me).
 * @module utils/valid/auto
 * @author  Micheal Pang (Dongcan Pang)
 * @since  2025-08-12
 * @description  这个模块，主要用作参数自动化处理（参数自动校验，自动赋值）
 */
"use strict"; // 这是严格模式下的 Javascript 代码

// 导入外部依赖 datatype 模块。
import { copyObject, isBoolean, isEmptyString, isObjectLiteral, isString, valueOfBoolean, valueOfNumber, valueOfString } from "../datatype.js";
import { myToString } from "../string.js";

// 待测试函数
import { 
    valid2DArray, validArray, validBoolean, validHtmlElement, validHtmlElementList, 
    validNumber, validObjectLiteral, validRegExp, validString, validTargetObject, 
    validTargetObject2DArray, validTargetObjectArray, validTargetObjectSet 
} from "./verify.js";

// ========= 这里处理描述信息对象

/**
 * 这是描述信息对象的默认值。里面有3个属性：className, methodName, paramName 。它们的值都是 default 开头的字符串。
 * 注意：为了避免对象引用被修改，建议用 copyObject 来复制这个常量。
 */
const DESC_INFO_OBJ = { className:'default-class', methodName:'default-function', paramName:'default-param' };

/**
 * 这里是一个把描述信息对象 descInfoObj 转换为字符串的一个处理函数。
 * 它主要用于把 className、methodName、paramName 3个信息描述清楚，并整合为一个完整提示信息。
 * @param {object} descInfoObj 待处理对象。它应该是一个 对象字面量，包含需要特定3个信息 className、methodName、paramName。
 * @returns {string} 一个整合之后的字符串信息。
 */
function handleDescInfoObj(descInfoObj){
    // 定义一个返回结果
    let re = '';

    // 如果 descInfoObj 不是对象字面量，则设置为默认值。（这里不能直接赋值，因为其它操作，可能会把 DESC_INFO_OBJ 内部值修改）
    let tmpObj = isObjectLiteral(descInfoObj) ? descInfoObj : copyObject(DESC_INFO_OBJ);

    // 再提取值（非空字符串才提取）
    let tmpClassName = isString(tmpObj.className) && !isEmptyString(tmpObj.className) ? tmpObj.className : DESC_INFO_OBJ.className ;
    let tmpFuncName = isString(tmpObj.methodName) && !isEmptyString(tmpObj.methodName) ? tmpObj.methodName : DESC_INFO_OBJ.methodName ;
    let tmpParamName = isString(tmpObj.paramName) && !isEmptyString(tmpObj.paramName) ? tmpObj.paramName : DESC_INFO_OBJ.paramName ;

    // 处理
    re = `${myToString(tmpClassName)} - ${myToString(tmpFuncName)} - ${myToString(tmpParamName)}`;
    
    // 返回
    return re;
}

/**
 * 校验字符串类型的参数。如果不是字符串类型的参数，则抛出异常 VerificationError ；如果是字符串类型参数，则自动获取其值，并返回。
 * @param {*} param 待校验的参数
 * @param {boolean} canBeEmpty 是否可以为空字符串，默认为 true，可以为空字符串
 * @param {object} descInfoObj 它应该是一个 对象字面量，包含需要特定3个信息 className、methodName、paramName。默认的话是 default 开头的字符串。
 * @returns {string} 参数 param 的字符串值
 * @throws 如果参数 param 校验不通过，会抛出 VerificationError 异常。如果入参（指 param 和 descInfoObj 以外的参数）不符合数据类型要求，抛出 ParameterError 异常。
 */
function autoVnAofString(param, canBeEmpty=true, descInfoObj){

    // 先获取 canBeEmpty 的值，方便提示
    let canBeEmptyVal = isBoolean(canBeEmpty) ? valueOfBoolean(canBeEmpty) : true ;
    let canBeEmptyStr = canBeEmptyVal ? '字符串' : '非空字符串';

    // 先校验，如果抛出异常，后面是不会执行的。
    validString(param, `${handleDescInfoObj(descInfoObj)}=${myToString(param)} 参数异常, 它应该是一个 ${myToString(canBeEmptyStr)}}`, canBeEmpty);

    // 获取值
    return valueOfString(param);
}

/**
 * 校验数字值类型的参数。如果不是数字值类型的参数，则抛出异常 VerificationError ；如果是数字值类型参数，则自动获取其值，并返回。
 * @param {*} param 待校验的参数
 * @param {object} descInfoObj 它应该是一个 对象字面量，包含需要特定3个信息 className、methodName、paramName。默认的话是 default 开头的字符串。
 * @returns {number} 参数 param 的数字值
 * @throws 如果参数 param 校验不通过，会抛出 VerificationError 异常。如果入参（指 param 和 descInfoObj 以外的参数）不符合数据类型要求，抛出 ParameterError 异常。
 */
function autoVnAofNumber(param, descInfoObj){

    // 先校验，如果抛出异常，后面是不会执行的。
    validNumber(param, `${handleDescInfoObj(descInfoObj)}=${myToString(param)} 参数异常, 它应该是一个数字`);
    
    // 获取值
    return valueOfNumber(param);
}

/**
 * 校验布尔值类型的参数。如果不是布尔值类型的参数，则抛出异常 VerificationError ；如果是布尔值类型参数，则自动获取其值，并返回。
 * @param {*} param 待校验的参数
 * @param {object} descInfoObj 它应该是一个 对象字面量，包含需要特定3个信息 className、methodName、paramName。默认的话是 default 开头的字符串。
 * @returns {boolean} 参数 param 的布尔值
 * @throws 如果参数 param 校验不通过，会抛出 VerificationError 异常。如果入参（指 param 和 descInfoObj 以外的参数）不符合数据类型要求，抛出 ParameterError 异常。
 */
function autoVnAofBoolean(param, descInfoObj){
    
    // 先校验，如果抛出异常，后面是不会执行的。
    validBoolean(param, `${handleDescInfoObj(descInfoObj)}=${myToString(param)} 参数异常, 它应该是一个布尔值`);

    // 获取值
    return valueOfBoolean(param); 
}

/**
 * 校验 正则表达式 类型的参数。如果不是 正则表达式 类型的参数，则抛出异常 VerificationError ；如果是 正则表达式 类型参数，则自动获取其值，并返回。
 * @param {*} param 待校验的参数
 * @param {object} descInfoObj 它应该是一个 对象字面量，包含需要特定3个信息 className、methodName、paramName。默认的话是 default 开头的字符串。
 * @returns {RegExp} 参数 param 的 正则表达式 
 * @throws 如果参数 param 校验不通过，会抛出 VerificationError 异常。如果入参（指 param 和 descInfoObj 以外的参数）不符合数据类型要求，抛出 ParameterError 异常。
 */
function autoVnAofRegExp(param, descInfoObj){
    
    // 先校验，如果抛出异常，后面是不会执行的。
    validRegExp(param, `${handleDescInfoObj(descInfoObj)}=${myToString(param)} 参数异常, 它应该是一个 正则表达式 `);

    // 获取值
    return param;
}

/**
 * 校验Map ( 图 )类型的参数。如果不是Map ( 图 )类型的参数，则抛出异常 VerificationError ；如果是Map ( 图 )类型参数，则自动获取其值，并返回。
 * @param {*} param 待校验的参数
 * @param {object} descInfoObj 它应该是一个 对象字面量，包含需要特定3个信息 className、methodName、paramName。默认的话是 default 开头的字符串。
 * @returns {Map} 参数 param 的Map ( 图 )
 * @throws 如果参数 param 校验不通过，会抛出 VerificationError 异常。如果入参（指 param 和 descInfoObj 以外的参数）不符合数据类型要求，抛出 ParameterError 异常。
 */
function autoVnAofMap(param, descInfoObj){
    
    // 先校验，如果抛出异常，后面是不会执行的。
    validTargetObject(param, `${handleDescInfoObj(descInfoObj)}=${myToString(param)} 参数异常, 它应该是一个Map ( 图 )`, Map);

    // 获取值
    return param;
}

/**
 * 校验Set (集合) 类型的参数。如果不是Set (集合) 类型的参数，则抛出异常 VerificationError ；如果是Set (集合) 类型参数，则自动获取其值，并返回。
 * @param {*} param 待校验的参数
 * @param {object} descInfoObj 它应该是一个 对象字面量，包含需要特定3个信息 className、methodName、paramName。默认的话是 default 开头的字符串。
 * @returns {Set} 参数 param 的Set (集合) 
 * @throws 如果参数 param 校验不通过，会抛出 VerificationError 异常。如果入参（指 param 和 descInfoObj 以外的参数）不符合数据类型要求，抛出 ParameterError 异常。
 */
function autoVnAofSet(param, descInfoObj){
    
    // 先校验，如果抛出异常，后面是不会执行的。
    validTargetObject(param, `${handleDescInfoObj(descInfoObj)}=${myToString(param)} 参数异常, 它应该是一个Set (集合) `, Set);

    // 获取值
    return param;
}

/**
 * 校验Array (数组)类型的参数。如果不是Array (数组)类型的参数，则抛出异常 VerificationError ；如果是Array (数组)类型参数，则自动获取其值，并返回。
 * @param {*} param 待校验的参数
 * @param {object} descInfoObj 它应该是一个 对象字面量，包含需要特定3个信息 className、methodName、paramName。默认的话是 default 开头的字符串。
 * @returns {Array} 参数 param 的Array (数组)
 * @throws 如果参数 param 校验不通过，会抛出 VerificationError 异常。如果入参（指 param 和 descInfoObj 以外的参数）不符合数据类型要求，抛出 ParameterError 异常。
 */
function autoVnAofArray(param, descInfoObj){

    // 先校验，如果抛出异常，后面是不会执行的。
    validArray(param, `${handleDescInfoObj(descInfoObj)}=${myToString(param)} 参数异常, 它应该是一个Array (数组)`);

    // 获取值
    return param;
}

/**
 * 校验2D Array (二维数组)类型的参数。如果不是2D Array (二维数组)类型的参数，则抛出异常 VerificationError ；如果是2D Array (二维数组)类型参数，则自动获取其值，并返回。
 * @param {*} param 待校验的参数
 * @param {object} descInfoObj 它应该是一个 对象字面量，包含需要特定3个信息 className、methodName、paramName。默认的话是 default 开头的字符串。
 * @returns {Array<Array<object>>} 参数 param 的2D Array (二维数组)
 * @throws 如果参数 param 校验不通过，会抛出 VerificationError 异常。如果入参（指 param 和 descInfoObj 以外的参数）不符合数据类型要求，抛出 ParameterError 异常。
 */
function autoVnAof2DArray(param, descInfoObj){

    // 先校验，如果抛出异常，后面是不会执行的。
    valid2DArray(param, `${handleDescInfoObj(descInfoObj)}=${myToString(param)} 参数异常, 它应该是一个2D Array (二维数组)`);

    // 获取值
    return param;
}

/**
 * 校验 对象字面量 类型的参数。如果不是 对象字面量 类型的参数，则抛出异常 VerificationError ；如果是 对象字面量 类型参数，则自动获取其值，并返回。
 * @param {*} param 待校验的参数
 * @param {boolean} canBeUndefined 是否可以为 undefined ，默认 false 不可以 。
 * @param {object} descInfoObj 它应该是一个 对象字面量，包含需要特定3个信息 className、methodName、paramName。默认的话是 default 开头的字符串。
 * @returns {object} 参数 param 的 对象字面量
 * @throws 如果参数 param 校验不通过，会抛出 VerificationError 异常。如果入参（指 param 和 descInfoObj 以外的参数）不符合数据类型要求，抛出 ParameterError 异常。
 */
function autoVnAofObjectLiteral(param, canBeUndefined=false, descInfoObj){
    
    // 先校验，如果抛出异常，后面是不会执行的。
    validObjectLiteral(param, `${handleDescInfoObj(descInfoObj)}=${myToString(param)} 参数异常, 它应该是一个 对象字面量。比如：{'a':1, 'b':2}`, canBeUndefined);

    // 获取值
    return param;
}

/**
 * 校验 指定 类型的参数。如果不是 参数不是自定的类型与指定的类型不同，则抛出异常 VerificationError ；如果是 符合 指定的类型，则自动获取其值，并返回。
 * @param {*} param 待校验的参数
 * @param {object} descInfoObj 它应该是一个 对象字面量，包含需要特定3个信息 className、methodName、paramName。默认的话是 default 开头的字符串。
 * @param  {...class} targetType 指定的数据类型（不定参数）。比如：String, Number, Boolean 等等。需要是类型
 * @returns {object} 参数 param 的 具体类型值
 * @throws 如果参数 param 校验不通过，会抛出 VerificationError 异常。如果入参（指 param 和 descInfoObj 以外的参数）不符合数据类型要求，抛出 ParameterError 异常。
 */
function autoVnAofTargetObject(param, descInfoObj, ...targetType){
    
    // 先校验，如果抛出异常，后面是不会执行的。
    validTargetObject(param, `${handleDescInfoObj(descInfoObj)}=${myToString(param)} 参数异常, 它应该是 targetType 所指定的类型中的一个`, ...targetType);
    
    // 获取值
    return param;
}

/**
 * 校验 Set 集合 以及其内部的 元素 类型。如果不是 Set 集合 或者 Set 集合内部元素不在指定的类型中，则抛出异常 VerificationError ；否则，则自动获取其值，并返回。
 * @param {*} param 待校验的参数
 * @param {object} descInfoObj 它应该是一个 对象字面量，包含需要特定3个信息 className、methodName、paramName。默认的话是 default 开头的字符串。
 * @param  {...class} targetType 定的数据类型（不定参数）。比如：String, Number, Boolean 等等。需要是类型
 * @returns {Set} 参数 param 的 具体类型值
 * @throws 如果参数 param 校验不通过，会抛出 VerificationError 异常。如果入参（指 param 和 descInfoObj 以外的参数）不符合数据类型要求，抛出 ParameterError 异常。
 */
function autoVnAofTargetObjectSet(param, descInfoObj, ...targetType){
    
    // 先校验，如果抛出异常，后面是不会执行的。
    validTargetObjectSet(param, `${handleDescInfoObj(descInfoObj)}=${myToString(param)} 参数异常, 它应该是一个 Set, 并且 内部元素 是 targetType 所指定的类型中的一个`, ...targetType);
    
    // 获取值
    return param;
}

/**
 * 校验 Array 数组 以及其内部的 元素 类型。如果不是 Array 数组 或者 Array 数组内部元素不在指定的类型中，则抛出异常 VerificationError ；否则，则自动获取其值，并返回。
 * @param {*} param 待校验的参数
 * @param {object} descInfoObj 它应该是一个 对象字面量，包含需要特定3个信息 className、methodName、paramName。默认的话是 default 开头的字符串。
 * @param  {...class} targetType 定的数据类型（不定参数）。比如：String, Number, Boolean 等等。需要是类型
 * @returns {Array} 参数 param 的 具体类型值
 * @throws 如果参数 param 校验不通过，会抛出 VerificationError 异常。如果入参（指 param 和 descInfoObj 以外的参数）不符合数据类型要求，抛出 ParameterError 异常。
 */
function autoVnAofTargetObjectArray(param, descInfoObj, ...targetType){
    
    // 先校验，如果抛出异常，后面是不会执行的。
    validTargetObjectArray(param, `${handleDescInfoObj(descInfoObj)}=${myToString(param)} 参数异常, 它应该是一个 Array, 并且 内部元素 是 targetType 所指定的类型中的一个`, ...targetType);
    
    // 获取值
    return param;
}

/**
 * 校验 Array 二维数组 以及其内部的 元素 类型。如果不是 Array 二维数组 或者 Array 二维数组内部元素不在指定的类型中，则抛出异常 VerificationError ；否则，则自动获取其值，并返回。
 * @param {*} param 待校验的参数
 * @param {object} descInfoObj 它应该是一个 对象字面量，包含需要特定3个信息 className、methodName、paramName。默认的话是 default 开头的字符串。
 * @param  {...class} targetType 定的数据类型（不定参数）。比如：String, Number, Boolean 等等。需要是类型
 * @returns {Array<Array<object>>} 参数 param 的 具体类型值
 * @throws 如果参数 param 校验不通过，会抛出 VerificationError 异常。如果入参（指 param 和 descInfoObj 以外的参数）不符合数据类型要求，抛出 ParameterError 异常。
 */
function autoVnAofTargetObject2DArray(param, descInfoObj, ...targetType){
    
    // 先校验，如果抛出异常，后面是不会执行的。
    validTargetObject2DArray(param, `${handleDescInfoObj(descInfoObj)}=${myToString(param)} 参数异常, 它应该是一个 二维数组, 并且 内部元素 是 targetType 所指定的类型中的一个`, ...targetType);
    
    // 获取值
    return param;
}

/**
 * 校验 Html 元素 类型的参数。如果不是 Html 元素 类型的参数，则抛出异常 VerificationError ；如果是 Html 元素 类型参数，则自动获取其值，并返回。
 * @param {*} param 待校验的参数
 * @param {object} descInfoObj 它应该是一个 对象字面量，包含需要特定3个信息 className、methodName、paramName。默认的话是 default 开头的字符串。
 * @returns {HTMLElement} 参数 param 的 具体类型值
 * @throws 如果参数 param 校验不通过，会抛出 VerificationError 异常。如果入参（指 param 和 descInfoObj 以外的参数）不符合数据类型要求，抛出 ParameterError 异常。
 */
function autoVnAofHtmlElement(param, descInfoObj){
    
    // 先校验，如果抛出异常，后面是不会执行的。
    validHtmlElement(param, `${handleDescInfoObj(descInfoObj)}=${myToString(param)} 参数异常, 它应该是一个 Html 元素对象`);

    // 获取值
    return param;
}

/**
 * 校验 html 元素 集合对象 ( HTMLCollection 或者 NodeList )类型的参数。如果不是 html 元素 集合对象 ( HTMLCollection 或者 NodeList )类型的参数，则抛出异常 VerificationError ；如果是html 元素 集合对象 ( HTMLCollection 或者 NodeList )类型参数，则自动获取其值，并返回。
 * @param {*} param 待校验的参数
 * @param {object} descInfoObj 它应该是一个 对象字面量，包含需要特定3个信息 className、methodName、paramName。默认的话是 default 开头的字符串。
 * @returns {HTMLCollection|NodeList} 参数 param 的 具体类型值
 * @throws 如果参数 param 校验不通过，会抛出 VerificationError 异常。如果入参（指 param 和 descInfoObj 以外的参数）不符合数据类型要求，抛出 ParameterError 异常。
 */
function autoVnAofHtmlElementList(param, descInfoObj){
    
    // 先校验，如果抛出异常，后面是不会执行的。
    validHtmlElementList(param, `${handleDescInfoObj(descInfoObj)}=${myToString(param)} 参数异常, 它应该是一个 html 元素 集合对象 ( HTMLCollection 或者 NodeList )`);
    
    // 获取值
    return param;
}

/**
 * 导出公用内容
 */
export {
    //
    DESC_INFO_OBJ, handleDescInfoObj,
    //
    autoVnAofString, autoVnAofNumber, autoVnAofBoolean, autoVnAofRegExp,
    autoVnAofMap, autoVnAofSet, 
    autoVnAofArray, autoVnAof2DArray,
    autoVnAofObjectLiteral, autoVnAofTargetObject, autoVnAofTargetObjectSet, autoVnAofTargetObjectArray, autoVnAofTargetObject2DArray,
    autoVnAofHtmlElement, autoVnAofHtmlElementList
}