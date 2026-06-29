/**
 * In my license, all codes can be shared free of charge. 
 * However, If my code is taken for commercial use, please maintain it yourself. 
 * I am not obligated to take responsibility for your business application.
 * Here is my email "pangdongcan@live.com"
 * 
 * Copyright © 2026 Micheal Pang. All rights reserved.
 * 
 * @file This file "testThrow.js" is part of project "pdc-js-framework" , which is belong to Michael Pang (It's Me).
 * @author  Micheal Pang (Dongcan Pang)
 * @since  2026-06-17
 * @description  这是关于 utils/valid/throw.js 模块的测试。throw.js 是 valid.js 模块的子模块
 */
"use strict"; // 这是严格模式下的 Javascript 代码

// ====== 导入断言处理工具类
import { Assert } from "../../testTools.js";
// ====== 导入其它要用的内容
import { ParameterError, ClassCreationError } from "../../../models/errors.js";
import { 
    throwError, throwParameterError, throwClassCreationError, throwCannotNewError 
} from "../../../utils/valid/throw.js";

// 在我的框架中， js 的数据类型中主要有以下几种：
// ===> 空（undefined\null\NaN）、
// ===> 字符串（基础+对象）、数字（基础+对象）、布尔（基础+对象）、Symbol、类、函数、
// ===> 数组、Map、Set、
// ===> 正则、普通对象

// 开始测试

