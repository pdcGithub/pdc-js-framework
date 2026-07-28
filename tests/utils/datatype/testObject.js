/**
 * In my license, all codes can be shared free of charge. 
 * However, If my code is taken for commercial use, please maintain it yourself. 
 * I am not obligated to take responsibility for your business application.
 * Here is my email "pangdongcan@live.com"
 * 
 * Copyright © 2026 Micheal Pang. All rights reserved.
 * 
 * @file This file "testObject.js" is part of project "pdc-js-framework" , which is belong to Michael Pang (It's Me).
 * @author  Micheal Pang (Dongcan Pang)
 * @since  2026-06-08
 * @description  这是关于 utils/datatype/object.js 模块的测试。object.js 是 datatype.js 模块的子模块
 */
"use strict"; // 这是严格模式下的 Javascript 代码

// =============== 导入要测试的函数

import {
    isFunction, isClass, isTargetClass, isObject,  /* 基础对象 和 类 判断 */
    isObjectLiteral, /* 对象字面量判断 */
    isTargetObject, isTargetObjectSet, isTargetObjectArray, isTargetObject2DArray,  /* 目标对象和数组判断 */
    isHtmlElement, isHtmlElementList,                             /* Html元素对象和数组判断 */
    
    isArray, isEmptyArray, is2DArray, isEmpty2DArray, isSet, isEmptySet, isMap, isEmptyMap

} from "../../../utils/datatype/object.js";

// =============== 导入测试工具包
import { Assert } from "../../testTools.js";

// =============== 导入要处理的异常类
import { ParameterError } from "../../../models/errors.js";
import { ObjectLiteral } from "../../../models/normal.js";

// =============== 开始测试

// 在我的框架中， js 的数据类型中主要有以下几种：
// ===> 空（undefined\null\NaN）、字符串（基础+对象）、数字（基础+对象）、布尔（基础+对象）、正则、Symbol、类、函数、普通对象、数组

function testIsFunction(){

    // 空
    Assert.equalsStrictly(false, isFunction());
    Assert.equalsStrictly(false, isFunction(undefined));
    Assert.equalsStrictly(false, isFunction(null));
    Assert.equalsStrictly(false, isFunction(NaN));
    // 字符串
    Assert.equalsStrictly(false, isFunction(''));
    Assert.equalsStrictly(false, isFunction('xxx'));
    Assert.equalsStrictly(false, isFunction(new String('')));
    Assert.equalsStrictly(false, isFunction(new String('aaa')));
    // 数字
    Assert.equalsStrictly(false, isFunction(1));
    Assert.equalsStrictly(false, isFunction(-1));
    Assert.equalsStrictly(false, isFunction(new Number(1)));
    Assert.equalsStrictly(false, isFunction(new Number(-1)));
    // 布尔
    Assert.equalsStrictly(false, isFunction(true));
    Assert.equalsStrictly(false, isFunction(false));
    Assert.equalsStrictly(false, isFunction(new Boolean(true)));
    Assert.equalsStrictly(false, isFunction(new Boolean(false)));
    // 正则
    Assert.equalsStrictly(false, isFunction(/123/));
    Assert.equalsStrictly(false, isFunction(new RegExp('123')));
    // Symbol
    Assert.equalsStrictly(false, isFunction(Symbol.for('uid')));
    // 类
    Assert.equalsStrictly(true, isFunction(Error)); // 在 JavaScript 中，类是特殊函数。函数也可以通过 new 处理，所以函数也是一个类
    Assert.equalsStrictly(true, isFunction(ParameterError)); 
    // 函数
    Assert.equalsStrictly(true, isFunction(()=>{}));
    Assert.equalsStrictly(true, isFunction(function(){}));
    // 普通对象
    Assert.equalsStrictly(false, isFunction(new ParameterError('异常信息对象')));
    Assert.equalsStrictly(false, isFunction(new String('ssssss')));
    Assert.equalsStrictly(false, isFunction({a:1, b:2})); // 对象字面量
    Assert.equalsStrictly(false, isFunction(new Set([1,2]))); // set
    Assert.equalsStrictly(false, isFunction(new Map())); // map
    // 数组
    Assert.equalsStrictly(false, isFunction([]));
    Assert.equalsStrictly(false, isFunction([1,2,3]));
    Assert.equalsStrictly(false, isFunction([[]])); // 二维数组
    Assert.equalsStrictly(false, isFunction([[1,2,3], [4,5,6]])); // 二维数组
}

function testIsClass(){
    // 空
    Assert.equalsStrictly(false, isClass());
    Assert.equalsStrictly(false, isClass(undefined));
    Assert.equalsStrictly(false, isClass(null));
    Assert.equalsStrictly(false, isClass(NaN));
    // 字符串
    Assert.equalsStrictly(false, isClass(''));
    Assert.equalsStrictly(false, isClass('xxx'));
    Assert.equalsStrictly(false, isClass(new String('')));
    Assert.equalsStrictly(false, isClass(new String('aaa')));
    // 数字
    Assert.equalsStrictly(false, isClass(1));
    Assert.equalsStrictly(false, isClass(-1));
    Assert.equalsStrictly(false, isClass(new Number(1)));
    Assert.equalsStrictly(false, isClass(new Number(-1)));
    // 布尔
    Assert.equalsStrictly(false, isClass(true));
    Assert.equalsStrictly(false, isClass(false));
    Assert.equalsStrictly(false, isClass(new Boolean(true)));
    Assert.equalsStrictly(false, isClass(new Boolean(false)));
    // 正则
    Assert.equalsStrictly(false, isClass(/123/));
    Assert.equalsStrictly(false, isClass(new RegExp('123')));
    // Symbol
    Assert.equalsStrictly(false, isClass(Symbol.for('uid')));
    // 类
    Assert.equalsStrictly(true, isClass(Error)); // 在 JavaScript 中，类是特殊函数。函数也可以通过 new 处理，所以函数也是一个类
    Assert.equalsStrictly(true, isClass(ParameterError)); 
    // 函数
    Assert.equalsStrictly(true, isClass(testIsClass));
    Assert.equalsStrictly(false, isClass(()=>{}));     // 匿箭头函数 和 匿名函数，不属于 class
    Assert.equalsStrictly(false, isClass(function(){}));
    // 普通对象
    Assert.equalsStrictly(false, isClass(new ParameterError('异常信息对象')));
    Assert.equalsStrictly(false, isClass(new String('ssssss')));
    Assert.equalsStrictly(false, isClass({a:1, b:2})); // 对象字面量
    Assert.equalsStrictly(false, isClass(new Set([1,2]))); // set
    Assert.equalsStrictly(false, isClass(new Map())); // map
    // 数组
    Assert.equalsStrictly(false, isClass([]));
    Assert.equalsStrictly(false, isClass([1,2,3]));
    Assert.equalsStrictly(false, isClass([[]])); // 二维数组
    Assert.equalsStrictly(false, isClass([[1,2,3], [4,5,6]])); // 二维数组
}

function testIsTargetClass(){

    /**
     * 对于类，它可能是 class ，也可能是 function ，这是 JavaScript 语法上决定的。
     * ==> 在逻辑上，isTargetClass 判断 currentClass 是否为 targetClass 或者 它的子类。如果继承关系来自 函数，也是可以判断的。
     * ==> 如果 currentClass 为 targetClass 或者 它的子类，则返回 true；否则返回 false
     * ==> 如果 currentClass 或者 targetClass，不是 class 或者 function 数据类型，则直接返回 false。
     * ==> isTargetClass : 有2个参数 。所以需要组合一下。
     */

    // ==> 组合 1 ，currentClass 固定，targetClass 遍历

    // 空
    Assert.equalsStrictly(false, isTargetClass(undefined, ));
    Assert.equalsStrictly(false, isTargetClass(null, ));
    Assert.equalsStrictly(false, isTargetClass(NaN, ));
    Assert.equalsStrictly(false, isTargetClass(ParameterError, ));
    Assert.equalsStrictly(false, isTargetClass(ParameterError, undefined));
    Assert.equalsStrictly(false, isTargetClass(ParameterError, null));
    Assert.equalsStrictly(false, isTargetClass(ParameterError, NaN));
    // 字符串
    Assert.equalsStrictly(false, isTargetClass(ParameterError, ''));
    Assert.equalsStrictly(false, isTargetClass(ParameterError, 'Error'));
    Assert.equalsStrictly(false, isTargetClass(ParameterError, new String('')));
    Assert.equalsStrictly(false, isTargetClass(ParameterError, new String('Error')));
    // 数字
    Assert.equalsStrictly(false, isTargetClass(ParameterError, 1));
    Assert.equalsStrictly(false, isTargetClass(ParameterError, 0));
    Assert.equalsStrictly(false, isTargetClass(ParameterError, -1));
    Assert.equalsStrictly(false, isTargetClass(ParameterError, new Number(1)));
    Assert.equalsStrictly(false, isTargetClass(ParameterError, new Number(0)));
    Assert.equalsStrictly(false, isTargetClass(ParameterError, new Number(-1)));
    // 布尔
    Assert.equalsStrictly(false, isTargetClass(ParameterError, true));
    Assert.equalsStrictly(false, isTargetClass(ParameterError, false));
    Assert.equalsStrictly(false, isTargetClass(ParameterError, new Boolean(true)));
    Assert.equalsStrictly(false, isTargetClass(ParameterError, new Boolean(false)));
    // 正则
    Assert.equalsStrictly(false, isTargetClass(ParameterError, /123/));
    Assert.equalsStrictly(false, isTargetClass(ParameterError, new RegExp('123')));
    // Symbol
    Assert.equalsStrictly(false, isTargetClass(ParameterError, Symbol.for('uid')));
    // 类
    Assert.equalsStrictly(false, isTargetClass(ParameterError, String));
    Assert.equalsStrictly(false, isTargetClass(ParameterError, Number));
    Assert.equalsStrictly(false, isTargetClass(ParameterError, Boolean));
    Assert.equalsStrictly(true, isTargetClass(ParameterError, ParameterError));
    Assert.equalsStrictly(true, isTargetClass(ParameterError, Error));
    // 函数
    Assert.equalsStrictly(false, isTargetClass(ParameterError, ()=>{}));
    Assert.equalsStrictly(false, isTargetClass(ParameterError, function(){}));
    Assert.equalsStrictly(false, isTargetClass(ParameterError, function ParameterError(){}));
    Assert.equalsStrictly(false, isTargetClass(ParameterError, testIsTargetClass));
    Assert.equalsStrictly(false, isTargetClass(ParameterError, isTargetClass));
    // 普通对象
    Assert.equalsStrictly(false, isTargetClass(ParameterError, new String()));
    Assert.equalsStrictly(false, isTargetClass(ParameterError, new ParameterError()));
    Assert.equalsStrictly(false, isTargetClass(ParameterError, {a:1, b:2, c:3}));
    Assert.equalsStrictly(false, isTargetClass(ParameterError, new Set([1,2,3])));
    Assert.equalsStrictly(false, isTargetClass(ParameterError, new Map()));
    // 数组
    Assert.equalsStrictly(false, isTargetClass(ParameterError, []));
    Assert.equalsStrictly(false, isTargetClass(ParameterError, [1, 2, 3]));
    Assert.equalsStrictly(false, isTargetClass(ParameterError, [[]]));
    Assert.equalsStrictly(false, isTargetClass(ParameterError, [[1,2,3], [4,5,6], [7,8,9]]));

    // ==> 组合 2 ，currentClass 遍历，targetClass 固定

    // 空
    Assert.equalsStrictly(false, isTargetClass(undefined, undefined));
    Assert.equalsStrictly(false, isTargetClass(undefined, null));
    Assert.equalsStrictly(false, isTargetClass(undefined, NaN));
    Assert.equalsStrictly(false, isTargetClass(undefined, Error));
    Assert.equalsStrictly(false, isTargetClass(null, Error));
    Assert.equalsStrictly(false, isTargetClass(NaN, Error));
    // 字符串
    Assert.equalsStrictly(false, isTargetClass('', Error));
    Assert.equalsStrictly(false, isTargetClass('Error', Error));
    Assert.equalsStrictly(false, isTargetClass(new String(''), Error));
    Assert.equalsStrictly(false, isTargetClass(new String('Error'), Error));
    // 数字
    Assert.equalsStrictly(false, isTargetClass(1, Error));
    Assert.equalsStrictly(false, isTargetClass(0, Error));
    Assert.equalsStrictly(false, isTargetClass(-1, Error));
    Assert.equalsStrictly(false, isTargetClass(new Number(1), Error));
    Assert.equalsStrictly(false, isTargetClass(new Number(0), Error));
    Assert.equalsStrictly(false, isTargetClass(new Number(-1), Error));
    // 布尔
    Assert.equalsStrictly(false, isTargetClass(true, Error));
    Assert.equalsStrictly(false, isTargetClass(false, Error));
    Assert.equalsStrictly(false, isTargetClass(new Boolean(true), Error));
    Assert.equalsStrictly(false, isTargetClass(new Boolean(false), Error));
    // 正则
    Assert.equalsStrictly(false, isTargetClass(/123/, Error));
    Assert.equalsStrictly(false, isTargetClass(new RegExp('123'), Error));
    // Symbol
    Assert.equalsStrictly(false, isTargetClass(Symbol.for('uid'), Error));
    // 类
    Assert.equalsStrictly(false, isTargetClass(String, Error));
    Assert.equalsStrictly(false, isTargetClass(Number, Error));
    Assert.equalsStrictly(false, isTargetClass(Boolean, Error));
    Assert.equalsStrictly(true, isTargetClass(ParameterError, Error));
    Assert.equalsStrictly(true, isTargetClass(Error, Error));
    // 函数
    Assert.equalsStrictly(false, isTargetClass(()=>{}, Error));
    Assert.equalsStrictly(false, isTargetClass(function(){}, Error));
    Assert.equalsStrictly(false, isTargetClass(function ParameterError(){}, Error));
    Assert.equalsStrictly(false, isTargetClass(testIsTargetClass, Error));
    Assert.equalsStrictly(false, isTargetClass(isTargetClass, Error));
    // 普通对象
    Assert.equalsStrictly(false, isTargetClass(new String(), Error));
    Assert.equalsStrictly(false, isTargetClass(new ParameterError(), Error));
    Assert.equalsStrictly(false, isTargetClass({a:1, b:2, c:3}, Error));
    Assert.equalsStrictly(false, isTargetClass(new Set([1,2,3]), Error));
    Assert.equalsStrictly(false, isTargetClass(new Map(), Error));
    // 数组
    Assert.equalsStrictly(false, isTargetClass([], Error));
    Assert.equalsStrictly(false, isTargetClass([1, 2, 3], Error));
    Assert.equalsStrictly(false, isTargetClass([[]], Error));
    Assert.equalsStrictly(false, isTargetClass([[1,2,3], [4,5,6], [7,8,9]], Error));
}

