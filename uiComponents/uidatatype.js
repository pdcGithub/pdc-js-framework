/**
 * In my license, all codes can be shared free of charge. 
 * However, If my code is taken for commercial use, please maintain it yourself. 
 * I am not obligated to take responsibility for your business application.
 * Here is my email "pangdongcan@live.com"
 * 
 * Copyright © 2026 Micheal Pang. All rights reserved.
 * 
 * @file This file "uidatatype.js" is part of project "pdc-js-framework" , which is belong to Michael Pang (It's Me).
 * @module uiComponents/uidatatype
 * @author Micheal Pang (Dongcan Pang)
 * @since 2026-06-05
 * @description 这里是一些关于 UI 框架的数据和对象判断工具
 */
"use strict"; // 这是严格模式下的 Javascript 代码

import { Bs5EffBaseComponent } from "./dynamic.js"
import { Bootstrap5Object } from "./static.js";
import { isTargetObject, isTargetObject2DArray, isTargetObjectArray, isTargetObjectSet } from "../utils/datatype.js";

//==============================  这里处理特定对象 ( 一般用于自定义的对象处理，比如 Bootstrap5Object )  ================

/**
 * 判断是否为可用的 Bootstrap 静态组件中，Html 标签对象的 content 内容。一般只有 2 种，一是字符串值或对象，二是 Bootstrap5Object 对象
 * @param {String|Bootstrap5Object} object 一般只有 2 种，一是字符串值或对象，二是 Bootstrap5Object 对象
 * @returns {boolean} 如果传来的值是 字符串 或者 Bootstrap5Object 对象，则为 true ； 否则为 false
 */
function isContentObject(object){
    return isTargetObject(object, String, Bootstrap5Object);
}

/**
 * 判断传来的数组 是否 全部元素 都是 可用的 Bootstrap 组件中 Html 标签对象的 content 内容。
 * 内容一般只有 2 种，一是字符串值或对象，二是 Bootstrap5Object 对象
 * @param {Array} pArray 待判断的数组。如果传来的是不是数组，则返回 false。
 * @returns {boolean} 如果传来的数组，它里面 每一个值 都是 字符串 或者 Bootstrap5Object 对象，则为 true ； 否则为 false
 */
function isContentObjectArray(pArray){
    return isTargetObjectArray(pArray, String, Bootstrap5Object);
}

/**
 * 判断传来的二维数组 是否 全部元素 都是 可用的 Bootstrap 组件中 Html 标签对象的 content 内容。
 * 内容一般只有 2 种，一是字符串值或对象，二是 Bootstrap5Object 对象
 * @param {Array} p2DArray 待判断的二维数组。如果传来的是不是二维数组，则返回 false。
 * @returns {boolean} 如果传来的二维数组，它里面 每一个值 都是 字符串 或者 Bootstrap5Object 对象，则为 true ； 否则为 false
 */
function isContentObject2DArray(p2DArray){
    return isTargetObject2DArray(p2DArray, String, Bootstrap5Object);
}

/**
 * 判断传来的集合 是否 全部元素 都是 可用的 Bootstrap 组件中 Html 标签对象的 content 内容。
 * 内容一般只有 2 种，一是字符串值或对象，二是 Bootstrap5Object 对象
 * @param {Set} pSet 待判断的集合。如果传来的是不是集合，则返回 false。
 * @returns {boolean} 如果传来的集合，它里面 每一个值 都是 字符串 或者 Bootstrap5Object 对象，则为 true ； 否则为 false
 */
function isContentObjectSet(pSet){
    return isTargetObjectSet(pSet, String, Bootstrap5Object);
}

/**
 * 判断是否为可用的 Bs5EffBaseComponent 组件。一般只有 2 种，一是字符串值或对象，二是 Bs5EffBaseComponent 对象
 * @param {string|Bs5EffBaseComponent} object 一般只有 2 种，一是字符串值或对象，二是 Bs5EffBaseComponent 对象
 * @returns {boolean} 如果传来的值是 字符串 或者 Bs5EffBaseComponent 对象，则为 true ； 否则为 false
 */
function isChildrenComponent(object){
    return isTargetObject(object, String, Bs5EffBaseComponent);
}

/**
 * 判断传来的数组 是否 全部元素 都是 可用的 Bs5EffBaseComponent 组件。
 * 内容一般只有 2 种，一是字符串值或对象，二是 Bs5EffBaseComponent 对象
 * @param {Array} cArray 待判断的数组。如果传来的是不是数组，则返回 false。
 * @returns {boolean} 如果传来的数组，它里面 每一个值 都是 字符串 或者 Bs5EffBaseComponent 对象，则为 true ； 否则为 false
 */
function isChildrenComponentArray(cArray){
    return isTargetObjectArray(cArray, String, Bs5EffBaseComponent);
}

/**
 * 判断传来的二维数组 是否 全部元素 都是 可用的 Bs5EffBaseComponent 组件。
 * 内容一般只有 2 种，一是字符串值或对象，二是 Bs5EffBaseComponent 对象
 * @param {Array} p2DArray 待判断的二维数组。如果传来的是不是二维数组，则返回 false。
 * @returns {boolean} 如果传来的二维数组，它里面 每一个值 都是 字符串 或者 Bs5EffBaseComponent 对象，则为 true ； 否则为 false
 */
function isChildrenComponent2DArray(p2DArray){
    return isTargetObject2DArray(p2DArray, String, Bs5EffBaseComponent);
}

// 导出共享的内容
export{
    isContentObject, isContentObjectArray, isContentObjectSet, isContentObject2DArray,
    isChildrenComponent, isChildrenComponentArray, isChildrenComponent2DArray
}