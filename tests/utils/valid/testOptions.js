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
import { VDATA_TYPE, validSingleType, validMultiTypes, checkSingleConfig, checkConfigs, validTypesByConfigs } from "../../../utils/valid/options.js";
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

function testOptionsCheckSingleConfig(){
    
    // 这里测试 checkSingleConfig 函数是否正常 它有5个参数要测试，第一个是 config 本身。然后是 每个小参数
    // config
    Assert.throwsErrorsWithMsg(()=>{ checkSingleConfig(undefined); }, /checkSingleConfig/, ParameterError);
    Assert.throwsErrorsWithMsg(()=>{ checkSingleConfig(null); }, /checkSingleConfig/, ParameterError);
    Assert.throwsErrorsWithMsg(()=>{ checkSingleConfig(NaN); }, /checkSingleConfig/, ParameterError);
    Assert.throwsErrorsWithMsg(()=>{ checkSingleConfig(''); }, /checkSingleConfig/, ParameterError);
    Assert.throwsErrorsWithMsg(()=>{ checkSingleConfig('sss'); }, /checkSingleConfig/, ParameterError);
    Assert.throwsErrorsWithMsg(()=>{ checkSingleConfig(new String('')); }, /checkSingleConfig/, ParameterError);
    Assert.throwsErrorsWithMsg(()=>{ checkSingleConfig(new String('sss')); }, /checkSingleConfig/, ParameterError);
    Assert.throwsErrorsWithMsg(()=>{ checkSingleConfig(123); }, /checkSingleConfig/, ParameterError);
    Assert.throwsErrorsWithMsg(()=>{ checkSingleConfig(-1); }, /checkSingleConfig/, ParameterError);
    Assert.throwsErrorsWithMsg(()=>{ checkSingleConfig(new Number(123)); }, /checkSingleConfig/, ParameterError);
    Assert.throwsErrorsWithMsg(()=>{ checkSingleConfig(new Number(-1)); }, /checkSingleConfig/, ParameterError);
    Assert.throwsErrorsWithMsg(()=>{ checkSingleConfig(true); }, /checkSingleConfig/, ParameterError);
    Assert.throwsErrorsWithMsg(()=>{ checkSingleConfig(false); }, /checkSingleConfig/, ParameterError);
    Assert.throwsErrorsWithMsg(()=>{ checkSingleConfig(new Boolean(true)); }, /checkSingleConfig/, ParameterError);
    Assert.throwsErrorsWithMsg(()=>{ checkSingleConfig(new Boolean(false)); }, /checkSingleConfig/, ParameterError);
    Assert.throwsErrorsWithMsg(()=>{ checkSingleConfig(Symbol('uid')); }, /checkSingleConfig/, ParameterError);
    Assert.throwsErrorsWithMsg(()=>{ checkSingleConfig(Symbol.for('uid')); }, /checkSingleConfig/, ParameterError);
    Assert.throwsErrorsWithMsg(()=>{ checkSingleConfig(Error); }, /checkSingleConfig/, ParameterError);
    Assert.throwsErrorsWithMsg(()=>{ checkSingleConfig(ParameterError); }, /checkSingleConfig/, ParameterError);
    Assert.throwsErrorsWithMsg(()=>{ checkSingleConfig(testOptionsCheckSingleConfig); }, /checkSingleConfig/, ParameterError);
    Assert.throwsErrorsWithMsg(()=>{ checkSingleConfig(function(){}); }, /checkSingleConfig/, ParameterError);
    Assert.throwsErrorsWithMsg(()=>{ checkSingleConfig(()=>{}); }, /checkSingleConfig/, ParameterError);
    Assert.throwsErrorsWithMsg(()=>{ checkSingleConfig([]); }, /checkSingleConfig/, ParameterError);
    Assert.throwsErrorsWithMsg(()=>{ checkSingleConfig([1,2,3]); }, /checkSingleConfig/, ParameterError);
    Assert.throwsErrorsWithMsg(()=>{ checkSingleConfig([[]]); }, /checkSingleConfig/, ParameterError);
    Assert.throwsErrorsWithMsg(()=>{ checkSingleConfig([[1,2,3],[4,5,6]]); }, /checkSingleConfig/, ParameterError);
    Assert.throwsErrorsWithMsg(()=>{ checkSingleConfig(new Map()); }, /checkSingleConfig/, ParameterError);
    Assert.throwsErrorsWithMsg(()=>{ checkSingleConfig(new Map([['a',1],['b', 2]])); }, /checkSingleConfig/, ParameterError);
    Assert.throwsErrorsWithMsg(()=>{ checkSingleConfig(new Set()); }, /checkSingleConfig/, ParameterError);
    Assert.throwsErrorsWithMsg(()=>{ checkSingleConfig(new Set([1,2,3])); }, /checkSingleConfig/, ParameterError);
    Assert.throwsErrorsWithMsg(()=>{ checkSingleConfig(/123/); }, /checkSingleConfig/, ParameterError);
    Assert.throwsErrorsWithMsg(()=>{ checkSingleConfig(new RegExp('123')); }, /checkSingleConfig/, ParameterError);
    Assert.throwsErrorsWithMsg(()=>{ checkSingleConfig({}); }, /checkSingleConfig/, ParameterError);
    Assert.throwsErrorsWithMsg(()=>{ checkSingleConfig({a:1, b:2}); }, /checkSingleConfig/, ParameterError);
    Assert.throwsErrorsWithMsg(()=>{ checkSingleConfig(new Object()); }, /checkSingleConfig/, ParameterError);
    
    // config 内部 value 
    // 这里应该是不合格的(必填缺失)
    Assert.throwsErrorsWithMsg(()=>{ checkSingleConfig({value:'pValue'}); }, /checkSingleConfig/, ParameterError);
    Assert.throwsErrorsWithMsg(()=>{ checkSingleConfig({type:VDATA_TYPE.string}); }, /checkSingleConfig/, ParameterError);
    // 这里应该是合格的（必填符合）
    Assert.throwsErrorsNone(()=>{ checkSingleConfig({value:'pValue', type:VDATA_TYPE.string}); });

    // config 内部 type 
    Assert.throwsErrorsWithMsg(()=>{ checkSingleConfig({value:'pValue', type:undefined, canBeEmpty:false, targetTypes:[]}); }, /checkSingleConfig/, ParameterError);
    Assert.throwsErrorsWithMsg(()=>{ checkSingleConfig({value:'pValue', type:null, canBeEmpty:false, targetTypes:[]}); }, /checkSingleConfig/, ParameterError);
    Assert.throwsErrorsWithMsg(()=>{ checkSingleConfig({value:'pValue', type:NaN, canBeEmpty:false, targetTypes:[]}); }, /checkSingleConfig/, ParameterError);
    Assert.throwsErrorsWithMsg(()=>{ checkSingleConfig({value:'pValue', type:'', canBeEmpty:false, targetTypes:[]}); }, /checkSingleConfig/, ParameterError);
    Assert.throwsErrorsWithMsg(()=>{ checkSingleConfig({value:'pValue', type:'sss', canBeEmpty:false, targetTypes:[]}); }, /checkSingleConfig/, ParameterError);
    Assert.throwsErrorsWithMsg(()=>{ checkSingleConfig({value:'pValue', type:new String(''), canBeEmpty:false, targetTypes:[]}); }, /checkSingleConfig/, ParameterError);
    Assert.throwsErrorsWithMsg(()=>{ checkSingleConfig({value:'pValue', type:new String('sss'), canBeEmpty:false, targetTypes:[]}); }, /checkSingleConfig/, ParameterError);
    Assert.throwsErrorsWithMsg(()=>{ checkSingleConfig({value:'pValue', type:123, canBeEmpty:false, targetTypes:[]}); }, /checkSingleConfig/, ParameterError);
    Assert.throwsErrorsWithMsg(()=>{ checkSingleConfig({value:'pValue', type:-1, canBeEmpty:false, targetTypes:[]}); }, /checkSingleConfig/, ParameterError);
    Assert.throwsErrorsWithMsg(()=>{ checkSingleConfig({value:'pValue', type:new Number(123), canBeEmpty:false, targetTypes:[]}); }, /checkSingleConfig/, ParameterError);
    Assert.throwsErrorsWithMsg(()=>{ checkSingleConfig({value:'pValue', type:new Number(-1), canBeEmpty:false, targetTypes:[]}); }, /checkSingleConfig/, ParameterError);
    Assert.throwsErrorsWithMsg(()=>{ checkSingleConfig({value:'pValue', type:true, canBeEmpty:false, targetTypes:[]}); }, /checkSingleConfig/, ParameterError);
    Assert.throwsErrorsWithMsg(()=>{ checkSingleConfig({value:'pValue', type:false, canBeEmpty:false, targetTypes:[]}); }, /checkSingleConfig/, ParameterError);
    Assert.throwsErrorsWithMsg(()=>{ checkSingleConfig({value:'pValue', type:new Boolean(true), canBeEmpty:false, targetTypes:[]}); }, /checkSingleConfig/, ParameterError);
    Assert.throwsErrorsWithMsg(()=>{ checkSingleConfig({value:'pValue', type:new Boolean(false), canBeEmpty:false, targetTypes:[]}); }, /checkSingleConfig/, ParameterError);
    Assert.throwsErrorsWithMsg(()=>{ checkSingleConfig({value:'pValue', type:Symbol('uid'), canBeEmpty:false, targetTypes:[]}); }, /checkSingleConfig/, ParameterError);
    Assert.throwsErrorsWithMsg(()=>{ checkSingleConfig({value:'pValue', type:Symbol.for('uid'), canBeEmpty:false, targetTypes:[]}); }, /checkSingleConfig/, ParameterError);
    Assert.throwsErrorsWithMsg(()=>{ checkSingleConfig({value:'pValue', type:Error, canBeEmpty:false, targetTypes:[]}); }, /checkSingleConfig/, ParameterError);
    Assert.throwsErrorsWithMsg(()=>{ checkSingleConfig({value:'pValue', type:ParameterError, canBeEmpty:false, targetTypes:[]}); }, /checkSingleConfig/, ParameterError);
    Assert.throwsErrorsWithMsg(()=>{ checkSingleConfig({value:'pValue', type:testOptionsCheckSingleConfig, canBeEmpty:false, targetTypes:[]}); }, /checkSingleConfig/, ParameterError);
    Assert.throwsErrorsWithMsg(()=>{ checkSingleConfig({value:'pValue', type:function(){}, canBeEmpty:false, targetTypes:[]}); }, /checkSingleConfig/, ParameterError);
    Assert.throwsErrorsWithMsg(()=>{ checkSingleConfig({value:'pValue', type:()=>{}, canBeEmpty:false, targetTypes:[]}); }, /checkSingleConfig/, ParameterError);
    Assert.throwsErrorsWithMsg(()=>{ checkSingleConfig({value:'pValue', type:[], canBeEmpty:false, targetTypes:[]}); }, /checkSingleConfig/, ParameterError);
    Assert.throwsErrorsWithMsg(()=>{ checkSingleConfig({value:'pValue', type:[1,2,3], canBeEmpty:false, targetTypes:[]}); }, /checkSingleConfig/, ParameterError);
    Assert.throwsErrorsWithMsg(()=>{ checkSingleConfig({value:'pValue', type:[[]], canBeEmpty:false, targetTypes:[]}); }, /checkSingleConfig/, ParameterError);
    Assert.throwsErrorsWithMsg(()=>{ checkSingleConfig({value:'pValue', type:[[1,2,3],[4,5,6]], canBeEmpty:false, targetTypes:[]}); }, /checkSingleConfig/, ParameterError);
    Assert.throwsErrorsWithMsg(()=>{ checkSingleConfig({value:'pValue', type:new Map(), canBeEmpty:false, targetTypes:[]}); }, /checkSingleConfig/, ParameterError);
    Assert.throwsErrorsWithMsg(()=>{ checkSingleConfig({value:'pValue', type:new Map([['a',1],['b', 2]]), canBeEmpty:false, targetTypes:[]}); }, /checkSingleConfig/, ParameterError);
    Assert.throwsErrorsWithMsg(()=>{ checkSingleConfig({value:'pValue', type:new Set(), canBeEmpty:false, targetTypes:[]}); }, /checkSingleConfig/, ParameterError);
    Assert.throwsErrorsWithMsg(()=>{ checkSingleConfig({value:'pValue', type:new Set([1,2,3]), canBeEmpty:false, targetTypes:[]}); }, /checkSingleConfig/, ParameterError);
    Assert.throwsErrorsWithMsg(()=>{ checkSingleConfig({value:'pValue', type:/123/, canBeEmpty:false, targetTypes:[]}); }, /checkSingleConfig/, ParameterError);
    Assert.throwsErrorsWithMsg(()=>{ checkSingleConfig({value:'pValue', type:new RegExp('123'), canBeEmpty:false, targetTypes:[]}); }, /checkSingleConfig/, ParameterError);
    Assert.throwsErrorsWithMsg(()=>{ checkSingleConfig({value:'pValue', type:{}, canBeEmpty:false, targetTypes:[]}); }, /checkSingleConfig/, ParameterError);
    Assert.throwsErrorsWithMsg(()=>{ checkSingleConfig({value:'pValue', type:{a:1, b:2}, canBeEmpty:false, targetTypes:[]}); }, /checkSingleConfig/, ParameterError);
    Assert.throwsErrorsWithMsg(()=>{ checkSingleConfig({value:'pValue', type:new Object(), canBeEmpty:false, targetTypes:[]}); }, /checkSingleConfig/, ParameterError);
    //
    Assert.throwsErrorsWithMsg(()=>{ checkSingleConfig({value:'pValue', type:[undefined], canBeEmpty:false, targetTypes:[]}); }, /checkSingleConfig/, ParameterError);
    Assert.throwsErrorsWithMsg(()=>{ checkSingleConfig({value:'pValue', type:[null], canBeEmpty:false, targetTypes:[]}); }, /checkSingleConfig/, ParameterError);
    Assert.throwsErrorsWithMsg(()=>{ checkSingleConfig({value:'pValue', type:[NaN], canBeEmpty:false, targetTypes:[]}); }, /checkSingleConfig/, ParameterError);
    Assert.throwsErrorsWithMsg(()=>{ checkSingleConfig({value:'pValue', type:[''], canBeEmpty:false, targetTypes:[]}); }, /checkSingleConfig/, ParameterError);
    Assert.throwsErrorsWithMsg(()=>{ checkSingleConfig({value:'pValue', type:['sss'], canBeEmpty:false, targetTypes:[]}); }, /checkSingleConfig/, ParameterError);
    Assert.throwsErrorsWithMsg(()=>{ checkSingleConfig({value:'pValue', type:[new String('')], canBeEmpty:false, targetTypes:[]}); }, /checkSingleConfig/, ParameterError);
    Assert.throwsErrorsWithMsg(()=>{ checkSingleConfig({value:'pValue', type:[new String('sss')], canBeEmpty:false, targetTypes:[]}); }, /checkSingleConfig/, ParameterError);
    Assert.throwsErrorsWithMsg(()=>{ checkSingleConfig({value:'pValue', type:[123], canBeEmpty:false, targetTypes:[]}); }, /checkSingleConfig/, ParameterError);
    Assert.throwsErrorsWithMsg(()=>{ checkSingleConfig({value:'pValue', type:[-1], canBeEmpty:false, targetTypes:[]}); }, /checkSingleConfig/, ParameterError);
    Assert.throwsErrorsWithMsg(()=>{ checkSingleConfig({value:'pValue', type:[new Number(123)], canBeEmpty:false, targetTypes:[]}); }, /checkSingleConfig/, ParameterError);
    Assert.throwsErrorsWithMsg(()=>{ checkSingleConfig({value:'pValue', type:[new Number(-1)], canBeEmpty:false, targetTypes:[]}); }, /checkSingleConfig/, ParameterError);
    Assert.throwsErrorsWithMsg(()=>{ checkSingleConfig({value:'pValue', type:[true], canBeEmpty:false, targetTypes:[]}); }, /checkSingleConfig/, ParameterError);
    Assert.throwsErrorsWithMsg(()=>{ checkSingleConfig({value:'pValue', type:[false], canBeEmpty:false, targetTypes:[]}); }, /checkSingleConfig/, ParameterError);
    Assert.throwsErrorsWithMsg(()=>{ checkSingleConfig({value:'pValue', type:[new Boolean(true)], canBeEmpty:false, targetTypes:[]}); }, /checkSingleConfig/, ParameterError);
    Assert.throwsErrorsWithMsg(()=>{ checkSingleConfig({value:'pValue', type:[new Boolean(false)], canBeEmpty:false, targetTypes:[]}); }, /checkSingleConfig/, ParameterError);
    Assert.throwsErrorsWithMsg(()=>{ checkSingleConfig({value:'pValue', type:[Symbol('uid')], canBeEmpty:false, targetTypes:[]}); }, /checkSingleConfig/, ParameterError);
    Assert.throwsErrorsWithMsg(()=>{ checkSingleConfig({value:'pValue', type:[Symbol.for('uid')], canBeEmpty:false, targetTypes:[]}); }, /checkSingleConfig/, ParameterError);
    Assert.throwsErrorsWithMsg(()=>{ checkSingleConfig({value:'pValue', type:[Error], canBeEmpty:false, targetTypes:[]}); }, /checkSingleConfig/, ParameterError);
    Assert.throwsErrorsWithMsg(()=>{ checkSingleConfig({value:'pValue', type:[ParameterError], canBeEmpty:false, targetTypes:[]}); }, /checkSingleConfig/, ParameterError);
    Assert.throwsErrorsWithMsg(()=>{ checkSingleConfig({value:'pValue', type:[testOptionsCheckSingleConfig], canBeEmpty:false, targetTypes:[]}); }, /checkSingleConfig/, ParameterError);
    Assert.throwsErrorsWithMsg(()=>{ checkSingleConfig({value:'pValue', type:[function(){}], canBeEmpty:false, targetTypes:[]}); }, /checkSingleConfig/, ParameterError);
    Assert.throwsErrorsWithMsg(()=>{ checkSingleConfig({value:'pValue', type:[()=>{}], canBeEmpty:false, targetTypes:[]}); }, /checkSingleConfig/, ParameterError);
    Assert.throwsErrorsWithMsg(()=>{ checkSingleConfig({value:'pValue', type:[[]], canBeEmpty:false, targetTypes:[]}); }, /checkSingleConfig/, ParameterError);
    Assert.throwsErrorsWithMsg(()=>{ checkSingleConfig({value:'pValue', type:[[1,2,3]], canBeEmpty:false, targetTypes:[]}); }, /checkSingleConfig/, ParameterError);
    Assert.throwsErrorsWithMsg(()=>{ checkSingleConfig({value:'pValue', type:[[[]]], canBeEmpty:false, targetTypes:[]}); }, /checkSingleConfig/, ParameterError);
    Assert.throwsErrorsWithMsg(()=>{ checkSingleConfig({value:'pValue', type:[[[1,2,3],[4,5,6]]], canBeEmpty:false, targetTypes:[]}); }, /checkSingleConfig/, ParameterError);
    Assert.throwsErrorsWithMsg(()=>{ checkSingleConfig({value:'pValue', type:[new Map()], canBeEmpty:false, targetTypes:[]}); }, /checkSingleConfig/, ParameterError);
    Assert.throwsErrorsWithMsg(()=>{ checkSingleConfig({value:'pValue', type:[new Map([['a',1],['b', 2]])], canBeEmpty:false, targetTypes:[]}); }, /checkSingleConfig/, ParameterError);
    Assert.throwsErrorsWithMsg(()=>{ checkSingleConfig({value:'pValue', type:[new Set()], canBeEmpty:false, targetTypes:[]}); }, /checkSingleConfig/, ParameterError);
    Assert.throwsErrorsWithMsg(()=>{ checkSingleConfig({value:'pValue', type:[new Set([1,2,3])], canBeEmpty:false, targetTypes:[]}); }, /checkSingleConfig/, ParameterError);
    Assert.throwsErrorsWithMsg(()=>{ checkSingleConfig({value:'pValue', type:[/123/], canBeEmpty:false, targetTypes:[]}); }, /checkSingleConfig/, ParameterError);
    Assert.throwsErrorsWithMsg(()=>{ checkSingleConfig({value:'pValue', type:[new RegExp('123')], canBeEmpty:false, targetTypes:[]}); }, /checkSingleConfig/, ParameterError);
    Assert.throwsErrorsWithMsg(()=>{ checkSingleConfig({value:'pValue', type:[{}], canBeEmpty:false, targetTypes:[]}); }, /checkSingleConfig/, ParameterError);
    Assert.throwsErrorsWithMsg(()=>{ checkSingleConfig({value:'pValue', type:[{a:1, b:2}], canBeEmpty:false, targetTypes:[]}); }, /checkSingleConfig/, ParameterError);
    Assert.throwsErrorsWithMsg(()=>{ checkSingleConfig({value:'pValue', type:[new Object()], canBeEmpty:false, targetTypes:[]}); }, /checkSingleConfig/, ParameterError);
    // 这里是验证数值范围是否判断成功。
    Assert.throwsErrorsNone(()=>{ checkSingleConfig({value:'pValue', type:VDATA_TYPE.string, canBeEmpty:false, targetTypes:[]}); });
    Assert.throwsErrorsNone(()=>{ checkSingleConfig({value:'pValue', type:[VDATA_TYPE.string], canBeEmpty:false, targetTypes:[]}); });
    Assert.throwsErrorsNone(()=>{ checkSingleConfig({value:'pValue', type:[VDATA_TYPE.string, VDATA_TYPE.func], canBeEmpty:false, targetTypes:[]}); });
    Assert.throwsErrorsWithMsg(()=>{ checkSingleConfig({value:'pValue', type:[VDATA_TYPE.string, 123], canBeEmpty:false, targetTypes:[]}); }, /checkSingleConfig/, ParameterError); 

    // config 内部 canBeEmpty
    Assert.throwsErrorsWithMsg(()=>{ checkSingleConfig({value:'pValue', type:VDATA_TYPE.string, canBeEmpty:undefined, targetTypes:[]}); }, /checkSingleConfig/, ParameterError);
    Assert.throwsErrorsWithMsg(()=>{ checkSingleConfig({value:'pValue', type:VDATA_TYPE.string, canBeEmpty:null, targetTypes:[]}); }, /checkSingleConfig/, ParameterError);
    Assert.throwsErrorsWithMsg(()=>{ checkSingleConfig({value:'pValue', type:VDATA_TYPE.string, canBeEmpty:NaN, targetTypes:[]}); }, /checkSingleConfig/, ParameterError);
    Assert.throwsErrorsWithMsg(()=>{ checkSingleConfig({value:'pValue', type:VDATA_TYPE.string, canBeEmpty:'', targetTypes:[]}); }, /checkSingleConfig/, ParameterError);
    Assert.throwsErrorsWithMsg(()=>{ checkSingleConfig({value:'pValue', type:VDATA_TYPE.string, canBeEmpty:'sss', targetTypes:[]}); }, /checkSingleConfig/, ParameterError);
    Assert.throwsErrorsWithMsg(()=>{ checkSingleConfig({value:'pValue', type:VDATA_TYPE.string, canBeEmpty:new String(''), targetTypes:[]}); }, /checkSingleConfig/, ParameterError);
    Assert.throwsErrorsWithMsg(()=>{ checkSingleConfig({value:'pValue', type:VDATA_TYPE.string, canBeEmpty:new String('sss'), targetTypes:[]}); }, /checkSingleConfig/, ParameterError);
    Assert.throwsErrorsWithMsg(()=>{ checkSingleConfig({value:'pValue', type:VDATA_TYPE.string, canBeEmpty:123, targetTypes:[]}); }, /checkSingleConfig/, ParameterError);
    Assert.throwsErrorsWithMsg(()=>{ checkSingleConfig({value:'pValue', type:VDATA_TYPE.string, canBeEmpty:-1, targetTypes:[]}); }, /checkSingleConfig/, ParameterError);
    Assert.throwsErrorsWithMsg(()=>{ checkSingleConfig({value:'pValue', type:VDATA_TYPE.string, canBeEmpty:new Number(123), targetTypes:[]}); }, /checkSingleConfig/, ParameterError);
    Assert.throwsErrorsWithMsg(()=>{ checkSingleConfig({value:'pValue', type:VDATA_TYPE.string, canBeEmpty:new Number(-1), targetTypes:[]}); }, /checkSingleConfig/, ParameterError);
    Assert.throwsErrorsNone(()=>{ checkSingleConfig({value:'pValue', type:VDATA_TYPE.string, canBeEmpty:true, targetTypes:[]}); });
    Assert.throwsErrorsNone(()=>{ checkSingleConfig({value:'pValue', type:VDATA_TYPE.string, canBeEmpty:false, targetTypes:[]}); });
    Assert.throwsErrorsNone(()=>{ checkSingleConfig({value:'pValue', type:VDATA_TYPE.string, canBeEmpty:new Boolean(true), targetTypes:[]}); });
    Assert.throwsErrorsNone(()=>{ checkSingleConfig({value:'pValue', type:VDATA_TYPE.string, canBeEmpty:new Boolean(false), targetTypes:[]}); });
    Assert.throwsErrorsWithMsg(()=>{ checkSingleConfig({value:'pValue', type:VDATA_TYPE.string, canBeEmpty:Symbol('uid'), targetTypes:[]}); }, /checkSingleConfig/, ParameterError);
    Assert.throwsErrorsWithMsg(()=>{ checkSingleConfig({value:'pValue', type:VDATA_TYPE.string, canBeEmpty:Symbol.for('uid'), targetTypes:[]}); }, /checkSingleConfig/, ParameterError);
    Assert.throwsErrorsWithMsg(()=>{ checkSingleConfig({value:'pValue', type:VDATA_TYPE.string, canBeEmpty:Error, targetTypes:[]}); }, /checkSingleConfig/, ParameterError);
    Assert.throwsErrorsWithMsg(()=>{ checkSingleConfig({value:'pValue', type:VDATA_TYPE.string, canBeEmpty:ParameterError, targetTypes:[]}); }, /checkSingleConfig/, ParameterError);
    Assert.throwsErrorsWithMsg(()=>{ checkSingleConfig({value:'pValue', type:VDATA_TYPE.string, canBeEmpty:testOptionsCheckSingleConfig, targetTypes:[]}); }, /checkSingleConfig/, ParameterError);
    Assert.throwsErrorsWithMsg(()=>{ checkSingleConfig({value:'pValue', type:VDATA_TYPE.string, canBeEmpty:function(){}, targetTypes:[]}); }, /checkSingleConfig/, ParameterError);
    Assert.throwsErrorsWithMsg(()=>{ checkSingleConfig({value:'pValue', type:VDATA_TYPE.string, canBeEmpty:()=>{}, targetTypes:[]}); }, /checkSingleConfig/, ParameterError);
    Assert.throwsErrorsWithMsg(()=>{ checkSingleConfig({value:'pValue', type:VDATA_TYPE.string, canBeEmpty:[], targetTypes:[]}); }, /checkSingleConfig/, ParameterError);
    Assert.throwsErrorsWithMsg(()=>{ checkSingleConfig({value:'pValue', type:VDATA_TYPE.string, canBeEmpty:[1,2,3], targetTypes:[]}); }, /checkSingleConfig/, ParameterError);
    Assert.throwsErrorsWithMsg(()=>{ checkSingleConfig({value:'pValue', type:VDATA_TYPE.string, canBeEmpty:[[]], targetTypes:[]}); }, /checkSingleConfig/, ParameterError);
    Assert.throwsErrorsWithMsg(()=>{ checkSingleConfig({value:'pValue', type:VDATA_TYPE.string, canBeEmpty:[[1,2,3],[4,5,6]], targetTypes:[]}); }, /checkSingleConfig/, ParameterError);
    Assert.throwsErrorsWithMsg(()=>{ checkSingleConfig({value:'pValue', type:VDATA_TYPE.string, canBeEmpty:new Map(), targetTypes:[]}); }, /checkSingleConfig/, ParameterError);
    Assert.throwsErrorsWithMsg(()=>{ checkSingleConfig({value:'pValue', type:VDATA_TYPE.string, canBeEmpty:new Map([['a',1],['b', 2]]), targetTypes:[]}); }, /checkSingleConfig/, ParameterError);
    Assert.throwsErrorsWithMsg(()=>{ checkSingleConfig({value:'pValue', type:VDATA_TYPE.string, canBeEmpty:new Set(), targetTypes:[]}); }, /checkSingleConfig/, ParameterError);
    Assert.throwsErrorsWithMsg(()=>{ checkSingleConfig({value:'pValue', type:VDATA_TYPE.string, canBeEmpty:new Set([1,2,3]), targetTypes:[]}); }, /checkSingleConfig/, ParameterError);
    Assert.throwsErrorsWithMsg(()=>{ checkSingleConfig({value:'pValue', type:VDATA_TYPE.string, canBeEmpty:/123/, targetTypes:[]}); }, /checkSingleConfig/, ParameterError);
    Assert.throwsErrorsWithMsg(()=>{ checkSingleConfig({value:'pValue', type:VDATA_TYPE.string, canBeEmpty:new RegExp('123'), targetTypes:[]}); }, /checkSingleConfig/, ParameterError);
    Assert.throwsErrorsWithMsg(()=>{ checkSingleConfig({value:'pValue', type:VDATA_TYPE.string, canBeEmpty:{}, targetTypes:[]}); }, /checkSingleConfig/, ParameterError);
    Assert.throwsErrorsWithMsg(()=>{ checkSingleConfig({value:'pValue', type:VDATA_TYPE.string, canBeEmpty:{a:1, b:2}, targetTypes:[]}); }, /checkSingleConfig/, ParameterError);
    Assert.throwsErrorsWithMsg(()=>{ checkSingleConfig({value:'pValue', type:VDATA_TYPE.string, canBeEmpty:new Object(), targetTypes:[]}); }, /checkSingleConfig/, ParameterError);

    // config 内部 targetTypes
    // 这有2个规则：type 不是 target 开头，则 targetTypes 可以不填。但是填了，就要校验是否为数组。
    //             type 是 target 开头，则一定要校验，且内容必须为 Class 
    Assert.throwsErrorsWithMsg(()=>{ checkSingleConfig({value:'pValue', type:VDATA_TYPE.string, canBeEmpty:false, targetTypes:undefined}); }, /checkSingleConfig/, ParameterError);
    Assert.throwsErrorsWithMsg(()=>{ checkSingleConfig({value:'pValue', type:VDATA_TYPE.string, canBeEmpty:false, targetTypes:null}); }, /checkSingleConfig/, ParameterError);
    Assert.throwsErrorsWithMsg(()=>{ checkSingleConfig({value:'pValue', type:VDATA_TYPE.string, canBeEmpty:false, targetTypes:NaN}); }, /checkSingleConfig/, ParameterError);
    Assert.throwsErrorsWithMsg(()=>{ checkSingleConfig({value:'pValue', type:VDATA_TYPE.string, canBeEmpty:false, targetTypes:''}); }, /checkSingleConfig/, ParameterError);
    Assert.throwsErrorsWithMsg(()=>{ checkSingleConfig({value:'pValue', type:VDATA_TYPE.string, canBeEmpty:false, targetTypes:'sss'}); }, /checkSingleConfig/, ParameterError);
    Assert.throwsErrorsWithMsg(()=>{ checkSingleConfig({value:'pValue', type:VDATA_TYPE.string, canBeEmpty:false, targetTypes:new String('')}); }, /checkSingleConfig/, ParameterError);
    Assert.throwsErrorsWithMsg(()=>{ checkSingleConfig({value:'pValue', type:VDATA_TYPE.string, canBeEmpty:false, targetTypes:new String('sss')}); }, /checkSingleConfig/, ParameterError);
    Assert.throwsErrorsWithMsg(()=>{ checkSingleConfig({value:'pValue', type:VDATA_TYPE.string, canBeEmpty:false, targetTypes:123}); }, /checkSingleConfig/, ParameterError);
    Assert.throwsErrorsWithMsg(()=>{ checkSingleConfig({value:'pValue', type:VDATA_TYPE.string, canBeEmpty:false, targetTypes:-1}); }, /checkSingleConfig/, ParameterError);
    Assert.throwsErrorsWithMsg(()=>{ checkSingleConfig({value:'pValue', type:VDATA_TYPE.string, canBeEmpty:false, targetTypes:new Number(123)}); }, /checkSingleConfig/, ParameterError);
    Assert.throwsErrorsWithMsg(()=>{ checkSingleConfig({value:'pValue', type:VDATA_TYPE.string, canBeEmpty:false, targetTypes:new Number(-1)}); }, /checkSingleConfig/, ParameterError);
    Assert.throwsErrorsWithMsg(()=>{ checkSingleConfig({value:'pValue', type:VDATA_TYPE.string, canBeEmpty:false, targetTypes:true}); }, /checkSingleConfig/, ParameterError);
    Assert.throwsErrorsWithMsg(()=>{ checkSingleConfig({value:'pValue', type:VDATA_TYPE.string, canBeEmpty:false, targetTypes:false}); }, /checkSingleConfig/, ParameterError);
    Assert.throwsErrorsWithMsg(()=>{ checkSingleConfig({value:'pValue', type:VDATA_TYPE.string, canBeEmpty:false, targetTypes:new Boolean(true)}); }, /checkSingleConfig/, ParameterError);
    Assert.throwsErrorsWithMsg(()=>{ checkSingleConfig({value:'pValue', type:VDATA_TYPE.string, canBeEmpty:false, targetTypes:new Boolean(false)}); }, /checkSingleConfig/, ParameterError);
    Assert.throwsErrorsWithMsg(()=>{ checkSingleConfig({value:'pValue', type:VDATA_TYPE.string, canBeEmpty:false, targetTypes:Symbol('uid')}); }, /checkSingleConfig/, ParameterError);
    Assert.throwsErrorsWithMsg(()=>{ checkSingleConfig({value:'pValue', type:VDATA_TYPE.string, canBeEmpty:false, targetTypes:Symbol.for('uid')}); }, /checkSingleConfig/, ParameterError);
    Assert.throwsErrorsWithMsg(()=>{ checkSingleConfig({value:'pValue', type:VDATA_TYPE.string, canBeEmpty:false, targetTypes:Error}); }, /checkSingleConfig/, ParameterError);
    Assert.throwsErrorsWithMsg(()=>{ checkSingleConfig({value:'pValue', type:VDATA_TYPE.string, canBeEmpty:false, targetTypes:ParameterError}); }, /checkSingleConfig/, ParameterError);
    Assert.throwsErrorsWithMsg(()=>{ checkSingleConfig({value:'pValue', type:VDATA_TYPE.string, canBeEmpty:false, targetTypes:testOptionsCheckSingleConfig}); }, /checkSingleConfig/, ParameterError);
    Assert.throwsErrorsWithMsg(()=>{ checkSingleConfig({value:'pValue', type:VDATA_TYPE.string, canBeEmpty:false, targetTypes:function(){}}); }, /checkSingleConfig/, ParameterError);
    Assert.throwsErrorsWithMsg(()=>{ checkSingleConfig({value:'pValue', type:VDATA_TYPE.string, canBeEmpty:false, targetTypes:()=>{}}); }, /checkSingleConfig/, ParameterError);
    Assert.throwsErrorsNone(()=>{ checkSingleConfig({value:'pValue', type:VDATA_TYPE.string, canBeEmpty:false, targetTypes:[]}); }); // 如果不是 target 类型，则只需要为数组
    Assert.throwsErrorsNone(()=>{ checkSingleConfig({value:'pValue', type:VDATA_TYPE.string, canBeEmpty:false, targetTypes:[1,2,3]}); }, /checkSingleConfig/, ParameterError); 
    Assert.throwsErrorsNone(()=>{ checkSingleConfig({value:'pValue', type:VDATA_TYPE.string, canBeEmpty:false, targetTypes:[[]]}); }, /checkSingleConfig/, ParameterError);
    Assert.throwsErrorsNone(()=>{ checkSingleConfig({value:'pValue', type:VDATA_TYPE.string, canBeEmpty:false, targetTypes:[[1,2,3],[4,5,6]]}); }, /checkSingleConfig/, ParameterError);
    Assert.throwsErrorsWithMsg(()=>{ checkSingleConfig({value:'pValue', type:VDATA_TYPE.string, canBeEmpty:false, targetTypes:new Map()}); }, /checkSingleConfig/, ParameterError);
    Assert.throwsErrorsWithMsg(()=>{ checkSingleConfig({value:'pValue', type:VDATA_TYPE.string, canBeEmpty:false, targetTypes:new Map([['a',1],['b', 2]])}); }, /checkSingleConfig/, ParameterError);
    Assert.throwsErrorsWithMsg(()=>{ checkSingleConfig({value:'pValue', type:VDATA_TYPE.string, canBeEmpty:false, targetTypes:new Set()}); }, /checkSingleConfig/, ParameterError);
    Assert.throwsErrorsWithMsg(()=>{ checkSingleConfig({value:'pValue', type:VDATA_TYPE.string, canBeEmpty:false, targetTypes:new Set([1,2,3])}); }, /checkSingleConfig/, ParameterError);
    Assert.throwsErrorsWithMsg(()=>{ checkSingleConfig({value:'pValue', type:VDATA_TYPE.string, canBeEmpty:false, targetTypes:/123/}); }, /checkSingleConfig/, ParameterError);
    Assert.throwsErrorsWithMsg(()=>{ checkSingleConfig({value:'pValue', type:VDATA_TYPE.string, canBeEmpty:false, targetTypes:new RegExp('123')}); }, /checkSingleConfig/, ParameterError);
    Assert.throwsErrorsWithMsg(()=>{ checkSingleConfig({value:'pValue', type:VDATA_TYPE.string, canBeEmpty:false, targetTypes:{}}); }, /checkSingleConfig/, ParameterError);
    Assert.throwsErrorsWithMsg(()=>{ checkSingleConfig({value:'pValue', type:VDATA_TYPE.string, canBeEmpty:false, targetTypes:{a:1, b:2}}); }, /checkSingleConfig/, ParameterError);
    Assert.throwsErrorsWithMsg(()=>{ checkSingleConfig({value:'pValue', type:VDATA_TYPE.string, canBeEmpty:false, targetTypes:new Object()}); }, /checkSingleConfig/, ParameterError);
    // 
    Assert.throwsErrorsWithMsg(()=>{ checkSingleConfig({value:'pValue', type:VDATA_TYPE.targetObj, canBeEmpty:false, targetTypes:undefined}); }, /checkSingleConfig/, ParameterError);
    Assert.throwsErrorsWithMsg(()=>{ checkSingleConfig({value:'pValue', type:VDATA_TYPE.targetObj, canBeEmpty:false, targetTypes:null}); }, /checkSingleConfig/, ParameterError);
    Assert.throwsErrorsWithMsg(()=>{ checkSingleConfig({value:'pValue', type:VDATA_TYPE.targetObj, canBeEmpty:false, targetTypes:NaN}); }, /checkSingleConfig/, ParameterError);
    Assert.throwsErrorsWithMsg(()=>{ checkSingleConfig({value:'pValue', type:VDATA_TYPE.targetObj, canBeEmpty:false, targetTypes:''}); }, /checkSingleConfig/, ParameterError);
    Assert.throwsErrorsWithMsg(()=>{ checkSingleConfig({value:'pValue', type:VDATA_TYPE.targetObj, canBeEmpty:false, targetTypes:'sss'}); }, /checkSingleConfig/, ParameterError);
    Assert.throwsErrorsWithMsg(()=>{ checkSingleConfig({value:'pValue', type:VDATA_TYPE.targetObj, canBeEmpty:false, targetTypes:new String('')}); }, /checkSingleConfig/, ParameterError);
    Assert.throwsErrorsWithMsg(()=>{ checkSingleConfig({value:'pValue', type:VDATA_TYPE.targetObj, canBeEmpty:false, targetTypes:new String('sss')}); }, /checkSingleConfig/, ParameterError);
    Assert.throwsErrorsWithMsg(()=>{ checkSingleConfig({value:'pValue', type:VDATA_TYPE.targetObj, canBeEmpty:false, targetTypes:123}); }, /checkSingleConfig/, ParameterError);
    Assert.throwsErrorsWithMsg(()=>{ checkSingleConfig({value:'pValue', type:VDATA_TYPE.targetObj, canBeEmpty:false, targetTypes:-1}); }, /checkSingleConfig/, ParameterError);
    Assert.throwsErrorsWithMsg(()=>{ checkSingleConfig({value:'pValue', type:VDATA_TYPE.targetObj, canBeEmpty:false, targetTypes:new Number(123)}); }, /checkSingleConfig/, ParameterError);
    Assert.throwsErrorsWithMsg(()=>{ checkSingleConfig({value:'pValue', type:VDATA_TYPE.targetObj, canBeEmpty:false, targetTypes:new Number(-1)}); }, /checkSingleConfig/, ParameterError);
    Assert.throwsErrorsWithMsg(()=>{ checkSingleConfig({value:'pValue', type:VDATA_TYPE.targetObj, canBeEmpty:false, targetTypes:true}); }, /checkSingleConfig/, ParameterError);
    Assert.throwsErrorsWithMsg(()=>{ checkSingleConfig({value:'pValue', type:VDATA_TYPE.targetObj, canBeEmpty:false, targetTypes:false}); }, /checkSingleConfig/, ParameterError);
    Assert.throwsErrorsWithMsg(()=>{ checkSingleConfig({value:'pValue', type:VDATA_TYPE.targetObj, canBeEmpty:false, targetTypes:new Boolean(true)}); }, /checkSingleConfig/, ParameterError);
    Assert.throwsErrorsWithMsg(()=>{ checkSingleConfig({value:'pValue', type:VDATA_TYPE.targetObj, canBeEmpty:false, targetTypes:new Boolean(false)}); }, /checkSingleConfig/, ParameterError);
    Assert.throwsErrorsWithMsg(()=>{ checkSingleConfig({value:'pValue', type:VDATA_TYPE.targetObj, canBeEmpty:false, targetTypes:Symbol('uid')}); }, /checkSingleConfig/, ParameterError);
    Assert.throwsErrorsWithMsg(()=>{ checkSingleConfig({value:'pValue', type:VDATA_TYPE.targetObj, canBeEmpty:false, targetTypes:Symbol.for('uid')}); }, /checkSingleConfig/, ParameterError);
    Assert.throwsErrorsWithMsg(()=>{ checkSingleConfig({value:'pValue', type:VDATA_TYPE.targetObj, canBeEmpty:false, targetTypes:Error}); }, /checkSingleConfig/, ParameterError);
    Assert.throwsErrorsWithMsg(()=>{ checkSingleConfig({value:'pValue', type:VDATA_TYPE.targetObj, canBeEmpty:false, targetTypes:ParameterError}); }, /checkSingleConfig/, ParameterError);
    Assert.throwsErrorsWithMsg(()=>{ checkSingleConfig({value:'pValue', type:VDATA_TYPE.targetObj, canBeEmpty:false, targetTypes:testOptionsCheckSingleConfig}); }, /checkSingleConfig/, ParameterError);
    Assert.throwsErrorsWithMsg(()=>{ checkSingleConfig({value:'pValue', type:VDATA_TYPE.targetObj, canBeEmpty:false, targetTypes:function(){}}); }, /checkSingleConfig/, ParameterError);
    Assert.throwsErrorsWithMsg(()=>{ checkSingleConfig({value:'pValue', type:VDATA_TYPE.targetObj, canBeEmpty:false, targetTypes:()=>{}}); }, /checkSingleConfig/, ParameterError);
    Assert.throwsErrorsWithMsg(()=>{ checkSingleConfig({value:'pValue', type:VDATA_TYPE.targetObj, canBeEmpty:false, targetTypes:[]}); }, /checkSingleConfig/, ParameterError);
    Assert.throwsErrorsNone(()=>{ checkSingleConfig({value:'pValue', type:VDATA_TYPE.targetObj, canBeEmpty:false, targetTypes:[String]}); });
    Assert.throwsErrorsNone(()=>{ checkSingleConfig({value:'pValue', type:VDATA_TYPE.targetObj, canBeEmpty:false, targetTypes:[String, Number]}); });
    Assert.throwsErrorsWithMsg(()=>{ checkSingleConfig({value:'pValue', type:VDATA_TYPE.targetObj, canBeEmpty:false, targetTypes:[String, Number, 111]}); }, /checkSingleConfig/, ParameterError);
    Assert.throwsErrorsWithMsg(()=>{ checkSingleConfig({value:'pValue', type:VDATA_TYPE.targetObj, canBeEmpty:false, targetTypes:[1,2,3]}); }, /checkSingleConfig/, ParameterError);
    Assert.throwsErrorsWithMsg(()=>{ checkSingleConfig({value:'pValue', type:VDATA_TYPE.targetObj, canBeEmpty:false, targetTypes:[[]]}); }, /checkSingleConfig/, ParameterError);
    Assert.throwsErrorsWithMsg(()=>{ checkSingleConfig({value:'pValue', type:VDATA_TYPE.targetObj, canBeEmpty:false, targetTypes:[[1,2,3],[4,5,6]]}); }, /checkSingleConfig/, ParameterError);
    Assert.throwsErrorsWithMsg(()=>{ checkSingleConfig({value:'pValue', type:VDATA_TYPE.targetObj, canBeEmpty:false, targetTypes:new Map()}); }, /checkSingleConfig/, ParameterError);
    Assert.throwsErrorsWithMsg(()=>{ checkSingleConfig({value:'pValue', type:VDATA_TYPE.targetObj, canBeEmpty:false, targetTypes:new Map([['a',1],['b', 2]])}); }, /checkSingleConfig/, ParameterError);
    Assert.throwsErrorsWithMsg(()=>{ checkSingleConfig({value:'pValue', type:VDATA_TYPE.targetObj, canBeEmpty:false, targetTypes:new Set()}); }, /checkSingleConfig/, ParameterError);
    Assert.throwsErrorsWithMsg(()=>{ checkSingleConfig({value:'pValue', type:VDATA_TYPE.targetObj, canBeEmpty:false, targetTypes:new Set([1,2,3])}); }, /checkSingleConfig/, ParameterError);
    Assert.throwsErrorsWithMsg(()=>{ checkSingleConfig({value:'pValue', type:VDATA_TYPE.targetObj, canBeEmpty:false, targetTypes:/123/}); }, /checkSingleConfig/, ParameterError);
    Assert.throwsErrorsWithMsg(()=>{ checkSingleConfig({value:'pValue', type:VDATA_TYPE.targetObj, canBeEmpty:false, targetTypes:new RegExp('123')}); }, /checkSingleConfig/, ParameterError);
    Assert.throwsErrorsWithMsg(()=>{ checkSingleConfig({value:'pValue', type:VDATA_TYPE.targetObj, canBeEmpty:false, targetTypes:{}}); }, /checkSingleConfig/, ParameterError);
    Assert.throwsErrorsWithMsg(()=>{ checkSingleConfig({value:'pValue', type:VDATA_TYPE.targetObj, canBeEmpty:false, targetTypes:{a:1, b:2}}); }, /checkSingleConfig/, ParameterError);
    Assert.throwsErrorsWithMsg(()=>{ checkSingleConfig({value:'pValue', type:VDATA_TYPE.targetObj, canBeEmpty:false, targetTypes:new Object()}); }, /checkSingleConfig/, ParameterError);
    
}