function testIsObject(){
    // 空
    Assert.equalsStrictly(false, isObject());
    Assert.equalsStrictly(false, isObject(undefined));
    Assert.equalsStrictly(false, isObject(null));
    Assert.equalsStrictly(false, isObject(NaN));
    // 字符串
    Assert.equalsStrictly(false, isObject(''));
    Assert.equalsStrictly(false, isObject('xxx'));
    Assert.equalsStrictly(true, isObject(new String('')));
    Assert.equalsStrictly(true, isObject(new String('aaa')));
    // 数字
    Assert.equalsStrictly(false, isObject(1));
    Assert.equalsStrictly(false, isObject(-1));
    Assert.equalsStrictly(true, isObject(new Number(1)));
    Assert.equalsStrictly(true, isObject(new Number(-1)));
    // 布尔
    Assert.equalsStrictly(false, isObject(true));
    Assert.equalsStrictly(false, isObject(false));
    Assert.equalsStrictly(true, isObject(new Boolean(true)));
    Assert.equalsStrictly(true, isObject(new Boolean(false)));
    // 正则
    Assert.equalsStrictly(true, isObject(/123/));
    Assert.equalsStrictly(true, isObject(new RegExp('123')));
    // Symbol
    Assert.equalsStrictly(false, isObject(Symbol.for('uid'))); // Symbol 是原始类型，不是对象。
    // 类
    Assert.equalsStrictly(false, isObject(Error)); 
    Assert.equalsStrictly(false, isObject(ParameterError)); 
    // 函数
    Assert.equalsStrictly(false, isObject(()=>{}));
    Assert.equalsStrictly(false, isObject(function(){}));
    // 普通对象
    Assert.equalsStrictly(true, isObject(new ParameterError('异常信息对象')));
    Assert.equalsStrictly(true, isObject(new String('ssssss')));
    Assert.equalsStrictly(true, isObject({a:1, b:2})); // 对象字面量
    Assert.equalsStrictly(true, isObject(new Set([1,2]))); // set
    Assert.equalsStrictly(true, isObject(new Map())); // map
    // 数组（数组是一个对象）
    Assert.equalsStrictly(true, isObject([]));
    Assert.equalsStrictly(true, isObject([1,2,3]));
    Assert.equalsStrictly(true, isObject([[]])); // 二维数组
    Assert.equalsStrictly(true, isObject([[1,2,3], [4,5,6]])); // 二维数组
}

function testIsObjectLiteral(){

    /**
     * 对象字面量一般是 {a:1, b:2} 这样的。但是也可以是 new 出来的。字面量只是排除了 Array 类型。
     * 注意：对象字面量，它应该是一个通过 {} 或者 new Object() 创建的普通对象; 
     * 它不能是其它常规对象，比如：Array, String, Number, Boolean, Map, Set, RegExp 等等。
     */

    // 空
    Assert.equalsStrictly(false, isObjectLiteral());
    Assert.equalsStrictly(false, isObjectLiteral(undefined));
    Assert.equalsStrictly(false, isObjectLiteral(null));
    Assert.equalsStrictly(false, isObjectLiteral(NaN));
    // 字符串
    Assert.equalsStrictly(false, isObjectLiteral(''));
    Assert.equalsStrictly(false, isObjectLiteral('xxx'));
    Assert.equalsStrictly(false, isObjectLiteral(new String('')));
    Assert.equalsStrictly(false, isObjectLiteral(new String('aaa')));
    // 数字
    Assert.equalsStrictly(false, isObjectLiteral(1));
    Assert.equalsStrictly(false, isObjectLiteral(-1));
    Assert.equalsStrictly(false, isObjectLiteral(new Number(1)));
    Assert.equalsStrictly(false, isObjectLiteral(new Number(-1)));
    // 布尔
    Assert.equalsStrictly(false, isObjectLiteral(true));
    Assert.equalsStrictly(false, isObjectLiteral(false));
    Assert.equalsStrictly(false, isObjectLiteral(new Boolean(true)));
    Assert.equalsStrictly(false, isObjectLiteral(new Boolean(false)));
    // 正则
    Assert.equalsStrictly(false, isObjectLiteral(/123/));
    Assert.equalsStrictly(false, isObjectLiteral(new RegExp('123')));
    // Symbol
    Assert.equalsStrictly(false, isObjectLiteral(Symbol.for('uid'))); // Symbol 是原始类型，不是对象。
    // 类
    Assert.equalsStrictly(false, isObjectLiteral(Error)); 
    Assert.equalsStrictly(false, isObjectLiteral(ParameterError)); 
    // 函数
    Assert.equalsStrictly(false, isObjectLiteral(()=>{}));
    Assert.equalsStrictly(false, isObjectLiteral(function(){}));
    // 普通对象
    Assert.equalsStrictly(false, isObjectLiteral(new ParameterError('异常信息对象')));
    Assert.equalsStrictly(false, isObjectLiteral(new String('ssssss')));
    Assert.equalsStrictly(true, isObjectLiteral({a:1, b:2})); // 对象字面量
    Assert.equalsStrictly(true, isObjectLiteral({})); // 对象字面量
    Assert.equalsStrictly(true, isObjectLiteral(new Object())); // 对象字面量
    Assert.equalsStrictly(false, isObjectLiteral(new Set([1,2]))); // set
    Assert.equalsStrictly(false, isObjectLiteral(new Map())); // map
    // 数组（数组是一个对象）
    Assert.equalsStrictly(false, isObjectLiteral([]));
    Assert.equalsStrictly(false, isObjectLiteral([1,2,3]));
    Assert.equalsStrictly(false, isObjectLiteral([[]])); // 二维数组
    Assert.equalsStrictly(false, isObjectLiteral([[1,2,3], [4,5,6]])); // 二维数组
}

