/**
 * In my license, all codes can be shared free of charge. 
 * However, If my code is taken for commercial use, please maintain it yourself. 
 * I am not obligated to take responsibility for your business application.
 * Here is my email "pangdongcan@live.com"
 * 
 * Copyright © 2026 Micheal Pang. All rights reserved.
 * 
 * @file This file "testBs5EffLoading.js" is part of project "pdc-js-framework" , which is belong to Michael Pang (It's Me).
 * @author  Micheal Pang (Dongcan Pang)
 * @since  2026-07-22
 * @description 这里是 UI Components 动态组件的 others/Bs5EffLoading 模块测试
 */
"use strict"; // 这是严格模式下的 Javascript 代码

// ========== 导入测试工具
import { Assert } from "../../../testTools.js";
import { VerificationError } from "../../../../models/errors.js";
import { LOADING_TYPE } from "../../../../uiComponents/uitools.js";
import { DOM_PARSER } from "../../../../utils/html.js";
import { PROTECTED_GET_BOOTSTRAPOBJECT } from "../../../../uiComponents/dynamic/base/Bs5EffBaseComponent.js";

// ========== 导入测试对象
import { Bs5EffLoading } from "../../../../uiComponents/dynamic/others/Bs5EffLoading.js";

// ========== 开始测试

