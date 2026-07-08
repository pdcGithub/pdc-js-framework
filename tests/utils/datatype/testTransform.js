/**
 * In my license, all codes can be shared free of charge. 
 * However, If my code is taken for commercial use, please maintain it yourself. 
 * I am not obligated to take responsibility for your business application.
 * Here is my email "pangdongcan@live.com"
 * 
 * Copyright © 2026 Micheal Pang. All rights reserved.
 * 
 * @file This file "testTransform.js" is part of project "pdc-js-framework" , which is belong to Michael Pang (It's Me).
 * @author  Micheal Pang (Dongcan Pang)
 * @since  2026-06-10
 * @description  这是关于 utils/datatype/transform.js 模块的测试。transform.js 是 datatype.js 模块的子模块
 */
"use strict"; // 这是严格模式下的 Javascript 代码

// =============== 导入要测试的函数

import {
    objToMap, genMap, copyObject, mergeObject, mergeObjectIgnoreCase, TO_LOWERCASE, TO_UPPERCASE,
    htmlElementListToArray
} from "../../../utils/datatype/transform.js";

// =============== 导入测试工具包
import { Assert } from "../../testTools.js";

// =============== 导入要处理的异常类
import { ParameterError } from "../../../models/errors.js";

// =============== 开始测试

// 在我的框架中， js 的数据类型中主要有以下几种：
// ===> 空（undefined\null\NaN）、字符串（基础+对象）、数字（基础+对象）、布尔（基础+对象）、正则、Symbol、类、函数、普通对象、数组

function testToLowerCase(){
    /**
     * 这是一个常量，直接做等值判断即可
     */
    Assert.equalsStrictly('LOWER', TO_LOWERCASE);
}

function testToUpperCase(){
    /**
     * 这是一个常量，直接做等值判断即可
     */
    Assert.equalsStrictly('UPPER', TO_UPPERCASE);
}

