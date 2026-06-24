/**
 * In my license, all codes can be shared free of charge. 
 * However, If my code is taken for commercial use, please maintain it yourself. 
 * I am not obligated to take responsibility for your business application.
 * Here is my email "pangdongcan@live.com"
 * 
 * Copyright © 2026 Micheal Pang. All rights reserved.
 * 
 * @file This file "testVerify.js" is part of project "pdc-js-framework" , which is belong to Michael Pang (It's Me).
 * @author  Micheal Pang (Dongcan Pang)
 * @since  2026-06-19
 * @description  这是关于 utils/valid/verify.js 模块的测试。verify.js 是 valid.js 模块的子模块
 */
"use strict"; // 这是严格模式下的 Javascript 代码

// ============ 导入测试函数 和 断言处理工具

import {
    validString, validBoolean, validNumber, validRegExp, validFunction, validClass,
    validTargetClass, validObject, validArray, valid2DArray, validObjectLiteral, 
    validTargetObject, validTargetObjectSet, validTargetObjectArray, validTargetObject2DArray,
    validHtmlElement, validHtmlElementList
} from "../../../utils/valid/verify.js";

import { Assert } from "../../testTools.js";
import { ParameterError, VerificationError } from "../../../models/errors.js";

// 在我的框架中， js 的数据类型中主要有以下几种：
// ===> 空（undefined\null\NaN）、
// ===> 字符串（基础+对象）、数字（基础+对象）、布尔（基础+对象）、Symbol、类、函数、
// ===> 数组、Map、Set、
// ===> 正则、普通对象

// ============ 开始测试

function testValidString() {
    // 第1个参数
    Assert.throwsErrors(()=>{ validString(undefined, 'xxx', true); }, VerificationError);
    Assert.throwsErrors(()=>{ validString(null, 'xxx', true); }, VerificationError);
    Assert.throwsErrors(()=>{ validString(NaN, 'xxx', true); }, VerificationError);
    Assert.throwsErrorsNone(()=>{ validString('', 'xxx', true); } );
    Assert.throwsErrorsNone(()=>{ validString('ssss', 'xxx', true); } );
    Assert.throwsErrorsNone(()=>{ validString(new String(''), 'xxx', true); } );
    Assert.throwsErrorsNone(()=>{ validString(new String('ssss'), 'xxx', true); } );
    Assert.throwsErrors(()=>{ validString(123, 'xxx', true); }, VerificationError);
    Assert.throwsErrors(()=>{ validString(new Number(123), 'xxx', true); }, VerificationError);
    Assert.throwsErrors(()=>{ validString(true, 'xxx', true); }, VerificationError);
    Assert.throwsErrors(()=>{ validString(false, 'xxx', true); }, VerificationError);
    Assert.throwsErrors(()=>{ validString(new Boolean(true), 'xxx', true); }, VerificationError);
    Assert.throwsErrors(()=>{ validString(new Boolean(false), 'xxx', true); }, VerificationError);
    Assert.throwsErrors(()=>{ validString(Symbol.for('gname1'), 'xxx', true); }, VerificationError);
    Assert.throwsErrors(()=>{ validString(Error, 'xxx', true); }, VerificationError);
    Assert.throwsErrors(()=>{ validString(testValidString, 'xxx', true); }, VerificationError);
    Assert.throwsErrors(()=>{ validString(()=>{}, 'xxx', true); }, VerificationError);
    Assert.throwsErrors(()=>{ validString([], 'xxx', true); }, VerificationError);
    Assert.throwsErrors(()=>{ validString([1,2,3], 'xxx', true); }, VerificationError);
    Assert.throwsErrors(()=>{ validString(new Map(), 'xxx', true); }, VerificationError);
    Assert.throwsErrors(()=>{ validString(new Map([['a', 12], ['b', 13]]), 'xxx', true); }, VerificationError);
    Assert.throwsErrors(()=>{ validString(new Set(), 'xxx', true); }, VerificationError);
    Assert.throwsErrors(()=>{ validString(new Set([1,2,3]), 'xxx', true); }, VerificationError);
    Assert.throwsErrors(()=>{ validString(/123/, 'xxx', true); }, VerificationError);
    Assert.throwsErrors(()=>{ validString({a:1, b:2}, 'xxx', true); }, VerificationError);
    Assert.throwsErrors(()=>{ validString(new Object(), 'xxx', true); }, VerificationError);
    // 第2个参数
    Assert.throwsErrorsNone(()=>{ validString('xxx', undefined, true); } ); // errorInfo 有默认值
    Assert.throwsErrors(()=>{ validString('xxx', null, true); }, ParameterError);
    Assert.throwsErrors(()=>{ validString('xxx', NaN, true); }, ParameterError);
    Assert.throwsErrors(()=>{ validString('xxx', '', true); }, ParameterError ); // erroInfo 不能为空字符串
    Assert.throwsErrorsNone(()=>{ validString('xxx', 'ssss', true); } );
    Assert.throwsErrors(()=>{ validString('xxx', new String(''), true); }, ParameterError ); // erroInfo 不能为空字符串
    Assert.throwsErrorsNone(()=>{ validString('xxx', new String('ssss'), true); } );
    Assert.throwsErrors(()=>{ validString('xxx', 123, true); }, ParameterError);
    Assert.throwsErrors(()=>{ validString('xxx', new Number(123), true); }, ParameterError);
    Assert.throwsErrors(()=>{ validString('xxx', true, true); }, ParameterError);
    Assert.throwsErrors(()=>{ validString('xxx', false, true); }, ParameterError);
    Assert.throwsErrors(()=>{ validString('xxx', new Boolean(true), true); }, ParameterError);
    Assert.throwsErrors(()=>{ validString('xxx', new Boolean(false), true); }, ParameterError);
    Assert.throwsErrors(()=>{ validString('xxx', Symbol.for('gname1'), true); }, ParameterError);
    Assert.throwsErrors(()=>{ validString('xxx', Error, true); }, ParameterError);
    Assert.throwsErrors(()=>{ validString('xxx', testValidString, true); }, ParameterError);
    Assert.throwsErrors(()=>{ validString('xxx', ()=>{}, true); }, ParameterError);
    Assert.throwsErrors(()=>{ validString('xxx', [], true); }, ParameterError);
    Assert.throwsErrors(()=>{ validString('xxx', [1,2,3], true); }, ParameterError);
    Assert.throwsErrors(()=>{ validString('xxx', new Map(), true); }, ParameterError);
    Assert.throwsErrors(()=>{ validString('xxx', new Map([['a', 12], ['b', 13]]), true); }, ParameterError);
    Assert.throwsErrors(()=>{ validString('xxx', new Set(), true); }, ParameterError);
    Assert.throwsErrors(()=>{ validString('xxx', new Set([1,2,3]), true); }, ParameterError);
    Assert.throwsErrors(()=>{ validString('xxx', /123/, true); }, ParameterError);
    Assert.throwsErrors(()=>{ validString('xxx', {a:1, b:2}, true); }, ParameterError);
    Assert.throwsErrors(()=>{ validString('xxx', new Object(), true); }, ParameterError);
    // 第3个参数
    Assert.throwsErrorsNone(()=>{ validString('xxx', '测试', undefined); }); // 默认 canBeEmpty 为 true
    Assert.throwsErrors(()=>{ validString('xxx', '测试', null); }, ParameterError);
    Assert.throwsErrors(()=>{ validString('xxx', '测试', NaN); }, ParameterError);
    Assert.throwsErrors(()=>{ validString('xxx', '测试', ''); }, ParameterError );
    Assert.throwsErrors(()=>{ validString('xxx', '测试', 'ssss'); }, ParameterError );
    Assert.throwsErrors(()=>{ validString('xxx', '测试', new String('')); }, ParameterError );
    Assert.throwsErrors(()=>{ validString('xxx', '测试', new String('ssss')); }, ParameterError );
    Assert.throwsErrors(()=>{ validString('xxx', '测试', 123); }, ParameterError);
    Assert.throwsErrors(()=>{ validString('xxx', '测试', new Number(123)); }, ParameterError);
    Assert.throwsErrorsNone(()=>{ validString('xxx', '测试', true); } );
    Assert.throwsErrorsNone(()=>{ validString('xxx', '测试', false); } );
    Assert.throwsErrorsNone(()=>{ validString('xxx', '测试', new Boolean(true)); });
    Assert.throwsErrorsNone(()=>{ validString('xxx', '测试', new Boolean(false)); });
    Assert.throwsErrors(()=>{ validString('xxx', '测试', Symbol.for('gname1')); }, ParameterError);
    Assert.throwsErrors(()=>{ validString('xxx', '测试', Error); }, ParameterError);
    Assert.throwsErrors(()=>{ validString('xxx', '测试', testValidString); }, ParameterError);
    Assert.throwsErrors(()=>{ validString('xxx', '测试', ()=>{}); }, ParameterError);
    Assert.throwsErrors(()=>{ validString('xxx', '测试', []); }, ParameterError);
    Assert.throwsErrors(()=>{ validString('xxx', '测试', [1,2,3]); }, ParameterError);
    Assert.throwsErrors(()=>{ validString('xxx', '测试', new Map()); }, ParameterError);
    Assert.throwsErrors(()=>{ validString('xxx', '测试', new Map([['a', 12], ['b', 13]])); }, ParameterError);
    Assert.throwsErrors(()=>{ validString('xxx', '测试', new Set()); }, ParameterError);
    Assert.throwsErrors(()=>{ validString('xxx', '测试', new Set([1,2,3])); }, ParameterError);
    Assert.throwsErrors(()=>{ validString('xxx', '测试', /123/); }, ParameterError);
    Assert.throwsErrors(()=>{ validString('xxx', '测试', {a:1, b:2}); }, ParameterError);
    Assert.throwsErrors(()=>{ validString('xxx', '测试', new Object()); }, ParameterError);
    // 符合参数定义的值测试
    // 主要看抛不抛 VerificationError 异常。校验通过不抛，校验不通过则抛
    Assert.throwsErrorsNone(()=>{ validString('  ', '测试异常信息', true); });
    Assert.throwsErrorsNone(()=>{ validString(' xxxx ', '测试异常信息', true); });
    Assert.throwsErrors(()=>{ validString('  ', '测试异常信息', false); }, VerificationError); // 这里不能为空字符出，所以校验不通过
    Assert.throwsErrorsNone(()=>{ validString(' xxxx ', '测试异常信息', false); });
}

function testValidBoolean() {
    // 第1个参数
    Assert.throwsErrors(()=>{ validBoolean(undefined, '测试异常信息'); }, VerificationError);
    Assert.throwsErrors(()=>{ validBoolean(null, '测试异常信息'); }, VerificationError);
    Assert.throwsErrors(()=>{ validBoolean(NaN, '测试异常信息'); }, VerificationError);
    Assert.throwsErrors(()=>{ validBoolean('', '测试异常信息'); }, VerificationError);
    Assert.throwsErrors(()=>{ validBoolean('ssss', '测试异常信息'); }, VerificationError);
    Assert.throwsErrors(()=>{ validBoolean(new String(''), '测试异常信息'); }, VerificationError);
    Assert.throwsErrors(()=>{ validBoolean(new String('ssss'), '测试异常信息'); }, VerificationError);
    Assert.throwsErrors(()=>{ validBoolean(123, '测试异常信息'); }, VerificationError);
    Assert.throwsErrors(()=>{ validBoolean(new Number(123), '测试异常信息'); }, VerificationError);
    Assert.throwsErrorsNone(()=>{ validBoolean(true, '测试异常信息'); });
    Assert.throwsErrorsNone(()=>{ validBoolean(false, '测试异常信息'); });
    Assert.throwsErrorsNone(()=>{ validBoolean(new Boolean(true), '测试异常信息'); });
    Assert.throwsErrorsNone(()=>{ validBoolean(new Boolean(false), '测试异常信息'); });
    Assert.throwsErrors(()=>{ validBoolean(Symbol.for('gname1'), '测试异常信息'); }, VerificationError);
    Assert.throwsErrors(()=>{ validBoolean(Error, '测试异常信息'); }, VerificationError);
    Assert.throwsErrors(()=>{ validBoolean(testValidBoolean, '测试异常信息'); }, VerificationError);
    Assert.throwsErrors(()=>{ validBoolean(()=>{}, '测试异常信息'); }, VerificationError);
    Assert.throwsErrors(()=>{ validBoolean([], '测试异常信息'); }, VerificationError);
    Assert.throwsErrors(()=>{ validBoolean([1,2,3], '测试异常信息'); }, VerificationError);
    Assert.throwsErrors(()=>{ validBoolean(new Map(), '测试异常信息'); }, VerificationError);
    Assert.throwsErrors(()=>{ validBoolean(new Map([['a', 12], ['b', 13]]), '测试异常信息'); }, VerificationError);
    Assert.throwsErrors(()=>{ validBoolean(new Set(), '测试异常信息'); }, VerificationError);
    Assert.throwsErrors(()=>{ validBoolean(new Set([1,2,3]), '测试异常信息'); }, VerificationError);
    Assert.throwsErrors(()=>{ validBoolean(/123/, '测试异常信息'); }, VerificationError);
    Assert.throwsErrors(()=>{ validBoolean({a:1, b:2}, '测试异常信息'); }, VerificationError);
    Assert.throwsErrors(()=>{ validBoolean(new Object(), '测试异常信息'); }, VerificationError);
    // 第2个参数
    Assert.throwsErrorsNone(()=>{ validBoolean(true, undefined); }); //默认 有字符串，所以参数检验通过，不抛异常
    Assert.throwsErrors(()=>{ validBoolean(true, null); }, ParameterError);
    Assert.throwsErrors(()=>{ validBoolean(true, NaN); }, ParameterError);
    Assert.throwsErrors(()=>{ validBoolean(true, ''); }, ParameterError);
    Assert.throwsErrorsNone(()=>{ validBoolean(true, 'ssss'); });
    Assert.throwsErrors(()=>{ validBoolean(true, new String('')); }, ParameterError);
    Assert.throwsErrorsNone(()=>{ validBoolean(true, new String('ssss')); });
    Assert.throwsErrors(()=>{ validBoolean(true, 123); }, ParameterError);
    Assert.throwsErrors(()=>{ validBoolean(true, new Number(123)); }, ParameterError);
    Assert.throwsErrors(()=>{ validBoolean(true, true); }, ParameterError);
    Assert.throwsErrors(()=>{ validBoolean(true, false); }, ParameterError);
    Assert.throwsErrors(()=>{ validBoolean(true, new Boolean(true)); }, ParameterError);
    Assert.throwsErrors(()=>{ validBoolean(true, new Boolean(false)); }, ParameterError);
    Assert.throwsErrors(()=>{ validBoolean(true, Symbol.for('gname1')); }, ParameterError);
    Assert.throwsErrors(()=>{ validBoolean(true, Error); }, ParameterError);
    Assert.throwsErrors(()=>{ validBoolean(true, testValidBoolean); }, ParameterError);
    Assert.throwsErrors(()=>{ validBoolean(true, ()=>{}); }, ParameterError);
    Assert.throwsErrors(()=>{ validBoolean(true, []); }, ParameterError);
    Assert.throwsErrors(()=>{ validBoolean(true, [1,2,3]); }, ParameterError);
    Assert.throwsErrors(()=>{ validBoolean(true, new Map()); }, ParameterError);
    Assert.throwsErrors(()=>{ validBoolean(true, new Map([['a', 12], ['b', 13]])); }, ParameterError);
    Assert.throwsErrors(()=>{ validBoolean(true, new Set()); }, ParameterError);
    Assert.throwsErrors(()=>{ validBoolean(true, new Set([1,2,3])); }, ParameterError);
    Assert.throwsErrors(()=>{ validBoolean(true, /123/); }, ParameterError);
    Assert.throwsErrors(()=>{ validBoolean(true, {a:1, b:2}); }, ParameterError);
    Assert.throwsErrors(()=>{ validBoolean(true, new Object()); }, ParameterError);
    // 符合参数定义的值测试
    // 主要看抛不抛 VerificationError 异常。校验通过不抛，校验不通过则抛
    Assert.throwsErrorsNone(()=>{ validBoolean(true, '测试'); });
    Assert.throwsErrorsNone(()=>{ validBoolean(false, '测试'); });
    Assert.throwsErrorsNone(()=>{ validBoolean(new Boolean(true), '测试'); });
    Assert.throwsErrorsNone(()=>{ validBoolean(new Boolean(false), '测试'); });
    Assert.throwsErrors(()=>{ validBoolean('xxxx', '测试'); }, VerificationError); 
}

