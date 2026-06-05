/**
 * In my license, all codes can be shared free of charge. 
 * However, If my code is taken for commercial use, please maintain it yourself. 
 * I am not obligated to take responsibility for your business application.
 * Here is my email "pangdongcan@live.com"
 * 
 * Copyright © 2026 Micheal Pang. All rights reserved.
 * 
 * @file This file "testBase.js" is part of project "pdc-js-framework" , which is belong to Michael Pang (It's Me).
 * @author  Micheal Pang (Dongcan Pang)
 * @since  2026-06-05
 * @description  这是关于 utils/datatype/base.js 模块的测试。base.js 是 datatype.js 模块的子模块
 */
"use strict"; // 这是严格模式下的 Javascript 代码

// =============== 导入要测试的函数

import { isNullValue, NotNullValue,
    isStringValue, isStringObject, isString, isEmptyString, valueOfString,
    isBooleanValue, isBooleanObject, isBoolean, valueOfBoolean,
    isNumberValue, isNumberObject, isNumber, valueOfNumber,
    isSymbol, isRegexp, isRegexpOk
 } from "../../../utils/datatype/base.js";

// =============== 导入测试工具包
import { Assert } from "../../testTools.js";

// =============== 导入要处理的异常类
import { ParameterError } from "../../../models/errors.js";

// =============== 开始测试

function testIsNullValue(){
    
    // 如果 value 为 undefined、null、NaN 中的一个，则返回 true；
    Assert.equalsStrictly(true, isNullValue());
    Assert.equalsStrictly(true, isNullValue(undefined));
    Assert.equalsStrictly(true, isNullValue(null));
    Assert.equalsStrictly(true, isNullValue(NaN));
    // 其它类型：字符串，数字，布尔值，Symbol 值，正则值，对象，函数
    Assert.equalsStrictly(false, isNullValue(''));
    Assert.equalsStrictly(false, isNullValue(-1));
    Assert.equalsStrictly(false, isNullValue(0));
    Assert.equalsStrictly(false, isNullValue(false));
    Assert.equalsStrictly(false, isNullValue(Symbol.for('testUid')));
    Assert.equalsStrictly(false, isNullValue(/123/));
    Assert.equalsStrictly(false, isNullValue(new Error()));
    Assert.equalsStrictly(false, isNullValue(()=>{}));
}

function testNotNullValue(){
    // 如果 value 不为 undefined、null、NaN 中的任何一个，则返回 true；否则，返回 false
    Assert.equalsStrictly(false, NotNullValue());
    Assert.equalsStrictly(false, NotNullValue(undefined));
    Assert.equalsStrictly(false, NotNullValue(null));
    Assert.equalsStrictly(false, NotNullValue(NaN));
    // 其它类型：字符串，数字，布尔值，Symbol 值，正则值，对象，函数
    Assert.equalsStrictly(true, NotNullValue(''));
    Assert.equalsStrictly(true, NotNullValue(-1));
    Assert.equalsStrictly(true, NotNullValue(0));
    Assert.equalsStrictly(true, NotNullValue(false));
    Assert.equalsStrictly(true, NotNullValue(true));
    Assert.equalsStrictly(true, NotNullValue(Symbol.for('testUid')));
    Assert.equalsStrictly(true, NotNullValue(/123/));
    Assert.equalsStrictly(true, NotNullValue(new Error()));
    Assert.equalsStrictly(true, NotNullValue(()=>{}));
}

function testIsStringValue(){
    // 如果 value 为 string ，则返回 true；否则，返回 false。这里判断的是 String 值，不是 String 对象
    Assert.equalsStrictly(true, isStringValue(''));
    Assert.equalsStrictly(true, isStringValue('-1'));
    // 其它类型
    Assert.equalsStrictly(false, isStringValue());
    Assert.equalsStrictly(false, isStringValue(undefined));
    Assert.equalsStrictly(false, isStringValue(null));
    Assert.equalsStrictly(false, isStringValue(NaN));
    Assert.equalsStrictly(false, isStringValue(new String('-1')));
    Assert.equalsStrictly(false, isStringValue(new String()));
    Assert.equalsStrictly(false, isStringValue(0));
    Assert.equalsStrictly(false, isStringValue(-1));
    Assert.equalsStrictly(false, isStringValue(111));
    Assert.equalsStrictly(false, isStringValue(true));
    Assert.equalsStrictly(false, isStringValue(false));
    Assert.equalsStrictly(false, isStringValue(Symbol.for('testUid')));
    Assert.equalsStrictly(false, isStringValue(/123/));
    Assert.equalsStrictly(false, isStringValue(new Error()));
    Assert.equalsStrictly(false, isStringValue(()=>{}));
}