function testIsTargetObject(){
    
    /**
     * 对于 isTargetObject 有2个参数：value 和 targetClass 。value 是任意的。但是 targetClass 是关于对象类型的不定参数。
     * 如果 targetClass 没有传入，或者 它包含了一些不是类型的内容，则抛出 ParameterError 异常。
     */

    // ========= 抛异常测试（这里排除 类 和 函数，因为 目标值是类，同时函数也是类）
    Assert.throwsErrors(()=>{ isTargetObject('xxx', ); }, ParameterError);
    Assert.throwsErrors(()=>{ isTargetObject('xxx', undefined); }, ParameterError);
    Assert.throwsErrors(()=>{ isTargetObject('xxx', null); }, ParameterError);
    Assert.throwsErrors(()=>{ isTargetObject('xxx', NaN); }, ParameterError);
    Assert.throwsErrors(()=>{ isTargetObject('xxx', undefined, null, NaN); }, ParameterError);
    Assert.throwsErrors(()=>{ isTargetObject('xxx', 'xxx'); }, ParameterError);
    Assert.throwsErrors(()=>{ isTargetObject('xxx', new String('xxx')); }, ParameterError);
    Assert.throwsErrors(()=>{ isTargetObject('xxx', 123); }, ParameterError);
    Assert.throwsErrors(()=>{ isTargetObject('xxx', new Number(123)); }, ParameterError);
    Assert.throwsErrors(()=>{ isTargetObject('xxx', true); }, ParameterError);
    Assert.throwsErrors(()=>{ isTargetObject('xxx', false); }, ParameterError);
    Assert.throwsErrors(()=>{ isTargetObject('xxx', new Boolean(true)); }, ParameterError);
    Assert.throwsErrors(()=>{ isTargetObject('xxx', new Boolean(false)); }, ParameterError);
    Assert.throwsErrors(()=>{ isTargetObject('xxx', /123/); }, ParameterError);
    Assert.throwsErrors(()=>{ isTargetObject('xxx', new RegExp('123')); }, ParameterError);
    Assert.throwsErrors(()=>{ isTargetObject('xxx', Symbol.for('xxx')); }, ParameterError);
    Assert.throwsErrors(()=>{ isTargetObject('xxx', new ParameterError('异常信息对象')); }, ParameterError);
    Assert.throwsErrors(()=>{ isTargetObject('xxx', new String('ssssss')); }, ParameterError);
    Assert.throwsErrors(()=>{ isTargetObject('xxx', {a:1, b:2}); }, ParameterError);
    Assert.throwsErrors(()=>{ isTargetObject('xxx', new Set([1,2])); }, ParameterError);
    Assert.throwsErrors(()=>{ isTargetObject('xxx', new Map()); }, ParameterError);
    Assert.throwsErrors(()=>{ isTargetObject('xxx', []); }, ParameterError);
    Assert.throwsErrors(()=>{ isTargetObject('xxx', [1,2,3]); }, ParameterError);
    Assert.throwsErrors(()=>{ isTargetObject('xxx', [[]]); }, ParameterError);
    Assert.throwsErrors(()=>{ isTargetObject('xxx', [[1,2,3], [4,5,6]]); }, ParameterError);

    // 如果 class 数组有函数，并且是匿名函数、箭头函数，他需要返回 ParameterError
    Assert.throwsErrors(()=>{ isTargetObject(/123/, function(){}) }, ParameterError);
    Assert.throwsErrors(()=>{ isTargetObject(/123/, ()=>{}) }, ParameterError);

    // ========= 正常值测试

    Assert.equalsStrictly(false, isTargetObject(undefined, Error));
    Assert.equalsStrictly(false, isTargetObject(null, Error));
    Assert.equalsStrictly(false, isTargetObject(NaN, Error));
    Assert.equalsStrictly(false, isTargetObject('', Error));
    Assert.equalsStrictly(false, isTargetObject(new String(''), Error));
    Assert.equalsStrictly(false, isTargetObject(123, Error));
    Assert.equalsStrictly(false, isTargetObject(new Number('123'), Error));
    Assert.equalsStrictly(false, isTargetObject(true, Error));
    Assert.equalsStrictly(false, isTargetObject(false, Error));
    Assert.equalsStrictly(false, isTargetObject(new Boolean(true), Error));
    Assert.equalsStrictly(false, isTargetObject(new Boolean(false), Error));
    Assert.equalsStrictly(false, isTargetObject(/123/, Error));
    Assert.equalsStrictly(false, isTargetObject(new RegExp('123'), Error));
    Assert.equalsStrictly(false, isTargetObject(Symbol.for('uid'), Error));
    Assert.equalsStrictly(false, isTargetObject(Error, Error));
    Assert.equalsStrictly(false, isTargetObject(Error, Object));
    Assert.equalsStrictly(false, isTargetObject(ParameterError, Error));
    Assert.equalsStrictly(false, isTargetObject(()=>{}, Error));
    Assert.equalsStrictly(true, isTargetObject(new ParameterError('测试'), Error));
    Assert.equalsStrictly(false, isTargetObject({a:1, b:2, c:3}, Error));
    Assert.equalsStrictly(false, isTargetObject(new Set(), Error));
    Assert.equalsStrictly(false, isTargetObject(new Map(), Error));
    Assert.equalsStrictly(false, isTargetObject([], Error));
    Assert.equalsStrictly(false, isTargetObject([1,2,3], Error));
    Assert.equalsStrictly(false, isTargetObject([[]], Error));
    Assert.equalsStrictly(false, isTargetObject([[1,2,3], [4,5,6]], Error));

    // 第二个参数，有多个的测试（这里除了 空、class、function，其它数据应该是 true 的）
    Assert.equalsStrictly(false, isTargetObject(undefined,         Error, String, Number, Boolean, RegExp, Symbol, Set, Map, Array));
    Assert.equalsStrictly(false, isTargetObject(null,              Error, String, Number, Boolean, RegExp, Symbol, Set, Map, Array));
    Assert.equalsStrictly(false, isTargetObject(NaN,               Error, String, Number, Boolean, RegExp, Symbol, Set, Map, Array));
    Assert.equalsStrictly(true, isTargetObject('',                 Error, String));
    Assert.equalsStrictly(true, isTargetObject(new String(''),     Error, String));
    Assert.equalsStrictly(true, isTargetObject(123,                Error, Number));
    Assert.equalsStrictly(true, isTargetObject(new Number('123'),  Error, Number));
    Assert.equalsStrictly(true, isTargetObject(true,               Error, Boolean));
    Assert.equalsStrictly(true, isTargetObject(false,              Error, Boolean));
    Assert.equalsStrictly(true, isTargetObject(new Boolean(true),  Error, Boolean));
    Assert.equalsStrictly(true, isTargetObject(new Boolean(false), Error, Boolean));
    Assert.equalsStrictly(true, isTargetObject(/123/,              Error, RegExp));
    Assert.equalsStrictly(true, isTargetObject(new RegExp('123'),  Error, RegExp));
    Assert.equalsStrictly(true, isTargetObject(Symbol.for('uid'),  Error, Symbol));
    Assert.equalsStrictly(false, isTargetObject(Error,             Error, ParameterError));
    Assert.equalsStrictly(false, isTargetObject(ParameterError,    Error, ParameterError));
    Assert.equalsStrictly(false, isTargetObject(()=>{},            Error, String, Number, Boolean, RegExp, Symbol, Set, Map, Array));
    Assert.equalsStrictly(true, isTargetObject(new ParameterError('测试'), Error, ParameterError));
    Assert.equalsStrictly(true, isTargetObject({a:1, b:2, c:3},    Error, Object));
    Assert.equalsStrictly(true, isTargetObject(new Set(),          Error, Set));
    Assert.equalsStrictly(true, isTargetObject(new Map(),          Error, Map));
    Assert.equalsStrictly(true, isTargetObject([],                 Error, Array));
    Assert.equalsStrictly(true, isTargetObject([1,2,3],            Error, Array));
    Assert.equalsStrictly(true, isTargetObject([[]],               Error, Array));
    Assert.equalsStrictly(true, isTargetObject([[1,2,3], [4,5,6]], Error, Array));

    // 对象区分
    Assert.equalsStrictly(false, isTargetObject({}, Error, Map));
    Assert.equalsStrictly(true, isTargetObject({}, Error, Map, ObjectLiteral));
}

function testIsTargetObjectSet(){
    
    /**
     * 对于 isTargetObjectSet 有2个参数：pSet 和 targetClass 。pSet 是一个集合对象。但是 targetClass 是关于“集合内部”对象类型的不定参数。
     * 如果 targetClass 没有传入，或者 它包含了一些不是类型的内容，则抛出 ParameterError 异常。
     */

    // ========= 抛异常测试（主要是测试 targetClass 参数，这里排除 类 和 函数，因为 目标值是类，同时函数也是类）
    Assert.throwsErrors(()=>{ isTargetObjectSet(new Set([1,2,3]), ); }, ParameterError);
    Assert.throwsErrors(()=>{ isTargetObjectSet(new Set([1,2,3]), undefined); }, ParameterError);
    Assert.throwsErrors(()=>{ isTargetObjectSet(new Set([1,2,3]), null); }, ParameterError);
    Assert.throwsErrors(()=>{ isTargetObjectSet(new Set([1,2,3]), NaN); }, ParameterError);
    Assert.throwsErrors(()=>{ isTargetObjectSet(new Set([1,2,3]), undefined, null, NaN); }, ParameterError);
    Assert.throwsErrors(()=>{ isTargetObjectSet(new Set([1,2,3]), 'xxx'); }, ParameterError);
    Assert.throwsErrors(()=>{ isTargetObjectSet(new Set([1,2,3]), new String('xxx')); }, ParameterError);
    Assert.throwsErrors(()=>{ isTargetObjectSet(new Set([1,2,3]), 123); }, ParameterError);
    Assert.throwsErrors(()=>{ isTargetObjectSet(new Set([1,2,3]), new Number(123)); }, ParameterError);
    Assert.throwsErrors(()=>{ isTargetObjectSet(new Set([1,2,3]), true); }, ParameterError);
    Assert.throwsErrors(()=>{ isTargetObjectSet(new Set([1,2,3]), false); }, ParameterError);
    Assert.throwsErrors(()=>{ isTargetObjectSet(new Set([1,2,3]), new Boolean(true)); }, ParameterError);
    Assert.throwsErrors(()=>{ isTargetObjectSet(new Set([1,2,3]), new Boolean(false)); }, ParameterError);
    Assert.throwsErrors(()=>{ isTargetObjectSet(new Set([1,2,3]), /123/); }, ParameterError);
    Assert.throwsErrors(()=>{ isTargetObjectSet(new Set([1,2,3]), new RegExp('123')); }, ParameterError);
    Assert.throwsErrors(()=>{ isTargetObjectSet(new Set([1,2,3]), Symbol.for('xxx')); }, ParameterError);
    Assert.throwsErrors(()=>{ isTargetObjectSet(new Set([1,2,3]), new ParameterError('异常信息对象')); }, ParameterError);
    Assert.throwsErrors(()=>{ isTargetObjectSet(new Set([1,2,3]), new String('ssssss')); }, ParameterError);
    Assert.throwsErrors(()=>{ isTargetObjectSet(new Set([1,2,3]), {a:1, b:2}); }, ParameterError);
    Assert.throwsErrors(()=>{ isTargetObjectSet(new Set([1,2,3]), new Set([1,2])); }, ParameterError);
    Assert.throwsErrors(()=>{ isTargetObjectSet(new Set([1,2,3]), new Map()); }, ParameterError);
    Assert.throwsErrors(()=>{ isTargetObjectSet(new Set([1,2,3]), []); }, ParameterError);
    Assert.throwsErrors(()=>{ isTargetObjectSet(new Set([1,2,3]), [1,2,3]); }, ParameterError);
    Assert.throwsErrors(()=>{ isTargetObjectSet(new Set([1,2,3]), [[]]); }, ParameterError);
    Assert.throwsErrors(()=>{ isTargetObjectSet(new Set([1,2,3]), [[1,2,3], [4,5,6]]); }, ParameterError);

    // ========= 正常值测试（如果 pSet 参数不是 Set 类型，则直接 false；否则，检查参数 pSet 中元素的类型，是否 全部元素 都是 targetClass 类型的 对象）
    Assert.equalsStrictly(false, isTargetObjectSet(undefined, Error));
    Assert.equalsStrictly(false, isTargetObjectSet(null, Error));
    Assert.equalsStrictly(false, isTargetObjectSet(NaN, Error));
    Assert.equalsStrictly(false, isTargetObjectSet('', Error));
    Assert.equalsStrictly(false, isTargetObjectSet(new String(''), Error));
    Assert.equalsStrictly(false, isTargetObjectSet(123, Error));
    Assert.equalsStrictly(false, isTargetObjectSet(new Number('123'), Error));
    Assert.equalsStrictly(false, isTargetObjectSet(true, Error));
    Assert.equalsStrictly(false, isTargetObjectSet(false, Error));
    Assert.equalsStrictly(false, isTargetObjectSet(new Boolean(true), Error));
    Assert.equalsStrictly(false, isTargetObjectSet(new Boolean(false), Error));
    Assert.equalsStrictly(false, isTargetObjectSet(/123/, Error));
    Assert.equalsStrictly(false, isTargetObjectSet(new RegExp('123'), Error));
    Assert.equalsStrictly(false, isTargetObjectSet(Symbol.for('uid'), Error));
    Assert.equalsStrictly(false, isTargetObjectSet(Error, Error));
    Assert.equalsStrictly(false, isTargetObjectSet(ParameterError, Error));
    Assert.equalsStrictly(false, isTargetObjectSet(()=>{}, Error));
    Assert.equalsStrictly(false, isTargetObjectSet(new ParameterError('测试'), Error));
    Assert.equalsStrictly(false, isTargetObjectSet({a:1, b:2, c:3}, Error));
    Assert.equalsStrictly(true, isTargetObjectSet(new Set([new ParameterError()]), Error)); // 全部元素都是 Error
    Assert.equalsStrictly(false, isTargetObjectSet(new Set([new ParameterError(), 1, true]), Error)); // 部分是Error，为 false
    Assert.equalsStrictly(false, isTargetObjectSet(new Map(), Error));
    Assert.equalsStrictly(false, isTargetObjectSet([], Error));
    Assert.equalsStrictly(false, isTargetObjectSet([1,2,3], Error));
    Assert.equalsStrictly(false, isTargetObjectSet([[]], Error));
    Assert.equalsStrictly(false, isTargetObjectSet([[1,2,3], [4,5,6]], Error));

    // 第二个参数，有多个的测试（这里除了 pSet 有内容，并且内容是指定类型，才会为 true）
    Assert.equalsStrictly(false, isTargetObjectSet(undefined,         Error, String, Number, Boolean, RegExp, Symbol, Set, Map, Array));
    Assert.equalsStrictly(false, isTargetObjectSet(null,              Error, String, Number, Boolean, RegExp, Symbol, Set, Map, Array));
    Assert.equalsStrictly(false, isTargetObjectSet(NaN,               Error, String, Number, Boolean, RegExp, Symbol, Set, Map, Array));
    Assert.equalsStrictly(false, isTargetObjectSet('',                 Error, String));
    Assert.equalsStrictly(false, isTargetObjectSet(new String(''),     Error, String));
    Assert.equalsStrictly(false, isTargetObjectSet(123,                Error, Number));
    Assert.equalsStrictly(false, isTargetObjectSet(new Number('123'),  Error, Number));
    Assert.equalsStrictly(false, isTargetObjectSet(true,               Error, Boolean));
    Assert.equalsStrictly(false, isTargetObjectSet(false,              Error, Boolean));
    Assert.equalsStrictly(false, isTargetObjectSet(new Boolean(true),  Error, Boolean));
    Assert.equalsStrictly(false, isTargetObjectSet(new Boolean(false), Error, Boolean));
    Assert.equalsStrictly(false, isTargetObjectSet(/123/,              Error, RegExp));
    Assert.equalsStrictly(false, isTargetObjectSet(new RegExp('123'),  Error, RegExp));
    Assert.equalsStrictly(false, isTargetObjectSet(Symbol.for('uid'),  Error, Symbol));
    Assert.equalsStrictly(false, isTargetObjectSet(Error,             Error, ParameterError));
    Assert.equalsStrictly(false, isTargetObjectSet(ParameterError,    Error, ParameterError));
    Assert.equalsStrictly(false, isTargetObjectSet(()=>{},            Error, String, Number, Boolean, RegExp, Symbol, Set, Map, Array));
    Assert.equalsStrictly(false, isTargetObjectSet(new ParameterError('测试'), Error, ParameterError));
    Assert.equalsStrictly(false, isTargetObjectSet({a:1, b:2, c:3},    Error, Object));
    Assert.equalsStrictly(false, isTargetObjectSet(new Set(),          Error, Set));
    Assert.equalsStrictly(false, isTargetObjectSet(new Map(),          Error, Map));
    Assert.equalsStrictly(false, isTargetObjectSet([],                 Error, Array));
    Assert.equalsStrictly(false, isTargetObjectSet([1,2,3],            Error, Array));
    Assert.equalsStrictly(false, isTargetObjectSet([[]],               Error, Array));
    Assert.equalsStrictly(false, isTargetObjectSet([[1,2,3], [4,5,6]], Error, Array));
    // 多参数的真值判断（pSet 的元素类型，必须是 targetClass 的一个或者多个）
    // 如果 pSet 长度为0，则false
    Assert.equalsStrictly(false, isTargetObjectSet(new Set(),         Error, Number, String, Boolean));
    Assert.equalsStrictly(true, isTargetObjectSet(new Set([1,2,3]),   Error, Number));
    Assert.equalsStrictly(true, isTargetObjectSet(new Set([1,'xxxx', true]),   Error, Number, String, Boolean));
    Assert.equalsStrictly(true, isTargetObjectSet(new Set([1,'xxxx', true, new Error()]),   Error, Number, String, Boolean));
}

