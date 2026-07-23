/**
 * In my license, all codes can be shared free of charge. 
 * However, If my code is taken for commercial use, please maintain it yourself. 
 * I am not obligated to take responsibility for your business application.
 * Here is my email "pangdongcan@live.com"
 * 
 * Copyright © 2026 Micheal Pang. All rights reserved.
 * 
 * @file This file "testLoad.js" is part of project "pdc-js-framework" , which is belong to Michael Pang (It's Me).
 * @author Micheal Pang (Dongcan Pang)
 * @since 2026-07-23
 * @description 这里是 UI Components 组件的 load 模块测试
 */
"use strict"; // 这是严格模式下的 Javascript 代码

// ======= 导入测试工具
import { Assert } from "../testTools.js";
import { DOM_PARSER } from "../../utils/html.js";

// ======= 导入测试对象
import { MY_LOADING_BORDER, MY_LOADING_GROW, loadingInit } from "../../uiComponents/load.js";
import { VerificationError } from "../../models/errors.js";
import { Bs5EffLoading } from "../../uiComponents/dynamic.js";
import { EVENT_PDC_BEGIN, EVENT_PDC_END } from "../../uiComponents/events.js";

// ======= 测试

function testLoadConstants(){

    // 这里是一个简单的测试，主要是看看 这 const 常量有没有达到想要的效果。
    // 主要是通过按钮点击测试。
    let htmlStr = `
    <div id="testLoadConstantsId">
        <div>这里是 load 模块的常量对象测试</div>
        <button type="button" id="testLoadBtn1" class="btn btn-primary">测试 load 动画 1</button>&nbsp;
        <button type="button" id="testLoadBtn2" class="btn btn-primary">测试 load 动画 2</button>
    </div>
    `;
    let myDom = DOM_PARSER.parseFromString(htmlStr, 'text/html');
    let htmlElem = myDom.querySelector('#testLoadConstantsId');
    // 把按钮插入页面
    document.getElementById('result').append(htmlElem);
    // 增加按钮点击事件
    document.getElementById('testLoadBtn1').addEventListener('click', event=>{
        MY_LOADING_BORDER.show();
        // 1秒后隐藏
        setTimeout(()=>{ MY_LOADING_BORDER.hide() }, 1000);
    });
    document.getElementById('testLoadBtn2').addEventListener('click', event=>{
        MY_LOADING_GROW.show();
        // 1秒后隐藏
        setTimeout(()=>{ MY_LOADING_GROW.hide() }, 1000);
    });
}