function testIsStringObject(){
    // 如果 value 为 String 对象 ，则返回 true；否则，返回 false。这里判断的是 String 对象，不是 String 值
    Assert.equalsStrictly(true, isStringObject(new String('')));
    Assert.equalsStrictly(true, isStringObject(new String('-1')));
    // 其它类型
    Assert.equalsStrictly(false, isStringObject());
    Assert.equalsStrictly(false, isStringObject(undefined));
    Assert.equalsStrictly(false, isStringObject(null));
    Assert.equalsStrictly(false, isStringObject(NaN));
    Assert.equalsStrictly(false, isStringObject('-1'));
    Assert.equalsStrictly(false, isStringObject(''));
    Assert.equalsStrictly(false, isStringObject(0));
    Assert.equalsStrictly(false, isStringObject(-1));
    Assert.equalsStrictly(false, isStringObject(111));
    Assert.equalsStrictly(false, isStringObject(true));
    Assert.equalsStrictly(false, isStringObject(false));
    Assert.equalsStrictly(false, isStringObject(Symbol.for('testUid')));
    Assert.equalsStrictly(false, isStringObject(/123/));
    Assert.equalsStrictly(false, isStringObject(new Error()));
    Assert.equalsStrictly(false, isStringObject(()=>{}));
}

function testIsString(){
    // 如果 value 为 string 值 或者 String 对象 ，则返回 true；否则，返回 false。
    Assert.equalsStrictly(true, isString(new String('')));
    Assert.equalsStrictly(true, isString(new String('-1')));
    Assert.equalsStrictly(true, isString('-1'));
    Assert.equalsStrictly(true, isString(''));
    // 其它类型
    Assert.equalsStrictly(false, isString());
    Assert.equalsStrictly(false, isString(undefined));
    Assert.equalsStrictly(false, isString(null));
    Assert.equalsStrictly(false, isString(NaN));
    Assert.equalsStrictly(false, isString(0));
    Assert.equalsStrictly(false, isString(-1));
    Assert.equalsStrictly(false, isString(111));
    Assert.equalsStrictly(false, isString(true));
    Assert.equalsStrictly(false, isString(false));
    Assert.equalsStrictly(false, isString(Symbol.for('testUid')));
    Assert.equalsStrictly(false, isString(/123/));
    Assert.equalsStrictly(false, isString(new Error()));
    Assert.equalsStrictly(false, isString(()=>{}));
}

function testIsEmptyString(){
    // 判断内容是否为空字符串。（对于不是字符串的参数，直接返回 false） 首先，入参得是字符串类型，然后它去掉首尾空白字符后，应该是长度为0。
    // 如果 value 的值为空 或者 只有空白字符，则返回 true；否则，返回 false
    Assert.equalsStrictly(true, isEmptyString(''));
    Assert.equalsStrictly(true, isEmptyString('  \t\n '));
    Assert.equalsStrictly(false, isEmptyString('   3  '));
    Assert.equalsStrictly(false, isEmptyString('ffff'));
    // 其它类型
    Assert.equalsStrictly(false, isEmptyString());
    Assert.equalsStrictly(false, isEmptyString(undefined));
    Assert.equalsStrictly(false, isEmptyString(null));
    Assert.equalsStrictly(false, isEmptyString(NaN));
    Assert.equalsStrictly(false, isEmptyString(0));
    Assert.equalsStrictly(false, isEmptyString(-1));
    Assert.equalsStrictly(false, isEmptyString(111));
    Assert.equalsStrictly(false, isEmptyString(true));
    Assert.equalsStrictly(false, isEmptyString(false));
    Assert.equalsStrictly(false, isEmptyString(Symbol.for('testUid')));
    Assert.equalsStrictly(false, isEmptyString(/123/));
    Assert.equalsStrictly(false, isEmptyString(new Error()));
    Assert.equalsStrictly(false, isEmptyString(()=>{}));
}

