/**
 * In my license, all codes can be shared free of charge. 
 * However, If my code is taken for commercial use, please maintain it yourself. 
 * I am not obligated to take responsibility for your business application.
 * Here is my email "pangdongcan@live.com"
 * 
 * Copyright © 2026 Micheal Pang. All rights reserved.
 * 
 * @file This file "testOptions.js" is part of project "pdc-js-framework" , which is belong to Michael Pang (It's Me).
 * @author Micheal Pang (Dongcan Pang)
 * @since 2026-07-29
 * @description 这是关于 utils/valid/options.js 模块的测试。options.js 是 valid.js 模块的子模块
 */
"use strict"; // 这是严格模式下的 Javascript 代码

// ========= 导入测试工具
import { Assert } from "../../testTools.js";

// ========= 导入测试对象
import { VDATA_TYPE, validSingleType, validMultiTypes } from "../../../utils/valid/options.js";
import { ParameterError, VerificationError } from "../../../models/errors.js";
import { DOM_PARSER } from "../../../utils/html.js";

// ========= 测试

function testOptionsConstant(){
    // 测试常量是否准确
    Assert.equalsStrictly('NULL', VDATA_TYPE.null);
    Assert.equalsStrictly('STRING', VDATA_TYPE.string);
    Assert.equalsStrictly('NUMBER', VDATA_TYPE.number);
    Assert.equalsStrictly('BOOLEAN', VDATA_TYPE.boolean);
    Assert.equalsStrictly('SYMBOL', VDATA_TYPE.symbol);
    Assert.equalsStrictly('FUNCTION', VDATA_TYPE.func);
    Assert.equalsStrictly('CLASS', VDATA_TYPE.cls);
    Assert.equalsStrictly('ARRAY', VDATA_TYPE.array);
    Assert.equalsStrictly('2DARRAY', VDATA_TYPE.array2d);
    Assert.equalsStrictly('SET', VDATA_TYPE.set);
    Assert.equalsStrictly('MAP', VDATA_TYPE.map);
    Assert.equalsStrictly('REGEXP', VDATA_TYPE.regexp);
    Assert.equalsStrictly('OBJECTLITERAL', VDATA_TYPE.objectliteral);
    Assert.equalsStrictly('OBJECT', VDATA_TYPE.object);
    Assert.equalsStrictly('HTMLELEMENT', VDATA_TYPE.htmlElem);
    Assert.equalsStrictly('HTMLELEMENTLIST', VDATA_TYPE.htmlElemList);
    Assert.equalsStrictly('TARGETOBJ', VDATA_TYPE.targetObj);
    Assert.equalsStrictly('TARGETOBJSET', VDATA_TYPE.targetObjSet);
    Assert.equalsStrictly('TARGETOBJARRAY', VDATA_TYPE.targetObjArray);
    Assert.equalsStrictly('TARGETOBJ2DARRAY', VDATA_TYPE.targetObj2DArray);
}

function testOptionsParamErr(){
    // 这里测试 validSingleType 函数的参数异常，能否正常处理。
    // 第1个参数 inType — 数据类型字符串 （指定内容）
    Assert.throwsErrorsNone(()=>{ validSingleType('pValue', undefined, 'testing ...', false, []) }); // 默认值
    Assert.throwsErrors(()=>{ validSingleType('pValue', null, 'testing ...', false, []) }, ParameterError);
    Assert.throwsErrors(()=>{ validSingleType('pValue', NaN, 'testing ...', false, []) }, ParameterError);
    Assert.throwsErrors(()=>{ validSingleType('pValue', '', 'testing ...', false, []) }, ParameterError);
    Assert.throwsErrors(()=>{ validSingleType('pValue', 'sss', 'testing ...', false, []) }, ParameterError);
    Assert.throwsErrors(()=>{ validSingleType('pValue', new String(''), 'testing ...', false, []) }, ParameterError);
    Assert.throwsErrors(()=>{ validSingleType('pValue', new String('sss'), 'testing ...', false, []) }, ParameterError);
    Assert.throwsErrorsNone(()=>{ validSingleType('pValue', VDATA_TYPE.string, 'testing ...', false, []) });
    Assert.throwsErrors(()=>{ validSingleType('pValue', 123, 'testing ...', false, []) }, ParameterError);
    Assert.throwsErrors(()=>{ validSingleType('pValue', -1, 'testing ...', false, []) }, ParameterError);
    Assert.throwsErrors(()=>{ validSingleType('pValue', new Number(123), 'testing ...', false, []) }, ParameterError);
    Assert.throwsErrors(()=>{ validSingleType('pValue', new Number(-1), 'testing ...', false, []) }, ParameterError);
    Assert.throwsErrors(()=>{ validSingleType('pValue', true, 'testing ...', false, []) }, ParameterError);
    Assert.throwsErrors(()=>{ validSingleType('pValue', false, 'testing ...', false, []) }, ParameterError);
    Assert.throwsErrors(()=>{ validSingleType('pValue', new Boolean(true), 'testing ...', false, []) }, ParameterError);
    Assert.throwsErrors(()=>{ validSingleType('pValue', new Boolean(false), 'testing ...', false, []) }, ParameterError);
    Assert.throwsErrors(()=>{ validSingleType('pValue', Symbol('uid'), 'testing ...', false, []) }, ParameterError);
    Assert.throwsErrors(()=>{ validSingleType('pValue', Symbol.for('uid'), 'testing ...', false, []) }, ParameterError);
    Assert.throwsErrors(()=>{ validSingleType('pValue', Error, 'testing ...', false, []) }, ParameterError);
    Assert.throwsErrors(()=>{ validSingleType('pValue', ParameterError, 'testing ...', false, []) }, ParameterError);
    Assert.throwsErrors(()=>{ validSingleType('pValue', testOptionsConstant, 'testing ...', false, []) }, ParameterError);
    Assert.throwsErrors(()=>{ validSingleType('pValue', function(){}, 'testing ...', false, []) }, ParameterError);
    Assert.throwsErrors(()=>{ validSingleType('pValue', ()=>{}, 'testing ...', false, []) }, ParameterError);
    Assert.throwsErrors(()=>{ validSingleType('pValue', [], 'testing ...', false, []) }, ParameterError);
    Assert.throwsErrors(()=>{ validSingleType('pValue', [1,2,3], 'testing ...', false, []) }, ParameterError);
    Assert.throwsErrors(()=>{ validSingleType('pValue', [[]], 'testing ...', false, []) }, ParameterError);
    Assert.throwsErrors(()=>{ validSingleType('pValue', [[1,2,3],[4,5,6]], 'testing ...', false, []) }, ParameterError);
    Assert.throwsErrors(()=>{ validSingleType('pValue', new Map(), 'testing ...', false, []) }, ParameterError);
    Assert.throwsErrors(()=>{ validSingleType('pValue', new Map([['a',1],['b', 2]]), 'testing ...', false, []) }, ParameterError);
    Assert.throwsErrors(()=>{ validSingleType('pValue', new Set(), 'testing ...', false, []) }, ParameterError);
    Assert.throwsErrors(()=>{ validSingleType('pValue', new Set([1,2,3]), 'testing ...', false, []) }, ParameterError);
    Assert.throwsErrors(()=>{ validSingleType('pValue', /123/, 'testing ...', false, []) }, ParameterError);
    Assert.throwsErrors(()=>{ validSingleType('pValue', new RegExp('123'), 'testing ...', false, []) }, ParameterError);
    Assert.throwsErrors(()=>{ validSingleType('pValue', {}, 'testing ...', false, []) }, ParameterError);
    Assert.throwsErrors(()=>{ validSingleType('pValue', {a:1, b:2}, 'testing ...', false, []) }, ParameterError);
    Assert.throwsErrors(()=>{ validSingleType('pValue', new Object(), 'testing ...', false, []) }, ParameterError);
    // 第2个参数（inErrorInfo 非空字符串）
    Assert.throwsErrorsNone(()=>{ validSingleType('pValue', VDATA_TYPE.string, undefined, false, []) }); // 默认值
    Assert.throwsErrors(()=>{ validSingleType('pValue', VDATA_TYPE.string, null, false, []) }, ParameterError);
    Assert.throwsErrors(()=>{ validSingleType('pValue', VDATA_TYPE.string, NaN, false, []) }, ParameterError);
    Assert.throwsErrors(()=>{ validSingleType('pValue', VDATA_TYPE.string, '', false, []) }, ParameterError);
    Assert.throwsErrorsNone(()=>{ validSingleType('pValue', VDATA_TYPE.string, 'sss', false, []) });
    Assert.throwsErrors(()=>{ validSingleType('pValue', VDATA_TYPE.string, new String(''), false, []) }, ParameterError);
    Assert.throwsErrorsNone(()=>{ validSingleType('pValue', VDATA_TYPE.string, new String('sss'), false, []) });
    Assert.throwsErrors(()=>{ validSingleType('pValue', VDATA_TYPE.string, 123, false, []) }, ParameterError);
    Assert.throwsErrors(()=>{ validSingleType('pValue', VDATA_TYPE.string, -1, false, []) }, ParameterError);
    Assert.throwsErrors(()=>{ validSingleType('pValue', VDATA_TYPE.string, new Number(123), false, []) }, ParameterError);
    Assert.throwsErrors(()=>{ validSingleType('pValue', VDATA_TYPE.string, new Number(-1), false, []) }, ParameterError);
    Assert.throwsErrors(()=>{ validSingleType('pValue', VDATA_TYPE.string, true, false, []) }, ParameterError);
    Assert.throwsErrors(()=>{ validSingleType('pValue', VDATA_TYPE.string, false, false, []) }, ParameterError);
    Assert.throwsErrors(()=>{ validSingleType('pValue', VDATA_TYPE.string, new Boolean(true), false, []) }, ParameterError);
    Assert.throwsErrors(()=>{ validSingleType('pValue', VDATA_TYPE.string, new Boolean(false), false, []) }, ParameterError);
    Assert.throwsErrors(()=>{ validSingleType('pValue', VDATA_TYPE.string, Symbol('uid'), false, []) }, ParameterError);
    Assert.throwsErrors(()=>{ validSingleType('pValue', VDATA_TYPE.string, Symbol.for('uid'), false, []) }, ParameterError);
    Assert.throwsErrors(()=>{ validSingleType('pValue', VDATA_TYPE.string, Error, false, []) }, ParameterError);
    Assert.throwsErrors(()=>{ validSingleType('pValue', VDATA_TYPE.string, ParameterError, false, []) }, ParameterError);
    Assert.throwsErrors(()=>{ validSingleType('pValue', VDATA_TYPE.string, testOptionsConstant, false, []) }, ParameterError);
    Assert.throwsErrors(()=>{ validSingleType('pValue', VDATA_TYPE.string, function(){}, false, []) }, ParameterError);
    Assert.throwsErrors(()=>{ validSingleType('pValue', VDATA_TYPE.string, ()=>{}, false, []) }, ParameterError);
    Assert.throwsErrors(()=>{ validSingleType('pValue', VDATA_TYPE.string, [], false, []) }, ParameterError);
    Assert.throwsErrors(()=>{ validSingleType('pValue', VDATA_TYPE.string, [1,2,3], false, []) }, ParameterError);
    Assert.throwsErrors(()=>{ validSingleType('pValue', VDATA_TYPE.string, [[]], false, []) }, ParameterError);
    Assert.throwsErrors(()=>{ validSingleType('pValue', VDATA_TYPE.string, [[1,2,3],[4,5,6]], false, []) }, ParameterError);
    Assert.throwsErrors(()=>{ validSingleType('pValue', VDATA_TYPE.string, new Map(), false, []) }, ParameterError);
    Assert.throwsErrors(()=>{ validSingleType('pValue', VDATA_TYPE.string, new Map([['a',1],['b', 2]]), false, []) }, ParameterError);
    Assert.throwsErrors(()=>{ validSingleType('pValue', VDATA_TYPE.string, new Set(), false, []) }, ParameterError);
    Assert.throwsErrors(()=>{ validSingleType('pValue', VDATA_TYPE.string, new Set([1,2,3]), false, []) }, ParameterError);
    Assert.throwsErrors(()=>{ validSingleType('pValue', VDATA_TYPE.string, /123/, false, []) }, ParameterError);
    Assert.throwsErrors(()=>{ validSingleType('pValue', VDATA_TYPE.string, new RegExp('123'), false, []) }, ParameterError);
    Assert.throwsErrors(()=>{ validSingleType('pValue', VDATA_TYPE.string, {}, false, []) }, ParameterError);
    Assert.throwsErrors(()=>{ validSingleType('pValue', VDATA_TYPE.string, {a:1, b:2}, false, []) }, ParameterError);
    Assert.throwsErrors(()=>{ validSingleType('pValue', VDATA_TYPE.string, new Object(), false, []) }, ParameterError);
    // 第3个参数（布尔值）
    Assert.throwsErrorsNone(()=>{ validSingleType('pValue', VDATA_TYPE.string, 'testing ...', undefined, []) }); // 默认值
    Assert.throwsErrors(()=>{ validSingleType('pValue', VDATA_TYPE.string, 'testing ...', null, []) }, ParameterError);
    Assert.throwsErrors(()=>{ validSingleType('pValue', VDATA_TYPE.string, 'testing ...', NaN, []) }, ParameterError);
    Assert.throwsErrors(()=>{ validSingleType('pValue', VDATA_TYPE.string, 'testing ...', '', []) }, ParameterError);
    Assert.throwsErrors(()=>{ validSingleType('pValue', VDATA_TYPE.string, 'testing ...', 'sss', []) }, ParameterError);
    Assert.throwsErrors(()=>{ validSingleType('pValue', VDATA_TYPE.string, 'testing ...', new String(''), []) }, ParameterError);
    Assert.throwsErrors(()=>{ validSingleType('pValue', VDATA_TYPE.string, 'testing ...', new String('sss'), []) }, ParameterError);
    Assert.throwsErrors(()=>{ validSingleType('pValue', VDATA_TYPE.string, 'testing ...', VDATA_TYPE.string, []) }, ParameterError);
    Assert.throwsErrors(()=>{ validSingleType('pValue', VDATA_TYPE.string, 'testing ...', 123, []) }, ParameterError);
    Assert.throwsErrors(()=>{ validSingleType('pValue', VDATA_TYPE.string, 'testing ...', -1, []) }, ParameterError);
    Assert.throwsErrors(()=>{ validSingleType('pValue', VDATA_TYPE.string, 'testing ...', new Number(123), []) }, ParameterError);
    Assert.throwsErrors(()=>{ validSingleType('pValue', VDATA_TYPE.string, 'testing ...', new Number(-1), []) }, ParameterError);
    Assert.throwsErrorsNone(()=>{ validSingleType('pValue', VDATA_TYPE.string, 'testing ...', true, []) });
    Assert.throwsErrorsNone(()=>{ validSingleType('pValue', VDATA_TYPE.string, 'testing ...', false, []) });
    Assert.throwsErrorsNone(()=>{ validSingleType('pValue', VDATA_TYPE.string, 'testing ...', new Boolean(true), []) });
    Assert.throwsErrorsNone(()=>{ validSingleType('pValue', VDATA_TYPE.string, 'testing ...', new Boolean(false), []) });
    Assert.throwsErrors(()=>{ validSingleType('pValue', VDATA_TYPE.string, 'testing ...', Symbol('uid'), []) }, ParameterError);
    Assert.throwsErrors(()=>{ validSingleType('pValue', VDATA_TYPE.string, 'testing ...', Symbol.for('uid'), []) }, ParameterError);
    Assert.throwsErrors(()=>{ validSingleType('pValue', VDATA_TYPE.string, 'testing ...', Error, []) }, ParameterError);
    Assert.throwsErrors(()=>{ validSingleType('pValue', VDATA_TYPE.string, 'testing ...', ParameterError, []) }, ParameterError);
    Assert.throwsErrors(()=>{ validSingleType('pValue', VDATA_TYPE.string, 'testing ...', testOptionsConstant, []) }, ParameterError);
    Assert.throwsErrors(()=>{ validSingleType('pValue', VDATA_TYPE.string, 'testing ...', function(){}, []) }, ParameterError);
    Assert.throwsErrors(()=>{ validSingleType('pValue', VDATA_TYPE.string, 'testing ...', ()=>{}, []) }, ParameterError);
    Assert.throwsErrors(()=>{ validSingleType('pValue', VDATA_TYPE.string, 'testing ...', [], []) }, ParameterError);
    Assert.throwsErrors(()=>{ validSingleType('pValue', VDATA_TYPE.string, 'testing ...', [1,2,3], []) }, ParameterError);
    Assert.throwsErrors(()=>{ validSingleType('pValue', VDATA_TYPE.string, 'testing ...', [[]], []) }, ParameterError);
    Assert.throwsErrors(()=>{ validSingleType('pValue', VDATA_TYPE.string, 'testing ...', [[1,2,3],[4,5,6]], []) }, ParameterError);
    Assert.throwsErrors(()=>{ validSingleType('pValue', VDATA_TYPE.string, 'testing ...', new Map(), []) }, ParameterError);
    Assert.throwsErrors(()=>{ validSingleType('pValue', VDATA_TYPE.string, 'testing ...', new Map([['a',1],['b', 2]]), []) }, ParameterError);
    Assert.throwsErrors(()=>{ validSingleType('pValue', VDATA_TYPE.string, 'testing ...', new Set(), []) }, ParameterError);
    Assert.throwsErrors(()=>{ validSingleType('pValue', VDATA_TYPE.string, 'testing ...', new Set([1,2,3]), []) }, ParameterError);
    Assert.throwsErrors(()=>{ validSingleType('pValue', VDATA_TYPE.string, 'testing ...', /123/, []) }, ParameterError);
    Assert.throwsErrors(()=>{ validSingleType('pValue', VDATA_TYPE.string, 'testing ...', new RegExp('123'), []) }, ParameterError);
    Assert.throwsErrors(()=>{ validSingleType('pValue', VDATA_TYPE.string, 'testing ...', {}, []) }, ParameterError);
    Assert.throwsErrors(()=>{ validSingleType('pValue', VDATA_TYPE.string, 'testing ...', {a:1, b:2}, []) }, ParameterError);
    Assert.throwsErrors(()=>{ validSingleType('pValue', VDATA_TYPE.string, 'testing ...', new Object(), []) }, ParameterError);
    // 第4个参数（类型数组，可以空）
    Assert.throwsErrorsNone(()=>{ validSingleType('pValue', VDATA_TYPE.string, 'testing ...', false, undefined) }); // 默认值
    Assert.throwsErrors(()=>{ validSingleType('pValue', VDATA_TYPE.string, 'testing ...', false, null) }, ParameterError);
    Assert.throwsErrors(()=>{ validSingleType('pValue', VDATA_TYPE.string, 'testing ...', false, NaN) }, ParameterError);
    Assert.throwsErrors(()=>{ validSingleType('pValue', VDATA_TYPE.string, 'testing ...', false, '') }, ParameterError);
    Assert.throwsErrors(()=>{ validSingleType('pValue', VDATA_TYPE.string, 'testing ...', false, 'sss') }, ParameterError);
    Assert.throwsErrors(()=>{ validSingleType('pValue', VDATA_TYPE.string, 'testing ...', false, new String('')) }, ParameterError);
    Assert.throwsErrors(()=>{ validSingleType('pValue', VDATA_TYPE.string, 'testing ...', false, new String('sss')) }, ParameterError);
    Assert.throwsErrors(()=>{ validSingleType('pValue', VDATA_TYPE.string, 'testing ...', false, VDATA_TYPE.string) }, ParameterError);
    Assert.throwsErrors(()=>{ validSingleType('pValue', VDATA_TYPE.string, 'testing ...', false, 123) }, ParameterError);
    Assert.throwsErrors(()=>{ validSingleType('pValue', VDATA_TYPE.string, 'testing ...', false, -1) }, ParameterError);
    Assert.throwsErrors(()=>{ validSingleType('pValue', VDATA_TYPE.string, 'testing ...', false, new Number(123)) }, ParameterError);
    Assert.throwsErrors(()=>{ validSingleType('pValue', VDATA_TYPE.string, 'testing ...', false, new Number(-1)) }, ParameterError);
    Assert.throwsErrors(()=>{ validSingleType('pValue', VDATA_TYPE.string, 'testing ...', false, true) }, ParameterError);
    Assert.throwsErrors(()=>{ validSingleType('pValue', VDATA_TYPE.string, 'testing ...', false, false) }, ParameterError);
    Assert.throwsErrors(()=>{ validSingleType('pValue', VDATA_TYPE.string, 'testing ...', false, new Boolean(true)) }, ParameterError);
    Assert.throwsErrors(()=>{ validSingleType('pValue', VDATA_TYPE.string, 'testing ...', false, new Boolean(false)) }, ParameterError);
    Assert.throwsErrors(()=>{ validSingleType('pValue', VDATA_TYPE.string, 'testing ...', false, Symbol('uid')) }, ParameterError);
    Assert.throwsErrors(()=>{ validSingleType('pValue', VDATA_TYPE.string, 'testing ...', false, Symbol.for('uid')) }, ParameterError);
    Assert.throwsErrors(()=>{ validSingleType('pValue', VDATA_TYPE.string, 'testing ...', false, Error) }, ParameterError);
    Assert.throwsErrors(()=>{ validSingleType('pValue', VDATA_TYPE.string, 'testing ...', false, ParameterError) }, ParameterError);
    Assert.throwsErrors(()=>{ validSingleType('pValue', VDATA_TYPE.string, 'testing ...', false, testOptionsConstant) }, ParameterError);
    Assert.throwsErrors(()=>{ validSingleType('pValue', VDATA_TYPE.string, 'testing ...', false, function(){}) }, ParameterError);
    Assert.throwsErrors(()=>{ validSingleType('pValue', VDATA_TYPE.string, 'testing ...', false, ()=>{}) }, ParameterError);
    Assert.throwsErrorsNone(()=>{ validSingleType('pValue', VDATA_TYPE.string, 'testing ...', false, []) }); // 第4个参数，要 target 处理才判断内容
    Assert.throwsErrorsNone(()=>{ validSingleType('pValue', VDATA_TYPE.string, 'testing ...', false, [1,2,3]) });
    Assert.throwsErrorsNone(()=>{ validSingleType('pValue', VDATA_TYPE.string, 'testing ...', false, [[]]) });
    Assert.throwsErrorsNone(()=>{ validSingleType('pValue', VDATA_TYPE.string, 'testing ...', false, [[1,2,3],[4,5,6]]) });
    Assert.throwsErrors(()=>{ validSingleType('pValue', VDATA_TYPE.string, 'testing ...', false, new Map()) }, ParameterError);
    Assert.throwsErrors(()=>{ validSingleType('pValue', VDATA_TYPE.string, 'testing ...', false, new Map([['a',1],['b', 2]])) }, ParameterError);
    Assert.throwsErrors(()=>{ validSingleType('pValue', VDATA_TYPE.string, 'testing ...', false, new Set()) }, ParameterError);
    Assert.throwsErrors(()=>{ validSingleType('pValue', VDATA_TYPE.string, 'testing ...', false, new Set([1,2,3])) }, ParameterError);
    Assert.throwsErrors(()=>{ validSingleType('pValue', VDATA_TYPE.string, 'testing ...', false, /123/) }, ParameterError);
    Assert.throwsErrors(()=>{ validSingleType('pValue', VDATA_TYPE.string, 'testing ...', false, new RegExp('123')) }, ParameterError);
    Assert.throwsErrors(()=>{ validSingleType('pValue', VDATA_TYPE.string, 'testing ...', false, {}) }, ParameterError);
    Assert.throwsErrors(()=>{ validSingleType('pValue', VDATA_TYPE.string, 'testing ...', false, {a:1, b:2}) }, ParameterError);
    Assert.throwsErrors(()=>{ validSingleType('pValue', VDATA_TYPE.string, 'testing ...', false, new Object()) }, ParameterError);
    // 这里补充第4个处理。target 开头的类型，会校验 类型数组是否有值，而且值是类型。
    Assert.throwsErrors(()=>{ validSingleType('pValue', VDATA_TYPE.targetObj, '测试信息', false, []); }, ParameterError);
    Assert.throwsErrors(()=>{ validSingleType('pValue', VDATA_TYPE.targetObj, '测试信息', false, [1,2,3]); }, ParameterError);
    Assert.throwsErrors(()=>{ validSingleType('pValue', VDATA_TYPE.targetObj, '测试信息', false, [String, 123]); }, ParameterError);
    Assert.throwsErrorsNone(()=>{ validSingleType('pValue', VDATA_TYPE.targetObj, '测试信息', false, [String]); });
    Assert.throwsErrorsNone(()=>{ validSingleType('pValue', VDATA_TYPE.targetObj, '测试信息', false, [String, Number]); });
    //
    Assert.throwsErrors(()=>{ validSingleType('pValue', VDATA_TYPE.targetObjSet, '测试信息', false, []); }, ParameterError);
    Assert.throwsErrors(()=>{ validSingleType('pValue', VDATA_TYPE.targetObjSet, '测试信息', false, [1,2,3]); }, ParameterError);
    Assert.throwsErrors(()=>{ validSingleType('pValue', VDATA_TYPE.targetObjSet, '测试信息', false, [String, 123]); }, ParameterError);
    Assert.throwsErrorsNone(()=>{ validSingleType(new Set('pValue'), VDATA_TYPE.targetObjSet, '测试信息', false, [String]); });
    Assert.throwsErrorsNone(()=>{ validSingleType(new Set('pValue'), VDATA_TYPE.targetObjSet, '测试信息', false, [String, Number]); });
    //
    Assert.throwsErrors(()=>{ validSingleType('pValue', VDATA_TYPE.targetObjArray, '测试信息', false, []); }, ParameterError);
    Assert.throwsErrors(()=>{ validSingleType('pValue', VDATA_TYPE.targetObjArray, '测试信息', false, [1,2,3]); }, ParameterError);
    Assert.throwsErrors(()=>{ validSingleType('pValue', VDATA_TYPE.targetObjArray, '测试信息', false, [String, 123]); }, ParameterError);
    Assert.throwsErrorsNone(()=>{ validSingleType(['pValue'], VDATA_TYPE.targetObjArray, '测试信息', false, [String]); });
    Assert.throwsErrorsNone(()=>{ validSingleType(['pValue'], VDATA_TYPE.targetObjArray, '测试信息', false, [String, Number]); });
    //
    Assert.throwsErrors(()=>{ validSingleType('pValue', VDATA_TYPE.targetObj2DArray, '测试信息', false, []); }, ParameterError);
    Assert.throwsErrors(()=>{ validSingleType('pValue', VDATA_TYPE.targetObj2DArray, '测试信息', false, [1,2,3]); }, ParameterError);
    Assert.throwsErrors(()=>{ validSingleType('pValue', VDATA_TYPE.targetObj2DArray, '测试信息', false, [String, 123]); }, ParameterError);
    Assert.throwsErrorsNone(()=>{ validSingleType([['pValue']], VDATA_TYPE.targetObj2DArray, '测试信息', false, [String]); });
    Assert.throwsErrorsNone(()=>{ validSingleType([['pValue']], VDATA_TYPE.targetObj2DArray, '测试信息', false, [String, Number]); });

    // 这里测试一下 JavaScript 的默认处理。当你不写参数，默认会填充一个。
    validSingleType('aaa');
    validSingleType('aaa', VDATA_TYPE.string);
    validSingleType('aaa', VDATA_TYPE.string, 'error testing ...');
    validSingleType('aaa', VDATA_TYPE.string, 'error testing ...', true);
    validSingleType('aaa', VDATA_TYPE.string, 'error testing ...', true, []);
}