function testObjToMap(){

    // ======== 这里有3个参数：object 对象, canKeyBeEmpty 布尔值, canValueBeFunction 布尔值

    // 这里先做一个 抛异常测试。
    // 第一个参数
    Assert.throwsErrors(()=>{ objToMap(undefined, true, true) }, ParameterError);
    Assert.throwsErrors(()=>{ objToMap(null, true, true) }, ParameterError);
    Assert.throwsErrors(()=>{ objToMap(NaN, true, true) }, ParameterError);
    Assert.throwsErrors(()=>{ objToMap('', true, true) }, ParameterError);
    Assert.throwsErrors(()=>{ objToMap('xxxx', true, true) }, ParameterError);
    Assert.throwsErrors(()=>{ objToMap(123, true, true) }, ParameterError);
    Assert.throwsErrors(()=>{ objToMap(1.222, true, true) }, ParameterError);
    Assert.throwsErrors(()=>{ objToMap(true, true, true) }, ParameterError);
    Assert.throwsErrors(()=>{ objToMap(false, true, true) }, ParameterError);
    Assert.throwsErrors(()=>{ objToMap(Symbol.for('uid'), true, true) }, ParameterError);
    Assert.throwsErrors(()=>{ objToMap(ParameterError, true, true) }, ParameterError);
    Assert.throwsErrors(()=>{ objToMap(()=>{}, true, true) }, ParameterError);
    Assert.throwsErrors(()=>{ objToMap([123,345,666], true, true) }, ParameterError);
    // 第二个参数（因为有默认值，所以 undefine 时会设置默认值为入参）
    Assert.throwsErrors(()=>{ objToMap({a:1, b:2}, null, true) }, ParameterError);
    Assert.throwsErrors(()=>{ objToMap({a:1, b:2}, NaN, true) }, ParameterError);
    Assert.throwsErrors(()=>{ objToMap({a:1, b:2}, '', true) }, ParameterError);
    Assert.throwsErrors(()=>{ objToMap({a:1, b:2}, 'xxx', true) }, ParameterError);
    Assert.throwsErrors(()=>{ objToMap({a:1, b:2}, new String(''), true) }, ParameterError);
    Assert.throwsErrors(()=>{ objToMap({a:1, b:2}, new String('xxx'), true) }, ParameterError);
    Assert.throwsErrors(()=>{ objToMap({a:1, b:2}, 123, true) }, ParameterError);
    Assert.throwsErrors(()=>{ objToMap({a:1, b:2}, 4.56, true) }, ParameterError);
    Assert.throwsErrors(()=>{ objToMap({a:1, b:2}, new Number(123), true) }, ParameterError);
    Assert.throwsErrors(()=>{ objToMap({a:1, b:2}, new Number(4.56), true) }, ParameterError);
    Assert.throwsErrors(()=>{ objToMap({a:1, b:2}, /123/, true) }, ParameterError);
    Assert.throwsErrors(()=>{ objToMap({a:1, b:2}, new RegExp('123'), true) }, ParameterError);
    Assert.throwsErrors(()=>{ objToMap({a:1, b:2}, Symbol.for('uid'), true) }, ParameterError);
    Assert.throwsErrors(()=>{ objToMap({a:1, b:2}, ParameterError, true) }, ParameterError);
    Assert.throwsErrors(()=>{ objToMap({a:1, b:2}, ()=>{}, true) }, ParameterError);
    Assert.throwsErrors(()=>{ objToMap({a:1, b:2}, new Error(), true) }, ParameterError);
    Assert.throwsErrors(()=>{ objToMap({a:1, b:2}, {c:3, d:4}, true) }, ParameterError);
    Assert.throwsErrors(()=>{ objToMap({a:1, b:2}, new Set(), true) }, ParameterError);
    Assert.throwsErrors(()=>{ objToMap({a:1, b:2}, new Map(), true) }, ParameterError);
    Assert.throwsErrors(()=>{ objToMap({a:1, b:2}, [], true) }, ParameterError);
    // 第三个参数（因为有默认值，所以 undefine 时会设置默认值为入参）
    Assert.throwsErrors(()=>{ objToMap({a:1, b:2}, true, null) }, ParameterError);
    Assert.throwsErrors(()=>{ objToMap({a:1, b:2}, true, NaN) }, ParameterError);
    Assert.throwsErrors(()=>{ objToMap({a:1, b:2}, true, '') }, ParameterError);
    Assert.throwsErrors(()=>{ objToMap({a:1, b:2}, true, 'xxx') }, ParameterError);
    Assert.throwsErrors(()=>{ objToMap({a:1, b:2}, true, new String('')) }, ParameterError);
    Assert.throwsErrors(()=>{ objToMap({a:1, b:2}, true, new String('xxx')) }, ParameterError);
    Assert.throwsErrors(()=>{ objToMap({a:1, b:2}, true, 123) }, ParameterError);
    Assert.throwsErrors(()=>{ objToMap({a:1, b:2}, true, 4.56) }, ParameterError);
    Assert.throwsErrors(()=>{ objToMap({a:1, b:2}, true, new Number(123)) }, ParameterError);
    Assert.throwsErrors(()=>{ objToMap({a:1, b:2}, true, new Number(4.56)) }, ParameterError);
    Assert.throwsErrors(()=>{ objToMap({a:1, b:2}, true, /123/) }, ParameterError);
    Assert.throwsErrors(()=>{ objToMap({a:1, b:2}, true, new RegExp('123')) }, ParameterError);
    Assert.throwsErrors(()=>{ objToMap({a:1, b:2}, true, Symbol.for('uid')) }, ParameterError);
    Assert.throwsErrors(()=>{ objToMap({a:1, b:2}, true, ParameterError) }, ParameterError);
    Assert.throwsErrors(()=>{ objToMap({a:1, b:2}, true, ()=>{}) }, ParameterError);
    Assert.throwsErrors(()=>{ objToMap({a:1, b:2}, true, new Error()) }, ParameterError);
    Assert.throwsErrors(()=>{ objToMap({a:1, b:2}, true, {c:3, d:4}) }, ParameterError);
    Assert.throwsErrors(()=>{ objToMap({a:1, b:2}, true, new Set()) }, ParameterError);
    Assert.throwsErrors(()=>{ objToMap({a:1, b:2}, true, new Map()) }, ParameterError);
    Assert.throwsErrors(()=>{ objToMap({a:1, b:2}, true, []) }, ParameterError);

    // 下面是正常值，不抛异常的测试。主要比对结果是否正确。
    // 函数的功能是 将一个对象的键值对，转换为一个 Map 对象。
    // ==> 有2个正则配置：
    //                  canKeyBeEmpty — 键信息，能否为空字符串。默认是 true
    //                  canValueBeFunction — 值信息，能否为函数。默认是 false
    
    // 定义一个测试用的对象（对象的键信息，对象键本质支持 String 和 Symbol，其他类型会被强制转成字符串。）
    let oriFunc= ()=>{return 'c is ok.'};
    let oriObj = {
        a:1, 
        b:2, 
        c:oriFunc, 
        'AAA':true, 
        '': 'is empty.',
        'testSymbol':Symbol.for('uvalue'), 
        eee: new Set(),
        fff: new ParameterError(),
        [Symbol.for('uid1')] : 'test uid',
        [Symbol.for('uid2')] : Symbol.for('uid2 value')
    };

    // 如果对象包含 Symbol 键，则会被过滤。因为 Object.keys 方法 不包含 Symbol 属性。转换后，它的键和值，都是字符串。
    // 开始对象转为 map,   canKeyBeEmpty 默认是 true   canValueBeFunction 默认是 false
    let map0 = objToMap(oriObj);
    let map1 = objToMap(oriObj, true, true);
    let map2 = objToMap(oriObj, true, false); // 等于默认
    let map3 = objToMap(oriObj, false, true);
    let map4 = objToMap(oriObj, false, false);
    /*
    new Map([['a', '1'], ['b','2'], ['c', oriFunc], 
            ['AAA', 'true'], ['', 'is empty.'], ['testSymbol', 'Symbol(uvalue)'], 
            ['eee', '[object Set]'], ['fff', 'ParameterError']
        ]); 
    */
    let map0Expected = new Map([['a', '1'], ['b','2'],
                                ['AAA', 'true'], ['', 'is empty.'], ['testSymbol', 'Symbol(uvalue)'], 
                                ['eee', '[object Set]'], ['fff', 'ParameterError']
                            ]);
    let map1Excepted = new Map([['a', '1'], ['b','2'], ['c', oriFunc], 
                                ['AAA', 'true'], ['', 'is empty.'], ['testSymbol', 'Symbol(uvalue)'], 
                                ['eee', '[object Set]'], ['fff', 'ParameterError']
                            ]); 
    let map2Excepted = new Map([['a', '1'], ['b','2'],
                                ['AAA', 'true'], ['', 'is empty.'], ['testSymbol', 'Symbol(uvalue)'], 
                                ['eee', '[object Set]'], ['fff', 'ParameterError']
                            ]);
    let map3Excepted = new Map([['a', '1'], ['b','2'], ['c', oriFunc], 
                                ['AAA', 'true'], ['testSymbol', 'Symbol(uvalue)'], 
                                ['eee', '[object Set]'], ['fff', 'ParameterError']
                            ]); 
    let map4Excepted = new Map([['a', '1'], ['b','2'], 
                                ['AAA', 'true'], ['testSymbol', 'Symbol(uvalue)'], 
                                ['eee', '[object Set]'], ['fff', 'ParameterError']
                            ]);
    // 对比（因为转换后，键和值都是字符串，要注意对象的输出格式）
    Assert.mapEquals(map0Expected, map0); 
    Assert.mapEquals(map1Excepted, map1); 
    Assert.mapEquals(map2Excepted, map2); 
    Assert.mapEquals(map3Excepted, map3); 
    Assert.mapEquals(map4Excepted, map4); 
}