function testLoadInitMethod(){
    
    // 这里是测试 loadingInit 函数。

    // 先做参数检测
    // 第1个参数
    Assert.throwsErrorsNone(()=>{ loadingInit(undefined, 'sss', 'sss', document.getElementById('result')); }); // 有默认值
    Assert.throwsErrors(()=>{ loadingInit(null, 'sss', 'sss', document.getElementById('result')); }, VerificationError);
    Assert.throwsErrors(()=>{ loadingInit(NaN, 'sss', 'sss', document.getElementById('result')); }, VerificationError);
    Assert.throwsErrors(()=>{ loadingInit('', 'sss', 'sss', document.getElementById('result')); }, VerificationError);
    Assert.throwsErrors(()=>{ loadingInit('sss', 'sss', 'sss', document.getElementById('result')); }, VerificationError);
    Assert.throwsErrors(()=>{ loadingInit(new String(''), 'sss', 'sss', document.getElementById('result')); }, VerificationError);
    Assert.throwsErrors(()=>{ loadingInit(new String('sss'), 'sss', 'sss', document.getElementById('result')); }, VerificationError);
    Assert.throwsErrors(()=>{ loadingInit(123, 'sss', 'sss', document.getElementById('result')); }, VerificationError);
    Assert.throwsErrors(()=>{ loadingInit(-1, 'sss', 'sss', document.getElementById('result')); }, VerificationError);
    Assert.throwsErrors(()=>{ loadingInit(new Number(123), 'sss', 'sss', document.getElementById('result')); }, VerificationError);
    Assert.throwsErrors(()=>{ loadingInit(new Number(-1), 'sss', 'sss', document.getElementById('result')); }, VerificationError);
    Assert.throwsErrors(()=>{ loadingInit(true, 'sss', 'sss', document.getElementById('result')); }, VerificationError);
    Assert.throwsErrors(()=>{ loadingInit(false, 'sss', 'sss', document.getElementById('result')); }, VerificationError);
    Assert.throwsErrors(()=>{ loadingInit(new Boolean(true), 'sss', 'sss', document.getElementById('result')); }, VerificationError);
    Assert.throwsErrors(()=>{ loadingInit(new Boolean(false), 'sss', 'sss', document.getElementById('result')); }, VerificationError);
    Assert.throwsErrors(()=>{ loadingInit(Symbol('uid'), 'sss', 'sss', document.getElementById('result')); }, VerificationError);
    Assert.throwsErrors(()=>{ loadingInit(Symbol.for('uid'), 'sss', 'sss', document.getElementById('result')); }, VerificationError);
    Assert.throwsErrors(()=>{ loadingInit(Error, 'sss', 'sss', document.getElementById('result')); }, VerificationError);
    Assert.throwsErrors(()=>{ loadingInit(VerificationError, 'sss', 'sss', document.getElementById('result')); }, VerificationError);
    Assert.throwsErrors(()=>{ loadingInit(testLoadInitMethod, 'sss', 'sss', document.getElementById('result')); }, VerificationError);
    Assert.throwsErrors(()=>{ loadingInit(function(){}, 'sss', 'sss', document.getElementById('result')); }, VerificationError);
    Assert.throwsErrors(()=>{ loadingInit(()=>{}, 'sss', 'sss', document.getElementById('result')); }, VerificationError);
    Assert.throwsErrors(()=>{ loadingInit([], 'sss', 'sss', document.getElementById('result')); }, VerificationError);
    Assert.throwsErrors(()=>{ loadingInit([1,2,3], 'sss', 'sss', document.getElementById('result')); }, VerificationError);
    Assert.throwsErrors(()=>{ loadingInit([[]], 'sss', 'sss', document.getElementById('result')); }, VerificationError);
    Assert.throwsErrors(()=>{ loadingInit([[1,2,3],[4,5,6]], 'sss', 'sss', document.getElementById('result')); }, VerificationError);
    Assert.throwsErrors(()=>{ loadingInit(new Map(), 'sss', 'sss', document.getElementById('result')); }, VerificationError);
    Assert.throwsErrors(()=>{ loadingInit(new Map([['a',1],['b', 2]]), 'sss', 'sss', document.getElementById('result')); }, VerificationError);
    Assert.throwsErrors(()=>{ loadingInit(new Set(), 'sss', 'sss', document.getElementById('result')); }, VerificationError);
    Assert.throwsErrors(()=>{ loadingInit(new Set([1,2,3]), 'sss', 'sss', document.getElementById('result')); }, VerificationError);
    Assert.throwsErrors(()=>{ loadingInit(/123/, 'sss', 'sss', document.getElementById('result')); }, VerificationError);
    Assert.throwsErrors(()=>{ loadingInit(new RegExp('123'), 'sss', 'sss', document.getElementById('result')); }, VerificationError);
    Assert.throwsErrors(()=>{ loadingInit({}, 'sss', 'sss', document.getElementById('result')); }, VerificationError);
    Assert.throwsErrors(()=>{ loadingInit({a:1, b:2}, 'sss', 'sss', document.getElementById('result')); }, VerificationError);
    Assert.throwsErrors(()=>{ loadingInit(new Object(), 'sss', 'sss', document.getElementById('result')); }, VerificationError);
    Assert.throwsErrorsNone(()=>{
        loadingInit(new Bs5EffLoading(), 'sss', 'sss', document.getElementById('result'));
    });
    // 第2个参数
    Assert.throwsErrorsNone(()=>{ loadingInit(MY_LOADING_BORDER, undefined, 'sss', document.getElementById('result')); }); // 有默认值
    Assert.throwsErrors(()=>{ loadingInit(MY_LOADING_BORDER, null, 'sss', document.getElementById('result')); }, VerificationError);
    Assert.throwsErrors(()=>{ loadingInit(MY_LOADING_BORDER, NaN, 'sss', document.getElementById('result')); }, VerificationError);
    Assert.throwsErrors(()=>{ loadingInit(MY_LOADING_BORDER, '', 'sss', document.getElementById('result')); }, VerificationError);
    Assert.throwsErrorsNone(()=>{ loadingInit(MY_LOADING_BORDER, 'sss', 'sss', document.getElementById('result')); });
    Assert.throwsErrors(()=>{ loadingInit(MY_LOADING_BORDER, new String(''), 'sss', document.getElementById('result')); }, VerificationError);
    Assert.throwsErrorsNone(()=>{ loadingInit(MY_LOADING_BORDER, new String('sss'), 'sss', document.getElementById('result')); });
    Assert.throwsErrors(()=>{ loadingInit(MY_LOADING_BORDER, 123, 'sss', document.getElementById('result')); }, VerificationError);
    Assert.throwsErrors(()=>{ loadingInit(MY_LOADING_BORDER, -1, 'sss', document.getElementById('result')); }, VerificationError);
    Assert.throwsErrors(()=>{ loadingInit(MY_LOADING_BORDER, new Number(123), 'sss', document.getElementById('result')); }, VerificationError);
    Assert.throwsErrors(()=>{ loadingInit(MY_LOADING_BORDER, new Number(-1), 'sss', document.getElementById('result')); }, VerificationError);
    Assert.throwsErrors(()=>{ loadingInit(MY_LOADING_BORDER, true, 'sss', document.getElementById('result')); }, VerificationError);
    Assert.throwsErrors(()=>{ loadingInit(MY_LOADING_BORDER, false, 'sss', document.getElementById('result')); }, VerificationError);
    Assert.throwsErrors(()=>{ loadingInit(MY_LOADING_BORDER, new Boolean(true), 'sss', document.getElementById('result')); }, VerificationError);
    Assert.throwsErrors(()=>{ loadingInit(MY_LOADING_BORDER, new Boolean(false), 'sss', document.getElementById('result')); }, VerificationError);
    Assert.throwsErrors(()=>{ loadingInit(MY_LOADING_BORDER, Symbol('uid'), 'sss', document.getElementById('result')); }, VerificationError);
    Assert.throwsErrors(()=>{ loadingInit(MY_LOADING_BORDER, Symbol.for('uid'), 'sss', document.getElementById('result')); }, VerificationError);
    Assert.throwsErrors(()=>{ loadingInit(MY_LOADING_BORDER, Error, 'sss', document.getElementById('result')); }, VerificationError);
    Assert.throwsErrors(()=>{ loadingInit(MY_LOADING_BORDER, VerificationError, 'sss', document.getElementById('result')); }, VerificationError);
    Assert.throwsErrors(()=>{ loadingInit(MY_LOADING_BORDER, testLoadInitMethod, 'sss', document.getElementById('result')); }, VerificationError);
    Assert.throwsErrors(()=>{ loadingInit(MY_LOADING_BORDER, function(){}, 'sss', document.getElementById('result')); }, VerificationError);
    Assert.throwsErrors(()=>{ loadingInit(MY_LOADING_BORDER, ()=>{}, 'sss', document.getElementById('result')); }, VerificationError);
    Assert.throwsErrors(()=>{ loadingInit(MY_LOADING_BORDER, [], 'sss', document.getElementById('result')); }, VerificationError);
    Assert.throwsErrors(()=>{ loadingInit(MY_LOADING_BORDER, [1,2,3], 'sss', document.getElementById('result')); }, VerificationError);
    Assert.throwsErrors(()=>{ loadingInit(MY_LOADING_BORDER, [[]], 'sss', document.getElementById('result')); }, VerificationError);
    Assert.throwsErrors(()=>{ loadingInit(MY_LOADING_BORDER, [[1,2,3],[4,5,6]], 'sss', document.getElementById('result')); }, VerificationError);
    Assert.throwsErrors(()=>{ loadingInit(MY_LOADING_BORDER, new Map(), 'sss', document.getElementById('result')); }, VerificationError);
    Assert.throwsErrors(()=>{ loadingInit(MY_LOADING_BORDER, new Map([['a',1],['b', 2]]), 'sss', document.getElementById('result')); }, VerificationError);
    Assert.throwsErrors(()=>{ loadingInit(MY_LOADING_BORDER, new Set(), 'sss', document.getElementById('result')); }, VerificationError);
    Assert.throwsErrors(()=>{ loadingInit(MY_LOADING_BORDER, new Set([1,2,3]), 'sss', document.getElementById('result')); }, VerificationError);
    Assert.throwsErrors(()=>{ loadingInit(MY_LOADING_BORDER, /123/, 'sss', document.getElementById('result')); }, VerificationError);
    Assert.throwsErrors(()=>{ loadingInit(MY_LOADING_BORDER, new RegExp('123'), 'sss', document.getElementById('result')); }, VerificationError);
    Assert.throwsErrors(()=>{ loadingInit(MY_LOADING_BORDER, {}, 'sss', document.getElementById('result')); }, VerificationError);
    Assert.throwsErrors(()=>{ loadingInit(MY_LOADING_BORDER, {a:1, b:2}, 'sss', document.getElementById('result')); }, VerificationError);
    Assert.throwsErrors(()=>{ loadingInit(MY_LOADING_BORDER, new Object(), 'sss', document.getElementById('result')); }, VerificationError);
    // 第3个参数
    Assert.throwsErrorsNone(()=>{ loadingInit(MY_LOADING_BORDER, 'sss', undefined, document.getElementById('result')); }); // 有默认值
    Assert.throwsErrors(()=>{ loadingInit(MY_LOADING_BORDER, 'sss', null, document.getElementById('result')); }, VerificationError);
    Assert.throwsErrors(()=>{ loadingInit(MY_LOADING_BORDER, 'sss', NaN, document.getElementById('result')); }, VerificationError);
    Assert.throwsErrors(()=>{ loadingInit(MY_LOADING_BORDER, 'sss', '', document.getElementById('result')); }, VerificationError);
    Assert.throwsErrorsNone(()=>{ loadingInit(MY_LOADING_BORDER, 'sss', 'sss', document.getElementById('result')); });
    Assert.throwsErrors(()=>{ loadingInit(MY_LOADING_BORDER, 'sss', new String(''), document.getElementById('result')); }, VerificationError);
    Assert.throwsErrorsNone(()=>{ loadingInit(MY_LOADING_BORDER, 'sss', new String('sss'), document.getElementById('result')); });
    Assert.throwsErrors(()=>{ loadingInit(MY_LOADING_BORDER, 'sss', 123, document.getElementById('result')); }, VerificationError);
    Assert.throwsErrors(()=>{ loadingInit(MY_LOADING_BORDER, 'sss', -1, document.getElementById('result')); }, VerificationError);
    Assert.throwsErrors(()=>{ loadingInit(MY_LOADING_BORDER, 'sss', new Number(123), document.getElementById('result')); }, VerificationError);
    Assert.throwsErrors(()=>{ loadingInit(MY_LOADING_BORDER, 'sss', new Number(-1), document.getElementById('result')); }, VerificationError);
    Assert.throwsErrors(()=>{ loadingInit(MY_LOADING_BORDER, 'sss', true, document.getElementById('result')); }, VerificationError);
    Assert.throwsErrors(()=>{ loadingInit(MY_LOADING_BORDER, 'sss', false, document.getElementById('result')); }, VerificationError);
    Assert.throwsErrors(()=>{ loadingInit(MY_LOADING_BORDER, 'sss', new Boolean(true), document.getElementById('result')); }, VerificationError);
    Assert.throwsErrors(()=>{ loadingInit(MY_LOADING_BORDER, 'sss', new Boolean(false), document.getElementById('result')); }, VerificationError);
    Assert.throwsErrors(()=>{ loadingInit(MY_LOADING_BORDER, 'sss', Symbol('uid'), document.getElementById('result')); }, VerificationError);
    Assert.throwsErrors(()=>{ loadingInit(MY_LOADING_BORDER, 'sss', Symbol.for('uid'), document.getElementById('result')); }, VerificationError);
    Assert.throwsErrors(()=>{ loadingInit(MY_LOADING_BORDER, 'sss', Error, document.getElementById('result')); }, VerificationError);
    Assert.throwsErrors(()=>{ loadingInit(MY_LOADING_BORDER, 'sss', VerificationError, document.getElementById('result')); }, VerificationError);
    Assert.throwsErrors(()=>{ loadingInit(MY_LOADING_BORDER, 'sss', testLoadInitMethod, document.getElementById('result')); }, VerificationError);
    Assert.throwsErrors(()=>{ loadingInit(MY_LOADING_BORDER, 'sss', function(){}, document.getElementById('result')); }, VerificationError);
    Assert.throwsErrors(()=>{ loadingInit(MY_LOADING_BORDER, 'sss', ()=>{}, document.getElementById('result')); }, VerificationError);
    Assert.throwsErrors(()=>{ loadingInit(MY_LOADING_BORDER, 'sss', [], document.getElementById('result')); }, VerificationError);
    Assert.throwsErrors(()=>{ loadingInit(MY_LOADING_BORDER, 'sss', [1,2,3], document.getElementById('result')); }, VerificationError);
    Assert.throwsErrors(()=>{ loadingInit(MY_LOADING_BORDER, 'sss', [[]], document.getElementById('result')); }, VerificationError);
    Assert.throwsErrors(()=>{ loadingInit(MY_LOADING_BORDER, 'sss', [[1,2,3],[4,5,6]], document.getElementById('result')); }, VerificationError);
    Assert.throwsErrors(()=>{ loadingInit(MY_LOADING_BORDER, 'sss', new Map(), document.getElementById('result')); }, VerificationError);
    Assert.throwsErrors(()=>{ loadingInit(MY_LOADING_BORDER, 'sss', new Map([['a',1],['b', 2]]), document.getElementById('result')); }, VerificationError);
    Assert.throwsErrors(()=>{ loadingInit(MY_LOADING_BORDER, 'sss', new Set(), document.getElementById('result')); }, VerificationError);
    Assert.throwsErrors(()=>{ loadingInit(MY_LOADING_BORDER, 'sss', new Set([1,2,3]), document.getElementById('result')); }, VerificationError);
    Assert.throwsErrors(()=>{ loadingInit(MY_LOADING_BORDER, 'sss', /123/, document.getElementById('result')); }, VerificationError);
    Assert.throwsErrors(()=>{ loadingInit(MY_LOADING_BORDER, 'sss', new RegExp('123'), document.getElementById('result')); }, VerificationError);
    Assert.throwsErrors(()=>{ loadingInit(MY_LOADING_BORDER, 'sss', {}, document.getElementById('result')); }, VerificationError);
    Assert.throwsErrors(()=>{ loadingInit(MY_LOADING_BORDER, 'sss', {a:1, b:2}, document.getElementById('result')); }, VerificationError);
    Assert.throwsErrors(()=>{ loadingInit(MY_LOADING_BORDER, 'sss', new Object(), document.getElementById('result')); }, VerificationError);
    // 第4个参数
    Assert.throwsErrorsNone(()=>{ loadingInit(MY_LOADING_BORDER, 'sss', 'sss', undefined); }); // 默认值
    Assert.throwsErrors(()=>{ loadingInit(MY_LOADING_BORDER, 'sss', 'sss', null); }, VerificationError);
    Assert.throwsErrors(()=>{ loadingInit(MY_LOADING_BORDER, 'sss', 'sss', NaN); }, VerificationError);
    Assert.throwsErrors(()=>{ loadingInit(MY_LOADING_BORDER, 'sss', 'sss', ''); }, VerificationError);
    Assert.throwsErrors(()=>{ loadingInit(MY_LOADING_BORDER, 'sss', 'sss', 'sss'); }, VerificationError);
    Assert.throwsErrors(()=>{ loadingInit(MY_LOADING_BORDER, 'sss', 'sss', new String('')); }, VerificationError);
    Assert.throwsErrors(()=>{ loadingInit(MY_LOADING_BORDER, 'sss', 'sss', new String('sss')); }, VerificationError);
    Assert.throwsErrors(()=>{ loadingInit(MY_LOADING_BORDER, 'sss', 'sss', 123); }, VerificationError);
    Assert.throwsErrors(()=>{ loadingInit(MY_LOADING_BORDER, 'sss', 'sss', -1); }, VerificationError);
    Assert.throwsErrors(()=>{ loadingInit(MY_LOADING_BORDER, 'sss', 'sss', new Number(123)); }, VerificationError);
    Assert.throwsErrors(()=>{ loadingInit(MY_LOADING_BORDER, 'sss', 'sss', new Number(-1)); }, VerificationError);
    Assert.throwsErrors(()=>{ loadingInit(MY_LOADING_BORDER, 'sss', 'sss', true); }, VerificationError);
    Assert.throwsErrors(()=>{ loadingInit(MY_LOADING_BORDER, 'sss', 'sss', false); }, VerificationError);
    Assert.throwsErrors(()=>{ loadingInit(MY_LOADING_BORDER, 'sss', 'sss', new Boolean(true)); }, VerificationError);
    Assert.throwsErrors(()=>{ loadingInit(MY_LOADING_BORDER, 'sss', 'sss', new Boolean(false)); }, VerificationError);
    Assert.throwsErrors(()=>{ loadingInit(MY_LOADING_BORDER, 'sss', 'sss', Symbol('uid')); }, VerificationError);
    Assert.throwsErrors(()=>{ loadingInit(MY_LOADING_BORDER, 'sss', 'sss', Symbol.for('uid')); }, VerificationError);
    Assert.throwsErrors(()=>{ loadingInit(MY_LOADING_BORDER, 'sss', 'sss', Error); }, VerificationError);
    Assert.throwsErrors(()=>{ loadingInit(MY_LOADING_BORDER, 'sss', 'sss', VerificationError); }, VerificationError);
    Assert.throwsErrors(()=>{ loadingInit(MY_LOADING_BORDER, 'sss', 'sss', testLoadInitMethod); }, VerificationError);
    Assert.throwsErrors(()=>{ loadingInit(MY_LOADING_BORDER, 'sss', 'sss', function(){}); }, VerificationError);
    Assert.throwsErrors(()=>{ loadingInit(MY_LOADING_BORDER, 'sss', 'sss', ()=>{}); }, VerificationError);
    Assert.throwsErrors(()=>{ loadingInit(MY_LOADING_BORDER, 'sss', 'sss', []); }, VerificationError);
    Assert.throwsErrors(()=>{ loadingInit(MY_LOADING_BORDER, 'sss', 'sss', [1,2,3]); }, VerificationError);
    Assert.throwsErrors(()=>{ loadingInit(MY_LOADING_BORDER, 'sss', 'sss', [[]]); }, VerificationError);
    Assert.throwsErrors(()=>{ loadingInit(MY_LOADING_BORDER, 'sss', 'sss', [[1,2,3],[4,5,6]]); }, VerificationError);
    Assert.throwsErrors(()=>{ loadingInit(MY_LOADING_BORDER, 'sss', 'sss', new Map()); }, VerificationError);
    Assert.throwsErrors(()=>{ loadingInit(MY_LOADING_BORDER, 'sss', 'sss', new Map([['a',1],['b', 2]])); }, VerificationError);
    Assert.throwsErrors(()=>{ loadingInit(MY_LOADING_BORDER, 'sss', 'sss', new Set()); }, VerificationError);
    Assert.throwsErrors(()=>{ loadingInit(MY_LOADING_BORDER, 'sss', 'sss', new Set([1,2,3])); }, VerificationError);
    Assert.throwsErrors(()=>{ loadingInit(MY_LOADING_BORDER, 'sss', 'sss', /123/); }, VerificationError);
    Assert.throwsErrors(()=>{ loadingInit(MY_LOADING_BORDER, 'sss', 'sss', new RegExp('123')); }, VerificationError);
    Assert.throwsErrors(()=>{ loadingInit(MY_LOADING_BORDER, 'sss', 'sss', {}); }, VerificationError);
    Assert.throwsErrors(()=>{ loadingInit(MY_LOADING_BORDER, 'sss', 'sss', {a:1, b:2}); }, VerificationError);
    Assert.throwsErrors(()=>{ loadingInit(MY_LOADING_BORDER, 'sss', 'sss', new Object()); }, VerificationError);
    //
    Assert.throwsErrorsNone(()=>{
        loadingInit(MY_LOADING_BORDER, 'sss', 'sss', document);
        loadingInit(MY_LOADING_BORDER, 'sss', 'sss', document.querySelector('#result'));
    });

    // 然后是功能检测
    // 主要是通过按钮点击测试。
    let htmlStr = `
    <div id="testLoadInitMethodId">
        <div>这里是 load 模块的 loadingInit 方法测试</div>
        <button type="button" id="testLoadBtn3" class="btn btn-primary">测试 load 动画 3</button>&nbsp;
        <button type="button" id="testLoadBtn4" class="btn btn-primary">测试 load 动画 4</button>
    </div>
    `;
    let myDom = DOM_PARSER.parseFromString(htmlStr, 'text/html');
    let htmlElem = myDom.querySelector('#testLoadInitMethodId');
    // 把按钮插入页面
    document.getElementById('result').append(htmlElem);
    // 增加按钮点击事件
    document.getElementById('testLoadBtn3').addEventListener('click', event=>{
        // 这里通过传播事件，让加载动画显示和隐藏
        document.getElementById('testLoadBtn3').dispatchEvent(EVENT_PDC_BEGIN);
        setTimeout(()=>{
            document.getElementById('testLoadBtn3').dispatchEvent(EVENT_PDC_END);
        }, 1000);
    });
    document.getElementById('testLoadBtn4').addEventListener('click', event=>{
        // 这里通过传播事件，让加载动画显示和隐藏
        document.getElementById('testLoadBtn4').dispatchEvent(EVENT_PDC_BEGIN);
        setTimeout(()=>{
            document.getElementById('testLoadBtn4').dispatchEvent(EVENT_PDC_END);
        }, 1000);
    });

}

// ======= 导出测试函数
export{
    testLoadConstants, testLoadInitMethod
}