function testBs5EffLoadingConstructor(){
    // 这测试构造函数
    // 这里测试 constructor 构造函数
    // 第一个参数
    Assert.throwsErrorsNone(()=>{ new Bs5EffLoading(undefined, LOADING_TYPE.border); }); // 默认值
    Assert.throwsErrors(()=>{ new Bs5EffLoading(null, LOADING_TYPE.border); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffLoading(NaN, LOADING_TYPE.border); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffLoading('', LOADING_TYPE.border); }, VerificationError);
    Assert.throwsErrorsNone(()=>{ new Bs5EffLoading('sss', LOADING_TYPE.border); });
    Assert.throwsErrors(()=>{ new Bs5EffLoading(new String(''), LOADING_TYPE.border); }, VerificationError);
    Assert.throwsErrorsNone(()=>{ new Bs5EffLoading(new String('sss'), LOADING_TYPE.border); });
    Assert.throwsErrors(()=>{ new Bs5EffLoading(123, LOADING_TYPE.border); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffLoading(-1, LOADING_TYPE.border); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffLoading(new Number(123), LOADING_TYPE.border); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffLoading(new Number(-1), LOADING_TYPE.border); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffLoading(true, LOADING_TYPE.border); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffLoading(false, LOADING_TYPE.border); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffLoading(new Boolean(true), LOADING_TYPE.border); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffLoading(new Boolean(false), LOADING_TYPE.border); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffLoading(Symbol('uid'), LOADING_TYPE.border); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffLoading(Symbol.for('uid'), LOADING_TYPE.border); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffLoading(Error, LOADING_TYPE.border); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffLoading(Bs5EffLoading, LOADING_TYPE.border); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffLoading(testBs5EffLoadingConstructor, LOADING_TYPE.border); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffLoading(function(){}, LOADING_TYPE.border); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffLoading(()=>{}, LOADING_TYPE.border); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffLoading([], LOADING_TYPE.border); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffLoading([1,2,3], LOADING_TYPE.border); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffLoading([[]], LOADING_TYPE.border); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffLoading([[1,2,3],[4,5,6]], LOADING_TYPE.border); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffLoading(new Map(), LOADING_TYPE.border); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffLoading(new Map([['a',1],['b', 2]]), LOADING_TYPE.border); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffLoading(new Set(), LOADING_TYPE.border); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffLoading(new Set([1,2,3]), LOADING_TYPE.border); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffLoading(/123/, LOADING_TYPE.border); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffLoading(new RegExp('123'), LOADING_TYPE.border); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffLoading({}, LOADING_TYPE.border); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffLoading({a:1, b:2}, LOADING_TYPE.border); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffLoading(new Object(), LOADING_TYPE.border); }, VerificationError);
    // 第二个参数
    Assert.throwsErrorsNone(()=>{ new Bs5EffLoading('sss', undefined); }); //默认值
    Assert.throwsErrors(()=>{ new Bs5EffLoading('sss', null); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffLoading('sss', NaN); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffLoading('sss', ''); }, VerificationError); // 这里虽然是字符串，但是不是指定的值，还是要抛异常
    Assert.throwsErrors(()=>{ new Bs5EffLoading('sss', 'sss'); }, VerificationError); // 这里虽然是字符串，但是不是指定的值，还是要抛异常
    Assert.throwsErrors(()=>{ new Bs5EffLoading('sss', new String('')); }, VerificationError); // 这里虽然是字符串，但是不是指定的值，还是要抛异常
    Assert.throwsErrors(()=>{ new Bs5EffLoading('sss', new String('sss')); }, VerificationError); // 这里虽然是字符串，但是不是指定的值，还是要抛异常
    Assert.throwsErrorsNone(()=>{ new Bs5EffLoading('sss', LOADING_TYPE.border); }); // 合规值
    Assert.throwsErrorsNone(()=>{ new Bs5EffLoading('sss', LOADING_TYPE.grow); }); // 合规值
    Assert.throwsErrors(()=>{ new Bs5EffLoading('sss', LOADING_TYPE); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffLoading('sss', 123); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffLoading('sss', -1); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffLoading('sss', new Number(123)); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffLoading('sss', new Number(-1)); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffLoading('sss', true); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffLoading('sss', false); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffLoading('sss', new Boolean(true)); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffLoading('sss', new Boolean(false)); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffLoading('sss', Symbol('uid')); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffLoading('sss', Symbol.for('uid')); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffLoading('sss', Error); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffLoading('sss', Bs5EffLoading); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffLoading('sss', testBs5EffLoadingConstructor); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffLoading('sss', function(){}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffLoading('sss', ()=>{}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffLoading('sss', []); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffLoading('sss', [1,2,3]); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffLoading('sss', [[]]); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffLoading('sss', [[1,2,3],[4,5,6]]); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffLoading('sss', new Map()); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffLoading('sss', new Map([['a',1],['b', 2]])); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffLoading('sss', new Set()); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffLoading('sss', new Set([1,2,3])); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffLoading('sss', /123/); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffLoading('sss', new RegExp('123')); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffLoading('sss', {}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffLoading('sss', {a:1, b:2}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffLoading('sss', new Object()); }, VerificationError);

    // 测试生成的 div 是否符合要求。
    let loading1 = new Bs5EffLoading('loading1')[PROTECTED_GET_BOOTSTRAPOBJECT](); // border
    let loading2 = new Bs5EffLoading('loading2', LOADING_TYPE.border)[PROTECTED_GET_BOOTSTRAPOBJECT](); // border
    let loading3 = new Bs5EffLoading('loading3', LOADING_TYPE.grow)[PROTECTED_GET_BOOTSTRAPOBJECT]();
    let htmlStr = [loading1, loading2, loading3].map(bs5Obj=>bs5Obj.toHtmlString()).join('\n\n');
    // 生成一个 dom 对象，然后通过 检索判断是否符合要求
    let myDom = DOM_PARSER.parseFromString(htmlStr, 'text/html');
    //
    Assert.equalsStrictly(1, myDom.querySelectorAll('#loading1').length);
    Assert.equalsStrictly(1, myDom.querySelectorAll('#loading2').length);
    Assert.equalsStrictly(1, myDom.querySelectorAll('#loading3').length);
    //
    Assert.equalsStrictly(1, myDom.querySelectorAll('#loading1 .spinner-border').length);
    Assert.equalsStrictly(1, myDom.querySelectorAll('#loading2 .spinner-border').length);
    Assert.equalsStrictly(0, myDom.querySelectorAll('#loading3 .spinner-border').length);
    Assert.equalsStrictly(3, myDom.querySelectorAll('#loading3 .spinner-grow').length);
}

function testBs5EffLoadingShowAndHide(){
    
    // 这里测试 show 和 hide 方法
    console.log('注意，这里测试 Bs5EffLoading 处理。画面可能出现一些加载信息 ......');

    let loading1 = new Bs5EffLoading('borderLoading1');
    let loading2 = new Bs5EffLoading('growLoading2', LOADING_TYPE.grow);

    // 首先是 html 元素检测。看看会否重复插入，以及隐藏不存在的元素。
    Assert.equalsStrictly(0, document.querySelectorAll('#borderLoading1').length);
    Assert.equalsStrictly(0, document.querySelectorAll('#growLoading2').length);
    loading1.hide();
    loading1.hide();
    loading2.hide();
    loading2.hide();
    Assert.equalsStrictly(0, document.querySelectorAll('#borderLoading1').length);
    Assert.equalsStrictly(0, document.querySelectorAll('#growLoading2').length);

    loading1.show();
    loading1.hide();
    Assert.equalsStrictly(1, document.querySelectorAll('#borderLoading1').length);
    loading2.show();
    loading2.hide();
    Assert.equalsStrictly(1, document.querySelectorAll('#borderLoading1').length);

    // 最后让图标显现
    setTimeout(() => { loading1.show() }, 10); // 10毫秒
    setTimeout(() => { loading1.hide() }, 1010); // 一秒后
    setTimeout(() => { loading2.show() }, 1020); // 10毫秒后
    setTimeout(() => { loading2.hide() }, 2020); // 一秒后
}

// ========== 导出测试函数

export {
    testBs5EffLoadingConstructor, testBs5EffLoadingShowAndHide
}