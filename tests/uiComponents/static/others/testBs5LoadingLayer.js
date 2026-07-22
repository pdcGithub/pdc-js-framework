/**
 * In my license, all codes can be shared free of charge. 
 * However, If my code is taken for commercial use, please maintain it yourself. 
 * I am not obligated to take responsibility for your business application.
 * Here is my email "pangdongcan@live.com"
 * 
 * Copyright © 2026 Micheal Pang. All rights reserved.
 * 
 * @file This file "testBs5LoadingLayer.js" is part of project "pdc-js-framework" , which is belong to Michael Pang (It's Me).
 * @author Micheal Pang (Dongcan Pang)
 * @since 2026-07-22
 * @description 这里是关于 static 组件 Bs5LoadingLayer 的测试。
 * 因为它继承了 Bootstrap5Object，所以我们不用再重复测试相同的函数调用。只测试它自己修改了的那部分就行了。
 */
"use strict"; // 这是严格模式下的 Javascript 代码

// ============ 导入测试工具
import { Assert } from "../../../testTools.js";

// ============ 导入测试内容
import { Bs5LoadingLayer } from "../../../../uiComponents/static/others/Bs5LoadingLayer.js";
import { LOADING_TYPE } from "../../../../uiComponents/uitools.js";
import { VerificationError } from "../../../../models/errors.js";
import { DOM_PARSER } from "../../../../utils/html.js";

// ============ 开始测试

function testBs5LoadingLayerConstructor(){

    // 这里测试 constructor 构造函数
    // 第一个参数
    Assert.throwsErrorsNone(()=>{ new Bs5LoadingLayer(undefined, LOADING_TYPE.border); }); // 默认值
    Assert.throwsErrors(()=>{ new Bs5LoadingLayer(null, LOADING_TYPE.border); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5LoadingLayer(NaN, LOADING_TYPE.border); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5LoadingLayer('', LOADING_TYPE.border); }, VerificationError);
    Assert.throwsErrorsNone(()=>{ new Bs5LoadingLayer('sss', LOADING_TYPE.border); });
    Assert.throwsErrors(()=>{ new Bs5LoadingLayer(new String(''), LOADING_TYPE.border); }, VerificationError);
    Assert.throwsErrorsNone(()=>{ new Bs5LoadingLayer(new String('sss'), LOADING_TYPE.border); });
    Assert.throwsErrors(()=>{ new Bs5LoadingLayer(123, LOADING_TYPE.border); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5LoadingLayer(-1, LOADING_TYPE.border); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5LoadingLayer(new Number(123), LOADING_TYPE.border); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5LoadingLayer(new Number(-1), LOADING_TYPE.border); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5LoadingLayer(true, LOADING_TYPE.border); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5LoadingLayer(false, LOADING_TYPE.border); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5LoadingLayer(new Boolean(true), LOADING_TYPE.border); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5LoadingLayer(new Boolean(false), LOADING_TYPE.border); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5LoadingLayer(Symbol('uid'), LOADING_TYPE.border); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5LoadingLayer(Symbol.for('uid'), LOADING_TYPE.border); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5LoadingLayer(Error, LOADING_TYPE.border); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5LoadingLayer(Bs5LoadingLayer, LOADING_TYPE.border); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5LoadingLayer(testBs5LoadingLayerConstructor, LOADING_TYPE.border); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5LoadingLayer(function(){}, LOADING_TYPE.border); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5LoadingLayer(()=>{}, LOADING_TYPE.border); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5LoadingLayer([], LOADING_TYPE.border); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5LoadingLayer([1,2,3], LOADING_TYPE.border); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5LoadingLayer([[]], LOADING_TYPE.border); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5LoadingLayer([[1,2,3],[4,5,6]], LOADING_TYPE.border); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5LoadingLayer(new Map(), LOADING_TYPE.border); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5LoadingLayer(new Map([['a',1],['b', 2]]), LOADING_TYPE.border); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5LoadingLayer(new Set(), LOADING_TYPE.border); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5LoadingLayer(new Set([1,2,3]), LOADING_TYPE.border); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5LoadingLayer(/123/, LOADING_TYPE.border); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5LoadingLayer(new RegExp('123'), LOADING_TYPE.border); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5LoadingLayer({}, LOADING_TYPE.border); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5LoadingLayer({a:1, b:2}, LOADING_TYPE.border); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5LoadingLayer(new Object(), LOADING_TYPE.border); }, VerificationError);
    // 第二个参数
    Assert.throwsErrorsNone(()=>{ new Bs5LoadingLayer('sss', undefined); }); //默认值
    Assert.throwsErrors(()=>{ new Bs5LoadingLayer('sss', null); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5LoadingLayer('sss', NaN); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5LoadingLayer('sss', ''); }, VerificationError); // 这里虽然是字符串，但是不是指定的值，还是要抛异常
    Assert.throwsErrors(()=>{ new Bs5LoadingLayer('sss', 'sss'); }, VerificationError); // 这里虽然是字符串，但是不是指定的值，还是要抛异常
    Assert.throwsErrors(()=>{ new Bs5LoadingLayer('sss', new String('')); }, VerificationError); // 这里虽然是字符串，但是不是指定的值，还是要抛异常
    Assert.throwsErrors(()=>{ new Bs5LoadingLayer('sss', new String('sss')); }, VerificationError); // 这里虽然是字符串，但是不是指定的值，还是要抛异常
    Assert.throwsErrorsNone(()=>{ new Bs5LoadingLayer('sss', LOADING_TYPE.border); }); // 合规值
    Assert.throwsErrorsNone(()=>{ new Bs5LoadingLayer('sss', LOADING_TYPE.grow); }); // 合规值
    Assert.throwsErrors(()=>{ new Bs5LoadingLayer('sss', LOADING_TYPE); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5LoadingLayer('sss', 123); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5LoadingLayer('sss', -1); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5LoadingLayer('sss', new Number(123)); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5LoadingLayer('sss', new Number(-1)); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5LoadingLayer('sss', true); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5LoadingLayer('sss', false); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5LoadingLayer('sss', new Boolean(true)); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5LoadingLayer('sss', new Boolean(false)); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5LoadingLayer('sss', Symbol('uid')); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5LoadingLayer('sss', Symbol.for('uid')); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5LoadingLayer('sss', Error); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5LoadingLayer('sss', Bs5LoadingLayer); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5LoadingLayer('sss', testBs5LoadingLayerConstructor); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5LoadingLayer('sss', function(){}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5LoadingLayer('sss', ()=>{}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5LoadingLayer('sss', []); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5LoadingLayer('sss', [1,2,3]); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5LoadingLayer('sss', [[]]); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5LoadingLayer('sss', [[1,2,3],[4,5,6]]); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5LoadingLayer('sss', new Map()); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5LoadingLayer('sss', new Map([['a',1],['b', 2]])); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5LoadingLayer('sss', new Set()); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5LoadingLayer('sss', new Set([1,2,3])); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5LoadingLayer('sss', /123/); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5LoadingLayer('sss', new RegExp('123')); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5LoadingLayer('sss', {}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5LoadingLayer('sss', {a:1, b:2}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5LoadingLayer('sss', new Object()); }, VerificationError);
    
    // 测试生成的 div 是否符合要求。
    let loading1 = new Bs5LoadingLayer('loading1'); // border
    let loading2 = new Bs5LoadingLayer('loading2', LOADING_TYPE.border); // border
    let loading3 = new Bs5LoadingLayer('loading3', LOADING_TYPE.grow);
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

// ============ 导出测试函数
export {
    testBs5LoadingLayerConstructor
}