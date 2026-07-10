/**
 * In my license, all codes can be shared free of charge. 
 * However, If my code is taken for commercial use, please maintain it yourself. 
 * I am not obligated to take responsibility for your business application.
 * Here is my email "pangdongcan@live.com"
 * 
 * Copyright © 2025 Micheal Pang. All rights reserved.
 * 
 * @file This file "init.js" is part of project "pdc-js-framework" , which is belong to Michael Pang (It's Me).
 * @module uiComponents/init
 * @author  Micheal Pang (Dongcan Pang)
 * @since  2025-06-04
 * @description  这是一个关于浏览器环境的初始化处理模块。一般来说每个页面都需要引入这个模块。
 * 它主要进行一些默认的处理，比如：未捕捉的异常显示，ready函数的实现，动作绑定等等。
 */
"use strict"; // 这是严格模式下的 Javascript 代码

// ====== 引入 string.js 处理字符信息

import { mystdout } from "../utils/string.js";

// ====== 引入 工具包

import { autoVnAofString, autoVnAofTargetObjectArray, throwError, validFunction } from "../utils/valid.js";
import { isFunction, isHtmlElement, htmlElementListToArray, isHtmlElementList } from "../utils/datatype.js";
import { VerificationError } from "../models/errors.js";

// ====== 增加一些常用的判断常量。

/**
 * 这里获取 进程间通信需要用到的 Electron API 对象。由于有些页面在 iframe 里面，所以需要用 parent 来获取
 */
const MY_ELEC_API = window.ElectronAPI || window.parent.ElectronAPI;

/**
 * 这里判断，到底是在 纯浏览器环境，还是 Electron 环境。主要是通过 MY_ELEC_API 这个常量来处理。
 * 如果在 Electron 环境中，返回 true。如果是纯浏览器环境，则返回 false
 */
const IS_IN_APP = MY_ELEC_API ? true : false;

/**
 * 这里用于处理没有捕捉的一般性质 JavaScript 异常
 */
window.addEventListener('error', (event)=>{
    
    // 定义输出信息
    let errMsg = mystdout`注意，这里遇到一个未处理的页面 JS 异常。异常信息：${event.message}, JS 文件：${event.filename}, 行号：${event.lineno}, 列号：${event.colno}`;
    
    // 如果在 Electron 里面，则增加一个提示信息。
    if(IS_IN_APP) errMsg += ' [ 在 Electron 环境下，会让页面失去焦点，无法再操作，请注意 ]';
    
    // 弹出异常信息
    alert(errMsg);
});

/**
 * 这里用于处理没有捕捉的一般性质 Javascript Promise 异常
 */
window.addEventListener('unhandledrejection', (event)=>{

    // 这里用于处理没有捕捉的 JS Promise 异常
    let errMsg = mystdout`注意，这里遇到一个未处理的页面 JS Promise 异常。信息：${event.reason}`;

    // 如果在 Electron 里面，则增加一个提示信息。
    if(IS_IN_APP) errMsg += ' [ 在 Electron 环境下，会让页面失去焦点，无法再操作，请注意 ]';

    // 弹出异常信息
    alert(errMsg);
});

/**
 * 这里是页面准备好后，才会执行的处理。如果程序对于页面有资源依赖，那需要等页面加载完毕，再执行才不会出问题。
 * 这里相当于 JQuery 中的 $.ready() 方法。
 * @example
 * // 调用的样例代码
 * documentReady(()=>{
 *     console.log('do something ...');
 * });
 * @param {function} callback 回调方法
 * @throws 如果参数检验异常，抛出 VerificationError 异常。如果内部校验用的函数异常，抛出 ParameterError 异常。
 */
function documentReady(callback) {

    // 判断传入的是否是一个函数，不是则抛出异常
    validFunction(callback, mystdout`函数 ${documentReady.name} 接收的入参 callback=${callback} 不是一个回调函数`);

    // IE9+
    // 注册监听事件(但是，请注意，如果事件已经发射，回调将不会被执行。
    // 为了确保回调总是运行，jQuery检查文档(reference) 的“readyState”属性，如果属性值变为 complete，则立即执行回调函数)
    if(document.readyState==="complete" || (document.readyState !== "loading" && !document.documentElement.doScroll)){
        //console.log("这里是立即执行");
        callback();
    }else{
        //console.log("这里是回调执行");
        document.addEventListener('DOMContentLoaded', callback);
    }
}