function testOptionsNull(){
    // 因为已经测试了 关于函数参数的 ParameterError 抛出。
    // 所以这里不测关于函数本身的参数验证了。
    Assert.throwsErrorsNone(()=>{ validSingleType(undefined, VDATA_TYPE.null, 'testing...', false, []); });
    Assert.throwsErrorsNone(()=>{ validSingleType(null, VDATA_TYPE.null, 'testing...', false, []); });
    Assert.throwsErrorsNone(()=>{ validSingleType(NaN, VDATA_TYPE.null, 'testing...', false, []); });
    Assert.throwsErrors(()=>{ validSingleType('', VDATA_TYPE.null, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType('sss', VDATA_TYPE.null, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(new String(''), VDATA_TYPE.null, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(new String('sss'), VDATA_TYPE.null, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(123, VDATA_TYPE.null, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(-1, VDATA_TYPE.null, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(new Number(123), VDATA_TYPE.null, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(new Number(-1), VDATA_TYPE.null, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(true, VDATA_TYPE.null, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(false, VDATA_TYPE.null, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(new Boolean(true), VDATA_TYPE.null, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(new Boolean(false), VDATA_TYPE.null, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(Symbol('uid'), VDATA_TYPE.null, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(Symbol.for('uid'), VDATA_TYPE.null, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(Error, VDATA_TYPE.null, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(ParameterError, VDATA_TYPE.null, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(testOptionsParamErr, VDATA_TYPE.null, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(function(){}, VDATA_TYPE.null, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(()=>{}, VDATA_TYPE.null, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType([], VDATA_TYPE.null, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType([1,2,3], VDATA_TYPE.null, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType([[]], VDATA_TYPE.null, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType([[1,2,3],[4,5,6]], VDATA_TYPE.null, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(new Map(), VDATA_TYPE.null, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(new Map([['a',1],['b', 2]]), VDATA_TYPE.null, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(new Set(), VDATA_TYPE.null, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(new Set([1,2,3]), VDATA_TYPE.null, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(/123/, VDATA_TYPE.null, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(new RegExp('123'), VDATA_TYPE.null, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType({}, VDATA_TYPE.null, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType({a:1, b:2}, VDATA_TYPE.null, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(new Object(), VDATA_TYPE.null, 'testing...', false, []); }, VerificationError);
}

function testOptionsString(){
    // 因为已经测试了 关于函数参数的 ParameterError 抛出。
    // 所以这里不测关于函数本身的参数验证了。
    Assert.throwsErrors(()=>{ validSingleType(undefined, VDATA_TYPE.string, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(null, VDATA_TYPE.string, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(NaN, VDATA_TYPE.string, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType('', VDATA_TYPE.string, 'testing...', false, []); }, VerificationError); // canbeempty 为 false， 非空字符串
    Assert.throwsErrorsNone(()=>{ validSingleType('sss', VDATA_TYPE.string, 'testing...', false, []); });
    Assert.throwsErrors(()=>{ validSingleType(new String(''), VDATA_TYPE.string, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrorsNone(()=>{ validSingleType(new String('sss'), VDATA_TYPE.string, 'testing...', false, []); });
    Assert.throwsErrors(()=>{ validSingleType(123, VDATA_TYPE.string, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(-1, VDATA_TYPE.string, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(new Number(123), VDATA_TYPE.string, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(new Number(-1), VDATA_TYPE.string, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(true, VDATA_TYPE.string, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(false, VDATA_TYPE.string, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(new Boolean(true), VDATA_TYPE.string, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(new Boolean(false), VDATA_TYPE.string, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(Symbol('uid'), VDATA_TYPE.string, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(Symbol.for('uid'), VDATA_TYPE.string, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(Error, VDATA_TYPE.string, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(ParameterError, VDATA_TYPE.string, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(testOptionsParamErr, VDATA_TYPE.string, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(function(){}, VDATA_TYPE.string, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(()=>{}, VDATA_TYPE.string, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType([], VDATA_TYPE.string, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType([1,2,3], VDATA_TYPE.string, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType([[]], VDATA_TYPE.string, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType([[1,2,3],[4,5,6]], VDATA_TYPE.string, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(new Map(), VDATA_TYPE.string, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(new Map([['a',1],['b', 2]]), VDATA_TYPE.string, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(new Set(), VDATA_TYPE.string, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(new Set([1,2,3]), VDATA_TYPE.string, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(/123/, VDATA_TYPE.string, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(new RegExp('123'), VDATA_TYPE.string, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType({}, VDATA_TYPE.string, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType({a:1, b:2}, VDATA_TYPE.string, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(new Object(), VDATA_TYPE.string, 'testing...', false, []); }, VerificationError);
    // 测试 can be empty 为 true 
    Assert.throwsErrorsNone(()=>{ validSingleType('', VDATA_TYPE.string, 'testing...', true, []); });
    Assert.throwsErrorsNone(()=>{ validSingleType('sss', VDATA_TYPE.string, 'testing...', true, []); });
    Assert.throwsErrorsNone(()=>{ validSingleType(new String(''), VDATA_TYPE.string, 'testing...', true, []); });
    Assert.throwsErrorsNone(()=>{ validSingleType(new String('sss'), VDATA_TYPE.string, 'testing...', true, []); });
}

function testOptionsNumber(){
    // 因为已经测试了 关于函数参数的 ParameterError 抛出。
    // 所以这里不测关于函数本身的参数验证了。
    Assert.throwsErrors(()=>{ validSingleType(undefined, VDATA_TYPE.number, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(null, VDATA_TYPE.number, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(NaN, VDATA_TYPE.number, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType('', VDATA_TYPE.number, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType('sss', VDATA_TYPE.number, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(new String(''), VDATA_TYPE.number, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(new String('sss'), VDATA_TYPE.number, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrorsNone(()=>{ validSingleType(123, VDATA_TYPE.number, 'testing...', false, []); });
    Assert.throwsErrorsNone(()=>{ validSingleType(-1, VDATA_TYPE.number, 'testing...', false, []); });
    Assert.throwsErrorsNone(()=>{ validSingleType(new Number(123), VDATA_TYPE.number, 'testing...', false, []); });
    Assert.throwsErrorsNone(()=>{ validSingleType(new Number(-1), VDATA_TYPE.number, 'testing...', false, []); });
    Assert.throwsErrors(()=>{ validSingleType(true, VDATA_TYPE.number, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(false, VDATA_TYPE.number, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(new Boolean(true), VDATA_TYPE.number, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(new Boolean(false), VDATA_TYPE.number, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(Symbol('uid'), VDATA_TYPE.number, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(Symbol.for('uid'), VDATA_TYPE.number, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(Error, VDATA_TYPE.number, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(ParameterError, VDATA_TYPE.number, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(testOptionsParamErr, VDATA_TYPE.number, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(function(){}, VDATA_TYPE.number, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(()=>{}, VDATA_TYPE.number, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType([], VDATA_TYPE.number, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType([1,2,3], VDATA_TYPE.number, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType([[]], VDATA_TYPE.number, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType([[1,2,3],[4,5,6]], VDATA_TYPE.number, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(new Map(), VDATA_TYPE.number, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(new Map([['a',1],['b', 2]]), VDATA_TYPE.number, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(new Set(), VDATA_TYPE.number, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(new Set([1,2,3]), VDATA_TYPE.number, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(/123/, VDATA_TYPE.number, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(new RegExp('123'), VDATA_TYPE.number, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType({}, VDATA_TYPE.number, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType({a:1, b:2}, VDATA_TYPE.number, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(new Object(), VDATA_TYPE.number, 'testing...', false, []); }, VerificationError);
}

function testOptionsBoolean(){
    // 因为已经测试了 关于函数参数的 ParameterError 抛出。
    // 所以这里不测关于函数本身的参数验证了。
    Assert.throwsErrors(()=>{ validSingleType(undefined, VDATA_TYPE.boolean, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(null, VDATA_TYPE.boolean, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(NaN, VDATA_TYPE.boolean, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType('', VDATA_TYPE.boolean, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType('sss', VDATA_TYPE.boolean, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(new String(''), VDATA_TYPE.boolean, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(new String('sss'), VDATA_TYPE.boolean, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(123, VDATA_TYPE.boolean, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(-1, VDATA_TYPE.boolean, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(new Number(123), VDATA_TYPE.boolean, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(new Number(-1), VDATA_TYPE.boolean, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrorsNone(()=>{ validSingleType(true, VDATA_TYPE.boolean, 'testing...', false, []); });
    Assert.throwsErrorsNone(()=>{ validSingleType(false, VDATA_TYPE.boolean, 'testing...', false, []); });
    Assert.throwsErrorsNone(()=>{ validSingleType(new Boolean(true), VDATA_TYPE.boolean, 'testing...', false, []); });
    Assert.throwsErrorsNone(()=>{ validSingleType(new Boolean(false), VDATA_TYPE.boolean, 'testing...', false, []); });
    Assert.throwsErrors(()=>{ validSingleType(Symbol('uid'), VDATA_TYPE.boolean, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(Symbol.for('uid'), VDATA_TYPE.boolean, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(Error, VDATA_TYPE.boolean, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(ParameterError, VDATA_TYPE.boolean, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(testOptionsParamErr, VDATA_TYPE.boolean, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(function(){}, VDATA_TYPE.boolean, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(()=>{}, VDATA_TYPE.boolean, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType([], VDATA_TYPE.boolean, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType([1,2,3], VDATA_TYPE.boolean, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType([[]], VDATA_TYPE.boolean, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType([[1,2,3],[4,5,6]], VDATA_TYPE.boolean, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(new Map(), VDATA_TYPE.boolean, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(new Map([['a',1],['b', 2]]), VDATA_TYPE.boolean, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(new Set(), VDATA_TYPE.boolean, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(new Set([1,2,3]), VDATA_TYPE.boolean, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(/123/, VDATA_TYPE.boolean, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(new RegExp('123'), VDATA_TYPE.boolean, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType({}, VDATA_TYPE.boolean, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType({a:1, b:2}, VDATA_TYPE.boolean, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(new Object(), VDATA_TYPE.boolean, 'testing...', false, []); }, VerificationError);
}

function testOptionsSymbol(){
    // 因为已经测试了 关于函数参数的 ParameterError 抛出。
    // 所以这里不测关于函数本身的参数验证了。
    Assert.throwsErrors(()=>{ validSingleType(undefined, VDATA_TYPE.symbol, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(null, VDATA_TYPE.symbol, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(NaN, VDATA_TYPE.symbol, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType('', VDATA_TYPE.symbol, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType('sss', VDATA_TYPE.symbol, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(new String(''), VDATA_TYPE.symbol, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(new String('sss'), VDATA_TYPE.symbol, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(123, VDATA_TYPE.symbol, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(-1, VDATA_TYPE.symbol, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(new Number(123), VDATA_TYPE.symbol, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(new Number(-1), VDATA_TYPE.symbol, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(true, VDATA_TYPE.symbol, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(false, VDATA_TYPE.symbol, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(new Boolean(true), VDATA_TYPE.symbol, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(new Boolean(false), VDATA_TYPE.symbol, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrorsNone(()=>{ validSingleType(Symbol('uid'), VDATA_TYPE.symbol, 'testing...', false, []); });
    Assert.throwsErrorsNone(()=>{ validSingleType(Symbol.for('uid'), VDATA_TYPE.symbol, 'testing...', false, []); });
    Assert.throwsErrors(()=>{ validSingleType(Error, VDATA_TYPE.symbol, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(ParameterError, VDATA_TYPE.symbol, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(testOptionsParamErr, VDATA_TYPE.symbol, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(function(){}, VDATA_TYPE.symbol, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(()=>{}, VDATA_TYPE.symbol, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType([], VDATA_TYPE.symbol, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType([1,2,3], VDATA_TYPE.symbol, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType([[]], VDATA_TYPE.symbol, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType([[1,2,3],[4,5,6]], VDATA_TYPE.symbol, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(new Map(), VDATA_TYPE.symbol, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(new Map([['a',1],['b', 2]]), VDATA_TYPE.symbol, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(new Set(), VDATA_TYPE.symbol, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(new Set([1,2,3]), VDATA_TYPE.symbol, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(/123/, VDATA_TYPE.symbol, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(new RegExp('123'), VDATA_TYPE.symbol, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType({}, VDATA_TYPE.symbol, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType({a:1, b:2}, VDATA_TYPE.symbol, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(new Object(), VDATA_TYPE.symbol, 'testing...', false, []); }, VerificationError);
}

function testOptionsFunc(){
    // 因为已经测试了 关于函数参数的 ParameterError 抛出。
    // 所以这里不测关于函数本身的参数验证了。
    Assert.throwsErrors(()=>{ validSingleType(undefined, VDATA_TYPE.func, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(null, VDATA_TYPE.func, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(NaN, VDATA_TYPE.func, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType('', VDATA_TYPE.func, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType('sss', VDATA_TYPE.func, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(new String(''), VDATA_TYPE.func, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(new String('sss'), VDATA_TYPE.func, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(123, VDATA_TYPE.func, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(-1, VDATA_TYPE.func, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(new Number(123), VDATA_TYPE.func, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(new Number(-1), VDATA_TYPE.func, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(true, VDATA_TYPE.func, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(false, VDATA_TYPE.func, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(new Boolean(true), VDATA_TYPE.func, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(new Boolean(false), VDATA_TYPE.func, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(Symbol('uid'), VDATA_TYPE.func, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(Symbol.for('uid'), VDATA_TYPE.func, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrorsNone(()=>{ validSingleType(Error, VDATA_TYPE.func, 'testing...', false, []); });
    Assert.throwsErrorsNone(()=>{ validSingleType(ParameterError, VDATA_TYPE.func, 'testing...', false, []); });
    Assert.throwsErrorsNone(()=>{ validSingleType(testOptionsParamErr, VDATA_TYPE.func, 'testing...', false, []); });
    Assert.throwsErrorsNone(()=>{ validSingleType(function(){}, VDATA_TYPE.func, 'testing...', false, []); });
    Assert.throwsErrorsNone(()=>{ validSingleType(()=>{}, VDATA_TYPE.func, 'testing...', false, []); });
    Assert.throwsErrors(()=>{ validSingleType([], VDATA_TYPE.func, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType([1,2,3], VDATA_TYPE.func, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType([[]], VDATA_TYPE.func, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType([[1,2,3],[4,5,6]], VDATA_TYPE.func, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(new Map(), VDATA_TYPE.func, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(new Map([['a',1],['b', 2]]), VDATA_TYPE.func, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(new Set(), VDATA_TYPE.func, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(new Set([1,2,3]), VDATA_TYPE.func, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(/123/, VDATA_TYPE.func, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(new RegExp('123'), VDATA_TYPE.func, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType({}, VDATA_TYPE.func, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType({a:1, b:2}, VDATA_TYPE.func, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(new Object(), VDATA_TYPE.func, 'testing...', false, []); }, VerificationError);
}

function testOptionsCls(){
    // 因为已经测试了 关于函数参数的 ParameterError 抛出。
    // 所以这里不测关于函数本身的参数验证了。
    Assert.throwsErrors(()=>{ validSingleType(undefined, VDATA_TYPE.cls, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(null, VDATA_TYPE.cls, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(NaN, VDATA_TYPE.cls, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType('', VDATA_TYPE.cls, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType('sss', VDATA_TYPE.cls, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(new String(''), VDATA_TYPE.cls, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(new String('sss'), VDATA_TYPE.cls, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(123, VDATA_TYPE.cls, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(-1, VDATA_TYPE.cls, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(new Number(123), VDATA_TYPE.cls, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(new Number(-1), VDATA_TYPE.cls, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(true, VDATA_TYPE.cls, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(false, VDATA_TYPE.cls, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(new Boolean(true), VDATA_TYPE.cls, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(new Boolean(false), VDATA_TYPE.cls, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(Symbol('uid'), VDATA_TYPE.cls, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(Symbol.for('uid'), VDATA_TYPE.cls, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrorsNone(()=>{ validSingleType(Error, VDATA_TYPE.cls, 'testing...', false, []); });
    Assert.throwsErrorsNone(()=>{ validSingleType(ParameterError, VDATA_TYPE.cls, 'testing...', false, []); });
    Assert.throwsErrorsNone(()=>{ validSingleType(testOptionsParamErr, VDATA_TYPE.cls, 'testing...', false, []); });
    Assert.throwsErrors(()=>{ validSingleType(function(){}, VDATA_TYPE.cls, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(()=>{}, VDATA_TYPE.cls, 'testing...', false, []); }, VerificationError); // 匿名和箭头函数，不算class
    Assert.throwsErrors(()=>{ validSingleType([], VDATA_TYPE.cls, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType([1,2,3], VDATA_TYPE.cls, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType([[]], VDATA_TYPE.cls, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType([[1,2,3],[4,5,6]], VDATA_TYPE.cls, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(new Map(), VDATA_TYPE.cls, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(new Map([['a',1],['b', 2]]), VDATA_TYPE.cls, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(new Set(), VDATA_TYPE.cls, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(new Set([1,2,3]), VDATA_TYPE.cls, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(/123/, VDATA_TYPE.cls, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(new RegExp('123'), VDATA_TYPE.cls, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType({}, VDATA_TYPE.cls, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType({a:1, b:2}, VDATA_TYPE.cls, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(new Object(), VDATA_TYPE.cls, 'testing...', false, []); }, VerificationError);
}

function testOptionsArray(){
    // 因为已经测试了 关于函数参数的 ParameterError 抛出。
    // 所以这里不测关于函数本身的参数验证了。
    Assert.throwsErrors(()=>{ validSingleType(undefined, VDATA_TYPE.array, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(null, VDATA_TYPE.array, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(NaN, VDATA_TYPE.array, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType('', VDATA_TYPE.array, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType('sss', VDATA_TYPE.array, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(new String(''), VDATA_TYPE.array, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(new String('sss'), VDATA_TYPE.array, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(123, VDATA_TYPE.array, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(-1, VDATA_TYPE.array, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(new Number(123), VDATA_TYPE.array, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(new Number(-1), VDATA_TYPE.array, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(true, VDATA_TYPE.array, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(false, VDATA_TYPE.array, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(new Boolean(true), VDATA_TYPE.array, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(new Boolean(false), VDATA_TYPE.array, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(Symbol('uid'), VDATA_TYPE.array, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(Symbol.for('uid'), VDATA_TYPE.array, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(Error, VDATA_TYPE.array, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(ParameterError, VDATA_TYPE.array, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(testOptionsParamErr, VDATA_TYPE.array, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(function(){}, VDATA_TYPE.array, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(()=>{}, VDATA_TYPE.array, 'testing...', false, []); }, VerificationError); 
    Assert.throwsErrors(()=>{ validSingleType([], VDATA_TYPE.array, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrorsNone(()=>{ validSingleType([1,2,3], VDATA_TYPE.array, 'testing...', false, []); });
    Assert.throwsErrorsNone(()=>{ validSingleType([[]], VDATA_TYPE.array, 'testing...', false, []); });
    Assert.throwsErrorsNone(()=>{ validSingleType([[1,2,3],[4,5,6]], VDATA_TYPE.array, 'testing...', false, []); });
    Assert.throwsErrors(()=>{ validSingleType(new Map(), VDATA_TYPE.array, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(new Map([['a',1],['b', 2]]), VDATA_TYPE.array, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(new Set(), VDATA_TYPE.array, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(new Set([1,2,3]), VDATA_TYPE.array, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(/123/, VDATA_TYPE.array, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(new RegExp('123'), VDATA_TYPE.array, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType({}, VDATA_TYPE.array, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType({a:1, b:2}, VDATA_TYPE.array, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(new Object(), VDATA_TYPE.array, 'testing...', false, []); }, VerificationError);
    // 对于数组，还需要校验 can be empty 为 true 的情况。
    // 这是数组为空
    Assert.throwsErrorsNone(()=>{ validSingleType([], VDATA_TYPE.array, 'testing...', true, []); });
    Assert.throwsErrors(()=>{     validSingleType([], VDATA_TYPE.array, 'testing...', false, []); }, VerificationError);
}

function testOptionsArray2d(){
    // 因为已经测试了 关于函数参数的 ParameterError 抛出。
    // 所以这里不测关于函数本身的参数验证了。
    Assert.throwsErrors(()=>{ validSingleType(undefined, VDATA_TYPE.array2d, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(null, VDATA_TYPE.array2d, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(NaN, VDATA_TYPE.array2d, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType('', VDATA_TYPE.array2d, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType('sss', VDATA_TYPE.array2d, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(new String(''), VDATA_TYPE.array2d, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(new String('sss'), VDATA_TYPE.array2d, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(123, VDATA_TYPE.array2d, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(-1, VDATA_TYPE.array2d, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(new Number(123), VDATA_TYPE.array2d, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(new Number(-1), VDATA_TYPE.array2d, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(true, VDATA_TYPE.array2d, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(false, VDATA_TYPE.array2d, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(new Boolean(true), VDATA_TYPE.array2d, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(new Boolean(false), VDATA_TYPE.array2d, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(Symbol('uid'), VDATA_TYPE.array2d, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(Symbol.for('uid'), VDATA_TYPE.array2d, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(Error, VDATA_TYPE.array2d, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(ParameterError, VDATA_TYPE.array2d, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(testOptionsParamErr, VDATA_TYPE.array2d, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(function(){}, VDATA_TYPE.array2d, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(()=>{}, VDATA_TYPE.array2d, 'testing...', false, []); }, VerificationError); 
    Assert.throwsErrors(()=>{ validSingleType([], VDATA_TYPE.array2d, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType([1,2,3], VDATA_TYPE.array2d, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType([[]], VDATA_TYPE.array2d, 'testing...', false, []); }, VerificationError); // 这里是 false，不能为空
    Assert.throwsErrorsNone(()=>{ validSingleType([[1,2,3],[4,5,6]], VDATA_TYPE.array2d, 'testing...', false, []); });
    Assert.throwsErrors(()=>{ validSingleType(new Map(), VDATA_TYPE.array2d, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(new Map([['a',1],['b', 2]]), VDATA_TYPE.array2d, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(new Set(), VDATA_TYPE.array2d, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(new Set([1,2,3]), VDATA_TYPE.array2d, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(/123/, VDATA_TYPE.array2d, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(new RegExp('123'), VDATA_TYPE.array2d, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType({}, VDATA_TYPE.array2d, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType({a:1, b:2}, VDATA_TYPE.array2d, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(new Object(), VDATA_TYPE.array2d, 'testing...', false, []); }, VerificationError);
    // 对于数组，还需要校验 can be empty 为 true 的情况。
    // 这是数组为空
    Assert.throwsErrorsNone(()=>{ validSingleType([[]], VDATA_TYPE.array2d, 'testing...', true, []); });
    Assert.throwsErrors(()=>{     validSingleType([[]], VDATA_TYPE.array2d, 'testing...', false, []); }, VerificationError);
}

function testOptionsSet(){
    // 因为已经测试了 关于函数参数的 ParameterError 抛出。
    // 所以这里不测关于函数本身的参数验证了。
    Assert.throwsErrors(()=>{ validSingleType(undefined, VDATA_TYPE.set, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(null, VDATA_TYPE.set, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(NaN, VDATA_TYPE.set, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType('', VDATA_TYPE.set, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType('sss', VDATA_TYPE.set, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(new String(''), VDATA_TYPE.set, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(new String('sss'), VDATA_TYPE.set, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(123, VDATA_TYPE.set, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(-1, VDATA_TYPE.set, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(new Number(123), VDATA_TYPE.set, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(new Number(-1), VDATA_TYPE.set, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(true, VDATA_TYPE.set, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(false, VDATA_TYPE.set, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(new Boolean(true), VDATA_TYPE.set, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(new Boolean(false), VDATA_TYPE.set, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(Symbol('uid'), VDATA_TYPE.set, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(Symbol.for('uid'), VDATA_TYPE.set, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(Error, VDATA_TYPE.set, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(ParameterError, VDATA_TYPE.set, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(testOptionsParamErr, VDATA_TYPE.set, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(function(){}, VDATA_TYPE.set, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(()=>{}, VDATA_TYPE.set, 'testing...', false, []); }, VerificationError); 
    Assert.throwsErrors(()=>{ validSingleType([], VDATA_TYPE.set, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType([1,2,3], VDATA_TYPE.set, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType([[]], VDATA_TYPE.set, 'testing...', false, []); }, VerificationError); 
    Assert.throwsErrors(()=>{ validSingleType([[1,2,3],[4,5,6]], VDATA_TYPE.set, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(new Map(), VDATA_TYPE.set, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(new Map([['a',1],['b', 2]]), VDATA_TYPE.set, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(new Set(), VDATA_TYPE.set, 'testing...', false, []); }, VerificationError); // 这里是 false，不能为空
    Assert.throwsErrorsNone(()=>{ validSingleType(new Set([1,2,3]), VDATA_TYPE.set, 'testing...', false, []); });
    Assert.throwsErrors(()=>{ validSingleType(/123/, VDATA_TYPE.set, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(new RegExp('123'), VDATA_TYPE.set, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType({}, VDATA_TYPE.set, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType({a:1, b:2}, VDATA_TYPE.set, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(new Object(), VDATA_TYPE.set, 'testing...', false, []); }, VerificationError);
    // 对于Set，还需要校验 can be empty 为 true 的情况。
    // 这是Set为空
    Assert.throwsErrorsNone(()=>{ validSingleType(new Set(), VDATA_TYPE.set, 'testing...', true, []); });
    Assert.throwsErrors(()=>{     validSingleType(new Set(), VDATA_TYPE.set, 'testing...', false, []); }, VerificationError);
}

function testOptionsMap(){
    // 因为已经测试了 关于函数参数的 ParameterError 抛出。
    // 所以这里不测关于函数本身的参数验证了。
    Assert.throwsErrors(()=>{ validSingleType(undefined, VDATA_TYPE.map, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(null, VDATA_TYPE.map, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(NaN, VDATA_TYPE.map, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType('', VDATA_TYPE.map, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType('sss', VDATA_TYPE.map, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(new String(''), VDATA_TYPE.map, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(new String('sss'), VDATA_TYPE.map, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(123, VDATA_TYPE.map, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(-1, VDATA_TYPE.map, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(new Number(123), VDATA_TYPE.map, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(new Number(-1), VDATA_TYPE.map, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(true, VDATA_TYPE.map, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(false, VDATA_TYPE.map, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(new Boolean(true), VDATA_TYPE.map, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(new Boolean(false), VDATA_TYPE.map, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(Symbol('uid'), VDATA_TYPE.map, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(Symbol.for('uid'), VDATA_TYPE.map, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(Error, VDATA_TYPE.map, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(ParameterError, VDATA_TYPE.map, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(testOptionsParamErr, VDATA_TYPE.map, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(function(){}, VDATA_TYPE.map, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(()=>{}, VDATA_TYPE.map, 'testing...', false, []); }, VerificationError); 
    Assert.throwsErrors(()=>{ validSingleType([], VDATA_TYPE.map, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType([1,2,3], VDATA_TYPE.map, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType([[]], VDATA_TYPE.map, 'testing...', false, []); }, VerificationError); 
    Assert.throwsErrors(()=>{ validSingleType([[1,2,3],[4,5,6]], VDATA_TYPE.map, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(new Map(), VDATA_TYPE.map, 'testing...', false, []); }, VerificationError);// 这里是 false，不能为空
    Assert.throwsErrorsNone(()=>{ validSingleType(new Map([['a',1],['b', 2]]), VDATA_TYPE.map, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(new Set(), VDATA_TYPE.map, 'testing...', false, []); }, VerificationError); 
    Assert.throwsErrors(()=>{ validSingleType(new Set([1,2,3]), VDATA_TYPE.map, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(/123/, VDATA_TYPE.map, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(new RegExp('123'), VDATA_TYPE.map, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType({}, VDATA_TYPE.map, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType({a:1, b:2}, VDATA_TYPE.map, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(new Object(), VDATA_TYPE.map, 'testing...', false, []); }, VerificationError);
    // 对于Map，还需要校验 can be empty 为 true 的情况。
    // 这是Map为空
    Assert.throwsErrorsNone(()=>{ validSingleType(new Map(), VDATA_TYPE.map, 'testing...', true, []); });
    Assert.throwsErrors(()=>{     validSingleType(new Map(), VDATA_TYPE.map, 'testing...', false, []); }, VerificationError);
}

function testOptionsRegExp(){
    // 因为已经测试了 关于函数参数的 ParameterError 抛出。
    // 所以这里不测关于函数本身的参数验证了。
    Assert.throwsErrors(()=>{ validSingleType(undefined, VDATA_TYPE.regexp, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(null, VDATA_TYPE.regexp, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(NaN, VDATA_TYPE.regexp, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType('', VDATA_TYPE.regexp, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType('sss', VDATA_TYPE.regexp, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(new String(''), VDATA_TYPE.regexp, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(new String('sss'), VDATA_TYPE.regexp, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(123, VDATA_TYPE.regexp, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(-1, VDATA_TYPE.regexp, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(new Number(123), VDATA_TYPE.regexp, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(new Number(-1), VDATA_TYPE.regexp, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(true, VDATA_TYPE.regexp, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(false, VDATA_TYPE.regexp, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(new Boolean(true), VDATA_TYPE.regexp, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(new Boolean(false), VDATA_TYPE.regexp, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(Symbol('uid'), VDATA_TYPE.regexp, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(Symbol.for('uid'), VDATA_TYPE.regexp, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(Error, VDATA_TYPE.regexp, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(ParameterError, VDATA_TYPE.regexp, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(testOptionsParamErr, VDATA_TYPE.regexp, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(function(){}, VDATA_TYPE.regexp, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(()=>{}, VDATA_TYPE.regexp, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType([], VDATA_TYPE.regexp, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType([1,2,3], VDATA_TYPE.regexp, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType([[]], VDATA_TYPE.regexp, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType([[1,2,3],[4,5,6]], VDATA_TYPE.regexp, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(new Map(), VDATA_TYPE.regexp, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(new Map([['a',1],['b', 2]]), VDATA_TYPE.regexp, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(new Set(), VDATA_TYPE.regexp, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(new Set([1,2,3]), VDATA_TYPE.regexp, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrorsNone(()=>{ validSingleType(/123/, VDATA_TYPE.regexp, 'testing...', false, []); });
    Assert.throwsErrorsNone(()=>{ validSingleType(new RegExp('123'), VDATA_TYPE.regexp, 'testing...', false, []); });
    Assert.throwsErrors(()=>{ validSingleType({}, VDATA_TYPE.regexp, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType({a:1, b:2}, VDATA_TYPE.regexp, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(new Object(), VDATA_TYPE.regexp, 'testing...', false, []); }, VerificationError);
}

function testOptionsObjectLiteral(){
    // 因为已经测试了 关于函数参数的 ParameterError 抛出。
    // 所以这里不测关于函数本身的参数验证了。
    Assert.throwsErrors(()=>{ validSingleType(undefined, VDATA_TYPE.objectliteral, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(null, VDATA_TYPE.objectliteral, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(NaN, VDATA_TYPE.objectliteral, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType('', VDATA_TYPE.objectliteral, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType('sss', VDATA_TYPE.objectliteral, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(new String(''), VDATA_TYPE.objectliteral, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(new String('sss'), VDATA_TYPE.objectliteral, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(123, VDATA_TYPE.objectliteral, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(-1, VDATA_TYPE.objectliteral, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(new Number(123), VDATA_TYPE.objectliteral, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(new Number(-1), VDATA_TYPE.objectliteral, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(true, VDATA_TYPE.objectliteral, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(false, VDATA_TYPE.objectliteral, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(new Boolean(true), VDATA_TYPE.objectliteral, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(new Boolean(false), VDATA_TYPE.objectliteral, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(Symbol('uid'), VDATA_TYPE.objectliteral, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(Symbol.for('uid'), VDATA_TYPE.objectliteral, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(Error, VDATA_TYPE.objectliteral, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(ParameterError, VDATA_TYPE.objectliteral, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(testOptionsParamErr, VDATA_TYPE.objectliteral, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(function(){}, VDATA_TYPE.objectliteral, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(()=>{}, VDATA_TYPE.objectliteral, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType([], VDATA_TYPE.objectliteral, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType([1,2,3], VDATA_TYPE.objectliteral, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType([[]], VDATA_TYPE.objectliteral, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType([[1,2,3],[4,5,6]], VDATA_TYPE.objectliteral, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(new Map(), VDATA_TYPE.objectliteral, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(new Map([['a',1],['b', 2]]), VDATA_TYPE.objectliteral, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(new Set(), VDATA_TYPE.objectliteral, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(new Set([1,2,3]), VDATA_TYPE.objectliteral, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(/123/, VDATA_TYPE.objectliteral, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(new RegExp('123'), VDATA_TYPE.objectliteral, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrorsNone(()=>{ validSingleType({}, VDATA_TYPE.objectliteral, 'testing...', false, []); });
    Assert.throwsErrorsNone(()=>{ validSingleType({a:1, b:2}, VDATA_TYPE.objectliteral, 'testing...', false, []); });
    Assert.throwsErrorsNone(()=>{ validSingleType(new Object(), VDATA_TYPE.objectliteral, 'testing...', false, []); });
    // 对于 objectliteral 来说，它指的是 {} 和 Object 衍生的普通对象。并非数组、字符、数字、布尔、正则、Set、Map、Error 等等常规对象。
}

function testOptionsObject(){
    // 因为已经测试了 关于函数参数的 ParameterError 抛出。
    // 所以这里不测关于函数本身的参数验证了。
    Assert.throwsErrors(()=>{ validSingleType(undefined, VDATA_TYPE.object, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(null, VDATA_TYPE.object, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(NaN, VDATA_TYPE.object, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType('', VDATA_TYPE.object, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType('sss', VDATA_TYPE.object, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrorsNone(()=>{ validSingleType(new String(''), VDATA_TYPE.object, 'testing...', false, []); });
    Assert.throwsErrorsNone(()=>{ validSingleType(new String('sss'), VDATA_TYPE.object, 'testing...', false, []); });
    Assert.throwsErrors(()=>{ validSingleType(123, VDATA_TYPE.object, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(-1, VDATA_TYPE.object, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrorsNone(()=>{ validSingleType(new Number(123), VDATA_TYPE.object, 'testing...', false, []); });
    Assert.throwsErrorsNone(()=>{ validSingleType(new Number(-1), VDATA_TYPE.object, 'testing...', false, []); });
    Assert.throwsErrors(()=>{ validSingleType(true, VDATA_TYPE.object, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(false, VDATA_TYPE.object, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrorsNone(()=>{ validSingleType(new Boolean(true), VDATA_TYPE.object, 'testing...', false, []); });
    Assert.throwsErrorsNone(()=>{ validSingleType(new Boolean(false), VDATA_TYPE.object, 'testing...', false, []); });
    Assert.throwsErrors(()=>{ validSingleType(Symbol('uid'), VDATA_TYPE.object, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(Symbol.for('uid'), VDATA_TYPE.object, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(Error, VDATA_TYPE.object, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(ParameterError, VDATA_TYPE.object, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(testOptionsParamErr, VDATA_TYPE.object, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(function(){}, VDATA_TYPE.object, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(()=>{}, VDATA_TYPE.object, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrorsNone(()=>{ validSingleType([], VDATA_TYPE.object, 'testing...', false, []); });
    Assert.throwsErrorsNone(()=>{ validSingleType([1,2,3], VDATA_TYPE.object, 'testing...', false, []); });
    Assert.throwsErrorsNone(()=>{ validSingleType([[]], VDATA_TYPE.object, 'testing...', false, []); });
    Assert.throwsErrorsNone(()=>{ validSingleType([[1,2,3],[4,5,6]], VDATA_TYPE.object, 'testing...', false, []); });
    Assert.throwsErrorsNone(()=>{ validSingleType(new Map(), VDATA_TYPE.object, 'testing...', false, []); });
    Assert.throwsErrorsNone(()=>{ validSingleType(new Map([['a',1],['b', 2]]), VDATA_TYPE.object, 'testing...', false, []); });
    Assert.throwsErrorsNone(()=>{ validSingleType(new Set(), VDATA_TYPE.object, 'testing...', false, []); });
    Assert.throwsErrorsNone(()=>{ validSingleType(new Set([1,2,3]), VDATA_TYPE.object, 'testing...', false, []); });
    Assert.throwsErrorsNone(()=>{ validSingleType(/123/, VDATA_TYPE.object, 'testing...', false, []); });
    Assert.throwsErrorsNone(()=>{ validSingleType(new RegExp('123'), VDATA_TYPE.object, 'testing...', false, []); });
    Assert.throwsErrorsNone(()=>{ validSingleType({}, VDATA_TYPE.object, 'testing...', false, []); });
    Assert.throwsErrorsNone(()=>{ validSingleType({a:1, b:2}, VDATA_TYPE.object, 'testing...', false, []); });
    Assert.throwsErrorsNone(()=>{ validSingleType(new Object(), VDATA_TYPE.object, 'testing...', false, []); });
}

function testOptionsHtmlElem(){
    // 因为已经测试了 关于函数参数的 ParameterError 抛出。
    // 所以这里不测关于函数本身的参数验证了。
    
    // 构建一些 HTML Element 和 HTML Element List
    let htmlStr = `
    <div>
        <input type="text" id="input1" name="inputtester" value=""/>
        <input type="text" id="input2" name="inputtester" value=""/>
    </div>
    `;
    let myDom = DOM_PARSER.parseFromString(htmlStr, 'text/html');
    let htmlElem1 = myDom.getElementById('input1');
    let htmlElem2 = myDom.querySelector('#input2');
    let htmlElemList1 = myDom.getElementsByTagName('input');
    let htmlElemList2 = myDom.querySelectorAll('input');

    //
    Assert.throwsErrors(()=>{ validSingleType(undefined, VDATA_TYPE.htmlElem, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(null, VDATA_TYPE.htmlElem, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(NaN, VDATA_TYPE.htmlElem, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType('', VDATA_TYPE.htmlElem, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType('sss', VDATA_TYPE.htmlElem, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(new String(''), VDATA_TYPE.htmlElem, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(new String('sss'), VDATA_TYPE.htmlElem, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(123, VDATA_TYPE.htmlElem, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(-1, VDATA_TYPE.htmlElem, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(new Number(123), VDATA_TYPE.htmlElem, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(new Number(-1), VDATA_TYPE.htmlElem, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(true, VDATA_TYPE.htmlElem, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(false, VDATA_TYPE.htmlElem, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(new Boolean(true), VDATA_TYPE.htmlElem, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(new Boolean(false), VDATA_TYPE.htmlElem, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(Symbol('uid'), VDATA_TYPE.htmlElem, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(Symbol.for('uid'), VDATA_TYPE.htmlElem, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(Error, VDATA_TYPE.htmlElem, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(ParameterError, VDATA_TYPE.htmlElem, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(testOptionsParamErr, VDATA_TYPE.htmlElem, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(function(){}, VDATA_TYPE.htmlElem, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(()=>{}, VDATA_TYPE.htmlElem, 'testing...', false, []); }, VerificationError); 
    Assert.throwsErrors(()=>{ validSingleType([], VDATA_TYPE.htmlElem, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType([1,2,3], VDATA_TYPE.htmlElem, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType([[]], VDATA_TYPE.htmlElem, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType([[1,2,3],[4,5,6]], VDATA_TYPE.htmlElem, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(new Map(), VDATA_TYPE.htmlElem, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(new Map([['a',1],['b', 2]]), VDATA_TYPE.htmlElem, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(new Set(), VDATA_TYPE.htmlElem, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(new Set([1,2,3]), VDATA_TYPE.htmlElem, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(/123/, VDATA_TYPE.htmlElem, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(new RegExp('123'), VDATA_TYPE.htmlElem, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType({}, VDATA_TYPE.htmlElem, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType({a:1, b:2}, VDATA_TYPE.htmlElem, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(new Object(), VDATA_TYPE.htmlElem, 'testing...', false, []); }, VerificationError);
    // 增加一些 html 元素处理
    Assert.throwsErrorsNone(()=>{ validSingleType(htmlElem1, VDATA_TYPE.htmlElem, 'testing...', false, []); });
    Assert.throwsErrorsNone(()=>{ validSingleType(htmlElem2, VDATA_TYPE.htmlElem, 'testing...', false, []); });
    Assert.throwsErrors(()=>{ validSingleType(htmlElemList1, VDATA_TYPE.htmlElem, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(htmlElemList2, VDATA_TYPE.htmlElem, 'testing...', false, []); }, VerificationError);
}

function testOptionsHtmlElemList(){
    // 因为已经测试了 关于函数参数的 ParameterError 抛出。
    // 所以这里不测关于函数本身的参数验证了。

    // 构建一些 HTML Element 和 HTML Element List
    let htmlStr = `
    <div>
        <input type="text" id="input1" name="inputtester" value=""/>
        <input type="text" id="input2" name="inputtester" value=""/>
    </div>
    `;
    let myDom = DOM_PARSER.parseFromString(htmlStr, 'text/html');
    let htmlElem1 = myDom.getElementById('input1');
    let htmlElem2 = myDom.querySelector('#input2');
    let htmlElemList1 = myDom.getElementsByTagName('input');
    let htmlElemList2 = myDom.querySelectorAll('input');

    //
    Assert.throwsErrors(()=>{ validSingleType(undefined, VDATA_TYPE.htmlElemList, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(null, VDATA_TYPE.htmlElemList, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(NaN, VDATA_TYPE.htmlElemList, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType('', VDATA_TYPE.htmlElemList, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType('sss', VDATA_TYPE.htmlElemList, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(new String(''), VDATA_TYPE.htmlElemList, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(new String('sss'), VDATA_TYPE.htmlElemList, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(123, VDATA_TYPE.htmlElemList, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(-1, VDATA_TYPE.htmlElemList, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(new Number(123), VDATA_TYPE.htmlElemList, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(new Number(-1), VDATA_TYPE.htmlElemList, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(true, VDATA_TYPE.htmlElemList, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(false, VDATA_TYPE.htmlElemList, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(new Boolean(true), VDATA_TYPE.htmlElemList, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(new Boolean(false), VDATA_TYPE.htmlElemList, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(Symbol('uid'), VDATA_TYPE.htmlElemList, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(Symbol.for('uid'), VDATA_TYPE.htmlElemList, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(Error, VDATA_TYPE.htmlElemList, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(ParameterError, VDATA_TYPE.htmlElemList, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(testOptionsParamErr, VDATA_TYPE.htmlElemList, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(function(){}, VDATA_TYPE.htmlElemList, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(()=>{}, VDATA_TYPE.htmlElemList, 'testing...', false, []); }, VerificationError); 
    Assert.throwsErrors(()=>{ validSingleType([], VDATA_TYPE.htmlElemList, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType([1,2,3], VDATA_TYPE.htmlElemList, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType([[]], VDATA_TYPE.htmlElemList, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType([[1,2,3],[4,5,6]], VDATA_TYPE.htmlElemList, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(new Map(), VDATA_TYPE.htmlElemList, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(new Map([['a',1],['b', 2]]), VDATA_TYPE.htmlElemList, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(new Set(), VDATA_TYPE.htmlElemList, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(new Set([1,2,3]), VDATA_TYPE.htmlElemList, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(/123/, VDATA_TYPE.htmlElemList, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(new RegExp('123'), VDATA_TYPE.htmlElemList, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType({}, VDATA_TYPE.htmlElemList, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType({a:1, b:2}, VDATA_TYPE.htmlElemList, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(new Object(), VDATA_TYPE.htmlElemList, 'testing...', false, []); }, VerificationError);
    // 增加一些 html 元素处理
    Assert.throwsErrors(()=>{ validSingleType(htmlElem1, VDATA_TYPE.htmlElemList, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(htmlElem2, VDATA_TYPE.htmlElemList, 'testing...', false, []); }, VerificationError);
    Assert.throwsErrorsNone(()=>{ validSingleType(htmlElemList1, VDATA_TYPE.htmlElemList, 'testing...', false, []); });
    Assert.throwsErrorsNone(()=>{ validSingleType(htmlElemList2, VDATA_TYPE.htmlElemList, 'testing...', false, []); });
}

function testOptionsTargetObject(){
    // 因为已经测试了 关于函数参数的 ParameterError 抛出。
    // 所以这里不测关于函数本身的参数验证了。

    // 对于 target object，它必须是指定的类型。这个类型信息写在 数组里面。
    // 这里 以 正则对象 和 字符串 为测试样例
    Assert.throwsErrors(()=>{ validSingleType(undefined, VDATA_TYPE.targetObj, 'testing...', false, [RegExp, String]); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(null, VDATA_TYPE.targetObj, 'testing...', false, [RegExp, String]); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(NaN, VDATA_TYPE.targetObj, 'testing...', false, [RegExp, String]); }, VerificationError);
    Assert.throwsErrorsNone(()=>{ validSingleType('', VDATA_TYPE.targetObj, 'testing...', false, [RegExp, String]); });
    Assert.throwsErrorsNone(()=>{ validSingleType('sss', VDATA_TYPE.targetObj, 'testing...', false, [RegExp, String]); });
    Assert.throwsErrorsNone(()=>{ validSingleType(new String(''), VDATA_TYPE.targetObj, 'testing...', false, [RegExp, String]); });
    Assert.throwsErrorsNone(()=>{ validSingleType(new String('sss'), VDATA_TYPE.targetObj, 'testing...', false, [RegExp, String]); });
    Assert.throwsErrors(()=>{ validSingleType(123, VDATA_TYPE.targetObj, 'testing...', false, [RegExp, String]); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(-1, VDATA_TYPE.targetObj, 'testing...', false, [RegExp, String]); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(new Number(123), VDATA_TYPE.targetObj, 'testing...', false, [RegExp, String]); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(new Number(-1), VDATA_TYPE.targetObj, 'testing...', false, [RegExp, String]); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(true, VDATA_TYPE.targetObj, 'testing...', false, [RegExp, String]); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(false, VDATA_TYPE.targetObj, 'testing...', false, [RegExp, String]); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(new Boolean(true), VDATA_TYPE.targetObj, 'testing...', false, [RegExp, String]); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(new Boolean(false), VDATA_TYPE.targetObj, 'testing...', false, [RegExp, String]); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(Symbol('uid'), VDATA_TYPE.targetObj, 'testing...', false, [RegExp, String]); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(Symbol.for('uid'), VDATA_TYPE.targetObj, 'testing...', false, [RegExp, String]); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(Error, VDATA_TYPE.targetObj, 'testing...', false, [RegExp, String]); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(ParameterError, VDATA_TYPE.targetObj, 'testing...', false, [RegExp, String]); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(testOptionsParamErr, VDATA_TYPE.targetObj, 'testing...', false, [RegExp, String]); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(function(){}, VDATA_TYPE.targetObj, 'testing...', false, [RegExp, String]); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(()=>{}, VDATA_TYPE.targetObj, 'testing...', false, [RegExp, String]); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType([], VDATA_TYPE.targetObj, 'testing...', false, [RegExp, String]); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType([1,2,3], VDATA_TYPE.targetObj, 'testing...', false, [RegExp, String]); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType([[]], VDATA_TYPE.targetObj, 'testing...', false, [RegExp, String]); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType([[1,2,3],[4,5,6]], VDATA_TYPE.targetObj, 'testing...', false, [RegExp, String]); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(new Map(), VDATA_TYPE.targetObj, 'testing...', false, [RegExp, String]); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(new Map([['a',1],['b', 2]]), VDATA_TYPE.targetObj, 'testing...', false, [RegExp, String]); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(new Set(), VDATA_TYPE.targetObj, 'testing...', false, [RegExp, String]); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(new Set([1,2,3]), VDATA_TYPE.targetObj, 'testing...', false, [RegExp, String]); }, VerificationError);
    Assert.throwsErrorsNone(()=>{ validSingleType(/123/, VDATA_TYPE.targetObj, 'testing...', false, [RegExp, String]); });
    Assert.throwsErrorsNone(()=>{ validSingleType(new RegExp('123'), VDATA_TYPE.targetObj, 'testing...', false, [RegExp, String]); });
    Assert.throwsErrors(()=>{ validSingleType({}, VDATA_TYPE.targetObj, 'testing...', false, [RegExp, String]); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType({a:1, b:2}, VDATA_TYPE.targetObj, 'testing...', false, [RegExp, String]); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(new Object(), VDATA_TYPE.targetObj, 'testing...', false, [RegExp, String]); }, VerificationError);
}

function testOptionsTargetObjectSet(){
    // 因为已经测试了 关于函数参数的 ParameterError 抛出。
    // 所以这里不测关于函数本身的参数验证了。
    Assert.throwsErrors(()=>{ validSingleType(undefined, VDATA_TYPE.targetObjSet, 'testing...', false, [RegExp, String]); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(null, VDATA_TYPE.targetObjSet, 'testing...', false, [RegExp, String]); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(NaN, VDATA_TYPE.targetObjSet, 'testing...', false, [RegExp, String]); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType('', VDATA_TYPE.targetObjSet, 'testing...', false, [RegExp, String]); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType('sss', VDATA_TYPE.targetObjSet, 'testing...', false, [RegExp, String]); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(new String(''), VDATA_TYPE.targetObjSet, 'testing...', false, [RegExp, String]); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(new String('sss'), VDATA_TYPE.targetObjSet, 'testing...', false, [RegExp, String]); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(123, VDATA_TYPE.targetObjSet, 'testing...', false, [RegExp, String]); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(-1, VDATA_TYPE.targetObjSet, 'testing...', false, [RegExp, String]); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(new Number(123), VDATA_TYPE.targetObjSet, 'testing...', false, [RegExp, String]); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(new Number(-1), VDATA_TYPE.targetObjSet, 'testing...', false, [RegExp, String]); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(true, VDATA_TYPE.targetObjSet, 'testing...', false, [RegExp, String]); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(false, VDATA_TYPE.targetObjSet, 'testing...', false, [RegExp, String]); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(new Boolean(true), VDATA_TYPE.targetObjSet, 'testing...', false, [RegExp, String]); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(new Boolean(false), VDATA_TYPE.targetObjSet, 'testing...', false, [RegExp, String]); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(Symbol('uid'), VDATA_TYPE.targetObjSet, 'testing...', false, [RegExp, String]); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(Symbol.for('uid'), VDATA_TYPE.targetObjSet, 'testing...', false, [RegExp, String]); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(Error, VDATA_TYPE.targetObjSet, 'testing...', false, [RegExp, String]); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(ParameterError, VDATA_TYPE.targetObjSet, 'testing...', false, [RegExp, String]); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(testOptionsParamErr, VDATA_TYPE.targetObjSet, 'testing...', false, [RegExp, String]); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(function(){}, VDATA_TYPE.targetObjSet, 'testing...', false, [RegExp, String]); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(()=>{}, VDATA_TYPE.targetObjSet, 'testing...', false, [RegExp, String]); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType([], VDATA_TYPE.targetObjSet, 'testing...', false, [RegExp, String]); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType([1,2,3], VDATA_TYPE.targetObjSet, 'testing...', false, [RegExp, String]); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType([[]], VDATA_TYPE.targetObjSet, 'testing...', false, [RegExp, String]); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType([[1,2,3],[4,5,6]], VDATA_TYPE.targetObjSet, 'testing...', false, [RegExp, String]); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(new Map(), VDATA_TYPE.targetObjSet, 'testing...', false, [RegExp, String]); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(new Map([['a',1],['b', 2]]), VDATA_TYPE.targetObjSet, 'testing...', false, [RegExp, String]); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(new Set(), VDATA_TYPE.targetObjSet, 'testing...', false, [RegExp, String]); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(new Set([1,2,3]), VDATA_TYPE.targetObjSet, 'testing...', false, [RegExp, String]); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(/123/, VDATA_TYPE.targetObjSet, 'testing...', false, [RegExp, String]); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(new RegExp('123'), VDATA_TYPE.targetObjSet, 'testing...', false, [RegExp, String]); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType({}, VDATA_TYPE.targetObjSet, 'testing...', false, [RegExp, String]); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType({a:1, b:2}, VDATA_TYPE.targetObjSet, 'testing...', false, [RegExp, String]); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(new Object(), VDATA_TYPE.targetObjSet, 'testing...', false, [RegExp, String]); }, VerificationError);
    // 测试can be empty. 
    Assert.throwsErrors(()=>{     validSingleType(new Set(), VDATA_TYPE.targetObjSet, 'testing...', false, [RegExp, String]); }, VerificationError);
    // 这里 因为有时候可以为空集合
    Assert.throwsErrorsNone(()=>{ validSingleType(new Set(), VDATA_TYPE.targetObjSet, 'testing...', true, [RegExp, String]); });
    // 只要有一个对象不符合类型描述，就抛异常
    Assert.throwsErrors(()=>{ validSingleType(new Set([/123/, 456]), VDATA_TYPE.targetObjSet, 'testing...', true, [RegExp, String]); }, VerificationError);
    // 符合的话就不抛异常
    Assert.throwsErrorsNone(()=>{ validSingleType(new Set([/123/]), VDATA_TYPE.targetObjSet, 'testing...', true, [RegExp, String]); });
    Assert.throwsErrorsNone(()=>{ validSingleType(new Set(['123']), VDATA_TYPE.targetObjSet, 'testing...', true, [RegExp, String]); });
    Assert.throwsErrorsNone(()=>{ validSingleType(new Set([/123/, '123']), VDATA_TYPE.targetObjSet, 'testing...', true, [RegExp, String]); });
}

function testOptionsTargetObjectArr(){
    // 因为已经测试了 关于函数参数的 ParameterError 抛出。
    // 所以这里不测关于函数本身的参数验证了。
    Assert.throwsErrors(()=>{ validSingleType(undefined, VDATA_TYPE.targetObjArray, 'testing...', false, [RegExp, String]); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(null, VDATA_TYPE.targetObjArray, 'testing...', false, [RegExp, String]); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(NaN, VDATA_TYPE.targetObjArray, 'testing...', false, [RegExp, String]); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType('', VDATA_TYPE.targetObjArray, 'testing...', false, [RegExp, String]); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType('sss', VDATA_TYPE.targetObjArray, 'testing...', false, [RegExp, String]); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(new String(''), VDATA_TYPE.targetObjArray, 'testing...', false, [RegExp, String]); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(new String('sss'), VDATA_TYPE.targetObjArray, 'testing...', false, [RegExp, String]); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(123, VDATA_TYPE.targetObjArray, 'testing...', false, [RegExp, String]); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(-1, VDATA_TYPE.targetObjArray, 'testing...', false, [RegExp, String]); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(new Number(123), VDATA_TYPE.targetObjArray, 'testing...', false, [RegExp, String]); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(new Number(-1), VDATA_TYPE.targetObjArray, 'testing...', false, [RegExp, String]); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(true, VDATA_TYPE.targetObjArray, 'testing...', false, [RegExp, String]); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(false, VDATA_TYPE.targetObjArray, 'testing...', false, [RegExp, String]); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(new Boolean(true), VDATA_TYPE.targetObjArray, 'testing...', false, [RegExp, String]); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(new Boolean(false), VDATA_TYPE.targetObjArray, 'testing...', false, [RegExp, String]); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(Symbol('uid'), VDATA_TYPE.targetObjArray, 'testing...', false, [RegExp, String]); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(Symbol.for('uid'), VDATA_TYPE.targetObjArray, 'testing...', false, [RegExp, String]); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(Error, VDATA_TYPE.targetObjArray, 'testing...', false, [RegExp, String]); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(ParameterError, VDATA_TYPE.targetObjArray, 'testing...', false, [RegExp, String]); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(testOptionsParamErr, VDATA_TYPE.targetObjArray, 'testing...', false, [RegExp, String]); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(function(){}, VDATA_TYPE.targetObjArray, 'testing...', false, [RegExp, String]); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(()=>{}, VDATA_TYPE.targetObjArray, 'testing...', false, [RegExp, String]); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType([], VDATA_TYPE.targetObjArray, 'testing...', false, [RegExp, String]); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType([1,2,3], VDATA_TYPE.targetObjArray, 'testing...', false, [RegExp, String]); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType([[]], VDATA_TYPE.targetObjArray, 'testing...', false, [RegExp, String]); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType([[1,2,3],[4,5,6]], VDATA_TYPE.targetObjArray, 'testing...', false, [RegExp, String]); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(new Map(), VDATA_TYPE.targetObjArray, 'testing...', false, [RegExp, String]); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(new Map([['a',1],['b', 2]]), VDATA_TYPE.targetObjArray, 'testing...', false, [RegExp, String]); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(new Set(), VDATA_TYPE.targetObjArray, 'testing...', false, [RegExp, String]); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(new Set([1,2,3]), VDATA_TYPE.targetObjArray, 'testing...', false, [RegExp, String]); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(/123/, VDATA_TYPE.targetObjArray, 'testing...', false, [RegExp, String]); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(new RegExp('123'), VDATA_TYPE.targetObjArray, 'testing...', false, [RegExp, String]); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType({}, VDATA_TYPE.targetObjArray, 'testing...', false, [RegExp, String]); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType({a:1, b:2}, VDATA_TYPE.targetObjArray, 'testing...', false, [RegExp, String]); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(new Object(), VDATA_TYPE.targetObjArray, 'testing...', false, [RegExp, String]); }, VerificationError);
    // 测试can be empty. 
    Assert.throwsErrors(()=>{     validSingleType([], VDATA_TYPE.targetObjArray, 'testing...', false, [RegExp, String]); }, VerificationError);
    // 这里 因为有时候可以为空集合
    Assert.throwsErrorsNone(()=>{ validSingleType([], VDATA_TYPE.targetObjArray, 'testing...', true, [RegExp, String]); });
    // 只要有一个对象不符合类型描述，就抛异常
    Assert.throwsErrors(()=>{ validSingleType([/123/, 456], VDATA_TYPE.targetObjArray, 'testing...', true, [RegExp, String]); }, VerificationError);
    // 符合的话就不抛异常
    Assert.throwsErrorsNone(()=>{ validSingleType([/123/], VDATA_TYPE.targetObjArray, 'testing...', true, [RegExp, String]); });
    Assert.throwsErrorsNone(()=>{ validSingleType(['123'], VDATA_TYPE.targetObjArray, 'testing...', true, [RegExp, String]); });
    Assert.throwsErrorsNone(()=>{ validSingleType([/123/, '123'], VDATA_TYPE.targetObjArray, 'testing...', true, [RegExp, String]); });
}

function testOptionsTargetObjectArr2d(){
    // 因为已经测试了 关于函数参数的 ParameterError 抛出。
    // 所以这里不测关于函数本身的参数验证了。
    Assert.throwsErrors(()=>{ validSingleType(undefined, VDATA_TYPE.targetObj2DArray, 'testing...', false, [RegExp, String]); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(null, VDATA_TYPE.targetObj2DArray, 'testing...', false, [RegExp, String]); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(NaN, VDATA_TYPE.targetObj2DArray, 'testing...', false, [RegExp, String]); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType('', VDATA_TYPE.targetObj2DArray, 'testing...', false, [RegExp, String]); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType('sss', VDATA_TYPE.targetObj2DArray, 'testing...', false, [RegExp, String]); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(new String(''), VDATA_TYPE.targetObj2DArray, 'testing...', false, [RegExp, String]); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(new String('sss'), VDATA_TYPE.targetObj2DArray, 'testing...', false, [RegExp, String]); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(123, VDATA_TYPE.targetObj2DArray, 'testing...', false, [RegExp, String]); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(-1, VDATA_TYPE.targetObj2DArray, 'testing...', false, [RegExp, String]); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(new Number(123), VDATA_TYPE.targetObj2DArray, 'testing...', false, [RegExp, String]); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(new Number(-1), VDATA_TYPE.targetObj2DArray, 'testing...', false, [RegExp, String]); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(true, VDATA_TYPE.targetObj2DArray, 'testing...', false, [RegExp, String]); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(false, VDATA_TYPE.targetObj2DArray, 'testing...', false, [RegExp, String]); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(new Boolean(true), VDATA_TYPE.targetObj2DArray, 'testing...', false, [RegExp, String]); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(new Boolean(false), VDATA_TYPE.targetObj2DArray, 'testing...', false, [RegExp, String]); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(Symbol('uid'), VDATA_TYPE.targetObj2DArray, 'testing...', false, [RegExp, String]); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(Symbol.for('uid'), VDATA_TYPE.targetObj2DArray, 'testing...', false, [RegExp, String]); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(Error, VDATA_TYPE.targetObj2DArray, 'testing...', false, [RegExp, String]); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(ParameterError, VDATA_TYPE.targetObj2DArray, 'testing...', false, [RegExp, String]); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(testOptionsParamErr, VDATA_TYPE.targetObj2DArray, 'testing...', false, [RegExp, String]); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(function(){}, VDATA_TYPE.targetObj2DArray, 'testing...', false, [RegExp, String]); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(()=>{}, VDATA_TYPE.targetObj2DArray, 'testing...', false, [RegExp, String]); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType([], VDATA_TYPE.targetObj2DArray, 'testing...', false, [RegExp, String]); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType([1,2,3], VDATA_TYPE.targetObj2DArray, 'testing...', false, [RegExp, String]); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType([[]], VDATA_TYPE.targetObj2DArray, 'testing...', false, [RegExp, String]); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType([[1,2,3],[4,5,6]], VDATA_TYPE.targetObj2DArray, 'testing...', false, [RegExp, String]); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(new Map(), VDATA_TYPE.targetObj2DArray, 'testing...', false, [RegExp, String]); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(new Map([['a',1],['b', 2]]), VDATA_TYPE.targetObj2DArray, 'testing...', false, [RegExp, String]); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(new Set(), VDATA_TYPE.targetObj2DArray, 'testing...', false, [RegExp, String]); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(new Set([1,2,3]), VDATA_TYPE.targetObj2DArray, 'testing...', false, [RegExp, String]); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(/123/, VDATA_TYPE.targetObj2DArray, 'testing...', false, [RegExp, String]); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(new RegExp('123'), VDATA_TYPE.targetObj2DArray, 'testing...', false, [RegExp, String]); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType({}, VDATA_TYPE.targetObj2DArray, 'testing...', false, [RegExp, String]); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType({a:1, b:2}, VDATA_TYPE.targetObj2DArray, 'testing...', false, [RegExp, String]); }, VerificationError);
    Assert.throwsErrors(()=>{ validSingleType(new Object(), VDATA_TYPE.targetObj2DArray, 'testing...', false, [RegExp, String]); }, VerificationError);
    // 测试can be empty. 
    Assert.throwsErrors(()=>{     validSingleType([[]], VDATA_TYPE.targetObj2DArray, 'testing...', false, [RegExp, String]); }, VerificationError);
    // 这里 因为有时候可以为空集合
    Assert.throwsErrorsNone(()=>{ validSingleType([[]], VDATA_TYPE.targetObj2DArray, 'testing...', true, [RegExp, String]); });
    // 只要有一个对象不符合类型描述，就抛异常
    Assert.throwsErrors(()=>{ validSingleType([[/123/, 456]], VDATA_TYPE.targetObj2DArray, 'testing...', true, [RegExp, String]); }, VerificationError);
    // 符合的话就不抛异常
    Assert.throwsErrorsNone(()=>{ validSingleType([[/123/]], VDATA_TYPE.targetObj2DArray, 'testing...', true, [RegExp, String]); });
    Assert.throwsErrorsNone(()=>{ validSingleType([['123']], VDATA_TYPE.targetObj2DArray, 'testing...', true, [RegExp, String]); });
    Assert.throwsErrorsNone(()=>{ validSingleType([[/123/, '123']], VDATA_TYPE.targetObj2DArray, 'testing...', true, [RegExp, String]); });
}

function testOptionsValueChecking(){

    // 这里是校验通过后，数值的比对处理。因为要保证校验后，数据能够正常获取。

    // 构建一些 HTML Element 和 HTML Element List
    let htmlStr = `
    <div>
        <input type="text" id="input1" name="inputtester" value=""/>
        <input type="text" id="input2" name="inputtester" value=""/>
    </div>
    `;
    let myDom = DOM_PARSER.parseFromString(htmlStr, 'text/html');
    let htmlElem1 = myDom.getElementById('input1');
    let htmlElem2 = myDom.querySelector('#input2');
    let htmlElemList1 = myDom.getElementsByTagName('input');
    let htmlElemList2 = myDom.querySelectorAll('input');
    
    // null
    let null1 = null;
    let null2 = undefined;
    let null3 = NaN;
    let null1result = validSingleType(null1, VDATA_TYPE.null, 'testing ...');
    let null2result = validSingleType(null2, VDATA_TYPE.null, 'testing ...');
    let null3result = validSingleType(null3, VDATA_TYPE.null, 'testing ...');
    Assert.equalsStrictly(null1, null1result);
    Assert.equalsStrictly(null2, null2result);
    Assert.equalsStrictly(true, Number.isNaN(null3result));
    // string
    let str1 = 'aaa'
    let str2 = '   ';
    let str3 = '';
    let str4 = new String(str1);
    let str5 = new String(str2);
    let str6 = new String(str3);
    let str1result = validSingleType(str1, VDATA_TYPE.string, 'testing ...');
    let str2result = validSingleType(str2, VDATA_TYPE.string, 'testing ...', true);
    let str3result = validSingleType(str3, VDATA_TYPE.string, 'testing ...', true);
    let str4result = validSingleType(str4, VDATA_TYPE.string, 'testing ...');
    let str5result = validSingleType(str5, VDATA_TYPE.string, 'testing ...', true);
    let str6result = validSingleType(str6, VDATA_TYPE.string, 'testing ...', true);
    Assert.equalsStrictly(str1, str1result);
    Assert.equalsStrictly(str2, str2result);
    Assert.equalsStrictly(str3, str3result);
    Assert.equalsStrictly(str4.valueOf(), str4result);
    Assert.equalsStrictly(str5.valueOf(), str5result);
    Assert.equalsStrictly(str6.valueOf(), str6result);
    // number
    let num1 = 123;
    let num2 = -1;
    let num3 = new Number('123');
    let num4 = new Number('-1');
    let num1result = validSingleType(num1, VDATA_TYPE.number, 'testing ...');
    let num2result = validSingleType(num2, VDATA_TYPE.number, 'testing ...');
    let num3result = validSingleType(num3, VDATA_TYPE.number, 'testing ...');
    let num4result = validSingleType(num4, VDATA_TYPE.number, 'testing ...');
    Assert.equalsStrictly(num1, num1result);
    Assert.equalsStrictly(num2, num2result);
    Assert.equalsStrictly(num3.valueOf(), num3result);
    Assert.equalsStrictly(num4.valueOf(), num4result);
    // boolean
    let bool1 = true;
    let bool2 = false;
    let bool3 = new Boolean(true);
    let bool4 = new Boolean(false);
    let bool1result = validSingleType(bool1, VDATA_TYPE.boolean, 'testing ...');
    let bool2result = validSingleType(bool2, VDATA_TYPE.boolean, 'testing ...');
    let bool3result = validSingleType(bool3, VDATA_TYPE.boolean, 'testing ...');
    let bool4result = validSingleType(bool4, VDATA_TYPE.boolean, 'testing ...');
    Assert.equalsStrictly(bool1, bool1result);
    Assert.equalsStrictly(bool2, bool2result);
    Assert.equalsStrictly(bool3.valueOf(), bool3result);
    Assert.equalsStrictly(bool4.valueOf(), bool4result);
    // symbol
    let sym1 = Symbol('sym1');
    let sym2 = Symbol.for('sym2');
    let sym1result = validSingleType(sym1, VDATA_TYPE.symbol, 'testing ...');
    let sym2result = validSingleType(sym2, VDATA_TYPE.symbol, 'testing ...');
    Assert.equalsStrictly(sym1, sym1result);
    Assert.equalsStrictly(sym2, sym2result);
    // func
    let fun1 = ()=>{};
    let fun2 = function(){}
    let fun3 = testOptionsFunc;
    let fun1result = validSingleType(fun1, VDATA_TYPE.func, 'testing ...');
    let fun2result = validSingleType(fun2, VDATA_TYPE.func, 'testing ...');
    let fun3result = validSingleType(fun3, VDATA_TYPE.func, 'testing ...');
    Assert.equalsStrictly(fun1, fun1result);
    Assert.equalsStrictly(fun2, fun2result);
    Assert.equalsStrictly(fun3, fun3result);
    // cls
    let cls1 = Error ;
    let cls2 = Assert ;
    let cls1result = validSingleType(cls1, VDATA_TYPE.cls, 'testing ...');
    let cls2result = validSingleType(cls2, VDATA_TYPE.cls, 'testing ...');
    Assert.equalsStrictly(cls1, cls1result);
    Assert.equalsStrictly(cls2, cls2result);
    // array
    let arr1 = [];
    let arr2 = [1,2,3];
    let arr1result = validSingleType(arr1, VDATA_TYPE.array, 'testing ...', true);
    let arr2result = validSingleType(arr2, VDATA_TYPE.array, 'testing ...', true);
    Assert.equalsStrictly(arr1, arr1result);
    Assert.equalsStrictly(arr2, arr2result);
    // 2dArray
    let arr2d1 = [[]];
    let arr2d2 = [[1,2,3]];
    let arr2d1result = validSingleType(arr2d1, VDATA_TYPE.array, 'testing ...', true);
    let arr2d2result = validSingleType(arr2d2, VDATA_TYPE.array, 'testing ...', true);
    Assert.equalsStrictly(arr2d1, arr2d1result);
    Assert.equalsStrictly(arr2d2, arr2d2result);
    // set
    let set1 = new Set();
    let set2 = new Set([1,2,3]);
    let set1result = validSingleType(set1, VDATA_TYPE.set, 'testing ...', true);
    let set2result = validSingleType(set2, VDATA_TYPE.set, 'testing ...', true);
    Assert.equalsStrictly(set1, set1result);
    Assert.equalsStrictly(set2, set2result);
    // map
    let map1 = new Map();
    let map2 = new Map([['a', 1],['b', 2]]);
    let map1result = validSingleType(map1, VDATA_TYPE.map, 'testing ...', true);
    let map2result = validSingleType(map2, VDATA_TYPE.map, 'testing ...', true);
    Assert.equalsStrictly(map1, map1result);
    Assert.equalsStrictly(map2, map2result);
    // regexp
    let reg1 = /123/;
    let reg2 = new RegExp('123');
    let reg1result = validSingleType(reg1, VDATA_TYPE.regexp, 'testing ...');
    let reg2result = validSingleType(reg2, VDATA_TYPE.regexp, 'testing ...');
    Assert.equalsStrictly(reg1, reg1result);
    Assert.equalsStrictly(reg2, reg2result);
    // objectliteral
    let objliteral1 = {};
    let objliteral2 = {a:1, b:2};
    let objliteral3 = new Object();
    let objliteral1result = validSingleType(objliteral1, VDATA_TYPE.objectliteral, 'testing ...');
    let objliteral2result = validSingleType(objliteral2, VDATA_TYPE.objectliteral, 'testing ...');
    let objliteral3result = validSingleType(objliteral3, VDATA_TYPE.objectliteral, 'testing ...');
    Assert.equalsStrictly(objliteral1, objliteral1result);
    Assert.equalsStrictly(objliteral2, objliteral2result);
    Assert.equalsStrictly(objliteral3, objliteral3result);
    // object
    let obj1 = {};
    let obj2 = new Object();
    let obj3 = new String();
    let obj1result = validSingleType(obj1, VDATA_TYPE.object, 'testing ...');
    let obj2result = validSingleType(obj2, VDATA_TYPE.object, 'testing ...');
    let obj3result = validSingleType(obj3, VDATA_TYPE.object, 'testing ...');
    Assert.equalsStrictly(obj1, obj1result);
    Assert.equalsStrictly(obj2, obj2result);
    Assert.equalsStrictly(obj3, obj3result);
    // htmlElem
    let elem1 = htmlElem1;
    let elem2 = htmlElem2;
    let elem1result = validSingleType(elem1, VDATA_TYPE.htmlElem, 'testing ...');
    let elem2result = validSingleType(elem2, VDATA_TYPE.htmlElem, 'testing ...');
    Assert.equalsStrictly(elem1, elem1result);
    Assert.equalsStrictly(elem2, elem2result);
    // htmlElemList
    let elemList1 = htmlElemList1;
    let elemList2 = htmlElemList2;
    let elemList1result = validSingleType(elemList1, VDATA_TYPE.htmlElemList, 'testing ...');
    let elemList2result = validSingleType(elemList2, VDATA_TYPE.htmlElemList, 'testing ...');
    Assert.equalsStrictly(elemList1, elemList1result);
    Assert.equalsStrictly(elemList2, elemList2result);
    // targetobj
    let tarObj1 = '123'
    let tarObj2 = 123;
    let tarObj3 = /123/;
    let tarObj1result = validSingleType(tarObj1, VDATA_TYPE.targetObj, 'testing ...', false, [String, Number, RegExp]);
    let tarObj2result = validSingleType(tarObj2, VDATA_TYPE.targetObj, 'testing ...', false, [String, Number, RegExp]);
    let tarObj3result = validSingleType(tarObj3, VDATA_TYPE.targetObj, 'testing ...', false, [String, Number, RegExp]);
    Assert.equalsStrictly(tarObj1, tarObj1result);
    Assert.equalsStrictly(tarObj2, tarObj2result);
    Assert.equalsStrictly(tarObj3, tarObj3result);
    // targetobjSet
    let tarobjSet1 = new Set();
    let tarobjSet2 = new Set([1, true, 'aa']);
    let tarobjSet1result = validSingleType(tarobjSet1, VDATA_TYPE.targetObjSet, 'testing ...', true, [String, Boolean, Number]);
    let tarobjSet2result = validSingleType(tarobjSet2, VDATA_TYPE.targetObjSet, 'testing ...', true, [String, Boolean, Number]);
    Assert.equalsStrictly(tarobjSet1, tarobjSet1result);
    Assert.equalsStrictly(tarobjSet2, tarobjSet2result);
    // targetobjArray
    let tarobjArr1 = [];
    let tarobjArr2 = [1, true, 'aa'];
    let tarobjArr1result = validSingleType(tarobjArr1, VDATA_TYPE.array, 'testing ...', true, [String, Number, Boolean]);
    let tarobjArr2result = validSingleType(tarobjArr2, VDATA_TYPE.array, 'testing ...', true, [String, Number, Boolean]);
    Assert.equalsStrictly(tarobjArr1, tarobjArr1result);
    Assert.equalsStrictly(tarobjArr2, tarobjArr2result);
    // targetobj2DArray
    let tarObjArr2d1 = [[]];
    let tarObjArr2d2 = [[1, true, 'aa']];
    let tarObjArr2d1result = validSingleType(tarObjArr2d1, VDATA_TYPE.array2d, 'testing ...', true, [String, Number, Boolean]);
    let tarObjArr2d2result = validSingleType(tarObjArr2d2, VDATA_TYPE.array2d, 'testing ...', true, [String, Number, Boolean]);
    Assert.equalsStrictly(tarObjArr2d1, tarObjArr2d1result);
    Assert.equalsStrictly(tarObjArr2d2, tarObjArr2d2result);
}

function testOptionsMultiParamErr(){
    // 这里是 validMultiTypes 函数测试。对于个这个函数，它实际上是在 validSingleType 基础上处理的。所以，只需要做一些 参数验证 和 数值校验即可。
    // 第1个参数 inType 可以为指定字符串，也可以是指定的字符串数组
    Assert.throwsErrorsNone(()=>{ validMultiTypes('pValue', undefined, 'testing ...', false, []) }); // 默认值
    Assert.throwsErrors(()=>{ validMultiTypes('pValue', null, 'testing ...', false, []) }, ParameterError);
    Assert.throwsErrors(()=>{ validMultiTypes('pValue', NaN, 'testing ...', false, []) }, ParameterError);
    Assert.throwsErrors(()=>{ validMultiTypes('pValue', '', 'testing ...', false, []) }, ParameterError);
    Assert.throwsErrors(()=>{ validMultiTypes('pValue', 'sss', 'testing ...', false, []) }, ParameterError);
    Assert.throwsErrors(()=>{ validMultiTypes('pValue', new String(''), 'testing ...', false, []) }, ParameterError);
    Assert.throwsErrors(()=>{ validMultiTypes('pValue', new String('sss'), 'testing ...', false, []) }, ParameterError);
    Assert.throwsErrors(()=>{ validMultiTypes('pValue', 123, 'testing ...', false, []) }, ParameterError);
    Assert.throwsErrors(()=>{ validMultiTypes('pValue', -1, 'testing ...', false, []) }, ParameterError);
    Assert.throwsErrors(()=>{ validMultiTypes('pValue', new Number(123), 'testing ...', false, []) }, ParameterError);
    Assert.throwsErrors(()=>{ validMultiTypes('pValue', new Number(-1), 'testing ...', false, []) }, ParameterError);
    Assert.throwsErrors(()=>{ validMultiTypes('pValue', true, 'testing ...', false, []) }, ParameterError);
    Assert.throwsErrors(()=>{ validMultiTypes('pValue', false, 'testing ...', false, []) }, ParameterError);
    Assert.throwsErrors(()=>{ validMultiTypes('pValue', new Boolean(true), 'testing ...', false, []) }, ParameterError);
    Assert.throwsErrors(()=>{ validMultiTypes('pValue', new Boolean(false), 'testing ...', false, []) }, ParameterError);
    Assert.throwsErrors(()=>{ validMultiTypes('pValue', Symbol('uid'), 'testing ...', false, []) }, ParameterError);
    Assert.throwsErrors(()=>{ validMultiTypes('pValue', Symbol.for('uid'), 'testing ...', false, []) }, ParameterError);
    Assert.throwsErrors(()=>{ validMultiTypes('pValue', Error, 'testing ...', false, []) }, ParameterError);
    Assert.throwsErrors(()=>{ validMultiTypes('pValue', ParameterError, 'testing ...', false, []) }, ParameterError);
    Assert.throwsErrors(()=>{ validMultiTypes('pValue', testOptionsMultiParamErr, 'testing ...', false, []) }, ParameterError);
    Assert.throwsErrors(()=>{ validMultiTypes('pValue', function(){}, 'testing ...', false, []) }, ParameterError);
    Assert.throwsErrors(()=>{ validMultiTypes('pValue', ()=>{}, 'testing ...', false, []) }, ParameterError);
    Assert.throwsErrors(()=>{ validMultiTypes('pValue', [], 'testing ...', false, []) }, ParameterError);
    Assert.throwsErrors(()=>{ validMultiTypes('pValue', [1,2,3], 'testing ...', false, []) }, ParameterError);
    Assert.throwsErrors(()=>{ validMultiTypes('pValue', [[]], 'testing ...', false, []) }, ParameterError);
    Assert.throwsErrors(()=>{ validMultiTypes('pValue', [[1,2,3],[4,5,6]], 'testing ...', false, []) }, ParameterError);
    Assert.throwsErrors(()=>{ validMultiTypes('pValue', new Map(), 'testing ...', false, []) }, ParameterError);
    Assert.throwsErrors(()=>{ validMultiTypes('pValue', new Map([['a',1],['b', 2]]), 'testing ...', false, []) }, ParameterError);
    Assert.throwsErrors(()=>{ validMultiTypes('pValue', new Set(), 'testing ...', false, []) }, ParameterError);
    Assert.throwsErrors(()=>{ validMultiTypes('pValue', new Set([1,2,3]), 'testing ...', false, []) }, ParameterError);
    Assert.throwsErrors(()=>{ validMultiTypes('pValue', /123/, 'testing ...', false, []) }, ParameterError);
    Assert.throwsErrors(()=>{ validMultiTypes('pValue', new RegExp('123'), 'testing ...', false, []) }, ParameterError);
    Assert.throwsErrors(()=>{ validMultiTypes('pValue', {}, 'testing ...', false, []) }, ParameterError);
    Assert.throwsErrors(()=>{ validMultiTypes('pValue', {a:1, b:2}, 'testing ...', false, []) }, ParameterError);
    Assert.throwsErrors(()=>{ validMultiTypes('pValue', new Object(), 'testing ...', false, []) }, ParameterError);
    // 测试 数组形式
    Assert.throwsErrors(()=>{ validMultiTypes('pValue', [undefined], 'testing ...', false, []) }, ParameterError);
    Assert.throwsErrors(()=>{ validMultiTypes('pValue', [null], 'testing ...', false, []) }, ParameterError);
    Assert.throwsErrors(()=>{ validMultiTypes('pValue', [NaN], 'testing ...', false, []) }, ParameterError);
    Assert.throwsErrors(()=>{ validMultiTypes('pValue', [''], 'testing ...', false, []) }, ParameterError);
    Assert.throwsErrors(()=>{ validMultiTypes('pValue', ['sss'], 'testing ...', false, []) }, ParameterError);
    Assert.throwsErrors(()=>{ validMultiTypes('pValue', [new String('')], 'testing ...', false, []) }, ParameterError);
    Assert.throwsErrors(()=>{ validMultiTypes('pValue', [new String('sss')], 'testing ...', false, []) }, ParameterError);
    Assert.throwsErrors(()=>{ validMultiTypes('pValue', [123], 'testing ...', false, []) }, ParameterError);
    Assert.throwsErrors(()=>{ validMultiTypes('pValue', [-1], 'testing ...', false, []) }, ParameterError);
    Assert.throwsErrors(()=>{ validMultiTypes('pValue', [new Number(123)], 'testing ...', false, []) }, ParameterError);
    Assert.throwsErrors(()=>{ validMultiTypes('pValue', [new Number(-1)], 'testing ...', false, []) }, ParameterError);
    Assert.throwsErrors(()=>{ validMultiTypes('pValue', [true], 'testing ...', false, []) }, ParameterError);
    Assert.throwsErrors(()=>{ validMultiTypes('pValue', [false], 'testing ...', false, []) }, ParameterError);
    Assert.throwsErrors(()=>{ validMultiTypes('pValue', [new Boolean(true)], 'testing ...', false, []) }, ParameterError);
    Assert.throwsErrors(()=>{ validMultiTypes('pValue', [new Boolean(false)], 'testing ...', false, []) }, ParameterError);
    Assert.throwsErrors(()=>{ validMultiTypes('pValue', [Symbol('uid')], 'testing ...', false, []) }, ParameterError);
    Assert.throwsErrors(()=>{ validMultiTypes('pValue', [Symbol.for('uid')], 'testing ...', false, []) }, ParameterError);
    Assert.throwsErrors(()=>{ validMultiTypes('pValue', [Error], 'testing ...', false, []) }, ParameterError);
    Assert.throwsErrors(()=>{ validMultiTypes('pValue', [ParameterError], 'testing ...', false, []) }, ParameterError);
    Assert.throwsErrors(()=>{ validMultiTypes('pValue', [testOptionsMultiParamErr], 'testing ...', false, []) }, ParameterError);
    Assert.throwsErrors(()=>{ validMultiTypes('pValue', [function(){}], 'testing ...', false, []) }, ParameterError);
    Assert.throwsErrors(()=>{ validMultiTypes('pValue', [()=>{}], 'testing ...', false, []) }, ParameterError);
    Assert.throwsErrors(()=>{ validMultiTypes('pValue', [[]], 'testing ...', false, []) }, ParameterError);
    Assert.throwsErrors(()=>{ validMultiTypes('pValue', [[1,2,3]], 'testing ...', false, []) }, ParameterError);
    Assert.throwsErrors(()=>{ validMultiTypes('pValue', [[[]]], 'testing ...', false, []) }, ParameterError);
    Assert.throwsErrors(()=>{ validMultiTypes('pValue', [[[1,2,3],[4,5,6]]], 'testing ...', false, []) }, ParameterError);
    Assert.throwsErrors(()=>{ validMultiTypes('pValue', [new Map()], 'testing ...', false, []) }, ParameterError);
    Assert.throwsErrors(()=>{ validMultiTypes('pValue', [new Map([['a',1],['b', 2]])], 'testing ...', false, []) }, ParameterError);
    Assert.throwsErrors(()=>{ validMultiTypes('pValue', [new Set()], 'testing ...', false, []) }, ParameterError);
    Assert.throwsErrors(()=>{ validMultiTypes('pValue', [new Set([1,2,3])], 'testing ...', false, []) }, ParameterError);
    Assert.throwsErrors(()=>{ validMultiTypes('pValue', [/123/], 'testing ...', false, []) }, ParameterError);
    Assert.throwsErrors(()=>{ validMultiTypes('pValue', [new RegExp('123')], 'testing ...', false, []) }, ParameterError);
    Assert.throwsErrors(()=>{ validMultiTypes('pValue', [{}], 'testing ...', false, []) }, ParameterError);
    Assert.throwsErrors(()=>{ validMultiTypes('pValue', [{a:1, b:2}], 'testing ...', false, []) }, ParameterError);
    Assert.throwsErrors(()=>{ validMultiTypes('pValue', [new Object()], 'testing ...', false, []) }, ParameterError);
    // 测试合规的值
    Assert.throwsErrorsNone(()=>{ validMultiTypes('pValue', VDATA_TYPE.string, 'testing ...', false, []); });
    Assert.throwsErrorsNone(()=>{ validMultiTypes('pValue', [VDATA_TYPE.string], 'testing ...', false, []); });
    Assert.throwsErrors(()=>{ validMultiTypes(123, VDATA_TYPE.string, 'testing ...', false, []) }, VerificationError);
    Assert.throwsErrorsNone(()=>{ validMultiTypes(123, [VDATA_TYPE.string, VDATA_TYPE.number], 'testing ...', false, []) });
    // 第2个参数 inErrorInfo 非空字符串
    Assert.throwsErrorsNone(()=>{ validMultiTypes('pValue', VDATA_TYPE.string, undefined, false, []) }); //默认值
    Assert.throwsErrors(()=>{ validMultiTypes('pValue', VDATA_TYPE.string, null, false, []) }, ParameterError);
    Assert.throwsErrors(()=>{ validMultiTypes('pValue', VDATA_TYPE.string, NaN, false, []) }, ParameterError);
    Assert.throwsErrors(()=>{ validMultiTypes('pValue', VDATA_TYPE.string, '', false, []) }, ParameterError);
    Assert.throwsErrorsNone(()=>{ validMultiTypes('pValue', VDATA_TYPE.string, 'sss', false, []) });
    Assert.throwsErrors(()=>{ validMultiTypes('pValue', VDATA_TYPE.string, new String(''), false, []) }, ParameterError);
    Assert.throwsErrorsNone(()=>{ validMultiTypes('pValue', VDATA_TYPE.string, new String('sss'), false, []) });
    Assert.throwsErrors(()=>{ validMultiTypes('pValue', VDATA_TYPE.string, 123, false, []) }, ParameterError);
    Assert.throwsErrors(()=>{ validMultiTypes('pValue', VDATA_TYPE.string, -1, false, []) }, ParameterError);
    Assert.throwsErrors(()=>{ validMultiTypes('pValue', VDATA_TYPE.string, new Number(123), false, []) }, ParameterError);
    Assert.throwsErrors(()=>{ validMultiTypes('pValue', VDATA_TYPE.string, new Number(-1), false, []) }, ParameterError);
    Assert.throwsErrors(()=>{ validMultiTypes('pValue', VDATA_TYPE.string, true, false, []) }, ParameterError);
    Assert.throwsErrors(()=>{ validMultiTypes('pValue', VDATA_TYPE.string, false, false, []) }, ParameterError);
    Assert.throwsErrors(()=>{ validMultiTypes('pValue', VDATA_TYPE.string, new Boolean(true), false, []) }, ParameterError);
    Assert.throwsErrors(()=>{ validMultiTypes('pValue', VDATA_TYPE.string, new Boolean(false), false, []) }, ParameterError);
    Assert.throwsErrors(()=>{ validMultiTypes('pValue', VDATA_TYPE.string, Symbol('uid'), false, []) }, ParameterError);
    Assert.throwsErrors(()=>{ validMultiTypes('pValue', VDATA_TYPE.string, Symbol.for('uid'), false, []) }, ParameterError);
    Assert.throwsErrors(()=>{ validMultiTypes('pValue', VDATA_TYPE.string, Error, false, []) }, ParameterError);
    Assert.throwsErrors(()=>{ validMultiTypes('pValue', VDATA_TYPE.string, ParameterError, false, []) }, ParameterError);
    Assert.throwsErrors(()=>{ validMultiTypes('pValue', VDATA_TYPE.string, testOptionsMultiParamErr, false, []) }, ParameterError);
    Assert.throwsErrors(()=>{ validMultiTypes('pValue', VDATA_TYPE.string, function(){}, false, []) }, ParameterError);
    Assert.throwsErrors(()=>{ validMultiTypes('pValue', VDATA_TYPE.string, ()=>{}, false, []) }, ParameterError);
    Assert.throwsErrors(()=>{ validMultiTypes('pValue', VDATA_TYPE.string, [], false, []) }, ParameterError);
    Assert.throwsErrors(()=>{ validMultiTypes('pValue', VDATA_TYPE.string, [1,2,3], false, []) }, ParameterError);
    Assert.throwsErrors(()=>{ validMultiTypes('pValue', VDATA_TYPE.string, [[]], false, []) }, ParameterError);
    Assert.throwsErrors(()=>{ validMultiTypes('pValue', VDATA_TYPE.string, [[1,2,3],[4,5,6]], false, []) }, ParameterError);
    Assert.throwsErrors(()=>{ validMultiTypes('pValue', VDATA_TYPE.string, new Map(), false, []) }, ParameterError);
    Assert.throwsErrors(()=>{ validMultiTypes('pValue', VDATA_TYPE.string, new Map([['a',1],['b', 2]]), false, []) }, ParameterError);
    Assert.throwsErrors(()=>{ validMultiTypes('pValue', VDATA_TYPE.string, new Set(), false, []) }, ParameterError);
    Assert.throwsErrors(()=>{ validMultiTypes('pValue', VDATA_TYPE.string, new Set([1,2,3]), false, []) }, ParameterError);
    Assert.throwsErrors(()=>{ validMultiTypes('pValue', VDATA_TYPE.string, /123/, false, []) }, ParameterError);
    Assert.throwsErrors(()=>{ validMultiTypes('pValue', VDATA_TYPE.string, new RegExp('123'), false, []) }, ParameterError);
    Assert.throwsErrors(()=>{ validMultiTypes('pValue', VDATA_TYPE.string, {}, false, []) }, ParameterError);
    Assert.throwsErrors(()=>{ validMultiTypes('pValue', VDATA_TYPE.string, {a:1, b:2}, false, []) }, ParameterError);
    Assert.throwsErrors(()=>{ validMultiTypes('pValue', VDATA_TYPE.string, new Object(), false, []) }, ParameterError);
    // 第3个参数 inCanBeEmpty 布尔值
    Assert.throwsErrorsNone(()=>{ validMultiTypes('pValue', VDATA_TYPE.string, 'testing ...', undefined, []); }); // 默认值
    Assert.throwsErrors(()=>{ validMultiTypes('pValue', VDATA_TYPE.string, 'testing ...', null, []); }, ParameterError);
    Assert.throwsErrors(()=>{ validMultiTypes('pValue', VDATA_TYPE.string, 'testing ...', NaN, []); }, ParameterError);
    Assert.throwsErrors(()=>{ validMultiTypes('pValue', VDATA_TYPE.string, 'testing ...', '', []); }, ParameterError);
    Assert.throwsErrors(()=>{ validMultiTypes('pValue', VDATA_TYPE.string, 'testing ...', 'sss', []); }, ParameterError);
    Assert.throwsErrors(()=>{ validMultiTypes('pValue', VDATA_TYPE.string, 'testing ...', new String(''), []); }, ParameterError);
    Assert.throwsErrors(()=>{ validMultiTypes('pValue', VDATA_TYPE.string, 'testing ...', new String('sss'), []); }, ParameterError);
    Assert.throwsErrors(()=>{ validMultiTypes('pValue', VDATA_TYPE.string, 'testing ...', 123, []); }, ParameterError);
    Assert.throwsErrors(()=>{ validMultiTypes('pValue', VDATA_TYPE.string, 'testing ...', -1, []); }, ParameterError);
    Assert.throwsErrors(()=>{ validMultiTypes('pValue', VDATA_TYPE.string, 'testing ...', new Number(123), []); }, ParameterError);
    Assert.throwsErrors(()=>{ validMultiTypes('pValue', VDATA_TYPE.string, 'testing ...', new Number(-1), []); }, ParameterError);
    Assert.throwsErrorsNone(()=>{ validMultiTypes('pValue', VDATA_TYPE.string, 'testing ...', true, []); });
    Assert.throwsErrorsNone(()=>{ validMultiTypes('pValue', VDATA_TYPE.string, 'testing ...', false, []); });
    Assert.throwsErrorsNone(()=>{ validMultiTypes('pValue', VDATA_TYPE.string, 'testing ...', new Boolean(true), []); });
    Assert.throwsErrorsNone(()=>{ validMultiTypes('pValue', VDATA_TYPE.string, 'testing ...', new Boolean(false), []); });
    Assert.throwsErrors(()=>{ validMultiTypes('pValue', VDATA_TYPE.string, 'testing ...', Symbol('uid'), []); }, ParameterError);
    Assert.throwsErrors(()=>{ validMultiTypes('pValue', VDATA_TYPE.string, 'testing ...', Symbol.for('uid'), []); }, ParameterError);
    Assert.throwsErrors(()=>{ validMultiTypes('pValue', VDATA_TYPE.string, 'testing ...', Error, []); }, ParameterError);
    Assert.throwsErrors(()=>{ validMultiTypes('pValue', VDATA_TYPE.string, 'testing ...', ParameterError, []); }, ParameterError);
    Assert.throwsErrors(()=>{ validMultiTypes('pValue', VDATA_TYPE.string, 'testing ...', testOptionsMultiParamErr, []); }, ParameterError);
    Assert.throwsErrors(()=>{ validMultiTypes('pValue', VDATA_TYPE.string, 'testing ...', function(){}, []); }, ParameterError);
    Assert.throwsErrors(()=>{ validMultiTypes('pValue', VDATA_TYPE.string, 'testing ...', ()=>{}, []); }, ParameterError);
    Assert.throwsErrors(()=>{ validMultiTypes('pValue', VDATA_TYPE.string, 'testing ...', [], []); }, ParameterError);
    Assert.throwsErrors(()=>{ validMultiTypes('pValue', VDATA_TYPE.string, 'testing ...', [1,2,3], []); }, ParameterError);
    Assert.throwsErrors(()=>{ validMultiTypes('pValue', VDATA_TYPE.string, 'testing ...', [[]], []); }, ParameterError);
    Assert.throwsErrors(()=>{ validMultiTypes('pValue', VDATA_TYPE.string, 'testing ...', [[1,2,3],[4,5,6]], []); }, ParameterError);
    Assert.throwsErrors(()=>{ validMultiTypes('pValue', VDATA_TYPE.string, 'testing ...', new Map(), []); }, ParameterError);
    Assert.throwsErrors(()=>{ validMultiTypes('pValue', VDATA_TYPE.string, 'testing ...', new Map([['a',1],['b', 2]]), []); }, ParameterError);
    Assert.throwsErrors(()=>{ validMultiTypes('pValue', VDATA_TYPE.string, 'testing ...', new Set(), []); }, ParameterError);
    Assert.throwsErrors(()=>{ validMultiTypes('pValue', VDATA_TYPE.string, 'testing ...', new Set([1,2,3]), []); }, ParameterError);
    Assert.throwsErrors(()=>{ validMultiTypes('pValue', VDATA_TYPE.string, 'testing ...', /123/, []); }, ParameterError);
    Assert.throwsErrors(()=>{ validMultiTypes('pValue', VDATA_TYPE.string, 'testing ...', new RegExp('123'), []); }, ParameterError);
    Assert.throwsErrors(()=>{ validMultiTypes('pValue', VDATA_TYPE.string, 'testing ...', {}, []); }, ParameterError);
    Assert.throwsErrors(()=>{ validMultiTypes('pValue', VDATA_TYPE.string, 'testing ...', {a:1, b:2}, []); }, ParameterError);
    Assert.throwsErrors(()=>{ validMultiTypes('pValue', VDATA_TYPE.string, 'testing ...', new Object(), []); }, ParameterError);
    // 第4个参数 inTargetTypeArr 类型数组
    Assert.throwsErrorsNone(()=>{ validMultiTypes('pValue', VDATA_TYPE.string, 'testing ...', false, undefined); }); // 默认值
    Assert.throwsErrors(()=>{ validMultiTypes('pValue', VDATA_TYPE.string, 'testing ...', false, null); }, ParameterError);
    Assert.throwsErrors(()=>{ validMultiTypes('pValue', VDATA_TYPE.string, 'testing ...', false, NaN); }, ParameterError);
    Assert.throwsErrors(()=>{ validMultiTypes('pValue', VDATA_TYPE.string, 'testing ...', false, ''); }, ParameterError);
    Assert.throwsErrors(()=>{ validMultiTypes('pValue', VDATA_TYPE.string, 'testing ...', false, 'sss'); }, ParameterError);
    Assert.throwsErrors(()=>{ validMultiTypes('pValue', VDATA_TYPE.string, 'testing ...', false, new String('')); }, ParameterError);
    Assert.throwsErrors(()=>{ validMultiTypes('pValue', VDATA_TYPE.string, 'testing ...', false, new String('sss')); }, ParameterError);
    Assert.throwsErrors(()=>{ validMultiTypes('pValue', VDATA_TYPE.string, 'testing ...', false, 123); }, ParameterError);
    Assert.throwsErrors(()=>{ validMultiTypes('pValue', VDATA_TYPE.string, 'testing ...', false, -1); }, ParameterError);
    Assert.throwsErrors(()=>{ validMultiTypes('pValue', VDATA_TYPE.string, 'testing ...', false, new Number(123)); }, ParameterError);
    Assert.throwsErrors(()=>{ validMultiTypes('pValue', VDATA_TYPE.string, 'testing ...', false, new Number(-1)); }, ParameterError);
    Assert.throwsErrors(()=>{ validMultiTypes('pValue', VDATA_TYPE.string, 'testing ...', false, true); }, ParameterError);
    Assert.throwsErrors(()=>{ validMultiTypes('pValue', VDATA_TYPE.string, 'testing ...', false, false); }, ParameterError);
    Assert.throwsErrors(()=>{ validMultiTypes('pValue', VDATA_TYPE.string, 'testing ...', false, new Boolean(true)); }, ParameterError);
    Assert.throwsErrors(()=>{ validMultiTypes('pValue', VDATA_TYPE.string, 'testing ...', false, new Boolean(false)); }, ParameterError);
    Assert.throwsErrors(()=>{ validMultiTypes('pValue', VDATA_TYPE.string, 'testing ...', false, Symbol('uid')); }, ParameterError);
    Assert.throwsErrors(()=>{ validMultiTypes('pValue', VDATA_TYPE.string, 'testing ...', false, Symbol.for('uid')); }, ParameterError);
    Assert.throwsErrors(()=>{ validMultiTypes('pValue', VDATA_TYPE.string, 'testing ...', false, Error); }, ParameterError);
    Assert.throwsErrors(()=>{ validMultiTypes('pValue', VDATA_TYPE.string, 'testing ...', false, ParameterError); }, ParameterError);
    Assert.throwsErrors(()=>{ validMultiTypes('pValue', VDATA_TYPE.string, 'testing ...', false, testOptionsMultiParamErr); }, ParameterError);
    Assert.throwsErrors(()=>{ validMultiTypes('pValue', VDATA_TYPE.string, 'testing ...', false, function(){}); }, ParameterError);
    Assert.throwsErrors(()=>{ validMultiTypes('pValue', VDATA_TYPE.string, 'testing ...', false, ()=>{}); }, ParameterError);
    Assert.throwsErrorsNone(()=>{ validMultiTypes('pValue', VDATA_TYPE.string, 'testing ...', false, []); });
    Assert.throwsErrorsNone(()=>{ validMultiTypes('pValue', VDATA_TYPE.string, 'testing ...', false, [1,2,3]); });
    Assert.throwsErrorsNone(()=>{ validMultiTypes('pValue', VDATA_TYPE.string, 'testing ...', false, [[]]); });
    Assert.throwsErrorsNone(()=>{ validMultiTypes('pValue', VDATA_TYPE.string, 'testing ...', false, [[1,2,3],[4,5,6]]); });
    Assert.throwsErrors(()=>{ validMultiTypes('pValue', VDATA_TYPE.string, 'testing ...', false, new Map()); }, ParameterError);
    Assert.throwsErrors(()=>{ validMultiTypes('pValue', VDATA_TYPE.string, 'testing ...', false, new Map([['a',1],['b', 2]])); }, ParameterError);
    Assert.throwsErrors(()=>{ validMultiTypes('pValue', VDATA_TYPE.string, 'testing ...', false, new Set()); }, ParameterError);
    Assert.throwsErrors(()=>{ validMultiTypes('pValue', VDATA_TYPE.string, 'testing ...', false, new Set([1,2,3])); }, ParameterError);
    Assert.throwsErrors(()=>{ validMultiTypes('pValue', VDATA_TYPE.string, 'testing ...', false, /123/); }, ParameterError);
    Assert.throwsErrors(()=>{ validMultiTypes('pValue', VDATA_TYPE.string, 'testing ...', false, new RegExp('123')); }, ParameterError);
    Assert.throwsErrors(()=>{ validMultiTypes('pValue', VDATA_TYPE.string, 'testing ...', false, {}); }, ParameterError);
    Assert.throwsErrors(()=>{ validMultiTypes('pValue', VDATA_TYPE.string, 'testing ...', false, {a:1, b:2}); }, ParameterError);
    Assert.throwsErrors(()=>{ validMultiTypes('pValue', VDATA_TYPE.string, 'testing ...', false, new Object()); }, ParameterError);
    // 这里补充第4个处理。target 开头的类型，会校验 类型数组是否有值，而且值是类型。
    Assert.throwsErrors(()=>{ validMultiTypes('pValue', VDATA_TYPE.targetObj, '测试信息', false, []); }, ParameterError);
    Assert.throwsErrors(()=>{ validMultiTypes('pValue', VDATA_TYPE.targetObj, '测试信息', false, [1,2,3]); }, ParameterError);
    Assert.throwsErrors(()=>{ validMultiTypes('pValue', VDATA_TYPE.targetObj, '测试信息', false, [String, 123]); }, ParameterError);
    Assert.throwsErrorsNone(()=>{ validMultiTypes('pValue', VDATA_TYPE.targetObj, '测试信息', false, [String]); });
    Assert.throwsErrorsNone(()=>{ validMultiTypes('pValue', VDATA_TYPE.targetObj, '测试信息', false, [String, Number]); });
    //
    Assert.throwsErrors(()=>{ validMultiTypes('pValue', VDATA_TYPE.targetObjSet, '测试信息', false, []); }, ParameterError);
    Assert.throwsErrors(()=>{ validMultiTypes('pValue', VDATA_TYPE.targetObjSet, '测试信息', false, [1,2,3]); }, ParameterError);
    Assert.throwsErrors(()=>{ validMultiTypes('pValue', VDATA_TYPE.targetObjSet, '测试信息', false, [String, 123]); }, ParameterError);
    Assert.throwsErrorsNone(()=>{ validMultiTypes(new Set('pValue'), VDATA_TYPE.targetObjSet, '测试信息', false, [String]); });
    Assert.throwsErrorsNone(()=>{ validMultiTypes(new Set('pValue'), VDATA_TYPE.targetObjSet, '测试信息', false, [String, Number]); });
    //
    Assert.throwsErrors(()=>{ validMultiTypes('pValue', VDATA_TYPE.targetObjArray, '测试信息', false, []); }, ParameterError);
    Assert.throwsErrors(()=>{ validMultiTypes('pValue', VDATA_TYPE.targetObjArray, '测试信息', false, [1,2,3]); }, ParameterError);
    Assert.throwsErrors(()=>{ validMultiTypes('pValue', VDATA_TYPE.targetObjArray, '测试信息', false, [String, 123]); }, ParameterError);
    Assert.throwsErrorsNone(()=>{ validMultiTypes(['pValue'], VDATA_TYPE.targetObjArray, '测试信息', false, [String]); });
    Assert.throwsErrorsNone(()=>{ validMultiTypes(['pValue'], VDATA_TYPE.targetObjArray, '测试信息', false, [String, Number]); });
    //
    Assert.throwsErrors(()=>{ validMultiTypes('pValue', VDATA_TYPE.targetObj2DArray, '测试信息', false, []); }, ParameterError);
    Assert.throwsErrors(()=>{ validMultiTypes('pValue', VDATA_TYPE.targetObj2DArray, '测试信息', false, [1,2,3]); }, ParameterError);
    Assert.throwsErrors(()=>{ validMultiTypes('pValue', VDATA_TYPE.targetObj2DArray, '测试信息', false, [String, 123]); }, ParameterError);
    Assert.throwsErrorsNone(()=>{ validMultiTypes([['pValue']], VDATA_TYPE.targetObj2DArray, '测试信息', false, [String]); });
    Assert.throwsErrorsNone(()=>{ validMultiTypes([['pValue']], VDATA_TYPE.targetObj2DArray, '测试信息', false, [String, Number]); });

    // 这里测试一下 JavaScript 的默认处理。当你不写参数，默认会填充一个。
    validMultiTypes('aaa');
    validMultiTypes('aaa', VDATA_TYPE.string);
    validMultiTypes('aaa', VDATA_TYPE.string, 'error testing ...');
    validMultiTypes('aaa', VDATA_TYPE.string, 'error testing ...', true);
    validMultiTypes('aaa', VDATA_TYPE.string, 'error testing ...', true, []);
}

function testOptionsMultiValues(){
    // 这里是 validMultiTypes 函数测试。对于个这个函数，它实际上是在 validSingleType 基础上处理的。所以，只需要做一些 参数验证 和 数值校验即可。

    // 这里是校验通过后，数值的比对处理。因为要保证校验后，数据能够正常获取。

    // 构建一些 HTML Element 和 HTML Element List
    let htmlStr = `
    <div>
        <input type="text" id="input1" name="inputtester" value=""/>
        <input type="text" id="input2" name="inputtester" value=""/>
    </div>
    `;
    let myDom = DOM_PARSER.parseFromString(htmlStr, 'text/html');
    let htmlElem1 = myDom.getElementById('input1');
    let htmlElem2 = myDom.querySelector('#input2');
    let htmlElemList1 = myDom.getElementsByTagName('input');
    let htmlElemList2 = myDom.querySelectorAll('input');
    
    // null
    let null1 = null;
    let null2 = undefined;
    let null3 = NaN;
    let null1result = validMultiTypes(null1, VDATA_TYPE.null, 'testing ...');
    let null2result = validMultiTypes(null2, VDATA_TYPE.null, 'testing ...');
    let null3result = validMultiTypes(null3, VDATA_TYPE.null, 'testing ...');
    Assert.equalsStrictly(null1, null1result);
    Assert.equalsStrictly(null2, null2result);
    Assert.equalsStrictly(true, Number.isNaN(null3result));
    // string
    let str1 = 'aaa'
    let str2 = '   ';
    let str3 = '';
    let str4 = new String(str1);
    let str5 = new String(str2);
    let str6 = new String(str3);
    let str1result = validMultiTypes(str1, VDATA_TYPE.string, 'testing ...');
    let str2result = validMultiTypes(str2, VDATA_TYPE.string, 'testing ...', true);
    let str3result = validMultiTypes(str3, VDATA_TYPE.string, 'testing ...', true);
    let str4result = validMultiTypes(str4, VDATA_TYPE.string, 'testing ...');
    let str5result = validMultiTypes(str5, VDATA_TYPE.string, 'testing ...', true);
    let str6result = validMultiTypes(str6, VDATA_TYPE.string, 'testing ...', true);
    Assert.equalsStrictly(str1, str1result);
    Assert.equalsStrictly(str2, str2result);
    Assert.equalsStrictly(str3, str3result);
    Assert.equalsStrictly(str4.valueOf(), str4result);
    Assert.equalsStrictly(str5.valueOf(), str5result);
    Assert.equalsStrictly(str6.valueOf(), str6result);
    // number
    let num1 = 123;
    let num2 = -1;
    let num3 = new Number('123');
    let num4 = new Number('-1');
    let num1result = validMultiTypes(num1, VDATA_TYPE.number, 'testing ...');
    let num2result = validMultiTypes(num2, VDATA_TYPE.number, 'testing ...');
    let num3result = validMultiTypes(num3, VDATA_TYPE.number, 'testing ...');
    let num4result = validMultiTypes(num4, VDATA_TYPE.number, 'testing ...');
    Assert.equalsStrictly(num1, num1result);
    Assert.equalsStrictly(num2, num2result);
    Assert.equalsStrictly(num3.valueOf(), num3result);
    Assert.equalsStrictly(num4.valueOf(), num4result);
    // boolean
    let bool1 = true;
    let bool2 = false;
    let bool3 = new Boolean(true);
    let bool4 = new Boolean(false);
    let bool1result = validMultiTypes(bool1, VDATA_TYPE.boolean, 'testing ...');
    let bool2result = validMultiTypes(bool2, VDATA_TYPE.boolean, 'testing ...');
    let bool3result = validMultiTypes(bool3, VDATA_TYPE.boolean, 'testing ...');
    let bool4result = validMultiTypes(bool4, VDATA_TYPE.boolean, 'testing ...');
    Assert.equalsStrictly(bool1, bool1result);
    Assert.equalsStrictly(bool2, bool2result);
    Assert.equalsStrictly(bool3.valueOf(), bool3result);
    Assert.equalsStrictly(bool4.valueOf(), bool4result);
    // symbol
    let sym1 = Symbol('sym1');
    let sym2 = Symbol.for('sym2');
    let sym1result = validMultiTypes(sym1, VDATA_TYPE.symbol, 'testing ...');
    let sym2result = validMultiTypes(sym2, VDATA_TYPE.symbol, 'testing ...');
    Assert.equalsStrictly(sym1, sym1result);
    Assert.equalsStrictly(sym2, sym2result);
    // func
    let fun1 = ()=>{};
    let fun2 = function(){}
    let fun3 = testOptionsFunc;
    let fun1result = validMultiTypes(fun1, VDATA_TYPE.func, 'testing ...');
    let fun2result = validMultiTypes(fun2, VDATA_TYPE.func, 'testing ...');
    let fun3result = validMultiTypes(fun3, VDATA_TYPE.func, 'testing ...');
    Assert.equalsStrictly(fun1, fun1result);
    Assert.equalsStrictly(fun2, fun2result);
    Assert.equalsStrictly(fun3, fun3result);
    // cls
    let cls1 = Error ;
    let cls2 = Assert ;
    let cls1result = validMultiTypes(cls1, VDATA_TYPE.cls, 'testing ...');
    let cls2result = validMultiTypes(cls2, VDATA_TYPE.cls, 'testing ...');
    Assert.equalsStrictly(cls1, cls1result);
    Assert.equalsStrictly(cls2, cls2result);
    // array
    let arr1 = [];
    let arr2 = [1,2,3];
    let arr1result = validMultiTypes(arr1, VDATA_TYPE.array, 'testing ...', true);
    let arr2result = validMultiTypes(arr2, VDATA_TYPE.array, 'testing ...', true);
    Assert.equalsStrictly(arr1, arr1result);
    Assert.equalsStrictly(arr2, arr2result);
    // 2dArray
    let arr2d1 = [[]];
    let arr2d2 = [[1,2,3]];
    let arr2d1result = validMultiTypes(arr2d1, VDATA_TYPE.array, 'testing ...', true);
    let arr2d2result = validMultiTypes(arr2d2, VDATA_TYPE.array, 'testing ...', true);
    Assert.equalsStrictly(arr2d1, arr2d1result);
    Assert.equalsStrictly(arr2d2, arr2d2result);
    // set
    let set1 = new Set();
    let set2 = new Set([1,2,3]);
    let set1result = validMultiTypes(set1, VDATA_TYPE.set, 'testing ...', true);
    let set2result = validMultiTypes(set2, VDATA_TYPE.set, 'testing ...', true);
    Assert.equalsStrictly(set1, set1result);
    Assert.equalsStrictly(set2, set2result);
    // map
    let map1 = new Map();
    let map2 = new Map([['a', 1],['b', 2]]);
    let map1result = validMultiTypes(map1, VDATA_TYPE.map, 'testing ...', true);
    let map2result = validMultiTypes(map2, VDATA_TYPE.map, 'testing ...', true);
    Assert.equalsStrictly(map1, map1result);
    Assert.equalsStrictly(map2, map2result);
    // regexp
    let reg1 = /123/;
    let reg2 = new RegExp('123');
    let reg1result = validMultiTypes(reg1, VDATA_TYPE.regexp, 'testing ...');
    let reg2result = validMultiTypes(reg2, VDATA_TYPE.regexp, 'testing ...');
    Assert.equalsStrictly(reg1, reg1result);
    Assert.equalsStrictly(reg2, reg2result);
    // objectliteral
    let objliteral1 = {};
    let objliteral2 = {a:1, b:2};
    let objliteral3 = new Object();
    let objliteral1result = validMultiTypes(objliteral1, VDATA_TYPE.objectliteral, 'testing ...');
    let objliteral2result = validMultiTypes(objliteral2, VDATA_TYPE.objectliteral, 'testing ...');
    let objliteral3result = validMultiTypes(objliteral3, VDATA_TYPE.objectliteral, 'testing ...');
    Assert.equalsStrictly(objliteral1, objliteral1result);
    Assert.equalsStrictly(objliteral2, objliteral2result);
    Assert.equalsStrictly(objliteral3, objliteral3result);
    // object
    let obj1 = {};
    let obj2 = new Object();
    let obj3 = new String();
    let obj1result = validMultiTypes(obj1, VDATA_TYPE.object, 'testing ...');
    let obj2result = validMultiTypes(obj2, VDATA_TYPE.object, 'testing ...');
    let obj3result = validMultiTypes(obj3, VDATA_TYPE.object, 'testing ...');
    Assert.equalsStrictly(obj1, obj1result);
    Assert.equalsStrictly(obj2, obj2result);
    Assert.equalsStrictly(obj3, obj3result);
    // htmlElem
    let elem1 = htmlElem1;
    let elem2 = htmlElem2;
    let elem1result = validMultiTypes(elem1, VDATA_TYPE.htmlElem, 'testing ...');
    let elem2result = validMultiTypes(elem2, VDATA_TYPE.htmlElem, 'testing ...');
    Assert.equalsStrictly(elem1, elem1result);
    Assert.equalsStrictly(elem2, elem2result);
    // htmlElemList
    let elemList1 = htmlElemList1;
    let elemList2 = htmlElemList2;
    let elemList1result = validMultiTypes(elemList1, VDATA_TYPE.htmlElemList, 'testing ...');
    let elemList2result = validMultiTypes(elemList2, VDATA_TYPE.htmlElemList, 'testing ...');
    Assert.equalsStrictly(elemList1, elemList1result);
    Assert.equalsStrictly(elemList2, elemList2result);
    // targetobj
    let tarObj1 = '123'
    let tarObj2 = 123;
    let tarObj3 = /123/;
    let tarObj1result = validMultiTypes(tarObj1, VDATA_TYPE.targetObj, 'testing ...', false, [String, Number, RegExp]);
    let tarObj2result = validMultiTypes(tarObj2, VDATA_TYPE.targetObj, 'testing ...', false, [String, Number, RegExp]);
    let tarObj3result = validMultiTypes(tarObj3, VDATA_TYPE.targetObj, 'testing ...', false, [String, Number, RegExp]);
    Assert.equalsStrictly(tarObj1, tarObj1result);
    Assert.equalsStrictly(tarObj2, tarObj2result);
    Assert.equalsStrictly(tarObj3, tarObj3result);
    // targetobjSet
    let tarobjSet1 = new Set();
    let tarobjSet2 = new Set([1, true, 'aa']);
    let tarobjSet1result = validMultiTypes(tarobjSet1, VDATA_TYPE.targetObjSet, 'testing ...', true, [String, Boolean, Number]);
    let tarobjSet2result = validMultiTypes(tarobjSet2, VDATA_TYPE.targetObjSet, 'testing ...', true, [String, Boolean, Number]);
    Assert.equalsStrictly(tarobjSet1, tarobjSet1result);
    Assert.equalsStrictly(tarobjSet2, tarobjSet2result);
    // targetobjArray
    let tarobjArr1 = [];
    let tarobjArr2 = [1, true, 'aa'];
    let tarobjArr1result = validMultiTypes(tarobjArr1, VDATA_TYPE.array, 'testing ...', true, [String, Number, Boolean]);
    let tarobjArr2result = validMultiTypes(tarobjArr2, VDATA_TYPE.array, 'testing ...', true, [String, Number, Boolean]);
    Assert.equalsStrictly(tarobjArr1, tarobjArr1result);
    Assert.equalsStrictly(tarobjArr2, tarobjArr2result);
    // targetobj2DArray
    let tarObjArr2d1 = [[]];
    let tarObjArr2d2 = [[1, true, 'aa']];
    let tarObjArr2d1result = validMultiTypes(tarObjArr2d1, VDATA_TYPE.array2d, 'testing ...', true, [String, Number, Boolean]);
    let tarObjArr2d2result = validMultiTypes(tarObjArr2d2, VDATA_TYPE.array2d, 'testing ...', true, [String, Number, Boolean]);
    Assert.equalsStrictly(tarObjArr2d1, tarObjArr2d1result);
    Assert.equalsStrictly(tarObjArr2d2, tarObjArr2d2result);

    // 这里最后再测试下 多个数据 类型的处理。因为 muliti 方法就是为了处理 多类型判断才设计的。
    // 假设 我们的参数可以传入 函数、正则，2个类型。则开始测试
    let testMultiObj1 = ()=>{ return true; }; 
    let testMultiObj2 = /123/; 
    let testMultiObj3 = new RegExp('123'); 
    // 测试
    Assert.throwsErrorsNone(()=>{ validMultiTypes(testMultiObj1, VDATA_TYPE.func, 'testing ...', true, []); });
    Assert.throwsErrors(()=>{ validMultiTypes(testMultiObj2, VDATA_TYPE.func, 'testing ...', true, []); }, VerificationError);
    Assert.throwsErrors(()=>{ validMultiTypes(testMultiObj3, VDATA_TYPE.func, 'testing ...', true, []); }, VerificationError);
    //
    Assert.throwsErrors(()=>{ validMultiTypes(testMultiObj1, VDATA_TYPE.regexp, 'testing ...', true, []); }, VerificationError);
    Assert.throwsErrorsNone(()=>{ validMultiTypes(testMultiObj2, VDATA_TYPE.regexp, 'testing ...', true, []); });
    Assert.throwsErrorsNone(()=>{ validMultiTypes(testMultiObj3, VDATA_TYPE.regexp, 'testing ...', true, []); });
    // 2个类型，都允许
    Assert.throwsErrorsNone(()=>{ validMultiTypes(testMultiObj1, [VDATA_TYPE.func, VDATA_TYPE.regexp], 'testing ...', true, []); });
    Assert.throwsErrorsNone(()=>{ validMultiTypes(testMultiObj2, [VDATA_TYPE.func, VDATA_TYPE.regexp], 'testing ...', true, []); });
    Assert.throwsErrorsNone(()=>{ validMultiTypes(testMultiObj3, [VDATA_TYPE.func, VDATA_TYPE.regexp], 'testing ...', true, []); });
    // 最后校验是否获取到同一个值
    let finalResult1 = validMultiTypes(testMultiObj1, [VDATA_TYPE.func, VDATA_TYPE.regexp], 'testing ...', true, []);
    let finalResult2 = validMultiTypes(testMultiObj2, [VDATA_TYPE.func, VDATA_TYPE.regexp], 'testing ...', true, []);
    let finalResult3 = validMultiTypes(testMultiObj3, [VDATA_TYPE.func, VDATA_TYPE.regexp], 'testing ...', true, []);
    Assert.equalsStrictly(testMultiObj1, finalResult1);
    Assert.equalsStrictly(testMultiObj2, finalResult2);
    Assert.equalsStrictly(testMultiObj3, finalResult3);
}

// ========= 导出测试函数
export {
    testOptionsConstant, testOptionsParamErr, 
    testOptionsNull, testOptionsString, testOptionsNumber, testOptionsBoolean, testOptionsSymbol,
    testOptionsFunc, testOptionsCls, testOptionsArray, testOptionsArray2d, testOptionsSet,
    testOptionsMap, testOptionsRegExp, testOptionsObjectLiteral, testOptionsObject, testOptionsHtmlElem,
    testOptionsHtmlElemList, testOptionsTargetObject, testOptionsTargetObjectSet, testOptionsTargetObjectArr, testOptionsTargetObjectArr2d,
    testOptionsValueChecking,
    testOptionsMultiParamErr, testOptionsMultiValues
}
