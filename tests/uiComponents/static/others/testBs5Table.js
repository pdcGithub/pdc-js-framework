/**
 * In my license, all codes can be shared free of charge. 
 * However, If my code is taken for commercial use, please maintain it yourself. 
 * I am not obligated to take responsibility for your business application.
 * Here is my email "pangdongcan@live.com"
 * 
 * Copyright © 2026 Micheal Pang. All rights reserved.
 * 
 * @file This file "testBs5Table.js" is part of project "pdc-js-framework" , which is belong to Michael Pang (It's Me).
 * @author  Micheal Pang (Dongcan Pang)
 * @since  2026-08-07
 * @description 这是 static 组件中的 表格组件 Bs5Table 的测试程序。
 */
"use strict"; // 这是严格模式下的 Javascript 代码

// ============ 导入测试工具
import { Assert } from "../../../testTools.js";

// ============ 导入测试内容
import { Bs5Table } from "../../../../uiComponents/static/others/Bs5Table.js";
import { ParameterError, VerificationError } from "../../../../models/errors.js";
import { Bootstrap5Object } from "../../../../uiComponents/static/base/Bootstrap5Object.js";
import { DOM_PARSER } from "../../../../utils/html.js";

// ============ 开始测试

function testBs5TableConstructor(){

    // 构造函数 参数测试
    // id 
    Assert.throwsErrorsNone(()=>{ new Bs5Table(undefined, [], [[]], {}); }, VerificationError); // undefined 默认值
    Assert.throwsErrors(()=>{ new Bs5Table(null, [], [[]], {}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table(NaN, [], [[]], {}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('', [], [[]], {}); }, VerificationError);
    Assert.throwsErrorsNone(()=>{ new Bs5Table('sss', [], [[]], {}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table(new String(''), [], [[]], {}); }, VerificationError);
    Assert.throwsErrorsNone(()=>{ new Bs5Table(new String('sss'), [], [[]], {}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table(123, [], [[]], {}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table(-1, [], [[]], {}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table(new Number(123), [], [[]], {}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table(new Number(-1), [], [[]], {}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table(true, [], [[]], {}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table(false, [], [[]], {}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table(new Boolean(true), [], [[]], {}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table(new Boolean(false), [], [[]], {}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table(Symbol('uid'), [], [[]], {}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table(Symbol.for('uid'), [], [[]], {}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table(Error, [], [[]], {}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table(ParameterError, [], [[]], {}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table(testBs5TableConstructor, [], [[]], {}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table(function(){}, [], [[]], {}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table(()=>{}, [], [[]], {}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table([], [], [[]], {}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table([1,2,3], [], [[]], {}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table([[]], [], [[]], {}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table([[1,2,3],[4,5,6]], [], [[]], {}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table(new Map(), [], [[]], {}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table(new Map([['a',1],['b', 2]]), [], [[]], {}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table(new Set(), [], [[]], {}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table(new Set([1,2,3]), [], [[]], {}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table(/123/, [], [[]], {}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table(new RegExp('123'), [], [[]], {}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table({}, [], [[]], {}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table({a:1, b:2}, [], [[]], {}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table(new Object(), [], [[]], {}); }, VerificationError);

    // header
    Assert.throwsErrorsNone(()=>{ new Bs5Table('id', undefined, [[]], {}); }, VerificationError); // undefined 默认值
    Assert.throwsErrors(()=>{ new Bs5Table('id', null, [[]], {}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', NaN, [[]], {}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', '', [[]], {}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', 'sss', [[]], {}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', new String(''), [[]], {}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', new String('sss'), [[]], {}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', 123, [[]], {}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', -1, [[]], {}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', new Number(123), [[]], {}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', new Number(-1), [[]], {}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', true, [[]], {}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', false, [[]], {}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', new Boolean(true), [[]], {}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', new Boolean(false), [[]], {}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', Symbol('uid'), [[]], {}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', Symbol.for('uid'), [[]], {}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', Error, [[]], {}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', ParameterError, [[]], {}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', testBs5TableConstructor, [[]], {}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', function(){}, [[]], {}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', ()=>{}, [[]], {}); }, VerificationError);
    Assert.throwsErrorsNone(()=>{ new Bs5Table('id', [], [[]], {}); }, VerificationError); // 标题、数据 都为空。
    Assert.throwsErrors(()=>{ new Bs5Table('id', [1,2,3], [[]], {}); }, VerificationError); // 标题只能为字符串。
    Assert.throwsErrorsNone(()=>{ new Bs5Table('id', ['1','2'], [[]], {}); }, VerificationError);// 有标题，但没有内容。
    Assert.throwsErrors(()=>{ new Bs5Table('id', [[]], [[]], {}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [[1,2,3],[4,5,6]], [[]], {}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', new Map(), [[]], {}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', new Map([['a',1],['b', 2]]), [[]], {}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', new Set(), [[]], {}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', new Set([1,2,3]), [[]], {}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', /123/, [[]], {}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', new RegExp('123'), [[]], {}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', {}, [[]], {}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', {a:1, b:2}, [[]], {}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', new Object(), [[]], {}); }, VerificationError);

    // body
    Assert.throwsErrorsNone(()=>{ new Bs5Table('id', ['a', 'b'], undefined, {}); }, VerificationError); // 默认值
    Assert.throwsErrors(()=>{ new Bs5Table('id', ['a', 'b'], null, {}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', ['a', 'b'], NaN, {}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', ['a', 'b'], '', {}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', ['a', 'b'], 'sss', {}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', ['a', 'b'], new String(''), {}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', ['a', 'b'], new String('sss'), {}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', ['a', 'b'], 123, {}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', ['a', 'b'], -1, {}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', ['a', 'b'], new Number(123), {}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', ['a', 'b'], new Number(-1), {}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', ['a', 'b'], true, {}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', ['a', 'b'], false, {}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', ['a', 'b'], new Boolean(true), {}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', ['a', 'b'], new Boolean(false), {}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', ['a', 'b'], Symbol('uid'), {}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', ['a', 'b'], Symbol.for('uid'), {}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', ['a', 'b'], Error, {}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', ['a', 'b'], ParameterError, {}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', ['a', 'b'], testBs5TableConstructor, {}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', ['a', 'b'], function(){}, {}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', ['a', 'b'], ()=>{}, {}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', ['a', 'b'], [], {}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', ['a', 'b'], [1,2,3], {}); }, VerificationError);
    Assert.throwsErrorsNone(()=>{ new Bs5Table('id', ['a', 'b'], [[]], {}); }, VerificationError); // 数据是二维数组，可以为空。
    Assert.throwsErrorsNone(()=>{ new Bs5Table('id', ['a', 'b'], [['1', '2']], {}); }, VerificationError); // 数据是二维数组，字符型
    Assert.throwsErrorsNone(()=>{ new Bs5Table('id', ['a', 'b'], [[new Bootstrap5Object(), '2']], {}); }, VerificationError); // 数据是二维数组，对象型
    Assert.throwsErrors(()=>{ new Bs5Table('id', ['a', 'b'], [[new Bootstrap5Object(), '2', '3']], {}); }, VerificationError); // 数据是二维数组，但超出长度
    Assert.throwsErrors(()=>{ new Bs5Table('id', ['a', 'b'], [[1,2,3],[4,5,6]], {}); }, VerificationError); // 二维数组类型不对
    Assert.throwsErrors(()=>{ new Bs5Table('id', ['a', 'b'], new Map(), {}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', ['a', 'b'], new Map([['a',1],['b', 2]]), {}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', ['a', 'b'], new Set(), {}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', ['a', 'b'], new Set([1,2,3]), {}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', ['a', 'b'], /123/, {}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', ['a', 'b'], new RegExp('123'), {}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', ['a', 'b'], {}, {}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', ['a', 'b'], {a:1, b:2}, {}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', ['a', 'b'], new Object(), {}); }, VerificationError);

    // options
    Assert.throwsErrorsNone(()=>{ new Bs5Table('id', [], [[]], undefined); }, VerificationError); // 默认值
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], null); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], NaN); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], ''); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], 'sss'); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], new String('')); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], new String('sss')); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], 123); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], -1); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], new Number(123)); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], new Number(-1)); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], true); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], false); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], new Boolean(true)); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], new Boolean(false)); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], Symbol('uid')); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], Symbol.for('uid')); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], Error); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], ParameterError); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], testBs5TableConstructor); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], function(){}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], ()=>{}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], []); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], [1,2,3]); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], [[]]); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], [[1,2,3],[4,5,6]]); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], new Map()); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], new Map([['a',1],['b', 2]])); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], new Set()); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], new Set([1,2,3])); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], /123/); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], new RegExp('123')); }, VerificationError);
    Assert.throwsErrorsNone(()=>{ new Bs5Table('id', [], [[]], {}); }, VerificationError); // options 是对象字面量。二级配置有默认值，不需要每个都设置
    Assert.throwsErrorsNone(()=>{ new Bs5Table('id', [], [[]], {a:1, b:2}); }, VerificationError);
    Assert.throwsErrorsNone(()=>{ new Bs5Table('id', [], [[]], new Object()); }, VerificationError);
    
    // options 内部的二级配置信息。二级配置是可选的，不需要每个都写，不写的有默认配置
    // 但是，如果二级配置写 undefined 不会转换为 默认值，要注意。

    // boolean options.rowStriped
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {rowStriped:undefined}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {rowStriped:null}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {rowStriped:NaN}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {rowStriped:''}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {rowStriped:'sss'}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {rowStriped:new String('')}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {rowStriped:new String('sss')}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {rowStriped:123}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {rowStriped:-1}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {rowStriped:new Number(123)}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {rowStriped:new Number(-1)}); }, VerificationError);
    Assert.throwsErrorsNone(()=>{ new Bs5Table('id', [], [[]], {rowStriped:true}); }, VerificationError);
    Assert.throwsErrorsNone(()=>{ new Bs5Table('id', [], [[]], {rowStriped:false}); }, VerificationError);
    Assert.throwsErrorsNone(()=>{ new Bs5Table('id', [], [[]], {rowStriped:new Boolean(true)}); }, VerificationError);
    Assert.throwsErrorsNone(()=>{ new Bs5Table('id', [], [[]], {rowStriped:new Boolean(false)}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {rowStriped:Symbol('uid')}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {rowStriped:Symbol.for('uid')}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {rowStriped:Error}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {rowStriped:Bootstrap5Object}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {rowStriped:testBs5TableConstructor}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {rowStriped:function(){}}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {rowStriped:()=>{}}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {rowStriped:[]}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {rowStriped:[1,2,3]}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {rowStriped:[[]]}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {rowStriped:[[1,2,3],[4,5,6]]}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {rowStriped:new Map()}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {rowStriped:new Map([['a',1],['b', 2]])}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {rowStriped:new Set()}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {rowStriped:new Set([1,2,3])}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {rowStriped:/123/}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {rowStriped:new RegExp('123')}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {rowStriped:{}}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {rowStriped:{a:1, b:2}}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {rowStriped:new Object()}); }, VerificationError);
    // boolean options.colStriped
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {colStriped:undefined}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {colStriped:null}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {colStriped:NaN}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {colStriped:''}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {colStriped:'sss'}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {colStriped:new String('')}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {colStriped:new String('sss')}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {colStriped:123}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {colStriped:-1}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {colStriped:new Number(123)}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {colStriped:new Number(-1)}); }, VerificationError);
    Assert.throwsErrorsNone(()=>{ new Bs5Table('id', [], [[]], {colStriped:true}); }, VerificationError);
    Assert.throwsErrorsNone(()=>{ new Bs5Table('id', [], [[]], {colStriped:false}); }, VerificationError);
    Assert.throwsErrorsNone(()=>{ new Bs5Table('id', [], [[]], {colStriped:new Boolean(true)}); }, VerificationError);
    Assert.throwsErrorsNone(()=>{ new Bs5Table('id', [], [[]], {colStriped:new Boolean(false)}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {colStriped:Symbol('uid')}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {colStriped:Symbol.for('uid')}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {colStriped:Error}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {colStriped:Bootstrap5Object}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {colStriped:testBs5TableConstructor}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {colStriped:function(){}}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {colStriped:()=>{}}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {colStriped:[]}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {colStriped:[1,2,3]}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {colStriped:[[]]}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {colStriped:[[1,2,3],[4,5,6]]}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {colStriped:new Map()}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {colStriped:new Map([['a',1],['b', 2]])}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {colStriped:new Set()}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {colStriped:new Set([1,2,3])}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {colStriped:/123/}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {colStriped:new RegExp('123')}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {colStriped:{}}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {colStriped:{a:1, b:2}}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {colStriped:new Object()}); }, VerificationError);
    // boolean options.hover
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {hover:undefined}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {hover:null}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {hover:NaN}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {hover:''}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {hover:'sss'}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {hover:new String('')}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {hover:new String('sss')}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {hover:123}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {hover:-1}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {hover:new Number(123)}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {hover:new Number(-1)}); }, VerificationError);
    Assert.throwsErrorsNone(()=>{ new Bs5Table('id', [], [[]], {hover:true}); }, VerificationError);
    Assert.throwsErrorsNone(()=>{ new Bs5Table('id', [], [[]], {hover:false}); }, VerificationError);
    Assert.throwsErrorsNone(()=>{ new Bs5Table('id', [], [[]], {hover:new Boolean(true)}); }, VerificationError);
    Assert.throwsErrorsNone(()=>{ new Bs5Table('id', [], [[]], {hover:new Boolean(false)}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {hover:Symbol('uid')}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {hover:Symbol.for('uid')}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {hover:Error}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {hover:Bootstrap5Object}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {hover:testBs5TableConstructor}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {hover:function(){}}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {hover:()=>{}}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {hover:[]}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {hover:[1,2,3]}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {hover:[[]]}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {hover:[[1,2,3],[4,5,6]]}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {hover:new Map()}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {hover:new Map([['a',1],['b', 2]])}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {hover:new Set()}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {hover:new Set([1,2,3])}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {hover:/123/}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {hover:new RegExp('123')}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {hover:{}}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {hover:{a:1, b:2}}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {hover:new Object()}); }, VerificationError);
    // boolean options.bordered
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {bordered:undefined}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {bordered:null}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {bordered:NaN}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {bordered:''}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {bordered:'sss'}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {bordered:new String('')}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {bordered:new String('sss')}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {bordered:123}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {bordered:-1}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {bordered:new Number(123)}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {bordered:new Number(-1)}); }, VerificationError);
    Assert.throwsErrorsNone(()=>{ new Bs5Table('id', [], [[]], {bordered:true}); }, VerificationError);
    Assert.throwsErrorsNone(()=>{ new Bs5Table('id', [], [[]], {bordered:false}); }, VerificationError);
    Assert.throwsErrorsNone(()=>{ new Bs5Table('id', [], [[]], {bordered:new Boolean(true)}); }, VerificationError);
    Assert.throwsErrorsNone(()=>{ new Bs5Table('id', [], [[]], {bordered:new Boolean(false)}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {bordered:Symbol('uid')}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {bordered:Symbol.for('uid')}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {bordered:Error}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {bordered:Bootstrap5Object}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {bordered:testBs5TableConstructor}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {bordered:function(){}}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {bordered:()=>{}}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {bordered:[]}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {bordered:[1,2,3]}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {bordered:[[]]}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {bordered:[[1,2,3],[4,5,6]]}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {bordered:new Map()}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {bordered:new Map([['a',1],['b', 2]])}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {bordered:new Set()}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {bordered:new Set([1,2,3])}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {bordered:/123/}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {bordered:new RegExp('123')}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {bordered:{}}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {bordered:{a:1, b:2}}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {bordered:new Object()}); }, VerificationError);
    // string options.borderColor
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {borderColor:undefined}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {borderColor:null}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {borderColor:NaN}); }, VerificationError);
    Assert.throwsErrorsNone(()=>{ new Bs5Table('id', [], [[]], {borderColor:''}); }, VerificationError);
    Assert.throwsErrorsNone(()=>{ new Bs5Table('id', [], [[]], {borderColor:'sss'}); }, VerificationError);
    Assert.throwsErrorsNone(()=>{ new Bs5Table('id', [], [[]], {borderColor:new String('')}); }, VerificationError);
    Assert.throwsErrorsNone(()=>{ new Bs5Table('id', [], [[]], {borderColor:new String('sss')}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {borderColor:123}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {borderColor:-1}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {borderColor:new Number(123)}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {borderColor:new Number(-1)}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {borderColor:true}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {borderColor:false}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {borderColor:new Boolean(true)}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {borderColor:new Boolean(false)}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {borderColor:Symbol('uid')}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {borderColor:Symbol.for('uid')}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {borderColor:Error}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {borderColor:Bootstrap5Object}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {borderColor:testBs5TableConstructor}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {borderColor:function(){}}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {borderColor:()=>{}}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {borderColor:[]}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {borderColor:[1,2,3]}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {borderColor:[[]]}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {borderColor:[[1,2,3],[4,5,6]]}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {borderColor:new Map()}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {borderColor:new Map([['a',1],['b', 2]])}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {borderColor:new Set()}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {borderColor:new Set([1,2,3])}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {borderColor:/123/}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {borderColor:new RegExp('123')}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {borderColor:{}}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {borderColor:{a:1, b:2}}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {borderColor:new Object()}); }, VerificationError);
    // boolean options.borderLess
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {borderLess:undefined}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {borderLess:null}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {borderLess:NaN}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {borderLess:''}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {borderLess:'sss'}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {borderLess:new String('')}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {borderLess:new String('sss')}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {borderLess:123}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {borderLess:-1}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {borderLess:new Number(123)}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {borderLess:new Number(-1)}); }, VerificationError);
    Assert.throwsErrorsNone(()=>{ new Bs5Table('id', [], [[]], {borderLess:true}); }, VerificationError);
    Assert.throwsErrorsNone(()=>{ new Bs5Table('id', [], [[]], {borderLess:false}); }, VerificationError);
    Assert.throwsErrorsNone(()=>{ new Bs5Table('id', [], [[]], {borderLess:new Boolean(true)}); }, VerificationError);
    Assert.throwsErrorsNone(()=>{ new Bs5Table('id', [], [[]], {borderLess:new Boolean(false)}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {borderLess:Symbol('uid')}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {borderLess:Symbol.for('uid')}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {borderLess:Error}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {borderLess:Bootstrap5Object}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {borderLess:testBs5TableConstructor}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {borderLess:function(){}}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {borderLess:()=>{}}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {borderLess:[]}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {borderLess:[1,2,3]}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {borderLess:[[]]}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {borderLess:[[1,2,3],[4,5,6]]}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {borderLess:new Map()}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {borderLess:new Map([['a',1],['b', 2]])}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {borderLess:new Set()}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {borderLess:new Set([1,2,3])}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {borderLess:/123/}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {borderLess:new RegExp('123')}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {borderLess:{}}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {borderLess:{a:1, b:2}}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {borderLess:new Object()}); }, VerificationError);
    // boolean options.moreCompact
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {moreCompact:undefined}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {moreCompact:null}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {moreCompact:NaN}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {moreCompact:''}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {moreCompact:'sss'}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {moreCompact:new String('')}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {moreCompact:new String('sss')}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {moreCompact:123}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {moreCompact:-1}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {moreCompact:new Number(123)}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {moreCompact:new Number(-1)}); }, VerificationError);
    Assert.throwsErrorsNone(()=>{ new Bs5Table('id', [], [[]], {moreCompact:true}); }, VerificationError);
    Assert.throwsErrorsNone(()=>{ new Bs5Table('id', [], [[]], {moreCompact:false}); }, VerificationError);
    Assert.throwsErrorsNone(()=>{ new Bs5Table('id', [], [[]], {moreCompact:new Boolean(true)}); }, VerificationError);
    Assert.throwsErrorsNone(()=>{ new Bs5Table('id', [], [[]], {moreCompact:new Boolean(false)}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {moreCompact:Symbol('uid')}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {moreCompact:Symbol.for('uid')}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {moreCompact:Error}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {moreCompact:Bootstrap5Object}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {moreCompact:testBs5TableConstructor}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {moreCompact:function(){}}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {moreCompact:()=>{}}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {moreCompact:[]}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {moreCompact:[1,2,3]}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {moreCompact:[[]]}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {moreCompact:[[1,2,3],[4,5,6]]}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {moreCompact:new Map()}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {moreCompact:new Map([['a',1],['b', 2]])}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {moreCompact:new Set()}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {moreCompact:new Set([1,2,3])}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {moreCompact:/123/}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {moreCompact:new RegExp('123')}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {moreCompact:{}}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {moreCompact:{a:1, b:2}}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {moreCompact:new Object()}); }, VerificationError);
    // boolean options.groupDivider
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {groupDivider:undefined}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {groupDivider:null}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {groupDivider:NaN}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {groupDivider:''}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {groupDivider:'sss'}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {groupDivider:new String('')}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {groupDivider:new String('sss')}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {groupDivider:123}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {groupDivider:-1}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {groupDivider:new Number(123)}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {groupDivider:new Number(-1)}); }, VerificationError);
    Assert.throwsErrorsNone(()=>{ new Bs5Table('id', [], [[]], {groupDivider:true}); }, VerificationError);
    Assert.throwsErrorsNone(()=>{ new Bs5Table('id', [], [[]], {groupDivider:false}); }, VerificationError);
    Assert.throwsErrorsNone(()=>{ new Bs5Table('id', [], [[]], {groupDivider:new Boolean(true)}); }, VerificationError);
    Assert.throwsErrorsNone(()=>{ new Bs5Table('id', [], [[]], {groupDivider:new Boolean(false)}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {groupDivider:Symbol('uid')}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {groupDivider:Symbol.for('uid')}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {groupDivider:Error}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {groupDivider:Bootstrap5Object}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {groupDivider:testBs5TableConstructor}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {groupDivider:function(){}}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {groupDivider:()=>{}}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {groupDivider:[]}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {groupDivider:[1,2,3]}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {groupDivider:[[]]}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {groupDivider:[[1,2,3],[4,5,6]]}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {groupDivider:new Map()}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {groupDivider:new Map([['a',1],['b', 2]])}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {groupDivider:new Set()}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {groupDivider:new Set([1,2,3])}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {groupDivider:/123/}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {groupDivider:new RegExp('123')}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {groupDivider:{}}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {groupDivider:{a:1, b:2}}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {groupDivider:new Object()}); }, VerificationError);
    // boolean options.alignMiddle
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {alignMiddle:undefined}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {alignMiddle:null}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {alignMiddle:NaN}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {alignMiddle:''}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {alignMiddle:'sss'}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {alignMiddle:new String('')}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {alignMiddle:new String('sss')}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {alignMiddle:123}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {alignMiddle:-1}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {alignMiddle:new Number(123)}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {alignMiddle:new Number(-1)}); }, VerificationError);
    Assert.throwsErrorsNone(()=>{ new Bs5Table('id', [], [[]], {alignMiddle:true}); }, VerificationError);
    Assert.throwsErrorsNone(()=>{ new Bs5Table('id', [], [[]], {alignMiddle:false}); }, VerificationError);
    Assert.throwsErrorsNone(()=>{ new Bs5Table('id', [], [[]], {alignMiddle:new Boolean(true)}); }, VerificationError);
    Assert.throwsErrorsNone(()=>{ new Bs5Table('id', [], [[]], {alignMiddle:new Boolean(false)}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {alignMiddle:Symbol('uid')}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {alignMiddle:Symbol.for('uid')}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {alignMiddle:Error}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {alignMiddle:Bootstrap5Object}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {alignMiddle:testBs5TableConstructor}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {alignMiddle:function(){}}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {alignMiddle:()=>{}}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {alignMiddle:[]}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {alignMiddle:[1,2,3]}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {alignMiddle:[[]]}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {alignMiddle:[[1,2,3],[4,5,6]]}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {alignMiddle:new Map()}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {alignMiddle:new Map([['a',1],['b', 2]])}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {alignMiddle:new Set()}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {alignMiddle:new Set([1,2,3])}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {alignMiddle:/123/}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {alignMiddle:new RegExp('123')}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {alignMiddle:{}}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {alignMiddle:{a:1, b:2}}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {alignMiddle:new Object()}); }, VerificationError);
    // boolean options.responsive
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {responsive:undefined}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {responsive:null}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {responsive:NaN}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {responsive:''}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {responsive:'sss'}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {responsive:new String('')}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {responsive:new String('sss')}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {responsive:123}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {responsive:-1}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {responsive:new Number(123)}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {responsive:new Number(-1)}); }, VerificationError);
    Assert.throwsErrorsNone(()=>{ new Bs5Table('id', [], [[]], {responsive:true}); }, VerificationError);
    Assert.throwsErrorsNone(()=>{ new Bs5Table('id', [], [[]], {responsive:false}); }, VerificationError);
    Assert.throwsErrorsNone(()=>{ new Bs5Table('id', [], [[]], {responsive:new Boolean(true)}); }, VerificationError);
    Assert.throwsErrorsNone(()=>{ new Bs5Table('id', [], [[]], {responsive:new Boolean(false)}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {responsive:Symbol('uid')}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {responsive:Symbol.for('uid')}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {responsive:Error}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {responsive:Bootstrap5Object}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {responsive:testBs5TableConstructor}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {responsive:function(){}}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {responsive:()=>{}}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {responsive:[]}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {responsive:[1,2,3]}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {responsive:[[]]}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {responsive:[[1,2,3],[4,5,6]]}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {responsive:new Map()}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {responsive:new Map([['a',1],['b', 2]])}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {responsive:new Set()}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {responsive:new Set([1,2,3])}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {responsive:/123/}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {responsive:new RegExp('123')}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {responsive:{}}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {responsive:{a:1, b:2}}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {responsive:new Object()}); }, VerificationError);
    // string options.responsiveSize
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {responsiveSize:undefined}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {responsiveSize:null}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {responsiveSize:NaN}); }, VerificationError);
    Assert.throwsErrorsNone(()=>{ new Bs5Table('id', [], [[]], {responsiveSize:''}); }, VerificationError);
    Assert.throwsErrorsNone(()=>{ new Bs5Table('id', [], [[]], {responsiveSize:'sss'}); }, VerificationError);
    Assert.throwsErrorsNone(()=>{ new Bs5Table('id', [], [[]], {responsiveSize:new String('')}); }, VerificationError);
    Assert.throwsErrorsNone(()=>{ new Bs5Table('id', [], [[]], {responsiveSize:new String('sss')}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {responsiveSize:123}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {responsiveSize:-1}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {responsiveSize:new Number(123)}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {responsiveSize:new Number(-1)}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {responsiveSize:true}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {responsiveSize:false}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {responsiveSize:new Boolean(true)}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {responsiveSize:new Boolean(false)}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {responsiveSize:Symbol('uid')}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {responsiveSize:Symbol.for('uid')}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {responsiveSize:Error}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {responsiveSize:Bootstrap5Object}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {responsiveSize:testBs5TableConstructor}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {responsiveSize:function(){}}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {responsiveSize:()=>{}}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {responsiveSize:[]}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {responsiveSize:[1,2,3]}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {responsiveSize:[[]]}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {responsiveSize:[[1,2,3],[4,5,6]]}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {responsiveSize:new Map()}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {responsiveSize:new Map([['a',1],['b', 2]])}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {responsiveSize:new Set()}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {responsiveSize:new Set([1,2,3])}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {responsiveSize:/123/}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {responsiveSize:new RegExp('123')}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {responsiveSize:{}}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {responsiveSize:{a:1, b:2}}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5Table('id', [], [[]], {responsiveSize:new Object()}); }, VerificationError);
}