function testValidNumber() {
    // 第1个参数
    Assert.throwsErrors(()=>{ validNumber(undefined, '测试异常信息'); }, VerificationError);
    Assert.throwsErrors(()=>{ validNumber(null, '测试异常信息'); }, VerificationError);
    Assert.throwsErrors(()=>{ validNumber(NaN, '测试异常信息'); }, VerificationError);
    Assert.throwsErrors(()=>{ validNumber('', '测试异常信息'); }, VerificationError);
    Assert.throwsErrors(()=>{ validNumber('ssss', '测试异常信息'); }, VerificationError);
    Assert.throwsErrors(()=>{ validNumber(new String(''), '测试异常信息'); }, VerificationError);
    Assert.throwsErrors(()=>{ validNumber(new String('ssss'), '测试异常信息'); }, VerificationError);
    Assert.throwsErrorsNone(()=>{ validNumber(123, '测试异常信息'); });
    Assert.throwsErrorsNone(()=>{ validNumber(new Number(123), '测试异常信息'); });
    Assert.throwsErrors(()=>{ validNumber(true, '测试异常信息'); }, VerificationError);
    Assert.throwsErrors(()=>{ validNumber(false, '测试异常信息'); }, VerificationError);
    Assert.throwsErrors(()=>{ validNumber(new Boolean(true), '测试异常信息'); }, VerificationError);
    Assert.throwsErrors(()=>{ validNumber(new Boolean(false), '测试异常信息'); }, VerificationError);
    Assert.throwsErrors(()=>{ validNumber(Symbol.for('gname1'), '测试异常信息'); }, VerificationError);
    Assert.throwsErrors(()=>{ validNumber(Error, '测试异常信息'); }, VerificationError);
    Assert.throwsErrors(()=>{ validNumber(testValidBoolean, '测试异常信息'); }, VerificationError);
    Assert.throwsErrors(()=>{ validNumber(()=>{}, '测试异常信息'); }, VerificationError);
    Assert.throwsErrors(()=>{ validNumber([], '测试异常信息'); }, VerificationError);
    Assert.throwsErrors(()=>{ validNumber([1,2,3], '测试异常信息'); }, VerificationError);
    Assert.throwsErrors(()=>{ validNumber(new Map(), '测试异常信息'); }, VerificationError);
    Assert.throwsErrors(()=>{ validNumber(new Map([['a', 12], ['b', 13]]), '测试异常信息'); }, VerificationError);
    Assert.throwsErrors(()=>{ validNumber(new Set(), '测试异常信息'); }, VerificationError);
    Assert.throwsErrors(()=>{ validNumber(new Set([1,2,3]), '测试异常信息'); }, VerificationError);
    Assert.throwsErrors(()=>{ validNumber(/123/, '测试异常信息'); }, VerificationError);
    Assert.throwsErrors(()=>{ validNumber({a:1, b:2}, '测试异常信息'); }, VerificationError);
    Assert.throwsErrors(()=>{ validNumber(new Object(), '测试异常信息'); }, VerificationError);
    // 第2个参数
    Assert.throwsErrorsNone(()=>{ validNumber(123, undefined); }); //默认 有字符串，所以参数检验通过，不抛异常
    Assert.throwsErrors(()=>{ validNumber(123, null); }, ParameterError);
    Assert.throwsErrors(()=>{ validNumber(123, NaN); }, ParameterError);
    Assert.throwsErrors(()=>{ validNumber(123, ''); }, ParameterError);
    Assert.throwsErrorsNone(()=>{ validNumber(123, 'ssss'); });
    Assert.throwsErrors(()=>{ validNumber(123, new String('')); }, ParameterError);
    Assert.throwsErrorsNone(()=>{ validNumber(123, new String('ssss')); });
    Assert.throwsErrors(()=>{ validNumber(123, 123); }, ParameterError);
    Assert.throwsErrors(()=>{ validNumber(123, new Number(123)); }, ParameterError);
    Assert.throwsErrors(()=>{ validNumber(123, true); }, ParameterError);
    Assert.throwsErrors(()=>{ validNumber(123, false); }, ParameterError);
    Assert.throwsErrors(()=>{ validNumber(123, new Boolean(true)); }, ParameterError);
    Assert.throwsErrors(()=>{ validNumber(123, new Boolean(false)); }, ParameterError);
    Assert.throwsErrors(()=>{ validNumber(123, Symbol.for('gname1')); }, ParameterError);
    Assert.throwsErrors(()=>{ validNumber(123, Error); }, ParameterError);
    Assert.throwsErrors(()=>{ validNumber(123, testValidBoolean); }, ParameterError);
    Assert.throwsErrors(()=>{ validNumber(123, ()=>{}); }, ParameterError);
    Assert.throwsErrors(()=>{ validNumber(123, []); }, ParameterError);
    Assert.throwsErrors(()=>{ validNumber(123, [1,2,3]); }, ParameterError);
    Assert.throwsErrors(()=>{ validNumber(123, new Map()); }, ParameterError);
    Assert.throwsErrors(()=>{ validNumber(123, new Map([['a', 12], ['b', 13]])); }, ParameterError);
    Assert.throwsErrors(()=>{ validNumber(123, new Set()); }, ParameterError);
    Assert.throwsErrors(()=>{ validNumber(123, new Set([1,2,3])); }, ParameterError);
    Assert.throwsErrors(()=>{ validNumber(123, /123/); }, ParameterError);
    Assert.throwsErrors(()=>{ validNumber(123, {a:1, b:2}); }, ParameterError);
    Assert.throwsErrors(()=>{ validNumber(123, new Object()); }, ParameterError);
    // 符合参数定义的值测试
    // 主要看抛不抛 VerificationError 异常。校验通过不抛，校验不通过则抛
    Assert.throwsErrorsNone(()=>{ validNumber(123, '测试'); });
    Assert.throwsErrorsNone(()=>{ validNumber(-1.23, '测试'); });
    Assert.throwsErrorsNone(()=>{ validNumber(new Number(123), '测试'); });
    Assert.throwsErrorsNone(()=>{ validNumber(new Number(-1.23), '测试'); });
    Assert.throwsErrors(()=>{ validNumber('xxxx', '测试'); }, VerificationError);
}

function testValidRegExp() {
    // 第1个参数
    Assert.throwsErrors(()=>{ validRegExp(undefined, '测试异常信息'); }, VerificationError);
    Assert.throwsErrors(()=>{ validRegExp(null, '测试异常信息'); }, VerificationError);
    Assert.throwsErrors(()=>{ validRegExp(NaN, '测试异常信息'); }, VerificationError);
    Assert.throwsErrors(()=>{ validRegExp('', '测试异常信息'); }, VerificationError);
    Assert.throwsErrors(()=>{ validRegExp('ssss', '测试异常信息'); }, VerificationError);
    Assert.throwsErrors(()=>{ validRegExp(new String(''), '测试异常信息'); }, VerificationError);
    Assert.throwsErrors(()=>{ validRegExp(new String('ssss'), '测试异常信息'); }, VerificationError);
    Assert.throwsErrors(()=>{ validRegExp(123, '测试异常信息'); }, VerificationError);
    Assert.throwsErrors(()=>{ validRegExp(new Number(123), '测试异常信息'); }, VerificationError);
    Assert.throwsErrors(()=>{ validRegExp(true, '测试异常信息'); }, VerificationError);
    Assert.throwsErrors(()=>{ validRegExp(false, '测试异常信息'); }, VerificationError);
    Assert.throwsErrors(()=>{ validRegExp(new Boolean(true), '测试异常信息'); }, VerificationError);
    Assert.throwsErrors(()=>{ validRegExp(new Boolean(false), '测试异常信息'); }, VerificationError);
    Assert.throwsErrors(()=>{ validRegExp(Symbol.for('gname1'), '测试异常信息'); }, VerificationError);
    Assert.throwsErrors(()=>{ validRegExp(Error, '测试异常信息'); }, VerificationError);
    Assert.throwsErrors(()=>{ validRegExp(testValidBoolean, '测试异常信息'); }, VerificationError);
    Assert.throwsErrors(()=>{ validRegExp(()=>{}, '测试异常信息'); }, VerificationError);
    Assert.throwsErrors(()=>{ validRegExp([], '测试异常信息'); }, VerificationError);
    Assert.throwsErrors(()=>{ validRegExp([1,2,3], '测试异常信息'); }, VerificationError);
    Assert.throwsErrors(()=>{ validRegExp(new Map(), '测试异常信息'); }, VerificationError);
    Assert.throwsErrors(()=>{ validRegExp(new Map([['a', 12], ['b', 13]]), '测试异常信息'); }, VerificationError);
    Assert.throwsErrors(()=>{ validRegExp(new Set(), '测试异常信息'); }, VerificationError);
    Assert.throwsErrors(()=>{ validRegExp(new Set([1,2,3]), '测试异常信息'); }, VerificationError);
    Assert.throwsErrorsNone(()=>{ validRegExp(/123/, '测试异常信息'); });
    Assert.throwsErrors(()=>{ validRegExp({a:1, b:2}, '测试异常信息'); }, VerificationError);
    Assert.throwsErrors(()=>{ validRegExp(new Object(), '测试异常信息'); }, VerificationError);
    // 第2个参数
    Assert.throwsErrorsNone(()=>{ validRegExp(/123456/, undefined); }); //默认 有字符串，所以参数检验通过，不抛异常
    Assert.throwsErrors(()=>{ validRegExp(/123456/, null); }, ParameterError);
    Assert.throwsErrors(()=>{ validRegExp(/123456/, NaN); }, ParameterError);
    Assert.throwsErrors(()=>{ validRegExp(/123456/, ''); }, ParameterError);
    Assert.throwsErrorsNone(()=>{ validRegExp(/123456/, 'ssss'); });
    Assert.throwsErrors(()=>{ validRegExp(/123456/, new String('')); }, ParameterError);
    Assert.throwsErrorsNone(()=>{ validRegExp(/123456/, new String('ssss')); });
    Assert.throwsErrors(()=>{ validRegExp(/123456/, 123); }, ParameterError);
    Assert.throwsErrors(()=>{ validRegExp(/123456/, new Number(123)); }, ParameterError);
    Assert.throwsErrors(()=>{ validRegExp(/123456/, true); }, ParameterError);
    Assert.throwsErrors(()=>{ validRegExp(/123456/, false); }, ParameterError);
    Assert.throwsErrors(()=>{ validRegExp(/123456/, new Boolean(true)); }, ParameterError);
    Assert.throwsErrors(()=>{ validRegExp(/123456/, new Boolean(false)); }, ParameterError);
    Assert.throwsErrors(()=>{ validRegExp(/123456/, Symbol.for('gname1')); }, ParameterError);
    Assert.throwsErrors(()=>{ validRegExp(/123456/, Error); }, ParameterError);
    Assert.throwsErrors(()=>{ validRegExp(/123456/, testValidBoolean); }, ParameterError);
    Assert.throwsErrors(()=>{ validRegExp(/123456/, ()=>{}); }, ParameterError);
    Assert.throwsErrors(()=>{ validRegExp(/123456/, []); }, ParameterError);
    Assert.throwsErrors(()=>{ validRegExp(/123456/, [1,2,3]); }, ParameterError);
    Assert.throwsErrors(()=>{ validRegExp(/123456/, new Map()); }, ParameterError);
    Assert.throwsErrors(()=>{ validRegExp(/123456/, new Map([['a', 12], ['b', 13]])); }, ParameterError);
    Assert.throwsErrors(()=>{ validRegExp(/123456/, new Set()); }, ParameterError);
    Assert.throwsErrors(()=>{ validRegExp(/123456/, new Set([1,2,3])); }, ParameterError);
    Assert.throwsErrors(()=>{ validRegExp(/123456/, /123/); }, ParameterError);
    Assert.throwsErrors(()=>{ validRegExp(/123456/, {a:1, b:2}); }, ParameterError);
    Assert.throwsErrors(()=>{ validRegExp(/123456/, new Object()); }, ParameterError);
    // 符合参数定义的值测试
    // 主要看抛不抛 VerificationError 异常。校验通过不抛，校验不通过则抛
    Assert.throwsErrorsNone(()=>{ validRegExp(/789456/, '测试'); });
    Assert.throwsErrorsNone(()=>{ validRegExp(new RegExp('456789'), '测试'); });
    Assert.throwsErrors(()=>{ validRegExp('xxxx', '测试'); }, VerificationError);
}

function testValidFunction() {
    // 第1个参数
    Assert.throwsErrors(()=>{ validFunction(undefined, '测试异常信息'); }, VerificationError);
    Assert.throwsErrors(()=>{ validFunction(null, '测试异常信息'); }, VerificationError);
    Assert.throwsErrors(()=>{ validFunction(NaN, '测试异常信息'); }, VerificationError);
    Assert.throwsErrors(()=>{ validFunction('', '测试异常信息'); }, VerificationError);
    Assert.throwsErrors(()=>{ validFunction('ssss', '测试异常信息'); }, VerificationError);
    Assert.throwsErrors(()=>{ validFunction(new String(''), '测试异常信息'); }, VerificationError);
    Assert.throwsErrors(()=>{ validFunction(new String('ssss'), '测试异常信息'); }, VerificationError);
    Assert.throwsErrors(()=>{ validFunction(123, '测试异常信息'); }, VerificationError);
    Assert.throwsErrors(()=>{ validFunction(new Number(123), '测试异常信息'); }, VerificationError);
    Assert.throwsErrors(()=>{ validFunction(true, '测试异常信息'); }, VerificationError);
    Assert.throwsErrors(()=>{ validFunction(false, '测试异常信息'); }, VerificationError);
    Assert.throwsErrors(()=>{ validFunction(new Boolean(true), '测试异常信息'); }, VerificationError);
    Assert.throwsErrors(()=>{ validFunction(new Boolean(false), '测试异常信息'); }, VerificationError);
    Assert.throwsErrors(()=>{ validFunction(Symbol.for('gname1'), '测试异常信息'); }, VerificationError);
    Assert.throwsErrorsNone(()=>{ validFunction(Error, '测试异常信息'); }); // Error 类也是 function 
    Assert.throwsErrorsNone(()=>{ validFunction(testValidFunction, '测试异常信息'); });
    Assert.throwsErrorsNone(()=>{ validFunction(()=>{}, '测试异常信息'); });
    Assert.throwsErrors(()=>{ validFunction([], '测试异常信息'); }, VerificationError);
    Assert.throwsErrors(()=>{ validFunction([1,2,3], '测试异常信息'); }, VerificationError);
    Assert.throwsErrors(()=>{ validFunction(new Map(), '测试异常信息'); }, VerificationError);
    Assert.throwsErrors(()=>{ validFunction(new Map([['a', 12], ['b', 13]]), '测试异常信息'); }, VerificationError);
    Assert.throwsErrors(()=>{ validFunction(new Set(), '测试异常信息'); }, VerificationError);
    Assert.throwsErrors(()=>{ validFunction(new Set([1,2,3]), '测试异常信息'); }, VerificationError);
    Assert.throwsErrors(()=>{ validFunction(/123/, '测试异常信息'); }, VerificationError);
    Assert.throwsErrors(()=>{ validFunction({a:1, b:2}, '测试异常信息'); }, VerificationError);
    Assert.throwsErrors(()=>{ validFunction(new Object(), '测试异常信息'); }, VerificationError);
    // 第2个参数
    Assert.throwsErrorsNone(()=>{ validFunction(testValidFunction, undefined); }); //默认 有字符串，所以参数检验通过，不抛异常
    Assert.throwsErrors(()=>{ validFunction(testValidFunction, null); }, ParameterError);
    Assert.throwsErrors(()=>{ validFunction(testValidFunction, NaN); }, ParameterError);
    Assert.throwsErrors(()=>{ validFunction(testValidFunction, ''); }, ParameterError);
    Assert.throwsErrorsNone(()=>{ validFunction(testValidFunction, 'ssss'); });
    Assert.throwsErrors(()=>{ validFunction(testValidFunction, new String('')); }, ParameterError);
    Assert.throwsErrorsNone(()=>{ validFunction(testValidFunction, new String('ssss')); });
    Assert.throwsErrors(()=>{ validFunction(testValidFunction, 123); }, ParameterError);
    Assert.throwsErrors(()=>{ validFunction(testValidFunction, new Number(123)); }, ParameterError);
    Assert.throwsErrors(()=>{ validFunction(testValidFunction, true); }, ParameterError);
    Assert.throwsErrors(()=>{ validFunction(testValidFunction, false); }, ParameterError);
    Assert.throwsErrors(()=>{ validFunction(testValidFunction, new Boolean(true)); }, ParameterError);
    Assert.throwsErrors(()=>{ validFunction(testValidFunction, new Boolean(false)); }, ParameterError);
    Assert.throwsErrors(()=>{ validFunction(testValidFunction, Symbol.for('gname1')); }, ParameterError);
    Assert.throwsErrors(()=>{ validFunction(testValidFunction, Error); }, ParameterError);
    Assert.throwsErrors(()=>{ validFunction(testValidFunction, testValidBoolean); }, ParameterError);
    Assert.throwsErrors(()=>{ validFunction(testValidFunction, ()=>{}); }, ParameterError);
    Assert.throwsErrors(()=>{ validFunction(testValidFunction, []); }, ParameterError);
    Assert.throwsErrors(()=>{ validFunction(testValidFunction, [1,2,3]); }, ParameterError);
    Assert.throwsErrors(()=>{ validFunction(testValidFunction, new Map()); }, ParameterError);
    Assert.throwsErrors(()=>{ validFunction(testValidFunction, new Map([['a', 12], ['b', 13]])); }, ParameterError);
    Assert.throwsErrors(()=>{ validFunction(testValidFunction, new Set()); }, ParameterError);
    Assert.throwsErrors(()=>{ validFunction(testValidFunction, new Set([1,2,3])); }, ParameterError);
    Assert.throwsErrors(()=>{ validFunction(testValidFunction, /123/); }, ParameterError);
    Assert.throwsErrors(()=>{ validFunction(testValidFunction, {a:1, b:2}); }, ParameterError);
    Assert.throwsErrors(()=>{ validFunction(testValidFunction, new Object()); }, ParameterError);
    // 符合参数定义的值测试
    // 主要看抛不抛 VerificationError 异常。校验通过不抛，校验不通过则抛
    Assert.throwsErrorsNone(()=>{ validFunction(Error, '测试3'); });
    Assert.throwsErrorsNone(()=>{ validFunction(testValidFunction, '测试1'); });
    Assert.throwsErrorsNone(()=>{ validFunction(()=>{}, '测试2'); });
    Assert.throwsErrors(()=>{ validFunction('xxxx', '测试'); }, VerificationError);
}

