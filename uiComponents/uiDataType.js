/**
 * In my license, all codes can be shared free of charge. 
 * However, If my code is taken for commercial use, please maintain it yourself. 
 * I am not obligated to take responsibility for your business application.
 * Here is my email "pangdongcan@live.com"
 * 
 * Copyright © 2026 Micheal Pang. All rights reserved.
 * 
 * @file This file "uiDataType.js" is part of project "pdc-js-framework" , which is belong to Michael Pang (It's Me).
 * @author  Micheal Pang (Dongcan Pang)
 * @since  2026-06-05
 * @description  这里是一些关于我的 UI 框架的对象判断工具
 */
"use strict"; // 这是严格模式下的 Javascript 代码

import { Bs5EffBaseComponent } from "../../modules/myselfs/js/bootstrap5Effect.js"
import { Bootstrap5Object } from "../../modules/myselfs/js/bootstrap5UI.js";

//==============================  这里处理特定对象 ( 一般用于自定义的对象处理，比如 BootstrapObject )  ================

/**
 * 判断是否为可用的 Bootstrap 组件中，Html 标签对象的 content 内容。一般只有 2 种，一是字符串值或对象，二是 BootstrapObject 对象
 * @param {string|BootstrapObject} object 一般只有 2 种，一是字符串值或对象，二是 BootstrapObject 对象
 * @returns {boolean} 如果传来的值是 字符串 或者 BootstrapObject 对象，则为 true ； 否则为 false
 */
function isContentObject(object){
    return isTargetObject(object, String, Bootstrap5Object);
}

/**
 * 判断传来的数组 是否 全部元素 都是 可用的 Bootstrap 组件中 Html 标签对象的 content 内容。
 * 内容一般只有 2 种，一是字符串值或对象，二是 BootstrapObject 对象
 * @param {Array} pArray 待判断的数组。如果传来的是不是数组，则返回 false。
 * @returns {boolean} 如果传来的数组，它里面 每一个值 都是 字符串 或者 BootstrapObject 对象，则为 true ； 否则为 false
 */
function isContentObjectArray(pArray){
    return isTargetObjectArray(pArray, String, Bootstrap5Object);
}

/**
 * 判断传来的集合 是否 全部元素 都是 可用的 Bootstrap 组件中 Html 标签对象的 content 内容。
 * 内容一般只有 2 种，一是字符串值或对象，二是 BootstrapObject 对象
 * @param {Set} pSet 待判断的集合。如果传来的是不是集合，则返回 false。
 * @returns {boolean} 如果传来的集合，它里面 每一个值 都是 字符串 或者 BootstrapObject 对象，则为 true ； 否则为 false
 */
function isContentObjectSet(pSet){
    // 先赋值一个初始值
    let re = false;
    // 如果是 Set 对象，则处理，否则都是 false
    if(isTargetObject(pSet, Set)){
        // 转 array
        let tempArr = [...pSet];
        // 根据 前面的函数，得出结果。
        re = isContentObjectArray(tempArr);
    }
    // 返回结果
    return re;
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