/**
 * In my license, all codes can be shared free of charge. 
 * However, If my code is taken for commercial use, please maintain it yourself. 
 * I am not obligated to take responsibility for your business application.
 * Here is my email "pangdongcan@live.com"
 * 
 * Copyright © 2026 Micheal Pang. All rights reserved.
 * 
 * @file This file "testStatic.js" is part of project "pdc-js-framework" , which is belong to Michael Pang (It's Me).
 * @author Micheal Pang (Dongcan Pang)
 * @since 2026-07-17
 * @description 这里是关于 UI 组件的静态模块 的测试。这里是一个对外接口，所以测试函数直接取子模块就行了。
 */
"use strict"; // 这是严格模式下的 Javascript 代码

// 导入 static 模块用于测试
import { PROTECTED_GET_CONTENT, Bootstrap5Object } from "../../uiComponents/static.js";

// 导入子模块的测试函数
import {
    testBootstrap5ObjectCreate, testBootstrap5ObjectAble, testBootstrap5ObjectGet, testBootstrap5ObjectAdd,
    testBootstrap5ObjectRemove, testBootstrap5ObjectHas, testBootstrap5ObjectClear, testBootstrap5ObjectTo,
    testBootstrap5ObjectProteced
} from "./static/base/testBootstrap5Object.js";

import { testBs5LoadingLayerConstructor } from "./static/others/testBs5LoadingLayer.js";

/**
 * 再增加一个测试 static 模块能否正常调用的测试
 */
function testStaticModule(){

    let t1 = new Bootstrap5Object();
    let t2 = t1[PROTECTED_GET_CONTENT]();
}

// =========== 导出测试函数
export {
    testBootstrap5ObjectCreate, testBootstrap5ObjectAble, testBootstrap5ObjectGet, testBootstrap5ObjectAdd,
    testBootstrap5ObjectRemove, testBootstrap5ObjectHas, testBootstrap5ObjectClear, testBootstrap5ObjectTo,
    testBootstrap5ObjectProteced,

    testBs5LoadingLayerConstructor,
    
    testStaticModule
}