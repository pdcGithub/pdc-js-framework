/**
 * In my license, all codes can be shared free of charge. 
 * However, If my code is taken for commercial use, please maintain it yourself. 
 * I am not obligated to take responsibility for your business application.
 * Here is my email "pangdongcan@live.com"
 * 
 * Copyright © 2026 Micheal Pang. All rights reserved.
 * 
 * @file This file "static.js" is part of project "pdc-js-framework" , which is belong to Michael Pang (It's Me).
 * @module uiComponents/static
 * @author Micheal Pang (Dongcan Pang)
 * @since 2026-07-17
 * @description 这里是一个 UI 组件的静态模块。它的主要作用是提供一些用于绘制的静态类或者常量。
 * 在使用时，直接调用 static.js 模块就行了。注意：请不要直接调用这个模块下面的子模块，因为它们可能修改路径。使用时，请统一导入本模块。
 */
"use strict"; // 这是严格模式下的 Javascript 代码

// ========= 导入子模块的内容
import { PROTECTED_GET_CONTENT, Bootstrap5Object } from "./static/base/Bootstrap5Object.js";

import { Bs5LoadingLayer } from "./static/others/Bs5LoadingLayer.js";

// ========= 导出
export{
    PROTECTED_GET_CONTENT, Bootstrap5Object,

    Bs5LoadingLayer
}