function testValidClass() {
    // 第1个参数
    Assert.throwsErrors(()=>{ validClass(undefined, '测试异常信息'); }, VerificationError);
    Assert.throwsErrors(()=>{ validClass(null, '测试异常信息'); }, VerificationError);
    Assert.throwsErrors(()=>{ validClass(NaN, '测试异常信息'); }, VerificationError);
    Assert.throwsErrors(()=>{ validClass('', '测试异常信息'); }, VerificationError);
    Assert.throwsErrors(()=>{ validClass('ssss', '测试异常信息'); }, VerificationError);
    Assert.throwsErrors(()=>{ validClass(new String(''), '测试异常信息'); }, VerificationError);
    Assert.throwsErrors(()=>{ validClass(new String('ssss'), '测试异常信息'); }, VerificationError);
    Assert.throwsErrors(()=>{ validClass(123, '测试异常信息'); }, VerificationError);
    Assert.throwsErrors(()=>{ validClass(new Number(123), '测试异常信息'); }, VerificationError);
    Assert.throwsErrors(()=>{ validClass(true, '测试异常信息'); }, VerificationError);
    Assert.throwsErrors(()=>{ validClass(false, '测试异常信息'); }, VerificationError);
    Assert.throwsErrors(()=>{ validClass(new Boolean(true), '测试异常信息'); }, VerificationError);
    Assert.throwsErrors(()=>{ validClass(new Boolean(false), '测试异常信息'); }, VerificationError);
    Assert.throwsErrors(()=>{ validClass(Symbol.for('gname1'), '测试异常信息'); }, VerificationError);
    Assert.throwsErrorsNone(()=>{ validClass(Error, '测试异常信息'); }); // Error 类也是 function 
    Assert.throwsErrorsNone(()=>{ validClass(testValidFunction, '测试异常信息'); });
    Assert.throwsErrors(()=>{ validClass(()=>{}, '测试异常信息'); }, VerificationError); // 箭头函数不算 class
    Assert.throwsErrors(()=>{ validClass([], '测试异常信息'); }, VerificationError);
    Assert.throwsErrors(()=>{ validClass([1,2,3], '测试异常信息'); }, VerificationError);
    Assert.throwsErrors(()=>{ validClass(new Map(), '测试异常信息'); }, VerificationError);
    Assert.throwsErrors(()=>{ validClass(new Map([['a', 12], ['b', 13]]), '测试异常信息'); }, VerificationError);
    Assert.throwsErrors(()=>{ validClass(new Set(), '测试异常信息'); }, VerificationError);
    Assert.throwsErrors(()=>{ validClass(new Set([1,2,3]), '测试异常信息'); }, VerificationError);
    Assert.throwsErrors(()=>{ validClass(/123/, '测试异常信息'); }, VerificationError);
    Assert.throwsErrors(()=>{ validClass({a:1, b:2}, '测试异常信息'); }, VerificationError);
    Assert.throwsErrors(()=>{ validClass(new Object(), '测试异常信息'); }, VerificationError);
    // 第2个参数
    Assert.throwsErrorsNone(()=>{ validClass(Error, undefined); }); //默认 有字符串，所以参数检验通过，不抛异常
    Assert.throwsErrors(()=>{ validClass(Error, null); }, ParameterError);
    Assert.throwsErrors(()=>{ validClass(Error, NaN); }, ParameterError);
    Assert.throwsErrors(()=>{ validClass(Error, ''); }, ParameterError);
    Assert.throwsErrorsNone(()=>{ validClass(Error, 'ssss'); });
    Assert.throwsErrors(()=>{ validClass(Error, new String('')); }, ParameterError);
    Assert.throwsErrorsNone(()=>{ validClass(Error, new String('ssss')); });
    Assert.throwsErrors(()=>{ validClass(Error, 123); }, ParameterError);
    Assert.throwsErrors(()=>{ validClass(Error, new Number(123)); }, ParameterError);
    Assert.throwsErrors(()=>{ validClass(Error, true); }, ParameterError);
    Assert.throwsErrors(()=>{ validClass(Error, false); }, ParameterError);
    Assert.throwsErrors(()=>{ validClass(Error, new Boolean(true)); }, ParameterError);
    Assert.throwsErrors(()=>{ validClass(Error, new Boolean(false)); }, ParameterError);
    Assert.throwsErrors(()=>{ validClass(Error, Symbol.for('gname1')); }, ParameterError);
    Assert.throwsErrors(()=>{ validClass(Error, Error); }, ParameterError);
    Assert.throwsErrors(()=>{ validClass(Error, testValidBoolean); }, ParameterError);
    Assert.throwsErrors(()=>{ validClass(Error, ()=>{}); }, ParameterError);
    Assert.throwsErrors(()=>{ validClass(Error, []); }, ParameterError);
    Assert.throwsErrors(()=>{ validClass(Error, [1,2,3]); }, ParameterError);
    Assert.throwsErrors(()=>{ validClass(Error, new Map()); }, ParameterError);
    Assert.throwsErrors(()=>{ validClass(Error, new Map([['a', 12], ['b', 13]])); }, ParameterError);
    Assert.throwsErrors(()=>{ validClass(Error, new Set()); }, ParameterError);
    Assert.throwsErrors(()=>{ validClass(Error, new Set([1,2,3])); }, ParameterError);
    Assert.throwsErrors(()=>{ validClass(Error, /123/); }, ParameterError);
    Assert.throwsErrors(()=>{ validClass(Error, {a:1, b:2}); }, ParameterError);
    Assert.throwsErrors(()=>{ validClass(Error, new Object()); }, ParameterError);
    // 符合参数定义的值测试
    // 主要看抛不抛 VerificationError 异常。校验通过不抛，校验不通过则抛
    Assert.throwsErrorsNone(()=>{ validClass(Error, '测试3'); });
    Assert.throwsErrorsNone(()=>{ validClass(testValidFunction, '测试1'); });
    Assert.throwsErrors(()=>{ validClass(()=>{}, '测试2'); }, VerificationError);
    Assert.throwsErrors(()=>{ validClass('xxxx', '测试'); }, VerificationError);
}

function testValidTargetClass() {
    // 第1个参数
    Assert.throwsErrors(()=>{ validTargetClass(undefined, 'xxx', Error); }, VerificationError);
    Assert.throwsErrors(()=>{ validTargetClass(null, 'xxx', Error); }, VerificationError);
    Assert.throwsErrors(()=>{ validTargetClass(NaN, 'xxx', Error); }, VerificationError);
    Assert.throwsErrors(()=>{ validTargetClass('', 'xxx', Error); }, VerificationError);
    Assert.throwsErrors(()=>{ validTargetClass('ssss', 'xxx', Error); }, VerificationError);
    Assert.throwsErrors(()=>{ validTargetClass(new String(''), 'xxx', Error); }, VerificationError);
    Assert.throwsErrors(()=>{ validTargetClass(new String('ssss'), 'xxx', Error); }, VerificationError);
    Assert.throwsErrors(()=>{ validTargetClass(123, 'xxx', Error); }, VerificationError);
    Assert.throwsErrors(()=>{ validTargetClass(new Number(123), 'xxx', Error); }, VerificationError);
    Assert.throwsErrors(()=>{ validTargetClass(true, 'xxx', Error); }, VerificationError);
    Assert.throwsErrors(()=>{ validTargetClass(false, 'xxx', Error); }, VerificationError);
    Assert.throwsErrors(()=>{ validTargetClass(new Boolean(true), 'xxx', Error); }, VerificationError);
    Assert.throwsErrors(()=>{ validTargetClass(new Boolean(false), 'xxx', Error); }, VerificationError);
    Assert.throwsErrors(()=>{ validTargetClass(Symbol.for('gname1'), 'xxx', Error); }, VerificationError);
    Assert.throwsErrorsNone(()=>{ validTargetClass(Error, 'xxx', Error); });
    Assert.throwsErrors(()=>{ validTargetClass(testValidTargetClass, 'xxx', Error); }, VerificationError);
    Assert.throwsErrors(()=>{ validTargetClass(()=>{}, 'xxx', Error); }, VerificationError);
    Assert.throwsErrors(()=>{ validTargetClass([], 'xxx', Error); }, VerificationError);
    Assert.throwsErrors(()=>{ validTargetClass([1,2,3], 'xxx', Error); }, VerificationError);
    Assert.throwsErrors(()=>{ validTargetClass(new Map(), 'xxx', Error); }, VerificationError);
    Assert.throwsErrors(()=>{ validTargetClass(new Map([['a', 12], ['b', 13]]), 'xxx', Error); }, VerificationError);
    Assert.throwsErrors(()=>{ validTargetClass(new Set(), 'xxx', Error); }, VerificationError);
    Assert.throwsErrors(()=>{ validTargetClass(new Set([1,2,3]), 'xxx', Error); }, VerificationError);
    Assert.throwsErrors(()=>{ validTargetClass(/123/, 'xxx', Error); }, VerificationError);
    Assert.throwsErrors(()=>{ validTargetClass({a:1, b:2}, 'xxx', Error); }, VerificationError);
    Assert.throwsErrors(()=>{ validTargetClass(new Object(), 'xxx', Error); }, VerificationError);
    // 第2个参数
    Assert.throwsErrorsNone(()=>{ validTargetClass(Error, undefined, Error); });// 默认
    Assert.throwsErrors(()=>{ validTargetClass(Error, null, Error); }, ParameterError);
    Assert.throwsErrors(()=>{ validTargetClass(Error, NaN, Error); }, ParameterError);
    Assert.throwsErrors(()=>{ validTargetClass(Error, '', Error); }, ParameterError);
    Assert.throwsErrorsNone(()=>{ validTargetClass(Error, 'ssss', Error); }); // 非空字符串
    Assert.throwsErrors(()=>{ validTargetClass(Error, new String(''), Error); }, ParameterError);
    Assert.throwsErrorsNone(()=>{ validTargetClass(Error, new String('ssss'), Error); }); // 非空字符串
    Assert.throwsErrors(()=>{ validTargetClass(Error, 123, Error); }, ParameterError);
    Assert.throwsErrors(()=>{ validTargetClass(Error, new Number(123), Error); }, ParameterError);
    Assert.throwsErrors(()=>{ validTargetClass(Error, true, Error); }, ParameterError);
    Assert.throwsErrors(()=>{ validTargetClass(Error, false, Error); }, ParameterError);
    Assert.throwsErrors(()=>{ validTargetClass(Error, new Boolean(true), Error); }, ParameterError);
    Assert.throwsErrors(()=>{ validTargetClass(Error, new Boolean(false), Error); }, ParameterError);
    Assert.throwsErrors(()=>{ validTargetClass(Error, Symbol.for('gname1'), Error); }, ParameterError);
    Assert.throwsErrors(()=>{ validTargetClass(Error, Error, Error); }, ParameterError);
    Assert.throwsErrors(()=>{ validTargetClass(Error, testValidTargetClass, Error); }, ParameterError);
    Assert.throwsErrors(()=>{ validTargetClass(Error, ()=>{}, Error); }, ParameterError);
    Assert.throwsErrors(()=>{ validTargetClass(Error, [], Error); }, ParameterError);
    Assert.throwsErrors(()=>{ validTargetClass(Error, [1,2,3], Error); }, ParameterError);
    Assert.throwsErrors(()=>{ validTargetClass(Error, new Map(), Error); }, ParameterError);
    Assert.throwsErrors(()=>{ validTargetClass(Error, new Map([['a', 12], ['b', 13]]), Error); }, ParameterError);
    Assert.throwsErrors(()=>{ validTargetClass(Error, new Set(), Error); }, ParameterError);
    Assert.throwsErrors(()=>{ validTargetClass(Error, new Set([1,2,3]), Error); }, ParameterError);
    Assert.throwsErrors(()=>{ validTargetClass(Error, /123/, Error); }, ParameterError);
    Assert.throwsErrors(()=>{ validTargetClass(Error, {a:1, b:2}, Error); }, ParameterError);
    Assert.throwsErrors(()=>{ validTargetClass(Error, new Object(), Error); }, ParameterError);
    // 第3个参数
    Assert.throwsErrors(()=>{ validTargetClass(Error, '测试', undefined); }, ParameterError);
    Assert.throwsErrors(()=>{ validTargetClass(Error, '测试', null); }, ParameterError);
    Assert.throwsErrors(()=>{ validTargetClass(Error, '测试', NaN); }, ParameterError);
    Assert.throwsErrors(()=>{ validTargetClass(Error, '测试', ''); }, ParameterError);
    Assert.throwsErrors(()=>{ validTargetClass(Error, '测试', 'ssss'); }, ParameterError); 
    Assert.throwsErrors(()=>{ validTargetClass(Error, '测试', new String('')); }, ParameterError);
    Assert.throwsErrors(()=>{ validTargetClass(Error, '测试', new String('ssss')); }, ParameterError); 
    Assert.throwsErrors(()=>{ validTargetClass(Error, '测试', 123); }, ParameterError);
    Assert.throwsErrors(()=>{ validTargetClass(Error, '测试', new Number(123)); }, ParameterError);
    Assert.throwsErrors(()=>{ validTargetClass(Error, '测试', true); }, ParameterError);
    Assert.throwsErrors(()=>{ validTargetClass(Error, '测试', false); }, ParameterError);
    Assert.throwsErrors(()=>{ validTargetClass(Error, '测试', new Boolean(true)); }, ParameterError);
    Assert.throwsErrors(()=>{ validTargetClass(Error, '测试', new Boolean(false)); }, ParameterError);
    Assert.throwsErrors(()=>{ validTargetClass(Error, '测试', Symbol.for('gname1')); }, ParameterError);
    Assert.throwsErrorsNone(()=>{ validTargetClass(Error, '测试', Error); });
    Assert.throwsErrors(()=>{ validTargetClass(Error, '测试', testValidTargetClass); }, VerificationError); // 函数也是类，所以参数ok
    Assert.throwsErrors(()=>{ validTargetClass(Error, '测试', ()=>{}); }, ParameterError); // 箭头函数不是 class
    Assert.throwsErrors(()=>{ validTargetClass(Error, '测试', []); }, ParameterError);
    Assert.throwsErrors(()=>{ validTargetClass(Error, '测试', [1,2,3]); }, ParameterError);
    Assert.throwsErrors(()=>{ validTargetClass(Error, '测试', new Map()); }, ParameterError);
    Assert.throwsErrors(()=>{ validTargetClass(Error, '测试', new Map([['a', 12], ['b', 13]])); }, ParameterError);
    Assert.throwsErrors(()=>{ validTargetClass(Error, '测试', new Set()); }, ParameterError);
    Assert.throwsErrors(()=>{ validTargetClass(Error, '测试', new Set([1,2,3])); }, ParameterError);
    Assert.throwsErrors(()=>{ validTargetClass(Error, '测试', /123/); }, ParameterError);
    Assert.throwsErrors(()=>{ validTargetClass(Error, '测试', {a:1, b:2}); }, ParameterError);
    Assert.throwsErrors(()=>{ validTargetClass(Error, '测试', new Object()); }, ParameterError);
    // 符合参数定义的值测试
    // 主要看抛不抛 VerificationError 异常。校验通过不抛，校验不通过则抛
    Assert.throwsErrorsNone(()=>{ validTargetClass(ParameterError, '测试', Error); });// 有继承关系
    Assert.throwsErrorsNone(()=>{ validTargetClass(Error, '测试', Error);          });// 同一个class
    Assert.throwsErrors(()=>{ validTargetClass(ParameterError, '测试', TypeError); }, VerificationError); // 无继承关系
}

