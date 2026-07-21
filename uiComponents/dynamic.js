/**
 * In my license, all codes can be shared free of charge. 
 * However, If my code is taken for commercial use, please maintain it yourself. 
 * I am not obligated to take responsibility for your business application.
 * Here is my email "pangdongcan@live.com"
 * 
 * Copyright © 2026 Micheal Pang. All rights reserved.
 * 
 * @file This file "dynamic.js" is part of project "pdc-js-framework" , which is belong to Michael Pang (It's Me).
 * @module uiComponents/dynamic
 * @author Micheal Pang (Dongcan Pang)
 * @since 2026-07-21
 * @description 这是 UI 组件的响应处理模块。它与 static.js 的区别：它有动作处理，它才是UI组件，而 static.js 是绘制 html 信息的。
 * 在使用时，直接调用 dynamic.js 模块就行了。注意：请不要直接调用这个模块下面的子模块，因为它们可能修改路径。使用时，请统一导入本模块。
 */
"use strict"; // 这是严格模式下的 Javascript 代码

// ========= 导入子模块的内容
import {
    Bs5EffBaseComponent, 
    PROTECTED_GET_MYID, PROTECTED_GET_MYCSSCLASS, PROTECTED_GET_MYSUBCONFIG, PROTECTED_GET_BOOTSTRAPOBJECT,
    PROTECTED_SET_MYID, PROTECTED_SET_MYCSSCLASS, PROTECTED_SET_MYSUBCONFIG, PROTECTED_SET_BOOTSTRAPOBJECT
} from "./dynamic/base/Bs5EffBaseComponent.js";

// ========= 导出
export {
    Bs5EffBaseComponent, 
    PROTECTED_GET_MYID, PROTECTED_GET_MYCSSCLASS, PROTECTED_GET_MYSUBCONFIG, PROTECTED_GET_BOOTSTRAPOBJECT,
    PROTECTED_SET_MYID, PROTECTED_SET_MYCSSCLASS, PROTECTED_SET_MYSUBCONFIG, PROTECTED_SET_BOOTSTRAPOBJECT
}