function testThrowError(){

    // 先做参数校验测试（因为这是抛异常函数，所以不要指定抛 ParameterError 就行了）
    Assert.throwsErrors(()=>{ throwError(undefined, 'xxx', ReferenceError); }, ReferenceError); // undefined 是默认值
    Assert.throwsErrors(()=>{ throwError(null, 'xxx', ReferenceError); }, ParameterError);
    Assert.throwsErrors(()=>{ throwError(NaN, 'xxx', ReferenceError); }, ParameterError);
    Assert.throwsErrors(()=>{ throwError('', 'xxx', ReferenceError); }, ParameterError);
    Assert.throwsErrors(()=>{ throwError('aaa', 'xxx', ReferenceError); }, ParameterError);
    Assert.throwsErrors(()=>{ throwError(new String(''), 'xxx', ReferenceError); }, ParameterError);
    Assert.throwsErrors(()=>{ throwError(new String('aaa'), 'xxx', ReferenceError); }, ParameterError);
    Assert.throwsErrors(()=>{ throwError(123, 'xxx', ReferenceError); }, ParameterError);
    Assert.throwsErrors(()=>{ throwError(new Number(123), 'xxx', ReferenceError); }, ParameterError);
    Assert.throwsErrors(()=>{ throwError(true, 'xxx', ReferenceError); }, ReferenceError); // 这里是 true , ReferenceError
    Assert.throwsErrorsNone(()=>{ throwError(false, 'xxx', ReferenceError); }); // 这里是 false , 不抛异常
    Assert.throwsErrors(()=>{ throwError(new Boolean(true), 'xxx', ReferenceError); }, ReferenceError); // 这里是 true , ReferenceError
    Assert.throwsErrorsNone(()=>{ throwError(new Boolean(false), 'xxx', ReferenceError); }); // 这里是 false , 不抛异常
    Assert.throwsErrors(()=>{ throwError(Symbol.for('guid'), 'xxx', ReferenceError); }, ParameterError);
    Assert.throwsErrors(()=>{ throwError(Error, 'xxx', ReferenceError); }, ParameterError);
    Assert.throwsErrors(()=>{ throwError(testThrowError, 'xxx', ReferenceError); }, ParameterError);
    Assert.throwsErrors(()=>{ throwError(()=>{}, 'xxx', ReferenceError); }, ParameterError);
    Assert.throwsErrors(()=>{ throwError([1,2,3], 'xxx', ReferenceError); }, ParameterError);
    Assert.throwsErrors(()=>{ throwError(new Map([['a', 1], ['b', 2]]), 'xxx', ReferenceError); }, ParameterError);
    Assert.throwsErrors(()=>{ throwError(new Set([1,2,3]), 'xxx', ReferenceError); }, ParameterError);
    Assert.throwsErrors(()=>{ throwError(/123/, 'xxx', ReferenceError); }, ParameterError);
    Assert.throwsErrors(()=>{ throwError(new RegExp('123'), 'xxx', ReferenceError); }, ParameterError);
    Assert.throwsErrors(()=>{ throwError({a:1, b:2, c:3, d:true}, 'xxx', ReferenceError); }, ParameterError);
    Assert.throwsErrors(()=>{ throwError(new Object(), 'xxx', ReferenceError); }, ParameterError);
    // 第2个参数
    Assert.throwsErrors(()=>{ throwError(true, undefined, ReferenceError); }, ReferenceError); // undefined 是默认 
    Assert.throwsErrors(()=>{ throwError(true, null, ReferenceError); }, ParameterError);
    Assert.throwsErrors(()=>{ throwError(true, NaN, ReferenceError); }, ParameterError);
    Assert.throwsErrors(()=>{ throwError(true, '', ReferenceError); }, ParameterError);
    Assert.throwsErrors(()=>{ throwError(true, 'aaa', ReferenceError); }, ReferenceError); // 这是符合的参数，抛 ReferenceError
    Assert.throwsErrors(()=>{ throwError(true, new String(''), ReferenceError); }, ParameterError);
    Assert.throwsErrors(()=>{ throwError(true, new String('aaa'), ReferenceError); }, ReferenceError); // 这是符合的参数，抛 ReferenceError
    Assert.throwsErrors(()=>{ throwError(true, 123, ReferenceError); }, ParameterError);
    Assert.throwsErrors(()=>{ throwError(true, new Number(123), ReferenceError); }, ParameterError);
    Assert.throwsErrors(()=>{ throwError(true, true, ReferenceError); }, ParameterError); 
    Assert.throwsErrors(()=>{ throwError(true, false, ReferenceError); }, ParameterError); 
    Assert.throwsErrors(()=>{ throwError(true, new Boolean(true), ReferenceError); }, ParameterError); 
    Assert.throwsErrors(()=>{ throwError(true, new Boolean(false), ReferenceError); }, ParameterError); 
    Assert.throwsErrors(()=>{ throwError(true, Symbol.for('guid'), ReferenceError); }, ParameterError);
    Assert.throwsErrors(()=>{ throwError(true, Error, ReferenceError); }, ParameterError);
    Assert.throwsErrors(()=>{ throwError(true, testThrowError, ReferenceError); }, ParameterError);
    Assert.throwsErrors(()=>{ throwError(true, ()=>{}, ReferenceError); }, ParameterError);
    Assert.throwsErrors(()=>{ throwError(true, [1,2,3], ReferenceError); }, ParameterError);
    Assert.throwsErrors(()=>{ throwError(true, new Map([['a', 1], ['b', 2]]), ReferenceError); }, ParameterError);
    Assert.throwsErrors(()=>{ throwError(true, new Set([1,2,3]), ReferenceError); }, ParameterError);
    Assert.throwsErrors(()=>{ throwError(true, /123/, ReferenceError); }, ParameterError);
    Assert.throwsErrors(()=>{ throwError(true, new RegExp('123'), ReferenceError); }, ParameterError);
    Assert.throwsErrors(()=>{ throwError(true, {a:1, b:2, c:3, d:true}, ReferenceError); }, ParameterError);
    Assert.throwsErrors(()=>{ throwError(true, new Object(), ReferenceError); }, ParameterError);
    // 第3个参数
    Assert.throwsErrors(()=>{ throwError(true, 'kkkk', undefined )}, Error); // 这是默认值，抛 Error
    Assert.throwsErrors(()=>{ throwError(true, 'kkkk', null )}, ParameterError);
    Assert.throwsErrors(()=>{ throwError(true, 'kkkk', NaN )}, ParameterError);
    Assert.throwsErrors(()=>{ throwError(true, 'kkkk', '' )}, ParameterError);
    Assert.throwsErrors(()=>{ throwError(true, 'kkkk', 'aaa' )}, ParameterError); 
    Assert.throwsErrors(()=>{ throwError(true, 'kkkk', new String('') )}, ParameterError);
    Assert.throwsErrors(()=>{ throwError(true, 'kkkk', new String('aaa') )}, ParameterError); 
    Assert.throwsErrors(()=>{ throwError(true, 'kkkk', 123 )}, ParameterError);
    Assert.throwsErrors(()=>{ throwError(true, 'kkkk', new Number(123) )}, ParameterError);
    Assert.throwsErrors(()=>{ throwError(true, 'kkkk', true )}, ParameterError); 
    Assert.throwsErrors(()=>{ throwError(true, 'kkkk', false )}, ParameterError); 
    Assert.throwsErrors(()=>{ throwError(true, 'kkkk', new Boolean(true) )}, ParameterError); 
    Assert.throwsErrors(()=>{ throwError(true, 'kkkk', new Boolean(false) )}, ParameterError); 
    Assert.throwsErrors(()=>{ throwError(true, 'kkkk', Symbol.for('guid') )}, ParameterError);
    Assert.throwsErrors(()=>{ throwError(true, 'kkkk', Error )}, Error); // 这是指定 Error，抛 Error
    Assert.throwsErrors(()=>{ throwError(true, 'kkkk', testThrowError )}, ParameterError);
    Assert.throwsErrors(()=>{ throwError(true, 'kkkk', ()=>{} )}, ParameterError);
    Assert.throwsErrors(()=>{ throwError(true, 'kkkk', [1,2,3] )}, ParameterError);
    Assert.throwsErrors(()=>{ throwError(true, 'kkkk', new Map([['a', 1], ['b', 2]]) )}, ParameterError);
    Assert.throwsErrors(()=>{ throwError(true, 'kkkk', new Set([1,2,3]) )}, ParameterError);
    Assert.throwsErrors(()=>{ throwError(true, 'kkkk', /123/ )}, ParameterError);
    Assert.throwsErrors(()=>{ throwError(true, 'kkkk', new RegExp('123') )}, ParameterError);
    Assert.throwsErrors(()=>{ throwError(true, 'kkkk', {a:1, b:2, c:3, d:true} )}, ParameterError);
    Assert.throwsErrors(()=>{ throwError(true, 'kkkk', new Object() )}, ParameterError);

    // 开始正常参数使用测试
    let isThrow = false;
    try{
        throwError(true, 'test1', ReferenceError);
    }catch(err){
        isThrow = true;
        Assert.equalsStrictly(true, err instanceof ReferenceError);
        Assert.equalsStrictly(true, err.message === 'test1');
    }
    Assert.equalsStrictly(true, isThrow);
    
    // 不抛异常
    Assert.throwsErrorsNone(()=>{
        // 这里是测试 参数正确，但是 condition 不满足
        throwError(false, 'test1', ReferenceError);
    });
}

