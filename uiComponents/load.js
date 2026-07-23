/**
 * In my license, all codes can be shared free of charge. 
 * However, If my code is taken for commercial use, please maintain it yourself. 
 * I am not obligated to take responsibility for your business application.
 * Here is my email "pangdongcan@live.com"
 * 
 * Copyright © 2026 Micheal Pang. All rights reserved.
 * 
 * @file This file "load.js" is part of project "pdc-js-framework" , which is belong to Michael Pang (It's Me).
 * @module uiComponents/load
 * @author  Micheal Pang (Dongcan Pang)
 * @since  2026-07-08
 * @description 这是一个默认的加载动画处理模块。它提供加载动画组件的一些默认实现，以及默认的事件监听。
 * 如果不想在页面自己单独设置加载动画，可以 import 这个模块。
 */
"use strict"; // 这是严格模式下的 Javascript 代码

// 导入
import { Bs5EffLoading } from "./dynamic.js";
import { PDC_BEGIN, PDC_END } from "./events.js";
import { LOADING_TYPE } from "./uitools.js";
import { actionBinding } from "./init.js";
import { autoVnAofObjectLiteral, autoVnAofString, autoVnAofTargetObject, throwError } from "../utils/valid.js";
import { isHtmlElement, mergeObject } from "../utils/datatype.js";
import { VerificationError } from "../models/errors.js";
import { mystdout } from "../utils/string.js";

/**
 * 定义一个加载动画组件常量。它提供的是圆环加载动画
 */
const MY_LOADING_BORDER = new Bs5EffLoading('myOwnLoading1', LOADING_TYPE.border);

/**
 * 定义一个加载动画组件常量。它提供的是闪动的圆点加载动画
 */
const MY_LOADING_GROW = new Bs5EffLoading('myOwnLoading2', LOADING_TYPE.grow);

/**
 * 这是一个通用的加载动画初始化处理。它可以根据参数信息，自动配置关于加载动画隐藏和显示的事件处理。
 * @param {Bs5EffLoading} loadingCompt 加载动画组件对象。默认是 MY_LOADING_BORDER
 * @param {string} showEvent 动画显示时需要触发的事件名称。默认是 PDC_BEGIN
 * @param {string} hideEvent 动画隐藏时需要触发的事件名称。默认是 PDC_END
 * @param {Document|HTMLElement} bindingTarget 这是负责监听加载动画处理事件的对象。把事件绑定它上面，就可以根据事件处理 加载动画。默认时 document 对象。
 * @throws 如果参数检测不通过，会抛出 VerificationError
 */
function loadingInit(loadingCompt=MY_LOADING_BORDER, showEvent=PDC_BEGIN, hideEvent=PDC_END, bindingTarget=document){

    // 参数校验
    autoVnAofTargetObject(loadingCompt, {methodName:'loadingInit', paramName:'loadingCompt'}, Bs5EffLoading);
    let tmpShow = autoVnAofString(showEvent, false, {methodName:'loadingInit', paramName:'showEvent'});
    let tmpHide = autoVnAofString(hideEvent, false, {methodName:'loadingInit', paramName:'hideEvent'});
    throwError(
        bindingTarget!==document && !isHtmlElement(bindingTarget),
        mystdout`在函数 ${loadingInit} 中，检测到参数 bindingTarget=${bindingTarget} 不是 Document 对象，也不是 HTMLElement 对象，请注意参数类型。`,
        VerificationError
    );

    // 注册加载事件 与 动画处理绑定
    actionBinding(bindingTarget, tmpShow, event=>loadingCompt.show());
    actionBinding(bindingTarget, tmpHide, event=>loadingCompt.hide());
}

export {
    MY_LOADING_BORDER, MY_LOADING_GROW, loadingInit
}