function testOptionsCheckConfigsParam(){

    // 数据测试，首先是单个 paramConfigs  
    Assert.throwsErrorsWithMsg(()=>{ checkConfigs(undefined); }, /checkConfigs/, ParameterError); 
    Assert.throwsErrorsWithMsg(()=>{ checkConfigs(null); }, /checkConfigs/, ParameterError); 
    Assert.throwsErrorsWithMsg(()=>{ checkConfigs(NaN); }, /checkConfigs/, ParameterError); 
    Assert.throwsErrorsWithMsg(()=>{ checkConfigs(''); }, /checkConfigs/, ParameterError); 
    Assert.throwsErrorsWithMsg(()=>{ checkConfigs('sss'); }, /checkConfigs/, ParameterError); 
    Assert.throwsErrorsWithMsg(()=>{ checkConfigs(new String('')); }, /checkConfigs/, ParameterError); 
    Assert.throwsErrorsWithMsg(()=>{ checkConfigs(new String('sss')); }, /checkConfigs/, ParameterError); 
    Assert.throwsErrorsWithMsg(()=>{ checkConfigs(123); }, /checkConfigs/, ParameterError); 
    Assert.throwsErrorsWithMsg(()=>{ checkConfigs(-1); }, /checkConfigs/, ParameterError); 
    Assert.throwsErrorsWithMsg(()=>{ checkConfigs(new Number(123)); }, /checkConfigs/, ParameterError); 
    Assert.throwsErrorsWithMsg(()=>{ checkConfigs(new Number(-1)); }, /checkConfigs/, ParameterError); 
    Assert.throwsErrorsWithMsg(()=>{ checkConfigs(true); }, /checkConfigs/, ParameterError); 
    Assert.throwsErrorsWithMsg(()=>{ checkConfigs(false); }, /checkConfigs/, ParameterError); 
    Assert.throwsErrorsWithMsg(()=>{ checkConfigs(new Boolean(true)); }, /checkConfigs/, ParameterError); 
    Assert.throwsErrorsWithMsg(()=>{ checkConfigs(new Boolean(false)); }, /checkConfigs/, ParameterError); 
    Assert.throwsErrorsWithMsg(()=>{ checkConfigs(Symbol('uid')); }, /checkConfigs/, ParameterError); 
    Assert.throwsErrorsWithMsg(()=>{ checkConfigs(Symbol.for('uid')); }, /checkConfigs/, ParameterError); 
    Assert.throwsErrorsWithMsg(()=>{ checkConfigs(Error); }, /checkConfigs/, ParameterError); 
    Assert.throwsErrorsWithMsg(()=>{ checkConfigs(ParameterError); }, /checkConfigs/, ParameterError); 
    Assert.throwsErrorsWithMsg(()=>{ checkConfigs(testOptionsCheckConfigsParam); }, /checkConfigs/, ParameterError); 
    Assert.throwsErrorsWithMsg(()=>{ checkConfigs(function(){}); }, /checkConfigs/, ParameterError); 
    Assert.throwsErrorsWithMsg(()=>{ checkConfigs(()=>{}); }, /checkConfigs/, ParameterError); 
    Assert.throwsErrorsWithMsg(()=>{ checkConfigs([]); }, /checkConfigs/, ParameterError); 
    Assert.throwsErrorsWithMsg(()=>{ checkConfigs([1,2,3]); }, /checkConfigs/, ParameterError); 
    Assert.throwsErrorsWithMsg(()=>{ checkConfigs([[]]); }, /checkConfigs/, ParameterError); 
    Assert.throwsErrorsWithMsg(()=>{ checkConfigs([[1,2,3],[4,5,6]]); }, /checkConfigs/, ParameterError); 
    Assert.throwsErrorsWithMsg(()=>{ checkConfigs(new Map()); }, /checkConfigs/, ParameterError); 
    Assert.throwsErrorsWithMsg(()=>{ checkConfigs(new Map([['a',1],['b', 2]])); }, /checkConfigs/, ParameterError); 
    Assert.throwsErrorsWithMsg(()=>{ checkConfigs(new Set()); }, /checkConfigs/, ParameterError); 
    Assert.throwsErrorsWithMsg(()=>{ checkConfigs(new Set([1,2,3])); }, /checkConfigs/, ParameterError); 
    Assert.throwsErrorsWithMsg(()=>{ checkConfigs(/123/); }, /checkConfigs/, ParameterError); 
    Assert.throwsErrorsWithMsg(()=>{ checkConfigs(new RegExp('123')); }, /checkConfigs/, ParameterError); 
    Assert.throwsErrorsWithMsg(()=>{ checkConfigs({}); }, /checkConfigs/, ParameterError); // 空对象，依然是不合规的
    Assert.throwsErrorsWithMsg(()=>{ checkConfigs({a:1, b:2}); }, /checkConfigs/, ParameterError); 
    Assert.throwsErrorsWithMsg(()=>{ checkConfigs(new Object()); }, /checkConfigs/, ParameterError); 

    // 然后是 paramConfigs 内部参数，必须是有键值对的
    Assert.throwsErrorsWithMsg(()=>{ checkConfigs({ test1:undefined }); }, /.+checkConfigs.+checkSingleConfig.+/, ParameterError); 
    Assert.throwsErrorsWithMsg(()=>{ checkConfigs({ test1:null }); }, /.+checkConfigs.+checkSingleConfig.+/, ParameterError); 
    Assert.throwsErrorsWithMsg(()=>{ checkConfigs({ test1:NaN }); }, /.+checkConfigs.+checkSingleConfig.+/, ParameterError); 
    Assert.throwsErrorsWithMsg(()=>{ checkConfigs({ test1:'' }); }, /.+checkConfigs.+checkSingleConfig.+/, ParameterError); 
    Assert.throwsErrorsWithMsg(()=>{ checkConfigs({ test1:'sss' }); }, /.+checkConfigs.+checkSingleConfig.+/, ParameterError); 
    Assert.throwsErrorsWithMsg(()=>{ checkConfigs({ test1:new String('') }); }, /.+checkConfigs.+checkSingleConfig.+/, ParameterError); 
    Assert.throwsErrorsWithMsg(()=>{ checkConfigs({ test1:new String('sss') }); }, /.+checkConfigs.+checkSingleConfig.+/, ParameterError); 
    Assert.throwsErrorsWithMsg(()=>{ checkConfigs({ test1:123 }); }, /.+checkConfigs.+checkSingleConfig.+/, ParameterError); 
    Assert.throwsErrorsWithMsg(()=>{ checkConfigs({ test1:-1 }); }, /.+checkConfigs.+checkSingleConfig.+/, ParameterError); 
    Assert.throwsErrorsWithMsg(()=>{ checkConfigs({ test1:new Number(123) }); }, /.+checkConfigs.+checkSingleConfig.+/, ParameterError); 
    Assert.throwsErrorsWithMsg(()=>{ checkConfigs({ test1:new Number(-1) }); }, /.+checkConfigs.+checkSingleConfig.+/, ParameterError); 
    Assert.throwsErrorsWithMsg(()=>{ checkConfigs({ test1:true }); }, /.+checkConfigs.+checkSingleConfig.+/, ParameterError); 
    Assert.throwsErrorsWithMsg(()=>{ checkConfigs({ test1:false }); }, /.+checkConfigs.+checkSingleConfig.+/, ParameterError); 
    Assert.throwsErrorsWithMsg(()=>{ checkConfigs({ test1:new Boolean(true) }); }, /.+checkConfigs.+checkSingleConfig.+/, ParameterError); 
    Assert.throwsErrorsWithMsg(()=>{ checkConfigs({ test1:new Boolean(false) }); }, /.+checkConfigs.+checkSingleConfig.+/, ParameterError); 
    Assert.throwsErrorsWithMsg(()=>{ checkConfigs({ test1:Symbol('uid') }); }, /.+checkConfigs.+checkSingleConfig.+/, ParameterError); 
    Assert.throwsErrorsWithMsg(()=>{ checkConfigs({ test1:Symbol.for('uid') }); }, /.+checkConfigs.+checkSingleConfig.+/, ParameterError); 
    Assert.throwsErrorsWithMsg(()=>{ checkConfigs({ test1:Error }); }, /.+checkConfigs.+checkSingleConfig.+/, ParameterError); 
    Assert.throwsErrorsWithMsg(()=>{ checkConfigs({ test1:ParameterError }); }, /.+checkConfigs.+checkSingleConfig.+/, ParameterError); 
    Assert.throwsErrorsWithMsg(()=>{ checkConfigs({ test1:testOptionsCheckConfigsParam }); }, /.+checkConfigs.+checkSingleConfig.+/, ParameterError); 
    Assert.throwsErrorsWithMsg(()=>{ checkConfigs({ test1:function(){} }); }, /.+checkConfigs.+checkSingleConfig.+/, ParameterError); 
    Assert.throwsErrorsWithMsg(()=>{ checkConfigs({ test1:()=>{} }); }, /.+checkConfigs.+checkSingleConfig.+/, ParameterError); 
    Assert.throwsErrorsWithMsg(()=>{ checkConfigs({ test1:[] }); }, /.+checkConfigs.+checkSingleConfig.+/, ParameterError); 
    Assert.throwsErrorsWithMsg(()=>{ checkConfigs({ test1:[1,2,3] }); }, /.+checkConfigs.+checkSingleConfig.+/, ParameterError); 
    Assert.throwsErrorsWithMsg(()=>{ checkConfigs({ test1:[[]] }); }, /.+checkConfigs.+checkSingleConfig.+/, ParameterError); 
    Assert.throwsErrorsWithMsg(()=>{ checkConfigs({ test1:[[1,2,3],[4,5,6]] }); }, /.+checkConfigs.+checkSingleConfig.+/, ParameterError); 
    Assert.throwsErrorsWithMsg(()=>{ checkConfigs({ test1:new Map() }); }, /.+checkConfigs.+checkSingleConfig.+/, ParameterError); 
    Assert.throwsErrorsWithMsg(()=>{ checkConfigs({ test1:new Map([['a',1],['b', 2]]) }); }, /.+checkConfigs.+checkSingleConfig.+/, ParameterError); 
    Assert.throwsErrorsWithMsg(()=>{ checkConfigs({ test1:new Set() }); }, /.+checkConfigs.+checkSingleConfig.+/, ParameterError); 
    Assert.throwsErrorsWithMsg(()=>{ checkConfigs({ test1:new Set([1,2,3]) }); }, /.+checkConfigs.+checkSingleConfig.+/, ParameterError); 
    Assert.throwsErrorsWithMsg(()=>{ checkConfigs({ test1:/123/ }); }, /.+checkConfigs.+checkSingleConfig.+/, ParameterError); 
    Assert.throwsErrorsWithMsg(()=>{ checkConfigs({ test1:new RegExp('123') }); }, /.+checkConfigs.+checkSingleConfig.+/, ParameterError); 
    Assert.throwsErrorsWithMsg(()=>{ checkConfigs({ test1:{} }); }, /.+checkConfigs.+checkSingleConfig.+/, ParameterError); 
    Assert.throwsErrorsWithMsg(()=>{ checkConfigs({ test1:{a:1, b:2} }); }, /.+checkConfigs.+checkSingleConfig.+/, ParameterError); 
    Assert.throwsErrorsWithMsg(()=>{ checkConfigs({ test1:new Object() }); }, /.+checkConfigs.+checkSingleConfig.+/, ParameterError); 

    // 再测试几个配置写法（配置中，value, type 是必填的。而 canBeEmpty 和 targetTypes 是看情况的）
    // 因为 checkSingleConfig 中测试过了，这里验证下就行了。
    Assert.throwsErrorsWithMsg(()=>{ checkConfigs({ test1:{value:'111'} }); }, /.+checkConfigs.+checkSingleConfig.+/, ParameterError); 
    Assert.throwsErrorsWithMsg(()=>{ checkConfigs({ test1:{type:VDATA_TYPE.string} }); }, /.+checkConfigs.+checkSingleConfig.+/, ParameterError); 
    Assert.throwsErrorsWithMsg(()=>{ checkConfigs({ test1:{value:'111', type:'2222'} }); }, /.+checkConfigs.+checkSingleConfig.+/, ParameterError);
    Assert.throwsErrorsNone(()=>{ checkConfigs({ test1:{value:'111', type:VDATA_TYPE.string} }); });
    Assert.throwsErrorsWithMsg(()=>{ 
        checkConfigs({ test1:{value:'111', type:VDATA_TYPE.string, canBeEmpty:'111'} }); }, /.+checkConfigs.+checkSingleConfig.+/, ParameterError); 
    Assert.throwsErrorsNone(()=>{ 
        checkConfigs({ test1:{value:'111', type:VDATA_TYPE.string, canBeEmpty:true} }); });
    Assert.throwsErrorsWithMsg(()=>{ 
        checkConfigs({ test1:{value:'111', type:VDATA_TYPE.string, canBeEmpty:true, targetTypes:111} }); }, /.+checkConfigs.+checkSingleConfig.+/, ParameterError); 
    Assert.throwsErrorsNone(()=>{ 
        checkConfigs({ test1:{value:'111', type:VDATA_TYPE.string, canBeEmpty:true, targetTypes:[]} }); }); 
    Assert.throwsErrorsWithMsg(()=>{ 
        checkConfigs({ test1:{value:'111', type:VDATA_TYPE.targetObj, canBeEmpty:true, targetTypes:111} }); }, /.+checkConfigs.+checkSingleConfig.+/, ParameterError); 
    Assert.throwsErrorsWithMsg(()=>{ 
        checkConfigs({ test1:{value:'111', type:VDATA_TYPE.targetObj, canBeEmpty:true, targetTypes:[]} }); }, /.+checkConfigs.+checkSingleConfig.+/, ParameterError); 
    Assert.throwsErrorsNone(()=>{ 
        checkConfigs({ test1:{value:'111', type:VDATA_TYPE.targetObj, canBeEmpty:true, targetTypes:[String]} }); }); 
    // 再测试下，多个配置的情况
    Assert.throwsErrorsWithMsg(()=>{ 
        checkConfigs({ test1:{value:'111', type:VDATA_TYPE.string}, test2:{} }); 
    }, /.+checkConfigs.+checkSingleConfig.+/, ParameterError); 
    // 再测试下，type 为数组的情况
    Assert.throwsErrorsWithMsg(()=>{ 
        checkConfigs({ test1:{value:'111', type:[VDATA_TYPE.string, '123']} }); 
    }, /.+checkConfigs.+checkSingleConfig.+/, ParameterError); 
    Assert.throwsErrorsNone(()=>{ 
        checkConfigs({ test1:{value:'111', type:[VDATA_TYPE.string, VDATA_TYPE.func]} }); 
    }); 
}