function testValidObject() {
    // 第1个参数
    Assert.throwsErrors(()=>{ validObject(undefined, '测试异常信息'); }, VerificationError);
    Assert.throwsErrors(()=>{ validObject(null, '测试异常信息'); }, VerificationError);
    Assert.throwsErrors(()=>{ validObject(NaN, '测试异常信息'); }, VerificationError);
    Assert.throwsErrors(()=>{ validObject('', '测试异常信息'); }, VerificationError);
    Assert.throwsErrors(()=>{ validObject('ssss', '测试异常信息'); }, VerificationError);
    Assert.throwsErrorsNone(()=>{ validObject(new String(''), '测试异常信息'); });
    Assert.throwsErrorsNone(()=>{ validObject(new String('ssss'), '测试异常信息'); });
    Assert.throwsErrors(()=>{ validObject(123, '测试异常信息'); }, VerificationError);
    Assert.throwsErrorsNone(()=>{ validObject(new Number(123), '测试异常信息'); });
    Assert.throwsErrors(()=>{ validObject(true, '测试异常信息'); }, VerificationError);
    Assert.throwsErrors(()=>{ validObject(false, '测试异常信息'); }, VerificationError);
    Assert.throwsErrorsNone(()=>{ validObject(new Boolean(true), '测试异常信息'); });
    Assert.throwsErrorsNone(()=>{ validObject(new Boolean(false), '测试异常信息'); });
    Assert.throwsErrors(()=>{ validObject(Symbol.for('gname1'), '测试异常信息'); }, VerificationError);
    Assert.throwsErrors(()=>{ validObject(Error, '测试异常信息'); }, VerificationError); 
    Assert.throwsErrors(()=>{ validObject(testValidFunction, '测试异常信息'); }, VerificationError);
    Assert.throwsErrors(()=>{ validObject(()=>{}, '测试异常信息'); }, VerificationError);
    Assert.throwsErrorsNone(()=>{ validObject([], '测试异常信息'); }); // 数组是 对象
    Assert.throwsErrorsNone(()=>{ validObject([1,2,3], '测试异常信息'); });
    Assert.throwsErrorsNone(()=>{ validObject(new Map(), '测试异常信息'); });
    Assert.throwsErrorsNone(()=>{ validObject(new Map([['a', 12], ['b', 13]]), '测试异常信息'); });
    Assert.throwsErrorsNone(()=>{ validObject(new Set(), '测试异常信息'); });
    Assert.throwsErrorsNone(()=>{ validObject(new Set([1,2,3]), '测试异常信息'); });
    Assert.throwsErrorsNone(()=>{ validObject(/123/, '测试异常信息'); }); // 正则是 对象
    Assert.throwsErrorsNone(()=>{ validObject({a:1, b:2}, '测试异常信息'); });
    Assert.throwsErrorsNone(()=>{ validObject(new Object(), '测试异常信息'); });
    // 第2个参数
    Assert.throwsErrorsNone(()=>{ validObject({a:1, b:2}, undefined); }); //默认 有字符串，所以参数检验通过，不抛异常
    Assert.throwsErrors(()=>{ validObject({a:1, b:2}, null); }, ParameterError);
    Assert.throwsErrors(()=>{ validObject({a:1, b:2}, NaN); }, ParameterError);
    Assert.throwsErrors(()=>{ validObject({a:1, b:2}, ''); }, ParameterError); // 不能为空字符串
    Assert.throwsErrorsNone(()=>{ validObject({a:1, b:2}, 'ssss'); });
    Assert.throwsErrors(()=>{ validObject({a:1, b:2}, new String('')); }, ParameterError);
    Assert.throwsErrorsNone(()=>{ validObject({a:1, b:2}, new String('ssss')); });
    Assert.throwsErrors(()=>{ validObject({a:1, b:2}, 123); }, ParameterError);
    Assert.throwsErrors(()=>{ validObject({a:1, b:2}, new Number(123)); }, ParameterError);
    Assert.throwsErrors(()=>{ validObject({a:1, b:2}, true); }, ParameterError);
    Assert.throwsErrors(()=>{ validObject({a:1, b:2}, false); }, ParameterError);
    Assert.throwsErrors(()=>{ validObject({a:1, b:2}, new Boolean(true)); }, ParameterError);
    Assert.throwsErrors(()=>{ validObject({a:1, b:2}, new Boolean(false)); }, ParameterError);
    Assert.throwsErrors(()=>{ validObject({a:1, b:2}, Symbol.for('gname1')); }, ParameterError);
    Assert.throwsErrors(()=>{ validObject({a:1, b:2}, Error); }, ParameterError);
    Assert.throwsErrors(()=>{ validObject({a:1, b:2}, testValidBoolean); }, ParameterError);
    Assert.throwsErrors(()=>{ validObject({a:1, b:2}, ()=>{}); }, ParameterError);
    Assert.throwsErrors(()=>{ validObject({a:1, b:2}, []); }, ParameterError);
    Assert.throwsErrors(()=>{ validObject({a:1, b:2}, [1,2,3]); }, ParameterError);
    Assert.throwsErrors(()=>{ validObject({a:1, b:2}, new Map()); }, ParameterError);
    Assert.throwsErrors(()=>{ validObject({a:1, b:2}, new Map([['a', 12], ['b', 13]])); }, ParameterError);
    Assert.throwsErrors(()=>{ validObject({a:1, b:2}, new Set()); }, ParameterError);
    Assert.throwsErrors(()=>{ validObject({a:1, b:2}, new Set([1,2,3])); }, ParameterError);
    Assert.throwsErrors(()=>{ validObject({a:1, b:2}, /123/); }, ParameterError);
    Assert.throwsErrors(()=>{ validObject({a:1, b:2}, {a:1, b:2}); }, ParameterError);
    Assert.throwsErrors(()=>{ validObject({a:1, b:2}, new Object()); }, ParameterError);
    // 符合参数定义的值测试
    // 主要看抛不抛 VerificationError 异常。校验通过不抛，校验不通过则抛
    Assert.throwsErrorsNone(()=>{ validObject({a:22, b:44}, '测试'); });
    Assert.throwsErrorsNone(()=>{ validObject(new String(''), '测试'); });
    Assert.throwsErrorsNone(()=>{ validObject([], '测试'); });
    Assert.throwsErrors(()=>{ validObject(123, '测试'); }, VerificationError);
}

function testValidArray() {
    // 第1个参数
    Assert.throwsErrors(()=>{ validArray(undefined, '测试异常信息'); }, VerificationError);
    Assert.throwsErrors(()=>{ validArray(null, '测试异常信息'); }, VerificationError);
    Assert.throwsErrors(()=>{ validArray(NaN, '测试异常信息'); }, VerificationError);
    Assert.throwsErrors(()=>{ validArray('', '测试异常信息'); }, VerificationError);
    Assert.throwsErrors(()=>{ validArray('ssss', '测试异常信息'); }, VerificationError);
    Assert.throwsErrors(()=>{ validArray(new String(''), '测试异常信息'); }, VerificationError);
    Assert.throwsErrors(()=>{ validArray(new String('ssss'), '测试异常信息'); }, VerificationError);
    Assert.throwsErrors(()=>{ validArray(123, '测试异常信息'); }, VerificationError);
    Assert.throwsErrors(()=>{ validArray(new Number(123), '测试异常信息'); }, VerificationError);
    Assert.throwsErrors(()=>{ validArray(true, '测试异常信息'); }, VerificationError);
    Assert.throwsErrors(()=>{ validArray(false, '测试异常信息'); }, VerificationError);
    Assert.throwsErrors(()=>{ validArray(new Boolean(true), '测试异常信息'); }, VerificationError);
    Assert.throwsErrors(()=>{ validArray(new Boolean(false), '测试异常信息'); }, VerificationError);
    Assert.throwsErrors(()=>{ validArray(Symbol.for('gname1'), '测试异常信息'); }, VerificationError);
    Assert.throwsErrors(()=>{ validArray(Error, '测试异常信息'); }, VerificationError); 
    Assert.throwsErrors(()=>{ validArray(testValidFunction, '测试异常信息'); }, VerificationError);
    Assert.throwsErrors(()=>{ validArray(()=>{}, '测试异常信息'); }, VerificationError);
    Assert.throwsErrorsNone(()=>{ validArray([], '测试异常信息'); }); 
    Assert.throwsErrorsNone(()=>{ validArray([1,2,3], '测试异常信息'); });
    Assert.throwsErrors(()=>{ validArray(new Map(), '测试异常信息'); }, VerificationError);
    Assert.throwsErrors(()=>{ validArray(new Map([['a', 12], ['b', 13]]), '测试异常信息'); }, VerificationError);
    Assert.throwsErrors(()=>{ validArray(new Set(), '测试异常信息'); }, VerificationError);
    Assert.throwsErrors(()=>{ validArray(new Set([1,2,3]), '测试异常信息'); }, VerificationError);
    Assert.throwsErrors(()=>{ validArray(/123/, '测试异常信息'); }, VerificationError); 
    Assert.throwsErrors(()=>{ validArray({a:1, b:2}, '测试异常信息'); }, VerificationError);
    Assert.throwsErrors(()=>{ validArray(new Object(), '测试异常信息'); }, VerificationError);
    // 第2个参数
    Assert.throwsErrorsNone(()=>{ validArray([], undefined); }); // 默认有字符串
    Assert.throwsErrors(()=>{ validArray([], null); }, ParameterError);
    Assert.throwsErrors(()=>{ validArray([], NaN); }, ParameterError);
    Assert.throwsErrors(()=>{ validArray([], ''); }, ParameterError);
    Assert.throwsErrorsNone(()=>{ validArray([], 'ssss'); }); // 非空字符
    Assert.throwsErrors(()=>{ validArray([], new String('')); }, ParameterError);
    Assert.throwsErrorsNone(()=>{ validArray([], new String('ssss')); }); // 非空字符
    Assert.throwsErrors(()=>{ validArray([], 123); }, ParameterError);
    Assert.throwsErrors(()=>{ validArray([], new Number(123)); }, ParameterError);
    Assert.throwsErrors(()=>{ validArray([], true); }, ParameterError);
    Assert.throwsErrors(()=>{ validArray([], false); }, ParameterError);
    Assert.throwsErrors(()=>{ validArray([], new Boolean(true)); }, ParameterError);
    Assert.throwsErrors(()=>{ validArray([], new Boolean(false)); }, ParameterError);
    Assert.throwsErrors(()=>{ validArray([], Symbol.for('gname1')); }, ParameterError);
    Assert.throwsErrors(()=>{ validArray([], Error); }, ParameterError); 
    Assert.throwsErrors(()=>{ validArray([], testValidFunction); }, ParameterError);
    Assert.throwsErrors(()=>{ validArray([], ()=>{}); }, ParameterError);
    Assert.throwsErrors(()=>{ validArray([], []); }, ParameterError); 
    Assert.throwsErrors(()=>{ validArray([], [1,2,3]); }, ParameterError);
    Assert.throwsErrors(()=>{ validArray([], new Map()); }, ParameterError);
    Assert.throwsErrors(()=>{ validArray([], new Map([['a', 12], ['b', 13]])); }, ParameterError);
    Assert.throwsErrors(()=>{ validArray([], new Set()); }, ParameterError);
    Assert.throwsErrors(()=>{ validArray([], new Set([1,2,3])); }, ParameterError);
    Assert.throwsErrors(()=>{ validArray([], /123/); }, ParameterError); 
    Assert.throwsErrors(()=>{ validArray([], {a:1, b:2}); }, ParameterError);
    Assert.throwsErrors(()=>{ validArray([], new Object()); }, ParameterError);
    // 符合参数定义的值测试
    // 主要看抛不抛 VerificationError 异常。校验通过不抛，校验不通过则抛
    Assert.throwsErrorsNone(()=>{ validArray([], '测试'); });
    Assert.throwsErrorsNone(()=>{ validArray([1,2,3], '测试'); });
    Assert.throwsErrorsNone(()=>{ validArray(['a', 'b', 'c'], '测试'); });
    Assert.throwsErrorsNone(()=>{ validArray([[1,2,3], [4,5,6]], '测试'); });
    Assert.throwsErrors(()=>{ validArray('xxx', '测试'); }, VerificationError);
}

function testValid2DArray() {
    // 第1个参数
    Assert.throwsErrors(()=>{ valid2DArray(undefined, '测试异常信息'); }, VerificationError);
    Assert.throwsErrors(()=>{ valid2DArray(null, '测试异常信息'); }, VerificationError);
    Assert.throwsErrors(()=>{ valid2DArray(NaN, '测试异常信息'); }, VerificationError);
    Assert.throwsErrors(()=>{ valid2DArray('', '测试异常信息'); }, VerificationError);
    Assert.throwsErrors(()=>{ valid2DArray('ssss', '测试异常信息'); }, VerificationError);
    Assert.throwsErrors(()=>{ valid2DArray(new String(''), '测试异常信息'); }, VerificationError);
    Assert.throwsErrors(()=>{ valid2DArray(new String('ssss'), '测试异常信息'); }, VerificationError);
    Assert.throwsErrors(()=>{ valid2DArray(123, '测试异常信息'); }, VerificationError);
    Assert.throwsErrors(()=>{ valid2DArray(new Number(123), '测试异常信息'); }, VerificationError);
    Assert.throwsErrors(()=>{ valid2DArray(true, '测试异常信息'); }, VerificationError);
    Assert.throwsErrors(()=>{ valid2DArray(false, '测试异常信息'); }, VerificationError);
    Assert.throwsErrors(()=>{ valid2DArray(new Boolean(true), '测试异常信息'); }, VerificationError);
    Assert.throwsErrors(()=>{ valid2DArray(new Boolean(false), '测试异常信息'); }, VerificationError);
    Assert.throwsErrors(()=>{ valid2DArray(Symbol.for('gname1'), '测试异常信息'); }, VerificationError);
    Assert.throwsErrors(()=>{ valid2DArray(Error, '测试异常信息'); }, VerificationError); 
    Assert.throwsErrors(()=>{ valid2DArray(testValidFunction, '测试异常信息'); }, VerificationError);
    Assert.throwsErrors(()=>{ valid2DArray(()=>{}, '测试异常信息'); }, VerificationError);
    Assert.throwsErrors(()=>{ valid2DArray([], '测试异常信息'); }, VerificationError); 
    Assert.throwsErrors(()=>{ valid2DArray([1,2,3], '测试异常信息'); }, VerificationError);
    Assert.throwsErrorsNone(()=>{ valid2DArray([[]], '测试异常信息'); }); // 这是二维数组
    Assert.throwsErrors(()=>{ valid2DArray(new Map(), '测试异常信息'); }, VerificationError);
    Assert.throwsErrors(()=>{ valid2DArray(new Map([['a', 12], ['b', 13]]), '测试异常信息'); }, VerificationError);
    Assert.throwsErrors(()=>{ valid2DArray(new Set(), '测试异常信息'); }, VerificationError);
    Assert.throwsErrors(()=>{ valid2DArray(new Set([1,2,3]), '测试异常信息'); }, VerificationError);
    Assert.throwsErrors(()=>{ valid2DArray(/123/, '测试异常信息'); }, VerificationError); 
    Assert.throwsErrors(()=>{ valid2DArray({a:1, b:2}, '测试异常信息'); }, VerificationError);
    Assert.throwsErrors(()=>{ valid2DArray(new Object(), '测试异常信息'); }, VerificationError);
    // 第2个参数
    Assert.throwsErrorsNone(()=>{ valid2DArray([[]], undefined); }); // 默认有字符串
    Assert.throwsErrors(()=>{ valid2DArray([[]], null); }, ParameterError);
    Assert.throwsErrors(()=>{ valid2DArray([[]], NaN); }, ParameterError);
    Assert.throwsErrors(()=>{ valid2DArray([[]], ''); }, ParameterError);
    Assert.throwsErrorsNone(()=>{ valid2DArray([[]], 'ssss'); }); // 非空字符
    Assert.throwsErrors(()=>{ valid2DArray([[]], new String('')); }, ParameterError);
    Assert.throwsErrorsNone(()=>{ valid2DArray([[]], new String('ssss')); }); // 非空字符
    Assert.throwsErrors(()=>{ valid2DArray([[]], 123); }, ParameterError);
    Assert.throwsErrors(()=>{ valid2DArray([[]], new Number(123)); }, ParameterError);
    Assert.throwsErrors(()=>{ valid2DArray([[]], true); }, ParameterError);
    Assert.throwsErrors(()=>{ valid2DArray([[]], false); }, ParameterError);
    Assert.throwsErrors(()=>{ valid2DArray([[]], new Boolean(true)); }, ParameterError);
    Assert.throwsErrors(()=>{ valid2DArray([[]], new Boolean(false)); }, ParameterError);
    Assert.throwsErrors(()=>{ valid2DArray([[]], Symbol.for('gname1')); }, ParameterError);
    Assert.throwsErrors(()=>{ valid2DArray([[]], Error); }, ParameterError); 
    Assert.throwsErrors(()=>{ valid2DArray([[]], testValidFunction); }, ParameterError);
    Assert.throwsErrors(()=>{ valid2DArray([[]], ()=>{}); }, ParameterError);
    Assert.throwsErrors(()=>{ valid2DArray([[]], []); }, ParameterError); 
    Assert.throwsErrors(()=>{ valid2DArray([[]], [1,2,3]); }, ParameterError);
    Assert.throwsErrors(()=>{ valid2DArray([[]], new Map()); }, ParameterError);
    Assert.throwsErrors(()=>{ valid2DArray([[]], new Map([['a', 12], ['b', 13]])); }, ParameterError);
    Assert.throwsErrors(()=>{ valid2DArray([[]], new Set()); }, ParameterError);
    Assert.throwsErrors(()=>{ valid2DArray([[]], new Set([1,2,3])); }, ParameterError);
    Assert.throwsErrors(()=>{ valid2DArray([[]], /123/); }, ParameterError); 
    Assert.throwsErrors(()=>{ valid2DArray([[]], {a:1, b:2}); }, ParameterError);
    Assert.throwsErrors(()=>{ valid2DArray([[]], new Object()); }, ParameterError);
    // 符合参数定义的值测试
    // 主要看抛不抛 VerificationError 异常。校验通过不抛，校验不通过则抛
    Assert.throwsErrorsNone(()=>{ valid2DArray([[]], '测试'); });
    Assert.throwsErrorsNone(()=>{ valid2DArray([[1,2,3], [4,6,8]], '测试'); });
    Assert.throwsErrorsNone(()=>{ valid2DArray([['a', 'b', 'c'], [true, true, true]], '测试'); });
    Assert.throwsErrorsNone(()=>{ valid2DArray([[1,2,3], [4,5,6]], '测试'); });
    Assert.throwsErrors(()=>{ valid2DArray([], '测试'); }, VerificationError);
    Assert.throwsErrors(()=>{ valid2DArray('xxx', '测试'); }, VerificationError);
    Assert.throwsErrors(()=>{ valid2DArray([[1,2,3], true, 'a'], '测试'); }, VerificationError);
}