function testValueOfString(){
    // 不管传入的是字符串值，还是字符串对象，都可以返回其字符串值。不是字符串的参数，直接返回 null
    Assert.equalsStrictly('', valueOfString(''));
    Assert.equalsStrictly('', valueOfString(new String('')));
    Assert.equalsStrictly('  \t\n ', valueOfString('  \t\n '));
    Assert.equalsStrictly('  \t\n ', valueOfString(new String('  \t\n ')));
    Assert.equalsStrictly('111', valueOfString('111'));
    Assert.equalsStrictly('111', valueOfString(new String('111')));
    // 
    Assert.equalsStrictly(null, valueOfString());
    Assert.equalsStrictly(null, valueOfString(undefined));
    Assert.equalsStrictly(null, valueOfString(null));
    Assert.equalsStrictly(null, valueOfString(NaN));
    Assert.equalsStrictly(null, valueOfString(0));
    Assert.equalsStrictly(null, valueOfString(-1));
    Assert.equalsStrictly(null, valueOfString(111));
    Assert.equalsStrictly(null, valueOfString(true));
    Assert.equalsStrictly(null, valueOfString(false));
    Assert.equalsStrictly(null, valueOfString(Symbol.for('testUid')));
    Assert.equalsStrictly(null, valueOfString(/123/));
    Assert.equalsStrictly(null, valueOfString(new Error()));
    Assert.equalsStrictly(null, valueOfString(()=>{}));
}

function testIsBooleanValue(){
    // 判断传来的值，是否为 一个 布尔值。如果 value 为 布尔值 ，则返回 true；否则，返回 false
    Assert.equalsStrictly(true, isBooleanValue(true));
    Assert.equalsStrictly(true, isBooleanValue(false));
    Assert.equalsStrictly(false, isBooleanValue(new Boolean(true)));
    Assert.equalsStrictly(false, isBooleanValue(new Boolean('true')));
    Assert.equalsStrictly(false, isBooleanValue(new Boolean(false)));
    Assert.equalsStrictly(false, isBooleanValue(new Boolean('false')));
    // 
    Assert.equalsStrictly(false, isBooleanValue());
    Assert.equalsStrictly(false, isBooleanValue(undefined));
    Assert.equalsStrictly(false, isBooleanValue(null));
    Assert.equalsStrictly(false, isBooleanValue(NaN));
    Assert.equalsStrictly(false, isBooleanValue(0));
    Assert.equalsStrictly(false, isBooleanValue(-1));
    Assert.equalsStrictly(false, isBooleanValue(111));
    Assert.equalsStrictly(false, isBooleanValue('true'));
    Assert.equalsStrictly(false, isBooleanValue('false'));
    Assert.equalsStrictly(false, isBooleanValue(''));
    Assert.equalsStrictly(false, isBooleanValue('-1'));
    Assert.equalsStrictly(false, isBooleanValue(Symbol.for('testUid')));
    Assert.equalsStrictly(false, isBooleanValue(/123/));
    Assert.equalsStrictly(false, isBooleanValue(new Error()));
    Assert.equalsStrictly(false, isBooleanValue(()=>{}));
}

function testIsBooleanObject(){
    // 判断传来的值，是否为 一个 布尔对象 （这里跟 isBooleanValue 不同，这里判断的是对象，不是值）
    Assert.equalsStrictly(false, isBooleanObject(true));
    Assert.equalsStrictly(false, isBooleanObject(false));
    Assert.equalsStrictly(true, isBooleanObject(new Boolean(true)));
    Assert.equalsStrictly(true, isBooleanObject(new Boolean('true')));
    Assert.equalsStrictly(true, isBooleanObject(new Boolean(false)));
    Assert.equalsStrictly(true, isBooleanObject(new Boolean('false')));
    //
    Assert.equalsStrictly(false, isBooleanObject());
    Assert.equalsStrictly(false, isBooleanObject(undefined));
    Assert.equalsStrictly(false, isBooleanObject(null));
    Assert.equalsStrictly(false, isBooleanObject(NaN));
    Assert.equalsStrictly(false, isBooleanObject(0));
    Assert.equalsStrictly(false, isBooleanObject(-1));
    Assert.equalsStrictly(false, isBooleanObject(111));
    Assert.equalsStrictly(false, isBooleanObject('true'));
    Assert.equalsStrictly(false, isBooleanObject('false'));
    Assert.equalsStrictly(false, isBooleanObject(''));
    Assert.equalsStrictly(false, isBooleanObject('-1'));
    Assert.equalsStrictly(false, isBooleanObject(Symbol.for('testUid')));
    Assert.equalsStrictly(false, isBooleanObject(/123/));
    Assert.equalsStrictly(false, isBooleanObject(new Error()));
    Assert.equalsStrictly(false, isBooleanObject(()=>{}));
}