function testOptionsValidTypesByConfigsParam(){
    // 这里测试 函数本身的参数类型校验 ParameterError
    // 参数1
    Assert.throwsErrors(()=>{ validTypesByConfigs(undefined, '', ''); }, ParameterError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs(null, '', ''); }, ParameterError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs(NaN, '', ''); }, ParameterError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs('', '', ''); }, ParameterError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs('sss', '', ''); }, ParameterError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs(new String(''), '', ''); }, ParameterError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs(new String('sss'), '', ''); }, ParameterError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs(123, '', ''); }, ParameterError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs(-1, '', ''); }, ParameterError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs(new Number(123), '', ''); }, ParameterError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs(new Number(-1), '', ''); }, ParameterError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs(true, '', ''); }, ParameterError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs(false, '', ''); }, ParameterError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs(new Boolean(true), '', ''); }, ParameterError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs(new Boolean(false), '', ''); }, ParameterError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs(Symbol('uid'), '', ''); }, ParameterError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs(Symbol.for('uid'), '', ''); }, ParameterError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs(Error, '', ''); }, ParameterError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs(ParameterError, '', ''); }, ParameterError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs(testOptionsValidTypesByConfigsParam, '', ''); }, ParameterError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs(function(){}, '', ''); }, ParameterError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs(()=>{}, '', ''); }, ParameterError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs([], '', ''); }, ParameterError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs([1,2,3], '', ''); }, ParameterError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs([[]], '', ''); }, ParameterError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs([[1,2,3],[4,5,6]], '', ''); }, ParameterError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs(new Map(), '', ''); }, ParameterError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs(new Map([['a',1],['b', 2]]), '', ''); }, ParameterError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs(new Set(), '', ''); }, ParameterError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs(new Set([1,2,3]), '', ''); }, ParameterError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs(/123/, '', ''); }, ParameterError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs(new RegExp('123'), '', ''); }, ParameterError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({}, '', ''); }, ParameterError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({a:1, b:2}, '', ''); }, ParameterError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs(new Object(), '', ''); }, ParameterError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({a:1, b:2}, '', ''); }, ParameterError); // paramConfigs 有固定格式。一般的对象不符合
    Assert.throwsErrors(()=>{ validTypesByConfigs({a:{value:123}}, '', ''); }, ParameterError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({a:{type:VDATA_TYPE.string}}, '', ''); }, ParameterError); 
    // 来一个合规的
    Assert.throwsErrorsNone(()=>{ validTypesByConfigs({'param1':{value:'123', type:VDATA_TYPE.string}}, 'func', 'cls'); }, ParameterError);
    
    // 参数2
    Assert.throwsErrorsNone(()=>{ validTypesByConfigs({'param1':{value:'123', type:VDATA_TYPE.string}}, undefined, 'cls'); });
    Assert.throwsErrors(()=>{ validTypesByConfigs({'param1':{value:'123', type:VDATA_TYPE.string}}, null, 'cls'); }, ParameterError);
    Assert.throwsErrors(()=>{ validTypesByConfigs({'param1':{value:'123', type:VDATA_TYPE.string}}, NaN, 'cls'); }, ParameterError);
    Assert.throwsErrorsNone(()=>{ validTypesByConfigs({'param1':{value:'123', type:VDATA_TYPE.string}}, '', 'cls'); });
    Assert.throwsErrorsNone(()=>{ validTypesByConfigs({'param1':{value:'123', type:VDATA_TYPE.string}}, 'sss', 'cls'); });
    Assert.throwsErrorsNone(()=>{ validTypesByConfigs({'param1':{value:'123', type:VDATA_TYPE.string}}, new String(''), 'cls'); });
    Assert.throwsErrorsNone(()=>{ validTypesByConfigs({'param1':{value:'123', type:VDATA_TYPE.string}}, new String('sss'), 'cls'); });
    Assert.throwsErrors(()=>{ validTypesByConfigs({'param1':{value:'123', type:VDATA_TYPE.string}}, 123, 'cls'); }, ParameterError);
    Assert.throwsErrors(()=>{ validTypesByConfigs({'param1':{value:'123', type:VDATA_TYPE.string}}, -1, 'cls'); }, ParameterError);
    Assert.throwsErrors(()=>{ validTypesByConfigs({'param1':{value:'123', type:VDATA_TYPE.string}}, new Number(123), 'cls'); }, ParameterError);
    Assert.throwsErrors(()=>{ validTypesByConfigs({'param1':{value:'123', type:VDATA_TYPE.string}}, new Number(-1), 'cls'); }, ParameterError);
    Assert.throwsErrors(()=>{ validTypesByConfigs({'param1':{value:'123', type:VDATA_TYPE.string}}, true, 'cls'); }, ParameterError);
    Assert.throwsErrors(()=>{ validTypesByConfigs({'param1':{value:'123', type:VDATA_TYPE.string}}, false, 'cls'); }, ParameterError);
    Assert.throwsErrors(()=>{ validTypesByConfigs({'param1':{value:'123', type:VDATA_TYPE.string}}, new Boolean(true), 'cls'); }, ParameterError);
    Assert.throwsErrors(()=>{ validTypesByConfigs({'param1':{value:'123', type:VDATA_TYPE.string}}, new Boolean(false), 'cls'); }, ParameterError);
    Assert.throwsErrors(()=>{ validTypesByConfigs({'param1':{value:'123', type:VDATA_TYPE.string}}, Symbol('uid'), 'cls'); }, ParameterError);
    Assert.throwsErrors(()=>{ validTypesByConfigs({'param1':{value:'123', type:VDATA_TYPE.string}}, Symbol.for('uid'), 'cls'); }, ParameterError);
    Assert.throwsErrors(()=>{ validTypesByConfigs({'param1':{value:'123', type:VDATA_TYPE.string}}, Error, 'cls'); }, ParameterError);
    Assert.throwsErrors(()=>{ validTypesByConfigs({'param1':{value:'123', type:VDATA_TYPE.string}}, ParameterError, 'cls'); }, ParameterError);
    Assert.throwsErrors(()=>{ validTypesByConfigs({'param1':{value:'123', type:VDATA_TYPE.string}}, testOptionsValidTypesByConfigsParam, 'cls'); }, ParameterError);
    Assert.throwsErrors(()=>{ validTypesByConfigs({'param1':{value:'123', type:VDATA_TYPE.string}}, function(){}, 'cls'); }, ParameterError);
    Assert.throwsErrors(()=>{ validTypesByConfigs({'param1':{value:'123', type:VDATA_TYPE.string}}, ()=>{}, 'cls'); }, ParameterError);
    Assert.throwsErrors(()=>{ validTypesByConfigs({'param1':{value:'123', type:VDATA_TYPE.string}}, [], 'cls'); }, ParameterError);
    Assert.throwsErrors(()=>{ validTypesByConfigs({'param1':{value:'123', type:VDATA_TYPE.string}}, [1,2,3], 'cls'); }, ParameterError);
    Assert.throwsErrors(()=>{ validTypesByConfigs({'param1':{value:'123', type:VDATA_TYPE.string}}, [[]], 'cls'); }, ParameterError);
    Assert.throwsErrors(()=>{ validTypesByConfigs({'param1':{value:'123', type:VDATA_TYPE.string}}, [[1,2,3],[4,5,6]], 'cls'); }, ParameterError);
    Assert.throwsErrors(()=>{ validTypesByConfigs({'param1':{value:'123', type:VDATA_TYPE.string}}, new Map(), 'cls'); }, ParameterError);
    Assert.throwsErrors(()=>{ validTypesByConfigs({'param1':{value:'123', type:VDATA_TYPE.string}}, new Map([['a',1],['b', 2]]), 'cls'); }, ParameterError);
    Assert.throwsErrors(()=>{ validTypesByConfigs({'param1':{value:'123', type:VDATA_TYPE.string}}, new Set(), 'cls'); }, ParameterError);
    Assert.throwsErrors(()=>{ validTypesByConfigs({'param1':{value:'123', type:VDATA_TYPE.string}}, new Set([1,2,3]), 'cls'); }, ParameterError);
    Assert.throwsErrors(()=>{ validTypesByConfigs({'param1':{value:'123', type:VDATA_TYPE.string}}, /123/, 'cls'); }, ParameterError);
    Assert.throwsErrors(()=>{ validTypesByConfigs({'param1':{value:'123', type:VDATA_TYPE.string}}, new RegExp('123'), 'cls'); }, ParameterError);
    Assert.throwsErrors(()=>{ validTypesByConfigs({'param1':{value:'123', type:VDATA_TYPE.string}}, {}, 'cls'); }, ParameterError);
    Assert.throwsErrors(()=>{ validTypesByConfigs({'param1':{value:'123', type:VDATA_TYPE.string}}, {a:1, b:2}, 'cls'); }, ParameterError);
    Assert.throwsErrors(()=>{ validTypesByConfigs({'param1':{value:'123', type:VDATA_TYPE.string}}, new Object(), 'cls'); }, ParameterError);

    // 参数3
    Assert.throwsErrorsNone(()=>{ validTypesByConfigs({'param1':{value:'123', type:VDATA_TYPE.string}}, 'func', undefined); });
    Assert.throwsErrors(()=>{ validTypesByConfigs({'param1':{value:'123', type:VDATA_TYPE.string}}, 'func', null); }, ParameterError);
    Assert.throwsErrors(()=>{ validTypesByConfigs({'param1':{value:'123', type:VDATA_TYPE.string}}, 'func', NaN); }, ParameterError);
    Assert.throwsErrorsNone(()=>{ validTypesByConfigs({'param1':{value:'123', type:VDATA_TYPE.string}}, 'func', ''); });
    Assert.throwsErrorsNone(()=>{ validTypesByConfigs({'param1':{value:'123', type:VDATA_TYPE.string}}, 'func', 'sss'); });
    Assert.throwsErrorsNone(()=>{ validTypesByConfigs({'param1':{value:'123', type:VDATA_TYPE.string}}, 'func', new String('')); });
    Assert.throwsErrorsNone(()=>{ validTypesByConfigs({'param1':{value:'123', type:VDATA_TYPE.string}}, 'func', new String('sss')); });
    Assert.throwsErrors(()=>{ validTypesByConfigs({'param1':{value:'123', type:VDATA_TYPE.string}}, 'func', 123); }, ParameterError);
    Assert.throwsErrors(()=>{ validTypesByConfigs({'param1':{value:'123', type:VDATA_TYPE.string}}, 'func', -1); }, ParameterError);
    Assert.throwsErrors(()=>{ validTypesByConfigs({'param1':{value:'123', type:VDATA_TYPE.string}}, 'func', new Number(123)); }, ParameterError);
    Assert.throwsErrors(()=>{ validTypesByConfigs({'param1':{value:'123', type:VDATA_TYPE.string}}, 'func', new Number(-1)); }, ParameterError);
    Assert.throwsErrors(()=>{ validTypesByConfigs({'param1':{value:'123', type:VDATA_TYPE.string}}, 'func', true); }, ParameterError);
    Assert.throwsErrors(()=>{ validTypesByConfigs({'param1':{value:'123', type:VDATA_TYPE.string}}, 'func', false); }, ParameterError);
    Assert.throwsErrors(()=>{ validTypesByConfigs({'param1':{value:'123', type:VDATA_TYPE.string}}, 'func', new Boolean(true)); }, ParameterError);
    Assert.throwsErrors(()=>{ validTypesByConfigs({'param1':{value:'123', type:VDATA_TYPE.string}}, 'func', new Boolean(false)); }, ParameterError);
    Assert.throwsErrors(()=>{ validTypesByConfigs({'param1':{value:'123', type:VDATA_TYPE.string}}, 'func', Symbol('uid')); }, ParameterError);
    Assert.throwsErrors(()=>{ validTypesByConfigs({'param1':{value:'123', type:VDATA_TYPE.string}}, 'func', Symbol.for('uid')); }, ParameterError);
    Assert.throwsErrors(()=>{ validTypesByConfigs({'param1':{value:'123', type:VDATA_TYPE.string}}, 'func', Error); }, ParameterError);
    Assert.throwsErrors(()=>{ validTypesByConfigs({'param1':{value:'123', type:VDATA_TYPE.string}}, 'func', ParameterError); }, ParameterError);
    Assert.throwsErrors(()=>{ validTypesByConfigs({'param1':{value:'123', type:VDATA_TYPE.string}}, 'func', testOptionsValidTypesByConfigsParam); }, ParameterError);
    Assert.throwsErrors(()=>{ validTypesByConfigs({'param1':{value:'123', type:VDATA_TYPE.string}}, 'func', function(){}); }, ParameterError);
    Assert.throwsErrors(()=>{ validTypesByConfigs({'param1':{value:'123', type:VDATA_TYPE.string}}, 'func', ()=>{}); }, ParameterError);
    Assert.throwsErrors(()=>{ validTypesByConfigs({'param1':{value:'123', type:VDATA_TYPE.string}}, 'func', []); }, ParameterError);
    Assert.throwsErrors(()=>{ validTypesByConfigs({'param1':{value:'123', type:VDATA_TYPE.string}}, 'func', [1,2,3]); }, ParameterError);
    Assert.throwsErrors(()=>{ validTypesByConfigs({'param1':{value:'123', type:VDATA_TYPE.string}}, 'func', [[]]); }, ParameterError);
    Assert.throwsErrors(()=>{ validTypesByConfigs({'param1':{value:'123', type:VDATA_TYPE.string}}, 'func', [[1,2,3],[4,5,6]]); }, ParameterError);
    Assert.throwsErrors(()=>{ validTypesByConfigs({'param1':{value:'123', type:VDATA_TYPE.string}}, 'func', new Map()); }, ParameterError);
    Assert.throwsErrors(()=>{ validTypesByConfigs({'param1':{value:'123', type:VDATA_TYPE.string}}, 'func', new Map([['a',1],['b', 2]])); }, ParameterError);
    Assert.throwsErrors(()=>{ validTypesByConfigs({'param1':{value:'123', type:VDATA_TYPE.string}}, 'func', new Set()); }, ParameterError);
    Assert.throwsErrors(()=>{ validTypesByConfigs({'param1':{value:'123', type:VDATA_TYPE.string}}, 'func', new Set([1,2,3])); }, ParameterError);
    Assert.throwsErrors(()=>{ validTypesByConfigs({'param1':{value:'123', type:VDATA_TYPE.string}}, 'func', /123/); }, ParameterError);
    Assert.throwsErrors(()=>{ validTypesByConfigs({'param1':{value:'123', type:VDATA_TYPE.string}}, 'func', new RegExp('123')); }, ParameterError);
    Assert.throwsErrors(()=>{ validTypesByConfigs({'param1':{value:'123', type:VDATA_TYPE.string}}, 'func', {}); }, ParameterError);
    Assert.throwsErrors(()=>{ validTypesByConfigs({'param1':{value:'123', type:VDATA_TYPE.string}}, 'func', {a:1, b:2}); }, ParameterError);
    Assert.throwsErrors(()=>{ validTypesByConfigs({'param1':{value:'123', type:VDATA_TYPE.string}}, 'func', new Object()); }, ParameterError);
}