function testValidObjectLiteral() {
    // 第1个参数
    Assert.throwsErrors(()=>{ validObjectLiteral(undefined, 'xxx', false); }, VerificationError);
    Assert.throwsErrors(()=>{ validObjectLiteral(null, 'xxx', false); }, VerificationError);
    Assert.throwsErrors(()=>{ validObjectLiteral(NaN, 'xxx', false); }, VerificationError);
    Assert.throwsErrors(()=>{ validObjectLiteral('', 'xxx', false); }, VerificationError);
    Assert.throwsErrors(()=>{ validObjectLiteral('ssss', 'xxx', false); }, VerificationError);
    Assert.throwsErrorsNone(()=>{ validObjectLiteral(new String(''), 'xxx', false); });
    Assert.throwsErrorsNone(()=>{ validObjectLiteral(new String('ssss'), 'xxx', false); });
    Assert.throwsErrors(()=>{ validObjectLiteral(123, 'xxx', false); }, VerificationError);
    Assert.throwsErrorsNone(()=>{ validObjectLiteral(new Number(123), 'xxx', false); });
    Assert.throwsErrors(()=>{ validObjectLiteral(true, 'xxx', false); }, VerificationError);
    Assert.throwsErrors(()=>{ validObjectLiteral(false, 'xxx', false); }, VerificationError);
    Assert.throwsErrorsNone(()=>{ validObjectLiteral(new Boolean(true), 'xxx', false); });
    Assert.throwsErrorsNone(()=>{ validObjectLiteral(new Boolean(false), 'xxx', false); });
    Assert.throwsErrors(()=>{ validObjectLiteral(Symbol.for('gname1'), 'xxx', false); }, VerificationError);
    Assert.throwsErrors(()=>{ validObjectLiteral(Error, 'xxx', false); }, VerificationError);
    Assert.throwsErrors(()=>{ validObjectLiteral(testValidString, 'xxx', false); }, VerificationError);
    Assert.throwsErrors(()=>{ validObjectLiteral(()=>{}, 'xxx', false); }, VerificationError);
    Assert.throwsErrors(()=>{ validObjectLiteral([], 'xxx', false); }, VerificationError);
    Assert.throwsErrors(()=>{ validObjectLiteral([1,2,3], 'xxx', false); }, VerificationError);
    Assert.throwsErrorsNone(()=>{ validObjectLiteral(new Map(), 'xxx', false); });
    Assert.throwsErrorsNone(()=>{ validObjectLiteral(new Map([['a', 12], ['b', 13]]), 'xxx', false); });
    Assert.throwsErrorsNone(()=>{ validObjectLiteral(new Set(), 'xxx', false); });
    Assert.throwsErrorsNone(()=>{ validObjectLiteral(new Set([1,2,3]), 'xxx', false); });
    Assert.throwsErrorsNone(()=>{ validObjectLiteral(/123/, 'xxx', false); });
    Assert.throwsErrorsNone(()=>{ validObjectLiteral({a:1, b:2}, 'xxx', false); });
    Assert.throwsErrorsNone(()=>{ validObjectLiteral(new Object(), 'xxx', false); });
    // 第2个参数
    Assert.throwsErrorsNone(()=>{ validObjectLiteral({}, undefined, false); } ); // errorInfo 有默认值
    Assert.throwsErrors(()=>{ validObjectLiteral({}, null, false); }, ParameterError);
    Assert.throwsErrors(()=>{ validObjectLiteral({}, NaN, false); }, ParameterError);
    Assert.throwsErrors(()=>{ validObjectLiteral({}, '', false); }, ParameterError ); // erroInfo 不能为空字符串
    Assert.throwsErrorsNone(()=>{ validObjectLiteral({}, 'ssss', false); } );
    Assert.throwsErrors(()=>{ validObjectLiteral({}, new String(''), false); }, ParameterError ); // erroInfo 不能为空字符串
    Assert.throwsErrorsNone(()=>{ validObjectLiteral({}, new String('ssss'), false); } );
    Assert.throwsErrors(()=>{ validObjectLiteral({}, 123, false); }, ParameterError);
    Assert.throwsErrors(()=>{ validObjectLiteral({}, new Number(123), false); }, ParameterError);
    Assert.throwsErrors(()=>{ validObjectLiteral({}, true, false); }, ParameterError);
    Assert.throwsErrors(()=>{ validObjectLiteral({}, false, false); }, ParameterError);
    Assert.throwsErrors(()=>{ validObjectLiteral({}, new Boolean(true), false); }, ParameterError);
    Assert.throwsErrors(()=>{ validObjectLiteral({}, new Boolean(false), false); }, ParameterError);
    Assert.throwsErrors(()=>{ validObjectLiteral({}, Symbol.for('gname1'), false); }, ParameterError);
    Assert.throwsErrors(()=>{ validObjectLiteral({}, Error, false); }, ParameterError);
    Assert.throwsErrors(()=>{ validObjectLiteral({}, testValidString, false); }, ParameterError);
    Assert.throwsErrors(()=>{ validObjectLiteral({}, ()=>{}, false); }, ParameterError);
    Assert.throwsErrors(()=>{ validObjectLiteral({}, [], false); }, ParameterError);
    Assert.throwsErrors(()=>{ validObjectLiteral({}, [1,2,3], false); }, ParameterError);
    Assert.throwsErrors(()=>{ validObjectLiteral({}, new Map(), false); }, ParameterError);
    Assert.throwsErrors(()=>{ validObjectLiteral({}, new Map([['a', 12], ['b', 13]]), false); }, ParameterError);
    Assert.throwsErrors(()=>{ validObjectLiteral({}, new Set(), false); }, ParameterError);
    Assert.throwsErrors(()=>{ validObjectLiteral({}, new Set([1,2,3]), false); }, ParameterError);
    Assert.throwsErrors(()=>{ validObjectLiteral({}, /123/, false); }, ParameterError);
    Assert.throwsErrors(()=>{ validObjectLiteral({}, {a:1, b:2}, false); }, ParameterError);
    Assert.throwsErrors(()=>{ validObjectLiteral({}, new Object(), false); }, ParameterError);
    // 第3个参数
    Assert.throwsErrorsNone(()=>{ validObjectLiteral({}, '测试', undefined); }); // 默认 canBeUndefined 为 false
    Assert.throwsErrors(()=>{ validObjectLiteral({}, '测试', null); }, ParameterError);
    Assert.throwsErrors(()=>{ validObjectLiteral({}, '测试', NaN); }, ParameterError);
    Assert.throwsErrors(()=>{ validObjectLiteral({}, '测试', ''); }, ParameterError );
    Assert.throwsErrors(()=>{ validObjectLiteral({}, '测试', 'ssss'); }, ParameterError );
    Assert.throwsErrors(()=>{ validObjectLiteral({}, '测试', new String('')); }, ParameterError );
    Assert.throwsErrors(()=>{ validObjectLiteral({}, '测试', new String('ssss')); }, ParameterError );
    Assert.throwsErrors(()=>{ validObjectLiteral({}, '测试', 123); }, ParameterError);
    Assert.throwsErrors(()=>{ validObjectLiteral({}, '测试', new Number(123)); }, ParameterError);
    Assert.throwsErrorsNone(()=>{ validObjectLiteral({}, '测试', true); } );
    Assert.throwsErrorsNone(()=>{ validObjectLiteral({}, '测试', false); } );
    Assert.throwsErrorsNone(()=>{ validObjectLiteral({}, '测试', new Boolean(true)); });
    Assert.throwsErrorsNone(()=>{ validObjectLiteral({}, '测试', new Boolean(false)); });
    Assert.throwsErrors(()=>{ validObjectLiteral({}, '测试', Symbol.for('gname1')); }, ParameterError);
    Assert.throwsErrors(()=>{ validObjectLiteral({}, '测试', Error); }, ParameterError);
    Assert.throwsErrors(()=>{ validObjectLiteral({}, '测试', testValidString); }, ParameterError);
    Assert.throwsErrors(()=>{ validObjectLiteral({}, '测试', ()=>{}); }, ParameterError);
    Assert.throwsErrors(()=>{ validObjectLiteral({}, '测试', []); }, ParameterError);
    Assert.throwsErrors(()=>{ validObjectLiteral({}, '测试', [1,2,3]); }, ParameterError);
    Assert.throwsErrors(()=>{ validObjectLiteral({}, '测试', new Map()); }, ParameterError);
    Assert.throwsErrors(()=>{ validObjectLiteral({}, '测试', new Map([['a', 12], ['b', 13]])); }, ParameterError);
    Assert.throwsErrors(()=>{ validObjectLiteral({}, '测试', new Set()); }, ParameterError);
    Assert.throwsErrors(()=>{ validObjectLiteral({}, '测试', new Set([1,2,3])); }, ParameterError);
    Assert.throwsErrors(()=>{ validObjectLiteral({}, '测试', /123/); }, ParameterError);
    Assert.throwsErrors(()=>{ validObjectLiteral({}, '测试', {a:1, b:2}); }, ParameterError);
    Assert.throwsErrors(()=>{ validObjectLiteral({}, '测试', new Object()); }, ParameterError);
    // 符合参数定义的值测试
    // 主要看抛不抛 VerificationError 异常。校验通过不抛，校验不通过则抛
    Assert.throwsErrorsNone(()=>{validObjectLiteral({}, '测试', false)});
    Assert.throwsErrors(()=>{ validObjectLiteral(undefined, '测试', false); }, VerificationError); // false 的话，param 不能为undefined
    Assert.throwsErrorsNone(()=>{validObjectLiteral({}, '测试', true);});
    Assert.throwsErrorsNone(()=>{validObjectLiteral(undefined, '测试', true);});
    Assert.throwsErrors(()=>{ validObjectLiteral([], '测试', true);}, VerificationError); // 字面量是排除 Arry 的
}

function testValidTargetObject() {
    // 第1个参数
    Assert.throwsErrors(()=>{ validTargetObject(undefined, 'xxx', RegExp); }, VerificationError);
    Assert.throwsErrors(()=>{ validTargetObject(null, 'xxx', RegExp); }, VerificationError);
    Assert.throwsErrors(()=>{ validTargetObject(NaN, 'xxx', RegExp); }, VerificationError);
    Assert.throwsErrors(()=>{ validTargetObject('', 'xxx', RegExp); }, VerificationError);
    Assert.throwsErrors(()=>{ validTargetObject('ssss', 'xxx', RegExp); }, VerificationError);
    Assert.throwsErrors(()=>{ validTargetObject(new String(''), 'xxx', RegExp); }, VerificationError);
    Assert.throwsErrors(()=>{ validTargetObject(new String('ssss'), 'xxx', RegExp); }, VerificationError);
    Assert.throwsErrors(()=>{ validTargetObject(123, 'xxx', RegExp); }, VerificationError);
    Assert.throwsErrors(()=>{ validTargetObject(new Number(123), 'xxx', RegExp); }, VerificationError);
    Assert.throwsErrors(()=>{ validTargetObject(true, 'xxx', RegExp); }, VerificationError);
    Assert.throwsErrors(()=>{ validTargetObject(false, 'xxx', RegExp); }, VerificationError);
    Assert.throwsErrors(()=>{ validTargetObject(new Boolean(true), 'xxx', RegExp); }, VerificationError);
    Assert.throwsErrors(()=>{ validTargetObject(new Boolean(false), 'xxx', RegExp); }, VerificationError);
    Assert.throwsErrors(()=>{ validTargetObject(Symbol.for('gname1'), 'xxx', RegExp); }, VerificationError);
    Assert.throwsErrors(()=>{ validTargetObject(Error, 'xxx', RegExp); }, VerificationError);
    Assert.throwsErrors(()=>{ validTargetObject(testValidString, 'xxx', RegExp); }, VerificationError);
    Assert.throwsErrors(()=>{ validTargetObject(()=>{}, 'xxx', RegExp); }, VerificationError);
    Assert.throwsErrors(()=>{ validTargetObject([], 'xxx', RegExp); }, VerificationError);
    Assert.throwsErrors(()=>{ validTargetObject([1,2,3], 'xxx', RegExp); }, VerificationError);
    Assert.throwsErrors(()=>{ validTargetObject(new Map(), 'xxx', RegExp); }, VerificationError);
    Assert.throwsErrors(()=>{ validTargetObject(new Map([['a', 12], ['b', 13]]), 'xxx', RegExp); }, VerificationError);
    Assert.throwsErrors(()=>{ validTargetObject(new Set(), 'xxx', RegExp); }, VerificationError);
    Assert.throwsErrors(()=>{ validTargetObject(new Set([1,2,3]), 'xxx', RegExp); }, VerificationError);
    Assert.throwsErrorsNone(()=>{ validTargetObject(/123/, 'xxx', RegExp); });
    Assert.throwsErrors(()=>{ validTargetObject({a:1, b:2}, 'xxx', RegExp); }, VerificationError);
    Assert.throwsErrors(()=>{ validTargetObject(new Object(), 'xxx', RegExp); }, VerificationError);
    // 第2个参数
    Assert.throwsErrorsNone(()=>{ validTargetObject(/123/, undefined, RegExp); });
    Assert.throwsErrors(()=>{ validTargetObject(/123/, null, RegExp); }, ParameterError);
    Assert.throwsErrors(()=>{ validTargetObject(/123/, NaN, RegExp); }, ParameterError);
    Assert.throwsErrors(()=>{ validTargetObject(/123/, '', RegExp); }, ParameterError);
    Assert.throwsErrorsNone(()=>{ validTargetObject(/123/, 'ssss', RegExp); }); // 非空字符
    Assert.throwsErrors(()=>{ validTargetObject(/123/, new String(''), RegExp); }, ParameterError);
    Assert.throwsErrorsNone(()=>{ validTargetObject(/123/, new String('ssss'), RegExp); }); // 非空字符
    Assert.throwsErrors(()=>{ validTargetObject(/123/, 123, RegExp); }, ParameterError);
    Assert.throwsErrors(()=>{ validTargetObject(/123/, new Number(123), RegExp); }, ParameterError);
    Assert.throwsErrors(()=>{ validTargetObject(/123/, true, RegExp); }, ParameterError);
    Assert.throwsErrors(()=>{ validTargetObject(/123/, false, RegExp); }, ParameterError);
    Assert.throwsErrors(()=>{ validTargetObject(/123/, new Boolean(true), RegExp); }, ParameterError);
    Assert.throwsErrors(()=>{ validTargetObject(/123/, new Boolean(false), RegExp); }, ParameterError);
    Assert.throwsErrors(()=>{ validTargetObject(/123/, Symbol.for('gname1'), RegExp); }, ParameterError);
    Assert.throwsErrors(()=>{ validTargetObject(/123/, Error, RegExp); }, ParameterError);
    Assert.throwsErrors(()=>{ validTargetObject(/123/, testValidString, RegExp); }, ParameterError);
    Assert.throwsErrors(()=>{ validTargetObject(/123/, ()=>{}, RegExp); }, ParameterError);
    Assert.throwsErrors(()=>{ validTargetObject(/123/, [], RegExp); }, ParameterError);
    Assert.throwsErrors(()=>{ validTargetObject(/123/, [1,2,3], RegExp); }, ParameterError);
    Assert.throwsErrors(()=>{ validTargetObject(/123/, new Map(), RegExp); }, ParameterError);
    Assert.throwsErrors(()=>{ validTargetObject(/123/, new Map([['a', 12], ['b', 13]]), RegExp); }, ParameterError);
    Assert.throwsErrors(()=>{ validTargetObject(/123/, new Set(), RegExp); }, ParameterError);
    Assert.throwsErrors(()=>{ validTargetObject(/123/, new Set([1,2,3]), RegExp); }, ParameterError);
    Assert.throwsErrors(()=>{ validTargetObject(/123/, /123/, RegExp); }, ParameterError);
    Assert.throwsErrors(()=>{ validTargetObject(/123/, {a:1, b:2}, RegExp); }, ParameterError);
    Assert.throwsErrors(()=>{ validTargetObject(/123/, new Object(), RegExp); }, ParameterError);
    // 第3个参数
    Assert.throwsErrors(()=>{ validTargetObject(/123/, 'xxx', undefined); }, ParameterError);
    Assert.throwsErrors(()=>{ validTargetObject(/123/, 'xxx', null); }, ParameterError);
    Assert.throwsErrors(()=>{ validTargetObject(/123/, 'xxx', NaN); }, ParameterError);
    Assert.throwsErrors(()=>{ validTargetObject(/123/, 'xxx', ''); }, ParameterError);
    Assert.throwsErrors(()=>{ validTargetObject(/123/, 'xxx', 'ssss'); }, ParameterError); 
    Assert.throwsErrors(()=>{ validTargetObject(/123/, 'xxx', new String('')); }, ParameterError);
    Assert.throwsErrors(()=>{ validTargetObject(/123/, 'xxx', new String('ssss')); }, ParameterError); 
    Assert.throwsErrors(()=>{ validTargetObject(/123/, 'xxx', 123); }, ParameterError);
    Assert.throwsErrors(()=>{ validTargetObject(/123/, 'xxx', new Number(123)); }, ParameterError);
    Assert.throwsErrors(()=>{ validTargetObject(/123/, 'xxx', true); }, ParameterError);
    Assert.throwsErrors(()=>{ validTargetObject(/123/, 'xxx', false); }, ParameterError);
    Assert.throwsErrors(()=>{ validTargetObject(/123/, 'xxx', new Boolean(true)); }, ParameterError);
    Assert.throwsErrors(()=>{ validTargetObject(/123/, 'xxx', new Boolean(false)); }, ParameterError);
    Assert.throwsErrors(()=>{ validTargetObject(/123/, 'xxx', Symbol.for('gname1')); }, ParameterError);
    Assert.throwsErrors(()=>{ validTargetObject(/123/, 'xxx', Error); }, VerificationError); // 这里是校验不通过，不是参数不通过
    Assert.throwsErrors(()=>{ validTargetObject(/123/, 'xxx', testValidString); }, VerificationError);
    Assert.throwsErrorsNone(()=>{ validTargetObject(/123/, 'xxx', RegExp); });
    Assert.throwsErrors(()=>{ validTargetObject(/123/, 'xxx', ()=>{}); }, ParameterError); // 箭头函数不算类
    Assert.throwsErrors(()=>{ validTargetObject(/123/, 'xxx', function(){}); }, ParameterError); // 匿名函数不算类
    Assert.throwsErrors(()=>{ validTargetObject(/123/, 'xxx', []); }, ParameterError);
    Assert.throwsErrors(()=>{ validTargetObject(/123/, 'xxx', [1,2,3]); }, ParameterError);
    Assert.throwsErrors(()=>{ validTargetObject(/123/, 'xxx', new Map()); }, ParameterError);
    Assert.throwsErrors(()=>{ validTargetObject(/123/, 'xxx', new Map([['a', 12], ['b', 13]])); }, ParameterError);
    Assert.throwsErrors(()=>{ validTargetObject(/123/, 'xxx', new Set()); }, ParameterError);
    Assert.throwsErrors(()=>{ validTargetObject(/123/, 'xxx', new Set([1,2,3])); }, ParameterError);
    Assert.throwsErrors(()=>{ validTargetObject(/123/, 'xxx', /123/); }, ParameterError);
    Assert.throwsErrors(()=>{ validTargetObject(/123/, 'xxx', {a:1, b:2}); }, ParameterError);
    Assert.throwsErrors(()=>{ validTargetObject(/123/, 'xxx', new Object()); }, ParameterError);
    // 符合参数定义的值测试
    // 主要看抛不抛 VerificationError 异常。校验通过不抛，校验不通过则抛
    validTargetObject({}, '测试', Error, Object);
    validTargetObject('123', '测试', Error, Object, String);
    validTargetObject(123, '测试', Error, Object, Number);
    validTargetObject(new Map(), '测试', Error, Map);
    Assert.throwsErrors(()=>{ validTargetObject(/456798/, '测试', Error); }, VerificationError);
}

