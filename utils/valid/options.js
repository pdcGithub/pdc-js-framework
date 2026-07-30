/**
 * In my license, all codes can be shared free of charge. 
 * However, If my code is taken for commercial use, please maintain it yourself. 
 * I am not obligated to take responsibility for your business application.
 * Here is my email "pangdongcan@live.com"
 * 
 * Copyright © 2026 Micheal Pang. All rights reserved.
 * 
 * @file This file "options.js" is part of project "pdc-js-framework" , which is belong to Michael Pang (It's Me).
 * @module utils/valid/options
 * @author Micheal Pang (Dongcan Pang)
 * @since 2026-07-28
 * @description 这里是关于一个 关于数据验证的通用处理 模块。主要处理批量的数据验证。
 */
"use strict"; // 这是严格模式下的 Javascript 代码

import { VerificationError } from "../../models/errors.js";
import { 
    isArray, isBoolean, isNullValue, isString, isEmptyString, 
    valueOfBoolean, valueOfString, valueOfNumber, isSymbol, 
    isClass, isSet, isMap, 
    is2DArray,
    isEmptySet,
    isEmptyArray,
    isEmpty2DArray,
    isEmptyMap
} from "../datatype.js";
import { mystdout } from "../string.js";
import { throwError, throwParameterError } from "./throw.js";
import { 
    valid2DArray, validArray, validBoolean, validClass, validFunction, 
    validHtmlElement, validHtmlElementList, validNumber, validObject, validObjectLiteral, 
    validRegExp, validString, validTargetObject, 
    validTargetObject2DArray, 
    validTargetObjectArray, 
    validTargetObjectSet
} from "./verify.js";

/**
 * 常量：这是待检测的数据，所对应的类型信息。在数据处理时，会根据这个信息进行不同的处理
 */
const VDATA_TYPE = {
    /**
     * null 数据。一般指：undefined、null、NaN
     */
    null:'NULL', 
    /**
     * 字符串型数据
     */
    string:'STRING', 
    /**
     * 数字型数据
     */
    number:'NUMBER', 
    /**
     * 布尔型数据
     */
    boolean:'BOOLEAN', 
    /**
     * Symbol 型数据
     */
    symbol:'SYMBOL',
    /**
     * 函数型数据
     **/ 
    func:'FUNCTION',
    /**
     * 类型数据
     **/ 
    cls:'CLASS', 
    /**
     * 数组型数据
     */
    array:'ARRAY', 
    /**
     * 二维数组型数据
     */
    array2d:'2DARRAY', 
    /**
     * Set 类型数据
     */
    set:'SET',
    /**
     * Map 类型数据
     */
    map:'MAP',
    /**
     * 正则类型数据
     */
    regexp:'REGEXP',
    /**
     * 对象字面量型数据。一般指 {} 形式的写法
     */
    objectliteral:'OBJECTLITERAL',
    /**
     * 对象型数据
     */
    object:'OBJECT',
    /**
     * HTML Element 型数据。一般指 HtmlDivElement 等等这些
     */
    htmlElem:'HTMLELEMENT',
    /**
     * HTML Element 集合型数据。一般指 NodeList 或者 HtmlCollection 等等
     */
    htmlElemList:'HTMLELEMENTLIST',
    /**
     * 指定类型范围内的对象
     */
    targetObj:'TARGETOBJ',
    /**
     * 内部元素，在指定类型范围内的Set对象
     */
    targetObjSet:'TARGETOBJSET',
    /**
     * 内部元素，在指定类型范围内的数组对象
     */
    targetObjArray:'TARGETOBJARRAY',
    /**
     * 内部元素，在指定类型范围内的二维数组对象
     */
    targetObj2DArray:'TARGETOBJ2DARRAY'
}