function testIsTargetObjectArray(){
    
    /**
     * 对于 isTargetObjectArray 有2个参数：pArray 和 targetClass 。pArray 是一个数组对象。但是 targetClass 是关于“数组内部”对象类型的不定参数。
     * 如果 targetClass 没有传入，或者 它包含了一些不是类型的内容，则抛出 ParameterError 异常。
     */
    
    // ========= 抛异常测试（主要是测试 targetClass 参数，这里排除 类 和 函数，因为 目标值是类，同时函数也是类）
    Assert.throwsErrors(()=>{ isTargetObjectArray([1,2,3], ); }, ParameterError);
    Assert.throwsErrors(()=>{ isTargetObjectArray([1,2,3], undefined); }, ParameterError);
    Assert.throwsErrors(()=>{ isTargetObjectArray([1,2,3], null); }, ParameterError);
    Assert.throwsErrors(()=>{ isTargetObjectArray([1,2,3], NaN); }, ParameterError);
    Assert.throwsErrors(()=>{ isTargetObjectArray([1,2,3], undefined, null, NaN); }, ParameterError);
    Assert.throwsErrors(()=>{ isTargetObjectArray([1,2,3], 'xxx'); }, ParameterError);
    Assert.throwsErrors(()=>{ isTargetObjectArray([1,2,3], new String('xxx')); }, ParameterError);
    Assert.throwsErrors(()=>{ isTargetObjectArray([1,2,3], 123); }, ParameterError);
    Assert.throwsErrors(()=>{ isTargetObjectArray([1,2,3], new Number(123)); }, ParameterError);
    Assert.throwsErrors(()=>{ isTargetObjectArray([1,2,3], true); }, ParameterError);
    Assert.throwsErrors(()=>{ isTargetObjectArray([1,2,3], false); }, ParameterError);
    Assert.throwsErrors(()=>{ isTargetObjectArray([1,2,3], new Boolean(true)); }, ParameterError);
    Assert.throwsErrors(()=>{ isTargetObjectArray([1,2,3], new Boolean(false)); }, ParameterError);
    Assert.throwsErrors(()=>{ isTargetObjectArray([1,2,3], /123/); }, ParameterError);
    Assert.throwsErrors(()=>{ isTargetObjectArray([1,2,3], new RegExp('123')); }, ParameterError);
    Assert.throwsErrors(()=>{ isTargetObjectArray([1,2,3], Symbol.for('xxx')); }, ParameterError);
    Assert.throwsErrors(()=>{ isTargetObjectArray([1,2,3], new ParameterError('异常信息对象')); }, ParameterError);
    Assert.throwsErrors(()=>{ isTargetObjectArray([1,2,3], new String('ssssss')); }, ParameterError);
    Assert.throwsErrors(()=>{ isTargetObjectArray([1,2,3], {a:1, b:2}); }, ParameterError);
    Assert.throwsErrors(()=>{ isTargetObjectArray([1,2,3], new Set([1,2])); }, ParameterError);
    Assert.throwsErrors(()=>{ isTargetObjectArray([1,2,3], new Map()); }, ParameterError);
    Assert.throwsErrors(()=>{ isTargetObjectArray([1,2,3], []); }, ParameterError);
    Assert.throwsErrors(()=>{ isTargetObjectArray([1,2,3], [1,2,3]); }, ParameterError);
    Assert.throwsErrors(()=>{ isTargetObjectArray([1,2,3], [[]]); }, ParameterError);
    Assert.throwsErrors(()=>{ isTargetObjectArray([1,2,3], [[1,2,3], [4,5,6]]); }, ParameterError);

    // ========= 正常值测试（如果 pArray 参数不是 Array 类型，则直接 false；否则，检查参数 pArray 中元素的类型，是否 全部元素 都是 targetClass 类型的 对象）
    Assert.equalsStrictly(false, isTargetObjectArray(undefined, Error));
    Assert.equalsStrictly(false, isTargetObjectArray(null, Error));
    Assert.equalsStrictly(false, isTargetObjectArray(NaN, Error));
    Assert.equalsStrictly(false, isTargetObjectArray('', Error));
    Assert.equalsStrictly(false, isTargetObjectArray(new String(''), Error));
    Assert.equalsStrictly(false, isTargetObjectArray(123, Error));
    Assert.equalsStrictly(false, isTargetObjectArray(new Number('123'), Error));
    Assert.equalsStrictly(false, isTargetObjectArray(true, Error));
    Assert.equalsStrictly(false, isTargetObjectArray(false, Error));
    Assert.equalsStrictly(false, isTargetObjectArray(new Boolean(true), Error));
    Assert.equalsStrictly(false, isTargetObjectArray(new Boolean(false), Error));
    Assert.equalsStrictly(false, isTargetObjectArray(/123/, Error));
    Assert.equalsStrictly(false, isTargetObjectArray(new RegExp('123'), Error));
    Assert.equalsStrictly(false, isTargetObjectArray(Symbol.for('uid'), Error));
    Assert.equalsStrictly(false, isTargetObjectArray(Error, Error));
    Assert.equalsStrictly(false, isTargetObjectArray(ParameterError, Error));
    Assert.equalsStrictly(false, isTargetObjectArray(()=>{}, Error));
    Assert.equalsStrictly(false, isTargetObjectArray(new ParameterError('测试'), Error));
    Assert.equalsStrictly(false, isTargetObjectArray({a:1, b:2, c:3}, Error));
    Assert.equalsStrictly(false, isTargetObjectArray(new Set(), Error)); 
    Assert.equalsStrictly(false, isTargetObjectArray(new Set([new ParameterError(), 1, true]), Error));
    Assert.equalsStrictly(false, isTargetObjectArray(new Map(), Error));
    Assert.equalsStrictly(false, isTargetObjectArray([], Error)); // 是数组，但是 pArray 长度为0，false
    Assert.equalsStrictly(false, isTargetObjectArray([1,2,3], Error)); // 是数组，但是元素类型不对， false
    Assert.equalsStrictly(true, isTargetObjectArray([new Error(), new ParameterError()], Error)); // 是数组，元素类型符合，true
    Assert.equalsStrictly(false, isTargetObjectArray([[]], Error));  // 是二维数组
    Assert.equalsStrictly(false, isTargetObjectArray([[1,2,3], [4,5,6]], Error));
    Assert.equalsStrictly(true, isTargetObjectArray([[]], Array));  // 是二维数组，相当于一个 元素为Array的一维数组

    // 第二个参数，有多个的测试（这里除了 pArray 有内容，并且内容是指定类型，才会为 true）
    Assert.equalsStrictly(false, isTargetObjectArray(undefined,         Error, String, Number, Boolean, RegExp, Symbol, Set, Map, Array));
    Assert.equalsStrictly(false, isTargetObjectArray(null,              Error, String, Number, Boolean, RegExp, Symbol, Set, Map, Array));
    Assert.equalsStrictly(false, isTargetObjectArray(NaN,               Error, String, Number, Boolean, RegExp, Symbol, Set, Map, Array));
    Assert.equalsStrictly(false, isTargetObjectArray('',                 Error, String));
    Assert.equalsStrictly(false, isTargetObjectArray(new String(''),     Error, String));
    Assert.equalsStrictly(false, isTargetObjectArray(123,                Error, Number));
    Assert.equalsStrictly(false, isTargetObjectArray(new Number('123'),  Error, Number));
    Assert.equalsStrictly(false, isTargetObjectArray(true,               Error, Boolean));
    Assert.equalsStrictly(false, isTargetObjectArray(false,              Error, Boolean));
    Assert.equalsStrictly(false, isTargetObjectArray(new Boolean(true),  Error, Boolean));
    Assert.equalsStrictly(false, isTargetObjectArray(new Boolean(false), Error, Boolean));
    Assert.equalsStrictly(false, isTargetObjectArray(/123/,              Error, RegExp));
    Assert.equalsStrictly(false, isTargetObjectArray(new RegExp('123'),  Error, RegExp));
    Assert.equalsStrictly(false, isTargetObjectArray(Symbol.for('uid'),  Error, Symbol));
    Assert.equalsStrictly(false, isTargetObjectArray(Error,             Error, ParameterError));
    Assert.equalsStrictly(false, isTargetObjectArray(ParameterError,    Error, ParameterError));
    Assert.equalsStrictly(false, isTargetObjectArray(()=>{},            Error, String, Number, Boolean, RegExp, Symbol, Set, Map, Array));
    Assert.equalsStrictly(false, isTargetObjectArray(new ParameterError('测试'), Error, ParameterError));
    Assert.equalsStrictly(false, isTargetObjectArray({a:1, b:2, c:3},    Error, Object));
    Assert.equalsStrictly(false, isTargetObjectArray(new Set(),          Error, Set));
    Assert.equalsStrictly(false, isTargetObjectArray(new Map(),          Error, Map));
    Assert.equalsStrictly(false, isTargetObjectArray([],                 Error, Array));
    // 多参数的真值判断（pArray 的元素类型，必须是 targetClass 的一个或者多个）
    // 如果 pArray 长度为0，则false
    Assert.equalsStrictly(false, isTargetObjectArray([],         Error, Number, String, Boolean));
    Assert.equalsStrictly(true, isTargetObjectArray([1,2,3],   Error, Number));
    Assert.equalsStrictly(true, isTargetObjectArray([1,'xxxx', true],   Error, Number, String, Boolean));
    Assert.equalsStrictly(true, isTargetObjectArray([1,'xxxx', true, new Error()],   Error, Number, String, Boolean));
}