function testIsBoolean(){
    // 判断传来的值，是否为 一个 布尔值 或者 一个布尔对象
    Assert.equalsStrictly(true, isBoolean(true));
    Assert.equalsStrictly(true, isBoolean(false));
    Assert.equalsStrictly(true, isBoolean(new Boolean(true)));
    Assert.equalsStrictly(true, isBoolean(new Boolean('true')));
    Assert.equalsStrictly(true, isBoolean(new Boolean(false)));
    Assert.equalsStrictly(true, isBoolean(new Boolean('false')));
    //
    Assert.equalsStrictly(false, isBoolean());
    Assert.equalsStrictly(false, isBoolean(undefined));
    Assert.equalsStrictly(false, isBoolean(null));
    Assert.equalsStrictly(false, isBoolean(NaN));
    Assert.equalsStrictly(false, isBoolean(0));
    Assert.equalsStrictly(false, isBoolean(-1));
    Assert.equalsStrictly(false, isBoolean(111));
    Assert.equalsStrictly(false, isBoolean('true'));
    Assert.equalsStrictly(false, isBoolean('false'));
    Assert.equalsStrictly(false, isBoolean(''));
    Assert.equalsStrictly(false, isBoolean('-1'));
    Assert.equalsStrictly(false, isBoolean(Symbol.for('testUid')));
    Assert.equalsStrictly(false, isBoolean(/123/));
    Assert.equalsStrictly(false, isBoolean(new Error()));
    Assert.equalsStrictly(false, isBoolean(()=>{}));
}

function testValueOfBoolean(){
    // 获取传来的 布尔值 或者 布尔对象 的 具体值。（对于不是布尔类型的参数，直接返回空字符串 null）
    Assert.equalsStrictly(true, valueOfBoolean(true));
    Assert.equalsStrictly(false, valueOfBoolean(false));
    Assert.equalsStrictly(true, valueOfBoolean(new Boolean(true)));
    Assert.equalsStrictly(false, valueOfBoolean(new Boolean(false)));
    /**
     * 对于 new Boolean() 。如果该值被省略或为 0、-0、0n、null、false、NaN、undefined 或空字符串（""），那么该对象的初始值为 false。
     * 所有其他的值，包括任何对象、空数组（[]）或字符串 "false"，都会创建一个初始值为 true 的对象。
     */
    Assert.equalsStrictly(true, valueOfBoolean(new Boolean('true')));
    Assert.equalsStrictly(true, valueOfBoolean(new Boolean('false')));
    //
    Assert.equalsStrictly(null, valueOfBoolean());
    Assert.equalsStrictly(null, valueOfBoolean(undefined));
    Assert.equalsStrictly(null, valueOfBoolean(null));
    Assert.equalsStrictly(null, valueOfBoolean(NaN));
    Assert.equalsStrictly(null, valueOfBoolean(0));
    Assert.equalsStrictly(null, valueOfBoolean(-1));
    Assert.equalsStrictly(null, valueOfBoolean(111));
    Assert.equalsStrictly(null, valueOfBoolean('true'));
    Assert.equalsStrictly(null, valueOfBoolean('false'));
    Assert.equalsStrictly(null, valueOfBoolean(Symbol.for('testUid')));
    Assert.equalsStrictly(null, valueOfBoolean(/123/));
    Assert.equalsStrictly(null, valueOfBoolean(new Error()));
    Assert.equalsStrictly(null, valueOfBoolean(()=>{}));
}

