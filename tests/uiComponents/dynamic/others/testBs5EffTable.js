/**
 * In my license, all codes can be shared free of charge. 
 * However, If my code is taken for commercial use, please maintain it yourself. 
 * I am not obligated to take responsibility for your business application.
 * Here is my email "pangdongcan@live.com"
 * 
 * Copyright © 2026 Micheal Pang. All rights reserved.
 * 
 * @file This file "testBs5EffTable.js" is part of project "pdc-js-framework" , which is belong to Michael Pang (It's Me).
 * @author  Micheal Pang (Dongcan Pang)
 * @since  2026-08-12
 * @description 这里是 UI Components 动态组件的 others/Bs5EffTable 模块测试
 */
"use strict"; // 这是严格模式下的 Javascript 代码

// ========== 导入测试工具
import { Assert } from "../../../testTools.js";
import { VerificationError, ParameterError } from "../../../../models/errors.js";

// ========== 导入测试对象
import { Bs5EffTable } from "../../../../uiComponents/dynamic/others/Bs5EffTable.js";
import { Bs5EffBaseComponent } from "../../../../uiComponents/dynamic/base/Bs5EffBaseComponent.js";
import { DOM_PARSER } from "../../../../utils/html.js";

// ========== 开始测试
function testBs5EffTableConstructor(){

    // 这里是 构造函数测试 。主要是测试 构造函数的各个参数是否正常使用 (因为构造函数跟 Bs5Table 一样，所以可以参考 测试方式)

    // id 
    Assert.throwsErrorsNone(()=>{ new Bs5EffTable(undefined, [], [[]], {}); }, VerificationError); // undefined 默认值
    Assert.throwsErrors(()=>{ new Bs5EffTable(null, [], [[]], {}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable(NaN, [], [[]], {}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('', [], [[]], {}); }, VerificationError);
    Assert.throwsErrorsNone(()=>{ new Bs5EffTable('sss', [], [[]], {}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable(new String(''), [], [[]], {}); }, VerificationError);
    Assert.throwsErrorsNone(()=>{ new Bs5EffTable(new String('sss'), [], [[]], {}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable(123, [], [[]], {}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable(-1, [], [[]], {}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable(new Number(123), [], [[]], {}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable(new Number(-1), [], [[]], {}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable(true, [], [[]], {}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable(false, [], [[]], {}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable(new Boolean(true), [], [[]], {}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable(new Boolean(false), [], [[]], {}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable(Symbol('uid'), [], [[]], {}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable(Symbol.for('uid'), [], [[]], {}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable(Error, [], [[]], {}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable(ParameterError, [], [[]], {}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable(testBs5EffTableConstructor, [], [[]], {}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable(function(){}, [], [[]], {}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable(()=>{}, [], [[]], {}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable([], [], [[]], {}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable([1,2,3], [], [[]], {}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable([[]], [], [[]], {}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable([[1,2,3],[4,5,6]], [], [[]], {}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable(new Map(), [], [[]], {}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable(new Map([['a',1],['b', 2]]), [], [[]], {}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable(new Set(), [], [[]], {}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable(new Set([1,2,3]), [], [[]], {}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable(/123/, [], [[]], {}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable(new RegExp('123'), [], [[]], {}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable({}, [], [[]], {}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable({a:1, b:2}, [], [[]], {}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable(new Object(), [], [[]], {}); }, VerificationError);

    // header
    Assert.throwsErrorsNone(()=>{ new Bs5EffTable('id', undefined, [[]], {}); }, VerificationError); // undefined 默认值
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', null, [[]], {}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', NaN, [[]], {}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', '', [[]], {}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', 'sss', [[]], {}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', new String(''), [[]], {}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', new String('sss'), [[]], {}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', 123, [[]], {}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', -1, [[]], {}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', new Number(123), [[]], {}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', new Number(-1), [[]], {}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', true, [[]], {}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', false, [[]], {}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', new Boolean(true), [[]], {}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', new Boolean(false), [[]], {}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', Symbol('uid'), [[]], {}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', Symbol.for('uid'), [[]], {}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', Error, [[]], {}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', ParameterError, [[]], {}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', testBs5EffTableConstructor, [[]], {}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', function(){}, [[]], {}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', ()=>{}, [[]], {}); }, VerificationError);
    Assert.throwsErrorsNone(()=>{ new Bs5EffTable('id', [], [[]], {}); }, VerificationError); // 标题、数据 都为空。
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [1,2,3], [[]], {}); }, VerificationError); // 标题只能为字符串。
    Assert.throwsErrorsNone(()=>{ new Bs5EffTable('id', ['1','2'], [[]], {}); }, VerificationError);// 有标题，但没有内容。
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [[]], [[]], {}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [[1,2,3],[4,5,6]], [[]], {}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', new Map(), [[]], {}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', new Map([['a',1],['b', 2]]), [[]], {}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', new Set(), [[]], {}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', new Set([1,2,3]), [[]], {}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', /123/, [[]], {}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', new RegExp('123'), [[]], {}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', {}, [[]], {}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', {a:1, b:2}, [[]], {}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', new Object(), [[]], {}); }, VerificationError);

    // body
    Assert.throwsErrorsNone(()=>{ new Bs5EffTable('id', ['a', 'b'], undefined, {}); }, VerificationError); // 默认值
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', ['a', 'b'], null, {}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', ['a', 'b'], NaN, {}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', ['a', 'b'], '', {}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', ['a', 'b'], 'sss', {}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', ['a', 'b'], new String(''), {}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', ['a', 'b'], new String('sss'), {}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', ['a', 'b'], 123, {}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', ['a', 'b'], -1, {}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', ['a', 'b'], new Number(123), {}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', ['a', 'b'], new Number(-1), {}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', ['a', 'b'], true, {}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', ['a', 'b'], false, {}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', ['a', 'b'], new Boolean(true), {}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', ['a', 'b'], new Boolean(false), {}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', ['a', 'b'], Symbol('uid'), {}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', ['a', 'b'], Symbol.for('uid'), {}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', ['a', 'b'], Error, {}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', ['a', 'b'], ParameterError, {}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', ['a', 'b'], testBs5EffTableConstructor, {}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', ['a', 'b'], function(){}, {}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', ['a', 'b'], ()=>{}, {}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', ['a', 'b'], [], {}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', ['a', 'b'], [1,2,3], {}); }, VerificationError);
    Assert.throwsErrorsNone(()=>{ new Bs5EffTable('id', ['a', 'b'], [[]], {}); }, VerificationError); // 数据是二维数组，可以为空。
    Assert.throwsErrorsNone(()=>{ new Bs5EffTable('id', ['a', 'b'], [['1', '2']], {}); }, VerificationError); // 数据是二维数组，字符型
    Assert.throwsErrorsNone(()=>{ new Bs5EffTable('id', ['a', 'b'], [[new Bs5EffBaseComponent(), '2']], {}); }, VerificationError); // 数据是二维数组，对象型
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', ['a', 'b'], [[new Bs5EffBaseComponent(), '2', '3']], {}); }, VerificationError); // 数据是二维数组，但超出长度
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', ['a', 'b'], [[1,2,3],[4,5,6]], {}); }, VerificationError); // 二维数组类型不对
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', ['a', 'b'], new Map(), {}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', ['a', 'b'], new Map([['a',1],['b', 2]]), {}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', ['a', 'b'], new Set(), {}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', ['a', 'b'], new Set([1,2,3]), {}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', ['a', 'b'], /123/, {}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', ['a', 'b'], new RegExp('123'), {}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', ['a', 'b'], {}, {}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', ['a', 'b'], {a:1, b:2}, {}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', ['a', 'b'], new Object(), {}); }, VerificationError);

    // options
    Assert.throwsErrorsNone(()=>{ new Bs5EffTable('id', [], [[]], undefined); }, VerificationError); // 默认值
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], null); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], NaN); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], ''); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], 'sss'); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], new String('')); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], new String('sss')); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], 123); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], -1); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], new Number(123)); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], new Number(-1)); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], true); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], false); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], new Boolean(true)); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], new Boolean(false)); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], Symbol('uid')); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], Symbol.for('uid')); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], Error); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], ParameterError); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], testBs5EffTableConstructor); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], function(){}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], ()=>{}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], []); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], [1,2,3]); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], [[]]); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], [[1,2,3],[4,5,6]]); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], new Map()); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], new Map([['a',1],['b', 2]])); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], new Set()); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], new Set([1,2,3])); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], /123/); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], new RegExp('123')); }, VerificationError);
    Assert.throwsErrorsNone(()=>{ new Bs5EffTable('id', [], [[]], {}); }, VerificationError); // options 是对象字面量。二级配置有默认值，不需要每个都设置
    Assert.throwsErrorsNone(()=>{ new Bs5EffTable('id', [], [[]], {a:1, b:2}); }, VerificationError);
    Assert.throwsErrorsNone(()=>{ new Bs5EffTable('id', [], [[]], new Object()); }, VerificationError);
    
    // options 内部的二级配置信息。二级配置是可选的，不需要每个都写，不写的有默认配置
    // 但是，如果二级配置写 undefined 不会转换为 默认值，要注意。

    // boolean options.rowStriped
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {rowStriped:undefined}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {rowStriped:null}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {rowStriped:NaN}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {rowStriped:''}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {rowStriped:'sss'}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {rowStriped:new String('')}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {rowStriped:new String('sss')}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {rowStriped:123}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {rowStriped:-1}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {rowStriped:new Number(123)}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {rowStriped:new Number(-1)}); }, VerificationError);
    Assert.throwsErrorsNone(()=>{ new Bs5EffTable('id', [], [[]], {rowStriped:true}); }, VerificationError);
    Assert.throwsErrorsNone(()=>{ new Bs5EffTable('id', [], [[]], {rowStriped:false}); }, VerificationError);
    Assert.throwsErrorsNone(()=>{ new Bs5EffTable('id', [], [[]], {rowStriped:new Boolean(true)}); }, VerificationError);
    Assert.throwsErrorsNone(()=>{ new Bs5EffTable('id', [], [[]], {rowStriped:new Boolean(false)}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {rowStriped:Symbol('uid')}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {rowStriped:Symbol.for('uid')}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {rowStriped:Error}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {rowStriped:Bs5EffBaseComponent}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {rowStriped:testBs5EffTableConstructor}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {rowStriped:function(){}}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {rowStriped:()=>{}}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {rowStriped:[]}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {rowStriped:[1,2,3]}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {rowStriped:[[]]}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {rowStriped:[[1,2,3],[4,5,6]]}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {rowStriped:new Map()}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {rowStriped:new Map([['a',1],['b', 2]])}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {rowStriped:new Set()}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {rowStriped:new Set([1,2,3])}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {rowStriped:/123/}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {rowStriped:new RegExp('123')}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {rowStriped:{}}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {rowStriped:{a:1, b:2}}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {rowStriped:new Object()}); }, VerificationError);
    // boolean options.colStriped
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {colStriped:undefined}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {colStriped:null}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {colStriped:NaN}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {colStriped:''}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {colStriped:'sss'}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {colStriped:new String('')}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {colStriped:new String('sss')}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {colStriped:123}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {colStriped:-1}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {colStriped:new Number(123)}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {colStriped:new Number(-1)}); }, VerificationError);
    Assert.throwsErrorsNone(()=>{ new Bs5EffTable('id', [], [[]], {colStriped:true}); }, VerificationError);
    Assert.throwsErrorsNone(()=>{ new Bs5EffTable('id', [], [[]], {colStriped:false}); }, VerificationError);
    Assert.throwsErrorsNone(()=>{ new Bs5EffTable('id', [], [[]], {colStriped:new Boolean(true)}); }, VerificationError);
    Assert.throwsErrorsNone(()=>{ new Bs5EffTable('id', [], [[]], {colStriped:new Boolean(false)}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {colStriped:Symbol('uid')}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {colStriped:Symbol.for('uid')}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {colStriped:Error}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {colStriped:Bs5EffBaseComponent}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {colStriped:testBs5EffTableConstructor}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {colStriped:function(){}}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {colStriped:()=>{}}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {colStriped:[]}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {colStriped:[1,2,3]}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {colStriped:[[]]}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {colStriped:[[1,2,3],[4,5,6]]}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {colStriped:new Map()}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {colStriped:new Map([['a',1],['b', 2]])}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {colStriped:new Set()}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {colStriped:new Set([1,2,3])}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {colStriped:/123/}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {colStriped:new RegExp('123')}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {colStriped:{}}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {colStriped:{a:1, b:2}}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {colStriped:new Object()}); }, VerificationError);
    // boolean options.hover
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {hover:undefined}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {hover:null}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {hover:NaN}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {hover:''}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {hover:'sss'}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {hover:new String('')}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {hover:new String('sss')}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {hover:123}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {hover:-1}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {hover:new Number(123)}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {hover:new Number(-1)}); }, VerificationError);
    Assert.throwsErrorsNone(()=>{ new Bs5EffTable('id', [], [[]], {hover:true}); }, VerificationError);
    Assert.throwsErrorsNone(()=>{ new Bs5EffTable('id', [], [[]], {hover:false}); }, VerificationError);
    Assert.throwsErrorsNone(()=>{ new Bs5EffTable('id', [], [[]], {hover:new Boolean(true)}); }, VerificationError);
    Assert.throwsErrorsNone(()=>{ new Bs5EffTable('id', [], [[]], {hover:new Boolean(false)}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {hover:Symbol('uid')}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {hover:Symbol.for('uid')}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {hover:Error}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {hover:Bs5EffBaseComponent}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {hover:testBs5EffTableConstructor}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {hover:function(){}}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {hover:()=>{}}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {hover:[]}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {hover:[1,2,3]}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {hover:[[]]}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {hover:[[1,2,3],[4,5,6]]}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {hover:new Map()}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {hover:new Map([['a',1],['b', 2]])}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {hover:new Set()}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {hover:new Set([1,2,3])}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {hover:/123/}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {hover:new RegExp('123')}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {hover:{}}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {hover:{a:1, b:2}}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {hover:new Object()}); }, VerificationError);
    // boolean options.bordered
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {bordered:undefined}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {bordered:null}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {bordered:NaN}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {bordered:''}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {bordered:'sss'}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {bordered:new String('')}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {bordered:new String('sss')}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {bordered:123}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {bordered:-1}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {bordered:new Number(123)}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {bordered:new Number(-1)}); }, VerificationError);
    Assert.throwsErrorsNone(()=>{ new Bs5EffTable('id', [], [[]], {bordered:true}); }, VerificationError);
    Assert.throwsErrorsNone(()=>{ new Bs5EffTable('id', [], [[]], {bordered:false}); }, VerificationError);
    Assert.throwsErrorsNone(()=>{ new Bs5EffTable('id', [], [[]], {bordered:new Boolean(true)}); }, VerificationError);
    Assert.throwsErrorsNone(()=>{ new Bs5EffTable('id', [], [[]], {bordered:new Boolean(false)}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {bordered:Symbol('uid')}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {bordered:Symbol.for('uid')}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {bordered:Error}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {bordered:Bs5EffBaseComponent}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {bordered:testBs5EffTableConstructor}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {bordered:function(){}}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {bordered:()=>{}}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {bordered:[]}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {bordered:[1,2,3]}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {bordered:[[]]}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {bordered:[[1,2,3],[4,5,6]]}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {bordered:new Map()}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {bordered:new Map([['a',1],['b', 2]])}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {bordered:new Set()}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {bordered:new Set([1,2,3])}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {bordered:/123/}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {bordered:new RegExp('123')}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {bordered:{}}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {bordered:{a:1, b:2}}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {bordered:new Object()}); }, VerificationError);
    // string options.borderColor
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {borderColor:undefined}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {borderColor:null}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {borderColor:NaN}); }, VerificationError);
    Assert.throwsErrorsNone(()=>{ new Bs5EffTable('id', [], [[]], {borderColor:''}); }, VerificationError);
    Assert.throwsErrorsNone(()=>{ new Bs5EffTable('id', [], [[]], {borderColor:'sss'}); }, VerificationError);
    Assert.throwsErrorsNone(()=>{ new Bs5EffTable('id', [], [[]], {borderColor:new String('')}); }, VerificationError);
    Assert.throwsErrorsNone(()=>{ new Bs5EffTable('id', [], [[]], {borderColor:new String('sss')}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {borderColor:123}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {borderColor:-1}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {borderColor:new Number(123)}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {borderColor:new Number(-1)}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {borderColor:true}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {borderColor:false}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {borderColor:new Boolean(true)}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {borderColor:new Boolean(false)}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {borderColor:Symbol('uid')}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {borderColor:Symbol.for('uid')}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {borderColor:Error}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {borderColor:Bs5EffBaseComponent}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {borderColor:testBs5EffTableConstructor}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {borderColor:function(){}}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {borderColor:()=>{}}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {borderColor:[]}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {borderColor:[1,2,3]}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {borderColor:[[]]}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {borderColor:[[1,2,3],[4,5,6]]}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {borderColor:new Map()}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {borderColor:new Map([['a',1],['b', 2]])}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {borderColor:new Set()}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {borderColor:new Set([1,2,3])}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {borderColor:/123/}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {borderColor:new RegExp('123')}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {borderColor:{}}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {borderColor:{a:1, b:2}}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {borderColor:new Object()}); }, VerificationError);
    // boolean options.borderLess
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {borderLess:undefined}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {borderLess:null}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {borderLess:NaN}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {borderLess:''}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {borderLess:'sss'}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {borderLess:new String('')}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {borderLess:new String('sss')}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {borderLess:123}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {borderLess:-1}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {borderLess:new Number(123)}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {borderLess:new Number(-1)}); }, VerificationError);
    Assert.throwsErrorsNone(()=>{ new Bs5EffTable('id', [], [[]], {borderLess:true}); }, VerificationError);
    Assert.throwsErrorsNone(()=>{ new Bs5EffTable('id', [], [[]], {borderLess:false}); }, VerificationError);
    Assert.throwsErrorsNone(()=>{ new Bs5EffTable('id', [], [[]], {borderLess:new Boolean(true)}); }, VerificationError);
    Assert.throwsErrorsNone(()=>{ new Bs5EffTable('id', [], [[]], {borderLess:new Boolean(false)}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {borderLess:Symbol('uid')}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {borderLess:Symbol.for('uid')}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {borderLess:Error}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {borderLess:Bs5EffBaseComponent}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {borderLess:testBs5EffTableConstructor}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {borderLess:function(){}}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {borderLess:()=>{}}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {borderLess:[]}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {borderLess:[1,2,3]}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {borderLess:[[]]}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {borderLess:[[1,2,3],[4,5,6]]}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {borderLess:new Map()}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {borderLess:new Map([['a',1],['b', 2]])}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {borderLess:new Set()}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {borderLess:new Set([1,2,3])}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {borderLess:/123/}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {borderLess:new RegExp('123')}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {borderLess:{}}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {borderLess:{a:1, b:2}}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {borderLess:new Object()}); }, VerificationError);
    // boolean options.moreCompact
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {moreCompact:undefined}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {moreCompact:null}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {moreCompact:NaN}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {moreCompact:''}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {moreCompact:'sss'}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {moreCompact:new String('')}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {moreCompact:new String('sss')}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {moreCompact:123}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {moreCompact:-1}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {moreCompact:new Number(123)}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {moreCompact:new Number(-1)}); }, VerificationError);
    Assert.throwsErrorsNone(()=>{ new Bs5EffTable('id', [], [[]], {moreCompact:true}); }, VerificationError);
    Assert.throwsErrorsNone(()=>{ new Bs5EffTable('id', [], [[]], {moreCompact:false}); }, VerificationError);
    Assert.throwsErrorsNone(()=>{ new Bs5EffTable('id', [], [[]], {moreCompact:new Boolean(true)}); }, VerificationError);
    Assert.throwsErrorsNone(()=>{ new Bs5EffTable('id', [], [[]], {moreCompact:new Boolean(false)}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {moreCompact:Symbol('uid')}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {moreCompact:Symbol.for('uid')}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {moreCompact:Error}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {moreCompact:Bs5EffBaseComponent}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {moreCompact:testBs5EffTableConstructor}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {moreCompact:function(){}}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {moreCompact:()=>{}}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {moreCompact:[]}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {moreCompact:[1,2,3]}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {moreCompact:[[]]}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {moreCompact:[[1,2,3],[4,5,6]]}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {moreCompact:new Map()}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {moreCompact:new Map([['a',1],['b', 2]])}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {moreCompact:new Set()}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {moreCompact:new Set([1,2,3])}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {moreCompact:/123/}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {moreCompact:new RegExp('123')}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {moreCompact:{}}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {moreCompact:{a:1, b:2}}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {moreCompact:new Object()}); }, VerificationError);
    // boolean options.groupDivider
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {groupDivider:undefined}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {groupDivider:null}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {groupDivider:NaN}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {groupDivider:''}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {groupDivider:'sss'}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {groupDivider:new String('')}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {groupDivider:new String('sss')}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {groupDivider:123}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {groupDivider:-1}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {groupDivider:new Number(123)}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {groupDivider:new Number(-1)}); }, VerificationError);
    Assert.throwsErrorsNone(()=>{ new Bs5EffTable('id', [], [[]], {groupDivider:true}); }, VerificationError);
    Assert.throwsErrorsNone(()=>{ new Bs5EffTable('id', [], [[]], {groupDivider:false}); }, VerificationError);
    Assert.throwsErrorsNone(()=>{ new Bs5EffTable('id', [], [[]], {groupDivider:new Boolean(true)}); }, VerificationError);
    Assert.throwsErrorsNone(()=>{ new Bs5EffTable('id', [], [[]], {groupDivider:new Boolean(false)}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {groupDivider:Symbol('uid')}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {groupDivider:Symbol.for('uid')}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {groupDivider:Error}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {groupDivider:Bs5EffBaseComponent}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {groupDivider:testBs5EffTableConstructor}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {groupDivider:function(){}}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {groupDivider:()=>{}}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {groupDivider:[]}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {groupDivider:[1,2,3]}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {groupDivider:[[]]}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {groupDivider:[[1,2,3],[4,5,6]]}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {groupDivider:new Map()}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {groupDivider:new Map([['a',1],['b', 2]])}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {groupDivider:new Set()}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {groupDivider:new Set([1,2,3])}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {groupDivider:/123/}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {groupDivider:new RegExp('123')}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {groupDivider:{}}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {groupDivider:{a:1, b:2}}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {groupDivider:new Object()}); }, VerificationError);
    // boolean options.alignMiddle
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {alignMiddle:undefined}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {alignMiddle:null}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {alignMiddle:NaN}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {alignMiddle:''}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {alignMiddle:'sss'}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {alignMiddle:new String('')}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {alignMiddle:new String('sss')}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {alignMiddle:123}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {alignMiddle:-1}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {alignMiddle:new Number(123)}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {alignMiddle:new Number(-1)}); }, VerificationError);
    Assert.throwsErrorsNone(()=>{ new Bs5EffTable('id', [], [[]], {alignMiddle:true}); }, VerificationError);
    Assert.throwsErrorsNone(()=>{ new Bs5EffTable('id', [], [[]], {alignMiddle:false}); }, VerificationError);
    Assert.throwsErrorsNone(()=>{ new Bs5EffTable('id', [], [[]], {alignMiddle:new Boolean(true)}); }, VerificationError);
    Assert.throwsErrorsNone(()=>{ new Bs5EffTable('id', [], [[]], {alignMiddle:new Boolean(false)}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {alignMiddle:Symbol('uid')}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {alignMiddle:Symbol.for('uid')}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {alignMiddle:Error}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {alignMiddle:Bs5EffBaseComponent}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {alignMiddle:testBs5EffTableConstructor}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {alignMiddle:function(){}}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {alignMiddle:()=>{}}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {alignMiddle:[]}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {alignMiddle:[1,2,3]}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {alignMiddle:[[]]}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {alignMiddle:[[1,2,3],[4,5,6]]}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {alignMiddle:new Map()}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {alignMiddle:new Map([['a',1],['b', 2]])}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {alignMiddle:new Set()}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {alignMiddle:new Set([1,2,3])}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {alignMiddle:/123/}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {alignMiddle:new RegExp('123')}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {alignMiddle:{}}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {alignMiddle:{a:1, b:2}}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {alignMiddle:new Object()}); }, VerificationError);
    // boolean options.responsive
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {responsive:undefined}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {responsive:null}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {responsive:NaN}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {responsive:''}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {responsive:'sss'}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {responsive:new String('')}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {responsive:new String('sss')}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {responsive:123}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {responsive:-1}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {responsive:new Number(123)}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {responsive:new Number(-1)}); }, VerificationError);
    Assert.throwsErrorsNone(()=>{ new Bs5EffTable('id', [], [[]], {responsive:true}); }, VerificationError);
    Assert.throwsErrorsNone(()=>{ new Bs5EffTable('id', [], [[]], {responsive:false}); }, VerificationError);
    Assert.throwsErrorsNone(()=>{ new Bs5EffTable('id', [], [[]], {responsive:new Boolean(true)}); }, VerificationError);
    Assert.throwsErrorsNone(()=>{ new Bs5EffTable('id', [], [[]], {responsive:new Boolean(false)}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {responsive:Symbol('uid')}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {responsive:Symbol.for('uid')}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {responsive:Error}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {responsive:Bs5EffBaseComponent}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {responsive:testBs5EffTableConstructor}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {responsive:function(){}}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {responsive:()=>{}}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {responsive:[]}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {responsive:[1,2,3]}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {responsive:[[]]}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {responsive:[[1,2,3],[4,5,6]]}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {responsive:new Map()}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {responsive:new Map([['a',1],['b', 2]])}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {responsive:new Set()}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {responsive:new Set([1,2,3])}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {responsive:/123/}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {responsive:new RegExp('123')}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {responsive:{}}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {responsive:{a:1, b:2}}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {responsive:new Object()}); }, VerificationError);
    // string options.responsiveSize
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {responsiveSize:undefined}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {responsiveSize:null}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {responsiveSize:NaN}); }, VerificationError);
    Assert.throwsErrorsNone(()=>{ new Bs5EffTable('id', [], [[]], {responsiveSize:''}); }, VerificationError);
    Assert.throwsErrorsNone(()=>{ new Bs5EffTable('id', [], [[]], {responsiveSize:'sss'}); }, VerificationError);
    Assert.throwsErrorsNone(()=>{ new Bs5EffTable('id', [], [[]], {responsiveSize:new String('')}); }, VerificationError);
    Assert.throwsErrorsNone(()=>{ new Bs5EffTable('id', [], [[]], {responsiveSize:new String('sss')}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {responsiveSize:123}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {responsiveSize:-1}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {responsiveSize:new Number(123)}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {responsiveSize:new Number(-1)}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {responsiveSize:true}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {responsiveSize:false}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {responsiveSize:new Boolean(true)}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {responsiveSize:new Boolean(false)}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {responsiveSize:Symbol('uid')}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {responsiveSize:Symbol.for('uid')}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {responsiveSize:Error}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {responsiveSize:Bs5EffBaseComponent}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {responsiveSize:testBs5EffTableConstructor}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {responsiveSize:function(){}}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {responsiveSize:()=>{}}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {responsiveSize:[]}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {responsiveSize:[1,2,3]}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {responsiveSize:[[]]}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {responsiveSize:[[1,2,3],[4,5,6]]}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {responsiveSize:new Map()}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {responsiveSize:new Map([['a',1],['b', 2]])}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {responsiveSize:new Set()}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {responsiveSize:new Set([1,2,3])}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {responsiveSize:/123/}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {responsiveSize:new RegExp('123')}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {responsiveSize:{}}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {responsiveSize:{a:1, b:2}}); }, VerificationError);
    Assert.throwsErrors(()=>{ new Bs5EffTable('id', [], [[]], {responsiveSize:new Object()}); }, VerificationError);
}

