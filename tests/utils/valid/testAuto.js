/**
 * In my license, all codes can be shared free of charge. 
 * However, If my code is taken for commercial use, please maintain it yourself. 
 * I am not obligated to take responsibility for your business application.
 * Here is my email "pangdongcan@live.com"
 * 
 * Copyright © 2026 Micheal Pang. All rights reserved.
 * 
 * @file This file "testAuto.js" is part of project "pdc-js-framework" , which is belong to Michael Pang (It's Me).
 * @author  Micheal Pang (Dongcan Pang)
 * @since  2026-06-24
 * @description  这是关于 utils/valid/auto.js 模块的测试。auto.js 是 valid.js 模块的子模块
 */
"use strict"; // 这是严格模式下的 Javascript 代码

import { Assert, AssertError } from "../../testTools.js";
import { VerificationError, ParameterError } from "../../../models/errors.js";
import { myToString } from "../../../utils/string.js";
import {
    DESC_INFO_OBJ, handleDescInfoObj,
    autoVnAofString, autoVnAofNumber, autoVnAofBoolean, autoVnAofRegExp,
    autoVnAofMap, autoVnAofSet, 
    autoVnAofArray, autoVnAof2DArray,
    autoVnAofObjectLiteral, autoVnAofTargetObject, autoVnAofTargetObjectSet, autoVnAofTargetObjectArray, autoVnAofTargetObject2DArray,
    autoVnAofHtmlElement, autoVnAofHtmlElementList
} from "../../../utils/valid/auto.js";

// 在我的框架中， js 的数据类型中主要有以下几种：
// ===> 空（undefined\null\NaN）、
// ===> 字符串（基础+对象）、数字（基础+对象）、布尔（基础+对象）、Symbol、类、函数、
// ===> 数组、Map、Set、
// ===> 正则、普通对象

// ============ 开始测试

function testHandleDescInfoObj(){
    // 默认
    let defaultValue = `${myToString(DESC_INFO_OBJ.className)} - ${myToString(DESC_INFO_OBJ.methodName)} - ${myToString(DESC_INFO_OBJ.paramName)}`;
    // 按照处理方式，如果参数不匹配的话，直接输出一个 默认的字符串。
    Assert.equalsStrictly(defaultValue, handleDescInfoObj(undefined)); // undefined 调取默认值。
    Assert.equalsStrictly(defaultValue, handleDescInfoObj(null));
    Assert.equalsStrictly(defaultValue, handleDescInfoObj(NaN));
    // 字符
    Assert.equalsStrictly(defaultValue, handleDescInfoObj(''));
    Assert.equalsStrictly(defaultValue, handleDescInfoObj('sss'));
    Assert.equalsStrictly(defaultValue, handleDescInfoObj(new String('')));
    Assert.equalsStrictly(defaultValue, handleDescInfoObj(new String('sss')));
    // 数字
    Assert.equalsStrictly(defaultValue, handleDescInfoObj(123));
    Assert.equalsStrictly(defaultValue, handleDescInfoObj(new Number(123)));
    // 布尔
    Assert.equalsStrictly(defaultValue, handleDescInfoObj(true));
    Assert.equalsStrictly(defaultValue, handleDescInfoObj(false));
    Assert.equalsStrictly(defaultValue, handleDescInfoObj(new Boolean(true)));
    Assert.equalsStrictly(defaultValue, handleDescInfoObj(new Boolean(false)));
    // Symbol
    Assert.equalsStrictly(defaultValue, handleDescInfoObj(Symbol.for('guid')));
    // 类
    Assert.equalsStrictly(defaultValue, handleDescInfoObj(Error));
    // 函数
    Assert.equalsStrictly(defaultValue, handleDescInfoObj(testHandleDescInfoObj));
    Assert.equalsStrictly(defaultValue, handleDescInfoObj(()=>{}));
    Assert.equalsStrictly(defaultValue, handleDescInfoObj(function(){}));
    // 数组
    Assert.equalsStrictly(defaultValue, handleDescInfoObj([]));
    Assert.equalsStrictly(defaultValue, handleDescInfoObj([1,2,3]));
    Assert.equalsStrictly(defaultValue, handleDescInfoObj([[]]));
    Assert.equalsStrictly(defaultValue, handleDescInfoObj([[2,3,5]]));
    // Map
    Assert.equalsStrictly(defaultValue, handleDescInfoObj(new Map()));
    Assert.equalsStrictly(defaultValue, handleDescInfoObj(new Map([['a', 1], ['b', 2]])));
    // Set
    Assert.equalsStrictly(defaultValue, handleDescInfoObj(new Set()));
    Assert.equalsStrictly(defaultValue, handleDescInfoObj(new Set([1,2,4])));
    // 正则
    Assert.equalsStrictly(defaultValue, handleDescInfoObj(/123/));
    Assert.equalsStrictly(defaultValue, handleDescInfoObj(new RegExp('123')));
    // 普通对象（不是指定属性，或者指定属性不是非空字符串，则该属性显示默认值）
    Assert.equalsStrictly(defaultValue, handleDescInfoObj({}));
    Assert.equalsStrictly(defaultValue, handleDescInfoObj(new Object()));
    Assert.equalsStrictly(defaultValue, handleDescInfoObj({a:1, b:2, c:3}));
    Assert.equalsStrictly(`测试类 - ${DESC_INFO_OBJ.methodName} - ${DESC_INFO_OBJ.paramName}`, handleDescInfoObj({className:'测试类', xxx:'xxx', yyy:'yyy'}));
    Assert.equalsStrictly(`测试类 - 测试方法 - ${DESC_INFO_OBJ.paramName}`, handleDescInfoObj({className:'测试类', methodName:'测试方法', yyy:'yyy'}));
    Assert.equalsStrictly(`测试类 - 测试方法 - 测试属性`, handleDescInfoObj({className:'测试类', methodName:'测试方法', paramName:'测试属性'}));
    Assert.equalsStrictly(`测试类 - ${DESC_INFO_OBJ.methodName} - ${DESC_INFO_OBJ.paramName}`, handleDescInfoObj({className:'测试类', methodName:123, paramName:true}));
    Assert.equalsStrictly(`测试类 - ${DESC_INFO_OBJ.methodName} - ${DESC_INFO_OBJ.paramName}`, handleDescInfoObj({className:'测试类'}));
    Assert.equalsStrictly(`${DESC_INFO_OBJ.className} - 测试方法 - ${DESC_INFO_OBJ.paramName}`, handleDescInfoObj({methodName:'测试方法'}));
    Assert.equalsStrictly(`${DESC_INFO_OBJ.className} - ${DESC_INFO_OBJ.methodName} - 测试属性`, handleDescInfoObj({paramName:'测试属性'}));
}