function testIsNumberValue(){
    // 判断传来的值，是否为 一个 数字值。如果为 NaN 这里判断为 false。因为它属于异常值
    Assert.equalsStrictly(true, isNumberValue(1));
    Assert.equalsStrictly(true, isNumberValue(-1));
    Assert.equalsStrictly(true, isNumberValue(0));
    Assert.equalsStrictly(true, isNumberValue(0.1));
    Assert.equalsStrictly(false, isNumberValue(new Number('1')));
    Assert.equalsStrictly(false, isNumberValue(new Number('0')));
    Assert.equalsStrictly(false, isNumberValue(new Number('-1')));
    //
    Assert.equalsStrictly(false, isNumberValue());
    Assert.equalsStrictly(false, isNumberValue(undefined));
    Assert.equalsStrictly(false, isNumberValue(null));
    Assert.equalsStrictly(false, isNumberValue(NaN));
    Assert.equalsStrictly(false, isNumberValue(''));
    Assert.equalsStrictly(false, isNumberValue('1'));
    Assert.equalsStrictly(false, isNumberValue(true));
    Assert.equalsStrictly(false, isNumberValue(false));
    Assert.equalsStrictly(false, isNumberValue(Symbol.for('testUid')));
    Assert.equalsStrictly(false, isNumberValue(/123/));
    Assert.equalsStrictly(false, isNumberValue(new Error()));
    Assert.equalsStrictly(false, isNumberValue(()=>{}));
}

function testIsNumberObject(){
    // 判断传来的值，是否为 一个 数字对象。 如果 value 为 数字对象 ，则返回 true；否则，返回 false
    Assert.equalsStrictly(false, isNumberObject(1));
    Assert.equalsStrictly(false, isNumberObject(-1));
    Assert.equalsStrictly(false, isNumberObject(0));
    Assert.equalsStrictly(false, isNumberObject(0.1));
    Assert.equalsStrictly(true, isNumberObject(new Number('1')));
    Assert.equalsStrictly(true, isNumberObject(new Number('0')));
    Assert.equalsStrictly(true, isNumberObject(new Number('-1')));
    //
    Assert.equalsStrictly(false, isNumberObject());
    Assert.equalsStrictly(false, isNumberObject(undefined));
    Assert.equalsStrictly(false, isNumberObject(null));
    Assert.equalsStrictly(false, isNumberObject(NaN));
    Assert.equalsStrictly(false, isNumberObject(''));
    Assert.equalsStrictly(false, isNumberObject('1'));
    Assert.equalsStrictly(false, isNumberObject(true));
    Assert.equalsStrictly(false, isNumberObject(false));
    Assert.equalsStrictly(false, isNumberObject(Symbol.for('testUid')));
    Assert.equalsStrictly(false, isNumberObject(/123/));
    Assert.equalsStrictly(false, isNumberObject(new Error()));
    Assert.equalsStrictly(false, isNumberObject(()=>{}));
}

function testIsNumber(){
    // 判断传来的值，是否为 一个 数字对象 或者 一个数字值。如果 value 为 数字对象 或者 数字值 ，则返回 true；否则，返回 false
    Assert.equalsStrictly(true, isNumber(1));
    Assert.equalsStrictly(true, isNumber(-1));
    Assert.equalsStrictly(true, isNumber(0));
    Assert.equalsStrictly(true, isNumber(0.1));
    Assert.equalsStrictly(true, isNumber(new Number('1')));
    Assert.equalsStrictly(true, isNumber(new Number('0')));
    Assert.equalsStrictly(true, isNumber(new Number('-1')));
    //
    Assert.equalsStrictly(false, isNumber());
    Assert.equalsStrictly(false, isNumber(undefined));
    Assert.equalsStrictly(false, isNumber(null));
    Assert.equalsStrictly(false, isNumber(NaN));
    Assert.equalsStrictly(false, isNumber(''));
    Assert.equalsStrictly(false, isNumber('1'));
    Assert.equalsStrictly(false, isNumber(true));
    Assert.equalsStrictly(false, isNumber(false));
    Assert.equalsStrictly(false, isNumber(Symbol.for('testUid')));
    Assert.equalsStrictly(false, isNumber(/123/));
    Assert.equalsStrictly(false, isNumber(new Error()));
    Assert.equalsStrictly(false, isNumber(()=>{}));
}

