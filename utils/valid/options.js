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

import { ParameterError, VerificationError } from "../../models/errors.js";
import { 
    isArray, isBoolean, isNullValue, isString, isEmptyString, 
    valueOfBoolean, valueOfString, valueOfNumber, isSymbol, 
    isClass, isSet, isMap, 
    is2DArray,
    isEmptySet,
    isEmptyArray,
    isEmpty2DArray,
    isEmptyMap,
    isObjectLiteral
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
 * @param {string} inErrorInfo 校验异常时，需要抛出的异常信息字符串。默认：'测试'。非空字符串
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

/**
 * 根据传入的数据类型字符串，判断待处理的参数，是否符合类型要求。
 * 
 * 注意：这里跟 validSingleType 有一点点不一样。这里的 inType 可以是 `VDATA_TYPE` 字符串，也可以是数组形式。
 * 因为有些参数，它可以为几种数据类型。这时候，只要有一个数据类型描述符合，就可以通过校验。所以，用数组来编写指定的数据类型信息。
 * @param {*} pValue 待处理参数
 * @param {string|Array<string>} inType 数据类型字符串 或者 数据类型字符串数组。参考：`VDATA_TYPE` 常量。如果不在指定的字符串范围内，会抛 ParameterError 异常。默认：`[VDATA_TYPE.string]` 数组
 * @param {string} inErrorInfo 校验异常时，需要抛出的异常信息字符串。默认：'测试'。非空字符串
 * @param {boolean} inCanBeEmpty 数据是否可以为空。对于字符串，指空字符串。对于数组、Set、Map，指是否可以为空数组、空Set、空Map。默认：false
 * @param {Array<Class>} inTargetTypeArr 如果是 target 开头的数据类型，可以指定一个类型数组，用于判断内部数据是否与数组内部信息符合。默认：[]
 * @throws 对于抛出异常有2种：
 * 第一种，是 ParameterError 这个函数、依赖函数等等，本身的参数异常导致抛出；第二种，是 VerificationError 业务上的校验异常。
 * @returns 如果是 string, boolean, number类型，则返回对应的值；如果是其它，则返回参数本身。
 */
function validMultiTypes(pValue, inType=[VDATA_TYPE.string], inErrorInfo='测试', inCanBeEmpty=false, inTargetTypeArr=[]){

    // ===================== 首先，进行参数校验。如果不通过抛 ParameterError 
    
    // 获取合规的 VDATA_TYPE 信息数组（因为多出用到，所以前提处理下）
    let vDataTypeValues = Object.values(VDATA_TYPE);

    // inType 
    if(isString(inType)){
        // 校验类型字符串
        throwParameterError(
            !vDataTypeValues.includes(inType), 
            mystdout`函数 ${validMultiTypes} 检测到入参 inType=${inType} 不在规定范围 ${vDataTypeValues} 内。`);

    }else if(isArray(inType)){
        // 如果数组为空，则抛异常。因为类型必须指定，不能为空。
        // 检测类型数组的内容。如果有一个不是 VDATA_TYPE 的内容，就抛异常。
        throwParameterError(
            inType.length<=0 || inType.filter(value=>!vDataTypeValues.includes(value)).length>0,
            mystdout`函数 ${validMultiTypes} 检测到入参 inType=${inType} 内部为空，或者有部分内容不在规定范围 ${vDataTypeValues} 内。`);

    }else{
        // 不是字符串、也不是数组，则直接抛异常，它不合规
        throwParameterError(true, mystdout`函数 ${validMultiTypes} 检测到入参 inType=${inType} 既不是指定字符串，也不是指定的字符串数组，不符合参数要求。`);
    }

    // inErrorInfo
    throwParameterError(
        !isString(inErrorInfo) || isEmptyString(inErrorInfo), 
        mystdout`函数 ${validMultiTypes} 检测到入参 inErrorInfo=${inErrorInfo} 不是非空字符串。`);

    // inCanBeEmpty
    throwParameterError(
        !isBoolean(inCanBeEmpty), 
        mystdout`函数 ${validMultiTypes} 检测到入参 inCanBeEmpty=${inCanBeEmpty} 不是布尔值。`);
    
    // inTargetTypeArr
    throwParameterError(
        !isArray(inTargetTypeArr),
        mystdout`函数 ${validMultiTypes} 检测到入参 inTargetTypeArr=${inTargetTypeArr} 不是数组。`);

    // 校验结束，赋值处理（因为下面的 inTargetTypeArr 需要用到）
    let myTypes = [];
    if(isString(inType)) myTypes.push(valueOfString(inType));
    if(isArray(inType)) inType.forEach(value=>{ myTypes.push(valueOfString(value)); });
    let myErrorInfo = valueOfString(inErrorInfo);
    let myCanBeEmpty = valueOfBoolean(inCanBeEmpty);

    // inTargetTypeArr（这个数据类型数组，不是必填的。只在有数据类型要求的 数组、Set、Object 判断时需要）
    // 另外，这里的 myTypes 是一个数组，它里面有一个是 target 类型，就要判断
    let targeTypeArr = [VDATA_TYPE.targetObj, VDATA_TYPE.targetObjSet, VDATA_TYPE.targetObjArray, VDATA_TYPE.targetObj2DArray];
    let hasTargetType = myTypes.filter(value=>targeTypeArr.includes(value)).length>0;
    if(hasTargetType){
        // 类型数组的长度
        let typeCount = inTargetTypeArr.length;
        // 类型数组中，不是类型的内容长度
        let notClsCount = inTargetTypeArr.filter(value=>!isClass(value)).length;
        // 没有内容 或者 有不是类型的内容，抛异常
        throwParameterError(
            typeCount<=0 || notClsCount>0,
            mystdout`函数 ${validMultiTypes} 检测到入参 inTargetTypeArr=${inTargetTypeArr} 长度为 0 或者 有非类型内容。`);
    }

    // 处理 inTargetTypeArr 赋值
    let myTargetTypes = [...inTargetTypeArr];

    // ==================== 开始循环 valid 。只要有一个 ok 则 ok。如果产生 ParameterError ，则需要抛出到外部。
    
    // 定义一个异常数组，用来存储抛出的异常。
    let myThrErrors = [];
    // 定义一个结果数组，用来存储返回的结果。
    let myThrResults = [];
    // 循环执行校验，并储存对应的结果 和 异常。（这里循环多少次，取决于传入的 inType 有多少种类型）
    for(let i=0;i<myTypes.length;i++){
        let tmpResult = undefined;
        let tmpError = undefined;
        try{
            // 如果这里不抛异常，他会接收到一个值 或者 对象引用
            tmpResult = validSingleType(pValue, myTypes[i], myErrorInfo, myCanBeEmpty, myTargetTypes);
        }catch(err){
            if(err instanceof VerificationError) {
                // 如果是校验异常，应该存储
                tmpError = err; 
            }else{
                // 如果是 ParameterError ，或者其它异常，那代表写错了代码，需要提示。请直接抛出。
                throw err ;
            }
        }
        // 不管是否抛异常，这里都是要存的。
        myThrResults.push(tmpResult);
        myThrErrors.push(tmpError);
    }

    // 先检查存储结果的数组是否正常
    // 有多少个类型，就有多少个结果 和 异常信息
    // 有问题则抛出 ParameterError
    throwParameterError(
        myTypes.length!==myThrErrors.length || myTypes.length!==myThrResults.length, 
        mystdout`函数 ${validMultiTypes} 检测到处理结果不匹配。myTypes=${myTypes}, myThrResults=${myThrResults}, myThrErrors=${myThrErrors}`);
    
    // 这里根据 数组内的结果来判断（这里有多少个结果，取决于传入的 inType 有多少种类型。每一个类型，对应定一个结果）
    // 一般来说，传入的 inType 就一个。如果有多个，只要一个合格就合格。
    // 所以，这里只需要找到一个 合格的结果，就可以返回了。
    let resultIndex = myThrErrors.findIndex(value=>value===undefined);
    
    // ==================== 返回结果
    if(resultIndex<0){
        // 如果找不到合格的结果，则全部类型的检测结果为 不合规，抛出异常提示 VerificationError。取第一个不合格的信息
        throw myThrErrors[0];
    }else{
        // 有一个合格，则返回这个合格的值
        return myThrResults[resultIndex];
    }

}

/**
 * 这函数的主要作用是：检测单个配置信息对象是否填写正确。它有4个参数，按照实际情况填写就可以了。
 * 其中，value, type 是必填的。canBeEmpty 和 targetTypes 是选填的。具体描述，参考下面的 example 信息
 * 
 * @param {object} [config] 校验用的配置对象。一般用 {} 对象字面量的写法。注意：这里没有默认值。
 * @param {*} [config.value] 必填 -- 待校验的参数值 ;
 * @param {string} [config.type] 必填 -- 数据类型字符串 或者 数据类型字符串数组。参考：`VDATA_TYPE` 常量 ;
 * @param {boolean} [config.canBeEmpty] 选填 -- 数据是否可以为空。对于字符串，指空字符串。对于数组、Set、Map，指是否可以为空数组、空Set、空Map。默认：false ;
 * @param {Array<Class>} [config.targetTypes] 选填 -- 如果 type 是 `VDATA_TYPE` 常量中 target 开头的数据类型，指定一个类型数组。它用于判断内部数据是否与数组内部信息符合。默认：[] ;
 * @throws 如果校验通过则不做任何处理；否则，抛出 ParameterError 。这个 ParameterError 可能有2种类型：本函数的参数异常，或者 调用的函数内部参数异常。
 * 
 * @example
 * // 在详细配置内部，有以下的几个固定属性：
 * let config = { value:param1, type:VDATA_TYPE.string, canBeEmpty:false, targetTypes:[] };
 * 
 */
function checkSingleConfig(config){

    // 首先检查，入参是否为一个对象字面量 或者 普通的 Object 对象。
    throwParameterError(!isObjectLiteral(config), mystdout`函数 ${checkSingleConfig} 检测到 config=${config} 不是对象字面量 或者 普通Object对象。`);

    // 获取当前这个对象的 key 名数组。
    let keys = Object.keys(config);

    // 然后检查，4个参数是否都填写清楚。
    // value，必填
    throwParameterError(!keys.includes('value'), mystdout`函数 ${checkSingleConfig} 检测到 config 中缺少 value 配置信息。传入的对象 键名=${keys}`);
    // type，必填，且需要校验内容
    throwParameterError(!keys.includes('type'), mystdout`函数 ${checkSingleConfig} 检测到 config 中缺少 type 配置信息。传入的对象 键名=${keys}`);
    let tmpTypes = isArray(config.type) ? config.type : [ isString(config.type) ? valueOfString(config.type) : config.type ];
    let vDataTypeValues = Object.values(VDATA_TYPE);
    throwParameterError(
        tmpTypes.length<=0 || tmpTypes.filter(value=>!vDataTypeValues.includes(value)).length>0,
        mystdout`函数 ${checkSingleConfig} 检测到 config 中 type 配置信息不在规定范围内。type=${config.type}, 范围=${vDataTypeValues}`);
    // canBeEmpty。选填，如果有的话要校验它的值是否为布尔值
    if(keys.includes('canBeEmpty')) throwParameterError(
        !isBoolean(config.canBeEmpty), mystdout`函数 ${checkSingleConfig} 检测到 config 填写了 canBeEmpty=${config.canBeEmpty} 配置信息。但它不是布尔值。`);
    // targetTypes。根据配置选填。一个类型数组
    // 如果 type 的内容包含了 target 开头的选项，则一定要填写
    // 如果 type 的内容是其它，则可填可不填。但是填了就要校验
    // 至于填写内容，使用 isClass 判断。
    let hadTargetTypes = keys.includes('targetTypes') ;
    let isTarget = tmpTypes.filter(value=>value.startsWith('TARGET')).length>0;
    if(hadTargetTypes) throwParameterError(
                    !isArray(config.targetTypes), mystdout`函数 ${checkSingleConfig} 检测到 config 中 targetTypes=${config.targetTypes} 不是数组`);
    if(isTarget) throwParameterError(
                    !isArray(config.targetTypes) || config.targetTypes.length<=0 || config.targetTypes.filter(value=>!isClass(value)).length>0, 
                    mystdout`函数 ${checkSingleConfig} 检测到 config 中 targetTypes=${config.targetTypes} 存在不是类型信息的内容`);
}

/**
 * 这函数的主要作用是：检测多个配置信息对象是否填写正确。
 * 在 checkSingleConfig 中是检测单个配置对象，这里是检测多个配置对象。而整个配置定义为一个对象字面量 configs={}。
 * 在 代码实现上，它是依赖 checkSingleConfig 的。
 * 
 * @param {Object} paramConfigs 配置信息对象。对象的写法可以参数考 上面的样例。
 * @throws 如果校验通过则不做任何处理；否则，抛出 ParameterError 。这个 ParameterError 可能有2种类型：本函数的参数异常，或者 调用的函数内部参数异常。
 * 
 * @example
 * // 对于整个配置 configs ，它一般有2个信息：name, config。name 是要检测的参数名，config 则是检测所需要的规则定义。
 * let configs = {
 *     'param1':{value:param1, type:VDATA_TYPE.string}, 
 *     'param2':{value:param2, type:[VDATA_TYPE.func, VDATA_TYPE.cls], canBeEmpty:false },
 *     'param3':{value:param3, type:VDATA_TYPE.targetObj, canBeEmpty:false, targetTypes:[String, Number]}, 
 *     ... 
 * }
 * 
 */
function checkConfigs(paramConfigs){

    // 首先检测，是不是一个 对象字面量
    throwParameterError(
        !isObjectLiteral(paramConfigs), mystdout`函数 ${checkConfigs} 检测到入参 paramConfigs=${paramConfigs} 不是对象字面量 或者 普通Object对象。`);
    
    // 然后，整个对象必须有键值对。
    throwParameterError(
        Object.keys(paramConfigs).length<=0, mystdout`函数 ${checkConfigs} 检测到入参 paramConfigs=${paramConfigs} 对象没有对应配置信息。`);
    
    // 然后检测，key 所对应的值，是否是一个 单一配置对象。
    let keys = Object.keys(paramConfigs);
    for(let i=0;i<keys.length;i++){
        let tmpKey = keys[i];
        let tmpValue = paramConfigs[tmpKey];
        // 检查单个配置对象，是否填写正确。
        try {
            checkSingleConfig(tmpValue);
        }catch(err){
            // 先提取真正的异常信息
            let msg = err.message;
            // 然后构造一个新的
            let newMsg = mystdout`函数 ${checkConfigs} 检测到有一个配置填写错误。key=${tmpKey} value=${tmpValue}。详细信息，${msg}`;
            // 抛出异常
            throwParameterError(true, newMsg);
        }
    }

    // 如果通过，则无需处理。
}

/**
 * 根据传入的配置信息对象 paramConfigs，判断待处理的参数，是否符合类型要求。
 * 在校验处理上，这个函数使用了 validMultiTypes 函数。
 * 在配置对象检测处理上，这个函数使用了 checkConfigs 函数。
 * 
 * @param {Object} paramConfigs 这个是配置好的待校验信息对象。它的写法，参考 example 信息
 * @param {string} funcName 这参数用于标记 paramConfigs 中的参数来自哪个函数。默认为空字符串。
 * @param {string} className 这参数用于标记 paramConfigs 中的参数来自那个类。默认为空字符。
 * @returns {Object} 如果校验通过，会返回一个对象字面量。这里面装着 参数名和参数已校验的值。参考 example 信息
 * @throws 对于抛出异常有2种：
 * 第一种，是 ParameterError 这个函数、依赖函数等等，本身的参数异常导致抛出；第二种，是 VerificationError 业务上的校验异常。
 * 
 * @example
 * // 对于批量校验的配置对象，它以待校验的 参数名为key，详细配置为value。
 * // 配置信息填写参考如下：
 * let paramConfigs = {
 *     'param1':{value:param1, type:VDATA_TYPE.string}, 
 *     'param2':{value:param2, type:[VDATA_TYPE.func, VDATA_TYPE.cls], canBeEmpty:false, targetTypes:[]},
 *     'param3':{value:param3, type:VDATA_TYPE.targetObj, canBeEmpty:false, targetTypes:[String, Number]}, 
 *     ... 
 * }
 * 
 * // 返回结果举例
 * let result = {
 *     'param1':'validedValue', 'param2':'validedValue2'
 * }
 */
function validTypesByConfigs(paramConfigs, funcName="", className=""){

    // 首先校验 paramConfigs 配置是否填写正确
    checkConfigs(paramConfigs);

    // 然后校验 funcName
    throwParameterError(!isString(funcName), mystdout`函数 validTypesByConfigs 检测到参数错误 funcName=${funcName}`);

    // 然后校验 className
    throwParameterError(!isString(className), mystdout`函数 validTypesByConfigs 检测到参数错误 className=${className}`);

    // 关于 所属的类 和 所属函数 的描述
    let clsAndFuncInfo = mystdout`${className.trim()}-${funcName.trim()}`;
    // 处理拼接后 class 或者 func 是空的情况。
    if(clsAndFuncInfo.startsWith('-') || clsAndFuncInfo.endsWith('-')){
        // 去掉 '-' 这个符号
        clsAndFuncInfo = clsAndFuncInfo.replace(/[\-]/g, '');
    }

    // 这里开始循环校验 paramConfigs 的值
    let results = {};
    let keys = Object.keys(paramConfigs);
    for(let i=0;i<keys.length;i++){
        // 提取临时的 key 和 value 
        let tmpKey = keys[i];
        let tmpConfig = paramConfigs[tmpKey];
        // 构造一个提示信息，用于 VerificationError 异常抛出时，显示给调用者
        let errorMsg = mystdout`在 ${clsAndFuncInfo} 中, 发现参数 ${tmpKey} 校验不通过。设置如下: value=${tmpConfig.value}, type=${tmpConfig.type}, canBeEmpty=${tmpConfig.canBeEmpty}, targetType=${tmpConfig.targetTypes}`;
        // 校验 配置中 指定的内容（canBeEmpty 和 targetTypes 有默认值。）
        // 当 canBeEmpty 和 targetTypes 不写，则会获取到一个 undefined 。在传参时, undefined 会识别到函数的默认参数设置
        let validedValue = validMultiTypes(tmpConfig.value, tmpConfig.type, errorMsg, tmpConfig.canBeEmpty, tmpConfig.targetTypes);
        // 如果通过，写入对象中
        results[tmpKey] = validedValue;
    }

    // 返回结果
    return results;
}

export {
    VDATA_TYPE,

    validSingleType, validMultiTypes, checkSingleConfig, checkConfigs, validTypesByConfigs
}