function testThrowParameterError(){

    // 先做参数校验测试
    Assert.throwsErrorsWithMsg(()=>{ throwParameterError(undefined, 'xxx'); }, /^xxx$/, ParameterError); // undefined 是默认值
    Assert.throwsErrorsWithMsg(()=>{ throwParameterError(null, 'xxx'); }, /请检查/, ParameterError);
    Assert.throwsErrorsWithMsg(()=>{ throwParameterError(NaN, 'xxx'); }, /请检查/, ParameterError);
    Assert.throwsErrorsWithMsg(()=>{ throwParameterError('', 'xxx'); }, /请检查/, ParameterError);
    Assert.throwsErrorsWithMsg(()=>{ throwParameterError('aaa', 'xxx'); }, /请检查/, ParameterError);
    Assert.throwsErrorsWithMsg(()=>{ throwParameterError(new String(''), 'xxx'); }, /请检查/, ParameterError);
    Assert.throwsErrorsWithMsg(()=>{ throwParameterError(new String('aaa'), 'xxx'); }, /请检查/, ParameterError);
    Assert.throwsErrorsWithMsg(()=>{ throwParameterError(123, 'xxx'); }, /请检查/, ParameterError);
    Assert.throwsErrorsWithMsg(()=>{ throwParameterError(new Number(123), 'xxx'); }, /请检查/, ParameterError);
    Assert.throwsErrorsWithMsg(()=>{ throwParameterError(true, 'xxx'); }, /^xxx$/, ParameterError); 
    Assert.throwsErrorsNone(()=>{ throwParameterError(false, 'xxx'); });  // false 不抛异常
    Assert.throwsErrorsWithMsg(()=>{ throwParameterError(new Boolean(true), 'xxx'); }, /^xxx$/, ParameterError); 
    Assert.throwsErrorsNone(()=>{ throwParameterError(new Boolean(false), 'xxx'); }); // false 不抛异常
    Assert.throwsErrorsWithMsg(()=>{ throwParameterError(Symbol.for('guid'), 'xxx'); }, /请检查/, ParameterError);
    Assert.throwsErrorsWithMsg(()=>{ throwParameterError(Error, 'xxx'); }, /请检查/, ParameterError);
    Assert.throwsErrorsWithMsg(()=>{ throwParameterError(testThrowError, 'xxx'); }, /请检查/, ParameterError);
    Assert.throwsErrorsWithMsg(()=>{ throwParameterError(()=>{}, 'xxx'); }, /请检查/, ParameterError);
    Assert.throwsErrorsWithMsg(()=>{ throwParameterError([1,2,3], 'xxx'); }, /请检查/, ParameterError);
    Assert.throwsErrorsWithMsg(()=>{ throwParameterError(new Map([['a', 1], ['b', 2]]), 'xxx'); }, /请检查/, ParameterError);
    Assert.throwsErrorsWithMsg(()=>{ throwParameterError(new Set([1,2,3]), 'xxx'); }, /请检查/, ParameterError);
    Assert.throwsErrorsWithMsg(()=>{ throwParameterError(/123/, 'xxx'); }, /请检查/, ParameterError);
    Assert.throwsErrorsWithMsg(()=>{ throwParameterError(new RegExp('123'), 'xxx'); }, /请检查/, ParameterError);
    Assert.throwsErrorsWithMsg(()=>{ throwParameterError({a:1, b:2, c:3, d:true}, 'xxx'); }, /请检查/, ParameterError);
    Assert.throwsErrorsWithMsg(()=>{ throwParameterError(new Object(), 'xxx'); }, /请检查/, ParameterError);
    // 第2个参数
    Assert.throwsErrorsWithMsg(()=>{ throwParameterError(true, undefined); }, /默认异常信息/, ParameterError); // undefined 是 默认
    Assert.throwsErrorsWithMsg(()=>{ throwParameterError(true, null); }, /请检查/, ParameterError); 
    Assert.throwsErrorsWithMsg(()=>{ throwParameterError(true, NaN); }, /请检查/, ParameterError); 
    Assert.throwsErrorsWithMsg(()=>{ throwParameterError(true, ''); }, /请检查/, ParameterError); 
    Assert.throwsErrorsWithMsg(()=>{ throwParameterError(true, 'aaa'); }, /aaa/, ParameterError); // 指定的异常信息
    Assert.throwsErrorsWithMsg(()=>{ throwParameterError(true, new String('')); }, /请检查/, ParameterError); 
    Assert.throwsErrorsWithMsg(()=>{ throwParameterError(true, new String('aaa')); }, /aaa/, ParameterError); // 指定的异常信息
    Assert.throwsErrorsWithMsg(()=>{ throwParameterError(true, 123); }, /请检查/, ParameterError); 
    Assert.throwsErrorsWithMsg(()=>{ throwParameterError(true, new Number(123)); }, /请检查/, ParameterError); 
    Assert.throwsErrorsWithMsg(()=>{ throwParameterError(true, true); }, /请检查/, ParameterError); 
    Assert.throwsErrorsWithMsg(()=>{ throwParameterError(true, false); }, /请检查/, ParameterError); 
    Assert.throwsErrorsWithMsg(()=>{ throwParameterError(true, new Boolean(true)); }, /请检查/, ParameterError); 
    Assert.throwsErrorsWithMsg(()=>{ throwParameterError(true, new Boolean(false)); }, /请检查/, ParameterError); 
    Assert.throwsErrorsWithMsg(()=>{ throwParameterError(true, Symbol.for('guid')); }, /请检查/, ParameterError); 
    Assert.throwsErrorsWithMsg(()=>{ throwParameterError(true, Error); }, /请检查/, ParameterError); 
    Assert.throwsErrorsWithMsg(()=>{ throwParameterError(true, testThrowError); }, /请检查/, ParameterError); 
    Assert.throwsErrorsWithMsg(()=>{ throwParameterError(true, ()=>{}); }, /请检查/, ParameterError); 
    Assert.throwsErrorsWithMsg(()=>{ throwParameterError(true, [1,2,3]); }, /请检查/, ParameterError); 
    Assert.throwsErrorsWithMsg(()=>{ throwParameterError(true, new Map([['a', 1], ['b', 2]])); }, /请检查/, ParameterError); 
    Assert.throwsErrorsWithMsg(()=>{ throwParameterError(true, new Set([1,2,3])); }, /请检查/, ParameterError); 
    Assert.throwsErrorsWithMsg(()=>{ throwParameterError(true, /123/); }, /请检查/, ParameterError); 
    Assert.throwsErrorsWithMsg(()=>{ throwParameterError(true, new RegExp('123')); }, /请检查/, ParameterError); 
    Assert.throwsErrorsWithMsg(()=>{ throwParameterError(true, {a:1, b:2, c:3, d:true}); }, /请检查/, ParameterError); 
    Assert.throwsErrorsWithMsg(()=>{ throwParameterError(true, new Object()); }, /请检查/, ParameterError); 
}