function testGenMap(){

    /**
     * genMap 它可以快速构建一个 Map 对象。可以没有参数。当没有参数，它会创建一个空的 Map 对象。
     * ==> params — Map 对象的内部键值对，以 key1, value1, key2, value2, ... 的方式添加，参数保持是 2 的倍数即可。
     * ==> 如果传入的参数数量 不是 2的倍数（即不是双数），则抛出 ParameterError 异常。
     */
    
    // 这里先做一个 抛异常测试。（主要是参数数量问题，数量为单数，没法构造完整的 map）
    Assert.throwsErrors(()=>{ genMap(1); }, ParameterError);
    Assert.throwsErrors(()=>{ genMap(1, 'a', '2'); }, ParameterError);
    Assert.throwsErrors(()=>{ genMap(1, 'a', '2', true, false); }, ParameterError);
    // ===> 空（undefined\null\NaN）、字符串（基础+对象）、数字（基础+对象）、布尔（基础+对象）、正则、Symbol、类、函数、普通对象、数组
    Assert.throwsErrors(()=>{ genMap(null, undefined, NaN, 
                                    'xx', new String('xx'), 
                                    123, new Number(123),
                                    true, new Boolean(true),
                                    /123/, new RegExp('123'),
                                    Symbol.for('uid'), Error, ParameterError, 
                                    testToLowerCase, {a:1}, new Set(), new Map(),
                                    [1,2,3]); }, ParameterError);

    // 然后是无异常抛出的测试。这里应该是 构建 Map 对象 （由于这里没有 递归判断对象是否等值，所以 value 不要写对象）
    Assert.mapEquals(new Map(), genMap());
    Assert.mapEquals(new Map([[1, 'a'], ['b', 2]]), genMap(1, 'a', 'b', 2));
    Assert.mapEquals(new Map(
                            [[Symbol.for('uid1'), testToLowerCase], ['uid2', 1.23456]]
                        ), 
                        genMap(Symbol.for('uid1'), testToLowerCase, 'uid2', 1.23456)
                    );
}