function testValidTargetObjectSet() {
    // 第1个参数
    Assert.throwsErrors(()=>{ validTargetObjectSet(undefined, 'xxx', RegExp); }, VerificationError);
    Assert.throwsErrors(()=>{ validTargetObjectSet(null, 'xxx', RegExp); }, VerificationError);
    Assert.throwsErrors(()=>{ validTargetObjectSet(NaN, 'xxx', RegExp); }, VerificationError);
    Assert.throwsErrors(()=>{ validTargetObjectSet('', 'xxx', RegExp); }, VerificationError);
    Assert.throwsErrors(()=>{ validTargetObjectSet('ssss', 'xxx', RegExp); }, VerificationError);
    Assert.throwsErrors(()=>{ validTargetObjectSet(new String(''), 'xxx', RegExp); }, VerificationError);
    Assert.throwsErrors(()=>{ validTargetObjectSet(new String('ssss'), 'xxx', RegExp); }, VerificationError);
    Assert.throwsErrors(()=>{ validTargetObjectSet(123, 'xxx', RegExp); }, VerificationError);
    Assert.throwsErrors(()=>{ validTargetObjectSet(new Number(123), 'xxx', RegExp); }, VerificationError);
    Assert.throwsErrors(()=>{ validTargetObjectSet(true, 'xxx', RegExp); }, VerificationError);
    Assert.throwsErrors(()=>{ validTargetObjectSet(false, 'xxx', RegExp); }, VerificationError);
    Assert.throwsErrors(()=>{ validTargetObjectSet(new Boolean(true), 'xxx', RegExp); }, VerificationError);
    Assert.throwsErrors(()=>{ validTargetObjectSet(new Boolean(false), 'xxx', RegExp); }, VerificationError);
    Assert.throwsErrors(()=>{ validTargetObjectSet(Symbol.for('gname1'), 'xxx', RegExp); }, VerificationError);
    Assert.throwsErrors(()=>{ validTargetObjectSet(Error, 'xxx', RegExp); }, VerificationError);
    Assert.throwsErrors(()=>{ validTargetObjectSet(testValidString, 'xxx', RegExp); }, VerificationError);
    Assert.throwsErrors(()=>{ validTargetObjectSet(()=>{}, 'xxx', RegExp); }, VerificationError);
    Assert.throwsErrors(()=>{ validTargetObjectSet([], 'xxx', RegExp); }, VerificationError);
    Assert.throwsErrors(()=>{ validTargetObjectSet([1,2,3], 'xxx', RegExp); }, VerificationError);
    Assert.throwsErrors(()=>{ validTargetObjectSet(new Map(), 'xxx', RegExp); }, VerificationError);
    Assert.throwsErrors(()=>{ validTargetObjectSet(new Map([['a', 12], ['b', 13]]), 'xxx', RegExp); }, VerificationError);
    Assert.throwsErrors(()=>{ validTargetObjectSet(new Set(), 'xxx', Number); }, VerificationError);
    Assert.throwsErrorsNone(()=>{ validTargetObjectSet(new Set([1,2,3]), 'xxx', Number); });
    Assert.throwsErrors(()=>{ validTargetObjectSet(/123/, 'xxx', RegExp); }, VerificationError);
    Assert.throwsErrors(()=>{ validTargetObjectSet({a:1, b:2}, 'xxx', RegExp); }, VerificationError);
    Assert.throwsErrors(()=>{ validTargetObjectSet(new Object(), 'xxx', RegExp); }, VerificationError);
    // 第2个参数
    Assert.throwsErrorsNone(()=>{ validTargetObjectSet(new Set([1,2,3]), undefined, Number); }); // 有默认字符
    Assert.throwsErrors(()=>{ validTargetObjectSet(new Set([1,2,3]), null, Number); }, ParameterError);
    Assert.throwsErrors(()=>{ validTargetObjectSet(new Set([1,2,3]), NaN, Number); }, ParameterError);
    Assert.throwsErrors(()=>{ validTargetObjectSet(new Set([1,2,3]), '', Number); }, ParameterError);
    Assert.throwsErrorsNone(()=>{ validTargetObjectSet(new Set([1,2,3]), 'ssss', Number); }); // 非空字符
    Assert.throwsErrors(()=>{ validTargetObjectSet(new Set([1,2,3]), new String(''), Number); }, ParameterError);
    Assert.throwsErrorsNone(()=>{ validTargetObjectSet(new Set([1,2,3]), new String('ssss'), Number); }); // 非空字符
    Assert.throwsErrors(()=>{ validTargetObjectSet(new Set([1,2,3]), 123, Number); }, ParameterError);
    Assert.throwsErrors(()=>{ validTargetObjectSet(new Set([1,2,3]), new Number(123), Number); }, ParameterError);
    Assert.throwsErrors(()=>{ validTargetObjectSet(new Set([1,2,3]), true, Number); }, ParameterError);
    Assert.throwsErrors(()=>{ validTargetObjectSet(new Set([1,2,3]), false, Number); }, ParameterError);
    Assert.throwsErrors(()=>{ validTargetObjectSet(new Set([1,2,3]), new Boolean(true), Number); }, ParameterError);
    Assert.throwsErrors(()=>{ validTargetObjectSet(new Set([1,2,3]), new Boolean(false), Number); }, ParameterError);
    Assert.throwsErrors(()=>{ validTargetObjectSet(new Set([1,2,3]), Symbol.for('gname1'), Number); }, ParameterError);
    Assert.throwsErrors(()=>{ validTargetObjectSet(new Set([1,2,3]), Error, Number); }, ParameterError);
    Assert.throwsErrors(()=>{ validTargetObjectSet(new Set([1,2,3]), testValidString, Number); }, ParameterError);
    Assert.throwsErrors(()=>{ validTargetObjectSet(new Set([1,2,3]), ()=>{}, Number); }, ParameterError);
    Assert.throwsErrors(()=>{ validTargetObjectSet(new Set([1,2,3]), [], Number); }, ParameterError);
    Assert.throwsErrors(()=>{ validTargetObjectSet(new Set([1,2,3]), [1,2,3], Number); }, ParameterError);
    Assert.throwsErrors(()=>{ validTargetObjectSet(new Set([1,2,3]), new Map(), Number); }, ParameterError);
    Assert.throwsErrors(()=>{ validTargetObjectSet(new Set([1,2,3]), new Map([['a', 12], ['b', 13]]), Number); }, ParameterError);
    Assert.throwsErrors(()=>{ validTargetObjectSet(new Set([1,2,3]), new Set(), Number); }, ParameterError);
    Assert.throwsErrors(()=>{ validTargetObjectSet(new Set([1,2,3]), new Set([1,2,3]), Number); }, ParameterError);
    Assert.throwsErrors(()=>{ validTargetObjectSet(new Set([1,2,3]), /123/, Number); }, ParameterError);
    Assert.throwsErrors(()=>{ validTargetObjectSet(new Set([1,2,3]), {a:1, b:2}, Number); }, ParameterError);
    Assert.throwsErrors(()=>{ validTargetObjectSet(new Set([1,2,3]), new Object(), Number); }, ParameterError);
    // 第3个参数
    Assert.throwsErrors(()=>{ validTargetObjectSet(new Set([1,2,3]), 'xxx', undefined); }, ParameterError);
    Assert.throwsErrors(()=>{ validTargetObjectSet(new Set([1,2,3]), 'xxx', null); }, ParameterError);
    Assert.throwsErrors(()=>{ validTargetObjectSet(new Set([1,2,3]), 'xxx', NaN); }, ParameterError);
    Assert.throwsErrors(()=>{ validTargetObjectSet(new Set([1,2,3]), 'xxx', ''); }, ParameterError);
    Assert.throwsErrors(()=>{ validTargetObjectSet(new Set([1,2,3]), 'xxx', 'ssss'); }, ParameterError); 
    Assert.throwsErrors(()=>{ validTargetObjectSet(new Set([1,2,3]), 'xxx', new String('')); }, ParameterError);
    Assert.throwsErrors(()=>{ validTargetObjectSet(new Set([1,2,3]), 'xxx', new String('ssss')); }, ParameterError); 
    Assert.throwsErrors(()=>{ validTargetObjectSet(new Set([1,2,3]), 'xxx', 123); }, ParameterError);
    Assert.throwsErrors(()=>{ validTargetObjectSet(new Set([1,2,3]), 'xxx', new Number(123)); }, ParameterError);
    Assert.throwsErrors(()=>{ validTargetObjectSet(new Set([1,2,3]), 'xxx', true); }, ParameterError);
    Assert.throwsErrors(()=>{ validTargetObjectSet(new Set([1,2,3]), 'xxx', false); }, ParameterError);
    Assert.throwsErrors(()=>{ validTargetObjectSet(new Set([1,2,3]), 'xxx', new Boolean(true)); }, ParameterError);
    Assert.throwsErrors(()=>{ validTargetObjectSet(new Set([1,2,3]), 'xxx', new Boolean(false)); }, ParameterError);
    Assert.throwsErrors(()=>{ validTargetObjectSet(new Set([1,2,3]), 'xxx', Symbol.for('gname1')); }, ParameterError);
    Assert.throwsErrors(()=>{ validTargetObjectSet(new Set([1,2,3]), 'xxx', Error); }, VerificationError); // 这里是校验不通过，不是参数不通过
    Assert.throwsErrors(()=>{ validTargetObjectSet(new Set([1,2,3]), 'xxx', testValidString); }, VerificationError);
    Assert.throwsErrorsNone(()=>{ validTargetObjectSet(new Set([1,2,3]), 'xxx', Number); });
    Assert.throwsErrors(()=>{ validTargetObjectSet(new Set([1,2,3]), 'xxx', ()=>{}); }, ParameterError); // 箭头函数不算类
    Assert.throwsErrors(()=>{ validTargetObjectSet(new Set([1,2,3]), 'xxx', function(){}); }, ParameterError); // 匿名函数不算类
    Assert.throwsErrors(()=>{ validTargetObjectSet(new Set([1,2,3]), 'xxx', []); }, ParameterError);
    Assert.throwsErrors(()=>{ validTargetObjectSet(new Set([1,2,3]), 'xxx', [1,2,3]); }, ParameterError);
    Assert.throwsErrors(()=>{ validTargetObjectSet(new Set([1,2,3]), 'xxx', new Map()); }, ParameterError);
    Assert.throwsErrors(()=>{ validTargetObjectSet(new Set([1,2,3]), 'xxx', new Map([['a', 12], ['b', 13]])); }, ParameterError);
    Assert.throwsErrors(()=>{ validTargetObjectSet(new Set([1,2,3]), 'xxx', new Set()); }, ParameterError);
    Assert.throwsErrors(()=>{ validTargetObjectSet(new Set([1,2,3]), 'xxx', new Set([1,2,3])); }, ParameterError);
    Assert.throwsErrors(()=>{ validTargetObjectSet(new Set([1,2,3]), 'xxx', /123/); }, ParameterError);
    Assert.throwsErrors(()=>{ validTargetObjectSet(new Set([1,2,3]), 'xxx', {a:1, b:2}); }, ParameterError);
    Assert.throwsErrors(()=>{ validTargetObjectSet(new Set([1,2,3]), 'xxx', new Object()); }, ParameterError);
    // 符合参数定义的值测试
    // 主要看抛不抛 VerificationError 异常。校验通过不抛，校验不通过则抛
    Assert.throwsErrorsNone(()=>{ validTargetObjectSet(new Set([1, true, /123/]), '测试111', Number, Boolean, RegExp); });
    // 空集合，会判断为 false，然后抛 VerificationError
    Assert.throwsErrors(()=>{ validTargetObjectSet(new Set(), '测试111', Number, Boolean, RegExp); }, VerificationError);
    Assert.throwsErrors(()=>{ validTargetObjectSet(new Set([1, true, /123/]), '测试111', Number, Boolean); }, VerificationError);
}

