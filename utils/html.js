/**
 * In my license, all codes can be shared free of charge. 
 * However, If my code is taken for commercial use, please maintain it yourself. 
 * I am not obligated to take responsibility for your business application.
 * Here is my email "pangdongcan@live.com"
 * 
 * Copyright © 2025 Micheal Pang. All rights reserved.
 * 
 * @file This file "html.js" is part of project "pdc-js-framework" , which is belong to Michael Pang (It's Me).
 * @module utils/html
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
 * 一些没有结束标签的标签名 (这里不是对外 export 的内容)。
 * 
 * 空元素是 HTML 中一种特殊的元素，它们不能包含任何子节点或内容，并且不需要结束标签。
 * 这些元素的设计使得 HTML 代码更加简洁，同时也提高了浏览器解析文档的效率。
 * 在 HTML5 标准中，空元素被明确定义为不需要闭合的元素。
 * 尽管它们没有结束标签，但某些代码格式化工具可能会在空元素的开始标签中添加尾随斜杠（如 <input />），以兼容 XHTML。
 * <area> <!-- 定义图像映射中的可点击区域 -->
 * <base> <!-- 指定文档中所有相对链接的基准 URL -->
 * <br> <!-- 插入换行符 -->
 * <col> <!-- 定义表格列的属性 -->
 * <embed> <!-- 嵌入外部内容，如视频或音频 -->
 * <hr> <!-- 插入水平线 -->
 * <img> <!-- 插入图像 -->
 * <input> <!-- 表单输入元素 -->
 * <link> <!-- 链接外部资源，如样式表 -->
 * <meta> <!-- 提供文档的元信息 -->
 * <param> <!-- 定义嵌入对象的参数 -->
 * <source> <!-- 为媒体元素指定多个资源 -->
 * <track> <!-- 为视频或音频添加文本轨道 -->
 * <wbr> <!-- 提示浏览器在此位置可以换行 -->
 * @ignore
 */
const SINGLE_TAGS = [
    "area", "base", "br", "col", "embed", 
    "hr", "img", "input", "link", "meta", 
    "param", "source", "track", "wbr"
];

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