function testBs5EffTableWriteToPage(){

    // 这里是 动态组件 写入测试。这里需要写入 html 页面。
    // 为了避免干扰其它测试，我们需要先写入测试用的 div
    let testDiv = `
    <div id="testBs5EffTableWriteToPageDiv1" class="p-2 m-2" style="border:1px solid #ccc">
        <div>这里是关于 Bs5EffTable 的 writeToPage 函数测试</div>
        <div id="testBs5EffTableWriteToPageDiv1Result">
        </div>
    </div>
    `;
    let testDivElem = DOM_PARSER.parseFromString(testDiv, 'text/html').querySelector('#testBs5EffTableWriteToPageDiv1');
    document.querySelector('#result').append(testDivElem);

    // 定义一个 table 动态组件
    let tab1 = new Bs5EffTable('testBs5EffTableWriteToPageTab1', ['标题1', '标题2', 'myattr_hide'], [[]]);

    // 这里做参数测试
    Assert.throwsErrorsNone(()=>{ tab1.writeToPage(undefined); }, VerificationError); // 这里是默认值，可以写入成功。
    Assert.throwsErrors(()=>{ tab1.writeToPage(null); }, VerificationError);
    Assert.throwsErrors(()=>{ tab1.writeToPage(NaN); }, VerificationError);
    Assert.throwsErrors(()=>{ tab1.writeToPage(''); }, VerificationError);
    Assert.throwsErrors(()=>{ tab1.writeToPage('sss'); }, VerificationError);
    Assert.throwsErrors(()=>{ tab1.writeToPage(new String('')); }, VerificationError);
    Assert.throwsErrors(()=>{ tab1.writeToPage(new String('sss')); }, VerificationError);
    Assert.throwsErrors(()=>{ tab1.writeToPage(123); }, VerificationError);
    Assert.throwsErrors(()=>{ tab1.writeToPage(-1); }, VerificationError);
    Assert.throwsErrors(()=>{ tab1.writeToPage(new Number(123)); }, VerificationError);
    Assert.throwsErrors(()=>{ tab1.writeToPage(new Number(-1)); }, VerificationError);
    Assert.throwsErrors(()=>{ tab1.writeToPage(true); }, VerificationError);
    Assert.throwsErrors(()=>{ tab1.writeToPage(false); }, VerificationError);
    Assert.throwsErrors(()=>{ tab1.writeToPage(new Boolean(true)); }, VerificationError);
    Assert.throwsErrors(()=>{ tab1.writeToPage(new Boolean(false)); }, VerificationError);
    Assert.throwsErrors(()=>{ tab1.writeToPage(Symbol('uid')); }, VerificationError);
    Assert.throwsErrors(()=>{ tab1.writeToPage(Symbol.for('uid')); }, VerificationError);
    Assert.throwsErrors(()=>{ tab1.writeToPage(Error); }, VerificationError);
    Assert.throwsErrors(()=>{ tab1.writeToPage(Bs5EffBaseComponent); }, VerificationError);
    Assert.throwsErrors(()=>{ tab1.writeToPage(testBs5EffTableWriteToPage); }, VerificationError);
    Assert.throwsErrors(()=>{ tab1.writeToPage(function(){}); }, VerificationError);
    Assert.throwsErrors(()=>{ tab1.writeToPage(()=>{}); }, VerificationError);
    Assert.throwsErrors(()=>{ tab1.writeToPage([]); }, VerificationError);
    Assert.throwsErrors(()=>{ tab1.writeToPage([1,2,3]); }, VerificationError);
    Assert.throwsErrors(()=>{ tab1.writeToPage([[]]); }, VerificationError);
    Assert.throwsErrors(()=>{ tab1.writeToPage([[1,2,3],[4,5,6]]); }, VerificationError);
    Assert.throwsErrors(()=>{ tab1.writeToPage(new Map()); }, VerificationError);
    Assert.throwsErrors(()=>{ tab1.writeToPage(new Map([['a',1],['b', 2]])); }, VerificationError);
    Assert.throwsErrors(()=>{ tab1.writeToPage(new Set()); }, VerificationError);
    Assert.throwsErrors(()=>{ tab1.writeToPage(new Set([1,2,3])); }, VerificationError);
    Assert.throwsErrors(()=>{ tab1.writeToPage(/123/); }, VerificationError);
    Assert.throwsErrors(()=>{ tab1.writeToPage(new RegExp('123')); }, VerificationError);
    Assert.throwsErrors(()=>{ tab1.writeToPage({}); }, VerificationError);
    Assert.throwsErrors(()=>{ tab1.writeToPage({a:1, b:2}); }, VerificationError);
    Assert.throwsErrors(()=>{ tab1.writeToPage(new Object()); }, VerificationError);
    // 这里追加 document 和 html element 对象处理
    Assert.throwsErrors(()=>{ tab1.writeToPage(document); }, VerificationError);
    Assert.throwsErrorsNone(()=>{ tab1.writeToPage(document.body); }, VerificationError);
    Assert.throwsErrorsNone(()=>{ tab1.writeToPage(document.querySelector('#result')); }, VerificationError);
    Assert.throwsErrors(()=>{ tab1.writeToPage(document.querySelectorAll('#result')); }, VerificationError);

    // 因为有几次成功，所以要删除。
    document.querySelectorAll('#testBs5EffTableWriteToPageTab1').forEach(elem=>{
        elem.remove();
    });

    // 测试默认写入(默认是写到 document.body 里面)
    tab1.writeToPage();
    Assert.equalsStrictly(true, document.querySelectorAll('body #testBs5EffTableWriteToPageTab1').length>0);
    // 测试完，删除
    document.querySelectorAll('#testBs5EffTableWriteToPageTab1').forEach(elem=>{
        elem.remove();
    });

    // 测试写入，这里测试完不删除。
    tab1.writeToPage(document.querySelector('#testBs5EffTableWriteToPageDiv1Result'));
}