function testValidTargetObjectArray() {
    // 第1个参数
    Assert.throwsErrors(()=>{ validTargetObjectArray(undefined, 'xxx', RegExp); }, VerificationError);
    Assert.throwsErrors(()=>{ validTargetObjectArray(null, 'xxx', RegExp); }, VerificationError);
    Assert.throwsErrors(()=>{ validTargetObjectArray(NaN, 'xxx', RegExp); }, VerificationError);
    Assert.throwsErrors(()=>{ validTargetObjectArray('', 'xxx', RegExp); }, VerificationError);
    Assert.throwsErrors(()=>{ validTargetObjectArray('ssss', 'xxx', RegExp); }, VerificationError);
    Assert.throwsErrors(()=>{ validTargetObjectArray(new String(''), 'xxx', RegExp); }, VerificationError);
    Assert.throwsErrors(()=>{ validTargetObjectArray(new String('ssss'), 'xxx', RegExp); }, VerificationError);
    Assert.throwsErrors(()=>{ validTargetObjectArray(123, 'xxx', RegExp); }, VerificationError);
    Assert.throwsErrors(()=>{ validTargetObjectArray(new Number(123), 'xxx', RegExp); }, VerificationError);
    Assert.throwsErrors(()=>{ validTargetObjectArray(true, 'xxx', RegExp); }, VerificationError);
    Assert.throwsErrors(()=>{ validTargetObjectArray(false, 'xxx', RegExp); }, VerificationError);
    Assert.throwsErrors(()=>{ validTargetObjectArray(new Boolean(true), 'xxx', RegExp); }, VerificationError);
    Assert.throwsErrors(()=>{ validTargetObjectArray(new Boolean(false), 'xxx', RegExp); }, VerificationError);
    Assert.throwsErrors(()=>{ validTargetObjectArray(Symbol.for('gname1'), 'xxx', RegExp); }, VerificationError);
    Assert.throwsErrors(()=>{ validTargetObjectArray(Error, 'xxx', RegExp); }, VerificationError);
    Assert.throwsErrors(()=>{ validTargetObjectArray(testValidString, 'xxx', RegExp); }, VerificationError);
    Assert.throwsErrors(()=>{ validTargetObjectArray(()=>{}, 'xxx', RegExp); }, VerificationError);
    Assert.throwsErrors(()=>{ validTargetObjectArray([], 'xxx', RegExp); }, VerificationError);
    Assert.throwsErrorsNone(()=>{ validTargetObjectArray([1,2,3], 'xxx', Number); });
    Assert.throwsErrors(()=>{ validTargetObjectArray(new Map(), 'xxx', RegExp); }, VerificationError);
    Assert.throwsErrors(()=>{ validTargetObjectArray(new Map([['a', 12], ['b', 13]]), 'xxx', RegExp); }, VerificationError);
    Assert.throwsErrors(()=>{ validTargetObjectArray(new Set(), 'xxx', Number); }, VerificationError);
    Assert.throwsErrors(()=>{ validTargetObjectArray(new Set([1,2,3]), 'xxx', Number); }, VerificationError);
    Assert.throwsErrors(()=>{ validTargetObjectArray(/123/, 'xxx', RegExp); }, VerificationError);
    Assert.throwsErrors(()=>{ validTargetObjectArray({a:1, b:2}, 'xxx', RegExp); }, VerificationError);
    Assert.throwsErrors(()=>{ validTargetObjectArray(new Object(), 'xxx', RegExp); }, VerificationError);
    // 第2个参数
    Assert.throwsErrorsNone(()=>{ validTargetObjectArray([1,2,3], undefined, Number); }); // 有默认字符
    Assert.throwsErrors(()=>{ validTargetObjectArray([1,2,3], null, Number); }, ParameterError);
    Assert.throwsErrors(()=>{ validTargetObjectArray([1,2,3], NaN, Number); }, ParameterError);
    Assert.throwsErrors(()=>{ validTargetObjectArray([1,2,3], '', Number); }, ParameterError);
    Assert.throwsErrorsNone(()=>{ validTargetObjectArray([1,2,3], 'ssss', Number); }); // 非空字符
    Assert.throwsErrors(()=>{ validTargetObjectArray([1,2,3], new String(''), Number); }, ParameterError);
    Assert.throwsErrorsNone(()=>{ validTargetObjectArray([1,2,3], new String('ssss'), Number); }); // 非空字符
    Assert.throwsErrors(()=>{ validTargetObjectArray([1,2,3], 123, Number); }, ParameterError);
    Assert.throwsErrors(()=>{ validTargetObjectArray([1,2,3], new Number(123), Number); }, ParameterError);
    Assert.throwsErrors(()=>{ validTargetObjectArray([1,2,3], true, Number); }, ParameterError);
    Assert.throwsErrors(()=>{ validTargetObjectArray([1,2,3], false, Number); }, ParameterError);
    Assert.throwsErrors(()=>{ validTargetObjectArray([1,2,3], new Boolean(true), Number); }, ParameterError);
    Assert.throwsErrors(()=>{ validTargetObjectArray([1,2,3], new Boolean(false), Number); }, ParameterError);
    Assert.throwsErrors(()=>{ validTargetObjectArray([1,2,3], Symbol.for('gname1'), Number); }, ParameterError);
    Assert.throwsErrors(()=>{ validTargetObjectArray([1,2,3], Error, Number); }, ParameterError);
    Assert.throwsErrors(()=>{ validTargetObjectArray([1,2,3], testValidString, Number); }, ParameterError);
    Assert.throwsErrors(()=>{ validTargetObjectArray([1,2,3], ()=>{}, Number); }, ParameterError);
    Assert.throwsErrors(()=>{ validTargetObjectArray([1,2,3], [], Number); }, ParameterError);
    Assert.throwsErrors(()=>{ validTargetObjectArray([1,2,3], [1,2,3], Number); }, ParameterError);
    Assert.throwsErrors(()=>{ validTargetObjectArray([1,2,3], new Map(), Number); }, ParameterError);
    Assert.throwsErrors(()=>{ validTargetObjectArray([1,2,3], new Map([['a', 12], ['b', 13]]), Number); }, ParameterError);
    Assert.throwsErrors(()=>{ validTargetObjectArray([1,2,3], new Set(), Number); }, ParameterError);
    Assert.throwsErrors(()=>{ validTargetObjectArray([1,2,3], new Set([1,2,3]), Number); }, ParameterError);
    Assert.throwsErrors(()=>{ validTargetObjectArray([1,2,3], /123/, Number); }, ParameterError);
    Assert.throwsErrors(()=>{ validTargetObjectArray([1,2,3], {a:1, b:2}, Number); }, ParameterError);
    Assert.throwsErrors(()=>{ validTargetObjectArray([1,2,3], new Object(), Number); }, ParameterError);
    // 第3个参数
    Assert.throwsErrors(()=>{ validTargetObjectArray([1,2,3], 'xxx', undefined); }, ParameterError);
    Assert.throwsErrors(()=>{ validTargetObjectArray([1,2,3], 'xxx', null); }, ParameterError);
    Assert.throwsErrors(()=>{ validTargetObjectArray([1,2,3], 'xxx', NaN); }, ParameterError);
    Assert.throwsErrors(()=>{ validTargetObjectArray([1,2,3], 'xxx', ''); }, ParameterError);
    Assert.throwsErrors(()=>{ validTargetObjectArray([1,2,3], 'xxx', 'ssss'); }, ParameterError); 
    Assert.throwsErrors(()=>{ validTargetObjectArray([1,2,3], 'xxx', new String('')); }, ParameterError);
    Assert.throwsErrors(()=>{ validTargetObjectArray([1,2,3], 'xxx', new String('ssss')); }, ParameterError); 
    Assert.throwsErrors(()=>{ validTargetObjectArray([1,2,3], 'xxx', 123); }, ParameterError);
    Assert.throwsErrors(()=>{ validTargetObjectArray([1,2,3], 'xxx', new Number(123)); }, ParameterError);
    Assert.throwsErrors(()=>{ validTargetObjectArray([1,2,3], 'xxx', true); }, ParameterError);
    Assert.throwsErrors(()=>{ validTargetObjectArray([1,2,3], 'xxx', false); }, ParameterError);
    Assert.throwsErrors(()=>{ validTargetObjectArray([1,2,3], 'xxx', new Boolean(true)); }, ParameterError);
    Assert.throwsErrors(()=>{ validTargetObjectArray([1,2,3], 'xxx', new Boolean(false)); }, ParameterError);
    Assert.throwsErrors(()=>{ validTargetObjectArray([1,2,3], 'xxx', Symbol.for('gname1')); }, ParameterError);
    Assert.throwsErrors(()=>{ validTargetObjectArray([1,2,3], 'xxx', Error); }, VerificationError); // 这里是校验不通过，不是参数不通过
    Assert.throwsErrors(()=>{ validTargetObjectArray([1,2,3], 'xxx', testValidString); }, VerificationError);
    Assert.throwsErrorsNone(()=>{ validTargetObjectArray([1,2,3], 'xxx', Number); });
    Assert.throwsErrors(()=>{ validTargetObjectArray([1,2,3], 'xxx', ()=>{}); }, ParameterError); // 箭头函数不算类
    Assert.throwsErrors(()=>{ validTargetObjectArray([1,2,3], 'xxx', function(){}); }, ParameterError); // 匿名函数不算类
    Assert.throwsErrors(()=>{ validTargetObjectArray([1,2,3], 'xxx', []); }, ParameterError);
    Assert.throwsErrors(()=>{ validTargetObjectArray([1,2,3], 'xxx', [1,2,3]); }, ParameterError);
    Assert.throwsErrors(()=>{ validTargetObjectArray([1,2,3], 'xxx', new Map()); }, ParameterError);
    Assert.throwsErrors(()=>{ validTargetObjectArray([1,2,3], 'xxx', new Map([['a', 12], ['b', 13]])); }, ParameterError);
    Assert.throwsErrors(()=>{ validTargetObjectArray([1,2,3], 'xxx', new Set()); }, ParameterError);
    Assert.throwsErrors(()=>{ validTargetObjectArray([1,2,3], 'xxx', new Set([1,2,3])); }, ParameterError);
    Assert.throwsErrors(()=>{ validTargetObjectArray([1,2,3], 'xxx', /123/); }, ParameterError);
    Assert.throwsErrors(()=>{ validTargetObjectArray([1,2,3], 'xxx', {a:1, b:2}); }, ParameterError);
    Assert.throwsErrors(()=>{ validTargetObjectArray([1,2,3], 'xxx', new Object()); }, ParameterError);
    // 符合参数定义的值测试
    // 主要看抛不抛 VerificationError 异常。校验通过不抛，校验不通过则抛
    Assert.throwsErrorsNone(()=>{ validTargetObjectArray([1, true, /123/], '测试111', Number, Boolean, RegExp); });
    // 空数组，会判断为 false，然后抛 VerificationError
    Assert.throwsErrors(()=>{ validTargetObjectArray([], '测试111', Number, Boolean, RegExp); }, VerificationError);
    Assert.throwsErrors(()=>{ validTargetObjectArray([1, true, /123/], '测试111', Number, Boolean); }, VerificationError);
}

function testValidTargetObject2DArray() {
    // 第1个参数
    Assert.throwsErrors(()=>{ validTargetObject2DArray(undefined, 'xxx', RegExp); }, VerificationError);
    Assert.throwsErrors(()=>{ validTargetObject2DArray(null, 'xxx', RegExp); }, VerificationError);
    Assert.throwsErrors(()=>{ validTargetObject2DArray(NaN, 'xxx', RegExp); }, VerificationError);
    Assert.throwsErrors(()=>{ validTargetObject2DArray('', 'xxx', RegExp); }, VerificationError);
    Assert.throwsErrors(()=>{ validTargetObject2DArray('ssss', 'xxx', RegExp); }, VerificationError);
    Assert.throwsErrors(()=>{ validTargetObject2DArray(new String(''), 'xxx', RegExp); }, VerificationError);
    Assert.throwsErrors(()=>{ validTargetObject2DArray(new String('ssss'), 'xxx', RegExp); }, VerificationError);
    Assert.throwsErrors(()=>{ validTargetObject2DArray(123, 'xxx', RegExp); }, VerificationError);
    Assert.throwsErrors(()=>{ validTargetObject2DArray(new Number(123), 'xxx', RegExp); }, VerificationError);
    Assert.throwsErrors(()=>{ validTargetObject2DArray(true, 'xxx', RegExp); }, VerificationError);
    Assert.throwsErrors(()=>{ validTargetObject2DArray(false, 'xxx', RegExp); }, VerificationError);
    Assert.throwsErrors(()=>{ validTargetObject2DArray(new Boolean(true), 'xxx', RegExp); }, VerificationError);
    Assert.throwsErrors(()=>{ validTargetObject2DArray(new Boolean(false), 'xxx', RegExp); }, VerificationError);
    Assert.throwsErrors(()=>{ validTargetObject2DArray(Symbol.for('gname1'), 'xxx', RegExp); }, VerificationError);
    Assert.throwsErrors(()=>{ validTargetObject2DArray(Error, 'xxx', RegExp); }, VerificationError);
    Assert.throwsErrors(()=>{ validTargetObject2DArray(testValidString, 'xxx', RegExp); }, VerificationError);
    Assert.throwsErrors(()=>{ validTargetObject2DArray(()=>{}, 'xxx', RegExp); }, VerificationError);
    Assert.throwsErrors(()=>{ validTargetObject2DArray([], 'xxx', RegExp); }, VerificationError);
    Assert.throwsErrors(()=>{ validTargetObject2DArray([1,2,3], 'xxx', Number); }, VerificationError);
    Assert.throwsErrors(()=>{ validTargetObject2DArray([[]], 'xxx', Number); }, VerificationError); // 空的二维数组
    Assert.throwsErrorsNone(()=>{ validTargetObject2DArray([[1,2,3]], 'xxx', Number); }, VerificationError); // 有数据的二维数组
    Assert.throwsErrors(()=>{ validTargetObject2DArray(new Map(), 'xxx', RegExp); }, VerificationError);
    Assert.throwsErrors(()=>{ validTargetObject2DArray(new Map([['a', 12], ['b', 13]]), 'xxx', RegExp); }, VerificationError);
    Assert.throwsErrors(()=>{ validTargetObject2DArray(new Set(), 'xxx', Number); }, VerificationError);
    Assert.throwsErrors(()=>{ validTargetObject2DArray(new Set([1,2,3]), 'xxx', Number); }, VerificationError);
    Assert.throwsErrors(()=>{ validTargetObject2DArray(/123/, 'xxx', RegExp); }, VerificationError);
    Assert.throwsErrors(()=>{ validTargetObject2DArray({a:1, b:2}, 'xxx', RegExp); }, VerificationError);
    Assert.throwsErrors(()=>{ validTargetObject2DArray(new Object(), 'xxx', RegExp); }, VerificationError);
    // 第2个参数
    Assert.throwsErrorsNone(()=>{ validTargetObject2DArray([[1,2,3]], undefined, Number); }); // 有默认字符
    Assert.throwsErrors(()=>{ validTargetObject2DArray([[1,2,3]], null, Number); }, ParameterError);
    Assert.throwsErrors(()=>{ validTargetObject2DArray([[1,2,3]], NaN, Number); }, ParameterError);
    Assert.throwsErrors(()=>{ validTargetObject2DArray([[1,2,3]], '', Number); }, ParameterError);
    Assert.throwsErrorsNone(()=>{ validTargetObject2DArray([[1,2,3]], 'ssss', Number); }); // 非空字符
    Assert.throwsErrors(()=>{ validTargetObject2DArray([[1,2,3]], new String(''), Number); }, ParameterError);
    Assert.throwsErrorsNone(()=>{ validTargetObject2DArray([[1,2,3]], new String('ssss'), Number); }); // 非空字符
    Assert.throwsErrors(()=>{ validTargetObject2DArray([[1,2,3]], 123, Number); }, ParameterError);
    Assert.throwsErrors(()=>{ validTargetObject2DArray([[1,2,3]], new Number(123), Number); }, ParameterError);
    Assert.throwsErrors(()=>{ validTargetObject2DArray([[1,2,3]], true, Number); }, ParameterError);
    Assert.throwsErrors(()=>{ validTargetObject2DArray([[1,2,3]], false, Number); }, ParameterError);
    Assert.throwsErrors(()=>{ validTargetObject2DArray([[1,2,3]], new Boolean(true), Number); }, ParameterError);
    Assert.throwsErrors(()=>{ validTargetObject2DArray([[1,2,3]], new Boolean(false), Number); }, ParameterError);
    Assert.throwsErrors(()=>{ validTargetObject2DArray([[1,2,3]], Symbol.for('gname1'), Number); }, ParameterError);
    Assert.throwsErrors(()=>{ validTargetObject2DArray([[1,2,3]], Error, Number); }, ParameterError);
    Assert.throwsErrors(()=>{ validTargetObject2DArray([[1,2,3]], testValidString, Number); }, ParameterError);
    Assert.throwsErrors(()=>{ validTargetObject2DArray([[1,2,3]], ()=>{}, Number); }, ParameterError);
    Assert.throwsErrors(()=>{ validTargetObject2DArray([[1,2,3]], [], Number); }, ParameterError);
    Assert.throwsErrors(()=>{ validTargetObject2DArray([[1,2,3]], [[]], Number); }, ParameterError);
    Assert.throwsErrors(()=>{ validTargetObject2DArray([[1,2,3]], [1,2,3], Number); }, ParameterError);
    Assert.throwsErrors(()=>{ validTargetObject2DArray([[1,2,3]], [[2,3,4], [5,6,7]], Number); }, ParameterError);
    Assert.throwsErrors(()=>{ validTargetObject2DArray([[1,2,3]], new Map(), Number); }, ParameterError);
    Assert.throwsErrors(()=>{ validTargetObject2DArray([[1,2,3]], new Map([['a', 12], ['b', 13]]), Number); }, ParameterError);
    Assert.throwsErrors(()=>{ validTargetObject2DArray([[1,2,3]], new Set(), Number); }, ParameterError);
    Assert.throwsErrors(()=>{ validTargetObject2DArray([[1,2,3]], new Set([1,2,3]), Number); }, ParameterError);
    Assert.throwsErrors(()=>{ validTargetObject2DArray([[1,2,3]], /123/, Number); }, ParameterError);
    Assert.throwsErrors(()=>{ validTargetObject2DArray([[1,2,3]], {a:1, b:2}, Number); }, ParameterError);
    Assert.throwsErrors(()=>{ validTargetObject2DArray([[1,2,3]], new Object(), Number); }, ParameterError);
    // 第3个参数
    Assert.throwsErrors(()=>{ validTargetObject2DArray([[1,2,3]], 'xxx', undefined); }, ParameterError);
    Assert.throwsErrors(()=>{ validTargetObject2DArray([[1,2,3]], 'xxx', null); }, ParameterError);
    Assert.throwsErrors(()=>{ validTargetObject2DArray([[1,2,3]], 'xxx', NaN); }, ParameterError);
    Assert.throwsErrors(()=>{ validTargetObject2DArray([[1,2,3]], 'xxx', ''); }, ParameterError);
    Assert.throwsErrors(()=>{ validTargetObject2DArray([[1,2,3]], 'xxx', 'ssss'); }, ParameterError); 
    Assert.throwsErrors(()=>{ validTargetObject2DArray([[1,2,3]], 'xxx', new String('')); }, ParameterError);
    Assert.throwsErrors(()=>{ validTargetObject2DArray([[1,2,3]], 'xxx', new String('ssss')); }, ParameterError); 
    Assert.throwsErrors(()=>{ validTargetObject2DArray([[1,2,3]], 'xxx', 123); }, ParameterError);
    Assert.throwsErrors(()=>{ validTargetObject2DArray([[1,2,3]], 'xxx', new Number(123)); }, ParameterError);
    Assert.throwsErrors(()=>{ validTargetObject2DArray([[1,2,3]], 'xxx', true); }, ParameterError);
    Assert.throwsErrors(()=>{ validTargetObject2DArray([[1,2,3]], 'xxx', false); }, ParameterError);
    Assert.throwsErrors(()=>{ validTargetObject2DArray([[1,2,3]], 'xxx', new Boolean(true)); }, ParameterError);
    Assert.throwsErrors(()=>{ validTargetObject2DArray([[1,2,3]], 'xxx', new Boolean(false)); }, ParameterError);
    Assert.throwsErrors(()=>{ validTargetObject2DArray([[1,2,3]], 'xxx', Symbol.for('gname1')); }, ParameterError);
    Assert.throwsErrors(()=>{ validTargetObject2DArray([[1,2,3]], 'xxx', Error); }, VerificationError); // 这里是校验不通过，不是参数不通过
    Assert.throwsErrors(()=>{ validTargetObject2DArray([[1,2,3]], 'xxx', testValidString); }, VerificationError);
    Assert.throwsErrorsNone(()=>{ validTargetObject2DArray([[1,2,3]], 'xxx', Number); });
    Assert.throwsErrors(()=>{ validTargetObject2DArray([[1,2,3]], 'xxx', ()=>{}); }, ParameterError); // 箭头函数不算类
    Assert.throwsErrors(()=>{ validTargetObject2DArray([[1,2,3]], 'xxx', function(){}); }, ParameterError); // 匿名函数不算类
    Assert.throwsErrors(()=>{ validTargetObject2DArray([[1,2,3]], 'xxx', []); }, ParameterError);
    Assert.throwsErrors(()=>{ validTargetObject2DArray([[1,2,3]], 'xxx', [1,2,3]); }, ParameterError);
    Assert.throwsErrors(()=>{ validTargetObject2DArray([[1,2,3]], 'xxx', new Map()); }, ParameterError);
    Assert.throwsErrors(()=>{ validTargetObject2DArray([[1,2,3]], 'xxx', new Map([['a', 12], ['b', 13]])); }, ParameterError);
    Assert.throwsErrors(()=>{ validTargetObject2DArray([[1,2,3]], 'xxx', new Set()); }, ParameterError);
    Assert.throwsErrors(()=>{ validTargetObject2DArray([[1,2,3]], 'xxx', new Set([1,2,3])); }, ParameterError);
    Assert.throwsErrors(()=>{ validTargetObject2DArray([[1,2,3]], 'xxx', /123/); }, ParameterError);
    Assert.throwsErrors(()=>{ validTargetObject2DArray([[1,2,3]], 'xxx', {a:1, b:2}); }, ParameterError);
    Assert.throwsErrors(()=>{ validTargetObject2DArray([[1,2,3]], 'xxx', new Object()); }, ParameterError);
    // 符合参数定义的值测试
    // 主要看抛不抛 VerificationError 异常。校验通过不抛，校验不通过则抛
    Assert.throwsErrorsNone(()=>{ validTargetObject2DArray([[1, true, /123/]], '测试111', Number, Boolean, RegExp); });
    // 空数组，会判断为 false，然后抛 VerificationError
    Assert.throwsErrors(()=>{ validTargetObject2DArray([], '测试111', Number, Boolean, RegExp); }, VerificationError);
    Assert.throwsErrors(()=>{ validTargetObject2DArray([[]], '测试111', Number, Boolean, RegExp); }, VerificationError);
    Assert.throwsErrors(()=>{ validTargetObject2DArray([[1, true, /123/]], '测试111', Number, Boolean); }, VerificationError);
}

