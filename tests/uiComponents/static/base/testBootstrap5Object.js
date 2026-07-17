/**
 * In my license, all codes can be shared free of charge. 
 * However, If my code is taken for commercial use, please maintain it yourself. 
 * I am not obligated to take responsibility for your business application.
 * Here is my email "pangdongcan@live.com"
 * 
 * Copyright © 2026 Micheal Pang. All rights reserved.
 * 
 * @file This file "testBootstrap5Object.js" is part of project "pdc-js-framework" , which is belong to Michael Pang (It's Me).
 * @author Micheal Pang (Dongcan Pang)
 * @since 2026-07-16
 * @description 这里是 UI Components 组件的 base/Bootstrap5Object 模块测试
 */
"use strict"; // 这是严格模式下的 Javascript 代码

import { Assert } from "../../../testTools.js";
import { PROTECTED_GET_CONTENT, Bootstrap5Object } from "../../../../uiComponents/static/base/Bootstrap5Object.js";
import { VerificationError } from "../../../../models/errors.js";
import { isHtmlElement } from "../../../../utils/datatype.js";

// 在我的框架中， js 的数据类型中主要有以下几种：
// ===> 空（undefined\null\NaN）、
// ===> 字符串（基础+对象）、数字（基础+对象）、布尔（基础+对象）、Symbol、类、函数、
// ===> 数组、Map、Set、
// ===> 正则、普通对象

// ==== 因为这个类内方法比较多，所以分开写测试函数