function testCopyObject(){

    // copyObject 复制一个相关的对象。这里是一个浅层的复制。对象内部的引用还是一样的。
    // ===> 如果参数校验不通过，会抛出 ParameterError 异常。（这里只处理 object 也就是对象，不处理基础类型）
    // ===> 空（undefined\null\NaN）、字符串（基础+对象）、数字（基础+对象）、布尔（基础+对象）、正则、Symbol、类、函数、普通对象、数组

    // 先做一个抛出测试
    Assert.throwsErrors(()=>{ copyObject(undefined); }, ParameterError);
    Assert.throwsErrors(()=>{ copyObject(null); }, ParameterError);
    Assert.throwsErrors(()=>{ copyObject(NaN); }, ParameterError);
    Assert.throwsErrors(()=>{ copyObject(''); }, ParameterError);
    Assert.throwsErrors(()=>{ copyObject(123); }, ParameterError);
    Assert.throwsErrors(()=>{ copyObject(true); }, ParameterError);
    Assert.throwsErrors(()=>{ copyObject(Symbol.for('uid')); }, ParameterError);
    Assert.throwsErrors(()=>{ copyObject(Error); }, ParameterError);
    Assert.throwsErrors(()=>{ copyObject(testCopyObject); }, ParameterError);
    
    // 这里开始测试，对象的复制（普通对象）
    let strObj = new String('name');
    let numObj = new Number(123);
    let boolObj = new Boolean(true);
    let regObj = new RegExp('123');
    let normalObj = {a:1, b:'name', func:testCopyObject};
    let nromalArr = [1,2,3];

    // 匹配复制后，是否保持一致。这里是浅层复制：对象的键 和 值。不含 prototype
    // 不管是什么对象，它复制后只保留键值对，它变成了一个 object，不再是原来对象类型。
    Assert.objectEquals(strObj, copyObject(strObj));
    Assert.objectEquals(numObj, copyObject(numObj));
    Assert.objectEquals(boolObj, copyObject(boolObj));
    Assert.objectEquals(regObj, copyObject(regObj));
    Assert.objectEquals(normalObj, copyObject(normalObj));
    Assert.objectEquals(nromalArr, copyObject(nromalArr));
}