function testBs5TableGetHeaderString(){

    let t1 = new Bs5Table('myTable1');

    // 首先是 参数验证。
    Assert.throwsErrorsNone(()=>{ t1.getHeaderString(undefined); }, VerificationError);
    Assert.throwsErrors(()=>{ t1.getHeaderString(null); }, VerificationError);
    Assert.throwsErrors(()=>{ t1.getHeaderString(NaN); }, VerificationError);
    Assert.throwsErrors(()=>{ t1.getHeaderString(''); }, VerificationError);
    Assert.throwsErrors(()=>{ t1.getHeaderString('sss'); }, VerificationError);
    Assert.throwsErrors(()=>{ t1.getHeaderString(new String('')); }, VerificationError);
    Assert.throwsErrors(()=>{ t1.getHeaderString(new String('sss')); }, VerificationError);
    Assert.throwsErrors(()=>{ t1.getHeaderString(123); }, VerificationError);
    Assert.throwsErrors(()=>{ t1.getHeaderString(-1); }, VerificationError);
    Assert.throwsErrors(()=>{ t1.getHeaderString(new Number(123)); }, VerificationError);
    Assert.throwsErrors(()=>{ t1.getHeaderString(new Number(-1)); }, VerificationError);
    Assert.throwsErrors(()=>{ t1.getHeaderString(true); }, VerificationError);
    Assert.throwsErrors(()=>{ t1.getHeaderString(false); }, VerificationError);
    Assert.throwsErrors(()=>{ t1.getHeaderString(new Boolean(true)); }, VerificationError);
    Assert.throwsErrors(()=>{ t1.getHeaderString(new Boolean(false)); }, VerificationError);
    Assert.throwsErrors(()=>{ t1.getHeaderString(Symbol('uid')); }, VerificationError);
    Assert.throwsErrors(()=>{ t1.getHeaderString(Symbol.for('uid')); }, VerificationError);
    Assert.throwsErrors(()=>{ t1.getHeaderString(Error); }, VerificationError);
    Assert.throwsErrors(()=>{ t1.getHeaderString(Bootstrap5Object); }, VerificationError);
    Assert.throwsErrors(()=>{ t1.getHeaderString(testBs5TableGetHeaderString); }, VerificationError);
    Assert.throwsErrors(()=>{ t1.getHeaderString(function(){}); }, VerificationError);
    Assert.throwsErrors(()=>{ t1.getHeaderString(()=>{}); }, VerificationError);
    Assert.throwsErrorsNone(()=>{ t1.getHeaderString([]); }, VerificationError); // 空一维数组，可以
    Assert.throwsErrors(()=>{ t1.getHeaderString([1,2,3]); }, VerificationError); // 如果有内容，必须是字符串，不能为其它
    Assert.throwsErrors(()=>{ t1.getHeaderString([[]]); }, VerificationError);
    Assert.throwsErrors(()=>{ t1.getHeaderString([[1,2,3],[4,5,6]]); }, VerificationError);
    Assert.throwsErrors(()=>{ t1.getHeaderString(new Map()); }, VerificationError);
    Assert.throwsErrors(()=>{ t1.getHeaderString(new Map([['a',1],['b', 2]])); }, VerificationError);
    Assert.throwsErrors(()=>{ t1.getHeaderString(new Set()); }, VerificationError);
    Assert.throwsErrors(()=>{ t1.getHeaderString(new Set([1,2,3])); }, VerificationError);
    Assert.throwsErrors(()=>{ t1.getHeaderString(/123/); }, VerificationError);
    Assert.throwsErrors(()=>{ t1.getHeaderString(new RegExp('123')); }, VerificationError);
    Assert.throwsErrors(()=>{ t1.getHeaderString({}); }, VerificationError);
    Assert.throwsErrors(()=>{ t1.getHeaderString({a:1, b:2}); }, VerificationError);
    Assert.throwsErrors(()=>{ t1.getHeaderString(new Object()); }, VerificationError);

    // 然后是参数内容 测试
    Assert.throwsErrorsNone(()=>{ t1.getHeaderString(['','']); }, VerificationError); // 一维字符串数组，可以
    Assert.throwsErrorsNone(()=>{ t1.getHeaderString(['1','2']); }, VerificationError); // 一维字符串数组，可以
    Assert.throwsErrorsNone(()=>{ t1.getHeaderString(['1','2', 'test_hide']); }, VerificationError); // 一维字符串数组，可以
    Assert.throwsErrorsNone(()=>{ t1.getHeaderString(['1','2', 'test_hide', new String('ttt')]); }, VerificationError); // 一维字符串数组，可以
    Assert.throwsErrors(()=>{ t1.getHeaderString(['1', '2', 3]); }, VerificationError); // 如果有内容，必须是字符串，不能为其它

    // 最后是 string 内容校验（这里测试的是 header 信息）
    let t2 = new Bs5Table('testTable2');
    // 
    Assert.equalsStrictly(
        '<thead><tr></tr></thead>', t2.getHeaderString());
    Assert.equalsStrictly(
        '<thead><tr><th>#</th><th>标题1</th><th>标题2</th></tr></thead>',
        t2.getHeaderString(['标题1', new String('标题2'), '标题3_hide']).replace(/[\n]/g, '') // 这里 标题3 有 _hide 隐藏了。
    );

}

