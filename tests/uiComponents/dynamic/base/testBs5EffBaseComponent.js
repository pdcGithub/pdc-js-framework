/**
 * In my license, all codes can be shared free of charge. 
 * However, If my code is taken for commercial use, please maintain it yourself. 
 * I am not obligated to take responsibility for your business application.
 * Here is my email "pangdongcan@live.com"
 * 
 * Copyright © 2026 Micheal Pang. All rights reserved.
 * 
 * @file This file "testBs5EffBaseComponent.js" is part of project "pdc-js-framework" , which is belong to Michael Pang (It's Me).
 * @author Micheal Pang (Dongcan Pang)
 * @since 2026-07-20
 * @description 这里是 UI Components 静态组件的 base/Bs5EffBaseComponent 模块测试
 */
"use strict"; // 这是严格模式下的 Javascript 代码

// ============ 导入测试工具
import { Assert } from "../../../testTools.js";
import { VerificationError } from "../../../../models/errors.js";
import { Bootstrap5Object } from "../../../../uiComponents/static.js";
import { isRegexpOk } from "../../../../utils/datatype.js";

// ============ 导入测试目标
import {
    Bs5EffBaseComponent, 
    PROTECTED_GET_MYID, PROTECTED_GET_MYCSSCLASS, PROTECTED_GET_MYSUBCONFIG, PROTECTED_GET_BOOTSTRAPOBJECT,
    PROTECTED_SET_MYID, PROTECTED_SET_MYCSSCLASS, PROTECTED_SET_MYSUBCONFIG, PROTECTED_SET_BOOTSTRAPOBJECT
} from "../../../../uiComponents/dynamic/base/Bs5EffBaseComponent.js";

// ============ 开始测试（注意：这里是动态组件。那么他们的测试需要先把组件写入页面再测试）

