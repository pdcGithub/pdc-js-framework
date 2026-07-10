/**
 * In my license, all codes can be shared free of charge. 
 * However, If my code is taken for commercial use, please maintain it yourself. 
 * I am not obligated to take responsibility for your business application.
 * Here is my email "pangdongcan@live.com"
 * 
 * Copyright © 2026 Micheal Pang. All rights reserved.
 * 
 * @file This file "string.js" is part of project "pdc-js-framework" , which is belong to Michael Pang (It's Me).
 * @module utils/string
 * @author  Micheal Pang (Dongcan Pang)
 * @since  2026-06-15
 * @description  这是一个字符串处理的工具模块。因为不明确这个模块会用在哪个地方，所以最好不要有外部依赖。
 * 在 Javascript 中循环依赖会出问题，而且是比较大的问题。
 */
"use strict"; // 这是严格模式下的 Javascript 代码

/**
 * 有时候有些数据（比如: Symbol 类型）用 `${param1}` 的方式转换为字符串会抛异常。所以，我这里自己写一个字符转换函数
 * @param {*} param 任意类型的数据
 * @returns {string} 字符串
 */
function myToString(param) {
    
    // 按照我的框架处理，数据大体有以下几个：
    // ===> 空（undefined\null\NaN）、字符串（基础+对象）、数字（基础+对象）、布尔（基础+对象）、正则、Symbol、类、函数、普通对象、数组
    
    // 定义一个返回值
    let result = '';
    
    // 空值
    if(param===undefined || param===null || Number.isNaN(param)) {
        result = `Empty (undefined, null, NaN)`;
        return result;
    }

    // 字符串
    if(typeof param === 'string' || param instanceof String) {
        result = typeof param === 'string' ? `${param}` : param.valueOf();
        return result;
    }

    // 数字
    if(typeof param === 'number' || param instanceof Number) {
        result = typeof param === 'number' ? `${param}` : `${param.valueOf()}`;
        return result;
    }

    // 布尔
    if(typeof param === 'boolean' || param instanceof Boolean) {
        result = typeof param === 'boolean' ? `${param}` : `${param.valueOf()}`;
        return result;
    }

    // 正则（不论是正则对象，还是正则表达式，它们都是正则对象）
    if(param instanceof RegExp) {
        result = param.toString();
        return result;
    }

    // Symbol 类型
    if(typeof param === 'symbol'){
        result = param.toString();
        return result ;
    }

    // 类（这里特指用 class 定义的 类，因为 JavaScript 中 函数是一种类，类也是一个函数）
    if(typeof param === 'function' && /^[\s]*class/i.test(param.toString())){
        // 如果 class 没有 name ，则返回整个代码
        result = `Class ${ param.name?param.name:param.toString() }`;
        return result;
    }

    // 函数（这里特指 function 定义的）
    if(typeof param === 'function'){
        // 如果是匿名函数，那它可能是没有名字的。
        result = `Function ${param.name?param.name:param.toString()}`;
        return result;
    }

    // 数组
    if(Array.isArray(param)){
        // 因为数组是容器，它可能嵌套其它容器，所以对于嵌套的容器，不再进行递归解析。
        result = param.map(val=>{
            if(Array.isArray(val) || val instanceof Map || val instanceof Set){
                return val.toString();
            }else{
                // 非容器才递归解析
                return myToString(val);
            }
        }).join(',');
        //
        return `Array [${result}]`;
    }

    // Map
    if(param instanceof Map){
        result = Array.from(param.entries()).map((vArr)=>{
            let k = vArr[0];
            let v = vArr[1];
            // 这里对于键值，都需要排除 容器对象 的递归转换
            let key = (Array.isArray(k) || k instanceof Map || k instanceof Set) ? k.toString() : `${myToString(k)}` ;
            let value = (Array.isArray(v) || v instanceof Map || v instanceof Set) ? v.toString() : `${myToString(v)}` ;
            return `${key}:${value}`;
        }).join(',');
        // 
        return `Map {${result}}`;
    }

    // Set
    if(param instanceof Set){
        console.log();
        result = Array.from(param.values()).map((v)=>{
            // 虽然 set 集合只有 value，但是要排除容器对象，避免递归转换
            let value = (Array.isArray(v) || v instanceof Map || v instanceof Set) ? v.toString() : `${myToString(v)}` ;
            return value;
        }).join(',');
        // 
        return `Set [${result}]`;
    }

    // 普通对象
    if(param instanceof Object){
        result = param.toString();
        return result;
    }

    // 返回
    return result;
}

/**
 * 这是一个我自己的字符串输出标签。它一般出现在模板字面量前面。因为有些信息，比如：特殊类型、对象等等，不是直接 \`${param}\` 这方式能输出的。
 * 所以，它内部的变量处理使用了 myToString 函数
 * @example
 * // 使用举例如下：
 * let name = 'Jack';
 * let all = mystdout`I am ${name}`;
 * @param {Array<string>} literals 在整个模板字面量中，切割出来的字符串数组。
 * @param  {...any} substitutions 在整个模板字面量中，切割出来的变量数组。
 * @returns {string} 一个经过 myToString 整合处理的字符串信息。
 */
function mystdout(literals, ...substitutions){
    
    // 定一个返回结果
    let result = '';

    // 根据资料，这里建议按照 substitutions 长度来进行遍历。
    // 因为 literals 是切割出来的字符串片段，substitutions 是变量数组。
    // 对于变量结尾的字符串，会切割出 空字符元素，保证字符串吻合。literals 的长度会超出 substitutions 的长度。
    for(let i=0;i<substitutions.length;i++){
        // 切割出的字符片段，直接拼接
        result += literals[i];
        // 对于变量输出，最好是使用 myToString 。因为不是所有的内容都可以简单转字符串。
        result += myToString(substitutions[i]);
    }

    // 合并最后一个 literals 字符片段
    // 如果 substitutions 没有内容，则只会处理 字面量片段。
    result += literals[literals.length-1];

    // 返回
    return result ;
}

export {
    myToString, mystdout
}