function testOptionsValidTypesByConfigsVeri(){

    // 这里测试 函数校验的效果 VerificationError 。这里要求配置信息填写正确。

    // 先测试下抛出信息
    try{ validTypesByConfigs({ testParam1:{value:'abc', type:VDATA_TYPE.number} }); }catch(err){ console.log('这是测试输出', err.message); }
    try{ validTypesByConfigs({ testParam1:{value:'abc', type:VDATA_TYPE.number} }, 'func'); }catch(err){ console.log('这是测试输出', err.message); }
    try{ validTypesByConfigs({ testParam1:{value:'abc', type:VDATA_TYPE.number} }, 'func', 'cls'); }catch(err){ console.log('这是测试输出', err.message); }
    // 
    validTypesByConfigs({ testParam1:{value:'abc', type:[VDATA_TYPE.number, VDATA_TYPE.string]} });

    // 这里开始测试 要注意 canBeEmpty 和 targetTypes 的处理
    
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
    
    // null（要测试3个东西 null\undefined\NaN）
    Assert.throwsErrorsNone(()=>{ validTypesByConfigs({ null1:{value:null, type:VDATA_TYPE.null} }); });
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:null, type:VDATA_TYPE.string} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:null, type:VDATA_TYPE.number} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:null, type:VDATA_TYPE.boolean} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:null, type:VDATA_TYPE.symbol} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:null, type:VDATA_TYPE.func} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:null, type:VDATA_TYPE.cls} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:null, type:VDATA_TYPE.array} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:null, type:VDATA_TYPE.array2d} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:null, type:VDATA_TYPE.set} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:null, type:VDATA_TYPE.map} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:null, type:VDATA_TYPE.regexp} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:null, type:VDATA_TYPE.objectliteral} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:null, type:VDATA_TYPE.object} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:null, type:VDATA_TYPE.htmlElem} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:null, type:VDATA_TYPE.htmlElemList} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:null, type:VDATA_TYPE.targetObj, canBeEmpty:false, targetTypes:[String]} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:null, type:VDATA_TYPE.targetObjSet, canBeEmpty:false, targetTypes:[String]} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:null, type:VDATA_TYPE.targetObjArray, canBeEmpty:false, targetTypes:[String]} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:null, type:VDATA_TYPE.targetObj2DArray, canBeEmpty:false, targetTypes:[String]} }); }, VerificationError); 
    //
    Assert.throwsErrorsNone(()=>{ validTypesByConfigs({ null1:{value:undefined, type:VDATA_TYPE.null} }); });
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:undefined, type:VDATA_TYPE.string} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:undefined, type:VDATA_TYPE.number} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:undefined, type:VDATA_TYPE.boolean} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:undefined, type:VDATA_TYPE.symbol} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:undefined, type:VDATA_TYPE.func} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:undefined, type:VDATA_TYPE.cls} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:undefined, type:VDATA_TYPE.array} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:undefined, type:VDATA_TYPE.array2d} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:undefined, type:VDATA_TYPE.set} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:undefined, type:VDATA_TYPE.map} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:undefined, type:VDATA_TYPE.regexp} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:undefined, type:VDATA_TYPE.objectliteral} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:undefined, type:VDATA_TYPE.object} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:undefined, type:VDATA_TYPE.htmlElem} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:undefined, type:VDATA_TYPE.htmlElemList} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:undefined, type:VDATA_TYPE.targetObj, canBeEmpty:false, targetTypes:[String]} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:undefined, type:VDATA_TYPE.targetObjSet, canBeEmpty:false, targetTypes:[String]} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:undefined, type:VDATA_TYPE.targetObjArray, canBeEmpty:false, targetTypes:[String]} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:undefined, type:VDATA_TYPE.targetObj2DArray, canBeEmpty:false, targetTypes:[String]} }); }, VerificationError); 
    // 
    Assert.throwsErrorsNone(()=>{ validTypesByConfigs({ null1:{value:NaN, type:VDATA_TYPE.null} }); });
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:NaN, type:VDATA_TYPE.string} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:NaN, type:VDATA_TYPE.number} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:NaN, type:VDATA_TYPE.boolean} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:NaN, type:VDATA_TYPE.symbol} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:NaN, type:VDATA_TYPE.func} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:NaN, type:VDATA_TYPE.cls} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:NaN, type:VDATA_TYPE.array} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:NaN, type:VDATA_TYPE.array2d} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:NaN, type:VDATA_TYPE.set} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:NaN, type:VDATA_TYPE.map} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:NaN, type:VDATA_TYPE.regexp} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:NaN, type:VDATA_TYPE.objectliteral} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:NaN, type:VDATA_TYPE.object} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:NaN, type:VDATA_TYPE.htmlElem} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:NaN, type:VDATA_TYPE.htmlElemList} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:NaN, type:VDATA_TYPE.targetObj, canBeEmpty:false, targetTypes:[String]} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:NaN, type:VDATA_TYPE.targetObjSet, canBeEmpty:false, targetTypes:[String]} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:NaN, type:VDATA_TYPE.targetObjArray, canBeEmpty:false, targetTypes:[String]} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:NaN, type:VDATA_TYPE.targetObj2DArray, canBeEmpty:false, targetTypes:[String]} }); }, VerificationError); 
    // 在来一个数值校验，看看校验后的结果，是否和原值一致。
    let null1 = null;
    let null2 = undefined;
    let null3 = NaN;
    let nullResult = validTypesByConfigs({
        null1:{value:null1, type:VDATA_TYPE.null}, 
        null2:{value:null2, type:VDATA_TYPE.null}, 
        null3:{value:null3, type:VDATA_TYPE.null}
    });
    Assert.equalsStrictly(null1, nullResult['null1']);
    Assert.equalsStrictly(null2, nullResult['null2']);
    Assert.equalsStrictly(true, Number.isNaN(nullResult['null3']));

    // string（要测试 字符串值 和 字符串对象，另外要注意 canBeEmpty）
    Assert.throwsErrors(()=>{ validTypesByConfigs({ str1:{value:'', type:VDATA_TYPE.null} }); }, VerificationError);
    Assert.throwsErrors(()=>{ validTypesByConfigs({ str1:{value:'', type:VDATA_TYPE.string} }); }, VerificationError); 
    Assert.throwsErrorsNone(()=>{ validTypesByConfigs({ str1:{value:'', type:VDATA_TYPE.string, canBeEmpty:true} }); }); // 空字符串
    Assert.throwsErrors(()=>{ validTypesByConfigs({ str1:{value:'', type:VDATA_TYPE.number} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ str1:{value:'', type:VDATA_TYPE.boolean} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ str1:{value:'', type:VDATA_TYPE.symbol} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ str1:{value:'', type:VDATA_TYPE.func} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ str1:{value:'', type:VDATA_TYPE.cls} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ str1:{value:'', type:VDATA_TYPE.array} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ str1:{value:'', type:VDATA_TYPE.array2d} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ str1:{value:'', type:VDATA_TYPE.set} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ str1:{value:'', type:VDATA_TYPE.map} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ str1:{value:'', type:VDATA_TYPE.regexp} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ str1:{value:'', type:VDATA_TYPE.objectliteral} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ str1:{value:'', type:VDATA_TYPE.object} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ str1:{value:'', type:VDATA_TYPE.htmlElem} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ str1:{value:'', type:VDATA_TYPE.htmlElemList} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ str1:{value:'', type:VDATA_TYPE.targetObj, canBeEmpty:false, targetTypes:[Number]} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ str1:{value:'', type:VDATA_TYPE.targetObjSet, canBeEmpty:false, targetTypes:[Number]} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ str1:{value:'', type:VDATA_TYPE.targetObjArray, canBeEmpty:false, targetTypes:[Number]} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ str1:{value:'', type:VDATA_TYPE.targetObj2DArray, canBeEmpty:false, targetTypes:[Number]} }); }, VerificationError); 
    //
    Assert.throwsErrors(()=>{ validTypesByConfigs({ str1:{value:'sss', type:VDATA_TYPE.null} }); }, VerificationError);
    Assert.throwsErrorsNone(()=>{ validTypesByConfigs({ str1:{value:'sss', type:VDATA_TYPE.string} }); });
    Assert.throwsErrorsNone(()=>{ validTypesByConfigs({ str1:{value:'sss', type:VDATA_TYPE.string, canBeEmpty:true} }); });
    Assert.throwsErrors(()=>{ validTypesByConfigs({ str1:{value:'sss', type:VDATA_TYPE.number} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ str1:{value:'sss', type:VDATA_TYPE.boolean} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ str1:{value:'sss', type:VDATA_TYPE.symbol} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ str1:{value:'sss', type:VDATA_TYPE.func} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ str1:{value:'sss', type:VDATA_TYPE.cls} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ str1:{value:'sss', type:VDATA_TYPE.array} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ str1:{value:'sss', type:VDATA_TYPE.array2d} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ str1:{value:'sss', type:VDATA_TYPE.set} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ str1:{value:'sss', type:VDATA_TYPE.map} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ str1:{value:'sss', type:VDATA_TYPE.regexp} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ str1:{value:'sss', type:VDATA_TYPE.objectliteral} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ str1:{value:'sss', type:VDATA_TYPE.object} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ str1:{value:'sss', type:VDATA_TYPE.htmlElem} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ str1:{value:'sss', type:VDATA_TYPE.htmlElemList} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ str1:{value:'sss', type:VDATA_TYPE.targetObj, canBeEmpty:false, targetTypes:[Number]} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ str1:{value:'sss', type:VDATA_TYPE.targetObjSet, canBeEmpty:false, targetTypes:[Number]} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ str1:{value:'sss', type:VDATA_TYPE.targetObjArray, canBeEmpty:false, targetTypes:[Number]} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ str1:{value:'sss', type:VDATA_TYPE.targetObj2DArray, canBeEmpty:false, targetTypes:[Number]} }); }, VerificationError); 
    //
    Assert.throwsErrors(()=>{ validTypesByConfigs({ str1:{value:new String(''), type:VDATA_TYPE.null} }); }, VerificationError);
    Assert.throwsErrors(()=>{ validTypesByConfigs({ str1:{value:new String(''), type:VDATA_TYPE.string} }); }, VerificationError); 
    Assert.throwsErrorsNone(()=>{ validTypesByConfigs({ str1:{value:new String(''), type:VDATA_TYPE.string, canBeEmpty:true} }); }); //空字符串
    Assert.throwsErrors(()=>{ validTypesByConfigs({ str1:{value:new String(''), type:VDATA_TYPE.number} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ str1:{value:new String(''), type:VDATA_TYPE.boolean} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ str1:{value:new String(''), type:VDATA_TYPE.symbol} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ str1:{value:new String(''), type:VDATA_TYPE.func} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ str1:{value:new String(''), type:VDATA_TYPE.cls} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ str1:{value:new String(''), type:VDATA_TYPE.array} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ str1:{value:new String(''), type:VDATA_TYPE.array2d} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ str1:{value:new String(''), type:VDATA_TYPE.set} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ str1:{value:new String(''), type:VDATA_TYPE.map} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ str1:{value:new String(''), type:VDATA_TYPE.regexp} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ str1:{value:new String(''), type:VDATA_TYPE.objectliteral} }); }, VerificationError); 
    Assert.throwsErrorsNone(()=>{ validTypesByConfigs({ str1:{value:new String(''), type:VDATA_TYPE.object} }); }); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ str1:{value:new String(''), type:VDATA_TYPE.htmlElem} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ str1:{value:new String(''), type:VDATA_TYPE.htmlElemList} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ str1:{value:new String(''), type:VDATA_TYPE.targetObj, canBeEmpty:false, targetTypes:[Number]} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ str1:{value:new String(''), type:VDATA_TYPE.targetObjSet, canBeEmpty:false, targetTypes:[Number]} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ str1:{value:new String(''), type:VDATA_TYPE.targetObjArray, canBeEmpty:false, targetTypes:[Number]} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ str1:{value:new String(''), type:VDATA_TYPE.targetObj2DArray, canBeEmpty:false, targetTypes:[Number]} }); }, VerificationError);
    //
    Assert.throwsErrors(()=>{ validTypesByConfigs({ str1:{value:new String('sss'), type:VDATA_TYPE.null} }); }, VerificationError);
    Assert.throwsErrorsNone(()=>{ validTypesByConfigs({ str1:{value:new String('sss'), type:VDATA_TYPE.string} }); });
    Assert.throwsErrorsNone(()=>{ validTypesByConfigs({ str1:{value:new String('sss'), type:VDATA_TYPE.string, canBeEmpty:true} }); });
    Assert.throwsErrors(()=>{ validTypesByConfigs({ str1:{value:new String('sss'), type:VDATA_TYPE.number} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ str1:{value:new String('sss'), type:VDATA_TYPE.boolean} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ str1:{value:new String('sss'), type:VDATA_TYPE.symbol} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ str1:{value:new String('sss'), type:VDATA_TYPE.func} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ str1:{value:new String('sss'), type:VDATA_TYPE.cls} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ str1:{value:new String('sss'), type:VDATA_TYPE.array} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ str1:{value:new String('sss'), type:VDATA_TYPE.array2d} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ str1:{value:new String('sss'), type:VDATA_TYPE.set} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ str1:{value:new String('sss'), type:VDATA_TYPE.map} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ str1:{value:new String('sss'), type:VDATA_TYPE.regexp} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ str1:{value:new String('sss'), type:VDATA_TYPE.objectliteral} }); }, VerificationError); 
    Assert.throwsErrorsNone(()=>{ validTypesByConfigs({ str1:{value:new String('sss'), type:VDATA_TYPE.object} }); }); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ str1:{value:new String('sss'), type:VDATA_TYPE.htmlElem} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ str1:{value:new String('sss'), type:VDATA_TYPE.htmlElemList} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ str1:{value:new String('sss'), type:VDATA_TYPE.targetObj, canBeEmpty:false, targetTypes:[Number]} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ str1:{value:new String('sss'), type:VDATA_TYPE.targetObjSet, canBeEmpty:false, targetTypes:[Number]} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ str1:{value:new String('sss'), type:VDATA_TYPE.targetObjArray, canBeEmpty:false, targetTypes:[Number]} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ str1:{value:new String('sss'), type:VDATA_TYPE.targetObj2DArray, canBeEmpty:false, targetTypes:[Number]} }); }, VerificationError); 
    // 在来一个数值校验，看看校验后的结果，是否和原值一致。
    let str1 = 'aaa';
    let str2 = '   ';
    let str3 = '';
    let str4 = new String(str1);
    let str5 = new String(str2);
    let str6 = new String(str3);
    let results = validTypesByConfigs({
        str1:{value:str1, type:VDATA_TYPE.string, canBeEmpty:true},
        str2:{value:str2, type:VDATA_TYPE.string, canBeEmpty:true},
        str3:{value:str3, type:VDATA_TYPE.string, canBeEmpty:true},
        str4:{value:str4, type:VDATA_TYPE.string, canBeEmpty:true},
        str5:{value:str5, type:VDATA_TYPE.string, canBeEmpty:true},
        str6:{value:str6, type:VDATA_TYPE.string, canBeEmpty:true}
    });
    Assert.equalsStrictly(str1, results['str1']);
    Assert.equalsStrictly(str2, results['str2']);
    Assert.equalsStrictly(str3, results['str3']);
    Assert.equalsStrictly(str4.valueOf(), results['str4']);
    Assert.equalsStrictly(str5.valueOf(), results['str5']);
    Assert.equalsStrictly(str6.valueOf(), results['str6']);

    // number（要注意数值和对象的判断）
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:123, type:VDATA_TYPE.null} }); }, VerificationError);
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:123, type:VDATA_TYPE.string} }); }, VerificationError); 
    Assert.throwsErrorsNone(()=>{ validTypesByConfigs({ null1:{value:123, type:VDATA_TYPE.number} }); }); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:123, type:VDATA_TYPE.boolean} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:123, type:VDATA_TYPE.symbol} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:123, type:VDATA_TYPE.func} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:123, type:VDATA_TYPE.cls} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:123, type:VDATA_TYPE.array} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:123, type:VDATA_TYPE.array2d} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:123, type:VDATA_TYPE.set} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:123, type:VDATA_TYPE.map} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:123, type:VDATA_TYPE.regexp} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:123, type:VDATA_TYPE.objectliteral} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:123, type:VDATA_TYPE.object} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:123, type:VDATA_TYPE.htmlElem} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:123, type:VDATA_TYPE.htmlElemList} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:123, type:VDATA_TYPE.targetObj, canBeEmpty:false, targetTypes:[String]} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:123, type:VDATA_TYPE.targetObjSet, canBeEmpty:false, targetTypes:[String]} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:123, type:VDATA_TYPE.targetObjArray, canBeEmpty:false, targetTypes:[String]} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:123, type:VDATA_TYPE.targetObj2DArray, canBeEmpty:false, targetTypes:[String]} }); }, VerificationError); 
    // 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:new Number(123), type:VDATA_TYPE.null} }); }, VerificationError);
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:new Number(123), type:VDATA_TYPE.string} }); }, VerificationError); 
    Assert.throwsErrorsNone(()=>{ validTypesByConfigs({ null1:{value:new Number(123), type:VDATA_TYPE.number} }); }); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:new Number(123), type:VDATA_TYPE.boolean} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:new Number(123), type:VDATA_TYPE.symbol} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:new Number(123), type:VDATA_TYPE.func} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:new Number(123), type:VDATA_TYPE.cls} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:new Number(123), type:VDATA_TYPE.array} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:new Number(123), type:VDATA_TYPE.array2d} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:new Number(123), type:VDATA_TYPE.set} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:new Number(123), type:VDATA_TYPE.map} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:new Number(123), type:VDATA_TYPE.regexp} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:new Number(123), type:VDATA_TYPE.objectliteral} }); }, VerificationError); 
    Assert.throwsErrorsNone(()=>{ validTypesByConfigs({ null1:{value:new Number(123), type:VDATA_TYPE.object} }); }); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:new Number(123), type:VDATA_TYPE.htmlElem} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:new Number(123), type:VDATA_TYPE.htmlElemList} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:new Number(123), type:VDATA_TYPE.targetObj, canBeEmpty:false, targetTypes:[String]} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:new Number(123), type:VDATA_TYPE.targetObjSet, canBeEmpty:false, targetTypes:[String]} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:new Number(123), type:VDATA_TYPE.targetObjArray, canBeEmpty:false, targetTypes:[String]} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:new Number(123), type:VDATA_TYPE.targetObj2DArray, canBeEmpty:false, targetTypes:[String]} }); }, VerificationError); 
    // 在来一个数值校验，看看校验后的结果，是否和原值一致。
    let num1 = 123;
    let num2 = -1;
    let num3 = new Number('123');
    let num4 = new Number('-1');
    let resultsNum = validTypesByConfigs({
        num1:{value:num1, type:VDATA_TYPE.number},
        num2:{value:num2, type:VDATA_TYPE.number},
        num3:{value:num3, type:VDATA_TYPE.number},
        num4:{value:num4, type:VDATA_TYPE.number}
    });
    Assert.equalsStrictly(num1, resultsNum['num1']);
    Assert.equalsStrictly(num2, resultsNum['num2']);
    Assert.equalsStrictly(num3.valueOf(), resultsNum['num3']);
    Assert.equalsStrictly(num4.valueOf(), resultsNum['num4']);

    // boolean（要注意布尔值，和布尔对象）
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:true, type:VDATA_TYPE.null} }); }, VerificationError);
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:true, type:VDATA_TYPE.string} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:true, type:VDATA_TYPE.number} }); }, VerificationError); 
    Assert.throwsErrorsNone(()=>{ validTypesByConfigs({ null1:{value:true, type:VDATA_TYPE.boolean} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:true, type:VDATA_TYPE.symbol} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:true, type:VDATA_TYPE.func} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:true, type:VDATA_TYPE.cls} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:true, type:VDATA_TYPE.array} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:true, type:VDATA_TYPE.array2d} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:true, type:VDATA_TYPE.set} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:true, type:VDATA_TYPE.map} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:true, type:VDATA_TYPE.regexp} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:true, type:VDATA_TYPE.objectliteral} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:true, type:VDATA_TYPE.object} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:true, type:VDATA_TYPE.htmlElem} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:true, type:VDATA_TYPE.htmlElemList} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:true, type:VDATA_TYPE.targetObj, canBeEmpty:false, targetTypes:[String]} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:true, type:VDATA_TYPE.targetObjSet, canBeEmpty:false, targetTypes:[String]} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:true, type:VDATA_TYPE.targetObjArray, canBeEmpty:false, targetTypes:[String]} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:true, type:VDATA_TYPE.targetObj2DArray, canBeEmpty:false, targetTypes:[String]} }); }, VerificationError); 
    // 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:false, type:VDATA_TYPE.null} }); }, VerificationError);
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:false, type:VDATA_TYPE.string} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:false, type:VDATA_TYPE.number} }); }, VerificationError); 
    Assert.throwsErrorsNone(()=>{ validTypesByConfigs({ null1:{value:false, type:VDATA_TYPE.boolean} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:false, type:VDATA_TYPE.symbol} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:false, type:VDATA_TYPE.func} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:false, type:VDATA_TYPE.cls} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:false, type:VDATA_TYPE.array} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:false, type:VDATA_TYPE.array2d} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:false, type:VDATA_TYPE.set} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:false, type:VDATA_TYPE.map} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:false, type:VDATA_TYPE.regexp} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:false, type:VDATA_TYPE.objectliteral} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:false, type:VDATA_TYPE.object} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:false, type:VDATA_TYPE.htmlElem} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:false, type:VDATA_TYPE.htmlElemList} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:false, type:VDATA_TYPE.targetObj, canBeEmpty:false, targetTypes:[String]} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:false, type:VDATA_TYPE.targetObjSet, canBeEmpty:false, targetTypes:[String]} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:false, type:VDATA_TYPE.targetObjArray, canBeEmpty:false, targetTypes:[String]} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:false, type:VDATA_TYPE.targetObj2DArray, canBeEmpty:false, targetTypes:[String]} }); }, VerificationError); 
    //
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:new Boolean(true), type:VDATA_TYPE.null} }); }, VerificationError);
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:new Boolean(true), type:VDATA_TYPE.string} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:new Boolean(true), type:VDATA_TYPE.number} }); }, VerificationError); 
    Assert.throwsErrorsNone(()=>{ validTypesByConfigs({ null1:{value:new Boolean(true), type:VDATA_TYPE.boolean} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:new Boolean(true), type:VDATA_TYPE.symbol} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:new Boolean(true), type:VDATA_TYPE.func} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:new Boolean(true), type:VDATA_TYPE.cls} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:new Boolean(true), type:VDATA_TYPE.array} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:new Boolean(true), type:VDATA_TYPE.array2d} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:new Boolean(true), type:VDATA_TYPE.set} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:new Boolean(true), type:VDATA_TYPE.map} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:new Boolean(true), type:VDATA_TYPE.regexp} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:new Boolean(true), type:VDATA_TYPE.objectliteral} }); }, VerificationError); 
    Assert.throwsErrorsNone(()=>{ validTypesByConfigs({ null1:{value:new Boolean(true), type:VDATA_TYPE.object} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:new Boolean(true), type:VDATA_TYPE.htmlElem} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:new Boolean(true), type:VDATA_TYPE.htmlElemList} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:new Boolean(true), type:VDATA_TYPE.targetObj, canBeEmpty:false, targetTypes:[String]} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:new Boolean(true), type:VDATA_TYPE.targetObjSet, canBeEmpty:false, targetTypes:[String]} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:new Boolean(true), type:VDATA_TYPE.targetObjArray, canBeEmpty:false, targetTypes:[String]} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:new Boolean(true), type:VDATA_TYPE.targetObj2DArray, canBeEmpty:false, targetTypes:[String]} }); }, VerificationError); 
    // 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:new Boolean(false), type:VDATA_TYPE.null} }); }, VerificationError);
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:new Boolean(false), type:VDATA_TYPE.string} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:new Boolean(false), type:VDATA_TYPE.number} }); }, VerificationError); 
    Assert.throwsErrorsNone(()=>{ validTypesByConfigs({ null1:{value:new Boolean(false), type:VDATA_TYPE.boolean} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:new Boolean(false), type:VDATA_TYPE.symbol} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:new Boolean(false), type:VDATA_TYPE.func} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:new Boolean(false), type:VDATA_TYPE.cls} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:new Boolean(false), type:VDATA_TYPE.array} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:new Boolean(false), type:VDATA_TYPE.array2d} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:new Boolean(false), type:VDATA_TYPE.set} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:new Boolean(false), type:VDATA_TYPE.map} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:new Boolean(false), type:VDATA_TYPE.regexp} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:new Boolean(false), type:VDATA_TYPE.objectliteral} }); }, VerificationError); 
    Assert.throwsErrorsNone(()=>{ validTypesByConfigs({ null1:{value:new Boolean(false), type:VDATA_TYPE.object} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:new Boolean(false), type:VDATA_TYPE.htmlElem} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:new Boolean(false), type:VDATA_TYPE.htmlElemList} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:new Boolean(false), type:VDATA_TYPE.targetObj, canBeEmpty:false, targetTypes:[String]} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:new Boolean(false), type:VDATA_TYPE.targetObjSet, canBeEmpty:false, targetTypes:[String]} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:new Boolean(false), type:VDATA_TYPE.targetObjArray, canBeEmpty:false, targetTypes:[String]} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:new Boolean(false), type:VDATA_TYPE.targetObj2DArray, canBeEmpty:false, targetTypes:[String]} }); }, VerificationError); 
    // 在来一个数值校验，看看校验后的结果，是否和原值一致。
    let bool1 = true;
    let bool2 = false;
    let bool3 = new Boolean(true);
    let bool4 = new Boolean(false);
    let resultsBool = validTypesByConfigs({
        bool1:{value:bool1, type:VDATA_TYPE.boolean},
        bool2:{value:bool2, type:VDATA_TYPE.boolean},
        bool3:{value:bool3, type:VDATA_TYPE.boolean},
        bool4:{value:bool4, type:VDATA_TYPE.boolean}
    });
    Assert.equalsStrictly(bool1, resultsBool['bool1']);
    Assert.equalsStrictly(bool2, resultsBool['bool2']);
    Assert.equalsStrictly(bool3.valueOf(), resultsBool['bool3']);
    Assert.equalsStrictly(bool4.valueOf(), resultsBool['bool4']);

    // symbol 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:Symbol('sym1'), type:VDATA_TYPE.null} }); }, VerificationError);
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:Symbol('sym1'), type:VDATA_TYPE.string} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:Symbol('sym1'), type:VDATA_TYPE.number} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:Symbol('sym1'), type:VDATA_TYPE.boolean} }); }, VerificationError); 
    Assert.throwsErrorsNone(()=>{ validTypesByConfigs({ null1:{value:Symbol('sym1'), type:VDATA_TYPE.symbol} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:Symbol('sym1'), type:VDATA_TYPE.func} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:Symbol('sym1'), type:VDATA_TYPE.cls} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:Symbol('sym1'), type:VDATA_TYPE.array} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:Symbol('sym1'), type:VDATA_TYPE.array2d} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:Symbol('sym1'), type:VDATA_TYPE.set} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:Symbol('sym1'), type:VDATA_TYPE.map} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:Symbol('sym1'), type:VDATA_TYPE.regexp} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:Symbol('sym1'), type:VDATA_TYPE.objectliteral} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:Symbol('sym1'), type:VDATA_TYPE.object} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:Symbol('sym1'), type:VDATA_TYPE.htmlElem} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:Symbol('sym1'), type:VDATA_TYPE.htmlElemList} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:Symbol('sym1'), type:VDATA_TYPE.targetObj, canBeEmpty:false, targetTypes:[String]} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:Symbol('sym1'), type:VDATA_TYPE.targetObjSet, canBeEmpty:false, targetTypes:[String]} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:Symbol('sym1'), type:VDATA_TYPE.targetObjArray, canBeEmpty:false, targetTypes:[String]} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:Symbol('sym1'), type:VDATA_TYPE.targetObj2DArray, canBeEmpty:false, targetTypes:[String]} }); }, VerificationError); 
    //
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:Symbol.for('sym2'), type:VDATA_TYPE.null} }); }, VerificationError);
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:Symbol.for('sym2'), type:VDATA_TYPE.string} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:Symbol.for('sym2'), type:VDATA_TYPE.number} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:Symbol.for('sym2'), type:VDATA_TYPE.boolean} }); }, VerificationError); 
    Assert.throwsErrorsNone(()=>{ validTypesByConfigs({ null1:{value:Symbol.for('sym2'), type:VDATA_TYPE.symbol} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:Symbol.for('sym2'), type:VDATA_TYPE.func} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:Symbol.for('sym2'), type:VDATA_TYPE.cls} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:Symbol.for('sym2'), type:VDATA_TYPE.array} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:Symbol.for('sym2'), type:VDATA_TYPE.array2d} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:Symbol.for('sym2'), type:VDATA_TYPE.set} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:Symbol.for('sym2'), type:VDATA_TYPE.map} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:Symbol.for('sym2'), type:VDATA_TYPE.regexp} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:Symbol.for('sym2'), type:VDATA_TYPE.objectliteral} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:Symbol.for('sym2'), type:VDATA_TYPE.object} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:Symbol.for('sym2'), type:VDATA_TYPE.htmlElem} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:Symbol.for('sym2'), type:VDATA_TYPE.htmlElemList} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:Symbol.for('sym2'), type:VDATA_TYPE.targetObj, canBeEmpty:false, targetTypes:[String]} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:Symbol.for('sym2'), type:VDATA_TYPE.targetObjSet, canBeEmpty:false, targetTypes:[String]} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:Symbol.for('sym2'), type:VDATA_TYPE.targetObjArray, canBeEmpty:false, targetTypes:[String]} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:Symbol.for('sym2'), type:VDATA_TYPE.targetObj2DArray, canBeEmpty:false, targetTypes:[String]} }); }, VerificationError); 
    // 在来一个数值校验，看看校验后的结果，是否和原值一致。
    let sym1 = Symbol('sym1');
    let sym2 = Symbol.for('sym2');
    let resultsSymbol = validTypesByConfigs({
        sym1:{value:sym1, type:VDATA_TYPE.symbol},
        sym2:{value:sym2, type:VDATA_TYPE.symbol}
    });
    Assert.equalsStrictly(sym1, resultsSymbol['sym1']);
    Assert.equalsStrictly(sym2, resultsSymbol['sym2']);

    // func （注意，函数有3种：有名函数、匿名函数、箭头函数）
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:testOptionsFunc, type:VDATA_TYPE.null} }); }, VerificationError);
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:testOptionsFunc, type:VDATA_TYPE.string} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:testOptionsFunc, type:VDATA_TYPE.number} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:testOptionsFunc, type:VDATA_TYPE.boolean} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:testOptionsFunc, type:VDATA_TYPE.symbol} }); }, VerificationError); 
    Assert.throwsErrorsNone(()=>{ validTypesByConfigs({ null1:{value:testOptionsFunc, type:VDATA_TYPE.func} }); }, VerificationError); 
    Assert.throwsErrorsNone(()=>{ validTypesByConfigs({ null1:{value:testOptionsFunc, type:VDATA_TYPE.cls} }); }, VerificationError); // 函数也是类
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:testOptionsFunc, type:VDATA_TYPE.array} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:testOptionsFunc, type:VDATA_TYPE.array2d} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:testOptionsFunc, type:VDATA_TYPE.set} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:testOptionsFunc, type:VDATA_TYPE.map} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:testOptionsFunc, type:VDATA_TYPE.regexp} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:testOptionsFunc, type:VDATA_TYPE.objectliteral} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:testOptionsFunc, type:VDATA_TYPE.object} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:testOptionsFunc, type:VDATA_TYPE.htmlElem} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:testOptionsFunc, type:VDATA_TYPE.htmlElemList} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:testOptionsFunc, type:VDATA_TYPE.targetObj, canBeEmpty:false, targetTypes:[String]} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:testOptionsFunc, type:VDATA_TYPE.targetObjSet, canBeEmpty:false, targetTypes:[String]} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:testOptionsFunc, type:VDATA_TYPE.targetObjArray, canBeEmpty:false, targetTypes:[String]} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:testOptionsFunc, type:VDATA_TYPE.targetObj2DArray, canBeEmpty:false, targetTypes:[String]} }); }, VerificationError); 
    // 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:function(){}, type:VDATA_TYPE.null} }); }, VerificationError);
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:function(){}, type:VDATA_TYPE.string} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:function(){}, type:VDATA_TYPE.number} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:function(){}, type:VDATA_TYPE.boolean} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:function(){}, type:VDATA_TYPE.symbol} }); }, VerificationError); 
    Assert.throwsErrorsNone(()=>{ validTypesByConfigs({ null1:{value:function(){}, type:VDATA_TYPE.func} }); }, VerificationError); 
    Assert.throwsErrorsNone(()=>{ validTypesByConfigs({ null1:{value:function(){}, type:VDATA_TYPE.cls} }); }, VerificationError); // 在object中，这种写法会指定 name 值为 value
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:function(){}, type:VDATA_TYPE.array} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:function(){}, type:VDATA_TYPE.array2d} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:function(){}, type:VDATA_TYPE.set} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:function(){}, type:VDATA_TYPE.map} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:function(){}, type:VDATA_TYPE.regexp} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:function(){}, type:VDATA_TYPE.objectliteral} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:function(){}, type:VDATA_TYPE.object} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:function(){}, type:VDATA_TYPE.htmlElem} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:function(){}, type:VDATA_TYPE.htmlElemList} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:function(){}, type:VDATA_TYPE.targetObj, canBeEmpty:false, targetTypes:[String]} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:function(){}, type:VDATA_TYPE.targetObjSet, canBeEmpty:false, targetTypes:[String]} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:function(){}, type:VDATA_TYPE.targetObjArray, canBeEmpty:false, targetTypes:[String]} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:function(){}, type:VDATA_TYPE.targetObj2DArray, canBeEmpty:false, targetTypes:[String]} }); }, VerificationError); 
    // 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:()=>{}, type:VDATA_TYPE.null} }); }, VerificationError);
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:()=>{}, type:VDATA_TYPE.string} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:()=>{}, type:VDATA_TYPE.number} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:()=>{}, type:VDATA_TYPE.boolean} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:()=>{}, type:VDATA_TYPE.symbol} }); }, VerificationError); 
    Assert.throwsErrorsNone(()=>{ validTypesByConfigs({ null1:{value:()=>{}, type:VDATA_TYPE.func} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:()=>{}, type:VDATA_TYPE.cls} }); }, VerificationError);  // 箭头函数，不算类
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:()=>{}, type:VDATA_TYPE.array} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:()=>{}, type:VDATA_TYPE.array2d} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:()=>{}, type:VDATA_TYPE.set} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:()=>{}, type:VDATA_TYPE.map} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:()=>{}, type:VDATA_TYPE.regexp} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:()=>{}, type:VDATA_TYPE.objectliteral} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:()=>{}, type:VDATA_TYPE.object} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:()=>{}, type:VDATA_TYPE.htmlElem} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:()=>{}, type:VDATA_TYPE.htmlElemList} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:()=>{}, type:VDATA_TYPE.targetObj, canBeEmpty:false, targetTypes:[String]} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:()=>{}, type:VDATA_TYPE.targetObjSet, canBeEmpty:false, targetTypes:[String]} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:()=>{}, type:VDATA_TYPE.targetObjArray, canBeEmpty:false, targetTypes:[String]} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:()=>{}, type:VDATA_TYPE.targetObj2DArray, canBeEmpty:false, targetTypes:[String]} }); }, VerificationError); 
    // 在来一个数值校验，看看校验后的结果，是否和原值一致。
    let fun1 = ()=>{};
    let fun2 = function(){}
    let fun3 = testOptionsFunc;
    let resultsFuncs = validTypesByConfigs({
        fun1:{value:fun1, type:VDATA_TYPE.func},
        fun2:{value:fun2, type:VDATA_TYPE.func},
        fun3:{value:fun3, type:VDATA_TYPE.func}
    });
    Assert.equalsStrictly(fun1, resultsFuncs['fun1']);
    Assert.equalsStrictly(fun2, resultsFuncs['fun2']);
    Assert.equalsStrictly(fun3, resultsFuncs['fun3']);

    // cls
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:Error, type:VDATA_TYPE.null} }); }, VerificationError);
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:Error, type:VDATA_TYPE.string} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:Error, type:VDATA_TYPE.number} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:Error, type:VDATA_TYPE.boolean} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:Error, type:VDATA_TYPE.symbol} }); }, VerificationError); 
    Assert.throwsErrorsNone(()=>{ validTypesByConfigs({ null1:{value:Error, type:VDATA_TYPE.func} }); }, VerificationError); // 类也是函数
    Assert.throwsErrorsNone(()=>{ validTypesByConfigs({ null1:{value:Error, type:VDATA_TYPE.cls} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:Error, type:VDATA_TYPE.array} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:Error, type:VDATA_TYPE.array2d} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:Error, type:VDATA_TYPE.set} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:Error, type:VDATA_TYPE.map} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:Error, type:VDATA_TYPE.regexp} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:Error, type:VDATA_TYPE.objectliteral} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:Error, type:VDATA_TYPE.object} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:Error, type:VDATA_TYPE.htmlElem} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:Error, type:VDATA_TYPE.htmlElemList} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:Error, type:VDATA_TYPE.targetObj, canBeEmpty:false, targetTypes:[String]} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:Error, type:VDATA_TYPE.targetObjSet, canBeEmpty:false, targetTypes:[String]} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:Error, type:VDATA_TYPE.targetObjArray, canBeEmpty:false, targetTypes:[String]} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:Error, type:VDATA_TYPE.targetObj2DArray, canBeEmpty:false, targetTypes:[String]} }); }, VerificationError); 
    // 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:String, type:VDATA_TYPE.null} }); }, VerificationError);
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:String, type:VDATA_TYPE.string} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:String, type:VDATA_TYPE.number} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:String, type:VDATA_TYPE.boolean} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:String, type:VDATA_TYPE.symbol} }); }, VerificationError); 
    Assert.throwsErrorsNone(()=>{ validTypesByConfigs({ null1:{value:String, type:VDATA_TYPE.func} }); }, VerificationError); // 类也是函数
    Assert.throwsErrorsNone(()=>{ validTypesByConfigs({ null1:{value:String, type:VDATA_TYPE.cls} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:String, type:VDATA_TYPE.array} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:String, type:VDATA_TYPE.array2d} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:String, type:VDATA_TYPE.set} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:String, type:VDATA_TYPE.map} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:String, type:VDATA_TYPE.regexp} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:String, type:VDATA_TYPE.objectliteral} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:String, type:VDATA_TYPE.object} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:String, type:VDATA_TYPE.htmlElem} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:String, type:VDATA_TYPE.htmlElemList} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:String, type:VDATA_TYPE.targetObj, canBeEmpty:false, targetTypes:[String]} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:String, type:VDATA_TYPE.targetObjSet, canBeEmpty:false, targetTypes:[String]} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:String, type:VDATA_TYPE.targetObjArray, canBeEmpty:false, targetTypes:[String]} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:String, type:VDATA_TYPE.targetObj2DArray, canBeEmpty:false, targetTypes:[String]} }); }, VerificationError); 
    // 在来一个数值校验，看看校验后的结果，是否和原值一致。
    let cls1 = Error ;
    let cls2 = Assert ;
    let resultsCls = validTypesByConfigs({
        cls1:{value:cls1, type:VDATA_TYPE.cls},
        cls2:{value:cls2, type:VDATA_TYPE.cls}
    });
    Assert.equalsStrictly(cls1, resultsCls['cls1']);
    Assert.equalsStrictly(cls2, resultsCls['cls2']);

    // array 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:[], type:VDATA_TYPE.null} }); }, VerificationError);
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:[], type:VDATA_TYPE.string} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:[], type:VDATA_TYPE.number} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:[], type:VDATA_TYPE.boolean} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:[], type:VDATA_TYPE.symbol} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:[], type:VDATA_TYPE.func} }); }, VerificationError);
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:[], type:VDATA_TYPE.cls} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:[], type:VDATA_TYPE.array} }); }, VerificationError); 
    Assert.throwsErrorsNone(()=>{ validTypesByConfigs({ null1:{value:[], type:VDATA_TYPE.array, canBeEmpty:true} }); }, VerificationError); // 可以空时，才不抛异常
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:[], type:VDATA_TYPE.array2d} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:[], type:VDATA_TYPE.set} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:[], type:VDATA_TYPE.map} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:[], type:VDATA_TYPE.regexp} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:[], type:VDATA_TYPE.objectliteral} }); }, VerificationError); 
    Assert.throwsErrorsNone(()=>{ validTypesByConfigs({ null1:{value:[], type:VDATA_TYPE.object} }); }, VerificationError); // 数组也是对象
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:[], type:VDATA_TYPE.htmlElem} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:[], type:VDATA_TYPE.htmlElemList} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:[], type:VDATA_TYPE.targetObj, canBeEmpty:false, targetTypes:[String]} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:[], type:VDATA_TYPE.targetObjSet, canBeEmpty:false, targetTypes:[String]} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:[], type:VDATA_TYPE.targetObjArray, canBeEmpty:false, targetTypes:[String]} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:[], type:VDATA_TYPE.targetObj2DArray, canBeEmpty:false, targetTypes:[String]} }); }, VerificationError); 
    // 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:[1,2,3], type:VDATA_TYPE.null} }); }, VerificationError);
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:[1,2,3], type:VDATA_TYPE.string} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:[1,2,3], type:VDATA_TYPE.number} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:[1,2,3], type:VDATA_TYPE.boolean} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:[1,2,3], type:VDATA_TYPE.symbol} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:[1,2,3], type:VDATA_TYPE.func} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:[1,2,3], type:VDATA_TYPE.cls} }); }, VerificationError); 
    Assert.throwsErrorsNone(()=>{ validTypesByConfigs({ null1:{value:[1,2,3], type:VDATA_TYPE.array} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:[1,2,3], type:VDATA_TYPE.array2d} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:[1,2,3], type:VDATA_TYPE.set} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:[1,2,3], type:VDATA_TYPE.map} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:[1,2,3], type:VDATA_TYPE.regexp} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:[1,2,3], type:VDATA_TYPE.objectliteral} }); }, VerificationError); 
    Assert.throwsErrorsNone(()=>{ validTypesByConfigs({ null1:{value:[1,2,3], type:VDATA_TYPE.object} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:[1,2,3], type:VDATA_TYPE.htmlElem} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:[1,2,3], type:VDATA_TYPE.htmlElemList} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:[1,2,3], type:VDATA_TYPE.targetObj, canBeEmpty:false, targetTypes:[String]} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:[1,2,3], type:VDATA_TYPE.targetObjSet, canBeEmpty:false, targetTypes:[String]} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:[1,2,3], type:VDATA_TYPE.targetObjArray, canBeEmpty:false, targetTypes:[String]} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:[1,2,3], type:VDATA_TYPE.targetObj2DArray, canBeEmpty:false, targetTypes:[String]} }); }, VerificationError); 
    // 在来一个数值校验，看看校验后的结果，是否和原值一致。
    let arr1 = [];
    let arr2 = [1,2,3];
    let resultsArray = validTypesByConfigs({
        arr1:{value:arr1, type:VDATA_TYPE.array, canBeEmpty:true},
        arr2:{value:arr2, type:VDATA_TYPE.array}
    });
    Assert.equalsStrictly(arr1, resultsArray['arr1']);
    Assert.equalsStrictly(arr2, resultsArray['arr2']);

    // 2dArray 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:[[]], type:VDATA_TYPE.null} }); }, VerificationError);
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:[[]], type:VDATA_TYPE.string} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:[[]], type:VDATA_TYPE.number} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:[[]], type:VDATA_TYPE.boolean} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:[[]], type:VDATA_TYPE.symbol} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:[[]], type:VDATA_TYPE.func} }); }, VerificationError);
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:[[]], type:VDATA_TYPE.cls} }); }, VerificationError); 
    Assert.throwsErrorsNone(()=>{ validTypesByConfigs({ null1:{value:[[]], type:VDATA_TYPE.array} }); }, VerificationError); // 二维数组，也是数组
    Assert.throwsErrorsNone(()=>{ validTypesByConfigs({ null1:{value:[[]], type:VDATA_TYPE.array, canBeEmpty:true} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:[[]], type:VDATA_TYPE.array2d} }); }, VerificationError); 
    Assert.throwsErrorsNone(()=>{ validTypesByConfigs({ null1:{value:[[]], type:VDATA_TYPE.array2d, canBeEmpty:true} }); }, VerificationError); // 可以为空，才不抛异常
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:[[]], type:VDATA_TYPE.set} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:[[]], type:VDATA_TYPE.map} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:[[]], type:VDATA_TYPE.regexp} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:[[]], type:VDATA_TYPE.objectliteral} }); }, VerificationError); 
    Assert.throwsErrorsNone(()=>{ validTypesByConfigs({ null1:{value:[[]], type:VDATA_TYPE.object} }); }, VerificationError); // 数组也是对象
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:[[]], type:VDATA_TYPE.htmlElem} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:[[]], type:VDATA_TYPE.htmlElemList} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:[[]], type:VDATA_TYPE.targetObj, canBeEmpty:false, targetTypes:[String]} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:[[]], type:VDATA_TYPE.targetObjSet, canBeEmpty:false, targetTypes:[String]} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:[[]], type:VDATA_TYPE.targetObjArray, canBeEmpty:false, targetTypes:[String]} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:[[]], type:VDATA_TYPE.targetObj2DArray, canBeEmpty:false, targetTypes:[String]} }); }, VerificationError); 
    // 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:[[1,2,3]], type:VDATA_TYPE.null} }); }, VerificationError);
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:[[1,2,3]], type:VDATA_TYPE.string} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:[[1,2,3]], type:VDATA_TYPE.number} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:[[1,2,3]], type:VDATA_TYPE.boolean} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:[[1,2,3]], type:VDATA_TYPE.symbol} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:[[1,2,3]], type:VDATA_TYPE.func} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:[[1,2,3]], type:VDATA_TYPE.cls} }); }, VerificationError); 
    Assert.throwsErrorsNone(()=>{ validTypesByConfigs({ null1:{value:[[1,2,3]], type:VDATA_TYPE.array} }); }, VerificationError); // 二维数组，也是数组
    Assert.throwsErrorsNone(()=>{ validTypesByConfigs({ null1:{value:[[1,2,3]], type:VDATA_TYPE.array, canBeEmpty:true} }); }, VerificationError);
    Assert.throwsErrorsNone(()=>{ validTypesByConfigs({ null1:{value:[[1,2,3]], type:VDATA_TYPE.array2d} }); }, VerificationError); 
    Assert.throwsErrorsNone(()=>{ validTypesByConfigs({ null1:{value:[[1,2,3]], type:VDATA_TYPE.array2d, canBeEmpty:true} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:[[1,2,3]], type:VDATA_TYPE.set} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:[[1,2,3]], type:VDATA_TYPE.map} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:[[1,2,3]], type:VDATA_TYPE.regexp} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:[[1,2,3]], type:VDATA_TYPE.objectliteral} }); }, VerificationError); 
    Assert.throwsErrorsNone(()=>{ validTypesByConfigs({ null1:{value:[[1,2,3]], type:VDATA_TYPE.object} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:[[1,2,3]], type:VDATA_TYPE.htmlElem} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:[[1,2,3]], type:VDATA_TYPE.htmlElemList} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:[[1,2,3]], type:VDATA_TYPE.targetObj, canBeEmpty:false, targetTypes:[String]} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:[[1,2,3]], type:VDATA_TYPE.targetObjSet, canBeEmpty:false, targetTypes:[String]} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:[[1,2,3]], type:VDATA_TYPE.targetObjArray, canBeEmpty:false, targetTypes:[String]} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:[[1,2,3]], type:VDATA_TYPE.targetObj2DArray, canBeEmpty:false, targetTypes:[String]} }); }, VerificationError); 
    // 在来一个数值校验，看看校验后的结果，是否和原值一致。
    let arr2d1 = [[]];
    let arr2d2 = [[1,2,3]];
    let resultsArray2d = validTypesByConfigs({
        arr2d1:{value:arr2d1, type:VDATA_TYPE.array2d, canBeEmpty:true},
        arr2d2:{value:arr2d2, type:VDATA_TYPE.array2d}
    });
    Assert.equalsStrictly(arr2d1, resultsArray2d['arr2d1']);
    Assert.equalsStrictly(arr2d2, resultsArray2d['arr2d2']);

    // set
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:new Set(), type:VDATA_TYPE.null} }); }, VerificationError);
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:new Set(), type:VDATA_TYPE.string} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:new Set(), type:VDATA_TYPE.number} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:new Set(), type:VDATA_TYPE.boolean} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:new Set(), type:VDATA_TYPE.symbol} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:new Set(), type:VDATA_TYPE.func} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:new Set(), type:VDATA_TYPE.cls} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:new Set(), type:VDATA_TYPE.array} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:new Set(), type:VDATA_TYPE.array2d} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:new Set(), type:VDATA_TYPE.set} }); }, VerificationError); 
    Assert.throwsErrorsNone(()=>{ validTypesByConfigs({ null1:{value:new Set(), type:VDATA_TYPE.set, canBeEmpty:true} }); }, VerificationError); // 可为空，才true
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:new Set(), type:VDATA_TYPE.map} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:new Set(), type:VDATA_TYPE.regexp} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:new Set(), type:VDATA_TYPE.objectliteral} }); }, VerificationError); 
    Assert.throwsErrorsNone(()=>{ validTypesByConfigs({ null1:{value:new Set(), type:VDATA_TYPE.object} }); }, VerificationError); // set 也是一个对象
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:new Set(), type:VDATA_TYPE.htmlElem} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:new Set(), type:VDATA_TYPE.htmlElemList} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:new Set(), type:VDATA_TYPE.targetObj, canBeEmpty:false, targetTypes:[String]} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:new Set(), type:VDATA_TYPE.targetObjSet, canBeEmpty:false, targetTypes:[String]} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:new Set(), type:VDATA_TYPE.targetObjArray, canBeEmpty:false, targetTypes:[String]} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:new Set(), type:VDATA_TYPE.targetObj2DArray, canBeEmpty:false, targetTypes:[String]} }); }, VerificationError); 
    // 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:new Set([1,2,3]), type:VDATA_TYPE.null} }); }, VerificationError);
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:new Set([1,2,3]), type:VDATA_TYPE.string} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:new Set([1,2,3]), type:VDATA_TYPE.number} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:new Set([1,2,3]), type:VDATA_TYPE.boolean} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:new Set([1,2,3]), type:VDATA_TYPE.symbol} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:new Set([1,2,3]), type:VDATA_TYPE.func} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:new Set([1,2,3]), type:VDATA_TYPE.cls} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:new Set([1,2,3]), type:VDATA_TYPE.array} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:new Set([1,2,3]), type:VDATA_TYPE.array2d} }); }, VerificationError); 
    Assert.throwsErrorsNone(()=>{ validTypesByConfigs({ null1:{value:new Set([1,2,3]), type:VDATA_TYPE.set} }); }, VerificationError); 
    Assert.throwsErrorsNone(()=>{ validTypesByConfigs({ null1:{value:new Set([1,2,3]), type:VDATA_TYPE.set, canBeEmpty:true} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:new Set([1,2,3]), type:VDATA_TYPE.map} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:new Set([1,2,3]), type:VDATA_TYPE.regexp} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:new Set([1,2,3]), type:VDATA_TYPE.objectliteral} }); }, VerificationError); 
    Assert.throwsErrorsNone(()=>{ validTypesByConfigs({ null1:{value:new Set([1,2,3]), type:VDATA_TYPE.object} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:new Set([1,2,3]), type:VDATA_TYPE.htmlElem} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:new Set([1,2,3]), type:VDATA_TYPE.htmlElemList} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:new Set([1,2,3]), type:VDATA_TYPE.targetObj, canBeEmpty:false, targetTypes:[String]} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:new Set([1,2,3]), type:VDATA_TYPE.targetObjSet, canBeEmpty:false, targetTypes:[String]} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:new Set([1,2,3]), type:VDATA_TYPE.targetObjArray, canBeEmpty:false, targetTypes:[String]} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:new Set([1,2,3]), type:VDATA_TYPE.targetObj2DArray, canBeEmpty:false, targetTypes:[String]} }); }, VerificationError); 
    // 在来一个数值校验，看看校验后的结果，是否和原值一致。
    let set1 = new Set();
    let set2 = new Set([1,2,3]);
    let resultsSet = validTypesByConfigs({
        set1:{value:set1, type:VDATA_TYPE.set, canBeEmpty:true},
        set2:{value:set2, type:VDATA_TYPE.set}
    });
    Assert.equalsStrictly(set1, resultsSet['set1']);
    Assert.equalsStrictly(set2, resultsSet['set2']);

    // map
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:new Map(), type:VDATA_TYPE.null} }); }, VerificationError);
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:new Map(), type:VDATA_TYPE.string} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:new Map(), type:VDATA_TYPE.number} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:new Map(), type:VDATA_TYPE.boolean} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:new Map(), type:VDATA_TYPE.symbol} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:new Map(), type:VDATA_TYPE.func} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:new Map(), type:VDATA_TYPE.cls} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:new Map(), type:VDATA_TYPE.array} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:new Map(), type:VDATA_TYPE.array2d} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:new Map(), type:VDATA_TYPE.set} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:new Map(), type:VDATA_TYPE.map} }); }, VerificationError); 
    Assert.throwsErrorsNone(()=>{ validTypesByConfigs({ null1:{value:new Map(), type:VDATA_TYPE.map, canBeEmpty:true} }); }, VerificationError); // 可为空才 true 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:new Map(), type:VDATA_TYPE.regexp} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:new Map(), type:VDATA_TYPE.objectliteral} }); }, VerificationError); 
    Assert.throwsErrorsNone(()=>{ validTypesByConfigs({ null1:{value:new Map(), type:VDATA_TYPE.object} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:new Map(), type:VDATA_TYPE.htmlElem} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:new Map(), type:VDATA_TYPE.htmlElemList} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:new Map(), type:VDATA_TYPE.targetObj, canBeEmpty:false, targetTypes:[String]} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:new Map(), type:VDATA_TYPE.targetObjSet, canBeEmpty:false, targetTypes:[String]} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:new Map(), type:VDATA_TYPE.targetObjArray, canBeEmpty:false, targetTypes:[String]} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:new Map(), type:VDATA_TYPE.targetObj2DArray, canBeEmpty:false, targetTypes:[String]} }); }, VerificationError); 
    // 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:new Map([['a', 1],['b', 2]]), type:VDATA_TYPE.null} }); }, VerificationError);
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:new Map([['a', 1],['b', 2]]), type:VDATA_TYPE.string} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:new Map([['a', 1],['b', 2]]), type:VDATA_TYPE.number} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:new Map([['a', 1],['b', 2]]), type:VDATA_TYPE.boolean} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:new Map([['a', 1],['b', 2]]), type:VDATA_TYPE.symbol} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:new Map([['a', 1],['b', 2]]), type:VDATA_TYPE.func} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:new Map([['a', 1],['b', 2]]), type:VDATA_TYPE.cls} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:new Map([['a', 1],['b', 2]]), type:VDATA_TYPE.array} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:new Map([['a', 1],['b', 2]]), type:VDATA_TYPE.array2d} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:new Map([['a', 1],['b', 2]]), type:VDATA_TYPE.set} }); }, VerificationError); 
    Assert.throwsErrorsNone(()=>{ validTypesByConfigs({ null1:{value:new Map([['a', 1],['b', 2]]), type:VDATA_TYPE.map} }); }, VerificationError); 
    Assert.throwsErrorsNone(()=>{ validTypesByConfigs({ null1:{value:new Map([['a', 1],['b', 2]]), type:VDATA_TYPE.map, canBeEmpty:true} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:new Map([['a', 1],['b', 2]]), type:VDATA_TYPE.regexp} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:new Map([['a', 1],['b', 2]]), type:VDATA_TYPE.objectliteral} }); }, VerificationError); 
    Assert.throwsErrorsNone(()=>{ validTypesByConfigs({ null1:{value:new Map([['a', 1],['b', 2]]), type:VDATA_TYPE.object} }); }, VerificationError); // Map 是对象
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:new Map([['a', 1],['b', 2]]), type:VDATA_TYPE.htmlElem} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:new Map([['a', 1],['b', 2]]), type:VDATA_TYPE.htmlElemList} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:new Map([['a', 1],['b', 2]]), type:VDATA_TYPE.targetObj, canBeEmpty:false, targetTypes:[String]} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:new Map([['a', 1],['b', 2]]), type:VDATA_TYPE.targetObjSet, canBeEmpty:false, targetTypes:[String]} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:new Map([['a', 1],['b', 2]]), type:VDATA_TYPE.targetObjArray, canBeEmpty:false, targetTypes:[String]} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:new Map([['a', 1],['b', 2]]), type:VDATA_TYPE.targetObj2DArray, canBeEmpty:false, targetTypes:[String]} }); }, VerificationError); 
    // 在来一个数值校验，看看校验后的结果，是否和原值一致。
    let map1 = new Map();
    let map2 = new Map([['a', 1],['b', 2]]);
    let resultsMap = validTypesByConfigs({
        map1:{value:map1, type:VDATA_TYPE.map, canBeEmpty:true},
        map2:{value:map2, type:VDATA_TYPE.map}
    });
    Assert.equalsStrictly(map1, resultsMap['map1']);
    Assert.equalsStrictly(map2, resultsMap['map2']);

    // regexp
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:/123/, type:VDATA_TYPE.null} }); }, VerificationError);
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:/123/, type:VDATA_TYPE.string} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:/123/, type:VDATA_TYPE.number} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:/123/, type:VDATA_TYPE.boolean} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:/123/, type:VDATA_TYPE.symbol} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:/123/, type:VDATA_TYPE.func} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:/123/, type:VDATA_TYPE.cls} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:/123/, type:VDATA_TYPE.array} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:/123/, type:VDATA_TYPE.array2d} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:/123/, type:VDATA_TYPE.set} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:/123/, type:VDATA_TYPE.map} }); }, VerificationError); 
    Assert.throwsErrorsNone(()=>{ validTypesByConfigs({ null1:{value:/123/, type:VDATA_TYPE.regexp} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:/123/, type:VDATA_TYPE.objectliteral} }); }, VerificationError); 
    Assert.throwsErrorsNone(()=>{ validTypesByConfigs({ null1:{value:/123/, type:VDATA_TYPE.object} }); }, VerificationError); // 是对象
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:/123/, type:VDATA_TYPE.htmlElem} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:/123/, type:VDATA_TYPE.htmlElemList} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:/123/, type:VDATA_TYPE.targetObj, canBeEmpty:false, targetTypes:[String]} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:/123/, type:VDATA_TYPE.targetObjSet, canBeEmpty:false, targetTypes:[String]} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:/123/, type:VDATA_TYPE.targetObjArray, canBeEmpty:false, targetTypes:[String]} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:/123/, type:VDATA_TYPE.targetObj2DArray, canBeEmpty:false, targetTypes:[String]} }); }, VerificationError); 
    // 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:new RegExp('123'), type:VDATA_TYPE.null} }); }, VerificationError);
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:new RegExp('123'), type:VDATA_TYPE.string} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:new RegExp('123'), type:VDATA_TYPE.number} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:new RegExp('123'), type:VDATA_TYPE.boolean} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:new RegExp('123'), type:VDATA_TYPE.symbol} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:new RegExp('123'), type:VDATA_TYPE.func} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:new RegExp('123'), type:VDATA_TYPE.cls} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:new RegExp('123'), type:VDATA_TYPE.array} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:new RegExp('123'), type:VDATA_TYPE.array2d} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:new RegExp('123'), type:VDATA_TYPE.set} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:new RegExp('123'), type:VDATA_TYPE.map} }); }, VerificationError); 
    Assert.throwsErrorsNone(()=>{ validTypesByConfigs({ null1:{value:new RegExp('123'), type:VDATA_TYPE.regexp} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:new RegExp('123'), type:VDATA_TYPE.objectliteral} }); }, VerificationError); 
    Assert.throwsErrorsNone(()=>{ validTypesByConfigs({ null1:{value:new RegExp('123'), type:VDATA_TYPE.object} }); }, VerificationError); // 是对象
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:new RegExp('123'), type:VDATA_TYPE.htmlElem} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:new RegExp('123'), type:VDATA_TYPE.htmlElemList} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:new RegExp('123'), type:VDATA_TYPE.targetObj, canBeEmpty:false, targetTypes:[String]} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:new RegExp('123'), type:VDATA_TYPE.targetObjSet, canBeEmpty:false, targetTypes:[String]} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:new RegExp('123'), type:VDATA_TYPE.targetObjArray, canBeEmpty:false, targetTypes:[String]} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:new RegExp('123'), type:VDATA_TYPE.targetObj2DArray, canBeEmpty:false, targetTypes:[String]} }); }, VerificationError); 
    // 在来一个数值校验，看看校验后的结果，是否和原值一致。
    let reg1 = /123/;
    let reg2 = new RegExp('123');
    let resultsRegExp = validTypesByConfigs({
        reg1:{value:reg1, type:VDATA_TYPE.regexp},
        reg2:{value:reg2, type:VDATA_TYPE.regexp}
    });
    Assert.equalsStrictly(reg1, resultsRegExp['reg1']);
    Assert.equalsStrictly(reg2, resultsRegExp['reg2']);

    // objectliteral
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:{}, type:VDATA_TYPE.null} }); }, VerificationError);
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:{}, type:VDATA_TYPE.string} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:{}, type:VDATA_TYPE.number} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:{}, type:VDATA_TYPE.boolean} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:{}, type:VDATA_TYPE.symbol} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:{}, type:VDATA_TYPE.func} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:{}, type:VDATA_TYPE.cls} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:{}, type:VDATA_TYPE.array} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:{}, type:VDATA_TYPE.array2d} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:{}, type:VDATA_TYPE.set} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:{}, type:VDATA_TYPE.map} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:{}, type:VDATA_TYPE.regexp} }); }, VerificationError); 
    Assert.throwsErrorsNone(()=>{ validTypesByConfigs({ null1:{value:{}, type:VDATA_TYPE.objectliteral} }); }, VerificationError); 
    Assert.throwsErrorsNone(()=>{ validTypesByConfigs({ null1:{value:{}, type:VDATA_TYPE.object} }); }, VerificationError); // 是对象
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:{}, type:VDATA_TYPE.htmlElem} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:{}, type:VDATA_TYPE.htmlElemList} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:{}, type:VDATA_TYPE.targetObj, canBeEmpty:false, targetTypes:[String]} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:{}, type:VDATA_TYPE.targetObjSet, canBeEmpty:false, targetTypes:[String]} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:{}, type:VDATA_TYPE.targetObjArray, canBeEmpty:false, targetTypes:[String]} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:{}, type:VDATA_TYPE.targetObj2DArray, canBeEmpty:false, targetTypes:[String]} }); }, VerificationError); 
    // 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:{a:1, b:2}, type:VDATA_TYPE.null} }); }, VerificationError);
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:{a:1, b:2}, type:VDATA_TYPE.string} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:{a:1, b:2}, type:VDATA_TYPE.number} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:{a:1, b:2}, type:VDATA_TYPE.boolean} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:{a:1, b:2}, type:VDATA_TYPE.symbol} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:{a:1, b:2}, type:VDATA_TYPE.func} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:{a:1, b:2}, type:VDATA_TYPE.cls} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:{a:1, b:2}, type:VDATA_TYPE.array} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:{a:1, b:2}, type:VDATA_TYPE.array2d} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:{a:1, b:2}, type:VDATA_TYPE.set} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:{a:1, b:2}, type:VDATA_TYPE.map} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:{a:1, b:2}, type:VDATA_TYPE.regexp} }); }, VerificationError); 
    Assert.throwsErrorsNone(()=>{ validTypesByConfigs({ null1:{value:{a:1, b:2}, type:VDATA_TYPE.objectliteral} }); }, VerificationError); 
    Assert.throwsErrorsNone(()=>{ validTypesByConfigs({ null1:{value:{a:1, b:2}, type:VDATA_TYPE.object} }); }, VerificationError); // 是对象
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:{a:1, b:2}, type:VDATA_TYPE.htmlElem} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:{a:1, b:2}, type:VDATA_TYPE.htmlElemList} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:{a:1, b:2}, type:VDATA_TYPE.targetObj, canBeEmpty:false, targetTypes:[String]} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:{a:1, b:2}, type:VDATA_TYPE.targetObjSet, canBeEmpty:false, targetTypes:[String]} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:{a:1, b:2}, type:VDATA_TYPE.targetObjArray, canBeEmpty:false, targetTypes:[String]} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:{a:1, b:2}, type:VDATA_TYPE.targetObj2DArray, canBeEmpty:false, targetTypes:[String]} }); }, VerificationError); 
    //
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:new Object(), type:VDATA_TYPE.null} }); }, VerificationError);
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:new Object(), type:VDATA_TYPE.string} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:new Object(), type:VDATA_TYPE.number} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:new Object(), type:VDATA_TYPE.boolean} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:new Object(), type:VDATA_TYPE.symbol} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:new Object(), type:VDATA_TYPE.func} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:new Object(), type:VDATA_TYPE.cls} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:new Object(), type:VDATA_TYPE.array} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:new Object(), type:VDATA_TYPE.array2d} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:new Object(), type:VDATA_TYPE.set} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:new Object(), type:VDATA_TYPE.map} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:new Object(), type:VDATA_TYPE.regexp} }); }, VerificationError); 
    Assert.throwsErrorsNone(()=>{ validTypesByConfigs({ null1:{value:new Object(), type:VDATA_TYPE.objectliteral} }); }, VerificationError); 
    Assert.throwsErrorsNone(()=>{ validTypesByConfigs({ null1:{value:new Object(), type:VDATA_TYPE.object} }); }, VerificationError); // 是对象
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:new Object(), type:VDATA_TYPE.htmlElem} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:new Object(), type:VDATA_TYPE.htmlElemList} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:new Object(), type:VDATA_TYPE.targetObj, canBeEmpty:false, targetTypes:[String]} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:new Object(), type:VDATA_TYPE.targetObjSet, canBeEmpty:false, targetTypes:[String]} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:new Object(), type:VDATA_TYPE.targetObjArray, canBeEmpty:false, targetTypes:[String]} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:new Object(), type:VDATA_TYPE.targetObj2DArray, canBeEmpty:false, targetTypes:[String]} }); }, VerificationError); 
    // 在来一个数值校验，看看校验后的结果，是否和原值一致。
    let objliteral1 = {};
    let objliteral2 = {a:1, b:2};
    let objliteral3 = new Object();
    let resultsObjliteral = validTypesByConfigs({
        objliteral1:{value:objliteral1, type:VDATA_TYPE.objectliteral},
        objliteral2:{value:objliteral2, type:VDATA_TYPE.objectliteral},
        objliteral3:{value:objliteral3, type:VDATA_TYPE.objectliteral}
    });
    Assert.equalsStrictly(objliteral1, resultsObjliteral['objliteral1']);
    Assert.equalsStrictly(objliteral2, resultsObjliteral['objliteral2']);
    Assert.equalsStrictly(objliteral3, resultsObjliteral['objliteral3']);

    // object
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:{}, type:VDATA_TYPE.null} }); }, VerificationError);
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:{}, type:VDATA_TYPE.string} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:{}, type:VDATA_TYPE.number} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:{}, type:VDATA_TYPE.boolean} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:{}, type:VDATA_TYPE.symbol} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:{}, type:VDATA_TYPE.func} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:{}, type:VDATA_TYPE.cls} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:{}, type:VDATA_TYPE.array} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:{}, type:VDATA_TYPE.array2d} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:{}, type:VDATA_TYPE.set} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:{}, type:VDATA_TYPE.map} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:{}, type:VDATA_TYPE.regexp} }); }, VerificationError); 
    Assert.throwsErrorsNone(()=>{ validTypesByConfigs({ null1:{value:{}, type:VDATA_TYPE.objectliteral} }); }, VerificationError); 
    Assert.throwsErrorsNone(()=>{ validTypesByConfigs({ null1:{value:{}, type:VDATA_TYPE.object} }); }, VerificationError); // 是对象
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:{}, type:VDATA_TYPE.htmlElem} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:{}, type:VDATA_TYPE.htmlElemList} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:{}, type:VDATA_TYPE.targetObj, canBeEmpty:false, targetTypes:[String]} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:{}, type:VDATA_TYPE.targetObjSet, canBeEmpty:false, targetTypes:[String]} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:{}, type:VDATA_TYPE.targetObjArray, canBeEmpty:false, targetTypes:[String]} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:{}, type:VDATA_TYPE.targetObj2DArray, canBeEmpty:false, targetTypes:[String]} }); }, VerificationError); 
    // 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:new String(), type:VDATA_TYPE.null} }); }, VerificationError);
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:new String(), type:VDATA_TYPE.string} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:new String(), type:VDATA_TYPE.number} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:new String(), type:VDATA_TYPE.boolean} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:new String(), type:VDATA_TYPE.symbol} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:new String(), type:VDATA_TYPE.func} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:new String(), type:VDATA_TYPE.cls} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:new String(), type:VDATA_TYPE.array} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:new String(), type:VDATA_TYPE.array2d} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:new String(), type:VDATA_TYPE.set} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:new String(), type:VDATA_TYPE.map} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:new String(), type:VDATA_TYPE.regexp} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:new String(), type:VDATA_TYPE.objectliteral} }); }, VerificationError); // string 不是字面量 
    Assert.throwsErrorsNone(()=>{ validTypesByConfigs({ null1:{value:new String(), type:VDATA_TYPE.object} }); }, VerificationError); // 是对象
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:new String(), type:VDATA_TYPE.htmlElem} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:new String(), type:VDATA_TYPE.htmlElemList} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:new String(), type:VDATA_TYPE.targetObj, canBeEmpty:false, targetTypes:[Number]} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:new String(), type:VDATA_TYPE.targetObjSet, canBeEmpty:false, targetTypes:[Number]} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:new String(), type:VDATA_TYPE.targetObjArray, canBeEmpty:false, targetTypes:[Number]} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:new String(), type:VDATA_TYPE.targetObj2DArray, canBeEmpty:false, targetTypes:[Number]} }); }, VerificationError); 
    //
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:new Object(), type:VDATA_TYPE.null} }); }, VerificationError);
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:new Object(), type:VDATA_TYPE.string} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:new Object(), type:VDATA_TYPE.number} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:new Object(), type:VDATA_TYPE.boolean} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:new Object(), type:VDATA_TYPE.symbol} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:new Object(), type:VDATA_TYPE.func} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:new Object(), type:VDATA_TYPE.cls} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:new Object(), type:VDATA_TYPE.array} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:new Object(), type:VDATA_TYPE.array2d} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:new Object(), type:VDATA_TYPE.set} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:new Object(), type:VDATA_TYPE.map} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:new Object(), type:VDATA_TYPE.regexp} }); }, VerificationError); 
    Assert.throwsErrorsNone(()=>{ validTypesByConfigs({ null1:{value:new Object(), type:VDATA_TYPE.objectliteral} }); }, VerificationError); 
    Assert.throwsErrorsNone(()=>{ validTypesByConfigs({ null1:{value:new Object(), type:VDATA_TYPE.object} }); }, VerificationError); // 是对象
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:new Object(), type:VDATA_TYPE.htmlElem} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:new Object(), type:VDATA_TYPE.htmlElemList} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:new Object(), type:VDATA_TYPE.targetObj, canBeEmpty:false, targetTypes:[Number]} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:new Object(), type:VDATA_TYPE.targetObjSet, canBeEmpty:false, targetTypes:[Number]} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:new Object(), type:VDATA_TYPE.targetObjArray, canBeEmpty:false, targetTypes:[Number]} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:new Object(), type:VDATA_TYPE.targetObj2DArray, canBeEmpty:false, targetTypes:[Number]} }); }, VerificationError); 
    // 在来一个数值校验，看看校验后的结果，是否和原值一致。
    let obj1 = {};
    let obj2 = new Object();
    let obj3 = new String();
    let resultsObject = validTypesByConfigs({
        obj1:{value:obj1, type:VDATA_TYPE.object},
        obj2:{value:obj2, type:VDATA_TYPE.object},
        obj3:{value:obj3, type:VDATA_TYPE.object}
    });
    Assert.equalsStrictly(obj1, resultsObject['obj1']);
    Assert.equalsStrictly(obj2, resultsObject['obj2']);
    Assert.equalsStrictly(obj3, resultsObject['obj3']);

    // htmlElem 这是 html 元素。
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:htmlElem1, type:VDATA_TYPE.null} }); }, VerificationError);
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:htmlElem1, type:VDATA_TYPE.string} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:htmlElem1, type:VDATA_TYPE.number} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:htmlElem1, type:VDATA_TYPE.boolean} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:htmlElem1, type:VDATA_TYPE.symbol} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:htmlElem1, type:VDATA_TYPE.func} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:htmlElem1, type:VDATA_TYPE.cls} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:htmlElem1, type:VDATA_TYPE.array} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:htmlElem1, type:VDATA_TYPE.array2d} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:htmlElem1, type:VDATA_TYPE.set} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:htmlElem1, type:VDATA_TYPE.map} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:htmlElem1, type:VDATA_TYPE.regexp} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:htmlElem1, type:VDATA_TYPE.objectliteral} }); }, VerificationError); 
    Assert.throwsErrorsNone(()=>{ validTypesByConfigs({ null1:{value:htmlElem1, type:VDATA_TYPE.object} }); }, VerificationError); // 是对象
    Assert.throwsErrorsNone(()=>{ validTypesByConfigs({ null1:{value:htmlElem1, type:VDATA_TYPE.htmlElem} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:htmlElem1, type:VDATA_TYPE.htmlElemList} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:htmlElem1, type:VDATA_TYPE.targetObj, canBeEmpty:false, targetTypes:[String]} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:htmlElem1, type:VDATA_TYPE.targetObjSet, canBeEmpty:false, targetTypes:[String]} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:htmlElem1, type:VDATA_TYPE.targetObjArray, canBeEmpty:false, targetTypes:[String]} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:htmlElem1, type:VDATA_TYPE.targetObj2DArray, canBeEmpty:false, targetTypes:[String]} }); }, VerificationError); 
    // 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:htmlElem2, type:VDATA_TYPE.null} }); }, VerificationError);
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:htmlElem2, type:VDATA_TYPE.string} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:htmlElem2, type:VDATA_TYPE.number} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:htmlElem2, type:VDATA_TYPE.boolean} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:htmlElem2, type:VDATA_TYPE.symbol} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:htmlElem2, type:VDATA_TYPE.func} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:htmlElem2, type:VDATA_TYPE.cls} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:htmlElem2, type:VDATA_TYPE.array} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:htmlElem2, type:VDATA_TYPE.array2d} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:htmlElem2, type:VDATA_TYPE.set} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:htmlElem2, type:VDATA_TYPE.map} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:htmlElem2, type:VDATA_TYPE.regexp} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:htmlElem2, type:VDATA_TYPE.objectliteral} }); }, VerificationError); 
    Assert.throwsErrorsNone(()=>{ validTypesByConfigs({ null1:{value:htmlElem2, type:VDATA_TYPE.object} }); }, VerificationError); // 是对象
    Assert.throwsErrorsNone(()=>{ validTypesByConfigs({ null1:{value:htmlElem2, type:VDATA_TYPE.htmlElem} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:htmlElem2, type:VDATA_TYPE.htmlElemList} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:htmlElem2, type:VDATA_TYPE.targetObj, canBeEmpty:false, targetTypes:[String]} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:htmlElem2, type:VDATA_TYPE.targetObjSet, canBeEmpty:false, targetTypes:[String]} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:htmlElem2, type:VDATA_TYPE.targetObjArray, canBeEmpty:false, targetTypes:[String]} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:htmlElem2, type:VDATA_TYPE.targetObj2DArray, canBeEmpty:false, targetTypes:[String]} }); }, VerificationError); 
    // 在来一个数值校验，看看校验后的结果，是否和原值一致。
    let elem1 = htmlElem1;
    let elem2 = htmlElem2;
    let resultsHtmlElems = validTypesByConfigs({
        elem1:{value:elem1, type:VDATA_TYPE.htmlElem},
        elem2:{value:elem2, type:VDATA_TYPE.htmlElem}
    });
    Assert.equalsStrictly(elem1, resultsHtmlElems['elem1']);
    Assert.equalsStrictly(elem2, resultsHtmlElems['elem2']);

    // htmlElemList 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:htmlElemList1, type:VDATA_TYPE.null} }); }, VerificationError);
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:htmlElemList1, type:VDATA_TYPE.string} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:htmlElemList1, type:VDATA_TYPE.number} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:htmlElemList1, type:VDATA_TYPE.boolean} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:htmlElemList1, type:VDATA_TYPE.symbol} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:htmlElemList1, type:VDATA_TYPE.func} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:htmlElemList1, type:VDATA_TYPE.cls} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:htmlElemList1, type:VDATA_TYPE.array} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:htmlElemList1, type:VDATA_TYPE.array2d} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:htmlElemList1, type:VDATA_TYPE.set} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:htmlElemList1, type:VDATA_TYPE.map} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:htmlElemList1, type:VDATA_TYPE.regexp} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:htmlElemList1, type:VDATA_TYPE.objectliteral} }); }, VerificationError); 
    Assert.throwsErrorsNone(()=>{ validTypesByConfigs({ null1:{value:htmlElemList1, type:VDATA_TYPE.object} }); }, VerificationError); // 是对象
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:htmlElemList1, type:VDATA_TYPE.htmlElem} }); }, VerificationError); 
    Assert.throwsErrorsNone(()=>{ validTypesByConfigs({ null1:{value:htmlElemList1, type:VDATA_TYPE.htmlElemList} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:htmlElemList1, type:VDATA_TYPE.targetObj, canBeEmpty:false, targetTypes:[String]} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:htmlElemList1, type:VDATA_TYPE.targetObjSet, canBeEmpty:false, targetTypes:[String]} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:htmlElemList1, type:VDATA_TYPE.targetObjArray, canBeEmpty:false, targetTypes:[String]} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:htmlElemList1, type:VDATA_TYPE.targetObj2DArray, canBeEmpty:false, targetTypes:[String]} }); }, VerificationError); 
    // 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:htmlElemList2, type:VDATA_TYPE.null} }); }, VerificationError);
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:htmlElemList2, type:VDATA_TYPE.string} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:htmlElemList2, type:VDATA_TYPE.number} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:htmlElemList2, type:VDATA_TYPE.boolean} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:htmlElemList2, type:VDATA_TYPE.symbol} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:htmlElemList2, type:VDATA_TYPE.func} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:htmlElemList2, type:VDATA_TYPE.cls} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:htmlElemList2, type:VDATA_TYPE.array} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:htmlElemList2, type:VDATA_TYPE.array2d} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:htmlElemList2, type:VDATA_TYPE.set} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:htmlElemList2, type:VDATA_TYPE.map} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:htmlElemList2, type:VDATA_TYPE.regexp} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:htmlElemList2, type:VDATA_TYPE.objectliteral} }); }, VerificationError); 
    Assert.throwsErrorsNone(()=>{ validTypesByConfigs({ null1:{value:htmlElemList2, type:VDATA_TYPE.object} }); }, VerificationError); // 是对象
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:htmlElemList2, type:VDATA_TYPE.htmlElem} }); }, VerificationError); 
    Assert.throwsErrorsNone(()=>{ validTypesByConfigs({ null1:{value:htmlElemList2, type:VDATA_TYPE.htmlElemList} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:htmlElemList2, type:VDATA_TYPE.targetObj, canBeEmpty:false, targetTypes:[String]} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:htmlElemList2, type:VDATA_TYPE.targetObjSet, canBeEmpty:false, targetTypes:[String]} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:htmlElemList2, type:VDATA_TYPE.targetObjArray, canBeEmpty:false, targetTypes:[String]} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:htmlElemList2, type:VDATA_TYPE.targetObj2DArray, canBeEmpty:false, targetTypes:[String]} }); }, VerificationError); 
    // 在来一个数值校验，看看校验后的结果，是否和原值一致。
    let elemList1 = htmlElemList1;
    let elemList2 = htmlElemList2;
    let resultsHtmlElemsList = validTypesByConfigs({
        elemList1:{value:elemList1, type:VDATA_TYPE.htmlElemList},
        elemList2:{value:elemList2, type:VDATA_TYPE.htmlElemList}
    });
    Assert.equalsStrictly(elemList1, resultsHtmlElemsList['elemList1']);
    Assert.equalsStrictly(elemList2, resultsHtmlElemsList['elemList2']);

    // targetobj
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:'123', type:VDATA_TYPE.null} }); }, VerificationError);
    Assert.throwsErrorsNone(()=>{ validTypesByConfigs({ null1:{value:'123', type:VDATA_TYPE.string} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:'123', type:VDATA_TYPE.number} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:'123', type:VDATA_TYPE.boolean} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:'123', type:VDATA_TYPE.symbol} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:'123', type:VDATA_TYPE.func} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:'123', type:VDATA_TYPE.cls} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:'123', type:VDATA_TYPE.array} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:'123', type:VDATA_TYPE.array2d} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:'123', type:VDATA_TYPE.set} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:'123', type:VDATA_TYPE.map} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:'123', type:VDATA_TYPE.regexp} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:'123', type:VDATA_TYPE.objectliteral} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:'123', type:VDATA_TYPE.object} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:'123', type:VDATA_TYPE.htmlElem} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:'123', type:VDATA_TYPE.htmlElemList} }); }, VerificationError); 
    Assert.throwsErrorsNone(()=>{ validTypesByConfigs({ null1:{value:'123', type:VDATA_TYPE.targetObj, canBeEmpty:false, targetTypes:[String, Number, RegExp]} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:'123', type:VDATA_TYPE.targetObjSet, canBeEmpty:false, targetTypes:[String, Number, RegExp]} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:'123', type:VDATA_TYPE.targetObjArray, canBeEmpty:false, targetTypes:[String, Number, RegExp]} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:'123', type:VDATA_TYPE.targetObj2DArray, canBeEmpty:false, targetTypes:[String, Number, RegExp]} }); }, VerificationError); 
    // 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:123, type:VDATA_TYPE.null} }); }, VerificationError);
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:123, type:VDATA_TYPE.string} }); }, VerificationError); 
    Assert.throwsErrorsNone(()=>{ validTypesByConfigs({ null1:{value:123, type:VDATA_TYPE.number} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:123, type:VDATA_TYPE.boolean} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:123, type:VDATA_TYPE.symbol} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:123, type:VDATA_TYPE.func} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:123, type:VDATA_TYPE.cls} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:123, type:VDATA_TYPE.array} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:123, type:VDATA_TYPE.array2d} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:123, type:VDATA_TYPE.set} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:123, type:VDATA_TYPE.map} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:123, type:VDATA_TYPE.regexp} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:123, type:VDATA_TYPE.objectliteral} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:123, type:VDATA_TYPE.object} }); }, VerificationError); // 是对象
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:123, type:VDATA_TYPE.htmlElem} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:123, type:VDATA_TYPE.htmlElemList} }); }, VerificationError); 
    Assert.throwsErrorsNone(()=>{ validTypesByConfigs({ null1:{value:123, type:VDATA_TYPE.targetObj, canBeEmpty:false, targetTypes:[String, Number, RegExp]} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:123, type:VDATA_TYPE.targetObjSet, canBeEmpty:false, targetTypes:[String, Number, RegExp]} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:123, type:VDATA_TYPE.targetObjArray, canBeEmpty:false, targetTypes:[String, Number, RegExp]} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:123, type:VDATA_TYPE.targetObj2DArray, canBeEmpty:false, targetTypes:[String, Number, RegExp]} }); }, VerificationError); 
    // 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:/123/, type:VDATA_TYPE.null} }); }, VerificationError);
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:/123/, type:VDATA_TYPE.string} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:/123/, type:VDATA_TYPE.number} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:/123/, type:VDATA_TYPE.boolean} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:/123/, type:VDATA_TYPE.symbol} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:/123/, type:VDATA_TYPE.func} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:/123/, type:VDATA_TYPE.cls} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:/123/, type:VDATA_TYPE.array} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:/123/, type:VDATA_TYPE.array2d} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:/123/, type:VDATA_TYPE.set} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:/123/, type:VDATA_TYPE.map} }); }, VerificationError); 
    Assert.throwsErrorsNone(()=>{ validTypesByConfigs({ null1:{value:/123/, type:VDATA_TYPE.regexp} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:/123/, type:VDATA_TYPE.objectliteral} }); }, VerificationError); 
    Assert.throwsErrorsNone(()=>{ validTypesByConfigs({ null1:{value:/123/, type:VDATA_TYPE.object} }); }, VerificationError); // 是对象
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:/123/, type:VDATA_TYPE.htmlElem} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:/123/, type:VDATA_TYPE.htmlElemList} }); }, VerificationError); 
    Assert.throwsErrorsNone(()=>{ validTypesByConfigs({ null1:{value:/123/, type:VDATA_TYPE.targetObj, canBeEmpty:false, targetTypes:[String, Number, RegExp]} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:/123/, type:VDATA_TYPE.targetObjSet, canBeEmpty:false, targetTypes:[String, Number, RegExp]} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:/123/, type:VDATA_TYPE.targetObjArray, canBeEmpty:false, targetTypes:[String, Number, RegExp]} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:/123/, type:VDATA_TYPE.targetObj2DArray, canBeEmpty:false, targetTypes:[String, Number, RegExp]} }); }, VerificationError); 
    // 在来一个数值校验，看看校验后的结果，是否和原值一致。
    let tarObj1 = '123'
    let tarObj2 = 123;
    let tarObj3 = /123/;
    let resultsTargetObj = validTypesByConfigs({
        tarObj1:{value:tarObj1, type:VDATA_TYPE.targetObj, targetTypes:[String, Number, RegExp]},
        tarObj2:{value:tarObj2, type:VDATA_TYPE.targetObj, targetTypes:[String, Number, RegExp]},
        tarObj3:{value:tarObj3, type:VDATA_TYPE.targetObj, targetTypes:[String, Number, RegExp]}
    });
    Assert.equalsStrictly(tarObj1, resultsTargetObj['tarObj1']);
    Assert.equalsStrictly(tarObj2, resultsTargetObj['tarObj2']);
    Assert.equalsStrictly(tarObj3, resultsTargetObj['tarObj3']);

    // targetobjSet
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:new Set(), type:VDATA_TYPE.null} }); }, VerificationError);
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:new Set(), type:VDATA_TYPE.string} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:new Set(), type:VDATA_TYPE.number} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:new Set(), type:VDATA_TYPE.boolean} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:new Set(), type:VDATA_TYPE.symbol} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:new Set(), type:VDATA_TYPE.func} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:new Set(), type:VDATA_TYPE.cls} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:new Set(), type:VDATA_TYPE.array} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:new Set(), type:VDATA_TYPE.array2d} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:new Set(), type:VDATA_TYPE.set} }); }, VerificationError); 
    Assert.throwsErrorsNone(()=>{ validTypesByConfigs({ null1:{value:new Set(), type:VDATA_TYPE.set, canBeEmpty:true} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:new Set(), type:VDATA_TYPE.map} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:new Set(), type:VDATA_TYPE.regexp} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:new Set(), type:VDATA_TYPE.objectliteral} }); }, VerificationError); 
    Assert.throwsErrorsNone(()=>{ validTypesByConfigs({ null1:{value:new Set(), type:VDATA_TYPE.object} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:new Set(), type:VDATA_TYPE.htmlElem} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:new Set(), type:VDATA_TYPE.htmlElemList} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:new Set(), type:VDATA_TYPE.targetObj, canBeEmpty:false, targetTypes:[String, Number, RegExp]} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:new Set(), type:VDATA_TYPE.targetObjSet, canBeEmpty:false, targetTypes:[String, Number, RegExp]} }); }, VerificationError); 
    Assert.throwsErrorsNone(()=>{ validTypesByConfigs({ null1:{value:new Set(), type:VDATA_TYPE.targetObjSet, canBeEmpty:true, targetTypes:[String, Number, RegExp]} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:new Set(), type:VDATA_TYPE.targetObjArray, canBeEmpty:false, targetTypes:[String, Number, RegExp]} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:new Set(), type:VDATA_TYPE.targetObj2DArray, canBeEmpty:false, targetTypes:[String, Number, RegExp]} }); }, VerificationError); 
    // 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:new Set([1, true, 'aa']), type:VDATA_TYPE.null} }); }, VerificationError);
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:new Set([1, true, 'aa']), type:VDATA_TYPE.string} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:new Set([1, true, 'aa']), type:VDATA_TYPE.number} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:new Set([1, true, 'aa']), type:VDATA_TYPE.boolean} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:new Set([1, true, 'aa']), type:VDATA_TYPE.symbol} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:new Set([1, true, 'aa']), type:VDATA_TYPE.func} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:new Set([1, true, 'aa']), type:VDATA_TYPE.cls} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:new Set([1, true, 'aa']), type:VDATA_TYPE.array} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:new Set([1, true, 'aa']), type:VDATA_TYPE.array2d} }); }, VerificationError); 
    Assert.throwsErrorsNone(()=>{ validTypesByConfigs({ null1:{value:new Set([1, true, 'aa']), type:VDATA_TYPE.set} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:new Set([1, true, 'aa']), type:VDATA_TYPE.map} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:new Set([1, true, 'aa']), type:VDATA_TYPE.regexp} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:new Set([1, true, 'aa']), type:VDATA_TYPE.objectliteral} }); }, VerificationError); 
    Assert.throwsErrorsNone(()=>{ validTypesByConfigs({ null1:{value:new Set([1, true, 'aa']), type:VDATA_TYPE.object} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:new Set([1, true, 'aa']), type:VDATA_TYPE.htmlElem} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:new Set([1, true, 'aa']), type:VDATA_TYPE.htmlElemList} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:new Set([1, true, 'aa']), type:VDATA_TYPE.targetObj, canBeEmpty:false, targetTypes:[String, Number, Boolean]} }); }, VerificationError); 
    Assert.throwsErrorsNone(()=>{ validTypesByConfigs({ null1:{value:new Set([1, true, 'aa']), type:VDATA_TYPE.targetObjSet, canBeEmpty:false, targetTypes:[String, Number, Boolean]} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:new Set([1, true, 'aa']), type:VDATA_TYPE.targetObjArray, canBeEmpty:false, targetTypes:[String, Number, Boolean]} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:new Set([1, true, 'aa']), type:VDATA_TYPE.targetObj2DArray, canBeEmpty:false, targetTypes:[String, Number, Boolean]} }); }, VerificationError); 
    // 在来一个数值校验，看看校验后的结果，是否和原值一致。
    let tarobjSet1 = new Set();
    let tarobjSet2 = new Set([1, true, 'aa']);
    let resultsTargetObjSet = validTypesByConfigs({
        tarobjSet1:{value:tarobjSet1, type:VDATA_TYPE.targetObjSet, targetTypes:[String, Number, Boolean], canBeEmpty:true},
        tarobjSet2:{value:tarobjSet2, type:VDATA_TYPE.targetObjSet, targetTypes:[String, Number, Boolean], canBeEmpty:true}
    });
    Assert.equalsStrictly(tarobjSet1, resultsTargetObjSet['tarobjSet1']);
    Assert.equalsStrictly(tarobjSet2, resultsTargetObjSet['tarobjSet2']);

    // targetobjArray
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:[], type:VDATA_TYPE.null} }); }, VerificationError);
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:[], type:VDATA_TYPE.string} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:[], type:VDATA_TYPE.number} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:[], type:VDATA_TYPE.boolean} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:[], type:VDATA_TYPE.symbol} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:[], type:VDATA_TYPE.func} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:[], type:VDATA_TYPE.cls} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:[], type:VDATA_TYPE.array} }); }, VerificationError); // 这里没有 canbeempty 所以 false
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:[], type:VDATA_TYPE.array2d} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:[], type:VDATA_TYPE.set} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:[], type:VDATA_TYPE.set, canBeEmpty:true} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:[], type:VDATA_TYPE.map} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:[], type:VDATA_TYPE.regexp} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:[], type:VDATA_TYPE.objectliteral} }); }, VerificationError); 
    Assert.throwsErrorsNone(()=>{ validTypesByConfigs({ null1:{value:[], type:VDATA_TYPE.object} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:[], type:VDATA_TYPE.htmlElem} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:[], type:VDATA_TYPE.htmlElemList} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:[], type:VDATA_TYPE.targetObj, canBeEmpty:false, targetTypes:[String, Number, RegExp]} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:[], type:VDATA_TYPE.targetObjSet, canBeEmpty:false, targetTypes:[String, Number, RegExp]} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:[], type:VDATA_TYPE.targetObjSet, canBeEmpty:true, targetTypes:[String, Number, RegExp]} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:[], type:VDATA_TYPE.targetObjArray, canBeEmpty:false, targetTypes:[String, Number, RegExp]} }); }, VerificationError); 
    Assert.throwsErrorsNone(()=>{ validTypesByConfigs({ null1:{value:[], type:VDATA_TYPE.targetObjArray, canBeEmpty:true, targetTypes:[String, Number, RegExp]} }); }, VerificationError); // 可以为空。
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:[], type:VDATA_TYPE.targetObj2DArray, canBeEmpty:false, targetTypes:[String, Number, RegExp]} }); }, VerificationError); 
    // 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:[1, true, 'aa'], type:VDATA_TYPE.null} }); }, VerificationError);
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:[1, true, 'aa'], type:VDATA_TYPE.string} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:[1, true, 'aa'], type:VDATA_TYPE.number} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:[1, true, 'aa'], type:VDATA_TYPE.boolean} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:[1, true, 'aa'], type:VDATA_TYPE.symbol} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:[1, true, 'aa'], type:VDATA_TYPE.func} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:[1, true, 'aa'], type:VDATA_TYPE.cls} }); }, VerificationError); 
    Assert.throwsErrorsNone(()=>{ validTypesByConfigs({ null1:{value:[1, true, 'aa'], type:VDATA_TYPE.array} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:[1, true, 'aa'], type:VDATA_TYPE.array2d} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:[1, true, 'aa'], type:VDATA_TYPE.set} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:[1, true, 'aa'], type:VDATA_TYPE.map} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:[1, true, 'aa'], type:VDATA_TYPE.regexp} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:[1, true, 'aa'], type:VDATA_TYPE.objectliteral} }); }, VerificationError); 
    Assert.throwsErrorsNone(()=>{ validTypesByConfigs({ null1:{value:[1, true, 'aa'], type:VDATA_TYPE.object} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:[1, true, 'aa'], type:VDATA_TYPE.htmlElem} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:[1, true, 'aa'], type:VDATA_TYPE.htmlElemList} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:[1, true, 'aa'], type:VDATA_TYPE.targetObj, canBeEmpty:false, targetTypes:[String, Number, Boolean]} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:[1, true, 'aa'], type:VDATA_TYPE.targetObjSet, canBeEmpty:false, targetTypes:[String, Number, Boolean]} }); }, VerificationError); 
    Assert.throwsErrorsNone(()=>{ validTypesByConfigs({ null1:{value:[1, true, 'aa'], type:VDATA_TYPE.targetObjArray, canBeEmpty:false, targetTypes:[String, Number, Boolean]} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:[1, true, 'aa'], type:VDATA_TYPE.targetObj2DArray, canBeEmpty:false, targetTypes:[String, Number, Boolean]} }); }, VerificationError); 
    // 在来一个数值校验，看看校验后的结果，是否和原值一致。
    let tarobjArr1 = [];
    let tarobjArr2 = [1, true, 'aa'];
    let resultsTargetObjArr = validTypesByConfigs({
        tarobjArr1:{value:tarobjArr1, type:VDATA_TYPE.targetObjArray, targetTypes:[String, Number, Boolean], canBeEmpty:true},
        tarobjArr2:{value:tarobjArr2, type:VDATA_TYPE.targetObjArray, targetTypes:[String, Number, Boolean], canBeEmpty:true}
    });
    Assert.equalsStrictly(tarobjArr1, resultsTargetObjArr['tarobjArr1']);
    Assert.equalsStrictly(tarobjArr2, resultsTargetObjArr['tarobjArr2']);

    // targetobj2DArray
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:[[]], type:VDATA_TYPE.null} }); }, VerificationError);
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:[[]], type:VDATA_TYPE.string} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:[[]], type:VDATA_TYPE.number} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:[[]], type:VDATA_TYPE.boolean} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:[[]], type:VDATA_TYPE.symbol} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:[[]], type:VDATA_TYPE.func} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:[[]], type:VDATA_TYPE.cls} }); }, VerificationError); 
    Assert.throwsErrorsNone(()=>{ validTypesByConfigs({ null1:{value:[[]], type:VDATA_TYPE.array} }); }, VerificationError); // 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:[[]], type:VDATA_TYPE.array2d} }); }, VerificationError); 
    Assert.throwsErrorsNone(()=>{ validTypesByConfigs({ null1:{value:[[]], type:VDATA_TYPE.array2d, canBeEmpty:true} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:[[]], type:VDATA_TYPE.set} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:[[]], type:VDATA_TYPE.set, canBeEmpty:true} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:[[]], type:VDATA_TYPE.map} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:[[]], type:VDATA_TYPE.regexp} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:[[]], type:VDATA_TYPE.objectliteral} }); }, VerificationError); 
    Assert.throwsErrorsNone(()=>{ validTypesByConfigs({ null1:{value:[[]], type:VDATA_TYPE.object} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:[[]], type:VDATA_TYPE.htmlElem} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:[[]], type:VDATA_TYPE.htmlElemList} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:[[]], type:VDATA_TYPE.targetObj, canBeEmpty:false, targetTypes:[String, Number, RegExp]} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:[[]], type:VDATA_TYPE.targetObjSet, canBeEmpty:false, targetTypes:[String, Number, RegExp]} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:[[]], type:VDATA_TYPE.targetObjSet, canBeEmpty:true, targetTypes:[String, Number, RegExp]} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:[[]], type:VDATA_TYPE.targetObjArray, canBeEmpty:false, targetTypes:[String, Number, RegExp]} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:[[]], type:VDATA_TYPE.targetObjArray, canBeEmpty:true, targetTypes:[String, Number, RegExp]} }); }, VerificationError); // 可以为空。
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:[[]], type:VDATA_TYPE.targetObj2DArray, canBeEmpty:false, targetTypes:[String, Number, RegExp]} }); }, VerificationError); 
    Assert.throwsErrorsNone(()=>{ validTypesByConfigs({ null1:{value:[[]], type:VDATA_TYPE.targetObj2DArray, canBeEmpty:true, targetTypes:[String, Number, RegExp]} }); }, VerificationError); 
    // 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:[[1, true, 'aa']], type:VDATA_TYPE.null} }); }, VerificationError);
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:[[1, true, 'aa']], type:VDATA_TYPE.string} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:[[1, true, 'aa']], type:VDATA_TYPE.number} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:[[1, true, 'aa']], type:VDATA_TYPE.boolean} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:[[1, true, 'aa']], type:VDATA_TYPE.symbol} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:[[1, true, 'aa']], type:VDATA_TYPE.func} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:[[1, true, 'aa']], type:VDATA_TYPE.cls} }); }, VerificationError); 
    Assert.throwsErrorsNone(()=>{ validTypesByConfigs({ null1:{value:[[1, true, 'aa']], type:VDATA_TYPE.array} }); }, VerificationError); 
    Assert.throwsErrorsNone(()=>{ validTypesByConfigs({ null1:{value:[[1, true, 'aa']], type:VDATA_TYPE.array2d} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:[[1, true, 'aa']], type:VDATA_TYPE.set} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:[[1, true, 'aa']], type:VDATA_TYPE.map} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:[[1, true, 'aa']], type:VDATA_TYPE.regexp} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:[[1, true, 'aa']], type:VDATA_TYPE.objectliteral} }); }, VerificationError); 
    Assert.throwsErrorsNone(()=>{ validTypesByConfigs({ null1:{value:[[1, true, 'aa']], type:VDATA_TYPE.object} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:[[1, true, 'aa']], type:VDATA_TYPE.htmlElem} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:[[1, true, 'aa']], type:VDATA_TYPE.htmlElemList} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:[[1, true, 'aa']], type:VDATA_TYPE.targetObj, canBeEmpty:false, targetTypes:[String, Number, Boolean]} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:[[1, true, 'aa']], type:VDATA_TYPE.targetObjSet, canBeEmpty:false, targetTypes:[String, Number, Boolean]} }); }, VerificationError); 
    Assert.throwsErrors(()=>{ validTypesByConfigs({ null1:{value:[[1, true, 'aa']], type:VDATA_TYPE.targetObjArray, canBeEmpty:false, targetTypes:[String, Number, Boolean]} }); }, VerificationError); 
    Assert.throwsErrorsNone(()=>{ validTypesByConfigs({ null1:{value:[[1, true, 'aa']], type:VDATA_TYPE.targetObj2DArray, canBeEmpty:false, targetTypes:[String, Number, Boolean]} }); }, VerificationError); 
    // 在来一个数值校验，看看校验后的结果，是否和原值一致。
    let tarObjArr2d1 = [[]];
    let tarObjArr2d2 = [[1, true, 'aa']];
    let resultsTargetObjArr2d = validTypesByConfigs({
        tarObjArr2d1:{value:tarObjArr2d1, type:VDATA_TYPE.targetObj2DArray, targetTypes:[String, Number, Boolean], canBeEmpty:true},
        tarObjArr2d2:{value:tarObjArr2d2, type:VDATA_TYPE.targetObj2DArray, targetTypes:[String, Number, Boolean], canBeEmpty:true}
    });
    Assert.equalsStrictly(tarObjArr2d1, resultsTargetObjArr2d['tarObjArr2d1']);
    Assert.equalsStrictly(tarObjArr2d2, resultsTargetObjArr2d['tarObjArr2d2']);

    // ========== 这里最后再测试下 多个数据 类型的处理。因为 muliti 方法就是为了处理 多类型判断才设计的。
    // 假设 我们的参数可以传入 函数、正则，2个类型。则开始测试
    let testMultiObj1 = ()=>{ return true; }; 
    let testMultiObj2 = /123/; 
    let testMultiObj3 = new RegExp('123'); 
    // 测试 
    Assert.throwsErrorsNone(()=>{ validTypesByConfigs({testMultiObj1:{value:testMultiObj1, type:VDATA_TYPE.func}}); });
    Assert.throwsErrors(()=>{     validTypesByConfigs({testMultiObj2:{value:testMultiObj2, type:VDATA_TYPE.func}}); }, VerificationError);
    Assert.throwsErrors(()=>{     validTypesByConfigs({testMultiObj3:{value:testMultiObj3, type:VDATA_TYPE.func}}); }, VerificationError);
    // 
    Assert.throwsErrors(()=>{     validTypesByConfigs({testMultiObj1:{value:testMultiObj1, type:VDATA_TYPE.regexp}}); }, VerificationError);
    Assert.throwsErrorsNone(()=>{ validTypesByConfigs({testMultiObj2:{value:testMultiObj2, type:VDATA_TYPE.regexp}}); });
    Assert.throwsErrorsNone(()=>{ validTypesByConfigs({testMultiObj3:{value:testMultiObj3, type:VDATA_TYPE.regexp}}); });
    // 2个类型，都允许
    Assert.throwsErrorsNone(()=>{ validTypesByConfigs({testMultiObj1:{value:testMultiObj1, type:[VDATA_TYPE.func, VDATA_TYPE.regexp]}}); });
    Assert.throwsErrorsNone(()=>{ validTypesByConfigs({testMultiObj2:{value:testMultiObj2, type:[VDATA_TYPE.func, VDATA_TYPE.regexp]}}); });
    Assert.throwsErrorsNone(()=>{ validTypesByConfigs({testMultiObj3:{value:testMultiObj3, type:[VDATA_TYPE.func, VDATA_TYPE.regexp]}}); });
    // 最后校验是否获取到同一个值
    let finalResult = validTypesByConfigs({
        testMultiObj1:{value:testMultiObj1, type:[VDATA_TYPE.func, VDATA_TYPE.regexp]}, 
        testMultiObj2:{value:testMultiObj2, type:[VDATA_TYPE.func, VDATA_TYPE.regexp]},
        testMultiObj3:{value:testMultiObj3, type:[VDATA_TYPE.func, VDATA_TYPE.regexp]}
    });
    Assert.equalsStrictly(testMultiObj1, finalResult['testMultiObj1']);
    Assert.equalsStrictly(testMultiObj2, finalResult['testMultiObj2']);
    Assert.equalsStrictly(testMultiObj3, finalResult['testMultiObj3']);
}

// ========= 导出测试函数
export {
    testOptionsConstant, testOptionsParamErr, 
    testOptionsNull, testOptionsString, testOptionsNumber, testOptionsBoolean, testOptionsSymbol,
    testOptionsFunc, testOptionsCls, testOptionsArray, testOptionsArray2d, testOptionsSet,
    testOptionsMap, testOptionsRegExp, testOptionsObjectLiteral, testOptionsObject, testOptionsHtmlElem,
    testOptionsHtmlElemList, testOptionsTargetObject, testOptionsTargetObjectSet, testOptionsTargetObjectArr, testOptionsTargetObjectArr2d,
    testOptionsValueChecking,
    testOptionsMultiParamErr, testOptionsMultiValues, 
    testOptionsCheckSingleConfig, testOptionsCheckConfigsParam, testOptionsValidTypesByConfigsParam, testOptionsValidTypesByConfigsVeri
}