function testValueOfNumber(){
    // 获取传来的 数字值 或者 数字对象 的 具体值。（对于不是数字类型的参数，直接返回空字符串 null）
    Assert.equalsStrictly(1, valueOfNumber(1));
    Assert.equalsStrictly(-1, valueOfNumber(-1));
    Assert.equalsStrictly(0, valueOfNumber(0));
    Assert.equalsStrictly(0.1, valueOfNumber(0.1));
    Assert.equalsStrictly(1, valueOfNumber(new Number('1')));
    Assert.equalsStrictly(0, valueOfNumber(new Number('0')));
    Assert.equalsStrictly(-1, valueOfNumber(new Number('-1')));
    //
    Assert.equalsStrictly(null, valueOfNumber());
    Assert.equalsStrictly(null, valueOfNumber(undefined));
    Assert.equalsStrictly(null, valueOfNumber(null));
    Assert.equalsStrictly(null, valueOfNumber(NaN));
    Assert.equalsStrictly(null, valueOfNumber(''));
    Assert.equalsStrictly(null, valueOfNumber('1'));
    Assert.equalsStrictly(null, valueOfNumber(true));
    Assert.equalsStrictly(null, valueOfNumber(false));
    Assert.equalsStrictly(null, valueOfNumber(Symbol.for('testUid')));
    Assert.equalsStrictly(null, valueOfNumber(/123/));
    Assert.equalsStrictly(null, valueOfNumber(new Error()));
    Assert.equalsStrictly(null, valueOfNumber(()=>{}));
}

function testIsSymbol(){
    // 判断传来的值，是否为 一个 Symbol 值。 如果 value 为 Symbol 值 ，则返回 true；否则，返回 false
    Assert.equalsStrictly(true, isSymbol(Symbol.for('testUid')));
    // 其它类型：空，字符串，数字，布尔值，正则值，对象，函数
    Assert.equalsStrictly(false, isSymbol());
    Assert.equalsStrictly(false, isSymbol(undefined));
    Assert.equalsStrictly(false, isSymbol(null));
    Assert.equalsStrictly(false, isSymbol(NaN));
    Assert.equalsStrictly(false, isSymbol(''));
    Assert.equalsStrictly(false, isSymbol(new String('')));
    Assert.equalsStrictly(false, isSymbol(-1));
    Assert.equalsStrictly(false, isSymbol(0));
    Assert.equalsStrictly(false, isSymbol(new Number(0)));
    Assert.equalsStrictly(false, isSymbol(true));
    Assert.equalsStrictly(false, isSymbol(false));
    Assert.equalsStrictly(false, isSymbol(new Boolean(false)));
    Assert.equalsStrictly(false, isSymbol(/123/));
    Assert.equalsStrictly(false, isSymbol(new Error()));
    Assert.equalsStrictly(false, isSymbol(()=>{}));
}

function testIsRegexp(){
    // 判断传入的参数，是否为一个正则表达式。如果 value 为 正则表达式 ，则返回 true；否则，返回 false。
    Assert.equalsStrictly(true, isRegexp(/123/));
    Assert.equalsStrictly(true, isRegexp(new RegExp('123')));
    // 其它类型：空，字符串，数字，布尔值，正则值，对象，函数
    Assert.equalsStrictly(false, isRegexp());
    Assert.equalsStrictly(false, isRegexp(undefined));
    Assert.equalsStrictly(false, isRegexp(null));
    Assert.equalsStrictly(false, isRegexp(NaN));
    Assert.equalsStrictly(false, isRegexp(''));
    Assert.equalsStrictly(false, isRegexp(new String('')));
    Assert.equalsStrictly(false, isRegexp(-1));
    Assert.equalsStrictly(false, isRegexp(0));
    Assert.equalsStrictly(false, isRegexp(new Number(0)));
    Assert.equalsStrictly(false, isRegexp(true));
    Assert.equalsStrictly(false, isRegexp(false));
    Assert.equalsStrictly(false, isRegexp(new Boolean(false)));
    Assert.equalsStrictly(false, isRegexp(Symbol.for('testUid')));
    Assert.equalsStrictly(false, isRegexp(new Error()));
    Assert.equalsStrictly(false, isRegexp(()=>{}));
}