function testMergeObject(){

    /**
     * mergeObject 这是一个可以合并对象的处理函数。这里区分键名的大小写。
     * ===> 如果参数校验不通过，会抛出 ParameterError 异常。（这里只处理 object 也就是对象，不处理基础类型）
     * ===> 空（undefined\null\NaN）、字符串（基础+对象）、数字（基础+对象）、布尔（基础+对象）、正则、Symbol、类、函数、普通对象、数组
     */

    // 先做一个抛出测试（参数有2个，第一个是 object ，第二个是 object 不定参数）
    Assert.throwsErrors(()=>{ mergeObject(undefined,    new String('测试字符串对象')); }, ParameterError);
    Assert.throwsErrors(()=>{ mergeObject(null,         new String('测试字符串对象')); }, ParameterError);
    Assert.throwsErrors(()=>{ mergeObject(NaN,          new String('测试字符串对象')); }, ParameterError);
    Assert.throwsErrors(()=>{ mergeObject('',           new String('测试字符串对象')); }, ParameterError);
    Assert.throwsErrors(()=>{ mergeObject(123,          new String('测试字符串对象')); }, ParameterError);
    Assert.throwsErrors(()=>{ mergeObject(true,         new String('测试字符串对象')); }, ParameterError);
    Assert.throwsErrors(()=>{ mergeObject(Symbol.for('uid'), new String('测试字符串对象')); }, ParameterError);
    Assert.throwsErrors(()=>{ mergeObject(Error,        new String('测试字符串对象')); }, ParameterError);
    Assert.throwsErrors(()=>{ mergeObject(testCopyObject, new String('测试字符串对象')); }, ParameterError);
    // 第二个参数 抛异常测试
    Assert.throwsErrors(()=>{ mergeObject(new String('测试字符串对象'), undefined); }, ParameterError);
    Assert.throwsErrors(()=>{ mergeObject(new String('测试字符串对象'), null); }, ParameterError);
    Assert.throwsErrors(()=>{ mergeObject(new String('测试字符串对象'), NaN); }, ParameterError);
    Assert.throwsErrors(()=>{ mergeObject(new String('测试字符串对象'), ''); }, ParameterError);
    Assert.throwsErrors(()=>{ mergeObject(new String('测试字符串对象'), 123); }, ParameterError);
    Assert.throwsErrors(()=>{ mergeObject(new String('测试字符串对象'), true); }, ParameterError);
    Assert.throwsErrors(()=>{ mergeObject(new String('测试字符串对象'), Symbol.for('uid')); }, ParameterError);
    Assert.throwsErrors(()=>{ mergeObject(new String('测试字符串对象'), Error); }, ParameterError);
    Assert.throwsErrors(()=>{ mergeObject(new String('测试字符串对象'), testCopyObject); }, ParameterError);

    // 开始数值匹配测试。要匹配合并后结果，是否与预期相等。(这里合并时，不会修改 key 信息，所以， key不对，那就直接 false 了)
    Assert.objectEquals({a:1, b:2, c:3}, mergeObject({a:1}, {b:2}, {c:3}));
    Assert.objectEquals({a:1, b:2, c:3}, mergeObject({a:1}, {b:2, c:3}));
    Assert.objectEquals({name:'tom', age:12, isMan:true}, mergeObject({name:'tom'}, {age:12}, {isMan:true}));
    // 这里测试一下，重复 key 信息，覆盖的效果
    Assert.objectEquals({a:1, b:2, c:4441}, mergeObject({a:1}, {b:2, c:3}, {c:4441}));
}