function testValidHtmlElement() {
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

    // 第1个参数
    Assert.throwsErrors(()=>{ validHtmlElement(undefined, '测试异常信息'); }, VerificationError);
    Assert.throwsErrors(()=>{ validHtmlElement(null, '测试异常信息'); }, VerificationError);
    Assert.throwsErrors(()=>{ validHtmlElement(NaN, '测试异常信息'); }, VerificationError);
    Assert.throwsErrors(()=>{ validHtmlElement('', '测试异常信息'); }, VerificationError);
    Assert.throwsErrors(()=>{ validHtmlElement('ssss', '测试异常信息'); }, VerificationError);
    Assert.throwsErrors(()=>{ validHtmlElement(new String(''), '测试异常信息'); }, VerificationError);
    Assert.throwsErrors(()=>{ validHtmlElement(new String('ssss'), '测试异常信息'); }, VerificationError);
    Assert.throwsErrors(()=>{ validHtmlElement(123, '测试异常信息'); }, VerificationError);
    Assert.throwsErrors(()=>{ validHtmlElement(new Number(123), '测试异常信息'); }, VerificationError);
    Assert.throwsErrors(()=>{ validHtmlElement(true, '测试异常信息'); }, VerificationError);
    Assert.throwsErrors(()=>{ validHtmlElement(false, '测试异常信息'); }, VerificationError);
    Assert.throwsErrors(()=>{ validHtmlElement(new Boolean(true), '测试异常信息'); }, VerificationError);
    Assert.throwsErrors(()=>{ validHtmlElement(new Boolean(false), '测试异常信息'); }, VerificationError);
    Assert.throwsErrors(()=>{ validHtmlElement(Symbol.for('gname1'), '测试异常信息'); }, VerificationError);
    Assert.throwsErrors(()=>{ validHtmlElement(Error, '测试异常信息'); }, VerificationError);
    Assert.throwsErrors(()=>{ validHtmlElement(testValidBoolean, '测试异常信息'); }, VerificationError);
    Assert.throwsErrors(()=>{ validHtmlElement(()=>{}, '测试异常信息'); }, VerificationError);
    Assert.throwsErrors(()=>{ validHtmlElement([], '测试异常信息'); }, VerificationError);
    Assert.throwsErrors(()=>{ validHtmlElement([1,2,3], '测试异常信息'); }, VerificationError);
    Assert.throwsErrors(()=>{ validHtmlElement(new Map(), '测试异常信息'); }, VerificationError);
    Assert.throwsErrors(()=>{ validHtmlElement(new Map([['a', 12], ['b', 13]]), '测试异常信息'); }, VerificationError);
    Assert.throwsErrors(()=>{ validHtmlElement(new Set(), '测试异常信息'); }, VerificationError);
    Assert.throwsErrors(()=>{ validHtmlElement(new Set([1,2,3]), '测试异常信息'); }, VerificationError);
    Assert.throwsErrors(()=>{ validHtmlElement(/123/, '测试异常信息'); }, VerificationError);
    Assert.throwsErrors(()=>{ validHtmlElement({a:1, b:2}, '测试异常信息'); }, VerificationError);
    Assert.throwsErrors(()=>{ validHtmlElement(new Object(), '测试异常信息'); }, VerificationError);
    Assert.throwsErrorsNone(()=>{ validHtmlElement(testElement1, 'cccc') });
    Assert.throwsErrorsNone(()=>{ validHtmlElement(testElement2, 'cccc') });
    Assert.throwsErrors(()=>{ validHtmlElement(testElementList1, 'cccc'); }, VerificationError);
    Assert.throwsErrors(()=>{ validHtmlElement(testElementList2, 'cccc'); }, VerificationError);
    // 第2个参数
    Assert.throwsErrorsNone(()=>{ validHtmlElement(testElement1, undefined); }); //默认 有字符串，所以参数检验通过，不抛异常
    Assert.throwsErrors(()=>{ validHtmlElement(testElement1, null); }, ParameterError);
    Assert.throwsErrors(()=>{ validHtmlElement(testElement1, NaN); }, ParameterError);
    Assert.throwsErrors(()=>{ validHtmlElement(testElement1, ''); }, ParameterError);
    Assert.throwsErrorsNone(()=>{ validHtmlElement(testElement1, 'ssss'); });
    Assert.throwsErrors(()=>{ validHtmlElement(testElement1, new String('')); }, ParameterError);
    Assert.throwsErrorsNone(()=>{ validHtmlElement(testElement1, new String('ssss')); });
    Assert.throwsErrors(()=>{ validHtmlElement(testElement1, 123); }, ParameterError);
    Assert.throwsErrors(()=>{ validHtmlElement(testElement1, new Number(123)); }, ParameterError);
    Assert.throwsErrors(()=>{ validHtmlElement(testElement1, true); }, ParameterError);
    Assert.throwsErrors(()=>{ validHtmlElement(testElement1, false); }, ParameterError);
    Assert.throwsErrors(()=>{ validHtmlElement(testElement1, new Boolean(true)); }, ParameterError);
    Assert.throwsErrors(()=>{ validHtmlElement(testElement1, new Boolean(false)); }, ParameterError);
    Assert.throwsErrors(()=>{ validHtmlElement(testElement1, Symbol.for('gname1')); }, ParameterError);
    Assert.throwsErrors(()=>{ validHtmlElement(testElement1, Error); }, ParameterError);
    Assert.throwsErrors(()=>{ validHtmlElement(testElement1, testValidBoolean); }, ParameterError);
    Assert.throwsErrors(()=>{ validHtmlElement(testElement1, ()=>{}); }, ParameterError);
    Assert.throwsErrors(()=>{ validHtmlElement(testElement1, []); }, ParameterError);
    Assert.throwsErrors(()=>{ validHtmlElement(testElement1, [1,2,3]); }, ParameterError);
    Assert.throwsErrors(()=>{ validHtmlElement(testElement1, new Map()); }, ParameterError);
    Assert.throwsErrors(()=>{ validHtmlElement(testElement1, new Map([['a', 12], ['b', 13]])); }, ParameterError);
    Assert.throwsErrors(()=>{ validHtmlElement(testElement1, new Set()); }, ParameterError);
    Assert.throwsErrors(()=>{ validHtmlElement(testElement1, new Set([1,2,3])); }, ParameterError);
    Assert.throwsErrors(()=>{ validHtmlElement(testElement1, /123/); }, ParameterError);
    Assert.throwsErrors(()=>{ validHtmlElement(testElement1, {a:1, b:2}); }, ParameterError);
    Assert.throwsErrors(()=>{ validHtmlElement(testElement1, new Object()); }, ParameterError);
    Assert.throwsErrors(()=>{ validHtmlElement(testElement1, testElement1); }, ParameterError);
    Assert.throwsErrors(()=>{ validHtmlElement(testElement1, testElementList1); }, ParameterError);
    // 符合参数定义的值测试
    // 主要看抛不抛 VerificationError 异常。校验通过不抛，校验不通过则抛
    Assert.throwsErrorsNone(()=>{ validHtmlElement(testElement1, '测试'); });
    Assert.throwsErrorsNone(()=>{ validHtmlElement(testElement2, '测试'); });
    Assert.throwsErrors(()=>{ validHtmlElement(testElementList1, '测试'); }, VerificationError);
    Assert.throwsErrors(()=>{ validHtmlElement(testElementList2, '测试'); }, VerificationError);
    // 这是搜索不到结果的情况下，它返回的是空
    Assert.throwsErrors(()=>{ validHtmlElement(myDocument.querySelector('#ssss'), '测试'); }, VerificationError);
}

function testValidHtmlElementList() {
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

    // 第1个参数
    Assert.throwsErrors(()=>{ validHtmlElementList(undefined, '测试异常信息'); }, VerificationError);
    Assert.throwsErrors(()=>{ validHtmlElementList(null, '测试异常信息'); }, VerificationError);
    Assert.throwsErrors(()=>{ validHtmlElementList(NaN, '测试异常信息'); }, VerificationError);
    Assert.throwsErrors(()=>{ validHtmlElementList('', '测试异常信息'); }, VerificationError);
    Assert.throwsErrors(()=>{ validHtmlElementList('ssss', '测试异常信息'); }, VerificationError);
    Assert.throwsErrors(()=>{ validHtmlElementList(new String(''), '测试异常信息'); }, VerificationError);
    Assert.throwsErrors(()=>{ validHtmlElementList(new String('ssss'), '测试异常信息'); }, VerificationError);
    Assert.throwsErrors(()=>{ validHtmlElementList(123, '测试异常信息'); }, VerificationError);
    Assert.throwsErrors(()=>{ validHtmlElementList(new Number(123), '测试异常信息'); }, VerificationError);
    Assert.throwsErrors(()=>{ validHtmlElementList(true, '测试异常信息'); }, VerificationError);
    Assert.throwsErrors(()=>{ validHtmlElementList(false, '测试异常信息'); }, VerificationError);
    Assert.throwsErrors(()=>{ validHtmlElementList(new Boolean(true), '测试异常信息'); }, VerificationError);
    Assert.throwsErrors(()=>{ validHtmlElementList(new Boolean(false), '测试异常信息'); }, VerificationError);
    Assert.throwsErrors(()=>{ validHtmlElementList(Symbol.for('gname1'), '测试异常信息'); }, VerificationError);
    Assert.throwsErrors(()=>{ validHtmlElementList(Error, '测试异常信息'); }, VerificationError);
    Assert.throwsErrors(()=>{ validHtmlElementList(testValidBoolean, '测试异常信息'); }, VerificationError);
    Assert.throwsErrors(()=>{ validHtmlElementList(()=>{}, '测试异常信息'); }, VerificationError);
    Assert.throwsErrors(()=>{ validHtmlElementList([], '测试异常信息'); }, VerificationError);
    Assert.throwsErrors(()=>{ validHtmlElementList([1,2,3], '测试异常信息'); }, VerificationError);
    Assert.throwsErrors(()=>{ validHtmlElementList(new Map(), '测试异常信息'); }, VerificationError);
    Assert.throwsErrors(()=>{ validHtmlElementList(new Map([['a', 12], ['b', 13]]), '测试异常信息'); }, VerificationError);
    Assert.throwsErrors(()=>{ validHtmlElementList(new Set(), '测试异常信息'); }, VerificationError);
    Assert.throwsErrors(()=>{ validHtmlElementList(new Set([1,2,3]), '测试异常信息'); }, VerificationError);
    Assert.throwsErrors(()=>{ validHtmlElementList(/123/, '测试异常信息'); }, VerificationError);
    Assert.throwsErrors(()=>{ validHtmlElementList({a:1, b:2}, '测试异常信息'); }, VerificationError);
    Assert.throwsErrors(()=>{ validHtmlElementList(new Object(), '测试异常信息'); }, VerificationError);
    Assert.throwsErrors(()=>{ validHtmlElementList(testElement1, 'cccc') }, VerificationError);
    Assert.throwsErrors(()=>{ validHtmlElementList(testElement2, 'cccc') }, VerificationError);
    Assert.throwsErrorsNone(()=>{ validHtmlElementList(testElementList1, 'cccc'); });
    Assert.throwsErrorsNone(()=>{ validHtmlElementList(testElementList2, 'cccc'); });
    // 第2个参数
    Assert.throwsErrorsNone(()=>{ validHtmlElementList(testElementList1, undefined); }); //默认 有字符串，所以参数检验通过，不抛异常
    Assert.throwsErrors(()=>{ validHtmlElementList(testElementList1, null); }, ParameterError);
    Assert.throwsErrors(()=>{ validHtmlElementList(testElementList1, NaN); }, ParameterError);
    Assert.throwsErrors(()=>{ validHtmlElementList(testElementList1, ''); }, ParameterError);
    Assert.throwsErrorsNone(()=>{ validHtmlElementList(testElementList1, 'ssss'); });
    Assert.throwsErrors(()=>{ validHtmlElementList(testElementList1, new String('')); }, ParameterError);
    Assert.throwsErrorsNone(()=>{ validHtmlElementList(testElementList1, new String('ssss')); });
    Assert.throwsErrors(()=>{ validHtmlElementList(testElementList1, 123); }, ParameterError);
    Assert.throwsErrors(()=>{ validHtmlElementList(testElementList1, new Number(123)); }, ParameterError);
    Assert.throwsErrors(()=>{ validHtmlElementList(testElementList1, true); }, ParameterError);
    Assert.throwsErrors(()=>{ validHtmlElementList(testElementList1, false); }, ParameterError);
    Assert.throwsErrors(()=>{ validHtmlElementList(testElementList1, new Boolean(true)); }, ParameterError);
    Assert.throwsErrors(()=>{ validHtmlElementList(testElementList1, new Boolean(false)); }, ParameterError);
    Assert.throwsErrors(()=>{ validHtmlElementList(testElementList1, Symbol.for('gname1')); }, ParameterError);
    Assert.throwsErrors(()=>{ validHtmlElementList(testElementList1, Error); }, ParameterError);
    Assert.throwsErrors(()=>{ validHtmlElementList(testElementList1, testValidBoolean); }, ParameterError);
    Assert.throwsErrors(()=>{ validHtmlElementList(testElementList1, ()=>{}); }, ParameterError);
    Assert.throwsErrors(()=>{ validHtmlElementList(testElementList1, []); }, ParameterError);
    Assert.throwsErrors(()=>{ validHtmlElementList(testElementList1, [1,2,3]); }, ParameterError);
    Assert.throwsErrors(()=>{ validHtmlElementList(testElementList1, new Map()); }, ParameterError);
    Assert.throwsErrors(()=>{ validHtmlElementList(testElementList1, new Map([['a', 12], ['b', 13]])); }, ParameterError);
    Assert.throwsErrors(()=>{ validHtmlElementList(testElementList1, new Set()); }, ParameterError);
    Assert.throwsErrors(()=>{ validHtmlElementList(testElementList1, new Set([1,2,3])); }, ParameterError);
    Assert.throwsErrors(()=>{ validHtmlElementList(testElementList1, /123/); }, ParameterError);
    Assert.throwsErrors(()=>{ validHtmlElementList(testElementList1, {a:1, b:2}); }, ParameterError);
    Assert.throwsErrors(()=>{ validHtmlElementList(testElementList1, new Object()); }, ParameterError);
    Assert.throwsErrors(()=>{ validHtmlElementList(testElementList1, testElement1); }, ParameterError);
    Assert.throwsErrors(()=>{ validHtmlElementList(testElementList1, testElementList1); }, ParameterError);
    // 符合参数定义的值测试
    // 主要看抛不抛 VerificationError 异常。校验通过不抛，校验不通过则抛
    Assert.throwsErrors(()=>{ validHtmlElementList(testElement1, '测试'); }, VerificationError);
    Assert.throwsErrors(()=>{ validHtmlElementList(testElement2, '测试'); }, VerificationError);
    Assert.throwsErrorsNone(()=>{ validHtmlElementList(testElementList1, '测试'); });
    Assert.throwsErrorsNone(()=>{ validHtmlElementList(testElementList2, '测试'); });
    // 这是搜索不到结果的情况下，它返回的是 长度为0的 NodeList 对象。
    Assert.throwsErrorsNone(()=>{ validHtmlElementList(myDocument.querySelectorAll('aaaadiv'), '测试'); });
}

// ============ 导出测试函数

export {
    testValidString, testValidBoolean, testValidNumber, testValidRegExp, testValidFunction,
    testValidClass, testValidTargetClass, testValidObject, testValidArray, testValid2DArray,
    testValidObjectLiteral, testValidTargetObject, testValidTargetObjectSet, testValidTargetObjectArray, testValidTargetObject2DArray,
    testValidHtmlElement, testValidHtmlElementList
}