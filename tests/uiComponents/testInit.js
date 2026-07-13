/**
 * In my license, all codes can be shared free of charge. 
 * However, If my code is taken for commercial use, please maintain it yourself. 
 * I am not obligated to take responsibility for your business application.
 * Here is my email "pangdongcan@live.com"
 * 
 * Copyright © 2026 Micheal Pang. All rights reserved.
 * 
 * @file This file "testInit.js" is part of project "pdc-js-framework" , which is belong to Michael Pang (It's Me).
 * @author  Micheal Pang (Dongcan Pang)
 * @since  2026-07-13
 * @description  这里是 UI Components 组件的 init 模块测试
 */
"use strict"; // 这是严格模式下的 Javascript 代码

// ============ 导入要测试的内容

import { MY_ELEC_API, IS_IN_APP, documentReady, actionBinding, actionBindingBySelector  } from "../../uiComponents/init.js";

// ============ 导入测试工具

import { Assert } from "../testTools.js";
import { NotNullValue, isNullValue } from "../../utils/datatype.js";
import { DOM_PARSER, drawTag } from "../../utils/html.js";
import { VerificationError } from "../../models/errors.js";

// document ready 的测试

documentReady(()=>{
    // 插入一个信息到页面上，然后用测试函数读取
    let myDoc = DOM_PARSER.parseFromString('<myhide id="testReady" class="d-none">测试</myhide>', 'text/html');
    document.body.append(myDoc.getElementById('testReady'));
    console.log(new String(), document.readyState);
});

// 其它测试

function testMyElecApi() {
    // 一般来说，electron 的运行区分：浏览器渲染进程、主进程。一般是用中间通讯对象，来维持进程间通讯。
    // 它的命名一般是 ElectronAPI
    if(window.ElectronAPI || window.parent.ElectronAPI) {
        Assert.equalsStrictly(true, NotNullValue(MY_ELEC_API));
    }else{
        Assert.equalsStrictly(true, isNullValue(MY_ELEC_API));
    }
}

function testIsInApp() {
    // 一般来说，electron 的运行区分：浏览器渲染进程、主进程。一般是用中间通讯对象，来维持进程间通讯。
    // 它的命名一般是 ElectronAPI
    if(window.ElectronAPI || window.parent.ElectronAPI) {
        Assert.equalsStrictly(true, IS_IN_APP);
    }else{
        Assert.equalsStrictly(false, IS_IN_APP);
    }
}

function testErrorAlert(){
    // 这里是测试，一些未捕捉的异常，能否弹出来。
    // 很多时候，一些页面上的错误很难调试，如果弹出来会好一些。
    // 由于测试函数里面有捕捉处理，检测需要麻烦一点。
    let testHtml = `
    <div id="testErrorAlert" class="p-2">
        <button id="btnTestErrorAlert" class="btn btn-primary">测试 Error 捕捉 (点击)</button>
    </div>
    `;
    let myDoc = DOM_PARSER.parseFromString(testHtml, 'text/html');
    document.body.append(myDoc.getElementById('testErrorAlert'));
    let myTestBtn = document.getElementById('btnTestErrorAlert');
    myTestBtn.addEventListener('click', ()=>{
        // 这里 b 是没有定义的。会抛一个异常
        let a = b.toString();
    });
}

function testUnhandledrejectionAlert(){
    // 这里是测试，一些未捕捉的异常，能否弹出来。
    // 很多时候，一些页面上的错误很难调试，如果弹出来会好一些。
    // 由于测试函数里面有捕捉处理，检测需要麻烦一点。
    let testHtml = `
    <div id="testUnhandledrejectionAlert" class="p-2">
        <button id="btnTestUnhandledrejectionAlert" class="btn btn-success">测试 reject 捕捉 (点击)</button>
    </div>
    `;
    let myDoc = DOM_PARSER.parseFromString(testHtml, 'text/html');
    document.body.append(myDoc.getElementById('testUnhandledrejectionAlert'));
    let myTestBtn = document.getElementById('btnTestUnhandledrejectionAlert');
    myTestBtn.addEventListener('click', ()=>{
        // 这里直接 promise reject
        Promise.reject('测试一下');
    });
}