function testBs5EffTableRefreshTable(){

    // 这里是 刷新函数 测试。这个函数是用于 table 显示时，刷新数据用的。

    // 为了避免干扰其它测试，我们需要先写入测试用的 div
    let testDiv = `
    <div id="testBs5EffTableWriteToPageDiv2" class="p-2 m-2" style="border:1px solid #ccc">
        <div>这里是关于 Bs5EffTable 的 refreshTable 函数测试</div>
        <div id="testBs5EffTableWriteToPageDiv2Result">
        </div>
    </div>
    `;
    let testDivElem = DOM_PARSER.parseFromString(testDiv, 'text/html').querySelector('#testBs5EffTableWriteToPageDiv2');
    document.querySelector('#result').append(testDivElem);

    // 首先是 参数验证。
    let tab2 = new Bs5EffTable(undefined, ['标题1', '标题2', 'myattr_hide'], [[]]);
    // 
    Assert.throwsErrorsNone(()=>{ tab2.refreshTable(undefined) }, VerificationError); // 默认值
    Assert.throwsErrors(()=>{ tab2.refreshTable(null) }, VerificationError);
    Assert.throwsErrors(()=>{ tab2.refreshTable(NaN) }, VerificationError);
    Assert.throwsErrors(()=>{ tab2.refreshTable('') }, VerificationError);
    Assert.throwsErrors(()=>{ tab2.refreshTable('sss') }, VerificationError);
    Assert.throwsErrors(()=>{ tab2.refreshTable(new String('')) }, VerificationError);
    Assert.throwsErrors(()=>{ tab2.refreshTable(new String('sss')) }, VerificationError);
    Assert.throwsErrors(()=>{ tab2.refreshTable(123) }, VerificationError);
    Assert.throwsErrors(()=>{ tab2.refreshTable(-1) }, VerificationError);
    Assert.throwsErrors(()=>{ tab2.refreshTable(new Number(123)) }, VerificationError);
    Assert.throwsErrors(()=>{ tab2.refreshTable(new Number(-1)) }, VerificationError);
    Assert.throwsErrors(()=>{ tab2.refreshTable(true) }, VerificationError);
    Assert.throwsErrors(()=>{ tab2.refreshTable(false) }, VerificationError);
    Assert.throwsErrors(()=>{ tab2.refreshTable(new Boolean(true)) }, VerificationError);
    Assert.throwsErrors(()=>{ tab2.refreshTable(new Boolean(false)) }, VerificationError);
    Assert.throwsErrors(()=>{ tab2.refreshTable(Symbol('uid')) }, VerificationError);
    Assert.throwsErrors(()=>{ tab2.refreshTable(Symbol.for('uid')) }, VerificationError);
    Assert.throwsErrors(()=>{ tab2.refreshTable(Error) }, VerificationError);
    Assert.throwsErrors(()=>{ tab2.refreshTable(Bs5EffBaseComponent) }, VerificationError);
    Assert.throwsErrors(()=>{ tab2.refreshTable(testBs5EffTableRefreshTable) }, VerificationError);
    Assert.throwsErrors(()=>{ tab2.refreshTable(function(){}) }, VerificationError);
    Assert.throwsErrors(()=>{ tab2.refreshTable(()=>{}) }, VerificationError);
    Assert.throwsErrors(()=>{ tab2.refreshTable([]) }, VerificationError);
    Assert.throwsErrors(()=>{ tab2.refreshTable([1,2,3]) }, VerificationError);
    Assert.throwsErrorsNone(()=>{ tab2.refreshTable([[]]) }, VerificationError); // 空二维数组
    Assert.throwsErrorsNone(()=>{ tab2.refreshTable([['1']]) }, VerificationError); // 长度不对的二维数组，tab 没有写入，不校对 
    Assert.throwsErrors(()=>{ tab2.refreshTable([[1,2,3],[4,5,6]]) }, VerificationError);
    Assert.throwsErrors(()=>{ tab2.refreshTable(new Map()) }, VerificationError);
    Assert.throwsErrors(()=>{ tab2.refreshTable(new Map([['a',1],['b', 2]])) }, VerificationError);
    Assert.throwsErrors(()=>{ tab2.refreshTable(new Set()) }, VerificationError);
    Assert.throwsErrors(()=>{ tab2.refreshTable(new Set([1,2,3])) }, VerificationError);
    Assert.throwsErrors(()=>{ tab2.refreshTable(/123/) }, VerificationError);
    Assert.throwsErrors(()=>{ tab2.refreshTable(new RegExp('123')) }, VerificationError);
    Assert.throwsErrors(()=>{ tab2.refreshTable({}) }, VerificationError);
    Assert.throwsErrors(()=>{ tab2.refreshTable({a:1, b:2}) }, VerificationError);
    Assert.throwsErrors(()=>{ tab2.refreshTable(new Object()) }, VerificationError);
    // 增加 html element 测试
    Assert.throwsErrors(()=>{ tab2.refreshTable(document); }, VerificationError);
    Assert.throwsErrors(()=>{ tab2.refreshTable(document.body); }, VerificationError);
    Assert.throwsErrors(()=>{ tab2.refreshTable(document.querySelector('#result')); }, VerificationError);
    Assert.throwsErrors(()=>{ tab2.refreshTable(document.querySelectorAll('#result')); }, VerificationError);

    // 然后是 功能验证（先写入页面再测试）
    tab2.writeToPage(document.querySelector('#testBs5EffTableWriteToPageDiv2Result'));
    
    // 先测试 报错的。这里长度不对
    Assert.throwsErrors(()=>{ tab2.refreshTable([['1']]) }, VerificationError);
    Assert.throwsErrorsNone(()=>{ tab2.refreshTable(); });

    // 2秒后刷新
    let newData1 = [['内容1', '内容2', '内容3'], ['内容11','内容22','内容33']];
    let newData2 = [['替换1', '替换2', '替换3'], ['替换11','替换22','替换33']];
    // 
    setTimeout(()=>{ tab2.refreshTable(newData1) }, 1500);
    setTimeout(()=>{ tab2.refreshTable() }, 3000);
    setTimeout(()=>{ tab2.refreshTable(newData2) }, 4500);
}