function testBs5EffConstructor(){
    // 首先是参数检测
    // 第一个参数
    Assert.throwsErrorsNone(()=>{ new Bs5EffBaseComponent(undefined, '', {}); }); // 有默认值
    Assert.throwsErrors(()=>{ new Bs5EffBaseComponent(null, '', {}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffBaseComponent(NaN, '', {}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffBaseComponent('', '', {}); }, VerificationError);
    Assert.throwsErrorsNone(()=>{ new Bs5EffBaseComponent('sss', '', {}); });
    Assert.throwsErrors(()=>{ new Bs5EffBaseComponent(new String(''), '', {}); }, VerificationError);
    Assert.throwsErrorsNone(()=>{ new Bs5EffBaseComponent(new String('sss'), '', {}); });
    Assert.throwsErrors(()=>{ new Bs5EffBaseComponent(123, '', {}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffBaseComponent(-1, '', {}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffBaseComponent(new Number(123), '', {}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffBaseComponent(new Number(-1), '', {}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffBaseComponent(true, '', {}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffBaseComponent(false, '', {}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffBaseComponent(new Boolean(true), '', {}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffBaseComponent(new Boolean(false), '', {}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffBaseComponent(Symbol('uid'), '', {}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffBaseComponent(Symbol.for('uid'), '', {}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffBaseComponent(Error, '', {}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffBaseComponent(Bs5EffBaseComponent, '', {}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffBaseComponent(testBs5EffConstructor, '', {}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffBaseComponent(function(){}, '', {}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffBaseComponent(()=>{}, '', {}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffBaseComponent([], '', {}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffBaseComponent([1,2,3], '', {}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffBaseComponent([[]], '', {}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffBaseComponent([[1,2,3],[4,5,6]], '', {}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffBaseComponent(new Map(), '', {}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffBaseComponent(new Map([['a',1],['b', 2]]), '', {}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffBaseComponent(new Set(), '', {}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffBaseComponent(new Set([1,2,3]), '', {}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffBaseComponent(/123/, '', {}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffBaseComponent(new RegExp('123'), '', {}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffBaseComponent({}, '', {}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffBaseComponent({a:1, b:2}, '', {}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffBaseComponent(new Object(), '', {}); }, VerificationError);
    // 第二个参数
    Assert.throwsErrorsNone(()=>{ new Bs5EffBaseComponent('testId', undefined, {}); }); // 有默认值
    Assert.throwsErrors(()=>{ new Bs5EffBaseComponent('testId', null, {}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffBaseComponent('testId', NaN, {}); }, VerificationError);
    Assert.throwsErrorsNone(()=>{ new Bs5EffBaseComponent('testId', '', {}); });
    Assert.throwsErrorsNone(()=>{ new Bs5EffBaseComponent('testId', 'sss', {}); });
    Assert.throwsErrorsNone(()=>{ new Bs5EffBaseComponent('testId', new String(''), {}); });
    Assert.throwsErrorsNone(()=>{ new Bs5EffBaseComponent('testId', new String('sss'), {}); });
    Assert.throwsErrors(()=>{ new Bs5EffBaseComponent('testId', 123, {}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffBaseComponent('testId', -1, {}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffBaseComponent('testId', new Number(123), {}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffBaseComponent('testId', new Number(-1), {}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffBaseComponent('testId', true, {}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffBaseComponent('testId', false, {}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffBaseComponent('testId', new Boolean(true), {}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffBaseComponent('testId', new Boolean(false), {}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffBaseComponent('testId', Symbol('uid'), {}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffBaseComponent('testId', Symbol.for('uid'), {}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffBaseComponent('testId', Error, {}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffBaseComponent('testId', Bs5EffBaseComponent, {}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffBaseComponent('testId', testBs5EffConstructor, {}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffBaseComponent('testId', function(){}, {}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffBaseComponent('testId', ()=>{}, {}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffBaseComponent('testId', [], {}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffBaseComponent('testId', [1,2,3], {}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffBaseComponent('testId', [[]], {}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffBaseComponent('testId', [[1,2,3],[4,5,6]], {}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffBaseComponent('testId', new Map(), {}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffBaseComponent('testId', new Map([['a',1],['b', 2]]), {}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffBaseComponent('testId', new Set(), {}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffBaseComponent('testId', new Set([1,2,3]), {}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffBaseComponent('testId', /123/, {}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffBaseComponent('testId', new RegExp('123'), {}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffBaseComponent('testId', {}, {}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffBaseComponent('testId', {a:1, b:2}, {}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffBaseComponent('testId', new Object(), {}); }, VerificationError);
    // 第三个参数
    Assert.throwsErrorsNone(()=>{ new Bs5EffBaseComponent('testId', '', undefined); }, VerificationError); // 有默认值
    Assert.throwsErrors(()=>{ new Bs5EffBaseComponent('testId', '', null); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffBaseComponent('testId', '', NaN); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffBaseComponent('testId', '', ''); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffBaseComponent('testId', '', 'sss'); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffBaseComponent('testId', '', new String('')); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffBaseComponent('testId', '', new String('sss')); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffBaseComponent('testId', '', 123); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffBaseComponent('testId', '', -1); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffBaseComponent('testId', '', new Number(123)); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffBaseComponent('testId', '', new Number(-1)); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffBaseComponent('testId', '', true); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffBaseComponent('testId', '', false); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffBaseComponent('testId', '', new Boolean(true)); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffBaseComponent('testId', '', new Boolean(false)); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffBaseComponent('testId', '', Symbol('uid')); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffBaseComponent('testId', '', Symbol.for('uid')); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffBaseComponent('testId', '', Error); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffBaseComponent('testId', '', Bs5EffBaseComponent); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffBaseComponent('testId', '', testBs5EffConstructor); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffBaseComponent('testId', '', function(){}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffBaseComponent('testId', '', ()=>{}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffBaseComponent('testId', '', []); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffBaseComponent('testId', '', [1,2,3]); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffBaseComponent('testId', '', [[]]); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffBaseComponent('testId', '', [[1,2,3],[4,5,6]]); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffBaseComponent('testId', '', new Map()); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffBaseComponent('testId', '', new Map([['a',1],['b', 2]])); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffBaseComponent('testId', '', new Set()); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffBaseComponent('testId', '', new Set([1,2,3])); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffBaseComponent('testId', '', /123/); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffBaseComponent('testId', '', new RegExp('123')); }, VerificationError);
    Assert.throwsErrorsNone(()=>{ new Bs5EffBaseComponent('testId', '', {}); });
    Assert.throwsErrorsNone(()=>{ new Bs5EffBaseComponent('testId', '', {a:1, b:2}); });
    Assert.throwsErrorsNone(()=>{ new Bs5EffBaseComponent('testId', '', new Object()); });

    // 对象创建测试，这里不应该有异常抛出。
    let o1 = new Bs5EffBaseComponent();
    let o2 = new Bs5EffBaseComponent('bs5Eff001', 'm-2', {a:1, b:2});
    // 查看内部信息是否符合要求
    let id1 = o1[PROTECTED_GET_MYID]();
    let css1 = o1[PROTECTED_GET_MYCSSCLASS]();
    let subconfig1 = o1[PROTECTED_GET_MYSUBCONFIG]();
    let bs5Obj1 = o1[PROTECTED_GET_BOOTSTRAPOBJECT]();
    //
    Assert.equalsStrictly(true, isRegexpOk(id1, /^Bs5EffBaseComponent\d{4,}$/));
    Assert.equalsStrictly(true, css1==='');
    Assert.objectEquals({}, subconfig1);
    Assert.equalsStrictly(true, bs5Obj1 instanceof Bootstrap5Object);
    Assert.equalsStrictly(`<div id="${id1}"></div>`, bs5Obj1.toHtmlString());
    // 
    let id2 = o2[PROTECTED_GET_MYID]();
    let css2 = o2[PROTECTED_GET_MYCSSCLASS]();
    let subconfig2 = o2[PROTECTED_GET_MYSUBCONFIG]();
    let bs5Obj2 = o2[PROTECTED_GET_BOOTSTRAPOBJECT]();
    //
    Assert.equalsStrictly('bs5Eff001', id2);
    Assert.equalsStrictly('m-2', css2);
    Assert.objectEquals({a:1, b:2}, subconfig2);
    Assert.equalsStrictly(true, bs5Obj2 instanceof Bootstrap5Object);
    Assert.equalsStrictly(`<div id="${id2}" class="${css2}"></div>`, bs5Obj2.toHtmlString());
}

function testBs5EffGet(){

    // 这里是测试 get 方法是否提取出一样的东西。

    // 对象创建测试，这里不应该有异常抛出。
    let o1 = new Bs5EffBaseComponent();
    let o2 = new Bs5EffBaseComponent('bs5Eff001', 'm-2', {a:1, b:2});

    // 查看内部信息是否符合要求
    let id1 = o1[PROTECTED_GET_MYID]();
    let css1 = o1[PROTECTED_GET_MYCSSCLASS]();
    let subconfig1 = o1[PROTECTED_GET_MYSUBCONFIG]();
    let bs5Obj1 = o1[PROTECTED_GET_BOOTSTRAPOBJECT]();
    //
    Assert.equalsStrictly(true, isRegexpOk(id1, /^Bs5EffBaseComponent\d{4,}$/));
    Assert.equalsStrictly(true, css1==='');
    Assert.objectEquals({}, subconfig1);
    Assert.equalsStrictly(true, bs5Obj1 instanceof Bootstrap5Object);
    Assert.equalsStrictly(`<div id="${id1}"></div>`, bs5Obj1.toHtmlString());
    // 
    let id2 = o2[PROTECTED_GET_MYID]();
    let css2 = o2[PROTECTED_GET_MYCSSCLASS]();
    let subconfig2 = o2[PROTECTED_GET_MYSUBCONFIG]();
    let bs5Obj2 = o2[PROTECTED_GET_BOOTSTRAPOBJECT]();
    //
    Assert.equalsStrictly('bs5Eff001', id2);
    Assert.equalsStrictly('m-2', css2);
    Assert.objectEquals({a:1, b:2}, subconfig2);
    Assert.equalsStrictly(true, bs5Obj2 instanceof Bootstrap5Object);
    Assert.equalsStrictly(`<div id="${id2}" class="${css2}"></div>`, bs5Obj2.toHtmlString());
}

function testBs5EffSet(){

    // 这里是 set 方法，需要测试 set 参数校验，以及 set 结果匹配。

    // 对象创建测试，这里不应该有异常抛出。
    let o1 = new Bs5EffBaseComponent();

    // 参数测试（ID 为非空字符串）
    Assert.throwsErrors(()=>{ o1[PROTECTED_SET_MYID](undefined); }, VerificationError); 
    Assert.throwsErrors(()=>{ o1[PROTECTED_SET_MYID](null); }, VerificationError); 
    Assert.throwsErrors(()=>{ o1[PROTECTED_SET_MYID](NaN); }, VerificationError); 
    Assert.throwsErrors(()=>{ o1[PROTECTED_SET_MYID](''); }, VerificationError); 
    Assert.throwsErrorsNone(()=>{ o1[PROTECTED_SET_MYID]('sss'); }); 
    Assert.throwsErrors(()=>{ o1[PROTECTED_SET_MYID](new String('')); }, VerificationError); 
    Assert.throwsErrorsNone(()=>{ o1[PROTECTED_SET_MYID](new String('sss')); }); 
    Assert.throwsErrors(()=>{ o1[PROTECTED_SET_MYID](123); }, VerificationError); 
    Assert.throwsErrors(()=>{ o1[PROTECTED_SET_MYID](-1); }, VerificationError); 
    Assert.throwsErrors(()=>{ o1[PROTECTED_SET_MYID](new Number(123)); }, VerificationError); 
    Assert.throwsErrors(()=>{ o1[PROTECTED_SET_MYID](new Number(-1)); }, VerificationError); 
    Assert.throwsErrors(()=>{ o1[PROTECTED_SET_MYID](true); }, VerificationError); 
    Assert.throwsErrors(()=>{ o1[PROTECTED_SET_MYID](false); }, VerificationError); 
    Assert.throwsErrors(()=>{ o1[PROTECTED_SET_MYID](new Boolean(true)); }, VerificationError); 
    Assert.throwsErrors(()=>{ o1[PROTECTED_SET_MYID](new Boolean(false)); }, VerificationError); 
    Assert.throwsErrors(()=>{ o1[PROTECTED_SET_MYID](Symbol('uid')); }, VerificationError); 
    Assert.throwsErrors(()=>{ o1[PROTECTED_SET_MYID](Symbol.for('uid')); }, VerificationError); 
    Assert.throwsErrors(()=>{ o1[PROTECTED_SET_MYID](Error); }, VerificationError); 
    Assert.throwsErrors(()=>{ o1[PROTECTED_SET_MYID](Bootstrap5Object); }, VerificationError); 
    Assert.throwsErrors(()=>{ o1[PROTECTED_SET_MYID](testBs5EffSet); }, VerificationError); 
    Assert.throwsErrors(()=>{ o1[PROTECTED_SET_MYID](function(){}); }, VerificationError); 
    Assert.throwsErrors(()=>{ o1[PROTECTED_SET_MYID](()=>{}); }, VerificationError); 
    Assert.throwsErrors(()=>{ o1[PROTECTED_SET_MYID]([]); }, VerificationError); 
    Assert.throwsErrors(()=>{ o1[PROTECTED_SET_MYID]([1,2,3]); }, VerificationError); 
    Assert.throwsErrors(()=>{ o1[PROTECTED_SET_MYID]([[]]); }, VerificationError); 
    Assert.throwsErrors(()=>{ o1[PROTECTED_SET_MYID]([[1,2,3],[4,5,6]]); }, VerificationError); 
    Assert.throwsErrors(()=>{ o1[PROTECTED_SET_MYID](new Map()); }, VerificationError); 
    Assert.throwsErrors(()=>{ o1[PROTECTED_SET_MYID](new Map([['a',1],['b', 2]])); }, VerificationError); 
    Assert.throwsErrors(()=>{ o1[PROTECTED_SET_MYID](new Set()); }, VerificationError); 
    Assert.throwsErrors(()=>{ o1[PROTECTED_SET_MYID](new Set([1,2,3])); }, VerificationError); 
    Assert.throwsErrors(()=>{ o1[PROTECTED_SET_MYID](/123/); }, VerificationError); 
    Assert.throwsErrors(()=>{ o1[PROTECTED_SET_MYID](new RegExp('123')); }, VerificationError); 
    Assert.throwsErrors(()=>{ o1[PROTECTED_SET_MYID]({}); }, VerificationError); 
    Assert.throwsErrors(()=>{ o1[PROTECTED_SET_MYID]({a:1, b:2}); }, VerificationError); 
    Assert.throwsErrors(()=>{ o1[PROTECTED_SET_MYID](new Object()); }, VerificationError); 
    //（css 为可空字符串）
    Assert.throwsErrors(()=>{ o1[PROTECTED_SET_MYCSSCLASS](undefined); }, VerificationError); 
    Assert.throwsErrors(()=>{ o1[PROTECTED_SET_MYCSSCLASS](null); }, VerificationError); 
    Assert.throwsErrors(()=>{ o1[PROTECTED_SET_MYCSSCLASS](NaN); }, VerificationError); 
    Assert.throwsErrorsNone(()=>{ o1[PROTECTED_SET_MYCSSCLASS](''); }); 
    Assert.throwsErrorsNone(()=>{ o1[PROTECTED_SET_MYCSSCLASS]('sss'); }); 
    Assert.throwsErrorsNone(()=>{ o1[PROTECTED_SET_MYCSSCLASS](new String('')); }); 
    Assert.throwsErrorsNone(()=>{ o1[PROTECTED_SET_MYCSSCLASS](new String('sss')); }); 
    Assert.throwsErrors(()=>{ o1[PROTECTED_SET_MYCSSCLASS](123); }, VerificationError); 
    Assert.throwsErrors(()=>{ o1[PROTECTED_SET_MYCSSCLASS](-1); }, VerificationError); 
    Assert.throwsErrors(()=>{ o1[PROTECTED_SET_MYCSSCLASS](new Number(123)); }, VerificationError); 
    Assert.throwsErrors(()=>{ o1[PROTECTED_SET_MYCSSCLASS](new Number(-1)); }, VerificationError); 
    Assert.throwsErrors(()=>{ o1[PROTECTED_SET_MYCSSCLASS](true); }, VerificationError); 
    Assert.throwsErrors(()=>{ o1[PROTECTED_SET_MYCSSCLASS](false); }, VerificationError); 
    Assert.throwsErrors(()=>{ o1[PROTECTED_SET_MYCSSCLASS](new Boolean(true)); }, VerificationError); 
    Assert.throwsErrors(()=>{ o1[PROTECTED_SET_MYCSSCLASS](new Boolean(false)); }, VerificationError); 
    Assert.throwsErrors(()=>{ o1[PROTECTED_SET_MYCSSCLASS](Symbol('uid')); }, VerificationError); 
    Assert.throwsErrors(()=>{ o1[PROTECTED_SET_MYCSSCLASS](Symbol.for('uid')); }, VerificationError); 
    Assert.throwsErrors(()=>{ o1[PROTECTED_SET_MYCSSCLASS](Error); }, VerificationError); 
    Assert.throwsErrors(()=>{ o1[PROTECTED_SET_MYCSSCLASS](Bootstrap5Object); }, VerificationError); 
    Assert.throwsErrors(()=>{ o1[PROTECTED_SET_MYCSSCLASS](testBs5EffSet); }, VerificationError); 
    Assert.throwsErrors(()=>{ o1[PROTECTED_SET_MYCSSCLASS](function(){}); }, VerificationError); 
    Assert.throwsErrors(()=>{ o1[PROTECTED_SET_MYCSSCLASS](()=>{}); }, VerificationError); 
    Assert.throwsErrors(()=>{ o1[PROTECTED_SET_MYCSSCLASS]([]); }, VerificationError); 
    Assert.throwsErrors(()=>{ o1[PROTECTED_SET_MYCSSCLASS]([1,2,3]); }, VerificationError); 
    Assert.throwsErrors(()=>{ o1[PROTECTED_SET_MYCSSCLASS]([[]]); }, VerificationError); 
    Assert.throwsErrors(()=>{ o1[PROTECTED_SET_MYCSSCLASS]([[1,2,3],[4,5,6]]); }, VerificationError); 
    Assert.throwsErrors(()=>{ o1[PROTECTED_SET_MYCSSCLASS](new Map()); }, VerificationError); 
    Assert.throwsErrors(()=>{ o1[PROTECTED_SET_MYCSSCLASS](new Map([['a',1],['b', 2]])); }, VerificationError); 
    Assert.throwsErrors(()=>{ o1[PROTECTED_SET_MYCSSCLASS](new Set()); }, VerificationError); 
    Assert.throwsErrors(()=>{ o1[PROTECTED_SET_MYCSSCLASS](new Set([1,2,3])); }, VerificationError); 
    Assert.throwsErrors(()=>{ o1[PROTECTED_SET_MYCSSCLASS](/123/); }, VerificationError); 
    Assert.throwsErrors(()=>{ o1[PROTECTED_SET_MYCSSCLASS](new RegExp('123')); }, VerificationError); 
    Assert.throwsErrors(()=>{ o1[PROTECTED_SET_MYCSSCLASS]({}); }, VerificationError); 
    Assert.throwsErrors(()=>{ o1[PROTECTED_SET_MYCSSCLASS]({a:1, b:2}); }, VerificationError); 
    Assert.throwsErrors(()=>{ o1[PROTECTED_SET_MYCSSCLASS](new Object()); }, VerificationError); 
    //（subconfig 为对象字面量）
    Assert.throwsErrors(()=>{ o1[PROTECTED_SET_MYSUBCONFIG](undefined); }, VerificationError); 
    Assert.throwsErrors(()=>{ o1[PROTECTED_SET_MYSUBCONFIG](null); }, VerificationError); 
    Assert.throwsErrors(()=>{ o1[PROTECTED_SET_MYSUBCONFIG](NaN); }, VerificationError); 
    Assert.throwsErrors(()=>{ o1[PROTECTED_SET_MYSUBCONFIG](''); }, VerificationError); 
    Assert.throwsErrors(()=>{ o1[PROTECTED_SET_MYSUBCONFIG]('sss'); }, VerificationError); 
    Assert.throwsErrors(()=>{ o1[PROTECTED_SET_MYSUBCONFIG](new String('')); }, VerificationError); 
    Assert.throwsErrors(()=>{ o1[PROTECTED_SET_MYSUBCONFIG](new String('sss')); }, VerificationError); 
    Assert.throwsErrors(()=>{ o1[PROTECTED_SET_MYSUBCONFIG](123); }, VerificationError); 
    Assert.throwsErrors(()=>{ o1[PROTECTED_SET_MYSUBCONFIG](-1); }, VerificationError); 
    Assert.throwsErrors(()=>{ o1[PROTECTED_SET_MYSUBCONFIG](new Number(123)); }, VerificationError); 
    Assert.throwsErrors(()=>{ o1[PROTECTED_SET_MYSUBCONFIG](new Number(-1)); }, VerificationError); 
    Assert.throwsErrors(()=>{ o1[PROTECTED_SET_MYSUBCONFIG](true); }, VerificationError); 
    Assert.throwsErrors(()=>{ o1[PROTECTED_SET_MYSUBCONFIG](false); }, VerificationError); 
    Assert.throwsErrors(()=>{ o1[PROTECTED_SET_MYSUBCONFIG](new Boolean(true)); }, VerificationError); 
    Assert.throwsErrors(()=>{ o1[PROTECTED_SET_MYSUBCONFIG](new Boolean(false)); }, VerificationError); 
    Assert.throwsErrors(()=>{ o1[PROTECTED_SET_MYSUBCONFIG](Symbol('uid')); }, VerificationError); 
    Assert.throwsErrors(()=>{ o1[PROTECTED_SET_MYSUBCONFIG](Symbol.for('uid')); }, VerificationError); 
    Assert.throwsErrors(()=>{ o1[PROTECTED_SET_MYSUBCONFIG](Error); }, VerificationError); 
    Assert.throwsErrors(()=>{ o1[PROTECTED_SET_MYSUBCONFIG](Bootstrap5Object); }, VerificationError); 
    Assert.throwsErrors(()=>{ o1[PROTECTED_SET_MYSUBCONFIG](testBs5EffSet); }, VerificationError); 
    Assert.throwsErrors(()=>{ o1[PROTECTED_SET_MYSUBCONFIG](function(){}); }, VerificationError); 
    Assert.throwsErrors(()=>{ o1[PROTECTED_SET_MYSUBCONFIG](()=>{}); }, VerificationError); 
    Assert.throwsErrors(()=>{ o1[PROTECTED_SET_MYSUBCONFIG]([]); }, VerificationError); 
    Assert.throwsErrors(()=>{ o1[PROTECTED_SET_MYSUBCONFIG]([1,2,3]); }, VerificationError); 
    Assert.throwsErrors(()=>{ o1[PROTECTED_SET_MYSUBCONFIG]([[]]); }, VerificationError); 
    Assert.throwsErrors(()=>{ o1[PROTECTED_SET_MYSUBCONFIG]([[1,2,3],[4,5,6]]); }, VerificationError); 
    Assert.throwsErrors(()=>{ o1[PROTECTED_SET_MYSUBCONFIG](new Map()); }, VerificationError); 
    Assert.throwsErrors(()=>{ o1[PROTECTED_SET_MYSUBCONFIG](new Map([['a',1],['b', 2]])); }, VerificationError); 
    Assert.throwsErrors(()=>{ o1[PROTECTED_SET_MYSUBCONFIG](new Set()); }, VerificationError); 
    Assert.throwsErrors(()=>{ o1[PROTECTED_SET_MYSUBCONFIG](new Set([1,2,3])); }, VerificationError); 
    Assert.throwsErrors(()=>{ o1[PROTECTED_SET_MYSUBCONFIG](/123/); }, VerificationError); 
    Assert.throwsErrors(()=>{ o1[PROTECTED_SET_MYSUBCONFIG](new RegExp('123')); }, VerificationError); 
    Assert.throwsErrorsNone(()=>{ o1[PROTECTED_SET_MYSUBCONFIG]({}); }); 
    Assert.throwsErrorsNone(()=>{ o1[PROTECTED_SET_MYSUBCONFIG]({a:1, b:2}); }); 
    Assert.throwsErrorsNone(()=>{ o1[PROTECTED_SET_MYSUBCONFIG](new Object()); });
    //（object 为 Bootstrap5Object）
    Assert.throwsErrors(()=>{ o1[PROTECTED_SET_BOOTSTRAPOBJECT](undefined); }, VerificationError); 
    Assert.throwsErrors(()=>{ o1[PROTECTED_SET_BOOTSTRAPOBJECT](null); }, VerificationError); 
    Assert.throwsErrors(()=>{ o1[PROTECTED_SET_BOOTSTRAPOBJECT](NaN); }, VerificationError); 
    Assert.throwsErrors(()=>{ o1[PROTECTED_SET_BOOTSTRAPOBJECT](''); }, VerificationError); 
    Assert.throwsErrors(()=>{ o1[PROTECTED_SET_BOOTSTRAPOBJECT]('sss'); }, VerificationError); 
    Assert.throwsErrors(()=>{ o1[PROTECTED_SET_BOOTSTRAPOBJECT](new String('')); }, VerificationError); 
    Assert.throwsErrors(()=>{ o1[PROTECTED_SET_BOOTSTRAPOBJECT](new String('sss')); }, VerificationError); 
    Assert.throwsErrors(()=>{ o1[PROTECTED_SET_BOOTSTRAPOBJECT](123); }, VerificationError); 
    Assert.throwsErrors(()=>{ o1[PROTECTED_SET_BOOTSTRAPOBJECT](-1); }, VerificationError); 
    Assert.throwsErrors(()=>{ o1[PROTECTED_SET_BOOTSTRAPOBJECT](new Number(123)); }, VerificationError); 
    Assert.throwsErrors(()=>{ o1[PROTECTED_SET_BOOTSTRAPOBJECT](new Number(-1)); }, VerificationError); 
    Assert.throwsErrors(()=>{ o1[PROTECTED_SET_BOOTSTRAPOBJECT](true); }, VerificationError); 
    Assert.throwsErrors(()=>{ o1[PROTECTED_SET_BOOTSTRAPOBJECT](false); }, VerificationError); 
    Assert.throwsErrors(()=>{ o1[PROTECTED_SET_BOOTSTRAPOBJECT](new Boolean(true)); }, VerificationError); 
    Assert.throwsErrors(()=>{ o1[PROTECTED_SET_BOOTSTRAPOBJECT](new Boolean(false)); }, VerificationError); 
    Assert.throwsErrors(()=>{ o1[PROTECTED_SET_BOOTSTRAPOBJECT](Symbol('uid')); }, VerificationError); 
    Assert.throwsErrors(()=>{ o1[PROTECTED_SET_BOOTSTRAPOBJECT](Symbol.for('uid')); }, VerificationError); 
    Assert.throwsErrors(()=>{ o1[PROTECTED_SET_BOOTSTRAPOBJECT](Error); }, VerificationError); 
    Assert.throwsErrors(()=>{ o1[PROTECTED_SET_BOOTSTRAPOBJECT](Bootstrap5Object); }, VerificationError); 
    Assert.throwsErrors(()=>{ o1[PROTECTED_SET_BOOTSTRAPOBJECT](testBs5EffSet); }, VerificationError); 
    Assert.throwsErrors(()=>{ o1[PROTECTED_SET_BOOTSTRAPOBJECT](function(){}); }, VerificationError); 
    Assert.throwsErrors(()=>{ o1[PROTECTED_SET_BOOTSTRAPOBJECT](()=>{}); }, VerificationError); 
    Assert.throwsErrors(()=>{ o1[PROTECTED_SET_BOOTSTRAPOBJECT]([]); }, VerificationError); 
    Assert.throwsErrors(()=>{ o1[PROTECTED_SET_BOOTSTRAPOBJECT]([1,2,3]); }, VerificationError); 
    Assert.throwsErrors(()=>{ o1[PROTECTED_SET_BOOTSTRAPOBJECT]([[]]); }, VerificationError); 
    Assert.throwsErrors(()=>{ o1[PROTECTED_SET_BOOTSTRAPOBJECT]([[1,2,3],[4,5,6]]); }, VerificationError); 
    Assert.throwsErrors(()=>{ o1[PROTECTED_SET_BOOTSTRAPOBJECT](new Map()); }, VerificationError); 
    Assert.throwsErrors(()=>{ o1[PROTECTED_SET_BOOTSTRAPOBJECT](new Map([['a',1],['b', 2]])); }, VerificationError); 
    Assert.throwsErrors(()=>{ o1[PROTECTED_SET_BOOTSTRAPOBJECT](new Set()); }, VerificationError); 
    Assert.throwsErrors(()=>{ o1[PROTECTED_SET_BOOTSTRAPOBJECT](new Set([1,2,3])); }, VerificationError); 
    Assert.throwsErrors(()=>{ o1[PROTECTED_SET_BOOTSTRAPOBJECT](/123/); }, VerificationError); 
    Assert.throwsErrors(()=>{ o1[PROTECTED_SET_BOOTSTRAPOBJECT](new RegExp('123')); }, VerificationError); 
    Assert.throwsErrors(()=>{ o1[PROTECTED_SET_BOOTSTRAPOBJECT]({}); }, VerificationError); 
    Assert.throwsErrors(()=>{ o1[PROTECTED_SET_BOOTSTRAPOBJECT]({a:1, b:2}); }, VerificationError); 
    Assert.throwsErrors(()=>{ o1[PROTECTED_SET_BOOTSTRAPOBJECT](new Object()); }, VerificationError);
    Assert.throwsErrorsNone(()=>{ o1[PROTECTED_SET_BOOTSTRAPOBJECT](new Bootstrap5Object()) });
    // 
    let o2 = new Bs5EffBaseComponent('bs5Eff001', 'm-2', {a:1, b:2});
    // 对修改前的对象进行校对
    Assert.equalsStrictly('<div id="bs5Eff001" class="m-2"></div>', o2.getHtmlString());

    // 修改 ID 内置属性，并验证
    o2[PROTECTED_SET_MYID]('newId');
    Assert.equalsStrictly('newId', o2[PROTECTED_GET_MYID]());
    // 修改 样式 内置属性
    o2[PROTECTED_SET_MYCSSCLASS]('    ');
    Assert.equalsStrictly('    ', o2[PROTECTED_GET_MYCSSCLASS]());
    // 修改 二级对象 内置属性
    o2[PROTECTED_SET_MYSUBCONFIG]({bb:2, cc:3});
    Assert.objectEquals({bb:2, cc:3}, o2[PROTECTED_GET_MYSUBCONFIG]());
    // 比对输出的 html 信息
    Assert.equalsStrictly('<div id="newId"></div>', o2.getHtmlString());
    // 再修改一次 css 信息
    o2[PROTECTED_SET_MYCSSCLASS]('    ssss      AA    cc   ');
    Assert.equalsStrictly('<div id="newId" class="ssss AA cc"></div>', o2.getHtmlString());

    // 修改 修改内置的 Boostrap5Object 对象
    let bs5ObjTest1 = new Bootstrap5Object('input', {ddd:1, eee:'ddsss'}, ['测试']);
    o2[PROTECTED_SET_BOOTSTRAPOBJECT](bs5ObjTest1);
    Assert.objectEquals(bs5ObjTest1, o2[PROTECTED_GET_BOOTSTRAPOBJECT]());
    // 对修改后的结果，进行校对（这里因为 input 是空元素标签，所以不会构建 content 内容）
    Assert.equalsStrictly('<input ddd="1" eee="ddsss"/>', o2.getHtmlString());
}

function testBs5EffHtmlString(){

    // 这里是打印字符比对，前面已经用过了

    let o0 = new Bs5EffBaseComponent();
    let o1 = new Bs5EffBaseComponent('o1', 'myO1css', {a:1, b:2});
    let o2 = new Bs5EffBaseComponent('o2');

    Assert.equalsStrictly(true, isRegexpOk(o0.getHtmlString(), /^<div id=\"Bs5EffBaseComponent\d{4,}\"><\/div>$/));
    Assert.equalsStrictly('<div id="o1" class="myO1css"></div>', o1.getHtmlString());
    Assert.equalsStrictly('<div id="o2"></div>', o2.getHtmlString());

    // 修改一些内容，再比对
    o1[PROTECTED_SET_MYCSSCLASS]('aaa');
    Assert.equalsStrictly('<div id="o1" class="aaa"></div>', o1.getHtmlString());
}

function testBs5EffHtmlObject(){

    // 这里是 HTMLElement 对象比对

    let o0 = new Bs5EffBaseComponent();
    let o1 = new Bs5EffBaseComponent('o1', 'myO1css', {a:1, b:2});
    let o2 = new Bs5EffBaseComponent('o2');

    let o0Arr = o0.getHtmlDomObjectArray();
    let o1Arr = o1.getHtmlDomObjectArray();
    let o2Arr = o2.getHtmlDomObjectArray();

    // 测试 数组长度
    Assert.equalsStrictly(1, o0Arr.length);
    Assert.equalsStrictly(1, o1Arr.length);
    Assert.equalsStrictly(1, o2Arr.length);

    // 标签的 node 信息比对
    Assert.equalsStrictly('div', o0Arr[0].nodeName.toLowerCase());
    Assert.equalsStrictly(true, typeof o0Arr[0].id === 'string');
    Assert.equalsStrictly(true, isRegexpOk(o0Arr[0].id, /^Bs5EffBaseComponent\d{4,}$/));
    Assert.equalsStrictly('myO1css', o1Arr[0].className);
    Assert.equalsStrictly('o1', o1Arr[0].id);
    Assert.equalsStrictly('o2', o2Arr[0].id);
}

function testBs5EffWrite(){

    // 这里需要测试写入页面的效果。所以要增加几个按钮。
    // 这里是一个 空的div
    let infoDiv = new Bs5EffBaseComponent(undefined, 'need-to-be-deleted');
    
    // 参数测试
    Assert.throwsErrorsNone(()=>{ infoDiv.writeToPage(undefined); }); // 这里有默认值
    Assert.throwsErrors(()=>{ infoDiv.writeToPage(null); }, VerificationError);
    Assert.throwsErrors(()=>{ infoDiv.writeToPage(NaN); }, VerificationError);
    Assert.throwsErrors(()=>{ infoDiv.writeToPage(''); }, VerificationError);
    Assert.throwsErrors(()=>{ infoDiv.writeToPage('sss'); }, VerificationError);
    Assert.throwsErrors(()=>{ infoDiv.writeToPage(new String('')); }, VerificationError);
    Assert.throwsErrors(()=>{ infoDiv.writeToPage(new String('sss')); }, VerificationError);
    Assert.throwsErrors(()=>{ infoDiv.writeToPage(123); }, VerificationError);
    Assert.throwsErrors(()=>{ infoDiv.writeToPage(-1); }, VerificationError);
    Assert.throwsErrors(()=>{ infoDiv.writeToPage(new Number(123)); }, VerificationError);
    Assert.throwsErrors(()=>{ infoDiv.writeToPage(new Number(-1)); }, VerificationError);
    Assert.throwsErrors(()=>{ infoDiv.writeToPage(true); }, VerificationError);
    Assert.throwsErrors(()=>{ infoDiv.writeToPage(false); }, VerificationError);
    Assert.throwsErrors(()=>{ infoDiv.writeToPage(new Boolean(true)); }, VerificationError);
    Assert.throwsErrors(()=>{ infoDiv.writeToPage(new Boolean(false)); }, VerificationError);
    Assert.throwsErrors(()=>{ infoDiv.writeToPage(Symbol('uid')); }, VerificationError);
    Assert.throwsErrors(()=>{ infoDiv.writeToPage(Symbol.for('uid')); }, VerificationError);
    Assert.throwsErrors(()=>{ infoDiv.writeToPage(Error); }, VerificationError);
    Assert.throwsErrors(()=>{ infoDiv.writeToPage(Bootstrap5Object); }, VerificationError);
    Assert.throwsErrors(()=>{ infoDiv.writeToPage(testBs5EffWrite); }, VerificationError);
    Assert.throwsErrors(()=>{ infoDiv.writeToPage(function(){}); }, VerificationError);
    Assert.throwsErrors(()=>{ infoDiv.writeToPage(()=>{}); }, VerificationError);
    Assert.throwsErrors(()=>{ infoDiv.writeToPage([]); }, VerificationError);
    Assert.throwsErrors(()=>{ infoDiv.writeToPage([1,2,3]); }, VerificationError);
    Assert.throwsErrors(()=>{ infoDiv.writeToPage([[]]); }, VerificationError);
    Assert.throwsErrors(()=>{ infoDiv.writeToPage([[1,2,3],[4,5,6]]); }, VerificationError);
    Assert.throwsErrors(()=>{ infoDiv.writeToPage(new Map()); }, VerificationError);
    Assert.throwsErrors(()=>{ infoDiv.writeToPage(new Map([['a',1],['b', 2]])); }, VerificationError);
    Assert.throwsErrors(()=>{ infoDiv.writeToPage(new Set()); }, VerificationError);
    Assert.throwsErrors(()=>{ infoDiv.writeToPage(new Set([1,2,3])); }, VerificationError);
    Assert.throwsErrors(()=>{ infoDiv.writeToPage(/123/); }, VerificationError);
    Assert.throwsErrors(()=>{ infoDiv.writeToPage(new RegExp('123')); }, VerificationError);
    Assert.throwsErrors(()=>{ infoDiv.writeToPage({}); }, VerificationError);
    Assert.throwsErrors(()=>{ infoDiv.writeToPage({a:1, b:2}); }, VerificationError);
    Assert.throwsErrors(()=>{ infoDiv.writeToPage(new Object()); }, VerificationError);
    // 
    Assert.throwsErrors(()=>{ infoDiv.writeToPage(document); }, VerificationError);
    Assert.throwsErrorsNone(()=>{ infoDiv.writeToPage(document.body); });
    Assert.throwsErrorsNone(()=>{ infoDiv.writeToPage(document.getElementById('result')); });

    // 按照 插入顺序，应该 result 里面1个，body 底部2个。
    Assert.equalsStrictly(3, document.querySelectorAll('.need-to-be-deleted').length);
    // 把这3个删除，以免影响后续测试
    document.querySelectorAll('.need-to-be-deleted').forEach(elem=>{
        elem.remove();
    });
    // 删除完成，应该改匹配不到了。
    Assert.equalsStrictly(0, document.querySelectorAll('.need-to-be-deleted').length);
}

function testBs5EffShowAndHide(){

    // 把 div 写到页面上
    let div1 = new Bs5EffBaseComponent(undefined, 'test1');
    div1.writeToPage(document.getElementById('result'));

    // 进行 css 增减测试
    div1.hide();
    Assert.equalsStrictly(true, document.querySelector(`#${div1[PROTECTED_GET_MYID]()}`).classList.contains('visually-hidden'));
    div1.show();
    Assert.equalsStrictly(false, document.querySelector(`#${div1[PROTECTED_GET_MYID]()}`).classList.contains('visually-hidden'));
}

function testBs5EffAble(){

    // 把 div 写到页面上
    let div1 = new Bs5EffBaseComponent(undefined, 'test1');
    div1.writeToPage(document.getElementById('result'));

    // 进行 属性增减测试
    div1.disable();
    Assert.equalsStrictly(true, document.querySelector(`#${div1[PROTECTED_GET_MYID]()}`).hasAttribute('disabled'));
    div1.enable();
    Assert.equalsStrictly(false, document.querySelector(`#${div1[PROTECTED_GET_MYID]()}`).hasAttribute('disabled'));
}

// ============ 导出测试函数

export {
    testBs5EffConstructor, testBs5EffGet, testBs5EffSet, testBs5EffHtmlString,
    testBs5EffHtmlObject, testBs5EffWrite, testBs5EffShowAndHide, testBs5EffAble
}