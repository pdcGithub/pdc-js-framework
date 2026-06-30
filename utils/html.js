/**
 * In my license, all codes can be shared free of charge. 
 * However, If my code is taken for commercial use, please maintain it yourself. 
 * I am not obligated to take responsibility for your business application.
 * Here is my email "pangdongcan@live.com"
 * 
 * Copyright © 2025 Micheal Pang. All rights reserved.
 * 
 * @file This file "html.js" is part of project "pdc-js-framework" , which is belong to Michael Pang (It's Me).
 * @author  Micheal Pang (Dongcan Pang)
 * @since  2025-06-09
 * @description  这是一个 html 绘制工具
 */
"use strict"; // 这是严格模式下的 Javascript 代码

import { ObjectLiteral } from "../models/normal.js";
import { isString, valueOfString } from "./datatype.js";
import { myToString } from "./string.js";
import { autoVnAofString, autoVnAofTargetObject } from "./valid.js";

let tmpParser ;
try{
    tmpParser = new DOMParser();
} catch (error) {
    console.warn(new Date(), '你当前环境没有 DOMParser 类，这里执行一个模拟处理 ...');
    tmpParser = {
        parseFromString : (valueStr, typeStr)=>{
            console.warn('这里是模拟的 domParser 请注意 ...');
        }
    };
}
/**
 * 这是一个将字符串，转换为 DOM Document 对象的一个转换器。但是目前只能在浏览器用。
 * 如果在浏览器中，它是  DOMParser 对象。
 * 如果在其它环境，它是 一个对象字面量，并且带一个模拟的 parseFromString 函数。
 */
const DOM_PARSER = tmpParser;

/**
 * 一些没有结束标签的标签名
 */
const SINGLE_TAGS = ["meta", "link", "br", "hr"];

/**
 * 绘制一个简单的标签
 * @param {string} tagName 标签名。默认值：'unknow'。
 * @param {object|string} tagAttributes 一个装载了属性信息键值对的对象，或者一个属性信息字符串。。默认值：{}。
 * @param {string} contents 标签内容。默认值：''。
 * @throws 当函数的参数类型校验不通过，抛出 VerificationError 异常。
 * @returns {string} 返回一段 Html 标签字符串。标签的名 和 属性的名，统一转小写。
 */
function drawTag(tagName="unknow", tagAttributes={}, contents=''){
    // 参数检查
    let myTagName = autoVnAofString(tagName, false, {methodName:drawTag.name, paramName:'tagName'});
    let myTagAttribute = autoVnAofTargetObject(tagAttributes, {methodName:drawTag.name, paramName:'tagAttributes'}, String, ObjectLiteral);
    let myContent = autoVnAofString(contents, true, {methodName:drawTag.name, paramName:'contents'});

    //开始拼接属性 ==========================
    let attrs = "";
    if(isString(myTagAttribute)){
        // 如果传入的是字符串，不用拼接了。
        attrs = valueOfString(myTagAttribute);
    }else{
        Object.keys(myTagAttribute).forEach(key=>{
            //对于属性值有双引号的，直接去掉。然后属性内部，首尾不能有空白字符
            let tmpKey = myToString(key).toLowerCase();
            let tmpVal = myToString(myTagAttribute[key]);
            attrs += `${tmpKey}="${tmpVal.replaceAll("\"", "").replace(/[\s]+/g,' ').trim()}" `;
        });
    }
    //去掉属性字符串的最后一个空格
    attrs = attrs.trim();
    attrs = attrs.length>0?" "+attrs:"";
    //开始处理标签名========================== 统一小写
    let tag = myTagName.toLowerCase();
    //开始拼接     ==========================
    return SINGLE_TAGS.indexOf(tag)>=0 ? `<${tag}${attrs}/>`:`<${tag}${attrs}>${myContent}</${tag}>`;
}

// 导出
export { drawTag, DOM_PARSER }