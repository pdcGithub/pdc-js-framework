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

import { myToString, mystdout } from "../../utils/string.js";
import { ParameterError } from "../../models/errors.js";

// =============== 导入测试工具

import { Assert } from "../testTools.js";

// =============== 开始测试

function testMyToString(){
    
    // 因为这是一个输出处理，建议人工检测，用于判定是否正常

    // 按照我的框架处理，数据大体有以下几个：
    // ===> 空（undefined\null\NaN）
    // ===> 字符串（基础+对象）
    // ===> 数字（基础+对象）
    // ===> 布尔（基础+对象）
    // ===> 正则
    // ===> Symbol
    // ===> 类
    // ===> 函数（有名函数，匿名函数，箭头函数）
    // ===> 集合对象（Map、Set、一维数组、二维数组）
    // ===> 普通对象(Object, 字面量，等等)

    console.log(new String(), '空 undefined', myToString(undefined));
    console.log(new String(), '空 null', myToString(null));
    console.log(new String(), '空 NaN', myToString(NaN));

    console.log(new String(), '字符串 基础', myToString(''));
    console.log(new String(), '字符串 基础', myToString('xxx'));
    console.log(new String(), '字符串 对象', myToString(new String('')));
    console.log(new String(), '字符串 对象', myToString(new String('yyy')));

    console.log(new String(), '数字 基础', myToString(-1));
    console.log(new String(), '数字 基础', myToString(0));
    console.log(new String(), '数字 基础', myToString(123));
    console.log(new String(), '数字 对象', myToString(new Number(-1)));
    console.log(new String(), '数字 对象', myToString(new Number(0)));
    console.log(new String(), '数字 对象', myToString(new Number(123)));

    console.log(new String(), '布尔 基础', myToString(true));
    console.log(new String(), '布尔 基础', myToString(false));
    console.log(new String(), '布尔 对象', myToString(new Boolean(true)));
    console.log(new String(), '布尔 对象', myToString(new Boolean(false)));

    console.log(new String(), '正则', myToString(/^123$/));
    console.log(new String(), '正则', myToString(new RegExp('123')));

    console.log(new String(), 'Symbol', myToString(Symbol.for('uid')));
    console.log(new String(), 'Symbol', myToString(Symbol.for('uid2')));

    console.log(new String(), '类', myToString(ParameterError));
    
    console.log(new String(), '函数', myToString(testMyToString));
    console.log(new String(), '函数', myToString(()=>{return 'test';}));

    console.log(new String(), '普通对象', myToString({a:1, b:1.23, c:'name'}));
    console.log(new String(), '普通对象', myToString(new ParameterError('测试111')));

    console.log(new String(), '数组', myToString([1, 2, 3, 4]));
    console.log(new String(), '数组', myToString([1, 2, 3, 4, Symbol.for('guid')]));
    console.log(new String(), '数组', myToString([1, 'a', 3.14, true, false, new Object()]));

    console.log(new String(), 'Set', myToString(new Set()));
    console.log(new String(), 'Set', myToString(new Set([1, 2, 3, 4, Symbol.for('ss1')])));
    console.log(new String(), 'Set', myToString(new Set([1, 'a', 3.14, true, false, new Object(), 
        Symbol.for('ss1'), ParameterError, testMyToString])));

    console.log(new String(), 'Map', myToString(new Map()));
    console.log(new String(), 'Map', myToString(new Map([
        ['name', 'jack'], ['age', 12.2], ['man', true], ['test', new Map()], [Symbol.for('key1'), Symbol.for('value1')],
        [Symbol.for('ss1'), 'xx'], [ParameterError, 'yy'], [testMyToString, 'zzz']
    ])));
}