function testDocumentReady() {
    // 这里比对插入信息是否一致
    let content = document.getElementById('testReady').getHTML();
    Assert.equalsStrictly('测试', content);
}

function testActionBinding() {

    // 在我的框架中， js 的数据类型中主要有以下几种：
    // ===> 空（undefined\null\NaN）、
    // ===> 字符串（基础+对象）、数字（基础+对象）、布尔（基础+对象）、Symbol、类、函数、
    // ===> 数组、Map、Set、
    // ===> 正则、普通对象

    // 首先是参数检测
    Assert.throwsErrors(()=>{ actionBinding(undefined, 'click', (event)=>{}); }, VerificationError);
    Assert.throwsErrors(()=>{ actionBinding(null, 'click', (event)=>{}); }, VerificationError);
    Assert.throwsErrors(()=>{ actionBinding(NaN, 'click', (event)=>{}); }, VerificationError);
    Assert.throwsErrors(()=>{ actionBinding('', 'click', (event)=>{}); }, VerificationError);
    Assert.throwsErrors(()=>{ actionBinding('sss', 'click', (event)=>{}); }, VerificationError);
    Assert.throwsErrors(()=>{ actionBinding(new String(''), 'click', (event)=>{}); }, VerificationError);
    Assert.throwsErrors(()=>{ actionBinding(new String('sss'), 'click', (event)=>{}); }, VerificationError);
    Assert.throwsErrors(()=>{ actionBinding(123, 'click', (event)=>{}); }, VerificationError);
    Assert.throwsErrors(()=>{ actionBinding(-1, 'click', (event)=>{}); }, VerificationError);
    Assert.throwsErrors(()=>{ actionBinding(new Number(123), 'click', (event)=>{}); }, VerificationError);
    Assert.throwsErrors(()=>{ actionBinding(new Number(-1), 'click', (event)=>{}); }, VerificationError);
    Assert.throwsErrors(()=>{ actionBinding(true, 'click', (event)=>{}); }, VerificationError);
    Assert.throwsErrors(()=>{ actionBinding(false, 'click', (event)=>{}); }, VerificationError);
    Assert.throwsErrors(()=>{ actionBinding(new Boolean(true), 'click', (event)=>{}); }, VerificationError);
    Assert.throwsErrors(()=>{ actionBinding(new Boolean(false), 'click', (event)=>{}); }, VerificationError);
    Assert.throwsErrors(()=>{ actionBinding(Symbol('uid'), 'click', (event)=>{}); }, VerificationError);
    Assert.throwsErrors(()=>{ actionBinding(Symbol.for('guid'), 'click', (event)=>{}); }, VerificationError);
    Assert.throwsErrors(()=>{ actionBinding(Error, 'click', (event)=>{}); }, VerificationError);
    Assert.throwsErrors(()=>{ actionBinding(String, 'click', (event)=>{}); }, VerificationError);
    Assert.throwsErrors(()=>{ actionBinding(testActionBinding, 'click', (event)=>{}); }, VerificationError);
    Assert.throwsErrors(()=>{ actionBinding(function(){}, 'click', (event)=>{}); }, VerificationError);
    Assert.throwsErrors(()=>{ actionBinding(()=>{}, 'click', (event)=>{}); }, VerificationError);
    Assert.throwsErrors(()=>{ actionBinding([], 'click', (event)=>{}); }, VerificationError);
    Assert.throwsErrors(()=>{ actionBinding([1,2,3], 'click', (event)=>{}); }, VerificationError);
    Assert.throwsErrors(()=>{ actionBinding([[]], 'click', (event)=>{}); }, VerificationError);
    Assert.throwsErrors(()=>{ actionBinding([[1,2,3],[4,5,6]], 'click', (event)=>{}); }, VerificationError);
    Assert.throwsErrors(()=>{ actionBinding(new Map(), 'click', (event)=>{}); }, VerificationError);
    Assert.throwsErrors(()=>{ actionBinding(new Map([['a',1],['b',2]]), 'click', (event)=>{}); }, VerificationError);
    Assert.throwsErrors(()=>{ actionBinding(new Set(), 'click', (event)=>{}); }, VerificationError);
    Assert.throwsErrors(()=>{ actionBinding(new Set([1,2,3]), 'click', (event)=>{}); }, VerificationError);
    Assert.throwsErrors(()=>{ actionBinding(/123/, 'click', (event)=>{}); }, VerificationError);
    Assert.throwsErrors(()=>{ actionBinding({a:1, b:2}, 'click', (event)=>{}); }, VerificationError);
    Assert.throwsErrors(()=>{ actionBinding(new Object(), 'click', (event)=>{}); }, VerificationError);
    // 
    Assert.throwsErrorsNone(()=>{
        actionBinding(document, 'click', (event)=>{ console.log(new Date(), 'document click ...') });
        actionBinding(document.body, 'click', (event)=>{ console.log(new Date(), 'document body click ...') });
        actionBinding(document.getElementById('testReady'), 'click', (event)=>{ console.log(new Date(), 'testReady click ...') });
        actionBinding(document.querySelector('#testReady'), 'click', (event)=>{ console.log(new Date(), 'testReady click ... 2') });
        actionBinding(document.getElementsByTagName('div'), 'click', (event)=>{ console.log(new Date(), 'divs click ...') });
        actionBinding(document.querySelectorAll('div'), 'click', (event)=>{ console.log(new Date(), 'divs click ... 2') });
        actionBinding(
            [document.getElementById('testReady'), document.getElementById('result')], 
            'click', (event)=>{ console.log(new Date(), 'Array click ...') });
    });
    // 第2个参数
    Assert.throwsErrors(()=>{ actionBinding(document, undefined, (event)=>{}); }, VerificationError);
    Assert.throwsErrors(()=>{ actionBinding(document, null, (event)=>{}); }, VerificationError);
    Assert.throwsErrors(()=>{ actionBinding(document, NaN, (event)=>{}); }, VerificationError);
    Assert.throwsErrors(()=>{ actionBinding(document, '', (event)=>{}); }, VerificationError);
    Assert.throwsErrorsNone(()=>{ actionBinding(document, 'sss', (event)=>{}); });
    Assert.throwsErrors(()=>{ actionBinding(document, new String(''), (event)=>{}); }, VerificationError);
    Assert.throwsErrorsNone(()=>{ actionBinding(document, new String('sss'), (event)=>{}); });
    Assert.throwsErrors(()=>{ actionBinding(document, 123, (event)=>{}); }, VerificationError);
    Assert.throwsErrors(()=>{ actionBinding(document, -1, (event)=>{}); }, VerificationError);
    Assert.throwsErrors(()=>{ actionBinding(document, new Number(123), (event)=>{}); }, VerificationError);
    Assert.throwsErrors(()=>{ actionBinding(document, new Number(-1), (event)=>{}); }, VerificationError);
    Assert.throwsErrors(()=>{ actionBinding(document, true, (event)=>{}); }, VerificationError);
    Assert.throwsErrors(()=>{ actionBinding(document, false, (event)=>{}); }, VerificationError);
    Assert.throwsErrors(()=>{ actionBinding(document, new Boolean(true), (event)=>{}); }, VerificationError);
    Assert.throwsErrors(()=>{ actionBinding(document, new Boolean(false), (event)=>{}); }, VerificationError);
    Assert.throwsErrors(()=>{ actionBinding(document, Symbol('uid'), (event)=>{}); }, VerificationError);
    Assert.throwsErrors(()=>{ actionBinding(document, Symbol.for('guid'), (event)=>{}); }, VerificationError);
    Assert.throwsErrors(()=>{ actionBinding(document, Error, (event)=>{}); }, VerificationError);
    Assert.throwsErrors(()=>{ actionBinding(document, String, (event)=>{}); }, VerificationError);
    Assert.throwsErrors(()=>{ actionBinding(document, testActionBinding, (event)=>{}); }, VerificationError);
    Assert.throwsErrors(()=>{ actionBinding(document, function(){}, (event)=>{}); }, VerificationError);
    Assert.throwsErrors(()=>{ actionBinding(document, ()=>{}, (event)=>{}); }, VerificationError);
    Assert.throwsErrors(()=>{ actionBinding(document, [], (event)=>{}); }, VerificationError);
    Assert.throwsErrors(()=>{ actionBinding(document, [1,2,3], (event)=>{}); }, VerificationError);
    Assert.throwsErrors(()=>{ actionBinding(document, [[]], (event)=>{}); }, VerificationError);
    Assert.throwsErrors(()=>{ actionBinding(document, [[1,2,3],[4,5,6]], (event)=>{}); }, VerificationError);
    Assert.throwsErrors(()=>{ actionBinding(document, new Map(), (event)=>{}); }, VerificationError);
    Assert.throwsErrors(()=>{ actionBinding(document, new Map([['a',1],['b',2]]), (event)=>{}); }, VerificationError);
    Assert.throwsErrors(()=>{ actionBinding(document, new Set(), (event)=>{}); }, VerificationError);
    Assert.throwsErrors(()=>{ actionBinding(document, new Set([1,2,3]), (event)=>{}); }, VerificationError);
    Assert.throwsErrors(()=>{ actionBinding(document, /123/, (event)=>{}); }, VerificationError);
    Assert.throwsErrors(()=>{ actionBinding(document, {a:1, b:2}, (event)=>{}); }, VerificationError);
    Assert.throwsErrors(()=>{ actionBinding(document, new Object(), (event)=>{}); }, VerificationError);
    //
    Assert.throwsErrorsNone(()=>{
        // 测试多个事件绑定
        actionBinding(document, 'dblclick, mouseup, mousedown', (event)=>{ console.log(new Date(), event.type, event); });
    });
    // 第3个参数
    let testFunc1 = (event)=>{ console.log(new Date(), event.type, event); }
    Assert.throwsErrors(()=>{ actionBinding(document, 'mouseup', undefined); }, VerificationError);
    Assert.throwsErrors(()=>{ actionBinding(document, 'mouseup', null); }, VerificationError);
    Assert.throwsErrors(()=>{ actionBinding(document, 'mouseup', NaN); }, VerificationError);
    Assert.throwsErrors(()=>{ actionBinding(document, 'mouseup', ''); }, VerificationError);
    Assert.throwsErrors(()=>{ actionBinding(document, 'mouseup', 'sss'); }, VerificationError);
    Assert.throwsErrors(()=>{ actionBinding(document, 'mouseup', new String('')); }, VerificationError);
    Assert.throwsErrors(()=>{ actionBinding(document, 'mouseup', new String('sss')); }, VerificationError);
    Assert.throwsErrors(()=>{ actionBinding(document, 'mouseup', 123); }, VerificationError);
    Assert.throwsErrors(()=>{ actionBinding(document, 'mouseup', -1); }, VerificationError);
    Assert.throwsErrors(()=>{ actionBinding(document, 'mouseup', new Number(123)); }, VerificationError);
    Assert.throwsErrors(()=>{ actionBinding(document, 'mouseup', new Number(-1)); }, VerificationError);
    Assert.throwsErrors(()=>{ actionBinding(document, 'mouseup', true); }, VerificationError);
    Assert.throwsErrors(()=>{ actionBinding(document, 'mouseup', false); }, VerificationError);
    Assert.throwsErrors(()=>{ actionBinding(document, 'mouseup', new Boolean(true)); }, VerificationError);
    Assert.throwsErrors(()=>{ actionBinding(document, 'mouseup', new Boolean(false)); }, VerificationError);
    Assert.throwsErrors(()=>{ actionBinding(document, 'mouseup', Symbol('uid')); }, VerificationError);
    Assert.throwsErrors(()=>{ actionBinding(document, 'mouseup', Symbol.for('guid')); }, VerificationError);
    Assert.throwsErrorsNone(()=>{ actionBinding(document, 'mouseup', Error); });
    Assert.throwsErrorsNone(()=>{ actionBinding(document, 'mouseup', String); });
    Assert.throwsErrorsNone(()=>{ actionBinding(document, 'mouseup', testFunc1); });
    Assert.throwsErrorsNone(()=>{ actionBinding(document, 'mouseup', function(){}); });
    Assert.throwsErrorsNone(()=>{ actionBinding(document, 'mouseup', ()=>{}); });
    Assert.throwsErrors(()=>{ actionBinding(document, 'mouseup', []); }, VerificationError);
    Assert.throwsErrors(()=>{ actionBinding(document, 'mouseup', [1,2,3]); }, VerificationError);
    Assert.throwsErrors(()=>{ actionBinding(document, 'mouseup', [[]]); }, VerificationError);
    Assert.throwsErrors(()=>{ actionBinding(document, 'mouseup', [[1,2,3],[4,5,6]]); }, VerificationError);
    Assert.throwsErrors(()=>{ actionBinding(document, 'mouseup', new Map()); }, VerificationError);
    Assert.throwsErrors(()=>{ actionBinding(document, 'mouseup', new Map([['a',1],['b',2]])); }, VerificationError);
    Assert.throwsErrors(()=>{ actionBinding(document, 'mouseup', new Set()); }, VerificationError);
    Assert.throwsErrors(()=>{ actionBinding(document, 'mouseup', new Set([1,2,3])); }, VerificationError);
    Assert.throwsErrors(()=>{ actionBinding(document, 'mouseup', /123/); }, VerificationError);
    Assert.throwsErrors(()=>{ actionBinding(document, 'mouseup', {a:1, b:2}); }, VerificationError);
    Assert.throwsErrors(()=>{ actionBinding(document, 'mouseup', new Object()); }, VerificationError);
}