/**
 * 这是一个事件绑定的方法，可以对 html 的元素进行事件响应绑定。（对于 document 对象 和 document 的 body 对象，也是可以的）
 * @param {NodeList | HTMLCollection | Array<HtmlElement>} elements 只能为 document, document.body, HtmlElement, NodeList, HTMLCollection, Array&lt;HtmlElement&gt; 中的一个
 * @param {string} eventTypeString 事件类型字符串。如果有多个事件需要绑定，以逗号分隔。比如：'click, focus, keyup' 
 * @param {function} actionFunction 事件响应的回调函数，函数有一个 event 事件对象作为入参
 * @throws 如果参数检验异常，抛出 VerificationError 异常。如果内部校验用的函数异常，抛出 ParameterError 异常。
 */
function actionBinding(elements, eventTypeString, actionFunction) {
    
    // 先定义一个用于最后执行的 数组
    let elementArray = [];

    // 参数校验 判断 ============ elements 是否符合要求
    if(elements === document || elements === document.body){
        elementArray.push(elements); // 对于 document 对象 和 body 对象，也是可以的

    }else if(Array.isArray(elements)){
        elementArray = elements.filter(isHtmlElement); // 如果传入的是数组，则只取 HtmlElement 对象

    }else if(isHtmlElement(elements)){
        elementArray.push(elements); // 如果传入的是单个 HtmlElement 

    }else if(isHtmlElementList(elements)){
        elementArray = htmlElementListToArray(elements); // 如果传入的是一个 NodeList 或者 HTMLCollection

    }else{
        // 对于其它类型，这里不处理，直接抛出 VerificationError
        let errorMsg = mystdout`函数 actionBinding, 参数 elements=${elements} 不符合要求。它只能为 document, document.body, HtmlElement, NodeList, HTMLCollection, Array<HtmlElement> 中的一个。`
        throwError(true, errorMsg, VerificationError);
    }

    // 如果没有可绑定的对象，则不需要执行后续的处理。直接 抛异常 即可。
    let warningMsg1 = mystdout`函数 ${actionBinding.name} 没有找到可用于绑定的元素对象。请检查 elements=${elements}, eventTypeString=${eventTypeString}, actionFunction=${actionFunction}`;
    throwError(elementArray.length<=0, warningMsg, VerificationError);

    // 开始校验 ============ eventTypeString 事件类型
    let tmpEventTypeStr = autoVnAofString(eventTypeString, false, {methodName:actionBinding.name, paramName:'eventTypeString'});
    // 先获取 事件类型 数组 （如果没有内容，返回一个空数组。如果有内容就是 小写的事件名）
    let tmpEventArr = tmpEventTypeStr.split(/[,，]/)
                                    .map(value=>value.replace(/\s+/g,'').toLowerCase())
                                    .filter(value=>/[a-zA-Z]/.test(value));
    // 如果没有可用的事件，不执行后续绑定，直接 抛异常 即可。
    let eventArray = autoVnAofTargetObjectArray(tmpEventArr, {methodName:actionBinding.name, paramName:'eventTypeString'}, String); 
    
    // 开始校验 ============ actionFunction 事件的回调函数
    throwError(
        !isFunction(actionFunction), 
        mystdout`函数 ${actionBinding.name} 接收到的参数 actionFunction=${actionFunction} 异常。它不是一个函数`, VerificationError);
    
    // 开始处理
    elementArray.forEach(element=>{
        eventArray.forEach(eventType=>{
            element.addEventListener(eventType, actionFunction);
        });
    });

}

/**
 * 这是一个事件绑定的方法，可以对 html 的元素进行事件响应绑定。这个方法有别于 actionBinding 。它直接提供 css 选择器的字符串就行了。不用传递 htmlElement 对象
 * @param {string} selector css 选择器的字符串
 * @param {string} eventTypeString 事件类型字符串。如果有多个事件需要绑定，以逗号分隔。比如：'click, focus, keyup' 
 * @param {function} actionFunction 事件响应的回调函数，函数有一个 event 事件对象作为入参
 * @throws 如果参数检验异常，抛出 VerificationError 异常。如果内部校验用的函数异常，抛出 ParameterError 异常。
 */
function actionBindingBySelector(selector, eventTypeString, actionFunction) {
    // 参数验证
    let tmpSelectorStr = autoVnAofString(selector, false, {methodName:actionBindingBySelector.name, paramName:'selector'});
    // 如果是有效的选择器字符串，则直接调用 actionBinding 来处理(选择器字符串，中间可能有空格，不能把空格全部删掉)
    let mySelector = tmpSelectorStr.replace(/\s+/g,' ').trim();
    // 调取 actionBinding
    actionBinding(document.querySelectorAll(mySelector), eventTypeString, actionFunction);
}

// 导出可以公用的部分
export { MY_ELEC_API, IS_IN_APP, documentReady, actionBinding, actionBindingBySelector }