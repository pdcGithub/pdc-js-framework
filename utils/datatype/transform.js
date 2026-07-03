/**
 * In my license, all codes can be shared free of charge. 
 * However, If my code is taken for commercial use, please maintain it yourself. 
 * I am not obligated to take responsibility for your business application.
 * Here is my email "pangdongcan@live.com"
 * 
 * Copyright © 2025 Micheal Pang. All rights reserved.
 * 
 * @file This file "transform.js" is part of project "pdc-js-framework" , which is belong to Michael Pang (It's Me).
 * @module utils/datatype/transform
 * @author  Micheal Pang (Dongcan Pang)
 * @since  2025-08-11
 * @description  这是作为数据类型处理的一个 数据转换 工具包
 * 
 * 整个文件是基础的数据类型判断 和 获取。所以不能使用 valid.js 来简化异常抛出。因为，抛异常的处理，引用了 这个文件的 API。会造成循环引用，然后报错。
 */
"use strict"; // 这是严格模式下的 Javascript 代码

import { isString, isEmptyString, isNumber, isBoolean, valueOfBoolean, valueOfString, valueOfNumber, isRegexpOk } from "./base.js";
import { isObject, isFunction, isTargetObjectArray } from "./object.js";
import { ParameterError } from "../../models/errors.js";
import { myToString } from "../string.js"

/**
 * 字符串全转换为大写表示
 */
const TO_UPPERCASE = 'UPPER';

/**
 * 字符串全转换为小写表示
 */
const TO_LOWERCASE = 'LOWER';

//==============================  这里处理一些特殊的 对象转化

/**
 * 将一个对象的键值对，转换为一个 Map 对象。它的键和值，都是字符串。(如果可以保存 function 作为 value，则为 function)
 * 如果对象包含 Symbol 键，则会被过滤。因为 Object.keys 方法 不包含 Symbol 属性。
 * @param {object} object 待处理对象
 * @param {boolean} canKeyBeEmpty 键信息，能否为空字符串。默认是 true
 * @param {boolean} canValueBeFunction 值信息，能否为函数。默认是 false
 */
function objToMap(object, canKeyBeEmpty=true, canValueBeFunction=false){
    // 参数校验
    if(!isObject(object) || Array.isArray(object)){
        throw new ParameterError(
            `objToMap 函数, 接收的参数异常. object=${myToString(object)} 不是一个合法对象。`);
    }
    if(!isBoolean(canKeyBeEmpty)){
        throw new ParameterError(
            `objToMap 函数, 接收的参数异常. canKeyBeEmpty=${myToString(canKeyBeEmpty)} 不是一个布尔值。`);
    }
    if(!isBoolean(canValueBeFunction)){
        throw new ParameterError(
            `objToMap 函数, 接收的参数异常. canValueBeFunction=${myToString(canValueBeFunction)} 不是一个布尔值。`);
    }
    // 值提取
    let canEmpty = valueOfBoolean(canKeyBeEmpty);
    let canFunc = valueOfBoolean(canValueBeFunction);
    // 定义返回结果
    let map = new Map();
    // 如果有传入初始属性信息，则遍历赋值。首先要明确，Object.keys 得出的 key 都是字符串形式的
    Object.keys(object).filter(key=>{
        // 如果 key 不能为空字符串，但是 key 是空字符串，则过滤掉
        if(!canEmpty && isEmptyString(key)) return false;
        // 如果 value 不能为 function ，但是 value 是 function，则过滤
        if(!canFunc && isFunction(object[key])) return false;
        // 其它处理
        return true;
    }).forEach(key=>{
        // 遍历，然后写入 这个 Map 当中
        let keyString = valueOfString(key).trim();
        let value = object[key];
        let valueString = `${String(value)}`;
        if(isString(value)){
            valueString = valueOfString(value).replaceAll('"','').trim();
        }
        if(isBoolean(value)){
            valueString = `${valueOfBoolean(value)}`;
        }
        if(isNumber(value)){
            valueString = `${valueOfNumber(value)}`;
        }
        if(isFunction(value)){
            // 假如可以存放 function ，还是保持原值吧。
            valueString = value;
        }
        // 最后处理（把值保存到 map 中）
        map.set(keyString, valueString);
    });
    // 返回结果
    return map;
}

/**
 * 这是一个构建函数，它可以快速构建一个 Map 对象。可以没有参数。当没有参数，它会创建一个空的 Map 对象。
 * @param  {...any} params Map 对象的内部键值对，以 key1, value1, key2, value2, ... 的方式添加，参数保持是 2 的倍数即可。
 * @returns {Map} 一个 Map 对象
 * @throws 如果传入的参数数量 不是 2的倍数（即不是双数），则抛出 ParameterError 异常。
 */
function genMap(...params){
    // 参数校验
    if(params.length % 2 !== 0){
        throw new ParameterError(`genMap 函数, 所接收到的参数 params 的长度是 ${params.length}, 数量异常，它应该是 2 的倍数, 并且以 key, value 间隔的方式填写。`);
    }
    // 创建 Map
    let map = new Map();
    // 如果有参数，则添加进去
    if(params.length>0){
        for(let i=0;i<=params.length-2;i+=2){
            map.set(params[i], params[i+1]);
        }
    }
    // 返回
    return map;
}