function testMergeObjectIgnoreCase(){
    /**
     * mergeObjectIgnoreCase 这里不区分键名的大小写。但是，要指定，键名是按大写合并，还是按小写合并，统一转换。
     * ===> 如果参数校验不通过，会抛出 ParameterError 异常。（这里只处理 object 也就是对象，不处理基础类型）
     * ===> 空（undefined\null\NaN）、字符串（基础+对象）、数字（基础+对象）、布尔（基础+对象）、正则、Symbol、类、函数、普通对象、数组
     */

    // 先做一个抛出测试（参数有3个，第1个是 字符串（lower 或者 upper），第2个是 object ，第3个是 object 不定参数）
    Assert.throwsErrors(()=>{ mergeObjectIgnoreCase(undefined, {name:'ori'}, {age:12, addr:'my home.'}); }, ParameterError);
    Assert.throwsErrors(()=>{ mergeObjectIgnoreCase(null, {name:'ori'}, {age:12, addr:'my home.'}); }, ParameterError);
    Assert.throwsErrors(()=>{ mergeObjectIgnoreCase(NaN, {name:'ori'}, {age:12, addr:'my home.'}); }, ParameterError);
    Assert.throwsErrors(()=>{ mergeObjectIgnoreCase('xxxx', {name:'ori'}, {age:12, addr:'my home.'}); }, ParameterError);
    Assert.throwsErrors(()=>{ mergeObjectIgnoreCase(new String('sss'), {name:'ori'}, {age:12, addr:'my home.'}); }, ParameterError);
    Assert.throwsErrors(()=>{ mergeObjectIgnoreCase(123, {name:'ori'}, {age:12, addr:'my home.'}); }, ParameterError);
    Assert.throwsErrors(()=>{ mergeObjectIgnoreCase(new Number(123), {name:'ori'}, {age:12, addr:'my home.'}); }, ParameterError);
    Assert.throwsErrors(()=>{ mergeObjectIgnoreCase(true, {name:'ori'}, {age:12, addr:'my home.'}); }, ParameterError);
    Assert.throwsErrors(()=>{ mergeObjectIgnoreCase(false, {name:'ori'}, {age:12, addr:'my home.'}); }, ParameterError);
    Assert.throwsErrors(()=>{ mergeObjectIgnoreCase(new Boolean(true), {name:'ori'}, {age:12, addr:'my home.'}); }, ParameterError);
    Assert.throwsErrors(()=>{ mergeObjectIgnoreCase(new Boolean(false), {name:'ori'}, {age:12, addr:'my home.'}); }, ParameterError);
    Assert.throwsErrors(()=>{ mergeObjectIgnoreCase(/123/, {name:'ori'}, {age:12, addr:'my home.'}); }, ParameterError);
    Assert.throwsErrors(()=>{ mergeObjectIgnoreCase(Symbol.for('guid'), {name:'ori'}, {age:12, addr:'my home.'}); }, ParameterError);
    Assert.throwsErrors(()=>{ mergeObjectIgnoreCase(Error, {name:'ori'}, {age:12, addr:'my home.'}); }, ParameterError);
    Assert.throwsErrors(()=>{ mergeObjectIgnoreCase(ParameterError, {name:'ori'}, {age:12, addr:'my home.'}); }, ParameterError);
    Assert.throwsErrors(()=>{ mergeObjectIgnoreCase(testToLowerCase, {name:'ori'}, {age:12, addr:'my home.'}); }, ParameterError);
    Assert.throwsErrors(()=>{ mergeObjectIgnoreCase(()=>{}, {name:'ori'}, {age:12, addr:'my home.'}); }, ParameterError);
    Assert.throwsErrors(()=>{ mergeObjectIgnoreCase({ccc:'测试对象'}, {name:'ori'}, {age:12, addr:'my home.'}); }, ParameterError);
    Assert.throwsErrors(()=>{ mergeObjectIgnoreCase(new Map(), {name:'ori'}, {age:12, addr:'my home.'}); }, ParameterError);
    Assert.throwsErrors(()=>{ mergeObjectIgnoreCase(new Set(), {name:'ori'}, {age:12, addr:'my home.'}); }, ParameterError);
    Assert.throwsErrors(()=>{ mergeObjectIgnoreCase([1,2,3], {name:'ori'}, {age:12, addr:'my home.'}); }, ParameterError);
    // 第2个参数 object
    Assert.throwsErrors(()=>{ mergeObjectIgnoreCase(TO_LOWERCASE, undefined, {age:12, addr:'my home.'}); }, ParameterError);
    Assert.throwsErrors(()=>{ mergeObjectIgnoreCase(TO_LOWERCASE, null, {age:12, addr:'my home.'}); }, ParameterError);
    Assert.throwsErrors(()=>{ mergeObjectIgnoreCase(TO_LOWERCASE, NaN, {age:12, addr:'my home.'}); }, ParameterError);
    Assert.throwsErrors(()=>{ mergeObjectIgnoreCase(TO_LOWERCASE, 'test2', {age:12, addr:'my home.'}); }, ParameterError);
    Assert.throwsErrors(()=>{ mergeObjectIgnoreCase(TO_LOWERCASE, 123, {age:12, addr:'my home.'}); }, ParameterError);
    Assert.throwsErrors(()=>{ mergeObjectIgnoreCase(TO_LOWERCASE, true, {age:12, addr:'my home.'}); }, ParameterError);
    Assert.throwsErrors(()=>{ mergeObjectIgnoreCase(TO_LOWERCASE, false, {age:12, addr:'my home.'}); }, ParameterError);
    Assert.throwsErrors(()=>{ mergeObjectIgnoreCase(TO_LOWERCASE, Symbol.for('guid'), {age:12, addr:'my home.'}); }, ParameterError);
    Assert.throwsErrors(()=>{ mergeObjectIgnoreCase(TO_LOWERCASE, Error, {age:12, addr:'my home.'}); }, ParameterError);
    Assert.throwsErrors(()=>{ mergeObjectIgnoreCase(TO_LOWERCASE, ParameterError, {age:12, addr:'my home.'}); }, ParameterError);
    Assert.throwsErrors(()=>{ mergeObjectIgnoreCase(TO_LOWERCASE, testToLowerCase, {age:12, addr:'my home.'}); }, ParameterError);
    Assert.throwsErrors(()=>{ mergeObjectIgnoreCase(TO_LOWERCASE, ()=>{}, {age:12, addr:'my home.'}); }, ParameterError);
    // 第3个参数 object 不定参数
    Assert.throwsErrors(()=>{ mergeObjectIgnoreCase(TO_LOWERCASE, {}, undefined); }, ParameterError);
    Assert.throwsErrors(()=>{ mergeObjectIgnoreCase(TO_LOWERCASE, {}, null); }, ParameterError);
    Assert.throwsErrors(()=>{ mergeObjectIgnoreCase(TO_LOWERCASE, {}, NaN); }, ParameterError);
    Assert.throwsErrors(()=>{ mergeObjectIgnoreCase(TO_LOWERCASE, {}, 'test2'); }, ParameterError);
    Assert.throwsErrors(()=>{ mergeObjectIgnoreCase(TO_LOWERCASE, {}, 123); }, ParameterError);
    Assert.throwsErrors(()=>{ mergeObjectIgnoreCase(TO_LOWERCASE, {}, true); }, ParameterError);
    Assert.throwsErrors(()=>{ mergeObjectIgnoreCase(TO_LOWERCASE, {}, false); }, ParameterError);
    Assert.throwsErrors(()=>{ mergeObjectIgnoreCase(TO_LOWERCASE, {}, Symbol.for('guid')); }, ParameterError);
    Assert.throwsErrors(()=>{ mergeObjectIgnoreCase(TO_LOWERCASE, {}, Error); }, ParameterError);
    Assert.throwsErrors(()=>{ mergeObjectIgnoreCase(TO_LOWERCASE, {}, ParameterError); }, ParameterError);
    Assert.throwsErrors(()=>{ mergeObjectIgnoreCase(TO_LOWERCASE, {}, testToLowerCase); }, ParameterError);
    Assert.throwsErrors(()=>{ mergeObjectIgnoreCase(TO_LOWERCASE, {}, ()=>{}); }, ParameterError);

    // 下面开始比较。key 是 symbol 类型，直接过滤掉了
    let m1 = mergeObjectIgnoreCase(TO_LOWERCASE, {a:1, b:2}, {'c':3}, {'D':true}, {e:Symbol.for('guid')}, {[Symbol.for('gKey1')]:'sss'});
    let m2 = mergeObjectIgnoreCase(TO_UPPERCASE, {a:1, b:2}, {'c':3}, {'D':true}, {e:Symbol.for('guid2')}, {[Symbol.for('gKey2')]:'aaa'});
    //
    Assert.objectEquals({a:1, b:2, c:3, d:true, e:Symbol.for('guid')}, m1);  // 统一转小写 key
    Assert.objectEquals({A:1, B:2, C:3, D:true, E:Symbol.for('guid2')}, m2); // 统一转大写 key
}