function testAutoVnAofString() {
    // 描述对象（这个的测试代码，在 testHandleDescInfoObj）
    let descObj = { methodName:testAutoVnAofString.name };
    // 第一个参数
    Assert.throwsErrors(()=>{ autoVnAofString(undefined, true, descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofString(null, true, descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofString(NaN, true, descObj); }, VerificationError);
    Assert.throwsErrorsNone(()=>{ autoVnAofString('', true, descObj); });
    Assert.throwsErrorsNone(()=>{ autoVnAofString('ssss', true, descObj); });
    Assert.throwsErrorsNone(()=>{ autoVnAofString(new String(''), true, descObj); });
    Assert.throwsErrorsNone(()=>{ autoVnAofString(new String('ssss'), true, descObj); });
    Assert.throwsErrors(()=>{ autoVnAofString(123, true, descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofString(new Number(123), true, descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofString(true, true, descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofString(false, true, descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofString(new Boolean(true), true, descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofString(new Boolean(false), true, descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofString(Symbol.for('guid'), true, descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofString(Error, true, descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofString(ParameterError, true, descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofString(testHandleDescInfoObj, true, descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofString(()=>{}, true, descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofString(function(){}, true, descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofString([], true, descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofString([1,2,3], true, descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofString([[]], true, descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofString([[1,2,3], [4,5,6]], true, descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofString(new Map(), true, descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofString(new Map([['a',1],['b',2]]), true, descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofString(new Set(), true, descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofString(new Set([1,2,3]), true, descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofString(/123/, true, descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofString(new RegExp('123'), true, descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofString({}, true, descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofString({a:1, b:2}, true, descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofString(new Object(), true, descObj); }, VerificationError);
    // 第二个参数
    Assert.throwsErrorsNone(()=>{ autoVnAofString('', undefined, descObj); }, VerificationError); // 默认
    Assert.throwsErrors(()=>{ autoVnAofString('', null, descObj); }, ParameterError);
    Assert.throwsErrors(()=>{ autoVnAofString('', NaN, descObj); }, ParameterError);
    Assert.throwsErrors(()=>{ autoVnAofString('', '', descObj); }, ParameterError);
    Assert.throwsErrors(()=>{ autoVnAofString('', 'ssss', descObj); }, ParameterError);
    Assert.throwsErrors(()=>{ autoVnAofString('', new String(''), descObj); }, ParameterError);
    Assert.throwsErrors(()=>{ autoVnAofString('', new String('ssss'), descObj); }, ParameterError);
    Assert.throwsErrors(()=>{ autoVnAofString('', 123, descObj); }, ParameterError);
    Assert.throwsErrors(()=>{ autoVnAofString('', new Number(123), descObj); }, ParameterError);
    Assert.throwsErrorsNone(()=>{ autoVnAofString('', true, descObj); });
    Assert.throwsErrors(()=>{ autoVnAofString('', false, descObj); }, VerificationError);
    Assert.throwsErrorsNone(()=>{ autoVnAofString('', new Boolean(true), descObj); });
    Assert.throwsErrors(()=>{ autoVnAofString('', new Boolean(false), descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofString('', Symbol.for('guid'), descObj); }, ParameterError);
    Assert.throwsErrors(()=>{ autoVnAofString('', Error, descObj); }, ParameterError);
    Assert.throwsErrors(()=>{ autoVnAofString('', ParameterError, descObj); }, ParameterError);
    Assert.throwsErrors(()=>{ autoVnAofString('', testHandleDescInfoObj, descObj); }, ParameterError);
    Assert.throwsErrors(()=>{ autoVnAofString('', ()=>{}, descObj); }, ParameterError);
    Assert.throwsErrors(()=>{ autoVnAofString('', function(){}, descObj); }, ParameterError);
    Assert.throwsErrors(()=>{ autoVnAofString('', [], descObj); }, ParameterError);
    Assert.throwsErrors(()=>{ autoVnAofString('', [1,2,3], descObj); }, ParameterError);
    Assert.throwsErrors(()=>{ autoVnAofString('', [[]], descObj); }, ParameterError);
    Assert.throwsErrors(()=>{ autoVnAofString('', [[1,2,3], [4,5,6]], descObj); }, ParameterError);
    Assert.throwsErrors(()=>{ autoVnAofString('', new Map(), descObj); }, ParameterError);
    Assert.throwsErrors(()=>{ autoVnAofString('', new Map([['a',1],['b',2]]), descObj); }, ParameterError);
    Assert.throwsErrors(()=>{ autoVnAofString('', new Set(), descObj); }, ParameterError);
    Assert.throwsErrors(()=>{ autoVnAofString('', new Set([1,2,3]), descObj); }, ParameterError);
    Assert.throwsErrors(()=>{ autoVnAofString('', /123/, descObj); }, ParameterError);
    Assert.throwsErrors(()=>{ autoVnAofString('', new RegExp('123'), descObj); }, ParameterError);
    Assert.throwsErrors(()=>{ autoVnAofString('', {}, descObj); }, ParameterError);
    Assert.throwsErrors(()=>{ autoVnAofString('', {a:1, b:2}, descObj); }, ParameterError);
    Assert.throwsErrors(()=>{ autoVnAofString('', new Object(), descObj); }, ParameterError);
    // 简单测试下 descObj 
    Assert.throwsErrorsWithMsg(()=>{
        autoVnAofString(123, false, {className:'类1', methodName:'方法2', paramName:'参数3'});
    }, /^类1\s+\-\s+方法2\s+\-\s+参数3\=.+/, VerificationError);
    // 测试下数值返回
    Assert.equalsStrictly('', autoVnAofString('', true));
    Assert.equalsStrictly('sss', autoVnAofString('sss', true));
    Assert.equalsStrictly('  sss  ', autoVnAofString('  sss  ', true));
    Assert.throwsErrors(()=>{ Assert.equalsStrictly('', autoVnAofString('', false)); }, VerificationError);
    Assert.throwsErrors(()=>{ Assert.equalsStrictly('    ', autoVnAofString('', false)); }, VerificationError);
    Assert.equalsStrictly('sss', autoVnAofString('sss', false));
    Assert.equalsStrictly('  sss  ', autoVnAofString('  sss  ', false));
}

function testAutoVnAofNumber() {
    // 描述对象（这个的测试代码，在 testHandleDescInfoObj）
    let descObj = { methodName:testAutoVnAofNumber.name };
    // 第一个参数
    Assert.throwsErrors(()=>{ autoVnAofNumber(undefined, descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofNumber(null, descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofNumber(NaN, descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofNumber('', descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofNumber('ssss', descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofNumber(new String(''), descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofNumber(new String('ssss'), descObj); }, VerificationError);
    Assert.throwsErrorsNone(()=>{ autoVnAofNumber(123, descObj); });
    Assert.throwsErrorsNone(()=>{ autoVnAofNumber(new Number(123), descObj); });
    Assert.throwsErrors(()=>{ autoVnAofNumber(true, descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofNumber(false, descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofNumber(new Boolean(true), descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofNumber(new Boolean(false), descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofNumber(Symbol.for('guid'), descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofNumber(Error, descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofNumber(ParameterError, descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofNumber(testHandleDescInfoObj, descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofNumber(()=>{}, descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofNumber(function(){}, descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofNumber([], descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofNumber([1,2,3], descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofNumber([[]], descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofNumber([[1,2,3], [4,5,6]], descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofNumber(new Map(), descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofNumber(new Map([['a',1],['b',2]]), descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofNumber(new Set(), descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofNumber(new Set([1,2,3]), descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofNumber(/123/, descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofNumber(new RegExp('123'), descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofNumber({}, descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofNumber({a:1, b:2}, descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofNumber(new Object(), descObj); }, VerificationError);
    // 简单测试下 descObj 
    Assert.throwsErrorsWithMsg(()=>{
        autoVnAofNumber('123', {className:'类1', methodName:'方法2', paramName:'参数3'});
    }, /^类1\s+\-\s+方法2\s+\-\s+参数3\=.+/, VerificationError);
    // 测试下数值返回
    Assert.equalsStrictly(123, autoVnAofNumber(123));
    Assert.equalsStrictly(1.235, autoVnAofNumber(new Number(1.235)));
    Assert.throwsErrors(()=>{ Assert.equalsStrictly(123, autoVnAofNumber('')); }, VerificationError);
}

function testAutoVnAofBoolean() {
    // 描述对象（这个的测试代码，在 testHandleDescInfoObj）
    let descObj = { methodName:testAutoVnAofBoolean.name };
    // 第一个参数
    Assert.throwsErrors(()=>{ autoVnAofBoolean(undefined, descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofBoolean(null, descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofBoolean(NaN, descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofBoolean('', descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofBoolean('ssss', descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofBoolean(new String(''), descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofBoolean(new String('ssss'), descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofBoolean(123, descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofBoolean(new Number(123), descObj); }, VerificationError);
    Assert.throwsErrorsNone(()=>{ autoVnAofBoolean(true, descObj); });
    Assert.throwsErrorsNone(()=>{ autoVnAofBoolean(false, descObj); });
    Assert.throwsErrorsNone(()=>{ autoVnAofBoolean(new Boolean(true), descObj); });
    Assert.throwsErrorsNone(()=>{ autoVnAofBoolean(new Boolean(false), descObj); });
    Assert.throwsErrors(()=>{ autoVnAofBoolean(Symbol.for('guid'), descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofBoolean(Error, descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofBoolean(ParameterError, descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofBoolean(testHandleDescInfoObj, descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofBoolean(()=>{}, descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofBoolean(function(){}, descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofBoolean([], descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofBoolean([1,2,3], descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofBoolean([[]], descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofBoolean([[1,2,3], [4,5,6]], descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofBoolean(new Map(), descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofBoolean(new Map([['a',1],['b',2]]), descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofBoolean(new Set(), descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofBoolean(new Set([1,2,3]), descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofBoolean(/123/, descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofBoolean(new RegExp('123'), descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofBoolean({}, descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofBoolean({a:1, b:2}, descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofBoolean(new Object(), descObj); }, VerificationError);
    // 简单测试下 descObj 
    Assert.throwsErrorsWithMsg(()=>{
        autoVnAofBoolean('123', {className:'类1', methodName:'方法2', paramName:'参数3'});
    }, /^类1\s+\-\s+方法2\s+\-\s+参数3\=.+/, VerificationError);
    // 测试下数值返回
    Assert.equalsStrictly(true, autoVnAofBoolean(true));
    Assert.equalsStrictly(false, autoVnAofBoolean(new Boolean(false)));
    Assert.throwsErrors(()=>{ Assert.equalsStrictly(true, autoVnAofBoolean('')); }, VerificationError);
}

function testAutoVnAofRegExp() {
    // 描述对象（这个的测试代码，在 testHandleDescInfoObj）
    let descObj = { methodName:testAutoVnAofRegExp.name };
    // 第一个参数
    Assert.throwsErrors(()=>{ autoVnAofRegExp(undefined, descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofRegExp(null, descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofRegExp(NaN, descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofRegExp('', descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofRegExp('ssss', descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofRegExp(new String(''), descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofRegExp(new String('ssss'), descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofRegExp(123, descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofRegExp(new Number(123), descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofRegExp(true, descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofRegExp(false, descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofRegExp(new Boolean(true), descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofRegExp(new Boolean(false), descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofRegExp(Symbol.for('guid'), descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofRegExp(Error, descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofRegExp(ParameterError, descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofRegExp(testHandleDescInfoObj, descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofRegExp(()=>{}, descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofRegExp(function(){}, descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofRegExp([], descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofRegExp([1,2,3], descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofRegExp([[]], descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofRegExp([[1,2,3], [4,5,6]], descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofRegExp(new Map(), descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofRegExp(new Map([['a',1],['b',2]]), descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofRegExp(new Set(), descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofRegExp(new Set([1,2,3]), descObj); }, VerificationError);
    Assert.throwsErrorsNone(()=>{ autoVnAofRegExp(/123/, descObj); });
    Assert.throwsErrorsNone(()=>{ autoVnAofRegExp(new RegExp('123'), descObj); });
    Assert.throwsErrors(()=>{ autoVnAofRegExp({}, descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofRegExp({a:1, b:2}, descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofRegExp(new Object(), descObj); }, VerificationError);
    // 简单测试下 descObj 
    Assert.throwsErrorsWithMsg(()=>{
        autoVnAofRegExp('123', {className:'类1', methodName:'方法2', paramName:'参数3'});
    }, /^类1\s+\-\s+方法2\s+\-\s+参数3\=.+/, VerificationError);
    // 测试下数值返回
    let rExcepted = /123/;
    let r1 = autoVnAofRegExp(/123/, descObj);
    let r2 = autoVnAofRegExp(new RegExp('123'), descObj);
    let r3 = autoVnAofRegExp(/555555/, descObj);
    // 正则是对象，所以要 toString 比较正则表达式的字符串
    Assert.equalsStrictly(rExcepted.toString(), r1.toString());
    Assert.equalsStrictly(rExcepted.toString(), r2.toString());
    // 这里是不等的，抛 AssertError 。
    Assert.throwsErrors(()=>{ Assert.equalsStrictly(rExcepted.toString(), r3.toString()); }, AssertError);
}

function testAutoVnAofMap() {
    // 描述对象（这个的测试代码，在 testHandleDescInfoObj）
    let descObj = { methodName:testAutoVnAofMap.name };
    // 第一个参数
    Assert.throwsErrors(()=>{ autoVnAofMap(undefined, descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofMap(null, descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofMap(NaN, descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofMap('', descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofMap('ssss', descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofMap(new String(''), descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofMap(new String('ssss'), descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofMap(123, descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofMap(new Number(123), descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofMap(true, descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofMap(false, descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofMap(new Boolean(true), descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofMap(new Boolean(false), descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofMap(Symbol.for('guid'), descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofMap(Error, descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofMap(ParameterError, descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofMap(testHandleDescInfoObj, descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofMap(()=>{}, descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofMap(function(){}, descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofMap([], descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofMap([1,2,3], descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofMap([[]], descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofMap([[1,2,3], [4,5,6]], descObj); }, VerificationError);
    Assert.throwsErrorsNone(()=>{ autoVnAofMap(new Map(), descObj); });
    Assert.throwsErrorsNone(()=>{ autoVnAofMap(new Map([['a',1],['b',2]]), descObj); });
    Assert.throwsErrors(()=>{ autoVnAofMap(new Set(), descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofMap(new Set([1,2,3]), descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofMap(/123/, descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofMap(new RegExp('123'), descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofMap({}, descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofMap({a:1, b:2}, descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofMap(new Object(), descObj); }, VerificationError);
    // 简单测试下 descObj 
    Assert.throwsErrorsWithMsg(()=>{
        autoVnAofMap('123', {className:'类1', methodName:'方法2', paramName:'参数3'});
    }, /^类1\s+\-\s+方法2\s+\-\s+参数3\=.+/, VerificationError);
    // 测试下数值返回
    let rExcepted = new Map([['a', 1], ['b', 2]]);
    let r1 = autoVnAofMap(new Map([['a', 1], ['b', 2]]), descObj);
    let r2 = autoVnAofMap(new Map([['a', 1], ['b', 2]]), descObj);
    let r3 = autoVnAofMap(new Map([['A', 1], ['B', 2]]), descObj);
    // Map 是容器对象
    Assert.mapEquals(rExcepted, r1);
    Assert.mapEquals(rExcepted, r2);
    // 这里是不等的。
    Assert.throwsErrors(()=>{ Assert.mapEquals(rExcepted, r3); }, AssertError);
}

function testAutoVnAofSet() {
    // 描述对象（这个的测试代码，在 testHandleDescInfoObj）
    let descObj = { methodName:testAutoVnAofSet.name };
    // 第一个参数
    Assert.throwsErrors(()=>{ autoVnAofSet(undefined, descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofSet(null, descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofSet(NaN, descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofSet('', descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofSet('ssss', descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofSet(new String(''), descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofSet(new String('ssss'), descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofSet(123, descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofSet(new Number(123), descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofSet(true, descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofSet(false, descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofSet(new Boolean(true), descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofSet(new Boolean(false), descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofSet(Symbol.for('guid'), descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofSet(Error, descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofSet(ParameterError, descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofSet(testHandleDescInfoObj, descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofSet(()=>{}, descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofSet(function(){}, descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofSet([], descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofSet([1,2,3], descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofSet([[]], descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofSet([[1,2,3], [4,5,6]], descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofSet(new Map(), descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofSet(new Map([['a',1],['b',2]]), descObj); }, VerificationError);
    Assert.throwsErrorsNone(()=>{ autoVnAofSet(new Set(), descObj); });
    Assert.throwsErrorsNone(()=>{ autoVnAofSet(new Set([1,2,3]), descObj); });
    Assert.throwsErrors(()=>{ autoVnAofSet(/123/, descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofSet(new RegExp('123'), descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofSet({}, descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofSet({a:1, b:2}, descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofSet(new Object(), descObj); }, VerificationError);
    // 简单测试下 descObj 
    Assert.throwsErrorsWithMsg(()=>{
        autoVnAofSet('123', {className:'类1', methodName:'方法2', paramName:'参数3'});
    }, /^类1\s+\-\s+方法2\s+\-\s+参数3\=.+/, VerificationError);
    // 测试下数值返回
    let rExcepted = new Set([1,2,3])
    let r1 = autoVnAofSet(new Set([1,2,3]), descObj);
    let r2 = autoVnAofSet(new Set([3,4,5]), descObj);
    // Set 是容器对象
    Assert.equalsStrictly(true, rExcepted.size===r1.size);
    let rEArr = Array.from(rExcepted.values());
    let r1Arr = Array.from(r1.values());
    Assert.equalsStrictly(true, rEArr.every(val=>r1Arr.includes(val)));
    // 
    let r2Arr = Array.from(r2.values());
    Assert.equalsStrictly(false, rEArr.every(val=>r2Arr.includes(val)));
}

function testAutoVnAofArray() {
    // 描述对象（这个的测试代码，在 testHandleDescInfoObj）
    let descObj = { methodName:testAutoVnAofArray.name };
    // 第一个参数
    Assert.throwsErrors(()=>{ autoVnAofArray(undefined, descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofArray(null, descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofArray(NaN, descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofArray('', descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofArray('ssss', descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofArray(new String(''), descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofArray(new String('ssss'), descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofArray(123, descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofArray(new Number(123), descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofArray(true, descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofArray(false, descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofArray(new Boolean(true), descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofArray(new Boolean(false), descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofArray(Symbol.for('guid'), descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofArray(Error, descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofArray(ParameterError, descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofArray(testHandleDescInfoObj, descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofArray(()=>{}, descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofArray(function(){}, descObj); }, VerificationError);
    Assert.throwsErrorsNone(()=>{ autoVnAofArray([], descObj); });
    Assert.throwsErrorsNone(()=>{ autoVnAofArray([1,2,3], descObj); });
    Assert.throwsErrorsNone(()=>{ autoVnAofArray([[]], descObj); });
    Assert.throwsErrorsNone(()=>{ autoVnAofArray([[1,2,3], [4,5,6]], descObj); });
    Assert.throwsErrors(()=>{ autoVnAofArray(new Map(), descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofArray(new Map([['a',1],['b',2]]), descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofArray(new Set(), descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofArray(new Set([1,2,3]), descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofArray(/123/, descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofArray(new RegExp('123'), descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofArray({}, descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofArray({a:1, b:2}, descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofArray(new Object(), descObj); }, VerificationError);
    // 简单测试下 descObj 
    Assert.throwsErrorsWithMsg(()=>{
        autoVnAofArray('123', {className:'类1', methodName:'方法2', paramName:'参数3'});
    }, /^类1\s+\-\s+方法2\s+\-\s+参数3\=.+/, VerificationError);
    // 测试下数值返回
    let rExcepted = [1,2,3];
    let r1 = autoVnAofArray([1,2,3], descObj);
    let r2 = autoVnAofArray([3,4,5], descObj);
    // Array 是容器对象
    Assert.equalsStrictly(true, rExcepted.length===r1.length);
    Assert.equalsStrictly(true, rExcepted.every(val=>r1.includes(val)));
    //
    Assert.equalsStrictly(false, rExcepted.every(val=>r2.includes(val)));
}

function testAutoVnAof2DArray() {
    // 描述对象（这个的测试代码，在 testHandleDescInfoObj）
    let descObj = { methodName:testAutoVnAof2DArray.name };
    // 第一个参数
    Assert.throwsErrors(()=>{ autoVnAof2DArray(undefined, descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAof2DArray(null, descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAof2DArray(NaN, descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAof2DArray('', descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAof2DArray('ssss', descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAof2DArray(new String(''), descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAof2DArray(new String('ssss'), descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAof2DArray(123, descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAof2DArray(new Number(123), descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAof2DArray(true, descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAof2DArray(false, descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAof2DArray(new Boolean(true), descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAof2DArray(new Boolean(false), descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAof2DArray(Symbol.for('guid'), descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAof2DArray(Error, descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAof2DArray(ParameterError, descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAof2DArray(testHandleDescInfoObj, descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAof2DArray(()=>{}, descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAof2DArray(function(){}, descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAof2DArray([], descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAof2DArray([1,2,3], descObj); }, VerificationError);
    Assert.throwsErrorsNone(()=>{ autoVnAof2DArray([[]], descObj); });
    Assert.throwsErrorsNone(()=>{ autoVnAof2DArray([[1,2,3], [4,5,6]], descObj); });
    Assert.throwsErrors(()=>{ autoVnAof2DArray(new Map(), descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAof2DArray(new Map([['a',1],['b',2]]), descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAof2DArray(new Set(), descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAof2DArray(new Set([1,2,3]), descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAof2DArray(/123/, descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAof2DArray(new RegExp('123'), descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAof2DArray({}, descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAof2DArray({a:1, b:2}, descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAof2DArray(new Object(), descObj); }, VerificationError);
    // 简单测试下 descObj 
    Assert.throwsErrorsWithMsg(()=>{
        autoVnAof2DArray('123', {className:'类1', methodName:'方法2', paramName:'参数3'});
    }, /^类1\s+\-\s+方法2\s+\-\s+参数3\=.+/, VerificationError);
    // 测试下数值返回
    let rExcepted = [[1,2,3]];
    let r1 = autoVnAof2DArray([[1,2,3]], descObj);
    let r2 = autoVnAof2DArray([[3,4,5]], descObj);
    // Array 是容器对象
    Assert.equalsStrictly(true, rExcepted.length===r1.length && rExcepted[0].length===r1[0].length);
    Assert.equalsStrictly(true, rExcepted[0].every(val=>r1[0].includes(val)));
    //
    Assert.equalsStrictly(false, rExcepted[0].every(val=>r2[0].includes(val)));
}

function testAutoVnAofObjectLiteral() {
    // 描述对象（这个的测试代码，在 testHandleDescInfoObj）
    let descObj = { methodName:testAutoVnAofObjectLiteral.name };
    // 第一个参数
    Assert.throwsErrorsNone(()=>{ autoVnAofObjectLiteral(undefined, true, descObj); }); // 这里允许为 undefined
    Assert.throwsErrors(()=>{ autoVnAofObjectLiteral(undefined, false, descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofObjectLiteral(null, true, descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofObjectLiteral(NaN, true, descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofObjectLiteral('', true, descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofObjectLiteral('ssss', true, descObj); }, VerificationError);
    Assert.throwsErrorsNone(()=>{ autoVnAofObjectLiteral(new String(''), true, descObj); });
    Assert.throwsErrorsNone(()=>{ autoVnAofObjectLiteral(new String('ssss'), true, descObj); });
    Assert.throwsErrors(()=>{ autoVnAofObjectLiteral(123, true, descObj); }, VerificationError);
    Assert.throwsErrorsNone(()=>{ autoVnAofObjectLiteral(new Number(123), true, descObj); });
    Assert.throwsErrors(()=>{ autoVnAofObjectLiteral(true, true, descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofObjectLiteral(false, true, descObj); }, VerificationError);
    Assert.throwsErrorsNone(()=>{ autoVnAofObjectLiteral(new Boolean(true), true, descObj); });
    Assert.throwsErrorsNone(()=>{ autoVnAofObjectLiteral(new Boolean(false), true, descObj); });
    Assert.throwsErrors(()=>{ autoVnAofObjectLiteral(Symbol.for('guid'), true, descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofObjectLiteral(Error, true, descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofObjectLiteral(ParameterError, true, descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofObjectLiteral(testHandleDescInfoObj, true, descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofObjectLiteral(()=>{}, true, descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofObjectLiteral(function(){}, true, descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofObjectLiteral([], true, descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofObjectLiteral([1,2,3], true, descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofObjectLiteral([[]], true, descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofObjectLiteral([[1,2,3], [4,5,6]], true, descObj); }, VerificationError);
    Assert.throwsErrorsNone(()=>{ autoVnAofObjectLiteral(new Map(), true, descObj); });
    Assert.throwsErrorsNone(()=>{ autoVnAofObjectLiteral(new Map([['a',1],['b',2]]), true, descObj); });
    Assert.throwsErrorsNone(()=>{ autoVnAofObjectLiteral(new Set(), true, descObj); });
    Assert.throwsErrorsNone(()=>{ autoVnAofObjectLiteral(new Set([1,2,3]), true, descObj); });
    Assert.throwsErrorsNone(()=>{ autoVnAofObjectLiteral(/123/, true, descObj); });
    Assert.throwsErrorsNone(()=>{ autoVnAofObjectLiteral(new RegExp('123'), true, descObj); });
    Assert.throwsErrorsNone(()=>{ autoVnAofObjectLiteral({}, true, descObj); });
    Assert.throwsErrorsNone(()=>{ autoVnAofObjectLiteral({a:1, b:2}, true, descObj); });
    Assert.throwsErrorsNone(()=>{ autoVnAofObjectLiteral(new Object(), true, descObj); });
    // 第二个参数
    Assert.throwsErrorsNone(()=>{ autoVnAofObjectLiteral({}, undefined, descObj); });
    Assert.throwsErrors(()=>{ autoVnAofObjectLiteral({}, null, descObj); }, ParameterError);
    Assert.throwsErrors(()=>{ autoVnAofObjectLiteral({}, NaN, descObj); }, ParameterError);
    Assert.throwsErrors(()=>{ autoVnAofObjectLiteral({}, '', descObj); }, ParameterError);
    Assert.throwsErrors(()=>{ autoVnAofObjectLiteral({}, 'ssss', descObj); }, ParameterError);
    Assert.throwsErrors(()=>{ autoVnAofObjectLiteral({}, new String(''), descObj); }, ParameterError);
    Assert.throwsErrors(()=>{ autoVnAofObjectLiteral({}, new String('ssss'), descObj); }, ParameterError);
    Assert.throwsErrors(()=>{ autoVnAofObjectLiteral({}, 123, descObj); }, ParameterError);
    Assert.throwsErrors(()=>{ autoVnAofObjectLiteral({}, new Number(123), descObj); }, ParameterError);
    Assert.throwsErrorsNone(()=>{ autoVnAofObjectLiteral({}, true, descObj); });
    Assert.throwsErrorsNone(()=>{ autoVnAofObjectLiteral({}, false, descObj); });
    Assert.throwsErrorsNone(()=>{ autoVnAofObjectLiteral({}, new Boolean(true), descObj); });
    Assert.throwsErrorsNone(()=>{ autoVnAofObjectLiteral({}, new Boolean(false), descObj); });
    Assert.throwsErrors(()=>{ autoVnAofObjectLiteral({}, Symbol.for('guid'), descObj); }, ParameterError);
    Assert.throwsErrors(()=>{ autoVnAofObjectLiteral({}, Error, descObj); }, ParameterError);
    Assert.throwsErrors(()=>{ autoVnAofObjectLiteral({}, ParameterError, descObj); }, ParameterError);
    Assert.throwsErrors(()=>{ autoVnAofObjectLiteral({}, testHandleDescInfoObj, descObj); }, ParameterError);
    Assert.throwsErrors(()=>{ autoVnAofObjectLiteral({}, ()=>{}, descObj); }, ParameterError);
    Assert.throwsErrors(()=>{ autoVnAofObjectLiteral({}, function(){}, descObj); }, ParameterError);
    Assert.throwsErrors(()=>{ autoVnAofObjectLiteral({}, [], descObj); }, ParameterError);
    Assert.throwsErrors(()=>{ autoVnAofObjectLiteral({}, [1,2,3], descObj); }, ParameterError);
    Assert.throwsErrors(()=>{ autoVnAofObjectLiteral({}, [[]], descObj); }, ParameterError);
    Assert.throwsErrors(()=>{ autoVnAofObjectLiteral({}, [[1,2,3], [4,5,6]], descObj); }, ParameterError);
    Assert.throwsErrors(()=>{ autoVnAofObjectLiteral({}, new Map(), descObj); }, ParameterError);
    Assert.throwsErrors(()=>{ autoVnAofObjectLiteral({}, new Map([['a',1],['b',2]]), descObj); }, ParameterError);
    Assert.throwsErrors(()=>{ autoVnAofObjectLiteral({}, new Set(), descObj); }, ParameterError);
    Assert.throwsErrors(()=>{ autoVnAofObjectLiteral({}, new Set([1,2,3]), descObj); }, ParameterError);
    Assert.throwsErrors(()=>{ autoVnAofObjectLiteral({}, /123/, descObj); }, ParameterError);
    Assert.throwsErrors(()=>{ autoVnAofObjectLiteral({}, new RegExp('123'), descObj); }, ParameterError);
    Assert.throwsErrors(()=>{ autoVnAofObjectLiteral({}, {}, descObj); }, ParameterError);
    Assert.throwsErrors(()=>{ autoVnAofObjectLiteral({}, {a:1, b:2}, descObj); }, ParameterError);
    Assert.throwsErrors(()=>{ autoVnAofObjectLiteral({}, new Object(), descObj); }, ParameterError);
    // 简单测试下 descObj 
    Assert.throwsErrorsWithMsg(()=>{
        autoVnAofObjectLiteral('123', true, {className:'类1', methodName:'方法2', paramName:'参数3'});
    }, /^类1\s+\-\s+方法2\s+\-\s+参数3\=.+/, VerificationError);
    // 测试下数值返回
    let rExcepted = {a:1, b:2, c:3};
    let r1 = autoVnAofObjectLiteral({a:1, b:2, c:3}, true, descObj);
    let r2 = autoVnAofObjectLiteral({A:1, B:2, C:3}, true, descObj);
    // 
    Assert.objectEquals(rExcepted, r1);
    Assert.throwsErrors(()=>{ Assert.objectEquals(rExcepted, r2); }, AssertError); 
}

function testAutoVnAofTargetObject() {
    // 描述对象（这个的测试代码，在 testHandleDescInfoObj）
    let descObj = { methodName:testAutoVnAofTargetObject.name };
    // 第1个参数
    Assert.throwsErrors(()=>{ autoVnAofTargetObject(undefined, descObj, RegExp); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofTargetObject(null, descObj, RegExp); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofTargetObject(NaN, descObj, RegExp); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofTargetObject('', descObj, RegExp); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofTargetObject('ssss', descObj, RegExp); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofTargetObject(new String(''), descObj, RegExp); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofTargetObject(new String('ssss'), descObj, RegExp); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofTargetObject(123, descObj, RegExp); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofTargetObject(new Number(123), descObj, RegExp); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofTargetObject(true, descObj, RegExp); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofTargetObject(false, descObj, RegExp); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofTargetObject(new Boolean(true), descObj, RegExp); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofTargetObject(new Boolean(false), descObj, RegExp); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofTargetObject(Symbol.for('guid'), descObj, RegExp); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofTargetObject(Error, descObj, RegExp); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofTargetObject(ParameterError, descObj, RegExp); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofTargetObject(testHandleDescInfoObj, descObj, RegExp); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofTargetObject(()=>{}, descObj, RegExp); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofTargetObject(function(){}, descObj, RegExp); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofTargetObject([], descObj, RegExp); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofTargetObject([1,2,3], descObj, RegExp); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofTargetObject([[]], descObj, RegExp); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofTargetObject([[1,2,3], [4,5,6]], descObj, RegExp); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofTargetObject(new Map(), descObj, RegExp); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofTargetObject(new Map([['a',1],['b',2]]), descObj, RegExp); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofTargetObject(new Set(), descObj, RegExp); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofTargetObject(new Set([1,2,3]), descObj, RegExp); }, VerificationError);
    Assert.throwsErrorsNone(()=>{ autoVnAofTargetObject(/123/, descObj, RegExp); });
    Assert.throwsErrorsNone(()=>{ autoVnAofTargetObject(new RegExp('123'), descObj, RegExp); });
    Assert.throwsErrors(()=>{ autoVnAofTargetObject({}, descObj, RegExp); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofTargetObject({a:1, b:2}, descObj, RegExp); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofTargetObject(new Object(), descObj, RegExp); }, VerificationError);
    // 第2个参数，测试一下 descObj 是否成功即可。正常来说，descObj 这里是有默认处理的。参数不识别，自动使用默认值
    Assert.throwsErrorsNone(()=>{ autoVnAofTargetObject({}, descObj, Object); });
    Assert.throwsErrorsNone(()=>{ autoVnAofTargetObject({}, undefined, Object); });
    Assert.throwsErrorsNone(()=>{ autoVnAofTargetObject({}, {a:1, b:2}, Object); });
    // 第3个参数
    Assert.throwsErrors(()=>{ autoVnAofTargetObject({}, descObj, undefined); }, ParameterError);
    Assert.throwsErrors(()=>{ autoVnAofTargetObject({}, descObj, null); }, ParameterError);
    Assert.throwsErrors(()=>{ autoVnAofTargetObject({}, descObj, NaN); }, ParameterError);
    Assert.throwsErrors(()=>{ autoVnAofTargetObject({}, descObj, ''); }, ParameterError);
    Assert.throwsErrors(()=>{ autoVnAofTargetObject({}, descObj, 'ssss'); }, ParameterError);
    Assert.throwsErrors(()=>{ autoVnAofTargetObject({}, descObj, new String('')); }, ParameterError);
    Assert.throwsErrors(()=>{ autoVnAofTargetObject({}, descObj, new String('ssss')); }, ParameterError);
    Assert.throwsErrors(()=>{ autoVnAofTargetObject({}, descObj, 123); }, ParameterError);
    Assert.throwsErrors(()=>{ autoVnAofTargetObject({}, descObj, new Number(123)); }, ParameterError);
    Assert.throwsErrors(()=>{ autoVnAofTargetObject({}, descObj, true); }, ParameterError);
    Assert.throwsErrors(()=>{ autoVnAofTargetObject({}, descObj, false); }, ParameterError);
    Assert.throwsErrors(()=>{ autoVnAofTargetObject({}, descObj, new Boolean(true)); }, ParameterError);
    Assert.throwsErrors(()=>{ autoVnAofTargetObject({}, descObj, new Boolean(false)); }, ParameterError);
    Assert.throwsErrors(()=>{ autoVnAofTargetObject({}, descObj, Symbol.for('guid')); }, ParameterError);
    Assert.throwsErrors(()=>{ autoVnAofTargetObject({}, descObj, Error); }, VerificationError);
    Assert.throwsErrorsNone(()=>{ autoVnAofTargetObject({}, descObj, Object); });
    Assert.throwsErrors(()=>{ autoVnAofTargetObject({}, descObj, ParameterError); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofTargetObject({}, descObj, testHandleDescInfoObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofTargetObject({}, descObj, ()=>{}); }, ParameterError);
    Assert.throwsErrors(()=>{ autoVnAofTargetObject({}, descObj, function(){}); }, ParameterError);
    Assert.throwsErrors(()=>{ autoVnAofTargetObject({}, descObj, []); }, ParameterError);
    Assert.throwsErrors(()=>{ autoVnAofTargetObject({}, descObj, [1,2,3]); }, ParameterError);
    Assert.throwsErrors(()=>{ autoVnAofTargetObject({}, descObj, [[]]); }, ParameterError);
    Assert.throwsErrors(()=>{ autoVnAofTargetObject({}, descObj, [[1,2,3], [4,5,6]]); }, ParameterError);
    Assert.throwsErrors(()=>{ autoVnAofTargetObject({}, descObj, new Map()); }, ParameterError);
    Assert.throwsErrors(()=>{ autoVnAofTargetObject({}, descObj, new Map([['a',1],['b',2]])); }, ParameterError);
    Assert.throwsErrors(()=>{ autoVnAofTargetObject({}, descObj, new Set()); }, ParameterError);
    Assert.throwsErrors(()=>{ autoVnAofTargetObject({}, descObj, new Set([1,2,3])); }, ParameterError);
    Assert.throwsErrors(()=>{ autoVnAofTargetObject({}, descObj, /123/); }, ParameterError);
    Assert.throwsErrors(()=>{ autoVnAofTargetObject({}, descObj, new RegExp('123')); }, ParameterError);
    Assert.throwsErrors(()=>{ autoVnAofTargetObject({}, descObj, {}); }, ParameterError);
    Assert.throwsErrors(()=>{ autoVnAofTargetObject({}, descObj, {a:1, b:2}); }, ParameterError);
    Assert.throwsErrors(()=>{ autoVnAofTargetObject({}, descObj, new Object()); }, ParameterError);
    // 测试数值匹配
    let o1 = {a:1, b:2};
    let o2 = autoVnAofTargetObject({a:1, b:2}, descObj, Object, Error);
    let o3 = autoVnAofTargetObject({a:3, b:4}, descObj, Object, Error);
    Assert.objectEquals(o1, o2);
    Assert.throwsErrors(()=>{ Assert.objectEquals(o1, o3); }, AssertError);
}

function testAutoVnAofTargetObjectSet() {
    // 描述对象（这个的测试代码，在 testHandleDescInfoObj）
    let descObj = { methodName:testAutoVnAofTargetObjectSet.name };
    // 第1个参数
    Assert.throwsErrors(()=>{ autoVnAofTargetObjectSet(undefined, descObj, RegExp); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofTargetObjectSet(null, descObj, RegExp); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofTargetObjectSet(NaN, descObj, RegExp); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofTargetObjectSet('', descObj, RegExp); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofTargetObjectSet('ssss', descObj, RegExp); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofTargetObjectSet(new String(''), descObj, RegExp); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofTargetObjectSet(new String('ssss'), descObj, RegExp); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofTargetObjectSet(123, descObj, RegExp); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofTargetObjectSet(new Number(123), descObj, RegExp); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofTargetObjectSet(true, descObj, RegExp); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofTargetObjectSet(false, descObj, RegExp); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofTargetObjectSet(new Boolean(true), descObj, RegExp); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofTargetObjectSet(new Boolean(false), descObj, RegExp); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofTargetObjectSet(Symbol.for('guid'), descObj, RegExp); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofTargetObjectSet(Error, descObj, RegExp); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofTargetObjectSet(ParameterError, descObj, RegExp); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofTargetObjectSet(testHandleDescInfoObj, descObj, RegExp); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofTargetObjectSet(()=>{}, descObj, RegExp); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofTargetObjectSet(function(){}, descObj, RegExp); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofTargetObjectSet([], descObj, RegExp); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofTargetObjectSet([1,2,3], descObj, RegExp); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofTargetObjectSet([[]], descObj, RegExp); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofTargetObjectSet([[1,2,3], [4,5,6]], descObj, RegExp); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofTargetObjectSet(new Map(), descObj, RegExp); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofTargetObjectSet(new Map([['a',1],['b',2]]), descObj, RegExp); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofTargetObjectSet(new Set(), descObj, RegExp); }, VerificationError);
    Assert.throwsErrorsNone(()=>{ autoVnAofTargetObjectSet(new Set([1,2,3]), descObj, Number); });
    Assert.throwsErrors(()=>{ autoVnAofTargetObjectSet(/123/, descObj, RegExp); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofTargetObjectSet(new RegExp('123'), descObj, RegExp); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofTargetObjectSet({}, descObj, RegExp); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofTargetObjectSet({a:1, b:2}, descObj, RegExp); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofTargetObjectSet(new Object(), descObj, RegExp); }, VerificationError);
    // 第2个参数，测试一下 descObj 是否成功即可。正常来说，descObj 这里是有默认处理的。参数不识别，自动使用默认值
    Assert.throwsErrorsNone(()=>{ autoVnAofTargetObjectSet(new Set([1,2,3]), descObj, Number); });
    Assert.throwsErrorsNone(()=>{ autoVnAofTargetObjectSet(new Set([1,2,3]), undefined, Number); });
    Assert.throwsErrorsNone(()=>{ autoVnAofTargetObjectSet(new Set([1,2,3]), {a:1, b:2}, Number); });
    // 第3个参数
    Assert.throwsErrors(()=>{ autoVnAofTargetObjectSet(new Set([1,2,3]), descObj, undefined); }, ParameterError);
    Assert.throwsErrors(()=>{ autoVnAofTargetObjectSet(new Set([1,2,3]), descObj, null); }, ParameterError);
    Assert.throwsErrors(()=>{ autoVnAofTargetObjectSet(new Set([1,2,3]), descObj, NaN); }, ParameterError);
    Assert.throwsErrors(()=>{ autoVnAofTargetObjectSet(new Set([1,2,3]), descObj, ''); }, ParameterError);
    Assert.throwsErrors(()=>{ autoVnAofTargetObjectSet(new Set([1,2,3]), descObj, 'ssss'); }, ParameterError);
    Assert.throwsErrors(()=>{ autoVnAofTargetObjectSet(new Set([1,2,3]), descObj, new String('')); }, ParameterError);
    Assert.throwsErrors(()=>{ autoVnAofTargetObjectSet(new Set([1,2,3]), descObj, new String('ssss')); }, ParameterError);
    Assert.throwsErrors(()=>{ autoVnAofTargetObjectSet(new Set([1,2,3]), descObj, 123); }, ParameterError);
    Assert.throwsErrors(()=>{ autoVnAofTargetObjectSet(new Set([1,2,3]), descObj, new Number(123)); }, ParameterError);
    Assert.throwsErrors(()=>{ autoVnAofTargetObjectSet(new Set([1,2,3]), descObj, true); }, ParameterError);
    Assert.throwsErrors(()=>{ autoVnAofTargetObjectSet(new Set([1,2,3]), descObj, false); }, ParameterError);
    Assert.throwsErrors(()=>{ autoVnAofTargetObjectSet(new Set([1,2,3]), descObj, new Boolean(true)); }, ParameterError);
    Assert.throwsErrors(()=>{ autoVnAofTargetObjectSet(new Set([1,2,3]), descObj, new Boolean(false)); }, ParameterError);
    Assert.throwsErrors(()=>{ autoVnAofTargetObjectSet(new Set([1,2,3]), descObj, Symbol.for('guid')); }, ParameterError);
    Assert.throwsErrors(()=>{ autoVnAofTargetObjectSet(new Set([1,2,3]), descObj, Error); }, VerificationError);
    Assert.throwsErrorsNone(()=>{ autoVnAofTargetObjectSet(new Set([1,2,3]), descObj, Number); });
    Assert.throwsErrors(()=>{ autoVnAofTargetObjectSet(new Set([1,2,3]), descObj, ParameterError); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofTargetObjectSet(new Set([1,2,3]), descObj, testHandleDescInfoObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofTargetObjectSet(new Set([1,2,3]), descObj, ()=>{}); }, ParameterError);
    Assert.throwsErrors(()=>{ autoVnAofTargetObjectSet(new Set([1,2,3]), descObj, function(){}); }, ParameterError);
    Assert.throwsErrors(()=>{ autoVnAofTargetObjectSet(new Set([1,2,3]), descObj, []); }, ParameterError);
    Assert.throwsErrors(()=>{ autoVnAofTargetObjectSet(new Set([1,2,3]), descObj, [1,2,3]); }, ParameterError);
    Assert.throwsErrors(()=>{ autoVnAofTargetObjectSet(new Set([1,2,3]), descObj, [[]]); }, ParameterError);
    Assert.throwsErrors(()=>{ autoVnAofTargetObjectSet(new Set([1,2,3]), descObj, [[1,2,3], [4,5,6]]); }, ParameterError);
    Assert.throwsErrors(()=>{ autoVnAofTargetObjectSet(new Set([1,2,3]), descObj, new Map()); }, ParameterError);
    Assert.throwsErrors(()=>{ autoVnAofTargetObjectSet(new Set([1,2,3]), descObj, new Map([['a',1],['b',2]])); }, ParameterError);
    Assert.throwsErrors(()=>{ autoVnAofTargetObjectSet(new Set([1,2,3]), descObj, new Set()); }, ParameterError);
    Assert.throwsErrors(()=>{ autoVnAofTargetObjectSet(new Set([1,2,3]), descObj, new Set([1,2,3])); }, ParameterError);
    Assert.throwsErrors(()=>{ autoVnAofTargetObjectSet(new Set([1,2,3]), descObj, /123/); }, ParameterError);
    Assert.throwsErrors(()=>{ autoVnAofTargetObjectSet(new Set([1,2,3]), descObj, new RegExp('123')); }, ParameterError);
    Assert.throwsErrors(()=>{ autoVnAofTargetObjectSet(new Set([1,2,3]), descObj, {}); }, ParameterError);
    Assert.throwsErrors(()=>{ autoVnAofTargetObjectSet(new Set([1,2,3]), descObj, {a:1, b:2}); }, ParameterError);
    Assert.throwsErrors(()=>{ autoVnAofTargetObjectSet(new Set([1,2,3]), descObj, new Object()); }, ParameterError);
    // 测试数值匹配
    let rExcepted = new Set([1,2,3])
    let r1 = autoVnAofTargetObjectSet(new Set([1,2,3]), descObj, Object, Error, Number);
    let r2 = autoVnAofTargetObjectSet(new Set([3,4,5]), descObj, Object, Error, Number);
    // Set 是容器对象
    Assert.equalsStrictly(true, rExcepted.size===r1.size);
    let rEArr = Array.from(rExcepted.values());
    let r1Arr = Array.from(r1.values());
    Assert.equalsStrictly(true, rEArr.every(val=>r1Arr.includes(val)));
    // 
    let r2Arr = Array.from(r2.values());
    Assert.equalsStrictly(false, rEArr.every(val=>r2Arr.includes(val)));
}

function testAutoVnAofTargetObjectArray() {
    // 描述对象（这个的测试代码，在 testHandleDescInfoObj）
    let descObj = { methodName:testAutoVnAofTargetObjectArray.name };
    // 第1个参数
    Assert.throwsErrors(()=>{ autoVnAofTargetObjectArray(undefined, descObj, RegExp); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofTargetObjectArray(null, descObj, RegExp); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofTargetObjectArray(NaN, descObj, RegExp); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofTargetObjectArray('', descObj, RegExp); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofTargetObjectArray('ssss', descObj, RegExp); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofTargetObjectArray(new String(''), descObj, RegExp); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofTargetObjectArray(new String('ssss'), descObj, RegExp); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofTargetObjectArray(123, descObj, RegExp); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofTargetObjectArray(new Number(123), descObj, RegExp); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofTargetObjectArray(true, descObj, RegExp); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofTargetObjectArray(false, descObj, RegExp); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofTargetObjectArray(new Boolean(true), descObj, RegExp); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofTargetObjectArray(new Boolean(false), descObj, RegExp); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofTargetObjectArray(Symbol.for('guid'), descObj, RegExp); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofTargetObjectArray(Error, descObj, RegExp); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofTargetObjectArray(ParameterError, descObj, RegExp); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofTargetObjectArray(testHandleDescInfoObj, descObj, RegExp); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofTargetObjectArray(()=>{}, descObj, RegExp); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofTargetObjectArray(function(){}, descObj, RegExp); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofTargetObjectArray([], descObj, Number); }, VerificationError);
    Assert.throwsErrorsNone(()=>{ autoVnAofTargetObjectArray([1,2,3], descObj, Number); });
    Assert.throwsErrors(()=>{ autoVnAofTargetObjectArray([[]], descObj, Number); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofTargetObjectArray([[1,2,3], [4,5,6]], descObj, Number); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofTargetObjectArray(new Map(), descObj, RegExp); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofTargetObjectArray(new Map([['a',1],['b',2]]), descObj, RegExp); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofTargetObjectArray(new Set(), descObj, RegExp); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofTargetObjectArray(new Set([1,2,3]), descObj, Number); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofTargetObjectArray(/123/, descObj, RegExp); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofTargetObjectArray(new RegExp('123'), descObj, RegExp); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofTargetObjectArray({}, descObj, RegExp); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofTargetObjectArray({a:1, b:2}, descObj, RegExp); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofTargetObjectArray(new Object(), descObj, RegExp); }, VerificationError);
    // 第2个参数，测试一下 descObj 是否成功即可。正常来说，descObj 这里是有默认处理的。参数不识别，自动使用默认值
    Assert.throwsErrorsNone(()=>{ autoVnAofTargetObjectArray([1,2,3], descObj, Number); });
    Assert.throwsErrorsNone(()=>{ autoVnAofTargetObjectArray([1,2,3], undefined, Number); });
    Assert.throwsErrorsNone(()=>{ autoVnAofTargetObjectArray([1,2,3], {a:1, b:2}, Number); });
    // 第3个参数
    Assert.throwsErrors(()=>{ autoVnAofTargetObjectArray([1,2,3], descObj, undefined); }, ParameterError);
    Assert.throwsErrors(()=>{ autoVnAofTargetObjectArray([1,2,3], descObj, null); }, ParameterError);
    Assert.throwsErrors(()=>{ autoVnAofTargetObjectArray([1,2,3], descObj, NaN); }, ParameterError);
    Assert.throwsErrors(()=>{ autoVnAofTargetObjectArray([1,2,3], descObj, ''); }, ParameterError);
    Assert.throwsErrors(()=>{ autoVnAofTargetObjectArray([1,2,3], descObj, 'ssss'); }, ParameterError);
    Assert.throwsErrors(()=>{ autoVnAofTargetObjectArray([1,2,3], descObj, new String('')); }, ParameterError);
    Assert.throwsErrors(()=>{ autoVnAofTargetObjectArray([1,2,3], descObj, new String('ssss')); }, ParameterError);
    Assert.throwsErrors(()=>{ autoVnAofTargetObjectArray([1,2,3], descObj, 123); }, ParameterError);
    Assert.throwsErrors(()=>{ autoVnAofTargetObjectArray([1,2,3], descObj, new Number(123)); }, ParameterError);
    Assert.throwsErrors(()=>{ autoVnAofTargetObjectArray([1,2,3], descObj, true); }, ParameterError);
    Assert.throwsErrors(()=>{ autoVnAofTargetObjectArray([1,2,3], descObj, false); }, ParameterError);
    Assert.throwsErrors(()=>{ autoVnAofTargetObjectArray([1,2,3], descObj, new Boolean(true)); }, ParameterError);
    Assert.throwsErrors(()=>{ autoVnAofTargetObjectArray([1,2,3], descObj, new Boolean(false)); }, ParameterError);
    Assert.throwsErrors(()=>{ autoVnAofTargetObjectArray([1,2,3], descObj, Symbol.for('guid')); }, ParameterError);
    Assert.throwsErrors(()=>{ autoVnAofTargetObjectArray([1,2,3], descObj, Error); }, VerificationError);
    Assert.throwsErrorsNone(()=>{ autoVnAofTargetObjectArray([1,2,3], descObj, Number); });
    Assert.throwsErrors(()=>{ autoVnAofTargetObjectArray([1,2,3], descObj, ParameterError); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofTargetObjectArray([1,2,3], descObj, testHandleDescInfoObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofTargetObjectArray([1,2,3], descObj, ()=>{}); }, ParameterError);
    Assert.throwsErrors(()=>{ autoVnAofTargetObjectArray([1,2,3], descObj, function(){}); }, ParameterError);
    Assert.throwsErrors(()=>{ autoVnAofTargetObjectArray([1,2,3], descObj, []); }, ParameterError);
    Assert.throwsErrors(()=>{ autoVnAofTargetObjectArray([1,2,3], descObj, [1,2,3]); }, ParameterError);
    Assert.throwsErrors(()=>{ autoVnAofTargetObjectArray([1,2,3], descObj, [[]]); }, ParameterError);
    Assert.throwsErrors(()=>{ autoVnAofTargetObjectArray([1,2,3], descObj, [[1,2,3], [4,5,6]]); }, ParameterError);
    Assert.throwsErrors(()=>{ autoVnAofTargetObjectArray([1,2,3], descObj, new Map()); }, ParameterError);
    Assert.throwsErrors(()=>{ autoVnAofTargetObjectArray([1,2,3], descObj, new Map([['a',1],['b',2]])); }, ParameterError);
    Assert.throwsErrors(()=>{ autoVnAofTargetObjectArray([1,2,3], descObj, new Set()); }, ParameterError);
    Assert.throwsErrors(()=>{ autoVnAofTargetObjectArray([1,2,3], descObj, new Set([1,2,3])); }, ParameterError);
    Assert.throwsErrors(()=>{ autoVnAofTargetObjectArray([1,2,3], descObj, /123/); }, ParameterError);
    Assert.throwsErrors(()=>{ autoVnAofTargetObjectArray([1,2,3], descObj, new RegExp('123')); }, ParameterError);
    Assert.throwsErrors(()=>{ autoVnAofTargetObjectArray([1,2,3], descObj, {}); }, ParameterError);
    Assert.throwsErrors(()=>{ autoVnAofTargetObjectArray([1,2,3], descObj, {a:1, b:2}); }, ParameterError);
    Assert.throwsErrors(()=>{ autoVnAofTargetObjectArray([1,2,3], descObj, new Object()); }, ParameterError);
    // 测试数值匹配
    Assert.throwsErrorsWithMsg(()=>{
        autoVnAofTargetObjectArray('123', {className:'类1', methodName:'方法2', paramName:'参数3'});
    }, /^类1\s+\-\s+方法2\s+\-\s+参数3\=.+/, VerificationError);
    // 测试下数值返回
    let rExcepted = [1,2,3];
    let r1 = autoVnAofTargetObjectArray([1,2,3], descObj, Number);
    let r2 = autoVnAofTargetObjectArray([3,4,5], descObj, Number);
    // Array 是容器对象
    Assert.equalsStrictly(true, rExcepted.length===r1.length);
    Assert.equalsStrictly(true, rExcepted.every(val=>r1.includes(val)));
    //
    Assert.equalsStrictly(false, rExcepted.every(val=>r2.includes(val)));
}

function testAutoVnAofTargetObject2DArray() {
    // 描述对象（这个的测试代码，在 testHandleDescInfoObj）
    let descObj = { methodName:testAutoVnAofTargetObject2DArray.name };
    // 第1个参数
    Assert.throwsErrors(()=>{ autoVnAofTargetObject2DArray(undefined, descObj, RegExp); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofTargetObject2DArray(null, descObj, RegExp); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofTargetObject2DArray(NaN, descObj, RegExp); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofTargetObject2DArray('', descObj, RegExp); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofTargetObject2DArray('ssss', descObj, RegExp); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofTargetObject2DArray(new String(''), descObj, RegExp); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofTargetObject2DArray(new String('ssss'), descObj, RegExp); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofTargetObject2DArray(123, descObj, RegExp); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofTargetObject2DArray(new Number(123), descObj, RegExp); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofTargetObject2DArray(true, descObj, RegExp); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofTargetObject2DArray(false, descObj, RegExp); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofTargetObject2DArray(new Boolean(true), descObj, RegExp); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofTargetObject2DArray(new Boolean(false), descObj, RegExp); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofTargetObject2DArray(Symbol.for('guid'), descObj, RegExp); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofTargetObject2DArray(Error, descObj, RegExp); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofTargetObject2DArray(ParameterError, descObj, RegExp); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofTargetObject2DArray(testHandleDescInfoObj, descObj, RegExp); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofTargetObject2DArray(()=>{}, descObj, RegExp); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofTargetObject2DArray(function(){}, descObj, RegExp); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofTargetObject2DArray([], descObj, Number); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofTargetObject2DArray([1,2,3], descObj, Number); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofTargetObject2DArray([[]], descObj, Number); }, VerificationError);
    Assert.throwsErrorsNone(()=>{ autoVnAofTargetObject2DArray([[1,2,3], [4,5,6]], descObj, Number); });
    Assert.throwsErrors(()=>{ autoVnAofTargetObject2DArray(new Map(), descObj, RegExp); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofTargetObject2DArray(new Map([['a',1],['b',2]]), descObj, RegExp); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofTargetObject2DArray(new Set(), descObj, RegExp); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofTargetObject2DArray(new Set([1,2,3]), descObj, Number); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofTargetObject2DArray(/123/, descObj, RegExp); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofTargetObject2DArray(new RegExp('123'), descObj, RegExp); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofTargetObject2DArray({}, descObj, RegExp); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofTargetObject2DArray({a:1, b:2}, descObj, RegExp); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofTargetObject2DArray(new Object(), descObj, RegExp); }, VerificationError);
    // 第2个参数，测试一下 descObj 是否成功即可。正常来说，descObj 这里是有默认处理的。参数不识别，自动使用默认值
    Assert.throwsErrorsNone(()=>{ autoVnAofTargetObject2DArray([[1,2,3]], descObj, Number); });
    Assert.throwsErrorsNone(()=>{ autoVnAofTargetObject2DArray([[1,2,3]], undefined, Number); });
    Assert.throwsErrorsNone(()=>{ autoVnAofTargetObject2DArray([[1,2,3]], {a:1, b:2}, Number); });
    // 第3个参数
    Assert.throwsErrors(()=>{ autoVnAofTargetObject2DArray([[1,2,3]], descObj, undefined); }, ParameterError);
    Assert.throwsErrors(()=>{ autoVnAofTargetObject2DArray([[1,2,3]], descObj, null); }, ParameterError);
    Assert.throwsErrors(()=>{ autoVnAofTargetObject2DArray([[1,2,3]], descObj, NaN); }, ParameterError);
    Assert.throwsErrors(()=>{ autoVnAofTargetObject2DArray([[1,2,3]], descObj, ''); }, ParameterError);
    Assert.throwsErrors(()=>{ autoVnAofTargetObject2DArray([[1,2,3]], descObj, 'ssss'); }, ParameterError);
    Assert.throwsErrors(()=>{ autoVnAofTargetObject2DArray([[1,2,3]], descObj, new String('')); }, ParameterError);
    Assert.throwsErrors(()=>{ autoVnAofTargetObject2DArray([[1,2,3]], descObj, new String('ssss')); }, ParameterError);
    Assert.throwsErrors(()=>{ autoVnAofTargetObject2DArray([[1,2,3]], descObj, 123); }, ParameterError);
    Assert.throwsErrors(()=>{ autoVnAofTargetObject2DArray([[1,2,3]], descObj, new Number(123)); }, ParameterError);
    Assert.throwsErrors(()=>{ autoVnAofTargetObject2DArray([[1,2,3]], descObj, true); }, ParameterError);
    Assert.throwsErrors(()=>{ autoVnAofTargetObject2DArray([[1,2,3]], descObj, false); }, ParameterError);
    Assert.throwsErrors(()=>{ autoVnAofTargetObject2DArray([[1,2,3]], descObj, new Boolean(true)); }, ParameterError);
    Assert.throwsErrors(()=>{ autoVnAofTargetObject2DArray([[1,2,3]], descObj, new Boolean(false)); }, ParameterError);
    Assert.throwsErrors(()=>{ autoVnAofTargetObject2DArray([[1,2,3]], descObj, Symbol.for('guid')); }, ParameterError);
    Assert.throwsErrors(()=>{ autoVnAofTargetObject2DArray([[1,2,3]], descObj, Error); }, VerificationError);
    Assert.throwsErrorsNone(()=>{ autoVnAofTargetObject2DArray([[1,2,3]], descObj, Number); });
    Assert.throwsErrors(()=>{ autoVnAofTargetObject2DArray([[1,2,3]], descObj, ParameterError); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofTargetObject2DArray([[1,2,3]], descObj, testHandleDescInfoObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofTargetObject2DArray([[1,2,3]], descObj, ()=>{}); }, ParameterError);
    Assert.throwsErrors(()=>{ autoVnAofTargetObject2DArray([[1,2,3]], descObj, function(){}); }, ParameterError);
    Assert.throwsErrors(()=>{ autoVnAofTargetObject2DArray([[1,2,3]], descObj, []); }, ParameterError);
    Assert.throwsErrors(()=>{ autoVnAofTargetObject2DArray([[1,2,3]], descObj, [1,2,3]); }, ParameterError);
    Assert.throwsErrors(()=>{ autoVnAofTargetObject2DArray([[1,2,3]], descObj, [[]]); }, ParameterError);
    Assert.throwsErrors(()=>{ autoVnAofTargetObject2DArray([[1,2,3]], descObj, [[1,2,3], [4,5,6]]); }, ParameterError);
    Assert.throwsErrors(()=>{ autoVnAofTargetObject2DArray([[1,2,3]], descObj, new Map()); }, ParameterError);
    Assert.throwsErrors(()=>{ autoVnAofTargetObject2DArray([[1,2,3]], descObj, new Map([['a',1],['b',2]])); }, ParameterError);
    Assert.throwsErrors(()=>{ autoVnAofTargetObject2DArray([[1,2,3]], descObj, new Set()); }, ParameterError);
    Assert.throwsErrors(()=>{ autoVnAofTargetObject2DArray([[1,2,3]], descObj, new Set([1,2,3])); }, ParameterError);
    Assert.throwsErrors(()=>{ autoVnAofTargetObject2DArray([[1,2,3]], descObj, /123/); }, ParameterError);
    Assert.throwsErrors(()=>{ autoVnAofTargetObject2DArray([[1,2,3]], descObj, new RegExp('123')); }, ParameterError);
    Assert.throwsErrors(()=>{ autoVnAofTargetObject2DArray([[1,2,3]], descObj, {}); }, ParameterError);
    Assert.throwsErrors(()=>{ autoVnAofTargetObject2DArray([[1,2,3]], descObj, {a:1, b:2}); }, ParameterError);
    Assert.throwsErrors(()=>{ autoVnAofTargetObject2DArray([[1,2,3]], descObj, new Object()); }, ParameterError);
    // 测试数值匹配
    Assert.throwsErrorsWithMsg(()=>{
        autoVnAofTargetObject2DArray('123', {className:'类1', methodName:'方法2', paramName:'参数3'});
    }, /^类1\s+\-\s+方法2\s+\-\s+参数3\=.+/, VerificationError);
    // 测试下数值返回
    let rExcepted = [[1,2,3]];
    let r1 = autoVnAofTargetObject2DArray([[1,2,3]], descObj, Number);
    let r2 = autoVnAofTargetObject2DArray([[3,4,5]], descObj, Number);
    // Array 是容器对象
    Assert.equalsStrictly(true, rExcepted.length===r1.length && rExcepted[0].length===r1[0].length);
    Assert.equalsStrictly(true, rExcepted[0].every(val=>r1[0].includes(val)));
    //
    Assert.equalsStrictly(false, rExcepted[0].every(val=>r2[0].includes(val)));
}

function testAutoVnAofHtmlElement() {
    /**
     * 一般来说，document.get* 和 document.query* 这些返回的都是 html 元素对象 
     * 或者 
     * html 元素对象的一个集合类 ( HTMLCollection 或者 NodeList )
     */

    // 定义一个 html 内容，用于测试
    let testHtmlString = `
    <div id="test1" name="testDiv">这是一个测试的 DIV 标签</div>
    <div id="test2" name="testDiv">这是一个测试的 DIV 标签 2</div>
    <div id="test3" name="testDiv">这是一个测试的 DIV 标签 3</div>
    <span id="test4" name="testSpan" >
        <input id="test5" name="testInput" type="text" value="xxxxxx"/>
    </span>
    `;
    let myDomParser = new DOMParser();
    let myDocument  = myDomParser.parseFromString(testHtmlString, 'text/html');
    let testElement1 = myDocument.getElementById('test1');
    let testElement2 = myDocument.querySelector('#test2');
    let testElementList1 = myDocument.getElementsByName('testDiv');
    let testElementList2 = myDocument.querySelectorAll('div[name="testDiv"]');

    // 描述对象（这个的测试代码，在 testHandleDescInfoObj）
    let descObj = { methodName:testAutoVnAofHtmlElement.name };
    // 第一个参数
    Assert.throwsErrors(()=>{ autoVnAofHtmlElement(undefined, descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofHtmlElement(null, descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofHtmlElement(NaN, descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofHtmlElement('', descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofHtmlElement('ssss', descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofHtmlElement(new String(''), descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofHtmlElement(new String('ssss'), descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofHtmlElement(123, descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofHtmlElement(new Number(123), descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofHtmlElement(true, descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofHtmlElement(false, descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofHtmlElement(new Boolean(true), descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofHtmlElement(new Boolean(false), descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofHtmlElement(Symbol.for('guid'), descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofHtmlElement(Error, descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofHtmlElement(ParameterError, descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofHtmlElement(testHandleDescInfoObj, descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofHtmlElement(()=>{}, descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofHtmlElement(function(){}, descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofHtmlElement([], descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofHtmlElement([1,2,3], descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofHtmlElement([[]], descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofHtmlElement([[1,2,3], [4,5,6]], descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofHtmlElement(new Map(), descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofHtmlElement(new Map([['a',1],['b',2]]), descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofHtmlElement(new Set(), descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofHtmlElement(new Set([1,2,3]), descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofHtmlElement(/123/, descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofHtmlElement(new RegExp('123'), descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofHtmlElement({}, descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofHtmlElement({a:1, b:2}, descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofHtmlElement(new Object(), descObj); }, VerificationError);
    Assert.throwsErrorsNone(()=>{ autoVnAofHtmlElement(testElement1, descObj); });
    Assert.throwsErrors(()=>{ autoVnAofHtmlElement(testElementList1, descObj); }, VerificationError);    
    // 简单测试下 descObj 
    Assert.throwsErrorsWithMsg(()=>{
        autoVnAofHtmlElement('123', {className:'类1', methodName:'方法2', paramName:'参数3'});
    }, /^类1\s+\-\s+方法2\s+\-\s+参数3\=.+/, VerificationError);
    
    // ========= 测试下数值返回
    let e1 = autoVnAofHtmlElement(testElement1, descObj);
    let e2 = autoVnAofHtmlElement(testElement2, descObj);
    Assert.equalsStrictly(testElement1, e1);
    Assert.equalsStrictly(testElement2, e2);
}

function testAutoVnAofHtmlElementList() {
    /**
     * 一般来说，document.get* 和 document.query* 这些返回的都是 html 元素对象 
     * 或者 
     * html 元素对象的一个集合类 ( HTMLCollection 或者 NodeList )
     */

    // 定义一个 html 内容，用于测试
    let testHtmlString = `
    <div id="test1" name="testDiv">这是一个测试的 DIV 标签</div>
    <div id="test2" name="testDiv">这是一个测试的 DIV 标签 2</div>
    <div id="test3" name="testDiv">这是一个测试的 DIV 标签 3</div>
    <span id="test4" name="testSpan" >
        <input id="test5" name="testInput" type="text" value="xxxxxx"/>
    </span>
    `;
    let myDomParser = new DOMParser();
    let myDocument  = myDomParser.parseFromString(testHtmlString, 'text/html');
    let testElement1 = myDocument.getElementById('test1');
    let testElement2 = myDocument.querySelector('#test2');
    let testElementList1 = myDocument.getElementsByName('testDiv');
    let testElementList2 = myDocument.querySelectorAll('div[name="testDiv"]');

    // 描述对象（这个的测试代码，在 testHandleDescInfoObj）
    let descObj = { methodName:testAutoVnAofHtmlElementList.name };
    // 第一个参数
    Assert.throwsErrors(()=>{ autoVnAofHtmlElementList(undefined, descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofHtmlElementList(null, descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofHtmlElementList(NaN, descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofHtmlElementList('', descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofHtmlElementList('ssss', descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofHtmlElementList(new String(''), descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofHtmlElementList(new String('ssss'), descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofHtmlElementList(123, descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofHtmlElementList(new Number(123), descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofHtmlElementList(true, descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofHtmlElementList(false, descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofHtmlElementList(new Boolean(true), descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofHtmlElementList(new Boolean(false), descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofHtmlElementList(Symbol.for('guid'), descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofHtmlElementList(Error, descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofHtmlElementList(ParameterError, descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofHtmlElementList(testHandleDescInfoObj, descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofHtmlElementList(()=>{}, descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofHtmlElementList(function(){}, descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofHtmlElementList([], descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofHtmlElementList([1,2,3], descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofHtmlElementList([[]], descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofHtmlElementList([[1,2,3], [4,5,6]], descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofHtmlElementList(new Map(), descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofHtmlElementList(new Map([['a',1],['b',2]]), descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofHtmlElementList(new Set(), descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofHtmlElementList(new Set([1,2,3]), descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofHtmlElementList(/123/, descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofHtmlElementList(new RegExp('123'), descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofHtmlElementList({}, descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofHtmlElementList({a:1, b:2}, descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofHtmlElementList(new Object(), descObj); }, VerificationError);
    Assert.throwsErrors(()=>{ autoVnAofHtmlElementList(testElement1, descObj); }, VerificationError);
    Assert.throwsErrorsNone(()=>{ autoVnAofHtmlElementList(testElementList1, descObj); });
    // 简单测试下 descObj 
    Assert.throwsErrorsWithMsg(()=>{
        autoVnAofHtmlElementList('123', {className:'类1', methodName:'方法2', paramName:'参数3'});
    }, /^类1\s+\-\s+方法2\s+\-\s+参数3\=.+/, VerificationError);
    
    // ========= 测试下数值返回
    let e1 = autoVnAofHtmlElementList(testElementList1, descObj);
    let e2 = autoVnAofHtmlElementList(testElementList2, descObj);
    Assert.equalsStrictly(testElementList1, e1);
    Assert.equalsStrictly(testElementList2, e2);
}

// 导出测试函数
export{
    //
    testHandleDescInfoObj,
    //
    testAutoVnAofString, testAutoVnAofNumber, testAutoVnAofBoolean, testAutoVnAofRegExp,
    testAutoVnAofMap, testAutoVnAofSet, testAutoVnAofArray, testAutoVnAof2DArray,
    testAutoVnAofObjectLiteral, testAutoVnAofTargetObject, testAutoVnAofTargetObjectSet, testAutoVnAofTargetObjectArray,
    testAutoVnAofTargetObject2DArray, testAutoVnAofHtmlElement, testAutoVnAofHtmlElementList
}