function testIsRegexpOk(){
    // 判断传来的参数，是否与传来的正则表达式匹配。如果 value 与 正则表达式 匹配，则返回 true；否则，返回 false
    // 如果 value 不是字符串，或者 regexp 不是正则表达式，则抛出 ParameterError 异常。

    // 这里不会抛异常（只测试 true 和 false）
    Assert.throwsErrorsNone(()=>{
        Assert.equalsStrictly(true, isRegexpOk('abc', /^abc$/));
        Assert.equalsStrictly(false, isRegexpOk('abc', /^xxxx$/));
    });

    // 如果 value 不是字符串，或者 regexp 不是正则表达式，则抛出 ParameterError 异常。
    // 这里测试 value是字符串，但是 regexp不是正则
    Assert.throwsErrors(()=>{ isRegexpOk('', ); }, ParameterError);
    Assert.throwsErrors(()=>{ isRegexpOk('', undefined); }, ParameterError);
    Assert.throwsErrors(()=>{ isRegexpOk('', null); }, ParameterError);
    Assert.throwsErrors(()=>{ isRegexpOk('', NaN); }, ParameterError);
    Assert.throwsErrors(()=>{ isRegexpOk('', ''); }, ParameterError);
    Assert.throwsErrors(()=>{ isRegexpOk('', new String('')); }, ParameterError);
    Assert.throwsErrors(()=>{ isRegexpOk('', 0); }, ParameterError);
    Assert.throwsErrors(()=>{ isRegexpOk('', new Number(0)); }, ParameterError);
    Assert.throwsErrors(()=>{ isRegexpOk('', true); }, ParameterError);
    Assert.throwsErrors(()=>{ isRegexpOk('', new Boolean(true)); }, ParameterError);
    Assert.throwsErrors(()=>{ isRegexpOk('', Symbol.for('testUid')); }, ParameterError);
    Assert.throwsErrors(()=>{ isRegexpOk('', new Error()); }, ParameterError);
    Assert.throwsErrors(()=>{ isRegexpOk('', ()=>{}); }, ParameterError);
    // 这里测试 value不是字符串，但是 regexp是正则
    Assert.throwsErrors(()=>{ isRegexpOk(/^123$/, /^123$/); }, ParameterError);
    Assert.throwsErrors(()=>{ isRegexpOk(new RegExp('123'), /^123$/); }, ParameterError);
    Assert.throwsErrors(()=>{ isRegexpOk(undefined, /^123$/); }, ParameterError);
    Assert.throwsErrors(()=>{ isRegexpOk(null, /^123$/); }, ParameterError);
    Assert.throwsErrors(()=>{ isRegexpOk(NaN, /^123$/); }, ParameterError);
    Assert.throwsErrors(()=>{ isRegexpOk(0, /^123$/); }, ParameterError);
    Assert.throwsErrors(()=>{ isRegexpOk(new Number(0), /^123$/); }, ParameterError);
    Assert.throwsErrors(()=>{ isRegexpOk(true, /^123$/); }, ParameterError);
    Assert.throwsErrors(()=>{ isRegexpOk(new Boolean(true), /^123$/); }, ParameterError);
    Assert.throwsErrors(()=>{ isRegexpOk(Symbol.for('testUid'), /^123$/); }, ParameterError);
    Assert.throwsErrors(()=>{ isRegexpOk(new Error(), /^123$/); }, ParameterError);
    Assert.throwsErrors(()=>{ isRegexpOk(()=>{}, /^123$/); }, ParameterError);
}

// =============== 导出测试函数，用于测试结果显示

export {
    testIsNullValue, testNotNullValue,
    testIsStringValue, testIsStringObject, testIsString, testIsEmptyString, testValueOfString,
    testIsBooleanValue, testIsBooleanObject, testIsBoolean, testValueOfBoolean,
    testIsNumberValue, testIsNumberObject, testIsNumber, testValueOfNumber,
    testIsSymbol, testIsRegexp, testIsRegexpOk
}