function testBs5TableGetBodyString(){

    let t1 = new Bs5Table('myTable1');

    // 首先是 参数验证。(headerInfo 和 bodyInfo )
    Assert.throwsErrorsNone(()=>{ t1.getBodyString(undefined, [[]]); }, VerificationError);
    Assert.throwsErrors(()=>{ t1.getBodyString(null, [[]]); }, VerificationError);
    Assert.throwsErrors(()=>{ t1.getBodyString(NaN, [[]]); }, VerificationError);
    Assert.throwsErrors(()=>{ t1.getBodyString('', [[]]); }, VerificationError);
    Assert.throwsErrors(()=>{ t1.getBodyString('sss', [[]]); }, VerificationError);
    Assert.throwsErrors(()=>{ t1.getBodyString(new String(''), [[]]); }, VerificationError);
    Assert.throwsErrors(()=>{ t1.getBodyString(new String('sss'), [[]]); }, VerificationError);
    Assert.throwsErrors(()=>{ t1.getBodyString(123, [[]]); }, VerificationError);
    Assert.throwsErrors(()=>{ t1.getBodyString(-1, [[]]); }, VerificationError);
    Assert.throwsErrors(()=>{ t1.getBodyString(new Number(123), [[]]); }, VerificationError);
    Assert.throwsErrors(()=>{ t1.getBodyString(new Number(-1), [[]]); }, VerificationError);
    Assert.throwsErrors(()=>{ t1.getBodyString(true, [[]]); }, VerificationError);
    Assert.throwsErrors(()=>{ t1.getBodyString(false, [[]]); }, VerificationError);
    Assert.throwsErrors(()=>{ t1.getBodyString(new Boolean(true), [[]]); }, VerificationError);
    Assert.throwsErrors(()=>{ t1.getBodyString(new Boolean(false), [[]]); }, VerificationError);
    Assert.throwsErrors(()=>{ t1.getBodyString(Symbol('uid'), [[]]); }, VerificationError);
    Assert.throwsErrors(()=>{ t1.getBodyString(Symbol.for('uid'), [[]]); }, VerificationError);
    Assert.throwsErrors(()=>{ t1.getBodyString(Error, [[]]); }, VerificationError);
    Assert.throwsErrors(()=>{ t1.getBodyString(Bootstrap5Object, [[]]); }, VerificationError);
    Assert.throwsErrors(()=>{ t1.getBodyString(testBs5TableGetHeaderString, [[]]); }, VerificationError);
    Assert.throwsErrors(()=>{ t1.getBodyString(function(){}, [[]]); }, VerificationError);
    Assert.throwsErrors(()=>{ t1.getBodyString(()=>{}, [[]]); }, VerificationError);
    Assert.throwsErrorsNone(()=>{ t1.getBodyString([], [[]]); }, VerificationError); // 空一维数组，可以
    Assert.throwsErrors(()=>{ t1.getBodyString([1,2,3], [[]]); }, VerificationError); // 如果有内容，必须是字符串，不能为其它
    Assert.throwsErrors(()=>{ t1.getBodyString([[]], [[]]); }, VerificationError);
    Assert.throwsErrors(()=>{ t1.getBodyString([[1,2,3],[4,5,6]], [[]]); }, VerificationError);
    Assert.throwsErrors(()=>{ t1.getBodyString(new Map(), [[]]); }, VerificationError);
    Assert.throwsErrors(()=>{ t1.getBodyString(new Map([['a',1],['b', 2]]), [[]]); }, VerificationError);
    Assert.throwsErrors(()=>{ t1.getBodyString(new Set(), [[]]); }, VerificationError);
    Assert.throwsErrors(()=>{ t1.getBodyString(new Set([1,2,3]), [[]]); }, VerificationError);
    Assert.throwsErrors(()=>{ t1.getBodyString(/123/, [[]]); }, VerificationError);
    Assert.throwsErrors(()=>{ t1.getBodyString(new RegExp('123'), [[]]); }, VerificationError);
    Assert.throwsErrors(()=>{ t1.getBodyString({}, [[]]); }, VerificationError);
    Assert.throwsErrors(()=>{ t1.getBodyString({a:1, b:2}, [[]]); }, VerificationError);
    Assert.throwsErrors(()=>{ t1.getBodyString(new Object(), [[]]); }, VerificationError);
    // 
    Assert.throwsErrorsNone(()=>{ t1.getBodyString([], undefined); }, VerificationError); // 默认值
    Assert.throwsErrors(()=>{ t1.getBodyString([], null); }, VerificationError);
    Assert.throwsErrors(()=>{ t1.getBodyString([], NaN); }, VerificationError);
    Assert.throwsErrors(()=>{ t1.getBodyString([], ''); }, VerificationError);
    Assert.throwsErrors(()=>{ t1.getBodyString([], 'sss'); }, VerificationError);
    Assert.throwsErrors(()=>{ t1.getBodyString([], new String('')); }, VerificationError);
    Assert.throwsErrors(()=>{ t1.getBodyString([], new String('sss')); }, VerificationError);
    Assert.throwsErrors(()=>{ t1.getBodyString([], 123); }, VerificationError);
    Assert.throwsErrors(()=>{ t1.getBodyString([], -1); }, VerificationError);
    Assert.throwsErrors(()=>{ t1.getBodyString([], new Number(123)); }, VerificationError);
    Assert.throwsErrors(()=>{ t1.getBodyString([], new Number(-1)); }, VerificationError);
    Assert.throwsErrors(()=>{ t1.getBodyString([], true); }, VerificationError);
    Assert.throwsErrors(()=>{ t1.getBodyString([], false); }, VerificationError);
    Assert.throwsErrors(()=>{ t1.getBodyString([], new Boolean(true)); }, VerificationError);
    Assert.throwsErrors(()=>{ t1.getBodyString([], new Boolean(false)); }, VerificationError);
    Assert.throwsErrors(()=>{ t1.getBodyString([], Symbol('uid')); }, VerificationError);
    Assert.throwsErrors(()=>{ t1.getBodyString([], Symbol.for('uid')); }, VerificationError);
    Assert.throwsErrors(()=>{ t1.getBodyString([], Error); }, VerificationError);
    Assert.throwsErrors(()=>{ t1.getBodyString([], Bootstrap5Object); }, VerificationError);
    Assert.throwsErrors(()=>{ t1.getBodyString([], testBs5TableGetHeaderString); }, VerificationError);
    Assert.throwsErrors(()=>{ t1.getBodyString([], function(){}); }, VerificationError);
    Assert.throwsErrors(()=>{ t1.getBodyString([], ()=>{}); }, VerificationError);
    Assert.throwsErrors(()=>{ t1.getBodyString([], []); }, VerificationError);
    Assert.throwsErrors(()=>{ t1.getBodyString([], [1,2,3]); }, VerificationError);
    Assert.throwsErrorsNone(()=>{ t1.getBodyString([], [[]]); }, VerificationError); // 空二维数组
    Assert.throwsErrors(()=>{ t1.getBodyString([], [[1,2,3],[4,5,6]]); }, VerificationError);
    Assert.throwsErrors(()=>{ t1.getBodyString([], new Map()); }, VerificationError);
    Assert.throwsErrors(()=>{ t1.getBodyString([], new Map([['a',1],['b', 2]])); }, VerificationError);
    Assert.throwsErrors(()=>{ t1.getBodyString([], new Set()); }, VerificationError);
    Assert.throwsErrors(()=>{ t1.getBodyString([], new Set([1,2,3])); }, VerificationError);
    Assert.throwsErrors(()=>{ t1.getBodyString([], /123/); }, VerificationError);
    Assert.throwsErrors(()=>{ t1.getBodyString([], new RegExp('123')); }, VerificationError);
    Assert.throwsErrors(()=>{ t1.getBodyString([], {}); }, VerificationError);
    Assert.throwsErrors(()=>{ t1.getBodyString([], {a:1, b:2}); }, VerificationError);
    Assert.throwsErrors(()=>{ t1.getBodyString([], new Object()); }, VerificationError);

    // 然后是参数内容 测试( header 和 body)
    Assert.throwsErrorsNone(()=>{ t1.getBodyString(['',''], [[]]); }, VerificationError); // 一维字符串数组，可以
    Assert.throwsErrorsNone(()=>{ t1.getBodyString(['1','2'], [[]]); }, VerificationError); // 一维字符串数组，可以
    Assert.throwsErrorsNone(()=>{ t1.getBodyString(['1','2', 'test_hide'], [[]]); }, VerificationError); // 一维字符串数组，可以
    Assert.throwsErrorsNone(()=>{ t1.getBodyString(['1','2', 'test_hide', new String('ttt')], [[]]); }, VerificationError); // 一维字符串数组，可以
    Assert.throwsErrors(()=>{ t1.getBodyString(['1', '2', 3], [[]]); }, VerificationError); // 如果有内容，必须是字符串，不能为其它
    // 
    Assert.throwsErrorsNone(()=>{ t1.getBodyString(['标题1', '标题2', '标题3'], [[]]); }, VerificationError); // 可以是空二维数组
    Assert.throwsErrorsNone(()=>{ t1.getBodyString(['标题1', '标题2', '标题3'], [['1', '2', '3']]); }, VerificationError); // 可以为字符串二维数组
    Assert.throwsErrorsNone(()=>{ t1.getBodyString(['标题1', '标题2', '标题3'], [['1', new String('2'), '3']]); }, VerificationError); //
    Assert.throwsErrorsNone(()=>{ t1.getBodyString(['标题1', '标题2', '标题3'], [['1', new String('2'), new Bootstrap5Object('div')]]); }, VerificationError); // 可以字符串和静态组件混用。
    Assert.throwsErrors(()=>{ t1.getBodyString(['标题1', '标题2', '标题3'], [[1, new String('2'), new Bootstrap5Object('div')]]); }, VerificationError); // 只可以为字符串 和 组件对象

    // 测试 标题 和 数据 的行长度，是否匹配（body 是可以为空的。一旦写入了值，就要判断和标题长度，是否一致）
    Assert.throwsErrorsNone(()=>{ t1.getBodyString([], [[]]); }, VerificationError);
    Assert.throwsErrors(()=>{ t1.getBodyString([], [['1', '2', '3']]); }, VerificationError); 
    Assert.throwsErrorsNone(()=>{ t1.getBodyString(['标题1', '标题2', '标题3'], [[]]); }, VerificationError);
    Assert.throwsErrorsNone(()=>{ t1.getBodyString(['标题1', '标题2', '标题3'], [['1', '2', '3']]); }, VerificationError);
    Assert.throwsErrors(()=>{ t1.getBodyString(
        ['标题1', '标题2', '标题3'], 
        [['1', '2', '3'], ['4']]); }, VerificationError); // 这里第2行，长度不匹配
    
    // 最后是 string 内容校验（要测试，不带隐藏处理 和 带隐藏处理）
    // 对于数据部分，组件会自动增加一个列，用于标记行号。<td><strong>1</strong></td>
    let t3 = new Bs5Table('testTable3');
    // 
    Assert.equalsStrictly('<tbody><tr></tr></tbody>', t3.getBodyString([], [[]]));
    Assert.equalsStrictly('<tbody><tr></tr></tbody>', t3.getBodyString(['标题1','标题2','标题3'], [[]]));
    Assert.equalsStrictly(
        '<tbody><tr><td><strong>1</strong></td><td>1</td><td>2</td><td>3</td></tr></tbody>', 
        t3.getBodyString(['标题1','标题2','标题3'], [['1','2','3']]).replace(/[\n]/g, ''));
    Assert.equalsStrictly(
        '<tbody><tr 标题3="3"><td><strong>1</strong></td><td>1</td><td>2</td></tr></tbody>',
        t3.getBodyString(['标题1','标题2','标题3_hide'], [['1','2','3']]).replace(/[\n]/g, '')); // 隐藏的列，写到 tr 上去
}