function testBootstrap5ObjectCreate() {
    // 参数检验
    // 第一个参数
    Assert.throwsErrorsNone(()=>{ new Bootstrap5Object(undefined, {}, []); }); // 有默认值
    Assert.throwsErrors(()=>{ new Bootstrap5Object(null, {}, []); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bootstrap5Object(NaN, {}, []); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bootstrap5Object('', {}, []); }, VerificationError);
    Assert.throwsErrorsNone(()=>{ new Bootstrap5Object('sss', {}, []); });
    Assert.throwsErrors(()=>{ new Bootstrap5Object(new String(''), {}, []); }, VerificationError);
    Assert.throwsErrorsNone(()=>{ new Bootstrap5Object(new String('sss'), {}, []); });
    Assert.throwsErrors(()=>{ new Bootstrap5Object(123, {}, []); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bootstrap5Object(-1, {}, []); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bootstrap5Object(new Number(123), {}, []); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bootstrap5Object(new Number(-1), {}, []); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bootstrap5Object(true, {}, []); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bootstrap5Object(false, {}, []); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bootstrap5Object(new Boolean(true), {}, []); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bootstrap5Object(new Boolean(false), {}, []); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bootstrap5Object(Symbol('uid'), {}, []); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bootstrap5Object(Symbol.for('uid'), {}, []); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bootstrap5Object(Error, {}, []); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bootstrap5Object(Bootstrap5Object, {}, []); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bootstrap5Object(testBootstrap5ObjectCreate, {}, []); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bootstrap5Object(function(){}, {}, []); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bootstrap5Object(()=>{}, {}, []); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bootstrap5Object([], {}, []); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bootstrap5Object([1,2,3], {}, []); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bootstrap5Object([[]], {}, []); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bootstrap5Object([[1,2,3],[4,5,6]], {}, []); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bootstrap5Object(new Map(), {}, []); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bootstrap5Object(new Map([['a',1],['b', 2]]), {}, []); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bootstrap5Object(new Set(), {}, []); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bootstrap5Object(new Set([1,2,3]), {}, []); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bootstrap5Object(/123/, {}, []); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bootstrap5Object(new RegExp('123'), {}, []); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bootstrap5Object({}, {}, []); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bootstrap5Object({a:1, b:2}, {}, []); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bootstrap5Object(new Object(), {}, []); }, VerificationError);
    // 第二个参数
    Assert.throwsErrorsNone(()=>{ new Bootstrap5Object('sss', undefined, []); }); // 有默认值
    Assert.throwsErrors(()=>{ new Bootstrap5Object('sss', null, []); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bootstrap5Object('sss', NaN, []); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bootstrap5Object('sss', '', []); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bootstrap5Object('sss', 'sss', []); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bootstrap5Object('sss', new String(''), []); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bootstrap5Object('sss', new String('sss'), []); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bootstrap5Object('sss', 123, []); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bootstrap5Object('sss', -1, []); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bootstrap5Object('sss', new Number(123), []); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bootstrap5Object('sss', new Number(-1), []); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bootstrap5Object('sss', true, []); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bootstrap5Object('sss', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bootstrap5Object('sss', new Boolean(true), []); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bootstrap5Object('sss', new Boolean(false), []); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bootstrap5Object('sss', Symbol('uid'), []); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bootstrap5Object('sss', Symbol.for('uid'), []); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bootstrap5Object('sss', Error, []); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bootstrap5Object('sss', Bootstrap5Object, []); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bootstrap5Object('sss', testBootstrap5ObjectCreate, []); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bootstrap5Object('sss', function(){}, []); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bootstrap5Object('sss', ()=>{}, []); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bootstrap5Object('sss', [], []); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bootstrap5Object('sss', [1,2,3], []); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bootstrap5Object('sss', [[]], []); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bootstrap5Object('sss', [[1,2,3],[4,5,6]], []); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bootstrap5Object('sss', new Map(), []); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bootstrap5Object('sss', new Map([['a',1],['b', 2]]), []); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bootstrap5Object('sss', new Set(), []); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bootstrap5Object('sss', new Set([1,2,3]), []); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bootstrap5Object('sss', /123/, []); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bootstrap5Object('sss', new RegExp('123'), []); }, VerificationError);
    Assert.throwsErrorsNone(()=>{ new Bootstrap5Object('sss', {}, []); });
    Assert.throwsErrorsNone(()=>{ new Bootstrap5Object('sss', {a:1, b:2}, []); });
    Assert.throwsErrorsNone(()=>{ new Bootstrap5Object('sss', new Object(), []); });
    // 第三个参数
    Assert.throwsErrorsNone(()=>{ new Bootstrap5Object('sss', {}, undefined); }); // 有默认值
    Assert.throwsErrors(()=>{ new Bootstrap5Object('sss', {}, null); }, VerificationError); 
    Assert.throwsErrors(()=>{ new Bootstrap5Object('sss', {}, NaN); }, VerificationError); 
    Assert.throwsErrors(()=>{ new Bootstrap5Object('sss', {}, ''); }, VerificationError); 
    Assert.throwsErrors(()=>{ new Bootstrap5Object('sss', {}, 'sss'); }, VerificationError); 
    Assert.throwsErrors(()=>{ new Bootstrap5Object('sss', {}, new String('')); }, VerificationError); 
    Assert.throwsErrors(()=>{ new Bootstrap5Object('sss', {}, new String('sss')); }, VerificationError); 
    Assert.throwsErrors(()=>{ new Bootstrap5Object('sss', {}, 123); }, VerificationError); 
    Assert.throwsErrors(()=>{ new Bootstrap5Object('sss', {}, -1); }, VerificationError); 
    Assert.throwsErrors(()=>{ new Bootstrap5Object('sss', {}, new Number(123)); }, VerificationError); 
    Assert.throwsErrors(()=>{ new Bootstrap5Object('sss', {}, new Number(-1)); }, VerificationError); 
    Assert.throwsErrors(()=>{ new Bootstrap5Object('sss', {}, true); }, VerificationError); 
    Assert.throwsErrors(()=>{ new Bootstrap5Object('sss', {}, false); }, VerificationError); 
    Assert.throwsErrors(()=>{ new Bootstrap5Object('sss', {}, new Boolean(true)); }, VerificationError); 
    Assert.throwsErrors(()=>{ new Bootstrap5Object('sss', {}, new Boolean(false)); }, VerificationError); 
    Assert.throwsErrors(()=>{ new Bootstrap5Object('sss', {}, Symbol('uid')); }, VerificationError); 
    Assert.throwsErrors(()=>{ new Bootstrap5Object('sss', {}, Symbol.for('uid')); }, VerificationError); 
    Assert.throwsErrors(()=>{ new Bootstrap5Object('sss', {}, Error); }, VerificationError); 
    Assert.throwsErrors(()=>{ new Bootstrap5Object('sss', {}, Bootstrap5Object); }, VerificationError); 
    Assert.throwsErrors(()=>{ new Bootstrap5Object('sss', {}, testBootstrap5ObjectCreate); }, VerificationError); 
    Assert.throwsErrors(()=>{ new Bootstrap5Object('sss', {}, function(){}); }, VerificationError); 
    Assert.throwsErrors(()=>{ new Bootstrap5Object('sss', {}, ()=>{}); }, VerificationError); 
    Assert.throwsErrorsNone(()=>{ new Bootstrap5Object('sss', {}, []); });  // 第三个参数，可以是空数组，或者内容为 字符串 和 Bootstrap5Object
    Assert.throwsErrorsNone(()=>{ new Bootstrap5Object('sss', {}, ['aaa']); }); 
    Assert.throwsErrorsNone(()=>{ new Bootstrap5Object('sss', {}, [new Bootstrap5Object()]); }); 
    Assert.throwsErrorsNone(()=>{ new Bootstrap5Object('sss', {}, ['aaa', new Bootstrap5Object()]); }); 
    Assert.throwsErrors(()=>{ new Bootstrap5Object('sss', {}, ['aaa', new Bootstrap5Object(), 123]); }, VerificationError); // 这里有数字内容，抛异常
    Assert.throwsErrors(()=>{ new Bootstrap5Object('sss', {}, [1,2,3]); }, VerificationError); 
    Assert.throwsErrors(()=>{ new Bootstrap5Object('sss', {}, [[]]); }, VerificationError); 
    Assert.throwsErrors(()=>{ new Bootstrap5Object('sss', {}, [[1,2,3],[4,5,6]]); }, VerificationError); 
    Assert.throwsErrors(()=>{ new Bootstrap5Object('sss', {}, new Map()); }, VerificationError); 
    Assert.throwsErrors(()=>{ new Bootstrap5Object('sss', {}, new Map([['a',1],['b', 2]])); }, VerificationError); 
    Assert.throwsErrors(()=>{ new Bootstrap5Object('sss', {}, new Set()); }, VerificationError); 
    Assert.throwsErrors(()=>{ new Bootstrap5Object('sss', {}, new Set([1,2,3])); }, VerificationError); 
    Assert.throwsErrors(()=>{ new Bootstrap5Object('sss', {}, /123/); }, VerificationError); 
    Assert.throwsErrors(()=>{ new Bootstrap5Object('sss', {}, new RegExp('123')); }, VerificationError); 
    Assert.throwsErrors(()=>{ new Bootstrap5Object('sss', {}, {}); }, VerificationError); 
    Assert.throwsErrors(()=>{ new Bootstrap5Object('sss', {}, {a:1, b:2}); }, VerificationError); 
    Assert.throwsErrors(()=>{ new Bootstrap5Object('sss', {}, new Object()); }, VerificationError); 
    
    // 对象内容测试，检查内容是否为传入的参数产生的。
    let unknow = new Bootstrap5Object();
    Assert.equalsStrictly('<unknow></unknow>', unknow.toHtmlString());
    let div1 = new Bootstrap5Object('div', {id:'div1', name:'testDiv'});
    Assert.equalsStrictly('<div id="div1" name="testDiv"></div>', div1.toHtmlString());
    let div2 = new Bootstrap5Object('textarea', {id:'area1', name:'mytestArea'}, ['fff', div1, 'eee']);
    // 因为 content 合并时，会增加一些换行处理，所以要去掉再比对
    Assert.equalsStrictly(
        '<textarea id="area1" name="mytestArea">fff<div id="div1" name="testDiv"></div>eee</textarea>', 
        div2.toHtmlString().replace(/[\n]/g, ''));
}

function testBootstrap5ObjectAble() {

    // 对于默认的 disable 和 unable 处理，只是增加一个属性而已。
    let target = new Bootstrap5Object('div', {id:'testDiv'}, ['测试']);
    Assert.equalsStrictly('<div id="testDiv">测试</div>', target.toHtmlString());

    // 禁用处理
    target.disable();
    Assert.equalsStrictly('<div id="testDiv" disabled="true">测试</div>', target.toHtmlString());
    // 再重复执行一次，看看是否会重复增加属性
    target.disable();
    Assert.equalsStrictly('<div id="testDiv" disabled="true">测试</div>', target.toHtmlString());

    // 启用处理
    target.enable();
    Assert.equalsStrictly('<div id="testDiv">测试</div>', target.toHtmlString());
    // 再执行一次看看
    target.enable();
    Assert.equalsStrictly('<div id="testDiv">测试</div>', target.toHtmlString());
}

function testBootstrap5ObjectGet() {

    // 这里测试 get 方法，主要是字符串值的比对

    let g1 = new Bootstrap5Object();
    // 这里故意大写，看看标签名和属性名，是否会统一转小写
    let g2 = new Bootstrap5Object('DIV', {ID:'testG2', Name:'testName', clAss:'container TEST'}, ['测试']); 
    Assert.equalsStrictly('unknow', g1.getTagNameString());
    Assert.equalsStrictly('div', g2.getTagNameString());
    //
    Assert.equalsStrictly('', g1.getCssClassString());
    Assert.equalsStrictly('container TEST', g2.getCssClassString());
    // 
    Assert.equalsStrictly('', g1.getAttributeString());
    Assert.equalsStrictly('id="testG2" name="testName" class="container TEST"', g2.getAttributeString());
    // 
    Assert.equalsStrictly('', g1.getContentString());
    Assert.equalsStrictly('测试', g2.getContentString());
}

function testBootstrap5ObjectAdd() {
    
    let g1 = new Bootstrap5Object();
    // 这里故意大写，看看标签名和属性名，是否会统一转小写
    let g2 = new Bootstrap5Object('DIV', {ID:'testG2', Name:'testName', clAss:'container TEST'}, ['测试']);

    // 先做参数校验测试
    Assert.throwsErrors(()=>{ g1.addAttribute(undefined, 'aaa'); }, VerificationError);
    Assert.throwsErrors(()=>{ g1.addAttribute(null, 'aaa'); }, VerificationError);
    Assert.throwsErrors(()=>{ g1.addAttribute(NaN, 'aaa'); }, VerificationError);
    Assert.throwsErrors(()=>{ g1.addAttribute('', 'aaa'); }, VerificationError);
    Assert.throwsErrorsNone(()=>{ g1.addAttribute('sss', 'aaa'); });
    Assert.throwsErrors(()=>{ g1.addAttribute(new String(''), 'aaa'); }, VerificationError);
    Assert.throwsErrorsNone(()=>{ g1.addAttribute(new String('sss'), 'aaa'); });
    Assert.throwsErrors(()=>{ g1.addAttribute(123, 'aaa'); }, VerificationError);
    Assert.throwsErrors(()=>{ g1.addAttribute(-1, 'aaa'); }, VerificationError);
    Assert.throwsErrors(()=>{ g1.addAttribute(new Number(123), 'aaa'); }, VerificationError);
    Assert.throwsErrors(()=>{ g1.addAttribute(new Number(-1), 'aaa'); }, VerificationError);
    Assert.throwsErrors(()=>{ g1.addAttribute(true, 'aaa'); }, VerificationError);
    Assert.throwsErrors(()=>{ g1.addAttribute(false, 'aaa'); }, VerificationError);
    Assert.throwsErrors(()=>{ g1.addAttribute(new Boolean(true), 'aaa'); }, VerificationError);
    Assert.throwsErrors(()=>{ g1.addAttribute(new Boolean(false), 'aaa'); }, VerificationError);
    Assert.throwsErrors(()=>{ g1.addAttribute(Symbol('uid'), 'aaa'); }, VerificationError);
    Assert.throwsErrors(()=>{ g1.addAttribute(Symbol.for('uid'), 'aaa'); }, VerificationError);
    Assert.throwsErrors(()=>{ g1.addAttribute(Error, 'aaa'); }, VerificationError);
    Assert.throwsErrors(()=>{ g1.addAttribute(Bootstrap5Object, 'aaa'); }, VerificationError);
    Assert.throwsErrors(()=>{ g1.addAttribute(testBootstrap5ObjectCreate, 'aaa'); }, VerificationError);
    Assert.throwsErrors(()=>{ g1.addAttribute(function(){}, 'aaa'); }, VerificationError);
    Assert.throwsErrors(()=>{ g1.addAttribute(()=>{}, 'aaa'); }, VerificationError);
    Assert.throwsErrors(()=>{ g1.addAttribute([], 'aaa'); }, VerificationError);
    Assert.throwsErrors(()=>{ g1.addAttribute([1,2,3], 'aaa'); }, VerificationError);
    Assert.throwsErrors(()=>{ g1.addAttribute([[]], 'aaa'); }, VerificationError);
    Assert.throwsErrors(()=>{ g1.addAttribute([[1,2,3],[4,5,6]], 'aaa'); }, VerificationError);
    Assert.throwsErrors(()=>{ g1.addAttribute(new Map(), 'aaa'); }, VerificationError);
    Assert.throwsErrors(()=>{ g1.addAttribute(new Map([['a',1],['b', 2]]), 'aaa'); }, VerificationError);
    Assert.throwsErrors(()=>{ g1.addAttribute(new Set(), 'aaa'); }, VerificationError);
    Assert.throwsErrors(()=>{ g1.addAttribute(new Set([1,2,3]), 'aaa'); }, VerificationError);
    Assert.throwsErrors(()=>{ g1.addAttribute(/123/, 'aaa'); }, VerificationError);
    Assert.throwsErrors(()=>{ g1.addAttribute(new RegExp('123'), 'aaa'); }, VerificationError);
    Assert.throwsErrors(()=>{ g1.addAttribute({}, 'aaa'); }, VerificationError);
    Assert.throwsErrors(()=>{ g1.addAttribute({a:1, b:2}, 'aaa'); }, VerificationError);
    Assert.throwsErrors(()=>{ g1.addAttribute(new Object(), 'aaa'); }, VerificationError);
    // 第2个参数
    Assert.throwsErrors(()=>{ g1.addAttribute('sss', undefined); }, VerificationError);
    Assert.throwsErrors(()=>{ g1.addAttribute('sss', null); }, VerificationError);
    Assert.throwsErrors(()=>{ g1.addAttribute('sss', NaN); }, VerificationError);
    Assert.throwsErrorsNone(()=>{ g1.addAttribute('sss', ''); });
    Assert.throwsErrorsNone(()=>{ g1.addAttribute('sss', 'sss'); });
    Assert.throwsErrorsNone(()=>{ g1.addAttribute('sss', new String('')); });
    Assert.throwsErrorsNone(()=>{ g1.addAttribute('sss', new String('sss')); });
    Assert.throwsErrorsNone(()=>{ g1.addAttribute('sss', 123); });
    Assert.throwsErrorsNone(()=>{ g1.addAttribute('sss', -1); });
    Assert.throwsErrorsNone(()=>{ g1.addAttribute('sss', new Number(123)); });
    Assert.throwsErrorsNone(()=>{ g1.addAttribute('sss', new Number(-1)); });
    Assert.throwsErrorsNone(()=>{ g1.addAttribute('sss', true); });
    Assert.throwsErrorsNone(()=>{ g1.addAttribute('sss', false); });
    Assert.throwsErrorsNone(()=>{ g1.addAttribute('sss', new Boolean(true)); });
    Assert.throwsErrorsNone(()=>{ g1.addAttribute('sss', new Boolean(false)); });
    Assert.throwsErrors(()=>{ g1.addAttribute('sss', Symbol('uid')); }, VerificationError);
    Assert.throwsErrors(()=>{ g1.addAttribute('sss', Symbol.for('uid')); }, VerificationError);
    Assert.throwsErrors(()=>{ g1.addAttribute('sss', Error); }, VerificationError);
    Assert.throwsErrors(()=>{ g1.addAttribute('sss', Bootstrap5Object); }, VerificationError);
    Assert.throwsErrors(()=>{ g1.addAttribute('sss', testBootstrap5ObjectCreate); }, VerificationError);
    Assert.throwsErrors(()=>{ g1.addAttribute('sss', function(){}); }, VerificationError);
    Assert.throwsErrors(()=>{ g1.addAttribute('sss', ()=>{}); }, VerificationError);
    Assert.throwsErrors(()=>{ g1.addAttribute('sss', []); }, VerificationError);
    Assert.throwsErrors(()=>{ g1.addAttribute('sss', [1,2,3]); }, VerificationError);
    Assert.throwsErrors(()=>{ g1.addAttribute('sss', [[]]); }, VerificationError);
    Assert.throwsErrors(()=>{ g1.addAttribute('sss', [[1,2,3],[4,5,6]]); }, VerificationError);
    Assert.throwsErrors(()=>{ g1.addAttribute('sss', new Map()); }, VerificationError);
    Assert.throwsErrors(()=>{ g1.addAttribute('sss', new Map([['a',1],['b', 2]])); }, VerificationError);
    Assert.throwsErrors(()=>{ g1.addAttribute('sss', new Set()); }, VerificationError);
    Assert.throwsErrors(()=>{ g1.addAttribute('sss', new Set([1,2,3])); }, VerificationError);
    Assert.throwsErrors(()=>{ g1.addAttribute('sss', /123/); }, VerificationError);
    Assert.throwsErrors(()=>{ g1.addAttribute('sss', new RegExp('123')); }, VerificationError);
    Assert.throwsErrors(()=>{ g1.addAttribute('sss', {}); }, VerificationError);
    Assert.throwsErrors(()=>{ g1.addAttribute('sss', {a:1, b:2}); }, VerificationError);
    Assert.throwsErrors(()=>{ g1.addAttribute('sss', new Object()); }, VerificationError);

    // 因为前面测试已经插入了些内容。这里需要清空。
    g1.clearAttributes();

    // 对于 add 方法，更多是查看 输出
    g1.addAttribute('myATTR', 123);
    g1.addAttribute('MYAttr2', true);
    Assert.equalsStrictly('<unknow myattr="123" myattr2="true"></unknow>', g1.toHtmlString());

    // 参数测试
    Assert.throwsErrors(()=>{ g1.addAttributeByObject(undefined); } ,VerificationError);
    Assert.throwsErrors(()=>{ g1.addAttributeByObject(null); } ,VerificationError);
    Assert.throwsErrors(()=>{ g1.addAttributeByObject(NaN); } ,VerificationError);
    Assert.throwsErrors(()=>{ g1.addAttributeByObject(''); } ,VerificationError);
    Assert.throwsErrors(()=>{ g1.addAttributeByObject('sss'); } ,VerificationError);
    Assert.throwsErrors(()=>{ g1.addAttributeByObject(new String('')); } ,VerificationError);
    Assert.throwsErrors(()=>{ g1.addAttributeByObject(new String('sss')); } ,VerificationError);
    Assert.throwsErrors(()=>{ g1.addAttributeByObject(123); } ,VerificationError);
    Assert.throwsErrors(()=>{ g1.addAttributeByObject(-1); } ,VerificationError);
    Assert.throwsErrors(()=>{ g1.addAttributeByObject(new Number(123)); } ,VerificationError);
    Assert.throwsErrors(()=>{ g1.addAttributeByObject(new Number(-1)); } ,VerificationError);
    Assert.throwsErrors(()=>{ g1.addAttributeByObject(true); } ,VerificationError);
    Assert.throwsErrors(()=>{ g1.addAttributeByObject(false); } ,VerificationError);
    Assert.throwsErrors(()=>{ g1.addAttributeByObject(new Boolean(true)); } ,VerificationError);
    Assert.throwsErrors(()=>{ g1.addAttributeByObject(new Boolean(false)); } ,VerificationError);
    Assert.throwsErrors(()=>{ g1.addAttributeByObject(Symbol('uid')); } ,VerificationError);
    Assert.throwsErrors(()=>{ g1.addAttributeByObject(Symbol.for('uid')); } ,VerificationError);
    Assert.throwsErrors(()=>{ g1.addAttributeByObject(Error); } ,VerificationError);
    Assert.throwsErrors(()=>{ g1.addAttributeByObject(Bootstrap5Object); } ,VerificationError);
    Assert.throwsErrors(()=>{ g1.addAttributeByObject(testBootstrap5ObjectCreate); } ,VerificationError);
    Assert.throwsErrors(()=>{ g1.addAttributeByObject(function(){}); } ,VerificationError);
    Assert.throwsErrors(()=>{ g1.addAttributeByObject(()=>{}); } ,VerificationError);
    Assert.throwsErrors(()=>{ g1.addAttributeByObject([]); } ,VerificationError);
    Assert.throwsErrors(()=>{ g1.addAttributeByObject([1,2,3]); } ,VerificationError);
    Assert.throwsErrors(()=>{ g1.addAttributeByObject([[]]); } ,VerificationError);
    Assert.throwsErrors(()=>{ g1.addAttributeByObject([[1,2,3],[4,5,6]]); } ,VerificationError);
    Assert.throwsErrors(()=>{ g1.addAttributeByObject(new Map()); } ,VerificationError);
    Assert.throwsErrors(()=>{ g1.addAttributeByObject(new Map([['a',1],['b', 2]])); } ,VerificationError);
    Assert.throwsErrors(()=>{ g1.addAttributeByObject(new Set()); } ,VerificationError);
    Assert.throwsErrors(()=>{ g1.addAttributeByObject(new Set([1,2,3])); } ,VerificationError);
    Assert.throwsErrors(()=>{ g1.addAttributeByObject(/123/); } ,VerificationError);
    Assert.throwsErrors(()=>{ g1.addAttributeByObject(new RegExp('123')); } ,VerificationError);
    Assert.throwsErrorsNone(()=>{ g1.addAttributeByObject({}); } );
    Assert.throwsErrorsNone(()=>{ g1.addAttributeByObject({a:1, b:2}); });
    Assert.throwsErrorsNone(()=>{ g1.addAttributeByObject(new Object()); });

    // 因为前面测试已经插入了些内容。这里需要清空。
    g1.clearAttributes();

    // 对于 add 方法，更多是查看 输出（实际上 object 的key遍历，不是按插入顺序的。所以，为了测试方便，应该保证 属性名按字母顺序添加）
    g1.addAttributeByObject({A:1, B:'tom'});
    g1.addAttributeByObject({ccc:false, FfF:true});
    Assert.equalsStrictly('<unknow a="1" b="tom" ccc="false" fff="true"></unknow>', g1.toHtmlString());

    // 参数测试
    Assert.throwsErrors(()=>{ g1.addContentElements(undefined); }, VerificationError);
    Assert.throwsErrors(()=>{ g1.addContentElements(null); }, VerificationError);
    Assert.throwsErrors(()=>{ g1.addContentElements(NaN); }, VerificationError);
    Assert.throwsErrorsNone(()=>{ g1.addContentElements(''); });
    Assert.throwsErrorsNone(()=>{ g1.addContentElements('sss'); });
    Assert.throwsErrorsNone(()=>{ g1.addContentElements(new String('')); });
    Assert.throwsErrorsNone(()=>{ g1.addContentElements(new String('sss')); });
    Assert.throwsErrors(()=>{ g1.addContentElements(123); }, VerificationError);
    Assert.throwsErrors(()=>{ g1.addContentElements(-1); }, VerificationError);
    Assert.throwsErrors(()=>{ g1.addContentElements(new Number(123)); }, VerificationError);
    Assert.throwsErrors(()=>{ g1.addContentElements(new Number(-1)); }, VerificationError);
    Assert.throwsErrors(()=>{ g1.addContentElements(true); }, VerificationError);
    Assert.throwsErrors(()=>{ g1.addContentElements(false); }, VerificationError);
    Assert.throwsErrors(()=>{ g1.addContentElements(new Boolean(true)); }, VerificationError);
    Assert.throwsErrors(()=>{ g1.addContentElements(new Boolean(false)); }, VerificationError);
    Assert.throwsErrors(()=>{ g1.addContentElements(Symbol('uid')); }, VerificationError);
    Assert.throwsErrors(()=>{ g1.addContentElements(Symbol.for('uid')); }, VerificationError);
    Assert.throwsErrors(()=>{ g1.addContentElements(Error); }, VerificationError);
    Assert.throwsErrors(()=>{ g1.addContentElements(Bootstrap5Object); }, VerificationError);
    Assert.throwsErrors(()=>{ g1.addContentElements(testBootstrap5ObjectCreate); }, VerificationError);
    Assert.throwsErrors(()=>{ g1.addContentElements(function(){}); }, VerificationError);
    Assert.throwsErrors(()=>{ g1.addContentElements(()=>{}); }, VerificationError);
    Assert.throwsErrors(()=>{ g1.addContentElements([]); }, VerificationError);
    Assert.throwsErrors(()=>{ g1.addContentElements([1,2,3]); }, VerificationError);
    Assert.throwsErrors(()=>{ g1.addContentElements([[]]); }, VerificationError);
    Assert.throwsErrors(()=>{ g1.addContentElements([[1,2,3],[4,5,6]]); }, VerificationError);
    Assert.throwsErrors(()=>{ g1.addContentElements(new Map()); }, VerificationError);
    Assert.throwsErrors(()=>{ g1.addContentElements(new Map([['a',1],['b', 2]])); }, VerificationError);
    Assert.throwsErrors(()=>{ g1.addContentElements(new Set()); }, VerificationError);
    Assert.throwsErrors(()=>{ g1.addContentElements(new Set([1,2,3])); }, VerificationError);
    Assert.throwsErrors(()=>{ g1.addContentElements(/123/); }, VerificationError);
    Assert.throwsErrors(()=>{ g1.addContentElements(new RegExp('123')); }, VerificationError);
    Assert.throwsErrors(()=>{ g1.addContentElements({}); }, VerificationError);
    Assert.throwsErrors(()=>{ g1.addContentElements({a:1, b:2}); }, VerificationError);
    Assert.throwsErrors(()=>{ g1.addContentElements(new Object()); }, VerificationError);
    Assert.throwsErrorsNone(()=>{ g1.addContentElements(new Bootstrap5Object()); });

    // 因为前面测试已经插入了些内容。这里需要清空。
    g1.clearAttributes();
    g1.clearContents();

    // 比对结果是否符合预期
    g1.addContentElements('aaa', new Bootstrap5Object('div'), 'fff');
    Assert.equalsStrictly('<unknow>aaa<div></div>fff</unknow>', g1.toHtmlString().replace(/[\n]/g, ''));

    // 参数测试
    Assert.throwsErrors(()=>{ g1.addCssClass(undefined); }, VerificationError);
    Assert.throwsErrors(()=>{ g1.addCssClass(null); }, VerificationError);
    Assert.throwsErrors(()=>{ g1.addCssClass(NaN); }, VerificationError);
    Assert.throwsErrorsNone(()=>{ g1.addCssClass(''); });
    Assert.throwsErrorsNone(()=>{ g1.addCssClass('sss'); });
    Assert.throwsErrorsNone(()=>{ g1.addCssClass(new String('')); });
    Assert.throwsErrorsNone(()=>{ g1.addCssClass(new String('sss')); });
    Assert.throwsErrors(()=>{ g1.addCssClass(123); }, VerificationError);
    Assert.throwsErrors(()=>{ g1.addCssClass(-1); }, VerificationError);
    Assert.throwsErrors(()=>{ g1.addCssClass(new Number(123)); }, VerificationError);
    Assert.throwsErrors(()=>{ g1.addCssClass(new Number(-1)); }, VerificationError);
    Assert.throwsErrors(()=>{ g1.addCssClass(true); }, VerificationError);
    Assert.throwsErrors(()=>{ g1.addCssClass(false); }, VerificationError);
    Assert.throwsErrors(()=>{ g1.addCssClass(new Boolean(true)); }, VerificationError);
    Assert.throwsErrors(()=>{ g1.addCssClass(new Boolean(false)); }, VerificationError);
    Assert.throwsErrors(()=>{ g1.addCssClass(Symbol('uid')); }, VerificationError);
    Assert.throwsErrors(()=>{ g1.addCssClass(Symbol.for('uid')); }, VerificationError);
    Assert.throwsErrors(()=>{ g1.addCssClass(Error); }, VerificationError);
    Assert.throwsErrors(()=>{ g1.addCssClass(Bootstrap5Object); }, VerificationError);
    Assert.throwsErrors(()=>{ g1.addCssClass(testBootstrap5ObjectCreate); }, VerificationError);
    Assert.throwsErrors(()=>{ g1.addCssClass(function(){}); }, VerificationError);
    Assert.throwsErrors(()=>{ g1.addCssClass(()=>{}); }, VerificationError);
    Assert.throwsErrors(()=>{ g1.addCssClass([]); }, VerificationError);
    Assert.throwsErrors(()=>{ g1.addCssClass([1,2,3]); }, VerificationError);
    Assert.throwsErrors(()=>{ g1.addCssClass([[]]); }, VerificationError);
    Assert.throwsErrors(()=>{ g1.addCssClass([[1,2,3],[4,5,6]]); }, VerificationError);
    Assert.throwsErrors(()=>{ g1.addCssClass(new Map()); }, VerificationError);
    Assert.throwsErrors(()=>{ g1.addCssClass(new Map([['a',1],['b', 2]])); }, VerificationError);
    Assert.throwsErrors(()=>{ g1.addCssClass(new Set()); }, VerificationError);
    Assert.throwsErrors(()=>{ g1.addCssClass(new Set([1,2,3])); }, VerificationError);
    Assert.throwsErrors(()=>{ g1.addCssClass(/123/); }, VerificationError);
    Assert.throwsErrors(()=>{ g1.addCssClass(new RegExp('123')); }, VerificationError);
    Assert.throwsErrors(()=>{ g1.addCssClass({}); }, VerificationError);
    Assert.throwsErrors(()=>{ g1.addCssClass({a:1, b:2}); }, VerificationError);
    Assert.throwsErrors(()=>{ g1.addCssClass(new Object()); }, VerificationError);

    // 因为前面测试已经插入了些内容。这里需要清空。
    g1.clearAttributes();
    g1.clearContents();

    // 比对结果是否符合预期
    g1.addCssClass('aaa');
    g1.addCssClass('  sss aa   FFF  eee '); // 这里中间有不止一个空格，看能否处理
    Assert.equalsStrictly('<unknow class="aaa sss aa FFF eee"></unknow>', g1.toHtmlString());
}

function testBootstrap5ObjectRemove(){

    // 创建一个测试对象
    let g1 = new Bootstrap5Object('div', {id:'myTest1'}, ['测试']);

    // 参数检测
    Assert.throwsErrors(()=>{ g1.removeCssClass(undefined); }, VerificationError);
    Assert.throwsErrors(()=>{ g1.removeCssClass(null); }, VerificationError);
    Assert.throwsErrors(()=>{ g1.removeCssClass(NaN); }, VerificationError);
    Assert.throwsErrorsNone(()=>{ g1.removeCssClass(''); });
    Assert.throwsErrorsNone(()=>{ g1.removeCssClass('sss'); });
    Assert.throwsErrorsNone(()=>{ g1.removeCssClass(new String('')); });
    Assert.throwsErrorsNone(()=>{ g1.removeCssClass(new String('sss')); });
    Assert.throwsErrors(()=>{ g1.removeCssClass(123); }, VerificationError);
    Assert.throwsErrors(()=>{ g1.removeCssClass(-1); }, VerificationError);
    Assert.throwsErrors(()=>{ g1.removeCssClass(new Number(123)); }, VerificationError);
    Assert.throwsErrors(()=>{ g1.removeCssClass(new Number(-1)); }, VerificationError);
    Assert.throwsErrors(()=>{ g1.removeCssClass(true); }, VerificationError);
    Assert.throwsErrors(()=>{ g1.removeCssClass(false); }, VerificationError);
    Assert.throwsErrors(()=>{ g1.removeCssClass(new Boolean(true)); }, VerificationError);
    Assert.throwsErrors(()=>{ g1.removeCssClass(new Boolean(false)); }, VerificationError);
    Assert.throwsErrors(()=>{ g1.removeCssClass(Symbol('uid')); }, VerificationError);
    Assert.throwsErrors(()=>{ g1.removeCssClass(Symbol.for('uid')); }, VerificationError);
    Assert.throwsErrors(()=>{ g1.removeCssClass(Error); }, VerificationError);
    Assert.throwsErrors(()=>{ g1.removeCssClass(Bootstrap5Object); }, VerificationError);
    Assert.throwsErrors(()=>{ g1.removeCssClass(testBootstrap5ObjectCreate); }, VerificationError);
    Assert.throwsErrors(()=>{ g1.removeCssClass(function(){}); }, VerificationError);
    Assert.throwsErrors(()=>{ g1.removeCssClass(()=>{}); }, VerificationError);
    Assert.throwsErrors(()=>{ g1.removeCssClass([]); }, VerificationError);
    Assert.throwsErrors(()=>{ g1.removeCssClass([1,2,3]); }, VerificationError);
    Assert.throwsErrors(()=>{ g1.removeCssClass([[]]); }, VerificationError);
    Assert.throwsErrors(()=>{ g1.removeCssClass([[1,2,3],[4,5,6]]); }, VerificationError);
    Assert.throwsErrors(()=>{ g1.removeCssClass(new Map()); }, VerificationError);
    Assert.throwsErrors(()=>{ g1.removeCssClass(new Map([['a',1],['b', 2]])); }, VerificationError);
    Assert.throwsErrors(()=>{ g1.removeCssClass(new Set()); }, VerificationError);
    Assert.throwsErrors(()=>{ g1.removeCssClass(new Set([1,2,3])); }, VerificationError);
    Assert.throwsErrors(()=>{ g1.removeCssClass(/123/); }, VerificationError);
    Assert.throwsErrors(()=>{ g1.removeCssClass(new RegExp('123')); }, VerificationError);
    Assert.throwsErrors(()=>{ g1.removeCssClass({}); }, VerificationError);
    Assert.throwsErrors(()=>{ g1.removeCssClass({a:1, b:2}); }, VerificationError);
    Assert.throwsErrors(()=>{ g1.removeCssClass(new Object()); }, VerificationError);

    // 清空测试对象的属性、样式、内容。
    g1.clearAttributes();
    g1.clearCssClasses();
    g1.clearContents();

    // 首先确认 测试对象的当前信息
    Assert.equalsStrictly('<div></div>', g1.toHtmlString());
    g1.addCssClass('aaa bbb ccc ddd');
    Assert.equalsStrictly('<div class="aaa bbb ccc ddd"></div>', g1.toHtmlString());

    // 开始测试 removeCssClass
    g1.removeCssClass('a'); // 这里不匹配不删除
    Assert.equalsStrictly('<div class="aaa bbb ccc ddd"></div>', g1.toHtmlString());
    g1.removeCssClass('ccc');
    Assert.equalsStrictly('<div class="aaa bbb ddd"></div>', g1.toHtmlString());
    g1.removeCssClass('aaa');
    Assert.equalsStrictly('<div class="bbb ddd"></div>', g1.toHtmlString());
    g1.removeCssClass('DDD'); // 不匹配不删除
    Assert.equalsStrictly('<div class="bbb ddd"></div>', g1.toHtmlString());

    //参数测试
    Assert.throwsErrors(()=>{ g1.removeAttribute(undefined); }, VerificationError);
    Assert.throwsErrors(()=>{ g1.removeAttribute(null); }, VerificationError);
    Assert.throwsErrors(()=>{ g1.removeAttribute(NaN); }, VerificationError);
    Assert.throwsErrors(()=>{ g1.removeAttribute(''); }, VerificationError);
    Assert.throwsErrorsNone(()=>{ g1.removeAttribute('sss'); });
    Assert.throwsErrors(()=>{ g1.removeAttribute(new String('')); }, VerificationError);
    Assert.throwsErrorsNone(()=>{ g1.removeAttribute(new String('sss')); });
    Assert.throwsErrors(()=>{ g1.removeAttribute(123); }, VerificationError);
    Assert.throwsErrors(()=>{ g1.removeAttribute(-1); }, VerificationError);
    Assert.throwsErrors(()=>{ g1.removeAttribute(new Number(123)); }, VerificationError);
    Assert.throwsErrors(()=>{ g1.removeAttribute(new Number(-1)); }, VerificationError);
    Assert.throwsErrors(()=>{ g1.removeAttribute(true); }, VerificationError);
    Assert.throwsErrors(()=>{ g1.removeAttribute(false); }, VerificationError);
    Assert.throwsErrors(()=>{ g1.removeAttribute(new Boolean(true)); }, VerificationError);
    Assert.throwsErrors(()=>{ g1.removeAttribute(new Boolean(false)); }, VerificationError);
    Assert.throwsErrors(()=>{ g1.removeAttribute(Symbol('uid')); }, VerificationError);
    Assert.throwsErrors(()=>{ g1.removeAttribute(Symbol.for('uid')); }, VerificationError);
    Assert.throwsErrors(()=>{ g1.removeAttribute(Error); }, VerificationError);
    Assert.throwsErrors(()=>{ g1.removeAttribute(Bootstrap5Object); }, VerificationError);
    Assert.throwsErrors(()=>{ g1.removeAttribute(testBootstrap5ObjectCreate); }, VerificationError);
    Assert.throwsErrors(()=>{ g1.removeAttribute(function(){}); }, VerificationError);
    Assert.throwsErrors(()=>{ g1.removeAttribute(()=>{}); }, VerificationError);
    Assert.throwsErrors(()=>{ g1.removeAttribute([]); }, VerificationError);
    Assert.throwsErrors(()=>{ g1.removeAttribute([1,2,3]); }, VerificationError);
    Assert.throwsErrors(()=>{ g1.removeAttribute([[]]); }, VerificationError);
    Assert.throwsErrors(()=>{ g1.removeAttribute([[1,2,3],[4,5,6]]); }, VerificationError);
    Assert.throwsErrors(()=>{ g1.removeAttribute(new Map()); }, VerificationError);
    Assert.throwsErrors(()=>{ g1.removeAttribute(new Map([['a',1],['b', 2]])); }, VerificationError);
    Assert.throwsErrors(()=>{ g1.removeAttribute(new Set()); }, VerificationError);
    Assert.throwsErrors(()=>{ g1.removeAttribute(new Set([1,2,3])); }, VerificationError);
    Assert.throwsErrors(()=>{ g1.removeAttribute(/123/); }, VerificationError);
    Assert.throwsErrors(()=>{ g1.removeAttribute(new RegExp('123')); }, VerificationError);
    Assert.throwsErrors(()=>{ g1.removeAttribute({}); }, VerificationError);
    Assert.throwsErrors(()=>{ g1.removeAttribute({a:1, b:2}); }, VerificationError);
    Assert.throwsErrors(()=>{ g1.removeAttribute(new Object()); }, VerificationError);

    // 清空测试对象的属性、样式、内容。
    g1.clearAttributes();
    g1.clearCssClasses();
    g1.clearContents();

    // 增加测试数据
    g1.addAttributeByObject({test1:'a', test2:true, test3:123, test4:'sssss'});
    Assert.equalsStrictly('<div test1="a" test2="true" test3="123" test4="sssss"></div>', g1.toHtmlString());

    // 测试删除属性的操作
    g1.removeAttribute('test3');
    Assert.equalsStrictly('<div test1="a" test2="true" test4="sssss"></div>', g1.toHtmlString());
    g1.removeAttribute('test1');
    Assert.equalsStrictly('<div test2="true" test4="sssss"></div>', g1.toHtmlString());
    g1.removeAttribute('test2');
    Assert.equalsStrictly('<div test4="sssss"></div>', g1.toHtmlString());
    g1.removeAttribute('TEST4'); // 这里设置为大写，正常的话内部会统一转小写再匹配的
    Assert.equalsStrictly('<div></div>', g1.toHtmlString());
}

function testBootstrap5ObjectHas(){
    
    // 创建一个测试对象
    let g1 = new Bootstrap5Object('div', {id:'myTest1'}, ['测试']);

    // 参数检测
    Assert.throwsErrors(()=>{ g1.hasAttribute(undefined); }, VerificationError); 
    Assert.throwsErrors(()=>{ g1.hasAttribute(null); }, VerificationError); 
    Assert.throwsErrors(()=>{ g1.hasAttribute(NaN); }, VerificationError); 
    Assert.throwsErrors(()=>{ g1.hasAttribute(''); }, VerificationError); 
    Assert.throwsErrorsNone(()=>{ g1.hasAttribute('sss'); }, VerificationError); 
    Assert.throwsErrors(()=>{ g1.hasAttribute(new String('')); }, VerificationError); 
    Assert.throwsErrorsNone(()=>{ g1.hasAttribute(new String('sss')); }, VerificationError); 
    Assert.throwsErrors(()=>{ g1.hasAttribute(123); }, VerificationError); 
    Assert.throwsErrors(()=>{ g1.hasAttribute(-1); }, VerificationError); 
    Assert.throwsErrors(()=>{ g1.hasAttribute(new Number(123)); }, VerificationError); 
    Assert.throwsErrors(()=>{ g1.hasAttribute(new Number(-1)); }, VerificationError); 
    Assert.throwsErrors(()=>{ g1.hasAttribute(true); }, VerificationError); 
    Assert.throwsErrors(()=>{ g1.hasAttribute(false); }, VerificationError); 
    Assert.throwsErrors(()=>{ g1.hasAttribute(new Boolean(true)); }, VerificationError); 
    Assert.throwsErrors(()=>{ g1.hasAttribute(new Boolean(false)); }, VerificationError); 
    Assert.throwsErrors(()=>{ g1.hasAttribute(Symbol('uid')); }, VerificationError); 
    Assert.throwsErrors(()=>{ g1.hasAttribute(Symbol.for('uid')); }, VerificationError); 
    Assert.throwsErrors(()=>{ g1.hasAttribute(Error); }, VerificationError); 
    Assert.throwsErrors(()=>{ g1.hasAttribute(Bootstrap5Object); }, VerificationError); 
    Assert.throwsErrors(()=>{ g1.hasAttribute(testBootstrap5ObjectCreate); }, VerificationError); 
    Assert.throwsErrors(()=>{ g1.hasAttribute(function(){}); }, VerificationError); 
    Assert.throwsErrors(()=>{ g1.hasAttribute(()=>{}); }, VerificationError); 
    Assert.throwsErrors(()=>{ g1.hasAttribute([]); }, VerificationError); 
    Assert.throwsErrors(()=>{ g1.hasAttribute([1,2,3]); }, VerificationError); 
    Assert.throwsErrors(()=>{ g1.hasAttribute([[]]); }, VerificationError); 
    Assert.throwsErrors(()=>{ g1.hasAttribute([[1,2,3],[4,5,6]]); }, VerificationError); 
    Assert.throwsErrors(()=>{ g1.hasAttribute(new Map()); }, VerificationError); 
    Assert.throwsErrors(()=>{ g1.hasAttribute(new Map([['a',1],['b', 2]])); }, VerificationError); 
    Assert.throwsErrors(()=>{ g1.hasAttribute(new Set()); }, VerificationError); 
    Assert.throwsErrors(()=>{ g1.hasAttribute(new Set([1,2,3])); }, VerificationError); 
    Assert.throwsErrors(()=>{ g1.hasAttribute(/123/); }, VerificationError); 
    Assert.throwsErrors(()=>{ g1.hasAttribute(new RegExp('123')); }, VerificationError); 
    Assert.throwsErrors(()=>{ g1.hasAttribute({}); }, VerificationError); 
    Assert.throwsErrors(()=>{ g1.hasAttribute({a:1, b:2}); }, VerificationError); 
    Assert.throwsErrors(()=>{ g1.hasAttribute(new Object()); }, VerificationError); 

    // 清空数据
    g1.clearAttributes();
    g1.clearCssClasses();
    g1.clearContents();

    // 开始数值校验(不管怎么写，内部的属性名一定是小写存储的。所以应该测试 属性名有大写的情况)
    g1.addAttributeByObject({Id:123, Name:'tom', Age:-1, Addr:'中国广东省'});
    g1.addAttribute('TEST', true);
    Assert.equalsStrictly(true, g1.hasAttribute('id'));
    Assert.equalsStrictly(true, g1.hasAttribute('ID'));
    Assert.equalsStrictly(true, g1.hasAttribute('name'));
    Assert.equalsStrictly(true, g1.hasAttribute('NAME'));
    Assert.equalsStrictly(true, g1.hasAttribute('age'));
    Assert.equalsStrictly(true, g1.hasAttribute('AGE'));
    Assert.equalsStrictly(true, g1.hasAttribute('addr'));
    Assert.equalsStrictly(true, g1.hasAttribute('ADDR'));
    Assert.equalsStrictly(true, g1.hasAttribute('test'));
    Assert.equalsStrictly(true, g1.hasAttribute('TEST'));
    Assert.equalsStrictly(false, g1.hasAttribute('sss'));

    // 参数检测
    Assert.throwsErrors(()=>{ g1.hasCssClass(undefined); }, VerificationError); 
    Assert.throwsErrors(()=>{ g1.hasCssClass(null); }, VerificationError); 
    Assert.throwsErrors(()=>{ g1.hasCssClass(NaN); }, VerificationError); 
    Assert.throwsErrors(()=>{ g1.hasCssClass(''); }, VerificationError); 
    Assert.throwsErrorsNone(()=>{ g1.hasCssClass('sss'); }); 
    Assert.throwsErrors(()=>{ g1.hasCssClass(new String('')); }, VerificationError); 
    Assert.throwsErrorsNone(()=>{ g1.hasCssClass(new String('sss')); }); 
    Assert.throwsErrors(()=>{ g1.hasCssClass(123); }, VerificationError); 
    Assert.throwsErrors(()=>{ g1.hasCssClass(-1); }, VerificationError); 
    Assert.throwsErrors(()=>{ g1.hasCssClass(new Number(123)); }, VerificationError); 
    Assert.throwsErrors(()=>{ g1.hasCssClass(new Number(-1)); }, VerificationError); 
    Assert.throwsErrors(()=>{ g1.hasCssClass(true); }, VerificationError); 
    Assert.throwsErrors(()=>{ g1.hasCssClass(false); }, VerificationError); 
    Assert.throwsErrors(()=>{ g1.hasCssClass(new Boolean(true)); }, VerificationError); 
    Assert.throwsErrors(()=>{ g1.hasCssClass(new Boolean(false)); }, VerificationError); 
    Assert.throwsErrors(()=>{ g1.hasCssClass(Symbol('uid')); }, VerificationError); 
    Assert.throwsErrors(()=>{ g1.hasCssClass(Symbol.for('uid')); }, VerificationError); 
    Assert.throwsErrors(()=>{ g1.hasCssClass(Error); }, VerificationError); 
    Assert.throwsErrors(()=>{ g1.hasCssClass(Bootstrap5Object); }, VerificationError); 
    Assert.throwsErrors(()=>{ g1.hasCssClass(testBootstrap5ObjectCreate); }, VerificationError); 
    Assert.throwsErrors(()=>{ g1.hasCssClass(function(){}); }, VerificationError); 
    Assert.throwsErrors(()=>{ g1.hasCssClass(()=>{}); }, VerificationError); 
    Assert.throwsErrors(()=>{ g1.hasCssClass([]); }, VerificationError); 
    Assert.throwsErrors(()=>{ g1.hasCssClass([1,2,3]); }, VerificationError); 
    Assert.throwsErrors(()=>{ g1.hasCssClass([[]]); }, VerificationError); 
    Assert.throwsErrors(()=>{ g1.hasCssClass([[1,2,3],[4,5,6]]); }, VerificationError); 
    Assert.throwsErrors(()=>{ g1.hasCssClass(new Map()); }, VerificationError); 
    Assert.throwsErrors(()=>{ g1.hasCssClass(new Map([['a',1],['b', 2]])); }, VerificationError); 
    Assert.throwsErrors(()=>{ g1.hasCssClass(new Set()); }, VerificationError); 
    Assert.throwsErrors(()=>{ g1.hasCssClass(new Set([1,2,3])); }, VerificationError); 
    Assert.throwsErrors(()=>{ g1.hasCssClass(/123/); }, VerificationError); 
    Assert.throwsErrors(()=>{ g1.hasCssClass(new RegExp('123')); }, VerificationError); 
    Assert.throwsErrors(()=>{ g1.hasCssClass({}); }, VerificationError); 
    Assert.throwsErrors(()=>{ g1.hasCssClass({a:1, b:2}); }, VerificationError); 
    Assert.throwsErrors(()=>{ g1.hasCssClass(new Object()); }, VerificationError); 

    // 清空数据
    g1.clearAttributes();
    g1.clearCssClasses();
    g1.clearContents();

    // 开始数值校验(css 信息是精确匹配，区分大小写的)
    g1.addCssClass('   a    b   c   aa   bb   cc');
    Assert.equalsStrictly(true, g1.hasCssClass('a'));
    Assert.equalsStrictly(true, g1.hasCssClass('b'));
    Assert.equalsStrictly(true, g1.hasCssClass('c'));
    Assert.equalsStrictly(true, g1.hasCssClass('aa'));
    Assert.equalsStrictly(true, g1.hasCssClass('bb'));
    Assert.equalsStrictly(true, g1.hasCssClass('cc'));
    Assert.equalsStrictly(false, g1.hasCssClass('A'));
    Assert.equalsStrictly(false, g1.hasCssClass('B'));
    Assert.equalsStrictly(false, g1.hasCssClass('C'));
    Assert.equalsStrictly(false, g1.hasCssClass('AA'));
    Assert.equalsStrictly(false, g1.hasCssClass('BB'));
    Assert.equalsStrictly(false, g1.hasCssClass('CC'));
}

function testBootstrap5ObjectClear(){

    // 创建一个测试对象
    let g1 = new Bootstrap5Object('div', {id:'myTest1'}, ['测试']);

    // 先检测一次属性和内容是否匹配
    Assert.equalsStrictly('<div id="myTest1">测试</div>', g1.toHtmlString());

    // 开始添加属性、样式、内容
    g1.addAttribute('test2', true);
    g1.addAttributeByObject({a:1, b:2, c:3});
    g1.addCssClass(' sdf sf df d fdsf   sdf s');
    g1.addContentElements('aaaa', 'bbbb', 'cccc', new Bootstrap5Object());

    g1.clearCssClasses();
    Assert.equalsStrictly(
        '<div id="myTest1" test2="true" a="1" b="2" c="3">测试aaaabbbbcccc<unknow></unknow></div>', 
        g1.toHtmlString().replace(/[\n]/g, ''));
    
    g1.clearAttributes();
    Assert.equalsStrictly('<div>测试aaaabbbbcccc<unknow></unknow></div>', g1.toHtmlString().replace(/[\n]/g, ''));

    g1.clearContents();
    Assert.equalsStrictly('<div></div>', g1.toHtmlString());
}

function testBootstrap5ObjectTo(){

    // 创建一个测试对象
    let g1 = new Bootstrap5Object('div', {id:'myTest1'}, ['测试']);

    // 这里比对标签对象，构建的字符串信息
    Assert.equalsStrictly('<div id="myTest1">测试</div>', g1.toHtmlString().replace(/[\n]/g, '')); 
    
    // 按照 dom 转换处理，这个 Bootstrap5Object 对象，转换后应该是一个 HTMLElement 数组。然后里面是一个元素，标签为 DIV
    let elementsArr = g1.toHtmlDomObject();
    // 
    Assert.equalsStrictly(true, Array.isArray(elementsArr));
    Assert.equalsStrictly(true, elementsArr.length===1);
    Assert.equalsStrictly(true, isHtmlElement(elementsArr[0]));
    Assert.equalsStrictly(true, elementsArr[0] instanceof HTMLElement);
    Assert.equalsStrictly(true, elementsArr[0] instanceof HTMLDivElement);
    // 再比对属性和内容
    Assert.equalsStrictly(true, 'myTest1'===elementsArr[0].id);
    Assert.equalsStrictly(true, '测试'===elementsArr[0].innerHTML);
}

function testBootstrap5ObjectProteced(){

    // 这里测试的是受保护的方法 getContent 的处理

    // 创建一个测试对象
    let g1 = new Bootstrap5Object('div', {id:'myTest1'}, ['测试']);

    // 调取方法，看看内部是否一个数组，且值跟传入的相同
    let protectedContent = g1[PROTECTED_GET_CONTENT]();

    Assert.equalsStrictly(true, Array.isArray(protectedContent));
    Assert.equalsStrictly(true, protectedContent.length===1);
    Assert.equalsStrictly(true, protectedContent[0]==='测试');

    // 这里增加几个内容，看看是否保持一致
    let bsObj2 = new Bootstrap5Object();
    g1.addContentElements('aaa', bsObj2);

    // 再比对
    Assert.equalsStrictly(true, Array.isArray(protectedContent));
    Assert.equalsStrictly(true, protectedContent.length===3);
    Assert.equalsStrictly(true, protectedContent[0]==='测试');
    Assert.equalsStrictly(true, protectedContent[1]==='aaa');
    Assert.equalsStrictly(true, protectedContent[2]===bsObj2);
}

/**
 * 导出测试函数
 */
export {
    testBootstrap5ObjectCreate, testBootstrap5ObjectAble, testBootstrap5ObjectGet, testBootstrap5ObjectAdd,
    testBootstrap5ObjectRemove, testBootstrap5ObjectHas, testBootstrap5ObjectClear, testBootstrap5ObjectTo,
    testBootstrap5ObjectProteced
}