function testMystdout(){

    // 因为这是一个输出处理，建议人工检测，用于判定是否正常

    // 按照我的框架处理，数据大体有以下几个：

    // ===> 空（undefined\null\NaN）
    // ===> 字符串（基础+对象）
    // ===> 数字（基础+对象）
    // ===> 布尔（基础+对象）
    // ===> 正则
    // ===> Symbol
    // ===> 类
    // ===> 函数（有名函数，匿名函数，箭头函数）
    // ===> 集合对象（Map、Set、一维数组、二维数组）
    // ===> 普通对象(Object, 字面量，等等)

    // 因为 myToString 的 处理上面已经测试了。所以这里比对效果是否相等就行了。

    Assert.equalsStrictly(`${myToString(undefined)}`, mystdout`${undefined}`);
    Assert.equalsStrictly(`${myToString(null)}`, mystdout`${null}`);
    Assert.equalsStrictly(`${myToString(NaN)}`, mystdout`${NaN}`);
    Assert.equalsStrictly(`${myToString('')}`, mystdout`${''}`);
    Assert.equalsStrictly(`${myToString('sss')}`, mystdout`${'sss'}`);
    Assert.equalsStrictly(`${myToString(new String(''))}`, mystdout`${new String('')}`);
    Assert.equalsStrictly(`${myToString(new String('sss'))}`, mystdout`${new String('sss')}`);
    Assert.equalsStrictly(`${myToString(123)}`, mystdout`${123}`);
    Assert.equalsStrictly(`${myToString(-1)}`, mystdout`${-1}`);
    Assert.equalsStrictly(`${myToString(new Number(123))}`, mystdout`${new Number(123)}`);
    Assert.equalsStrictly(`${myToString(new Number(-1))}`, mystdout`${new Number(-1)}`);
    Assert.equalsStrictly(`${myToString(true)}`, mystdout`${true}`);
    Assert.equalsStrictly(`${myToString(false)}`, mystdout`${false}`);
    Assert.equalsStrictly(`${myToString(new Boolean(true))}`, mystdout`${new Boolean(true)}`);
    Assert.equalsStrictly(`${myToString(new Boolean(false))}`, mystdout`${new Boolean(false)}`);
    Assert.equalsStrictly(`${myToString(/123/)}`, mystdout`${/123/}`);
    Assert.equalsStrictly(`${myToString(new RegExp('123'))}`, mystdout`${new RegExp('123')}`);
    Assert.equalsStrictly(`${myToString(Symbol.for('uid'))}`, mystdout`${Symbol.for('uid')}`);
    Assert.equalsStrictly(`${myToString(Error)}`, mystdout`${Error}`);
    Assert.equalsStrictly(`${myToString(testMystdout)}`, mystdout`${testMystdout}`);
    Assert.equalsStrictly(`${myToString(function(){})}`, mystdout`${function(){}}`);
    Assert.equalsStrictly(`${myToString(()=>{})}`, mystdout`${()=>{}}`);
    Assert.equalsStrictly(`${myToString(new Map())}`, mystdout`${new Map()}`);
    Assert.equalsStrictly(`${myToString(new Map([['a', 1], ['b', 2]]))}`, mystdout`${new Map([['a', 1], ['b', 2]])}`);
    Assert.equalsStrictly(`${myToString(new Set())}`, mystdout`${new Set()}`);
    Assert.equalsStrictly(`${myToString(new Set([1,2,3]))}`, mystdout`${new Set([1,2,3])}`);
    Assert.equalsStrictly(`${myToString([])}`, mystdout`${[]}`);
    Assert.equalsStrictly(`${myToString([1,2,3])}`, mystdout`${[1,2,3]}`);
    Assert.equalsStrictly(`${myToString([[]])}`, mystdout`${[[]]}`);
    Assert.equalsStrictly(`${myToString([[1,2,3]])}`, mystdout`${[[1,2,3]]}`);
    Assert.equalsStrictly(`${myToString(new Error())}`, mystdout`${new Error()}`);
    Assert.equalsStrictly(`${myToString(new Object())}`, mystdout`${new Object()}`);
    Assert.equalsStrictly(`${myToString({})}`, mystdout`${{}}`);
    Assert.equalsStrictly(`${myToString({a:1, b:2})}`, mystdout`${{a:1, b:2}}`);

    // 这里进行一个简单的测试，看看 模板字符有没有变形
    Assert.equalsStrictly(`你好，我是tom，今年15岁。`, mystdout`你好，我是${'tom'}，今年${15}岁。`);
    // 这里会抛出 TypeError
    Assert.throwsErrors(()=>{ `Here is a ${Symbol('uid')}. This one ${Symbol.for('guid')} is the same.` }, TypeError)
    // 加上 mystdout 后，不会抛异常。
    Assert.equalsStrictly(
        'Here is a Symbol(uid). This one Symbol(guid) is the same.', 
        mystdout`Here is a ${Symbol('uid')}. This one ${Symbol.for('guid')} is the same.`
    );
}

// =============== 导出测试函数，用于测试结果显示

export {
    testMyToString, testMystdout
}