/**
 * 根据传入的数据类型字符串，判断待处理的参数，是否符合类型要求。
 * @param {*} pValue 待处理参数
 * @param {string} inType 数据类型字符串。非空字符串。参考：VDATA_TYPE 常量。如果不在指定的字符串范围内，会抛 ParameterError 异常。默认：VDATA_TYPE.string
 * @param {string} inErrorInfo 非空字符串。如果不符合数据类型要求，则抛出这个字符信息。默认：'测试'
 * @param {boolean} inCanBeEmpty 数据是否可以为空。对于字符串，指空字符串。对于数组、Set、Map，指是否可以为空数组、空Set、空Map。默认：false
 * @param {Array<Class>} inTargetTypeArr 如果是 target 开头的数据类型，可以指定一个类型数组，用于判断内部数据是否与数组内部信息符合。默认：[]
 * @throws 对于抛出异常有2种：
 * 第一种，是 ParameterError 这个函数、依赖函数等等，本身的参数异常导致抛出；第二种，是 VerificationError 业务上的校验异常。
 * @returns 如果是 string, boolean, number类型，则返回对应的值；如果是其它，则返回参数本身。
 */
function validSingleType(pValue, inType=VDATA_TYPE.string, inErrorInfo='测试', inCanBeEmpty=false, inTargetTypeArr=[]){

    // 先做一个参数类型测试。本函数的参数异常，抛出 ParameterError 。如果是后续校验异常，抛出 VerificationError 。
    throwParameterError(
        !isString(inErrorInfo) || isEmptyString(inErrorInfo), 
        mystdout`函数 ${validSingleType} 检测到入参 inErrorInfo=${inErrorInfo} 不是非空字符串。`);
    throwParameterError(
        !Object.values(VDATA_TYPE).includes(inType), 
        mystdout`函数 ${validSingleType} 检测到入参 inType=${inType} 不在规定范围 ${Object.values(VDATA_TYPE)} 内。`);
    throwParameterError(
        !isBoolean(inCanBeEmpty), 
        mystdout`函数 ${validSingleType} 检测到入参 inCanBeEmpty=${inCanBeEmpty} 不是布尔值。`);
    throwParameterError(
        !isArray(inTargetTypeArr),
        mystdout`函数 ${validSingleType} 检测到入参 inTargetTypeArr=${inTargetTypeArr} 不是数组。`);
    // 这里检查 targetType 信息是否填写。
    // 因为，在校验有数据类型要求的 数组、Set、Object 等等，都需要依据这个 targetType 来处理。
    if([VDATA_TYPE.targetObj, VDATA_TYPE.targetObjSet, VDATA_TYPE.targetObjArray, VDATA_TYPE.targetObj2DArray].includes(inType)){
        // 类型数组的长度
        let typeCount = inTargetTypeArr.length;
        // 类型数组中，不是类型的内容长度
        let notClsCount = inTargetTypeArr.filter(value=>!isClass(value)).length;
        // 没有内容 或者 有不是类型的内容，抛异常
        throwParameterError(
            typeCount<=0 || notClsCount>0,
            mystdout`函数 ${validSingleType} 检测到入参 inTargetTypeArr=${inTargetTypeArr} 长度为 0 或者 有非类型内容。`);
    }

    // 获取 布尔对象的值
    let canBeEmpty = valueOfBoolean(inCanBeEmpty);
    // 获取 异常信息
    let errorInfo = valueOfString(inErrorInfo);

    // 定义一个返回值
    let re = pValue;

    // ========= 开始根据类型自动处理
    // 
    // 这里是null判断，如果为 null、undefined、NaN，则校验通过，并返回一个 null。
    if(inType===VDATA_TYPE.null) throwError(!isNullValue(pValue), errorInfo, VerificationError);

    // 这里是判断，字符串。注意处理 canBeEmpty
    if(inType===VDATA_TYPE.string){ validString(pValue, errorInfo, canBeEmpty); re = valueOfString(pValue);}

    // 这里是判断，数字
    if(inType===VDATA_TYPE.number){ validNumber(pValue, errorInfo); re = valueOfNumber(pValue);}

    // 这里是判断，布尔值
    if(inType===VDATA_TYPE.boolean){ validBoolean(pValue, errorInfo); re = valueOfBoolean(pValue);}

    // 这里是判断，Symbol 类型
    if(inType===VDATA_TYPE.symbol) throwError(!isSymbol(pValue), errorInfo, VerificationError);
    
    // 这里是判断，函数
    if(inType===VDATA_TYPE.func) validFunction(pValue, errorInfo);

    // 这里是判断，类
    if(inType===VDATA_TYPE.cls) validClass(pValue, errorInfo);

    // 这里是判断，正则表达式或者对象
    if(inType===VDATA_TYPE.regexp) validRegExp(pValue, errorInfo);

    // 这里是判断，数组。注意处理 canBeEmpty
    if(inType===VDATA_TYPE.array) {
        // 先校验一次，因为函数不区分是否可以为空数组
        validArray(pValue, errorInfo);
        // 如果通过了校验，那么处理 是否可以为空数组
        throwError(!canBeEmpty && isEmptyArray(pValue), errorInfo, VerificationError);
    }

    // 这里是判断，二维数组。注意处理 canBeEmpty
    if(inType===VDATA_TYPE.array2d) {
        // 先校验一次，因为函数不区分是否可以为空2d数组
        valid2DArray(pValue, errorInfo);
        // 如果通过了校验，那么处理 是否可以为空2d数组
        throwError(!canBeEmpty && isEmpty2DArray(pValue), errorInfo, VerificationError);
    }

    // 这里是判断，Set 集合。注意处理 canBeEmpty
    if(inType===VDATA_TYPE.set) {
        // 先校验一次，因为函数不区分是否可以为空Set
        throwError(!isSet(pValue), errorInfo, VerificationError);
        // 如果通过了校验，那么处理 是否可以为空Set
        throwError(!canBeEmpty && isEmptySet(pValue), errorInfo, VerificationError);
    }

    // 这里是判断，Map 图。注意处理 canBeEmpty
    if(inType===VDATA_TYPE.map) { 
        // 先校验一次，因为函数不区分是否可以为空Map
        throwError(!isMap(pValue), errorInfo, VerificationError);
        // 如果通过了校验，那么处理 是否可以为空Map
        throwError(!canBeEmpty && isEmptyMap(pValue), errorInfo, VerificationError);
    }

    // 这里是判断，对象字面量。对于 字面量来说，canBeEmpty 判断的是 是否可以为 undefined
    if(inType===VDATA_TYPE.objectliteral) validObjectLiteral(pValue, errorInfo, canBeEmpty);

    // 这里是判断，对象
    if(inType===VDATA_TYPE.object) validObject(pValue, errorInfo);

    // 这里是判断，HTML Element 对象
    if(inType===VDATA_TYPE.htmlElem) validHtmlElement(pValue, errorInfo);

    // 这里是判断，HTML Element List 对象
    if(inType===VDATA_TYPE.htmlElemList) validHtmlElementList(pValue, errorInfo);
    
    // 这里是判断，是否指定对象
    if(inType===VDATA_TYPE.targetObj) validTargetObject(pValue, errorInfo, ...inTargetTypeArr);

    // 这里是判断，是否指定对象集合。注意处理 canBeEmpty
    if(inType===VDATA_TYPE.targetObjSet){
        // 如果可以为空Set，且为空Set，则不需要检测。否则需要 valid 检测。
        if(!(canBeEmpty && isEmptySet(pValue))) validTargetObjectSet(pValue, errorInfo, ...inTargetTypeArr);
    }
    // 这里是判断，是否指定对象数组。注意处理 canBeEmpty
    if(inType===VDATA_TYPE.targetObjArray){
        // 如果可以为空Array，且为空Array，则不需要检测。否则需要 valid 检测。
        if(!(canBeEmpty && isEmptyArray(pValue))) validTargetObjectArray(pValue, errorInfo, ...inTargetTypeArr);

    }
    // 这里是判断，是否指定对象二维数组。注意处理 canBeEmpty
    if(inType===VDATA_TYPE.targetObj2DArray){
        // 如果可以为空2dArray，且为空2dArray，则不需要检测。否则需要 valid 检测。
        if(!(canBeEmpty && isEmpty2DArray(pValue))) validTargetObject2DArray(pValue, errorInfo, ...inTargetTypeArr);
    }

    // 这里是默认的处理。
    return re;
}

function validTypes(pValue, inType=[VDATA_TYPE.string], inErrorInfo='测试', inCanBeEmpty=false, inTargetTypeArr=[]){

}

function validOptions(){

}

export {
    VDATA_TYPE,

    validSingleType
}