/**
 * 复制一个相关的对象。这里是一个浅层的复制。对象内部的引用还是一样的。
 * 注意：这里是关于对象的键和值的复制。对象的 prototype 原型链 是不会复制的。
 * @param {object} oriObj 待复制的对象
 * @returns {object} 关于待复制对象 oriObj 的一个浅层复制。它也是一个对象。
 * @throws 如果参数校验不通过，会抛出 ParameterError 异常。
 */
function copyObject(oriObj) {

    // 参数判断
    if(!isObject(oriObj)) throw new ParameterError(`copyObject 函数, 接收的参数异常. oriObj=${myToString(oriObj)} 不是一个合法对象。`);

    // 返回一个对象的复制。这里使用的是一个合并函数。
    return Object.assign({}, oriObj);
}

/**
 * 这是一个可以合并对象的处理函数。这里区分键名的大小写。
 * @param {object} oriObj 要合并的主对象
 * @param {...object} others 要合并的其它对象。如果键名相同，后面的对象，会覆盖前面的。
 * @returns {object} 一个合并处理后的新对象
 * @throws 如果参数校验不通过，会抛出 ParameterError 异常。
 */
function mergeObject(oriObj, ...others) {

    // 参数判断
    if(!isObject(oriObj)) throw new ParameterError(`mergeObject 函数, 接收的参数异常. oriObj=${myToString(oriObj)} 不是一个合法对象。`);
    if(!isTargetObjectArray(others, Object)) throw new ParameterError(`mergeObject 函数, 接收的参数异常. others=${myToString(others)} 不是一个合法对象列表。`);

    //处理，这里是一个 空对象的浅拷贝。这样合并后，不影响原对象。
    return Object.assign({}, oriObj, ...others);
}

/**
 * 这是一个可以合并对象的处理函数。这里不区分键名的大小写。但是，要指定，键名是按大写合并，还是按小写合并，统一转换。
 * 注意：这里使用了 Object.keys 来遍历，所以 Symbol 类型 key 会排除合并
 * @param {string} caseStr 键名的转换逻辑：建议使用常量 TO_LOWERCASE 或者 TO_UPPERCASE 。
 * @param {object} oriObj 要合并的主对象
 * @param {...object} others 要合并的其它对象。如果键名相同，后面的对象，会覆盖前面的。
 * @throws 如果参数校验不通过，会抛出 ParameterError 异常。
 * @returns {object} 一个合并处理后的新对象
 */
function mergeObjectIgnoreCase(caseStr, oriObj, ...others) {

    // 参数判断
    if(!isString(caseStr) || !isRegexpOk(caseStr, /^(lower|upper)$/i)) throw new ParameterError(`mergeObjectIgnoreCase 函数, 接收的参数异常. caseStr=${myToString(caseStr)} 不是一个合法参数。`);;
    if(!isObject(oriObj)) throw new ParameterError(`mergeObjectIgnoreCase 函数, 接收的参数异常. oriObj=${myToString(oriObj)} 不是一个合法对象。`);
    if(!isTargetObjectArray(others, Object)) throw new ParameterError(`mergeObjectIgnoreCase 函数, 接收的参数异常. others=${myToString(others)} 不是一个合法对象列表。`);

    // 这里处理大小写规则
    let myCase = caseStr.toUpperCase()===TO_LOWERCASE?TO_LOWERCASE:TO_UPPERCASE;

    // 这里创建一个空对象
    let newObj = {};

    // 这里创建一个用于遍历的对象数组（第一个元素是 oriObj，其它元素按参数顺序）
    let objArr = [oriObj, ...others];

    // 遍历对象数组
    objArr.forEach((obj, index, arr)=>{
        // 从单个对象中，提取键名，一个个匹配。
        // 这里增加一个排序（长度从短到长，字符从小到大），方便名字合并。
        Object.keys(obj)
            .sort((a,b)=>a.length===b.length?a-b:a.length-b.length)
            .forEach((keyStr, index, arr)=>{
                // 这里对 键值进行 转换。(如果是大写，则转大写。小写，则转小写)
                let newKey = myCase===TO_UPPERCASE?keyStr.toUpperCase():keyStr.toLowerCase();
                // 把值保存到 新的对象中。
                newObj[newKey] = obj[keyStr];
            });
    });

    // 返回结果
    return newObj;
}

/**
 * 这里导出 这个模块的 所有内容
 */
export {
    objToMap, /* 将对象转 Map */
    genMap,   /* 快速生成一个 Map */
    copyObject, /* 复制一个对象 */
    mergeObject, /* 合并一个或者多个对象 */
    mergeObjectIgnoreCase, /* 合并一个或者多个对象，这里不区分键名的大小写。 */

    // 两个常量
    TO_LOWERCASE,
    TO_UPPERCASE
}