function testIsTargetObject2DArray(){

    /**
     * 对于 isTargetObject2DArray 有2个参数：pArray2d 和 targetClass 。pArray2d 是一个二维数组对象。但是 targetClass 是关于“数组内部”对象类型的不定参数。
     * 这函数，判断传来的数组 是否 是二维数组，并且 全部元素 都是 targetClass 类型的 对象。
     * 如果 targetClass 没有传入，或者 它包含了一些不是类型的内容，则抛出 ParameterError 异常。
     */
    
    // ========= 抛异常测试（主要是测试 targetClass 参数，这里排除 类 和 函数，因为 目标值是类，同时函数也是类）
    Assert.throwsErrors(()=>{ isTargetObject2DArray([[1,2,3]], ); }, ParameterError);
    Assert.throwsErrors(()=>{ isTargetObject2DArray([[1,2,3]], undefined); }, ParameterError);
    Assert.throwsErrors(()=>{ isTargetObject2DArray([[1,2,3]], null); }, ParameterError);
    Assert.throwsErrors(()=>{ isTargetObject2DArray([[1,2,3]], NaN); }, ParameterError);
    Assert.throwsErrors(()=>{ isTargetObject2DArray([[1,2,3]], undefined, null, NaN); }, ParameterError);
    Assert.throwsErrors(()=>{ isTargetObject2DArray([[1,2,3]], 'xxx'); }, ParameterError);
    Assert.throwsErrors(()=>{ isTargetObject2DArray([[1,2,3]], new String('xxx')); }, ParameterError);
    Assert.throwsErrors(()=>{ isTargetObject2DArray([[1,2,3]], 123); }, ParameterError);
    Assert.throwsErrors(()=>{ isTargetObject2DArray([[1,2,3]], new Number(123)); }, ParameterError);
    Assert.throwsErrors(()=>{ isTargetObject2DArray([[1,2,3]], true); }, ParameterError);
    Assert.throwsErrors(()=>{ isTargetObject2DArray([[1,2,3]], false); }, ParameterError);
    Assert.throwsErrors(()=>{ isTargetObject2DArray([[1,2,3]], new Boolean(true)); }, ParameterError);
    Assert.throwsErrors(()=>{ isTargetObject2DArray([[1,2,3]], new Boolean(false)); }, ParameterError);
    Assert.throwsErrors(()=>{ isTargetObject2DArray([[1,2,3]], /123/); }, ParameterError);
    Assert.throwsErrors(()=>{ isTargetObject2DArray([[1,2,3]], new RegExp('123')); }, ParameterError);
    Assert.throwsErrors(()=>{ isTargetObject2DArray([[1,2,3]], Symbol.for('xxx')); }, ParameterError);
    Assert.throwsErrors(()=>{ isTargetObject2DArray([[1,2,3]], new ParameterError('异常信息对象')); }, ParameterError);
    Assert.throwsErrors(()=>{ isTargetObject2DArray([[1,2,3]], new String('ssssss')); }, ParameterError);
    Assert.throwsErrors(()=>{ isTargetObject2DArray([[1,2,3]], {a:1, b:2}); }, ParameterError);
    Assert.throwsErrors(()=>{ isTargetObject2DArray([[1,2,3]], new Set([1,2])); }, ParameterError);
    Assert.throwsErrors(()=>{ isTargetObject2DArray([[1,2,3]], new Map()); }, ParameterError);
    Assert.throwsErrors(()=>{ isTargetObject2DArray([[1,2,3]], []); }, ParameterError);
    Assert.throwsErrors(()=>{ isTargetObject2DArray([[1,2,3]], [1,2,3]); }, ParameterError);
    Assert.throwsErrors(()=>{ isTargetObject2DArray([[1,2,3]], [[]]); }, ParameterError);
    Assert.throwsErrors(()=>{ isTargetObject2DArray([[1,2,3]], [[1,2,3], [4,5,6]]); }, ParameterError);

    // ========= 正常值测试（如果 pArray2d 参数不是 二维数组 类型，则直接 false；否则，检查参数 pArray2d 中元素的类型，是否 全部元素 都是 targetClass 类型的 对象）
    Assert.equalsStrictly(false, isTargetObject2DArray(undefined, Error));
    Assert.equalsStrictly(false, isTargetObject2DArray(null, Error));
    Assert.equalsStrictly(false, isTargetObject2DArray(NaN, Error));
    Assert.equalsStrictly(false, isTargetObject2DArray('', Error));
    Assert.equalsStrictly(false, isTargetObject2DArray(new String(''), Error));
    Assert.equalsStrictly(false, isTargetObject2DArray(123, Error));
    Assert.equalsStrictly(false, isTargetObject2DArray(new Number('123'), Error));
    Assert.equalsStrictly(false, isTargetObject2DArray(true, Error));
    Assert.equalsStrictly(false, isTargetObject2DArray(false, Error));
    Assert.equalsStrictly(false, isTargetObject2DArray(new Boolean(true), Error));
    Assert.equalsStrictly(false, isTargetObject2DArray(new Boolean(false), Error));
    Assert.equalsStrictly(false, isTargetObject2DArray(/123/, Error));
    Assert.equalsStrictly(false, isTargetObject2DArray(new RegExp('123'), Error));
    Assert.equalsStrictly(false, isTargetObject2DArray(Symbol.for('uid'), Error));
    Assert.equalsStrictly(false, isTargetObject2DArray(Error, Error));
    Assert.equalsStrictly(false, isTargetObject2DArray(ParameterError, Error));
    Assert.equalsStrictly(false, isTargetObject2DArray(()=>{}, Error));
    Assert.equalsStrictly(false, isTargetObject2DArray(new ParameterError('测试'), Error));
    Assert.equalsStrictly(false, isTargetObject2DArray({a:1, b:2, c:3}, Error));
    Assert.equalsStrictly(false, isTargetObject2DArray(new Set(), Error)); 
    Assert.equalsStrictly(false, isTargetObject2DArray(new Set([new ParameterError(), 1, true]), Error));
    Assert.equalsStrictly(false, isTargetObject2DArray(new Map(), Error));
    Assert.equalsStrictly(false, isTargetObject2DArray([], Error)); // 一维数组，false
    Assert.equalsStrictly(false, isTargetObject2DArray([1,2,3], Error)); // 一维数组， false
    Assert.equalsStrictly(false, isTargetObject2DArray([new Error(), new ParameterError()], Error)); // 一维数组， false
    Assert.equalsStrictly(false, isTargetObject2DArray([[]], Error));  // 是二维数组，没有元素，false
    Assert.equalsStrictly(false, isTargetObject2DArray([[1,2,3], [4,5,6]], Error)); // 二维数组，有元素，类型不对，false
    Assert.equalsStrictly(true, isTargetObject2DArray([[new Error(), new ParameterError()]], Error));  // 是二维数组，有元素且类型正确，true

    // 第二个参数，有多个的测试（这里除了 pArray 有内容，并且内容是指定类型，才会为 true）
    Assert.equalsStrictly(false, isTargetObject2DArray(undefined,         Error, String, Number, Boolean, RegExp, Symbol, Set, Map, Array));
    Assert.equalsStrictly(false, isTargetObject2DArray(null,              Error, String, Number, Boolean, RegExp, Symbol, Set, Map, Array));
    Assert.equalsStrictly(false, isTargetObject2DArray(NaN,               Error, String, Number, Boolean, RegExp, Symbol, Set, Map, Array));
    Assert.equalsStrictly(false, isTargetObject2DArray('',                 Error, String));
    Assert.equalsStrictly(false, isTargetObject2DArray(new String(''),     Error, String));
    Assert.equalsStrictly(false, isTargetObject2DArray(123,                Error, Number));
    Assert.equalsStrictly(false, isTargetObject2DArray(new Number('123'),  Error, Number));
    Assert.equalsStrictly(false, isTargetObject2DArray(true,               Error, Boolean));
    Assert.equalsStrictly(false, isTargetObject2DArray(false,              Error, Boolean));
    Assert.equalsStrictly(false, isTargetObject2DArray(new Boolean(true),  Error, Boolean));
    Assert.equalsStrictly(false, isTargetObject2DArray(new Boolean(false), Error, Boolean));
    Assert.equalsStrictly(false, isTargetObject2DArray(/123/,              Error, RegExp));
    Assert.equalsStrictly(false, isTargetObject2DArray(new RegExp('123'),  Error, RegExp));
    Assert.equalsStrictly(false, isTargetObject2DArray(Symbol.for('uid'),  Error, Symbol));
    Assert.equalsStrictly(false, isTargetObject2DArray(Error,             Error, ParameterError));
    Assert.equalsStrictly(false, isTargetObject2DArray(ParameterError,    Error, ParameterError));
    Assert.equalsStrictly(false, isTargetObject2DArray(()=>{},            Error, String, Number, Boolean, RegExp, Symbol, Set, Map, Array));
    Assert.equalsStrictly(false, isTargetObject2DArray(new ParameterError('测试'), Error, ParameterError));
    Assert.equalsStrictly(false, isTargetObject2DArray({a:1, b:2, c:3},    Error, Object));
    Assert.equalsStrictly(false, isTargetObject2DArray(new Set(),          Error, Set));
    Assert.equalsStrictly(false, isTargetObject2DArray(new Map(),          Error, Map));
    Assert.equalsStrictly(false, isTargetObject2DArray([],                 Error, Array));
    // 多参数的真值判断（pArray2d 的元素类型，必须是 targetClass 的一个或者多个）
    // 如果 pArray2d 长度为0，则false
    Assert.equalsStrictly(false, isTargetObject2DArray([],         Error, Number, String, Boolean));
    Assert.equalsStrictly(false, isTargetObject2DArray([[]],         Error, Number, String, Boolean));
    Assert.equalsStrictly(true, isTargetObject2DArray([[1,2,3]],   Error, Number));
    Assert.equalsStrictly(true, isTargetObject2DArray([[1,'xxxx', true], [1,'xxxx', true]],   Error, Number, String, Boolean));
    Assert.equalsStrictly(true, isTargetObject2DArray([[1,'xxxx', true, new Error()], 
                                                        [1,'xxxx', true, new Error()]
                                                        ],   Error, Number, String, Boolean));
    // 这里测试二维，数据类型不全负荷，则 false
    Assert.equalsStrictly(false, isTargetObject2DArray([
                                                        [1,2,3],
                                                        [true, false, 'xxx'],
                                                        [Symbol.for('uid'), /123/] /* 这里有一个正则，但是我们不设置这个类型 */
                                                    ],         Number, Boolean, String, Symbol));
}

