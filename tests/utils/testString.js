/**
 * In my license, all codes can be shared free of charge. 
 * However, If my code is taken for commercial use, please maintain it yourself. 
 * I am not obligated to take responsibility for your business application.
 * Here is my email "pangdongcan@live.com"
 * 
 * Copyright © 2026 Micheal Pang. All rights reserved.
 * 
 * @file This file "testString.js" is part of project "pdc-js-framework" , which is belong to Michael Pang (It's Me).
 * @author  Micheal Pang (Dongcan Pang)
 * @since  2026-06-15
 * @description  这是关于 utils/string.js 模块的测试。
 */
"use strict"; // 这是严格模式下的 Javascript 代码

// =============== 导入要测试的函数

import { myToString } from "../../utils/string.js";
import { ParameterError } from "../../models/errors.js";

// =============== 开始测试

function testMyToString(){
    
    // 因为这是一个输出处理，建议人工检测，用于判定是否正常

    // 按照我的框架处理，数据大体有以下几个：
    // ===> 空（undefined\null\NaN）、字符串（基础+对象）、数字（基础+对象）、布尔（基础+对象）、正则、Symbol、类、函数、普通对象、数组

    console.log(new Date(), '空 undefined', myToString(undefined));
    console.log(new Date(), '空 null', myToString(null));
    console.log(new Date(), '空 NaN', myToString(NaN));

    console.log(new Date(), '字符串 基础', myToString(''));
    console.log(new Date(), '字符串 基础', myToString('xxx'));
    console.log(new Date(), '字符串 对象', myToString(new String('')));
    console.log(new Date(), '字符串 对象', myToString(new String('yyy')));

    console.log(new Date(), '数字 基础', myToString(-1));
    console.log(new Date(), '数字 基础', myToString(0));
    console.log(new Date(), '数字 基础', myToString(123));
    console.log(new Date(), '数字 对象', myToString(new Number(-1)));
    console.log(new Date(), '数字 对象', myToString(new Number(0)));
    console.log(new Date(), '数字 对象', myToString(new Number(123)));

    console.log(new Date(), '布尔 基础', myToString(true));
    console.log(new Date(), '布尔 基础', myToString(false));
    console.log(new Date(), '布尔 对象', myToString(new Boolean(true)));
    console.log(new Date(), '布尔 对象', myToString(new Boolean(false)));

    console.log(new Date(), '正则', myToString(/^123$/));
    console.log(new Date(), '正则', myToString(new RegExp('123')));

    console.log(new Date(), 'Symbol', myToString(Symbol.for('uid')));
    console.log(new Date(), 'Symbol', myToString(Symbol.for('uid2')));

    console.log(new Date(), '类', myToString(ParameterError));
    
    console.log(new Date(), '函数', myToString(testMyToString));
    console.log(new Date(), '函数', myToString(()=>{return 'test';}));

    console.log(new Date(), '普通对象', myToString({a:1, b:1.23, c:'name'}));
    console.log(new Date(), '普通对象', myToString(new ParameterError('测试111')));

    console.log(new Date(), '数组', myToString([1, 2, 3, 4]));
    console.log(new Date(), '数组', myToString([1, 2, 3, 4, Symbol.for('guid')]));
    console.log(new Date(), '数组', myToString([1, 'a', 3.14, true, false, new Object()]));

    console.log(new Date(), 'Set', myToString(new Set()));
    console.log(new Date(), 'Set', myToString(new Set([1, 2, 3, 4, Symbol.for('ss1')])));
    console.log(new Date(), 'Set', myToString(new Set([1, 'a', 3.14, true, false, new Object(), 
        Symbol.for('ss1'), ParameterError, testMyToString])));

    console.log(new Date(), 'Map', myToString(new Map()));
    console.log(new Date(), 'Map', myToString(new Map([
        ['name', 'jack'], ['age', 12.2], ['man', true], ['test', new Map()], [Symbol.for('key1'), Symbol.for('value1')],
        [Symbol.for('ss1'), 'xx'], [ParameterError, 'yy'], [testMyToString, 'zzz']
    ])));
}

// =============== 导出测试函数，用于测试结果显示

export {
    testMyToString
}