/**
 * In my license, all codes can be shared free of charge. 
 * However, If my code is taken for commercial use, please maintain it yourself. 
 * I am not obligated to take responsibility for your business application.
 * Here is my email "pangdongcan@live.com"
 * 
 * Copyright © 2026 Micheal Pang. All rights reserved.
 * 
 * @file This file "testDynamic.js" is part of project "pdc-js-framework" , which is belong to Michael Pang (It's Me).
 * @author  Micheal Pang (Dongcan Pang)
 * @since  2026-07-21
 * @description 这里是关于 UI 组件的模块 的测试。这里是一个对外接口，所以测试函数直接取子模块就行了。
 */
"use strict"; // 这是严格模式下的 Javascript 代码

// ========== 导入测试工具
import { Assert } from "../testTools.js";
import {
    Bs5EffBaseComponent, 
    PROTECTED_GET_MYID, PROTECTED_GET_MYCSSCLASS, PROTECTED_GET_MYSUBCONFIG, PROTECTED_GET_BOOTSTRAPOBJECT,
    PROTECTED_SET_MYID, PROTECTED_SET_MYCSSCLASS, PROTECTED_SET_MYSUBCONFIG, PROTECTED_SET_BOOTSTRAPOBJECT,
    Bs5EffLoading
} from "../../uiComponents/dynamic.js";

// ========== 导入测试函数
import {
    testBs5EffConstructor, testBs5EffGet, testBs5EffSet, testBs5EffHtmlString,
    testBs5EffHtmlObject, testBs5EffWrite, testBs5EffShowAndHide, testBs5EffAble
} from "./dynamic/base/testBs5EffBaseComponent.js";
import {
    testBs5EffLoadingConstructor, testBs5EffLoadingShowAndHide
} from "./dynamic/others/testBs5EffLoading.js";

/**
 * 再增加一个测试 dynamic 模块能否正常调用的测试
 */
function testBs5EffModule(){
    
    let bs5effObj1 = new Bs5EffBaseComponent('test1111');
    Assert.equalsStrictly('test1111', bs5effObj1[PROTECTED_GET_MYID]());
}

// ========== 导出测试函数
export{
    testBs5EffConstructor, testBs5EffGet, testBs5EffSet, testBs5EffHtmlString,
    testBs5EffHtmlObject, testBs5EffWrite, testBs5EffShowAndHide, testBs5EffAble,

    testBs5EffLoadingConstructor, testBs5EffLoadingShowAndHide,
    
    testBs5EffModule
}