function testIsHtmlElement(){
    
    /**
     * isHtmlElement 只有一个入参判 object 。判断传入的对象是否为 html 元素对象。 
     * ==> 因为这个函数只判断 html 元素。所以，一般类型的参数，都是false
     * 一般来说，document.get* 和 document.query* 这些返回的都是 html 元素对象 或者 html 元素对象的一个集合类 ( HTMLCollection 或者 NodeList )
     */

    // 空
    Assert.equalsStrictly(false, isHtmlElement());
    Assert.equalsStrictly(false, isHtmlElement(undefined));
    Assert.equalsStrictly(false, isHtmlElement(null));
    Assert.equalsStrictly(false, isHtmlElement(NaN));
    // 字符串
    Assert.equalsStrictly(false, isHtmlElement(''));
    Assert.equalsStrictly(false, isHtmlElement('xxx'));
    Assert.equalsStrictly(false, isHtmlElement(new String('')));
    Assert.equalsStrictly(false, isHtmlElement(new String('aaa')));
    // 数字
    Assert.equalsStrictly(false, isHtmlElement(1));
    Assert.equalsStrictly(false, isHtmlElement(-1));
    Assert.equalsStrictly(false, isHtmlElement(new Number(1)));
    Assert.equalsStrictly(false, isHtmlElement(new Number(-1)));
    // 布尔
    Assert.equalsStrictly(false, isHtmlElement(true));
    Assert.equalsStrictly(false, isHtmlElement(false));
    Assert.equalsStrictly(false, isHtmlElement(new Boolean(true)));
    Assert.equalsStrictly(false, isHtmlElement(new Boolean(false)));
    // 正则
    Assert.equalsStrictly(false, isHtmlElement(/123/));
    Assert.equalsStrictly(false, isHtmlElement(new RegExp('123')));
    // Symbol
    Assert.equalsStrictly(false, isHtmlElement(Symbol.for('uid')));
    // 类
    Assert.equalsStrictly(false, isHtmlElement(Error)); // 在 JavaScript 中，类是特殊函数。函数也可以通过 new 处理，所以函数也是一个类
    Assert.equalsStrictly(false, isHtmlElement(ParameterError)); 
    // 函数
    Assert.equalsStrictly(false, isHtmlElement(()=>{}));
    Assert.equalsStrictly(false, isHtmlElement(function(){}));
    // 普通对象
    Assert.equalsStrictly(false, isHtmlElement(new ParameterError('异常信息对象')));
    Assert.equalsStrictly(false, isHtmlElement(new String('ssssss')));
    Assert.equalsStrictly(false, isHtmlElement({a:1, b:2})); // 对象字面量
    Assert.equalsStrictly(false, isHtmlElement(new Set([1,2]))); // set
    Assert.equalsStrictly(false, isHtmlElement(new Map())); // map
    // 数组
    Assert.equalsStrictly(false, isHtmlElement([]));
    Assert.equalsStrictly(false, isHtmlElement([1,2,3]));
    Assert.equalsStrictly(false, isHtmlElement([[]])); // 二维数组
    Assert.equalsStrictly(false, isHtmlElement([[1,2,3], [4,5,6]])); // 二维数组

    // 定义一段 html 内容，用于测试 html 元素的正确性
    let testHtmlString = `
    <div id="test1" name="testDiv">这是一个测试的 DIV 标签</div>
    <div id="test2" name="testDiv">这是一个测试的 DIV 标签 2</div>
    <div id="test3" name="testDiv">这是一个测试的 DIV 标签 3</div>
    <span id="test4" name="testSpan" >
        <input id="test5" name="testInput" type="text" value="xxxxxx"/>
    </span>
    `;
    // 用 domParser 创建一个 dom 对象 （这里的 DOMParser 是浏览器才有的。NodeJS 没有这东西 ）
    let domParser = new DOMParser();
    let htmlDocument = domParser.parseFromString(testHtmlString, 'text/html');
    // 开始 html 元素测试（这里处理2种获取方式 getElement 和 querySelector，他们的结果类型不同，但都是 html 元素）
    let test1 = htmlDocument.getElementById('test1');
    let test2 = htmlDocument.getElementById('test2');
    let test3 = htmlDocument.getElementById('test3');
    let test4 = htmlDocument.getElementById('test4');
    let test5 = htmlDocument.getElementById('test5');
    //
    let test1Q = htmlDocument.querySelector('#test1');
    let test2Q = htmlDocument.querySelector('#test2');
    let test3Q = htmlDocument.querySelector('#test3');
    let test4Q = htmlDocument.querySelector('#test4');
    let test5Q = htmlDocument.querySelector('#test5');
    // 比对结果
    Assert.equalsStrictly(true, isHtmlElement(test1));
    Assert.equalsStrictly(true, isHtmlElement(test2));
    Assert.equalsStrictly(true, isHtmlElement(test3));
    Assert.equalsStrictly(true, isHtmlElement(test4));
    Assert.equalsStrictly(true, isHtmlElement(test5));
    Assert.equalsStrictly(true, isHtmlElement(test1Q));
    Assert.equalsStrictly(true, isHtmlElement(test2Q));
    Assert.equalsStrictly(true, isHtmlElement(test3Q));
    Assert.equalsStrictly(true, isHtmlElement(test4Q));
    Assert.equalsStrictly(true, isHtmlElement(test5Q));
}

function testIsHtmlElementList(){

    /**
     * isHtmlElementList 只有一个入参判 object 。判断传入的对象是否为 html 元素 集合对象 ( HTMLCollection 或者 NodeList )
     * ==> 因为这个函数只判断 html 元素 集合对象。所以，一般类型的参数，都是false
     * 一般来说，document.get* 和 document.query* 这些返回的都是 html 元素对象 或者 html 元素对象的一个集合类 ( HTMLCollection 或者 NodeList )
     */

    // 空
    Assert.equalsStrictly(false, isHtmlElementList());
    Assert.equalsStrictly(false, isHtmlElementList(undefined));
    Assert.equalsStrictly(false, isHtmlElementList(null));
    Assert.equalsStrictly(false, isHtmlElementList(NaN));
    // 字符串
    Assert.equalsStrictly(false, isHtmlElementList(''));
    Assert.equalsStrictly(false, isHtmlElementList('xxx'));
    Assert.equalsStrictly(false, isHtmlElementList(new String('')));
    Assert.equalsStrictly(false, isHtmlElementList(new String('aaa')));
    // 数字
    Assert.equalsStrictly(false, isHtmlElementList(1));
    Assert.equalsStrictly(false, isHtmlElementList(-1));
    Assert.equalsStrictly(false, isHtmlElementList(new Number(1)));
    Assert.equalsStrictly(false, isHtmlElementList(new Number(-1)));
    // 布尔
    Assert.equalsStrictly(false, isHtmlElementList(true));
    Assert.equalsStrictly(false, isHtmlElementList(false));
    Assert.equalsStrictly(false, isHtmlElementList(new Boolean(true)));
    Assert.equalsStrictly(false, isHtmlElementList(new Boolean(false)));
    // 正则
    Assert.equalsStrictly(false, isHtmlElementList(/123/));
    Assert.equalsStrictly(false, isHtmlElementList(new RegExp('123')));
    // Symbol
    Assert.equalsStrictly(false, isHtmlElementList(Symbol.for('uid')));
    // 类
    Assert.equalsStrictly(false, isHtmlElementList(Error)); // 在 JavaScript 中，类是特殊函数。函数也可以通过 new 处理，所以函数也是一个类
    Assert.equalsStrictly(false, isHtmlElementList(ParameterError)); 
    // 函数
    Assert.equalsStrictly(false, isHtmlElementList(()=>{}));
    Assert.equalsStrictly(false, isHtmlElementList(function(){}));
    // 普通对象
    Assert.equalsStrictly(false, isHtmlElementList(new ParameterError('异常信息对象')));
    Assert.equalsStrictly(false, isHtmlElementList(new String('ssssss')));
    Assert.equalsStrictly(false, isHtmlElementList({a:1, b:2})); // 对象字面量
    Assert.equalsStrictly(false, isHtmlElementList(new Set([1,2]))); // set
    Assert.equalsStrictly(false, isHtmlElementList(new Map())); // map
    // 数组
    Assert.equalsStrictly(false, isHtmlElementList([]));
    Assert.equalsStrictly(false, isHtmlElementList([1,2,3]));
    Assert.equalsStrictly(false, isHtmlElementList([[]])); // 二维数组
    Assert.equalsStrictly(false, isHtmlElementList([[1,2,3], [4,5,6]])); // 二维数组

    // 定义一段 html 内容，用于测试 html 元素的正确性
    let testHtmlString = `
    <div id="test1" name="testDiv">这是一个测试的 DIV 标签</div>
    <div id="test2" name="testDiv">这是一个测试的 DIV 标签 2</div>
    <div id="test3" name="testDiv">这是一个测试的 DIV 标签 3</div>
    <span id="test4" name="testSpan" >
        <input id="test5" name="testInput" type="text" value="xxxxxx"/>
    </span>
    `;
    // 用 domParser 创建一个 dom 对象 （这里的 DOMParser 是浏览器才有的。NodeJS 没有这东西 ）
    let domParser = new DOMParser();
    let htmlDocument = domParser.parseFromString(testHtmlString, 'text/html');

    // 首先是单个 html 元素，应该全是 false。因为这里是判断元素集合，不是单个元素
    let test1 = htmlDocument.getElementById('test1');
    let test2 = htmlDocument.getElementById('test2');
    let test3 = htmlDocument.getElementById('test3');
    let test4 = htmlDocument.getElementById('test4');
    let test5 = htmlDocument.getElementById('test5');
    //
    let test1Q = htmlDocument.querySelector('#test1');
    let test2Q = htmlDocument.querySelector('#test2');
    let test3Q = htmlDocument.querySelector('#test3');
    let test4Q = htmlDocument.querySelector('#test4');
    let test5Q = htmlDocument.querySelector('#test5');
    // 比对结果
    Assert.equalsStrictly(false, isHtmlElementList(test1));
    Assert.equalsStrictly(false, isHtmlElementList(test2));
    Assert.equalsStrictly(false, isHtmlElementList(test3));
    Assert.equalsStrictly(false, isHtmlElementList(test4));
    Assert.equalsStrictly(false, isHtmlElementList(test5));
    Assert.equalsStrictly(false, isHtmlElementList(test1Q));
    Assert.equalsStrictly(false, isHtmlElementList(test2Q));
    Assert.equalsStrictly(false, isHtmlElementList(test3Q));
    Assert.equalsStrictly(false, isHtmlElementList(test4Q));
    Assert.equalsStrictly(false, isHtmlElementList(test5Q));

    // 然后判断 html 元素集合对象(NodeList 或者 HTMLCollection)。
    let testDiv = htmlDocument.getElementsByName('testDiv');
    let testSpan = htmlDocument.getElementsByName('testSpan');
    let testDivQ = htmlDocument.querySelectorAll('div[name="testDiv"]');
    let testSpanQ = htmlDocument.querySelectorAll('span[name="testSpan"]');
    let testCollection = htmlDocument.getElementsByTagName('div');
    let notExists = htmlDocument.getElementsByTagName('button'); // 不存在的话，也是html元素集合，只不过长度是0
    // 比对结果
    Assert.equalsStrictly(true, isHtmlElementList(testDiv));
    Assert.equalsStrictly(true, isHtmlElementList(testSpan));
    Assert.equalsStrictly(true, isHtmlElementList(testDivQ));
    Assert.equalsStrictly(true, isHtmlElementList(testSpanQ));
    Assert.equalsStrictly(true, isHtmlElementList(testCollection));
    Assert.equalsStrictly(true, isHtmlElementList(notExists));
}