function testThrowClassCreationError(){
    
    // 先做参数校验测试
    Assert.throwsErrors(()=>{ throwClassCreationError(undefined, 'xxx'); }, ClassCreationError); // undefined 是默认值
    Assert.throwsErrors(()=>{ throwClassCreationError(null, 'xxx'); }, ParameterError);
    Assert.throwsErrors(()=>{ throwClassCreationError(NaN, 'xxx'); }, ParameterError);
    Assert.throwsErrors(()=>{ throwClassCreationError('', 'xxx'); }, ParameterError);
    Assert.throwsErrors(()=>{ throwClassCreationError('aaa', 'xxx'); }, ParameterError);
    Assert.throwsErrors(()=>{ throwClassCreationError(new String(''), 'xxx'); }, ParameterError);
    Assert.throwsErrors(()=>{ throwClassCreationError(new String('aaa'), 'xxx'); }, ParameterError);
    Assert.throwsErrors(()=>{ throwClassCreationError(123, 'xxx'); }, ParameterError);
    Assert.throwsErrors(()=>{ throwClassCreationError(new Number(123), 'xxx'); }, ParameterError);
    Assert.throwsErrors(()=>{ throwClassCreationError(true, 'xxx'); }, ClassCreationError); 
    Assert.throwsErrorsNone(()=>{ throwClassCreationError(false, 'xxx'); });  
    Assert.throwsErrors(()=>{ throwClassCreationError(new Boolean(true), 'xxx'); }, ClassCreationError); 
    Assert.throwsErrorsNone(()=>{ throwClassCreationError(new Boolean(false), 'xxx'); }); 
    Assert.throwsErrors(()=>{ throwClassCreationError(Symbol.for('guid'), 'xxx'); }, ParameterError);
    Assert.throwsErrors(()=>{ throwClassCreationError(Error, 'xxx'); }, ParameterError);
    Assert.throwsErrors(()=>{ throwClassCreationError(testThrowError, 'xxx'); }, ParameterError);
    Assert.throwsErrors(()=>{ throwClassCreationError(()=>{}, 'xxx'); }, ParameterError);
    Assert.throwsErrors(()=>{ throwClassCreationError([1,2,3], 'xxx'); }, ParameterError);
    Assert.throwsErrors(()=>{ throwClassCreationError(new Map([['a', 1], ['b', 2]]), 'xxx'); }, ParameterError);
    Assert.throwsErrors(()=>{ throwClassCreationError(new Set([1,2,3]), 'xxx'); }, ParameterError);
    Assert.throwsErrors(()=>{ throwClassCreationError(/123/, 'xxx'); }, ParameterError);
    Assert.throwsErrors(()=>{ throwClassCreationError(new RegExp('123'), 'xxx'); }, ParameterError);
    Assert.throwsErrors(()=>{ throwClassCreationError({a:1, b:2, c:3, d:true}, 'xxx'); }, ParameterError);
    Assert.throwsErrors(()=>{ throwClassCreationError(new Object(), 'xxx'); }, ParameterError);
    // 第2个参数
    Assert.throwsErrors(()=>{ throwClassCreationError(true, undefined); }, ClassCreationError); // undefined 是默认值
    Assert.throwsErrors(()=>{ throwClassCreationError(true, null); }, ParameterError);
    Assert.throwsErrors(()=>{ throwClassCreationError(true, NaN); }, ParameterError);
    Assert.throwsErrors(()=>{ throwClassCreationError(true, ''); }, ParameterError);
    Assert.throwsErrors(()=>{ throwClassCreationError(true, 'aaa'); }, ClassCreationError); // 
    Assert.throwsErrors(()=>{ throwClassCreationError(true, new String('')); }, ParameterError);
    Assert.throwsErrors(()=>{ throwClassCreationError(true, new String('aaa')); }, ClassCreationError);
    Assert.throwsErrors(()=>{ throwClassCreationError(true, 123); }, ParameterError);
    Assert.throwsErrors(()=>{ throwClassCreationError(true, new Number(123)); }, ParameterError);
    Assert.throwsErrors(()=>{ throwClassCreationError(true, true); }, ParameterError); 
    Assert.throwsErrors(()=>{ throwClassCreationError(true, false); }, ParameterError);
    Assert.throwsErrors(()=>{ throwClassCreationError(true, new Boolean(true)); }, ParameterError); 
    Assert.throwsErrors(()=>{ throwClassCreationError(true, new Boolean(false)); }, ParameterError);
    Assert.throwsErrors(()=>{ throwClassCreationError(true, Symbol.for('guid')); }, ParameterError);
    Assert.throwsErrors(()=>{ throwClassCreationError(true, Error); }, ParameterError);
    Assert.throwsErrors(()=>{ throwClassCreationError(true, testThrowError); }, ParameterError);
    Assert.throwsErrors(()=>{ throwClassCreationError(true, ()=>{}); }, ParameterError);
    Assert.throwsErrors(()=>{ throwClassCreationError(true, [1,2,3]); }, ParameterError);
    Assert.throwsErrors(()=>{ throwClassCreationError(true, new Map([['a', 1], ['b', 2]])); }, ParameterError);
    Assert.throwsErrors(()=>{ throwClassCreationError(true, new Set([1,2,3])); }, ParameterError);
    Assert.throwsErrors(()=>{ throwClassCreationError(true, /123/); }, ParameterError);
    Assert.throwsErrors(()=>{ throwClassCreationError(true, new RegExp('123')); }, ParameterError);
    Assert.throwsErrors(()=>{ throwClassCreationError(true, {a:1, b:2, c:3, d:true}); }, ParameterError);
    Assert.throwsErrors(()=>{ throwClassCreationError(true, new Object()); }, ParameterError);
}

