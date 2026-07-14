/**
 * In my license, all codes can be shared free of charge. 
 * However, If my code is taken for commercial use, please maintain it yourself. 
 * I am not obligated to take responsibility for your business application.
 * Here is my email "pangdongcan@live.com"
 * 
 * Copyright © 2026 Micheal Pang. All rights reserved.
 * 
 * @file This file "testUitools.js" is part of project "pdc-js-framework" , which is belong to Michael Pang (It's Me).
 * @author  Micheal Pang (Dongcan Pang)
 * @since  2026-07-14
 * @description  这里是 UI Components 组件的 uitools 模块测试
 */
"use strict"; // 这是严格模式下的 Javascript 代码

// ========== 导入测试工具

import { Assert } from "../testTools.js";
import { isRegexpOk } from "../../utils/datatype.js";

// ========== 导入测试对象

import { BTN_GROUP_SIZE, BTN_SIZE, BTN_COR, myRandNumStr } from "../../uiComponents/uitools.js";

// ========== 开始测试

function testConstants() {
    // 
    Assert.equalsStrictly('btn-group-sm', BTN_GROUP_SIZE.small);
    Assert.equalsStrictly('', BTN_GROUP_SIZE.normal);
    Assert.equalsStrictly('btn-group-lg', BTN_GROUP_SIZE.big);
    // 
    Assert.equalsStrictly('btn-lg', BTN_SIZE.big);
    Assert.equalsStrictly('', BTN_SIZE.normal);
    Assert.equalsStrictly('btn-sm', BTN_SIZE.small);
    //
    Assert.equalsStrictly('primary', BTN_COR.primary);
    Assert.equalsStrictly('secondary', BTN_COR.secondary);
    Assert.equalsStrictly('success', BTN_COR.success);
    Assert.equalsStrictly('info', BTN_COR.info);
    Assert.equalsStrictly('warning', BTN_COR.warning);
    Assert.equalsStrictly('danger', BTN_COR.danger);
    Assert.equalsStrictly('light', BTN_COR.light);
    Assert.equalsStrictly('dark', BTN_COR.dark);
    Assert.equalsStrictly('link', BTN_COR.link);
}

function testMyRandNumStr(){
    // 这里是一个循环测试。
    // 因为数字长度不太稳定。所以长度大于4就可以避免id重复
    for(let i=0;i<100;i++){
        // 
        let tmp = myRandNumStr();
        // console.log(tmp);
        Assert.equalsStrictly(true, isRegexpOk(tmp, /^[0-9]{4,}$/)); // 字符为数字信息，且长度大于等于4个数字
    }
}

// ========== 导出测试函数

export {
    testConstants, testMyRandNumStr
}