function testIsArray(){
    // 参数测试
    Assert.equalsStrictly(false, isArray(undefined));
    Assert.equalsStrictly(false, isArray(null));
    Assert.equalsStrictly(false, isArray(NaN));
    Assert.equalsStrictly(false, isArray(''));
    Assert.equalsStrictly(false, isArray('sss'));
    Assert.equalsStrictly(false, isArray(new String('')));
    Assert.equalsStrictly(false, isArray(new String('sss')));
    Assert.equalsStrictly(false, isArray(123));
    Assert.equalsStrictly(false, isArray(-1));
    Assert.equalsStrictly(false, isArray(new Number(123)));
    Assert.equalsStrictly(false, isArray(new Number(-1)));
    Assert.equalsStrictly(false, isArray(true));
    Assert.equalsStrictly(false, isArray(false));
    Assert.equalsStrictly(false, isArray(new Boolean(true)));
    Assert.equalsStrictly(false, isArray(new Boolean(false)));
    Assert.equalsStrictly(false, isArray(Symbol('uid')));
    Assert.equalsStrictly(false, isArray(Symbol.for('uid')));
    Assert.equalsStrictly(false, isArray(Error));
    Assert.equalsStrictly(false, isArray(ObjectLiteral));
    Assert.equalsStrictly(false, isArray(testIsArray));
    Assert.equalsStrictly(false, isArray(function(){}));
    Assert.equalsStrictly(false, isArray(()=>{}));
    Assert.equalsStrictly(true, isArray([]));
    Assert.equalsStrictly(true, isArray([1,2,3]));
    Assert.equalsStrictly(true, isArray([[]]));
    Assert.equalsStrictly(true, isArray([[1,2,3],[4,5,6]]));
    Assert.equalsStrictly(true, isArray([[1,2,3],[4,5,6], true, 123]));
    Assert.equalsStrictly(false, isArray(new Map()));
    Assert.equalsStrictly(false, isArray(new Map([['a',1],['b', 2]])));
    Assert.equalsStrictly(false, isArray(new Set()));
    Assert.equalsStrictly(false, isArray(new Set([1,2,3])));
    Assert.equalsStrictly(false, isArray(/123/));
    Assert.equalsStrictly(false, isArray(new RegExp('123')));
    Assert.equalsStrictly(false, isArray({}));
    Assert.equalsStrictly(false, isArray({a:1, b:2}));
    Assert.equalsStrictly(false, isArray(new Object()));
}

function testIsEmptyArray(){
    // 参数测试
    Assert.equalsStrictly(false, isEmptyArray(undefined));
    Assert.equalsStrictly(false, isEmptyArray(null));
    Assert.equalsStrictly(false, isEmptyArray(NaN));
    Assert.equalsStrictly(false, isEmptyArray(''));
    Assert.equalsStrictly(false, isEmptyArray('sss'));
    Assert.equalsStrictly(false, isEmptyArray(new String('')));
    Assert.equalsStrictly(false, isEmptyArray(new String('sss')));
    Assert.equalsStrictly(false, isEmptyArray(123));
    Assert.equalsStrictly(false, isEmptyArray(-1));
    Assert.equalsStrictly(false, isEmptyArray(new Number(123)));
    Assert.equalsStrictly(false, isEmptyArray(new Number(-1)));
    Assert.equalsStrictly(false, isEmptyArray(true));
    Assert.equalsStrictly(false, isEmptyArray(false));
    Assert.equalsStrictly(false, isEmptyArray(new Boolean(true)));
    Assert.equalsStrictly(false, isEmptyArray(new Boolean(false)));
    Assert.equalsStrictly(false, isEmptyArray(Symbol('uid')));
    Assert.equalsStrictly(false, isEmptyArray(Symbol.for('uid')));
    Assert.equalsStrictly(false, isEmptyArray(Error));
    Assert.equalsStrictly(false, isEmptyArray(ObjectLiteral));
    Assert.equalsStrictly(false, isEmptyArray(testIsArray));
    Assert.equalsStrictly(false, isEmptyArray(function(){}));
    Assert.equalsStrictly(false, isEmptyArray(()=>{}));
    Assert.equalsStrictly(true, isEmptyArray([]));
    Assert.equalsStrictly(false, isEmptyArray([1,2,3]));
    Assert.equalsStrictly(false, isEmptyArray([[]]));
    Assert.equalsStrictly(false, isEmptyArray([[1,2,3],[4,5,6]]));
    Assert.equalsStrictly(false, isEmptyArray(new Map()));
    Assert.equalsStrictly(false, isEmptyArray(new Map([['a',1],['b', 2]])));
    Assert.equalsStrictly(false, isEmptyArray(new Set()));
    Assert.equalsStrictly(false, isEmptyArray(new Set([1,2,3])));
    Assert.equalsStrictly(false, isEmptyArray(/123/));
    Assert.equalsStrictly(false, isEmptyArray(new RegExp('123')));
    Assert.equalsStrictly(false, isEmptyArray({}));
    Assert.equalsStrictly(false, isEmptyArray({a:1, b:2}));
    Assert.equalsStrictly(false, isEmptyArray(new Object()));
}

function testIs2DArray(){
    // 参数测试
    Assert.equalsStrictly(false, is2DArray(undefined));
    Assert.equalsStrictly(false, is2DArray(null));
    Assert.equalsStrictly(false, is2DArray(NaN));
    Assert.equalsStrictly(false, is2DArray(''));
    Assert.equalsStrictly(false, is2DArray('sss'));
    Assert.equalsStrictly(false, is2DArray(new String('')));
    Assert.equalsStrictly(false, is2DArray(new String('sss')));
    Assert.equalsStrictly(false, is2DArray(123));
    Assert.equalsStrictly(false, is2DArray(-1));
    Assert.equalsStrictly(false, is2DArray(new Number(123)));
    Assert.equalsStrictly(false, is2DArray(new Number(-1)));
    Assert.equalsStrictly(false, is2DArray(true));
    Assert.equalsStrictly(false, is2DArray(false));
    Assert.equalsStrictly(false, is2DArray(new Boolean(true)));
    Assert.equalsStrictly(false, is2DArray(new Boolean(false)));
    Assert.equalsStrictly(false, is2DArray(Symbol('uid')));
    Assert.equalsStrictly(false, is2DArray(Symbol.for('uid')));
    Assert.equalsStrictly(false, is2DArray(Error));
    Assert.equalsStrictly(false, is2DArray(ObjectLiteral));
    Assert.equalsStrictly(false, is2DArray(testIsArray));
    Assert.equalsStrictly(false, is2DArray(function(){}));
    Assert.equalsStrictly(false, is2DArray(()=>{}));
    Assert.equalsStrictly(false, is2DArray([]));
    Assert.equalsStrictly(false, is2DArray([1,2,3]));
    Assert.equalsStrictly(true, is2DArray([[]]));
    Assert.equalsStrictly(true, is2DArray([[], [4,5,6]]));
    Assert.equalsStrictly(false, is2DArray([ , [4,5,6]]));
    Assert.equalsStrictly(true, is2DArray([[1,2,3],[4,5,6]]));
    Assert.equalsStrictly(false, is2DArray([[1,2,3],[4,5,6], true, 123]));
    Assert.equalsStrictly(false, is2DArray(new Map()));
    Assert.equalsStrictly(false, is2DArray(new Map([['a',1],['b', 2]])));
    Assert.equalsStrictly(false, is2DArray(new Set()));
    Assert.equalsStrictly(false, is2DArray(new Set([1,2,3])));
    Assert.equalsStrictly(false, is2DArray(/123/));
    Assert.equalsStrictly(false, is2DArray(new RegExp('123')));
    Assert.equalsStrictly(false, is2DArray({}));
    Assert.equalsStrictly(false, is2DArray({a:1, b:2}));
    Assert.equalsStrictly(false, is2DArray(new Object()));
}

function testIsEmpty2DArray(){
    // 参数测试
    Assert.equalsStrictly(false, isEmpty2DArray(undefined));
    Assert.equalsStrictly(false, isEmpty2DArray(null));
    Assert.equalsStrictly(false, isEmpty2DArray(NaN));
    Assert.equalsStrictly(false, isEmpty2DArray(''));
    Assert.equalsStrictly(false, isEmpty2DArray('sss'));
    Assert.equalsStrictly(false, isEmpty2DArray(new String('')));
    Assert.equalsStrictly(false, isEmpty2DArray(new String('sss')));
    Assert.equalsStrictly(false, isEmpty2DArray(123));
    Assert.equalsStrictly(false, isEmpty2DArray(-1));
    Assert.equalsStrictly(false, isEmpty2DArray(new Number(123)));
    Assert.equalsStrictly(false, isEmpty2DArray(new Number(-1)));
    Assert.equalsStrictly(false, isEmpty2DArray(true));
    Assert.equalsStrictly(false, isEmpty2DArray(false));
    Assert.equalsStrictly(false, isEmpty2DArray(new Boolean(true)));
    Assert.equalsStrictly(false, isEmpty2DArray(new Boolean(false)));
    Assert.equalsStrictly(false, isEmpty2DArray(Symbol('uid')));
    Assert.equalsStrictly(false, isEmpty2DArray(Symbol.for('uid')));
    Assert.equalsStrictly(false, isEmpty2DArray(Error));
    Assert.equalsStrictly(false, isEmpty2DArray(ObjectLiteral));
    Assert.equalsStrictly(false, isEmpty2DArray(testIsArray));
    Assert.equalsStrictly(false, isEmpty2DArray(function(){}));
    Assert.equalsStrictly(false, isEmpty2DArray(()=>{}));
    Assert.equalsStrictly(false, isEmpty2DArray([]));
    Assert.equalsStrictly(false, isEmpty2DArray([1,2,3]));
    Assert.equalsStrictly(true, isEmpty2DArray([[]]));
    Assert.equalsStrictly(false, isEmpty2DArray([[], [4,5,6]]));
    Assert.equalsStrictly(false, isEmpty2DArray([ , [4,5,6]]));
    Assert.equalsStrictly(false, isEmpty2DArray([[1,2,3],[4,5,6]]));
    Assert.equalsStrictly(false, isEmpty2DArray([[1,2,3],[4,5,6], true, 123]));
    Assert.equalsStrictly(false, isEmpty2DArray(new Map()));
    Assert.equalsStrictly(false, isEmpty2DArray(new Map([['a',1],['b', 2]])));
    Assert.equalsStrictly(false, isEmpty2DArray(new Set()));
    Assert.equalsStrictly(false, isEmpty2DArray(new Set([1,2,3])));
    Assert.equalsStrictly(false, isEmpty2DArray(/123/));
    Assert.equalsStrictly(false, isEmpty2DArray(new RegExp('123')));
    Assert.equalsStrictly(false, isEmpty2DArray({}));
    Assert.equalsStrictly(false, isEmpty2DArray({a:1, b:2}));
    Assert.equalsStrictly(false, isEmpty2DArray(new Object()));
}