function testActionBindingBySelector() {
    
    // 在我的框架中， js 的数据类型中主要有以下几种：
    // ===> 空（undefined\null\NaN）、
    // ===> 字符串（基础+对象）、数字（基础+对象）、布尔（基础+对象）、Symbol、类、函数、
    // ===> 数组、Map、Set、
    // ===> 正则、普通对象

    // 首先是参数检测
    Assert.throwsErrors(()=>{ actionBindingBySelector(undefined, 'click', (event)=>{}); }, VerificationError);
    Assert.throwsErrors(()=>{ actionBindingBySelector(null, 'click', (event)=>{}); }, VerificationError);
    Assert.throwsErrors(()=>{ actionBindingBySelector(NaN, 'click', (event)=>{}); }, VerificationError);
    Assert.throwsErrors(()=>{ actionBindingBySelector('', 'click', (event)=>{}); }, VerificationError);
    Assert.throwsErrors(()=>{ actionBindingBySelector('sss', 'click', (event)=>{}); }, VerificationError);
    Assert.throwsErrors(()=>{ actionBindingBySelector(new String(''), 'click', (event)=>{}); }, VerificationError);
    Assert.throwsErrors(()=>{ actionBindingBySelector(new String('sss'), 'click', (event)=>{}); }, VerificationError);
    Assert.throwsErrors(()=>{ actionBindingBySelector(123, 'click', (event)=>{}); }, VerificationError);
    Assert.throwsErrors(()=>{ actionBindingBySelector(-1, 'click', (event)=>{}); }, VerificationError);
    Assert.throwsErrors(()=>{ actionBindingBySelector(new Number(123), 'click', (event)=>{}); }, VerificationError);
    Assert.throwsErrors(()=>{ actionBindingBySelector(new Number(-1), 'click', (event)=>{}); }, VerificationError);
    Assert.throwsErrors(()=>{ actionBindingBySelector(true, 'click', (event)=>{}); }, VerificationError);
    Assert.throwsErrors(()=>{ actionBindingBySelector(false, 'click', (event)=>{}); }, VerificationError);
    Assert.throwsErrors(()=>{ actionBindingBySelector(new Boolean(true), 'click', (event)=>{}); }, VerificationError);
    Assert.throwsErrors(()=>{ actionBindingBySelector(new Boolean(false), 'click', (event)=>{}); }, VerificationError);
    Assert.throwsErrors(()=>{ actionBindingBySelector(Symbol('uid'), 'click', (event)=>{}); }, VerificationError);
    Assert.throwsErrors(()=>{ actionBindingBySelector(Symbol.for('guid'), 'click', (event)=>{}); }, VerificationError);
    Assert.throwsErrors(()=>{ actionBindingBySelector(Error, 'click', (event)=>{}); }, VerificationError);
    Assert.throwsErrors(()=>{ actionBindingBySelector(String, 'click', (event)=>{}); }, VerificationError);
    Assert.throwsErrors(()=>{ actionBindingBySelector(testActionBindingBySelector, 'click', (event)=>{}); }, VerificationError);
    Assert.throwsErrors(()=>{ actionBindingBySelector(function(){}, 'click', (event)=>{}); }, VerificationError);
    Assert.throwsErrors(()=>{ actionBindingBySelector(()=>{}, 'click', (event)=>{}); }, VerificationError);
    Assert.throwsErrors(()=>{ actionBindingBySelector([], 'click', (event)=>{}); }, VerificationError);
    Assert.throwsErrors(()=>{ actionBindingBySelector([1,2,3], 'click', (event)=>{}); }, VerificationError);
    Assert.throwsErrors(()=>{ actionBindingBySelector([[]], 'click', (event)=>{}); }, VerificationError);
    Assert.throwsErrors(()=>{ actionBindingBySelector([[1,2,3],[4,5,6]], 'click', (event)=>{}); }, VerificationError);
    Assert.throwsErrors(()=>{ actionBindingBySelector(new Map(), 'click', (event)=>{}); }, VerificationError);
    Assert.throwsErrors(()=>{ actionBindingBySelector(new Map([['a',1],['b',2]]), 'click', (event)=>{}); }, VerificationError);
    Assert.throwsErrors(()=>{ actionBindingBySelector(new Set(), 'click', (event)=>{}); }, VerificationError);
    Assert.throwsErrors(()=>{ actionBindingBySelector(new Set([1,2,3]), 'click', (event)=>{}); }, VerificationError);
    Assert.throwsErrors(()=>{ actionBindingBySelector(/123/, 'click', (event)=>{}); }, VerificationError);
    Assert.throwsErrors(()=>{ actionBindingBySelector({a:1, b:2}, 'click', (event)=>{}); }, VerificationError);
    Assert.throwsErrors(()=>{ actionBindingBySelector(new Object(), 'click', (event)=>{}); }, VerificationError);
    // 
    Assert.throwsErrorsNone(()=>{
        actionBindingBySelector('#result', 'click', (event)=>{ console.log(new Date(), event.type, event); });
    });
    // 第2个参数
    Assert.throwsErrors(()=>{ actionBindingBySelector('#result', undefined, (event)=>{}); }, VerificationError);
    Assert.throwsErrors(()=>{ actionBindingBySelector('#result', null, (event)=>{}); }, VerificationError);
    Assert.throwsErrors(()=>{ actionBindingBySelector('#result', NaN, (event)=>{}); }, VerificationError);
    Assert.throwsErrors(()=>{ actionBindingBySelector('#result', '', (event)=>{}); }, VerificationError);
    Assert.throwsErrorsNone(()=>{ actionBindingBySelector('#result', 'sss', (event)=>{}); });
    Assert.throwsErrors(()=>{ actionBindingBySelector('#result', new String(''), (event)=>{}); }, VerificationError);
    Assert.throwsErrorsNone(()=>{ actionBindingBySelector('#result', new String('sss'), (event)=>{}); });
    Assert.throwsErrors(()=>{ actionBindingBySelector('#result', 123, (event)=>{}); }, VerificationError);
    Assert.throwsErrors(()=>{ actionBindingBySelector('#result', -1, (event)=>{}); }, VerificationError);
    Assert.throwsErrors(()=>{ actionBindingBySelector('#result', new Number(123), (event)=>{}); }, VerificationError);
    Assert.throwsErrors(()=>{ actionBindingBySelector('#result', new Number(-1), (event)=>{}); }, VerificationError);
    Assert.throwsErrors(()=>{ actionBindingBySelector('#result', true, (event)=>{}); }, VerificationError);
    Assert.throwsErrors(()=>{ actionBindingBySelector('#result', false, (event)=>{}); }, VerificationError);
    Assert.throwsErrors(()=>{ actionBindingBySelector('#result', new Boolean(true), (event)=>{}); }, VerificationError);
    Assert.throwsErrors(()=>{ actionBindingBySelector('#result', new Boolean(false), (event)=>{}); }, VerificationError);
    Assert.throwsErrors(()=>{ actionBindingBySelector('#result', Symbol('uid'), (event)=>{}); }, VerificationError);
    Assert.throwsErrors(()=>{ actionBindingBySelector('#result', Symbol.for('guid'), (event)=>{}); }, VerificationError);
    Assert.throwsErrors(()=>{ actionBindingBySelector('#result', Error, (event)=>{}); }, VerificationError);
    Assert.throwsErrors(()=>{ actionBindingBySelector('#result', String, (event)=>{}); }, VerificationError);
    Assert.throwsErrors(()=>{ actionBindingBySelector('#result', testActionBinding, (event)=>{}); }, VerificationError);
    Assert.throwsErrors(()=>{ actionBindingBySelector('#result', function(){}, (event)=>{}); }, VerificationError);
    Assert.throwsErrors(()=>{ actionBindingBySelector('#result', ()=>{}, (event)=>{}); }, VerificationError);
    Assert.throwsErrors(()=>{ actionBindingBySelector('#result', [], (event)=>{}); }, VerificationError);
    Assert.throwsErrors(()=>{ actionBindingBySelector('#result', [1,2,3], (event)=>{}); }, VerificationError);
    Assert.throwsErrors(()=>{ actionBindingBySelector('#result', [[]], (event)=>{}); }, VerificationError);
    Assert.throwsErrors(()=>{ actionBindingBySelector('#result', [[1,2,3],[4,5,6]], (event)=>{}); }, VerificationError);
    Assert.throwsErrors(()=>{ actionBindingBySelector('#result', new Map(), (event)=>{}); }, VerificationError);
    Assert.throwsErrors(()=>{ actionBindingBySelector('#result', new Map([['a',1],['b',2]]), (event)=>{}); }, VerificationError);
    Assert.throwsErrors(()=>{ actionBindingBySelector('#result', new Set(), (event)=>{}); }, VerificationError);
    Assert.throwsErrors(()=>{ actionBindingBySelector('#result', new Set([1,2,3]), (event)=>{}); }, VerificationError);
    Assert.throwsErrors(()=>{ actionBindingBySelector('#result', /123/, (event)=>{}); }, VerificationError);
    Assert.throwsErrors(()=>{ actionBindingBySelector('#result', {a:1, b:2}, (event)=>{}); }, VerificationError);
    Assert.throwsErrors(()=>{ actionBindingBySelector('#result', new Object(), (event)=>{}); }, VerificationError);
    //
    Assert.throwsErrorsNone(()=>{
        // 测试多个事件绑定
        actionBindingBySelector('#result', 'dblclick, mouseup, mousedown', (event)=>{ console.log(new Date(), event.type, event); });
    });
    // 第3个参数
    let testFunc1 = (event)=>{ console.log(new Date(), event.type, event); }
    Assert.throwsErrors(()=>{ actionBindingBySelector('#result', 'mouseup', undefined); }, VerificationError);
    Assert.throwsErrors(()=>{ actionBindingBySelector('#result', 'mouseup', null); }, VerificationError);
    Assert.throwsErrors(()=>{ actionBindingBySelector('#result', 'mouseup', NaN); }, VerificationError);
    Assert.throwsErrors(()=>{ actionBindingBySelector('#result', 'mouseup', ''); }, VerificationError);
    Assert.throwsErrors(()=>{ actionBindingBySelector('#result', 'mouseup', 'sss'); }, VerificationError);
    Assert.throwsErrors(()=>{ actionBindingBySelector('#result', 'mouseup', new String('')); }, VerificationError);
    Assert.throwsErrors(()=>{ actionBindingBySelector('#result', 'mouseup', new String('sss')); }, VerificationError);
    Assert.throwsErrors(()=>{ actionBindingBySelector('#result', 'mouseup', 123); }, VerificationError);
    Assert.throwsErrors(()=>{ actionBindingBySelector('#result', 'mouseup', -1); }, VerificationError);
    Assert.throwsErrors(()=>{ actionBindingBySelector('#result', 'mouseup', new Number(123)); }, VerificationError);
    Assert.throwsErrors(()=>{ actionBindingBySelector('#result', 'mouseup', new Number(-1)); }, VerificationError);
    Assert.throwsErrors(()=>{ actionBindingBySelector('#result', 'mouseup', true); }, VerificationError);
    Assert.throwsErrors(()=>{ actionBindingBySelector('#result', 'mouseup', false); }, VerificationError);
    Assert.throwsErrors(()=>{ actionBindingBySelector('#result', 'mouseup', new Boolean(true)); }, VerificationError);
    Assert.throwsErrors(()=>{ actionBindingBySelector('#result', 'mouseup', new Boolean(false)); }, VerificationError);
    Assert.throwsErrors(()=>{ actionBindingBySelector('#result', 'mouseup', Symbol('uid')); }, VerificationError);
    Assert.throwsErrors(()=>{ actionBindingBySelector('#result', 'mouseup', Symbol.for('guid')); }, VerificationError);
    Assert.throwsErrorsNone(()=>{ actionBindingBySelector('#result', 'mouseup', Error); });
    Assert.throwsErrorsNone(()=>{ actionBindingBySelector('#result', 'mouseup', String); });
    Assert.throwsErrorsNone(()=>{ actionBindingBySelector('#result', 'mouseup', testFunc1); });
    Assert.throwsErrorsNone(()=>{ actionBindingBySelector('#result', 'mouseup', function(){}); });
    Assert.throwsErrorsNone(()=>{ actionBindingBySelector('#result', 'mouseup', ()=>{}); });
    Assert.throwsErrors(()=>{ actionBindingBySelector('#result', 'mouseup', []); }, VerificationError);
    Assert.throwsErrors(()=>{ actionBindingBySelector('#result', 'mouseup', [1,2,3]); }, VerificationError);
    Assert.throwsErrors(()=>{ actionBindingBySelector('#result', 'mouseup', [[]]); }, VerificationError);
    Assert.throwsErrors(()=>{ actionBindingBySelector('#result', 'mouseup', [[1,2,3],[4,5,6]]); }, VerificationError);
    Assert.throwsErrors(()=>{ actionBindingBySelector('#result', 'mouseup', new Map()); }, VerificationError);
    Assert.throwsErrors(()=>{ actionBindingBySelector('#result', 'mouseup', new Map([['a',1],['b',2]])); }, VerificationError);
    Assert.throwsErrors(()=>{ actionBindingBySelector('#result', 'mouseup', new Set()); }, VerificationError);
    Assert.throwsErrors(()=>{ actionBindingBySelector('#result', 'mouseup', new Set([1,2,3])); }, VerificationError);
    Assert.throwsErrors(()=>{ actionBindingBySelector('#result', 'mouseup', /123/); }, VerificationError);
    Assert.throwsErrors(()=>{ actionBindingBySelector('#result', 'mouseup', {a:1, b:2}); }, VerificationError);
    Assert.throwsErrors(()=>{ actionBindingBySelector('#result', 'mouseup', new Object()); }, VerificationError);
}

// ============ 导出测试函数
export {
    testMyElecApi, testIsInApp, 
    testErrorAlert, testUnhandledrejectionAlert, 
    testDocumentReady, testActionBinding, testActionBindingBySelector
}