function testThrowCannotNewError(){
    // 先做参数校验测试
    Assert.throwsErrors(()=>{ throwCannotNewError(undefined, Assert); }, ClassCreationError); // undefined 是默认值
    Assert.throwsErrors(()=>{ throwCannotNewError(null, Assert); }, ParameterError);
    Assert.throwsErrors(()=>{ throwCannotNewError(NaN, Assert); }, ParameterError);
    Assert.throwsErrors(()=>{ throwCannotNewError('', Assert); }, ParameterError);
    Assert.throwsErrors(()=>{ throwCannotNewError('aaa', Assert); }, ParameterError);
    Assert.throwsErrors(()=>{ throwCannotNewError(new String(''), Assert); }, ParameterError);
    Assert.throwsErrors(()=>{ throwCannotNewError(new String('aaa'), Assert); }, ParameterError);
    Assert.throwsErrors(()=>{ throwCannotNewError(123, Assert); }, ParameterError);
    Assert.throwsErrors(()=>{ throwCannotNewError(new Number(123), Assert); }, ParameterError);
    Assert.throwsErrors(()=>{ throwCannotNewError(true, Assert); }, ClassCreationError); 
    Assert.throwsErrorsNone(()=>{ throwCannotNewError(false, Assert); });  
    Assert.throwsErrors(()=>{ throwCannotNewError(new Boolean(true), Assert); }, ClassCreationError); 
    Assert.throwsErrorsNone(()=>{ throwCannotNewError(new Boolean(false), Assert); }); 
    Assert.throwsErrors(()=>{ throwCannotNewError(Symbol.for('guid'), Assert); }, ParameterError);
    Assert.throwsErrors(()=>{ throwCannotNewError(Error, Assert); }, ParameterError);
    Assert.throwsErrors(()=>{ throwCannotNewError(testThrowError, Assert); }, ParameterError);
    Assert.throwsErrors(()=>{ throwCannotNewError(()=>{}, Assert); }, ParameterError);
    Assert.throwsErrors(()=>{ throwCannotNewError([1,2,3], Assert); }, ParameterError);
    Assert.throwsErrors(()=>{ throwCannotNewError(new Map([['a', 1], ['b', 2]]), Assert); }, ParameterError);
    Assert.throwsErrors(()=>{ throwCannotNewError(new Set([1,2,3]), Assert); }, ParameterError);
    Assert.throwsErrors(()=>{ throwCannotNewError(/123/, Assert); }, ParameterError);
    Assert.throwsErrors(()=>{ throwCannotNewError(new RegExp('123'), Assert); }, ParameterError);
    Assert.throwsErrors(()=>{ throwCannotNewError({a:1, b:2, c:3, d:true}, Assert); }, ParameterError);
    Assert.throwsErrors(()=>{ throwCannotNewError(new Object(), Assert); }, ParameterError);
    // 第2个参数
    Assert.throwsErrors(()=>{ throwCannotNewError(true, undefined); }, ParameterError); // 这里第2个参数，没有默认值
    Assert.throwsErrors(()=>{ throwCannotNewError(true, null); }, ParameterError);
    Assert.throwsErrors(()=>{ throwCannotNewError(true, NaN); }, ParameterError);
    Assert.throwsErrors(()=>{ throwCannotNewError(true, ''); }, ParameterError);
    Assert.throwsErrors(()=>{ throwCannotNewError(true, 'aaa'); }, ParameterError); // 
    Assert.throwsErrors(()=>{ throwCannotNewError(true, new String('')); }, ParameterError);
    Assert.throwsErrors(()=>{ throwCannotNewError(true, new String('aaa')); }, ParameterError);
    Assert.throwsErrors(()=>{ throwCannotNewError(true, 123); }, ParameterError);
    Assert.throwsErrors(()=>{ throwCannotNewError(true, new Number(123)); }, ParameterError);
    Assert.throwsErrors(()=>{ throwCannotNewError(true, true); }, ParameterError); 
    Assert.throwsErrors(()=>{ throwCannotNewError(true, false); }, ParameterError);
    Assert.throwsErrors(()=>{ throwCannotNewError(true, new Boolean(true)); }, ParameterError); 
    Assert.throwsErrors(()=>{ throwCannotNewError(true, new Boolean(false)); }, ParameterError);
    Assert.throwsErrors(()=>{ throwCannotNewError(true, Symbol.for('guid')); }, ParameterError);
    Assert.throwsErrors(()=>{ throwCannotNewError(true, Error); }, ClassCreationError);
    Assert.throwsErrors(()=>{ throwCannotNewError(true, testThrowError); }, ClassCreationError);
    Assert.throwsErrors(()=>{ throwCannotNewError(true, ()=>{}); }, ParameterError); // 箭头函数不算是 class 或者 普通function。因为它没法用 instanceof
    Assert.throwsErrors(()=>{ throwCannotNewError(true, [1,2,3]); }, ParameterError);
    Assert.throwsErrors(()=>{ throwCannotNewError(true, new Map([['a', 1], ['b', 2]])); }, ParameterError);
    Assert.throwsErrors(()=>{ throwCannotNewError(true, new Set([1,2,3])); }, ParameterError);
    Assert.throwsErrors(()=>{ throwCannotNewError(true, /123/); }, ParameterError);
    Assert.throwsErrors(()=>{ throwCannotNewError(true, new RegExp('123')); }, ParameterError);
    Assert.throwsErrors(()=>{ throwCannotNewError(true, {a:1, b:2, c:3, d:true}); }, ParameterError);
    Assert.throwsErrors(()=>{ throwCannotNewError(true, new Object()); }, ParameterError);
}

// ====== 导出测试函数

export {
    testThrowError, testThrowParameterError, testThrowClassCreationError, testThrowCannotNewError
}