function testIsSet(){
    // 参数测试
    Assert.equalsStrictly(false, isSet(undefined));
    Assert.equalsStrictly(false, isSet(null));
    Assert.equalsStrictly(false, isSet(NaN));
    Assert.equalsStrictly(false, isSet(''));
    Assert.equalsStrictly(false, isSet('sss'));
    Assert.equalsStrictly(false, isSet(new String('')));
    Assert.equalsStrictly(false, isSet(new String('sss')));
    Assert.equalsStrictly(false, isSet(123));
    Assert.equalsStrictly(false, isSet(-1));
    Assert.equalsStrictly(false, isSet(new Number(123)));
    Assert.equalsStrictly(false, isSet(new Number(-1)));
    Assert.equalsStrictly(false, isSet(true));
    Assert.equalsStrictly(false, isSet(false));
    Assert.equalsStrictly(false, isSet(new Boolean(true)));
    Assert.equalsStrictly(false, isSet(new Boolean(false)));
    Assert.equalsStrictly(false, isSet(Symbol('uid')));
    Assert.equalsStrictly(false, isSet(Symbol.for('uid')));
    Assert.equalsStrictly(false, isSet(Error));
    Assert.equalsStrictly(false, isSet(ObjectLiteral));
    Assert.equalsStrictly(false, isSet(testIsArray));
    Assert.equalsStrictly(false, isSet(function(){}));
    Assert.equalsStrictly(false, isSet(()=>{}));
    Assert.equalsStrictly(false, isSet([]));
    Assert.equalsStrictly(false, isSet([1,2,3]));
    Assert.equalsStrictly(false, isSet([[]]));
    Assert.equalsStrictly(false, isSet([[1,2,3],[4,5,6]]));
    Assert.equalsStrictly(false, isSet([[1,2,3],[4,5,6], true, 123]));
    Assert.equalsStrictly(false, isSet(new Map()));
    Assert.equalsStrictly(false, isSet(new Map([['a',1],['b', 2]])));
    Assert.equalsStrictly(true, isSet(new Set()));
    Assert.equalsStrictly(true, isSet(new Set([1,2,3])));
    Assert.equalsStrictly(false, isSet(/123/));
    Assert.equalsStrictly(false, isSet(new RegExp('123')));
    Assert.equalsStrictly(false, isSet({}));
    Assert.equalsStrictly(false, isSet({a:1, b:2}));
    Assert.equalsStrictly(false, isSet(new Object()));
}

function testIsEmptySet(){
    // 参数测试
    Assert.equalsStrictly(false, isEmptySet(undefined));
    Assert.equalsStrictly(false, isEmptySet(null));
    Assert.equalsStrictly(false, isEmptySet(NaN));
    Assert.equalsStrictly(false, isEmptySet(''));
    Assert.equalsStrictly(false, isEmptySet('sss'));
    Assert.equalsStrictly(false, isEmptySet(new String('')));
    Assert.equalsStrictly(false, isEmptySet(new String('sss')));
    Assert.equalsStrictly(false, isEmptySet(123));
    Assert.equalsStrictly(false, isEmptySet(-1));
    Assert.equalsStrictly(false, isEmptySet(new Number(123)));
    Assert.equalsStrictly(false, isEmptySet(new Number(-1)));
    Assert.equalsStrictly(false, isEmptySet(true));
    Assert.equalsStrictly(false, isEmptySet(false));
    Assert.equalsStrictly(false, isEmptySet(new Boolean(true)));
    Assert.equalsStrictly(false, isEmptySet(new Boolean(false)));
    Assert.equalsStrictly(false, isEmptySet(Symbol('uid')));
    Assert.equalsStrictly(false, isEmptySet(Symbol.for('uid')));
    Assert.equalsStrictly(false, isEmptySet(Error));
    Assert.equalsStrictly(false, isEmptySet(ObjectLiteral));
    Assert.equalsStrictly(false, isEmptySet(testIsArray));
    Assert.equalsStrictly(false, isEmptySet(function(){}));
    Assert.equalsStrictly(false, isEmptySet(()=>{}));
    Assert.equalsStrictly(false, isEmptySet([]));
    Assert.equalsStrictly(false, isEmptySet([1,2,3]));
    Assert.equalsStrictly(false, isEmptySet([[]]));
    Assert.equalsStrictly(false, isEmptySet([[1,2,3],[4,5,6]]));
    Assert.equalsStrictly(false, isEmptySet([[1,2,3],[4,5,6], true, 123]));
    Assert.equalsStrictly(false, isEmptySet(new Map()));
    Assert.equalsStrictly(false, isEmptySet(new Map([['a',1],['b', 2]])));
    Assert.equalsStrictly(true, isEmptySet(new Set()));
    Assert.equalsStrictly(false, isEmptySet(new Set([1,2,3])));
    Assert.equalsStrictly(false, isEmptySet(/123/));
    Assert.equalsStrictly(false, isEmptySet(new RegExp('123')));
    Assert.equalsStrictly(false, isEmptySet({}));
    Assert.equalsStrictly(false, isEmptySet({a:1, b:2}));
    Assert.equalsStrictly(false, isEmptySet(new Object()));
}

function testIsMap(){
    // 参数测试
    Assert.equalsStrictly(false, isMap(undefined));
    Assert.equalsStrictly(false, isMap(null));
    Assert.equalsStrictly(false, isMap(NaN));
    Assert.equalsStrictly(false, isMap(''));
    Assert.equalsStrictly(false, isMap('sss'));
    Assert.equalsStrictly(false, isMap(new String('')));
    Assert.equalsStrictly(false, isMap(new String('sss')));
    Assert.equalsStrictly(false, isMap(123));
    Assert.equalsStrictly(false, isMap(-1));
    Assert.equalsStrictly(false, isMap(new Number(123)));
    Assert.equalsStrictly(false, isMap(new Number(-1)));
    Assert.equalsStrictly(false, isMap(true));
    Assert.equalsStrictly(false, isMap(false));
    Assert.equalsStrictly(false, isMap(new Boolean(true)));
    Assert.equalsStrictly(false, isMap(new Boolean(false)));
    Assert.equalsStrictly(false, isMap(Symbol('uid')));
    Assert.equalsStrictly(false, isMap(Symbol.for('uid')));
    Assert.equalsStrictly(false, isMap(Error));
    Assert.equalsStrictly(false, isMap(ObjectLiteral));
    Assert.equalsStrictly(false, isMap(testIsArray));
    Assert.equalsStrictly(false, isMap(function(){}));
    Assert.equalsStrictly(false, isMap(()=>{}));
    Assert.equalsStrictly(false, isMap([]));
    Assert.equalsStrictly(false, isMap([1,2,3]));
    Assert.equalsStrictly(false, isMap([[]]));
    Assert.equalsStrictly(false, isMap([[1,2,3],[4,5,6]]));
    Assert.equalsStrictly(false, isMap([[1,2,3],[4,5,6], true, 123]));
    Assert.equalsStrictly(true, isMap(new Map()));
    Assert.equalsStrictly(true, isMap(new Map([['a',1],['b', 2]])));
    Assert.equalsStrictly(false, isMap(new Set()));
    Assert.equalsStrictly(false, isMap(new Set([1,2,3])));
    Assert.equalsStrictly(false, isMap(/123/));
    Assert.equalsStrictly(false, isMap(new RegExp('123')));
    Assert.equalsStrictly(false, isMap({}));
    Assert.equalsStrictly(false, isMap({a:1, b:2}));
    Assert.equalsStrictly(false, isMap(new Object()));
}

function testIsEmptyMap(){
    // 参数测试
    Assert.equalsStrictly(false, isEmptyMap(undefined));
    Assert.equalsStrictly(false, isEmptyMap(null));
    Assert.equalsStrictly(false, isEmptyMap(NaN));
    Assert.equalsStrictly(false, isEmptyMap(''));
    Assert.equalsStrictly(false, isEmptyMap('sss'));
    Assert.equalsStrictly(false, isEmptyMap(new String('')));
    Assert.equalsStrictly(false, isEmptyMap(new String('sss')));
    Assert.equalsStrictly(false, isEmptyMap(123));
    Assert.equalsStrictly(false, isEmptyMap(-1));
    Assert.equalsStrictly(false, isEmptyMap(new Number(123)));
    Assert.equalsStrictly(false, isEmptyMap(new Number(-1)));
    Assert.equalsStrictly(false, isEmptyMap(true));
    Assert.equalsStrictly(false, isEmptyMap(false));
    Assert.equalsStrictly(false, isEmptyMap(new Boolean(true)));
    Assert.equalsStrictly(false, isEmptyMap(new Boolean(false)));
    Assert.equalsStrictly(false, isEmptyMap(Symbol('uid')));
    Assert.equalsStrictly(false, isEmptyMap(Symbol.for('uid')));
    Assert.equalsStrictly(false, isEmptyMap(Error));
    Assert.equalsStrictly(false, isEmptyMap(ObjectLiteral));
    Assert.equalsStrictly(false, isEmptyMap(testIsArray));
    Assert.equalsStrictly(false, isEmptyMap(function(){}));
    Assert.equalsStrictly(false, isEmptyMap(()=>{}));
    Assert.equalsStrictly(false, isEmptyMap([]));
    Assert.equalsStrictly(false, isEmptyMap([1,2,3]));
    Assert.equalsStrictly(false, isEmptyMap([[]]));
    Assert.equalsStrictly(false, isEmptyMap([[1,2,3],[4,5,6]]));
    Assert.equalsStrictly(false, isEmptyMap([[1,2,3],[4,5,6], true, 123]));
    Assert.equalsStrictly(true, isEmptyMap(new Map()));
    Assert.equalsStrictly(false, isEmptyMap(new Map([['a',1],['b', 2]])));
    Assert.equalsStrictly(false, isEmptyMap(new Set()));
    Assert.equalsStrictly(false, isEmptyMap(new Set([1,2,3])));
    Assert.equalsStrictly(false, isEmptyMap(/123/));
    Assert.equalsStrictly(false, isEmptyMap(new RegExp('123')));
    Assert.equalsStrictly(false, isEmptyMap({}));
    Assert.equalsStrictly(false, isEmptyMap({a:1, b:2}));
    Assert.equalsStrictly(false, isEmptyMap(new Object()));
}

// =============== 导出测试函数，用于测试结果显示

export {
    testIsFunction, testIsClass, testIsTargetClass, testIsObject, testIsObjectLiteral,
    testIsTargetObject, testIsTargetObjectSet, testIsTargetObjectArray, testIsTargetObject2DArray,
    testIsHtmlElement, testIsHtmlElementList,

    testIsArray, testIsEmptyArray, testIs2DArray, testIsEmpty2DArray,
    testIsSet, testIsEmptySet, testIsMap, testIsEmptyMap
}