function testHtmlElementListToArray(){
    
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

    let htmlEl1 = htmlDocument.getElementById('test1');
    let htmlEl2 = htmlDocument.querySelector('#test2');
    let htmlList1 = htmlDocument.getElementsByName('testDiv');
    let htmlList2 = htmlDocument.querySelectorAll('div[name="testDiv"]');
    let emptyHtmlList = htmlDocument.querySelectorAll('button');

    // 在我的框架中， js 的数据类型中主要有以下几种：
    // ===> 空（undefined\null\NaN）、
    // ===> 字符串（基础+对象）、数字（基础+对象）、布尔（基础+对象）、Symbol、类、函数、
    // ===> 数组、Map、Set、
    // ===> 正则、普通对象
    
    // 第一个参数测试
    Assert.throwsErrors(()=>{ htmlElementListToArray(undefined); }, ParameterError);
    Assert.throwsErrors(()=>{ htmlElementListToArray(null); }, ParameterError);
    Assert.throwsErrors(()=>{ htmlElementListToArray(NaN); }, ParameterError);
    Assert.throwsErrors(()=>{ htmlElementListToArray(''); }, ParameterError);
    Assert.throwsErrors(()=>{ htmlElementListToArray('sss'); }, ParameterError);
    Assert.throwsErrors(()=>{ htmlElementListToArray(new String('')); }, ParameterError);
    Assert.throwsErrors(()=>{ htmlElementListToArray(new String('sss')); }, ParameterError);
    Assert.throwsErrors(()=>{ htmlElementListToArray(123); }, ParameterError);
    Assert.throwsErrors(()=>{ htmlElementListToArray(-1); }, ParameterError);
    Assert.throwsErrors(()=>{ htmlElementListToArray(new Number(123)); }, ParameterError);
    Assert.throwsErrors(()=>{ htmlElementListToArray(new Number(-1)); }, ParameterError);
    Assert.throwsErrors(()=>{ htmlElementListToArray(true); }, ParameterError);
    Assert.throwsErrors(()=>{ htmlElementListToArray(false); }, ParameterError);
    Assert.throwsErrors(()=>{ htmlElementListToArray(new Boolean(true)); }, ParameterError);
    Assert.throwsErrors(()=>{ htmlElementListToArray(new Boolean(false)); }, ParameterError);
    Assert.throwsErrors(()=>{ htmlElementListToArray(Symbol.for('guid')); }, ParameterError);
    Assert.throwsErrors(()=>{ htmlElementListToArray(Error); }, ParameterError);
    Assert.throwsErrors(()=>{ htmlElementListToArray(Object); }, ParameterError);
    Assert.throwsErrors(()=>{ htmlElementListToArray(testHtmlElementListToArray); }, ParameterError);
    Assert.throwsErrors(()=>{ htmlElementListToArray(()=>{}); }, ParameterError);
    Assert.throwsErrors(()=>{ htmlElementListToArray(function(){}); }, ParameterError);
    Assert.throwsErrors(()=>{ htmlElementListToArray([]); }, ParameterError);
    Assert.throwsErrors(()=>{ htmlElementListToArray([1,2,3]); }, ParameterError);
    Assert.throwsErrors(()=>{ htmlElementListToArray([[]]); }, ParameterError);
    Assert.throwsErrors(()=>{ htmlElementListToArray([[1,2,3], [4,5,6]]); }, ParameterError);
    Assert.throwsErrors(()=>{ htmlElementListToArray(new Map()); }, ParameterError);
    Assert.throwsErrors(()=>{ htmlElementListToArray(new Map([['a', 1], ['b', 2]])); }, ParameterError);
    Assert.throwsErrors(()=>{ htmlElementListToArray(new Set()); }, ParameterError);
    Assert.throwsErrors(()=>{ htmlElementListToArray(new Set([1,2,3])); }, ParameterError);
    Assert.throwsErrors(()=>{ htmlElementListToArray(/123/); }, ParameterError);
    Assert.throwsErrors(()=>{ htmlElementListToArray(new RegExp('123')); }, ParameterError);
    Assert.throwsErrors(()=>{ htmlElementListToArray({}); }, ParameterError);
    Assert.throwsErrors(()=>{ htmlElementListToArray({a:1, b:2}); }, ParameterError);
    Assert.throwsErrors(()=>{ htmlElementListToArray(new Object()); }, ParameterError);
    Assert.throwsErrors(()=>{ htmlElementListToArray(htmlEl1); }, ParameterError); // element 不算，需要是element集合
    Assert.throwsErrors(()=>{ htmlElementListToArray(htmlEl2); }, ParameterError); // element 不算，需要是element集合
    Assert.throwsErrorsNone(()=>{ htmlElementListToArray(htmlList1); });
    Assert.throwsErrorsNone(()=>{ htmlElementListToArray(htmlList2); });
    Assert.throwsErrorsNone(()=>{ htmlElementListToArray(emptyHtmlList); }); // 空的element集合，也是集合
}

// =============== 导出测试函数，用于测试结果显示

export {
    testToLowerCase, testToUpperCase, testObjToMap, testGenMap, 
    testCopyObject, testMergeObject, testMergeObjectIgnoreCase, testHtmlElementListToArray
}