function testBs5EffTableFinal(){

    // 这里是一个完整的组件功能测试。主要是把内容插入页面，并测试效果。（这里，等其它组件开发完毕，还需要继续测试，组件更新）

    // 为了避免干扰其它测试，我们需要先写入测试用的 div
    let testDiv = `
    <div id="testBs5EffTableWriteToPageDiv3" class="p-2 m-2" style="border:1px solid #ccc">
        <div>这里是关于 Bs5EffTable 的 最终测试</div>
        <div>
            <button id="testBs5EffTableWriteToPageDiv3Btn1" class="btn btn-success">刷新数据</button>
            <button id="testBs5EffTableWriteToPageDiv3Btn2" class="btn btn-secondary">隐藏表格</button>
            <button id="testBs5EffTableWriteToPageDiv3Btn3" class="btn btn-primary">显示表格</button>
        </div>
        <div id="testBs5EffTableWriteToPageDiv3Result">
        </div>
    </div>
    `;
    let testDivElem = DOM_PARSER.parseFromString(testDiv, 'text/html').querySelector('#testBs5EffTableWriteToPageDiv3');
    document.querySelector('#result').append(testDivElem);

    // 创建一个大表格
    let finalTable = new Bs5EffTable(
        undefined, 
        ['标题1', '标题2', '标题3', '标题4', 'myattr_hide'], 
        [
            ['1','2','3','4','5'],
            ['11','12','13','14','15'],
            ['21','22','23','24','25'],
            ['31','32','33','34','35']
        ], 
        {rowStriped:true, hover:true, groupDivider:true, responsive:true}
    );

    // 写入页面
    finalTable.writeToPage(document.querySelector('#testBs5EffTableWriteToPageDiv3Result'));

    // 设置按钮的刷新处理
    document.querySelector('#testBs5EffTableWriteToPageDiv3Btn1').addEventListener('click', (event)=>{
        finalTable.refreshTable([
            ['100','200','300','400','500'],
            ['110','120','130','140','150'],
            ['210','220','230','240','250'],
            ['310','320','330','340','350']
        ]);
    });
    document.querySelector('#testBs5EffTableWriteToPageDiv3Btn2').addEventListener('click', (event)=>{
        finalTable.hide();
    });
    document.querySelector('#testBs5EffTableWriteToPageDiv3Btn3').addEventListener('click', (event)=>{
        finalTable.show();
    });
}

// ========== 导出测试函数
export {
    testBs5EffTableConstructor, testBs5EffTableRefreshTable, testBs5EffTableWriteToPage, testBs5EffTableFinal
}