function testBs5TableToHtmlString(){

    // 这里测试的是，最终的 table 输出效果

    // 首先是无二级配置
    let tab1 = new Bs5Table('testTab1');
    let tab2 = new Bs5Table('testTab2', []);
    let tab3 = new Bs5Table('testTab3', ['标题1', '标题2']);
    let tab4 = new Bs5Table('testTab4', ['标题1', '标题2', 'myattr_hide'], [[]]);
    let tab5 = new Bs5Table('testTab5', ['标题1', '标题2', 'myattr_hide'], [['1','2','3']]);
    // 
    Assert.equalsStrictly(
        '<table id="testTab1" class="table"><thead><tr></tr></thead><tbody><tr></tr></tbody></table>', 
        tab1.toHtmlString().replace(/[\n]/g, ''));
    Assert.equalsStrictly(
        '<table id="testTab2" class="table"><thead><tr></tr></thead><tbody><tr></tr></tbody></table>', 
        tab2.toHtmlString().replace(/[\n]/g, ''));
    Assert.equalsStrictly(
        '<table id="testTab3" class="table"><thead><tr><th>#</th><th>标题1</th><th>标题2</th></tr></thead><tbody><tr></tr></tbody></table>', 
        tab3.toHtmlString().replace(/[\n]/g, ''));
    Assert.equalsStrictly(
        '<table id="testTab4" class="table"><thead><tr><th>#</th><th>标题1</th><th>标题2</th></tr></thead><tbody><tr></tr></tbody></table>', 
        tab4.toHtmlString().replace(/[\n]/g, ''));
    Assert.equalsStrictly(
        '<table id="testTab5" class="table">'
        +'<thead><tr><th>#</th><th>标题1</th><th>标题2</th></tr></thead>'
        +'<tbody><tr myattr="3">'
        +'<td><strong>1</strong></td><td>1</td><td>2</td>'
        +'</tr></tbody>' 
        +'</table>', 
        tab5.toHtmlString().replace(/[\n]/g, ''));
    
    // 然后是有二级配置（borderLess 和 bordered、borderColor、groupDivider 互斥）
    // 然后 responsive 会在 table 标签外部，增加一层 div 。
    // {boolean} [options.rowStriped] 行数据是否以条纹样式显示。默认为 false ；
    let myDom = DOM_PARSER.parseFromString(new Bs5Table('myTab', ['标题1', '标题2'], [['内容1', '内容2']], {rowStriped:false}).toHtmlString(), 'text/html');
    Assert.equalsStrictly(false, myDom.getElementById('myTab').classList.contains('table-striped'));
    myDom = DOM_PARSER.parseFromString(new Bs5Table('myTab', ['标题1', '标题2'], [['内容1', '内容2']], {rowStriped:true}).toHtmlString(), 'text/html');
    Assert.equalsStrictly(true, myDom.getElementById('myTab').classList.contains('table-striped'));
    // {boolean} [options.colStriped] 列数据是否以条纹样式显示。默认为 false ；
    myDom = DOM_PARSER.parseFromString(new Bs5Table('myTab', ['标题1', '标题2'], [['内容1', '内容2']], {colStriped:false}).toHtmlString(), 'text/html');
    Assert.equalsStrictly(false, myDom.getElementById('myTab').classList.contains('table-striped-columns'));
    myDom = DOM_PARSER.parseFromString(new Bs5Table('myTab', ['标题1', '标题2'], [['内容1', '内容2']], {colStriped:true}).toHtmlString(), 'text/html');
    Assert.equalsStrictly(true, myDom.getElementById('myTab').classList.contains('table-striped-columns'));
    // {boolean} [options.hover] 表格在悬停时，是否高亮显示。默认为 false ；
    myDom = DOM_PARSER.parseFromString(new Bs5Table('myTab', ['标题1', '标题2'], [['内容1', '内容2']], {hover:false}).toHtmlString(), 'text/html');
    Assert.equalsStrictly(false, myDom.getElementById('myTab').classList.contains('table-hover'));
    myDom = DOM_PARSER.parseFromString(new Bs5Table('myTab', ['标题1', '标题2'], [['内容1', '内容2']], {hover:true}).toHtmlString(), 'text/html');
    Assert.equalsStrictly(true, myDom.getElementById('myTab').classList.contains('table-hover'));
    // {boolean} [options.bordered] 表格是否显示边框。默认为 false；
    myDom = DOM_PARSER.parseFromString(new Bs5Table('myTab', ['标题1', '标题2'], [['内容1', '内容2']], {bordered:false}).toHtmlString(), 'text/html');
    Assert.equalsStrictly(false, myDom.getElementById('myTab').classList.contains('table-bordered'));
    myDom = DOM_PARSER.parseFromString(new Bs5Table('myTab', ['标题1', '标题2'], [['内容1', '内容2']], {bordered:true}).toHtmlString(), 'text/html');
    Assert.equalsStrictly(true, myDom.getElementById('myTab').classList.contains('table-bordered'));
    // {string} [options.borderColor] 表格如果显示边框，则颜色可调整（参考 BTN_COR）。默认 为空字符串 ；
    myDom = DOM_PARSER.parseFromString(new Bs5Table('myTab', ['标题1', '标题2'], [['内容1', '内容2']], {borderColor:''}).toHtmlString(), 'text/html');
    Assert.equalsStrictly(false, myDom.getElementById('myTab').classList.contains('border-'));
    myDom = DOM_PARSER.parseFromString(new Bs5Table('myTab', ['标题1', '标题2'], [['内容1', '内容2']], {borderColor:'sss'}).toHtmlString(), 'text/html');
    Assert.equalsStrictly(true, myDom.getElementById('myTab').classList.contains('border-sss'));
    // {boolean} [options.groupDivider] 是否在 header 和 body 之间显示一条分割线 。默认为 false ；(分割线，在 tbody 上)
    myDom = DOM_PARSER.parseFromString(new Bs5Table('myTab', ['标题1', '标题2'], [['内容1', '内容2']], {groupDivider:false}).toHtmlString(), 'text/html');
    Assert.equalsStrictly(false, myDom.querySelector('#myTab tbody').classList.contains('table-group-divider'));
    myDom = DOM_PARSER.parseFromString(new Bs5Table('myTab', ['标题1', '标题2'], [['内容1', '内容2']], {groupDivider:true}).toHtmlString(), 'text/html');
    Assert.equalsStrictly(true, myDom.querySelector('#myTab tbody').classList.contains('table-group-divider'));
    // {boolean} [options.borderLess] 是否完全没有边框（一般情况，行与行之间有分隔线。如果为true 则分割线都没有）。默认为 false ；
    myDom = DOM_PARSER.parseFromString(new Bs5Table('myTab', ['标题1', '标题2'], [['内容1', '内容2']], {borderLess:false}).toHtmlString(), 'text/html');
    Assert.equalsStrictly(false, myDom.getElementById('myTab').classList.contains('table-borderless'));
    myDom = DOM_PARSER.parseFromString(new Bs5Table('myTab', ['标题1', '标题2'], [['内容1', '内容2']], {borderLess:true}).toHtmlString(), 'text/html');
    Assert.equalsStrictly(true, myDom.getElementById('myTab').classList.contains('table-borderless'));
    // 因为有互斥处理，所以 borderLess 再测试下。
    myDom = DOM_PARSER.parseFromString(
        new Bs5Table('myTab', ['标题1', '标题2'], [['内容1', '内容2']], {borderLess:false, bordered:true, borderColor:'sss', groupDivider:true}).toHtmlString(), 'text/html');
    Assert.equalsStrictly(true, myDom.getElementById('myTab').classList.contains('table-bordered'));
    Assert.equalsStrictly(true, myDom.getElementById('myTab').classList.contains('border-sss'));
    Assert.equalsStrictly(true, myDom.querySelector('#myTab tbody').classList.contains('table-group-divider'));
    myDom = DOM_PARSER.parseFromString(
        new Bs5Table('myTab', ['标题1', '标题2'], [['内容1', '内容2']], {borderLess:true, bordered:true, borderColor:'sss', groupDivider:true}).toHtmlString(), 'text/html');
    Assert.equalsStrictly(false, myDom.getElementById('myTab').classList.contains('table-bordered'));
    Assert.equalsStrictly(false, myDom.getElementById('myTab').classList.contains('border-sss'));
    Assert.equalsStrictly(false, myDom.querySelector('#myTab tbody').classList.contains('table-group-divider'));
    // {boolean} [options.moreCompact] 是否更加让表格显示时更加紧凑。默认为 false ；
    myDom = DOM_PARSER.parseFromString(new Bs5Table('myTab', ['标题1', '标题2'], [['内容1', '内容2']], {moreCompact:false}).toHtmlString(), 'text/html');
    Assert.equalsStrictly(false, myDom.getElementById('myTab').classList.contains('table-sm'));
    myDom = DOM_PARSER.parseFromString(new Bs5Table('myTab', ['标题1', '标题2'], [['内容1', '内容2']], {moreCompact:true}).toHtmlString(), 'text/html');
    Assert.equalsStrictly(true, myDom.getElementById('myTab').classList.contains('table-sm'));
    // {boolean} [options.alignMiddle] 是否让表格内容垂直居中。 默认为 false ；
    myDom = DOM_PARSER.parseFromString(new Bs5Table('myTab', ['标题1', '标题2'], [['内容1', '内容2']], {alignMiddle:false}).toHtmlString(), 'text/html');
    Assert.equalsStrictly(false, myDom.getElementById('myTab').classList.contains('align-middle'));
    myDom = DOM_PARSER.parseFromString(new Bs5Table('myTab', ['标题1', '标题2'], [['内容1', '内容2']], {alignMiddle:true}).toHtmlString(), 'text/html');
    Assert.equalsStrictly(true, myDom.getElementById('myTab').classList.contains('align-middle'));
    // {boolean} [options.responsive] 是否让表格水平自适应滚动。默认为 false ；
    myDom = DOM_PARSER.parseFromString(new Bs5Table('myTab', ['标题1', '标题2'], [['内容1', '内容2']], {responsive:false}).toHtmlString(), 'text/html');
    Assert.equalsStrictly(false, myDom.getElementById('myTab').parentElement.classList.contains('table-responsive'));
    myDom = DOM_PARSER.parseFromString(new Bs5Table('myTab', ['标题1', '标题2'], [['内容1', '内容2']], {responsive:true}).toHtmlString(), 'text/html');
    Assert.equalsStrictly(true, myDom.getElementById('myTab').parentElement.classList.contains('table-responsive'));
    // {string} [options.responsiveSize] 这是自适应滚动的响应大小(参考 sm,md,lg,xl,xxl)。大于这个值，将不会自适应滚动。默认为 空 字符串 ；
    myDom = DOM_PARSER.parseFromString(new Bs5Table('myTab', ['标题1', '标题2'], [['内容1', '内容2']], {responsive:false, responsiveSize:'sm'}).toHtmlString(), 'text/html');
    Assert.equalsStrictly(false, myDom.getElementById('myTab').parentElement.classList.contains('table-responsive-sm')); // 因为是 false ，所以不会产生 div，也就没有 size 信息了。
    Assert.equalsStrictly(false, myDom.getElementById('myTab').parentElement.classList.contains('table-responsive'));
    myDom = DOM_PARSER.parseFromString(new Bs5Table('myTab', ['标题1', '标题2'], [['内容1', '内容2']], {responsive:true, responsiveSize:'sm'}).toHtmlString(), 'text/html');
    Assert.equalsStrictly(true, myDom.getElementById('myTab').parentElement.classList.contains('table-responsive-sm'));
    
    // 整体测试（这里将写入一个table 到 #result 里面）
    // 前提，需要引入 bootstrap 5 的样式 css 文件。
    let finalTable = new Bs5Table(
        'myStaticTabTestFinal', 
        ['标题1', '标题2', '标题3', '标题4', '标题5', '标题6', '标题7', '标题8', '标题9', '标题10', 'myattr_hide'],
        [
            ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'test1'],
            ['11', '12', '13', '14', '15', '16', '17', '18', '19', '20', 'test2'],
            ['21', '22', '23', '24', '25', '26', '27', '28', '29', '30', 'test3'],
            ['31', '32', '33', '34', '35', '36', '37', '38', '39', '40', 'test4'],
            ['41', '42', '43', '44', '45', '46', '47', '48', '49', '50', 'test5']
        ], 
        {rowStriped:true, hover:true, groupDivider:true, alignMiddle:true, responsive:true}
    );
    // 把这个 table 加入到 result div 中。
    document.querySelector('#result').append(...finalTable.toHtmlDomObject());
}

// ============ 导出测试函数
export {
    testBs5TableConstructor, testBs5TableGetHeaderString, testBs5TableGetBodyString, testBs5TableToHtmlString
}