/**
 * In my license, all codes can be shared free of charge. 
 * However, If my code is taken for commercial use, please maintain it yourself. 
 * I am not obligated to take responsibility for your business application.
 * Here is my email "pangdongcan@live.com"
 * 
 * Copyright © 2026 Micheal Pang. All rights reserved.
 * 
 * @file This file "testUidatatype.js" is part of project "pdc-js-framework" , which is belong to Michael Pang (It's Me).
 * @author Micheal Pang (Dongcan Pang)
 * @since 2026-07-21
 * @description 这里是 UI Components 组件的 uidatatype 模块测试
 */
"use strict"; // 这是严格模式下的 Javascript 代码

// 导入测试工具
import { Assert } from "../testTools.js";
import { Bootstrap5Object } from "../../uiComponents/static.js";
import { Bs5EffBaseComponent } from "../../uiComponents/dynamic.js";

// 导入测试对象
import {
    isContentObject, isContentObjectArray, isContentObjectSet, isContentObject2DArray,
    isChildrenComponent, isChildrenComponentArray, isChildrenComponent2DArray
} from "../../uiComponents/uidatatype.js";

// 开始测试
function testIsContentObject(){
    // 这里是 is 判断，所以直接处理 布尔值 就行了。
    Assert.equalsStrictly(false, isContentObject(undefined));
    Assert.equalsStrictly(false, isContentObject(null));
    Assert.equalsStrictly(false, isContentObject(NaN));
    Assert.equalsStrictly(true, isContentObject(''));
    Assert.equalsStrictly(true, isContentObject('sss'));
    Assert.equalsStrictly(true, isContentObject(new String('')));
    Assert.equalsStrictly(true, isContentObject(new String('sss')));
    Assert.equalsStrictly(false, isContentObject(123));
    Assert.equalsStrictly(false, isContentObject(-1));
    Assert.equalsStrictly(false, isContentObject(new Number(123)));
    Assert.equalsStrictly(false, isContentObject(new Number(-1)));
    Assert.equalsStrictly(false, isContentObject(true));
    Assert.equalsStrictly(false, isContentObject(false));
    Assert.equalsStrictly(false, isContentObject(new Boolean(true)));
    Assert.equalsStrictly(false, isContentObject(new Boolean(false)));
    Assert.equalsStrictly(false, isContentObject(Symbol('uid')));
    Assert.equalsStrictly(false, isContentObject(Symbol.for('uid')));
    Assert.equalsStrictly(false, isContentObject(Error));
    Assert.equalsStrictly(false, isContentObject(Bootstrap5Object));
    Assert.equalsStrictly(false, isContentObject(testIsContentObject));
    Assert.equalsStrictly(false, isContentObject(function(){}));
    Assert.equalsStrictly(false, isContentObject(()=>{}));
    Assert.equalsStrictly(false, isContentObject([]));
    Assert.equalsStrictly(false, isContentObject([1,2,3]));
    Assert.equalsStrictly(false, isContentObject([[]]));
    Assert.equalsStrictly(false, isContentObject([[1,2,3],[4,5,6]]));
    Assert.equalsStrictly(false, isContentObject(new Map()));
    Assert.equalsStrictly(false, isContentObject(new Map([['a',1],['b', 2]])));
    Assert.equalsStrictly(false, isContentObject(new Set()));
    Assert.equalsStrictly(false, isContentObject(new Set([1,2,3])));
    Assert.equalsStrictly(false, isContentObject(/123/));
    Assert.equalsStrictly(false, isContentObject(new RegExp('123')));
    Assert.equalsStrictly(false, isContentObject({}));
    Assert.equalsStrictly(false, isContentObject({a:1, b:2}));
    Assert.equalsStrictly(false, isContentObject(new Object()));
    // 测试组件对象 和 类继承
    class TestBsStaticObj extends Bootstrap5Object {};
    Assert.equalsStrictly(true, isContentObject(new Bootstrap5Object()));
    Assert.equalsStrictly(true, isContentObject(new TestBsStaticObj()));
}

function testIsContentObjectArray(){
    // 这里是 is 判断，所以直接处理 布尔值 就行了。
    Assert.equalsStrictly(false, isContentObjectArray(undefined));
    Assert.equalsStrictly(false, isContentObjectArray(null));
    Assert.equalsStrictly(false, isContentObjectArray(NaN));
    Assert.equalsStrictly(false, isContentObjectArray(''));
    Assert.equalsStrictly(false, isContentObjectArray('sss'));
    Assert.equalsStrictly(false, isContentObjectArray(new String('')));
    Assert.equalsStrictly(false, isContentObjectArray(new String('sss')));
    Assert.equalsStrictly(false, isContentObjectArray(123));
    Assert.equalsStrictly(false, isContentObjectArray(-1));
    Assert.equalsStrictly(false, isContentObjectArray(new Number(123)));
    Assert.equalsStrictly(false, isContentObjectArray(new Number(-1)));
    Assert.equalsStrictly(false, isContentObjectArray(true));
    Assert.equalsStrictly(false, isContentObjectArray(false));
    Assert.equalsStrictly(false, isContentObjectArray(new Boolean(true)));
    Assert.equalsStrictly(false, isContentObjectArray(new Boolean(false)));
    Assert.equalsStrictly(false, isContentObjectArray(Symbol('uid')));
    Assert.equalsStrictly(false, isContentObjectArray(Symbol.for('uid')));
    Assert.equalsStrictly(false, isContentObjectArray(Error));
    Assert.equalsStrictly(false, isContentObjectArray(Bootstrap5Object));
    Assert.equalsStrictly(false, isContentObjectArray(testIsContentObjectArray));
    Assert.equalsStrictly(false, isContentObjectArray(function(){}));
    Assert.equalsStrictly(false, isContentObjectArray(()=>{}));
    Assert.equalsStrictly(false, isContentObjectArray([]));
    Assert.equalsStrictly(false, isContentObjectArray([1,2,3]));
    Assert.equalsStrictly(false, isContentObjectArray([[]]));
    Assert.equalsStrictly(false, isContentObjectArray([[1,2,3],[4,5,6]]));
    Assert.equalsStrictly(false, isContentObjectArray(new Map()));
    Assert.equalsStrictly(false, isContentObjectArray(new Map([['a',1],['b', 2]])));
    Assert.equalsStrictly(false, isContentObjectArray(new Set()));
    Assert.equalsStrictly(false, isContentObjectArray(new Set([1,2,3])));
    Assert.equalsStrictly(false, isContentObjectArray(/123/));
    Assert.equalsStrictly(false, isContentObjectArray(new RegExp('123')));
    Assert.equalsStrictly(false, isContentObjectArray({}));
    Assert.equalsStrictly(false, isContentObjectArray({a:1, b:2}));
    Assert.equalsStrictly(false, isContentObjectArray(new Object()));
    // 测试组件对象 和 类继承
    class TestBsStaticObj extends Bootstrap5Object {};
    Assert.equalsStrictly(false, isContentObjectArray(new Bootstrap5Object()));
    Assert.equalsStrictly(false, isContentObjectArray(new TestBsStaticObj()));
    // 测试数组
    Assert.equalsStrictly(true, isContentObjectArray(['']));
    Assert.equalsStrictly(true, isContentObjectArray(['', 'sss']));
    Assert.equalsStrictly(true, isContentObjectArray([new Bootstrap5Object()]));
    Assert.equalsStrictly(true, isContentObjectArray([new TestBsStaticObj()]));
    Assert.equalsStrictly(true, isContentObjectArray(['','sss', new Bootstrap5Object(), new TestBsStaticObj()]));
    Assert.equalsStrictly(false, isContentObjectArray(['','sss', new Bootstrap5Object(), new TestBsStaticObj(), 123]));
}

function testIsContentObjectSet(){
    // 这里是 is 判断，所以直接处理 布尔值 就行了。
    Assert.equalsStrictly(false, isContentObjectSet(undefined));
    Assert.equalsStrictly(false, isContentObjectSet(null));
    Assert.equalsStrictly(false, isContentObjectSet(NaN));
    Assert.equalsStrictly(false, isContentObjectSet(''));
    Assert.equalsStrictly(false, isContentObjectSet('sss'));
    Assert.equalsStrictly(false, isContentObjectSet(new String('')));
    Assert.equalsStrictly(false, isContentObjectSet(new String('sss')));
    Assert.equalsStrictly(false, isContentObjectSet(123));
    Assert.equalsStrictly(false, isContentObjectSet(-1));
    Assert.equalsStrictly(false, isContentObjectSet(new Number(123)));
    Assert.equalsStrictly(false, isContentObjectSet(new Number(-1)));
    Assert.equalsStrictly(false, isContentObjectSet(true));
    Assert.equalsStrictly(false, isContentObjectSet(false));
    Assert.equalsStrictly(false, isContentObjectSet(new Boolean(true)));
    Assert.equalsStrictly(false, isContentObjectSet(new Boolean(false)));
    Assert.equalsStrictly(false, isContentObjectSet(Symbol('uid')));
    Assert.equalsStrictly(false, isContentObjectSet(Symbol.for('uid')));
    Assert.equalsStrictly(false, isContentObjectSet(Error));
    Assert.equalsStrictly(false, isContentObjectSet(Bootstrap5Object));
    Assert.equalsStrictly(false, isContentObjectSet(testIsContentObjectSet));
    Assert.equalsStrictly(false, isContentObjectSet(function(){}));
    Assert.equalsStrictly(false, isContentObjectSet(()=>{}));
    Assert.equalsStrictly(false, isContentObjectSet([]));
    Assert.equalsStrictly(false, isContentObjectSet([1,2,3]));
    Assert.equalsStrictly(false, isContentObjectSet([[]]));
    Assert.equalsStrictly(false, isContentObjectSet([[1,2,3],[4,5,6]]));
    Assert.equalsStrictly(false, isContentObjectSet(new Map()));
    Assert.equalsStrictly(false, isContentObjectSet(new Map([['a',1],['b', 2]])));
    Assert.equalsStrictly(false, isContentObjectSet(new Set()));
    Assert.equalsStrictly(false, isContentObjectSet(new Set([1,2,3])));
    Assert.equalsStrictly(false, isContentObjectSet(/123/));
    Assert.equalsStrictly(false, isContentObjectSet(new RegExp('123')));
    Assert.equalsStrictly(false, isContentObjectSet({}));
    Assert.equalsStrictly(false, isContentObjectSet({a:1, b:2}));
    Assert.equalsStrictly(false, isContentObjectSet(new Object()));
    // 测试组件对象 和 类继承
    class TestBsStaticObj extends Bootstrap5Object {};
    Assert.equalsStrictly(false, isContentObjectSet(new Bootstrap5Object()));
    Assert.equalsStrictly(false, isContentObjectSet(new TestBsStaticObj()));
    // 测试 Set
    Assert.equalsStrictly(true, isContentObjectSet(new Set([''])));
    Assert.equalsStrictly(true, isContentObjectSet(new Set(['', 'sss'])));
    Assert.equalsStrictly(true, isContentObjectSet(new Set([new Bootstrap5Object()])));
    Assert.equalsStrictly(true, isContentObjectSet(new Set([new TestBsStaticObj()])));
    Assert.equalsStrictly(true, isContentObjectSet(new Set(['','sss', new Bootstrap5Object(), new TestBsStaticObj()])));
    Assert.equalsStrictly(false, isContentObjectSet(new Set(['','sss', new Bootstrap5Object(), new TestBsStaticObj(), 123])));
}

function testIsContentObject2DArray(){
    // 这里是 is 判断，所以直接处理 布尔值 就行了。
    Assert.equalsStrictly(false, isContentObject2DArray(undefined));
    Assert.equalsStrictly(false, isContentObject2DArray(null));
    Assert.equalsStrictly(false, isContentObject2DArray(NaN));
    Assert.equalsStrictly(false, isContentObject2DArray(''));
    Assert.equalsStrictly(false, isContentObject2DArray('sss'));
    Assert.equalsStrictly(false, isContentObject2DArray(new String('')));
    Assert.equalsStrictly(false, isContentObject2DArray(new String('sss')));
    Assert.equalsStrictly(false, isContentObject2DArray(123));
    Assert.equalsStrictly(false, isContentObject2DArray(-1));
    Assert.equalsStrictly(false, isContentObject2DArray(new Number(123)));
    Assert.equalsStrictly(false, isContentObject2DArray(new Number(-1)));
    Assert.equalsStrictly(false, isContentObject2DArray(true));
    Assert.equalsStrictly(false, isContentObject2DArray(false));
    Assert.equalsStrictly(false, isContentObject2DArray(new Boolean(true)));
    Assert.equalsStrictly(false, isContentObject2DArray(new Boolean(false)));
    Assert.equalsStrictly(false, isContentObject2DArray(Symbol('uid')));
    Assert.equalsStrictly(false, isContentObject2DArray(Symbol.for('uid')));
    Assert.equalsStrictly(false, isContentObject2DArray(Error));
    Assert.equalsStrictly(false, isContentObject2DArray(Bootstrap5Object));
    Assert.equalsStrictly(false, isContentObject2DArray(testIsContentObject2DArray));
    Assert.equalsStrictly(false, isContentObject2DArray(function(){}));
    Assert.equalsStrictly(false, isContentObject2DArray(()=>{}));
    Assert.equalsStrictly(false, isContentObject2DArray([]));
    Assert.equalsStrictly(false, isContentObject2DArray([1,2,3]));
    Assert.equalsStrictly(false, isContentObject2DArray([[]]));
    Assert.equalsStrictly(false, isContentObject2DArray([[1,2,3],[4,5,6]]));
    Assert.equalsStrictly(false, isContentObject2DArray(new Map()));
    Assert.equalsStrictly(false, isContentObject2DArray(new Map([['a',1],['b', 2]])));
    Assert.equalsStrictly(false, isContentObject2DArray(new Set()));
    Assert.equalsStrictly(false, isContentObject2DArray(new Set([1,2,3])));
    Assert.equalsStrictly(false, isContentObject2DArray(/123/));
    Assert.equalsStrictly(false, isContentObject2DArray(new RegExp('123')));
    Assert.equalsStrictly(false, isContentObject2DArray({}));
    Assert.equalsStrictly(false, isContentObject2DArray({a:1, b:2}));
    Assert.equalsStrictly(false, isContentObject2DArray(new Object()));
    // 测试组件对象 和 类继承
    class TestBsStaticObj extends Bootstrap5Object {};
    Assert.equalsStrictly(false, isContentObject2DArray(new Bootstrap5Object()));
    Assert.equalsStrictly(false, isContentObject2DArray(new TestBsStaticObj()));
    // 测试数组
    Assert.equalsStrictly(false, isContentObject2DArray(['']));
    Assert.equalsStrictly(false, isContentObject2DArray(['', 'sss']));
    Assert.equalsStrictly(false, isContentObject2DArray([new Bootstrap5Object()]));
    Assert.equalsStrictly(false, isContentObject2DArray([new TestBsStaticObj()]));
    Assert.equalsStrictly(false, isContentObject2DArray(['','sss', new Bootstrap5Object(), new TestBsStaticObj()]));
    Assert.equalsStrictly(false, isContentObject2DArray(['','sss', new Bootstrap5Object(), new TestBsStaticObj(), 123]));
    // 测试二维数组
    Assert.equalsStrictly(true, isContentObject2DArray([['']]));
    Assert.equalsStrictly(true, isContentObject2DArray([['', 'sss']]));
    Assert.equalsStrictly(true, isContentObject2DArray([[new Bootstrap5Object()]]));
    Assert.equalsStrictly(true, isContentObject2DArray([[new TestBsStaticObj()]]));
    Assert.equalsStrictly(true, isContentObject2DArray([['','sss', new Bootstrap5Object(), new TestBsStaticObj()]]));
    Assert.equalsStrictly(false, isContentObject2DArray([['','sss', new Bootstrap5Object(), new TestBsStaticObj(), 123]]));
}

function testIsChildrenComponent(){
    // 这里是 is 判断，所以直接处理 布尔值 就行了。
    Assert.equalsStrictly(false, isChildrenComponent(undefined));
    Assert.equalsStrictly(false, isChildrenComponent(null));
    Assert.equalsStrictly(false, isChildrenComponent(NaN));
    Assert.equalsStrictly(true, isChildrenComponent(''));
    Assert.equalsStrictly(true, isChildrenComponent('sss'));
    Assert.equalsStrictly(true, isChildrenComponent(new String('')));
    Assert.equalsStrictly(true, isChildrenComponent(new String('sss')));
    Assert.equalsStrictly(false, isChildrenComponent(123));
    Assert.equalsStrictly(false, isChildrenComponent(-1));
    Assert.equalsStrictly(false, isChildrenComponent(new Number(123)));
    Assert.equalsStrictly(false, isChildrenComponent(new Number(-1)));
    Assert.equalsStrictly(false, isChildrenComponent(true));
    Assert.equalsStrictly(false, isChildrenComponent(false));
    Assert.equalsStrictly(false, isChildrenComponent(new Boolean(true)));
    Assert.equalsStrictly(false, isChildrenComponent(new Boolean(false)));
    Assert.equalsStrictly(false, isChildrenComponent(Symbol('uid')));
    Assert.equalsStrictly(false, isChildrenComponent(Symbol.for('uid')));
    Assert.equalsStrictly(false, isChildrenComponent(Error));
    Assert.equalsStrictly(false, isChildrenComponent(Bootstrap5Object));
    Assert.equalsStrictly(false, isChildrenComponent(testIsChildrenComponent));
    Assert.equalsStrictly(false, isChildrenComponent(function(){}));
    Assert.equalsStrictly(false, isChildrenComponent(()=>{}));
    Assert.equalsStrictly(false, isChildrenComponent([]));
    Assert.equalsStrictly(false, isChildrenComponent([1,2,3]));
    Assert.equalsStrictly(false, isChildrenComponent([[]]));
    Assert.equalsStrictly(false, isChildrenComponent([[1,2,3],[4,5,6]]));
    Assert.equalsStrictly(false, isChildrenComponent(new Map()));
    Assert.equalsStrictly(false, isChildrenComponent(new Map([['a',1],['b', 2]])));
    Assert.equalsStrictly(false, isChildrenComponent(new Set()));
    Assert.equalsStrictly(false, isChildrenComponent(new Set([1,2,3])));
    Assert.equalsStrictly(false, isChildrenComponent(/123/));
    Assert.equalsStrictly(false, isChildrenComponent(new RegExp('123')));
    Assert.equalsStrictly(false, isChildrenComponent({}));
    Assert.equalsStrictly(false, isChildrenComponent({a:1, b:2}));
    Assert.equalsStrictly(false, isChildrenComponent(new Object()));
    // 测试组件对象 和 类继承
    class TestBs5EffObj extends Bs5EffBaseComponent {};
    Assert.equalsStrictly(true, isChildrenComponent(new Bs5EffBaseComponent()));
    Assert.equalsStrictly(true, isChildrenComponent(new TestBs5EffObj()));
}

function testIsChildrenComponentArray(){
    // 这里是 is 判断，所以直接处理 布尔值 就行了。
    Assert.equalsStrictly(false, isChildrenComponentArray(undefined));
    Assert.equalsStrictly(false, isChildrenComponentArray(null));
    Assert.equalsStrictly(false, isChildrenComponentArray(NaN));
    Assert.equalsStrictly(false, isChildrenComponentArray(''));
    Assert.equalsStrictly(false, isChildrenComponentArray('sss'));
    Assert.equalsStrictly(false, isChildrenComponentArray(new String('')));
    Assert.equalsStrictly(false, isChildrenComponentArray(new String('sss')));
    Assert.equalsStrictly(false, isChildrenComponentArray(123));
    Assert.equalsStrictly(false, isChildrenComponentArray(-1));
    Assert.equalsStrictly(false, isChildrenComponentArray(new Number(123)));
    Assert.equalsStrictly(false, isChildrenComponentArray(new Number(-1)));
    Assert.equalsStrictly(false, isChildrenComponentArray(true));
    Assert.equalsStrictly(false, isChildrenComponentArray(false));
    Assert.equalsStrictly(false, isChildrenComponentArray(new Boolean(true)));
    Assert.equalsStrictly(false, isChildrenComponentArray(new Boolean(false)));
    Assert.equalsStrictly(false, isChildrenComponentArray(Symbol('uid')));
    Assert.equalsStrictly(false, isChildrenComponentArray(Symbol.for('uid')));
    Assert.equalsStrictly(false, isChildrenComponentArray(Error));
    Assert.equalsStrictly(false, isChildrenComponentArray(Bootstrap5Object));
    Assert.equalsStrictly(false, isChildrenComponentArray(testIsChildrenComponentArray));
    Assert.equalsStrictly(false, isChildrenComponentArray(function(){}));
    Assert.equalsStrictly(false, isChildrenComponentArray(()=>{}));
    Assert.equalsStrictly(false, isChildrenComponentArray([]));
    Assert.equalsStrictly(false, isChildrenComponentArray([1,2,3]));
    Assert.equalsStrictly(false, isChildrenComponentArray([[]]));
    Assert.equalsStrictly(false, isChildrenComponentArray([[1,2,3],[4,5,6]]));
    Assert.equalsStrictly(false, isChildrenComponentArray(new Map()));
    Assert.equalsStrictly(false, isChildrenComponentArray(new Map([['a',1],['b', 2]])));
    Assert.equalsStrictly(false, isChildrenComponentArray(new Set()));
    Assert.equalsStrictly(false, isChildrenComponentArray(new Set([1,2,3])));
    Assert.equalsStrictly(false, isChildrenComponentArray(/123/));
    Assert.equalsStrictly(false, isChildrenComponentArray(new RegExp('123')));
    Assert.equalsStrictly(false, isChildrenComponentArray({}));
    Assert.equalsStrictly(false, isChildrenComponentArray({a:1, b:2}));
    Assert.equalsStrictly(false, isChildrenComponentArray(new Object()));
    // 测试组件对象 和 类继承
    class TestBs5EffObj extends Bs5EffBaseComponent {};
    Assert.equalsStrictly(false, isChildrenComponentArray(new Bs5EffBaseComponent()));
    Assert.equalsStrictly(false, isChildrenComponentArray(new TestBs5EffObj()));
    // 测试数组
    Assert.equalsStrictly(true, isChildrenComponentArray(['']));
    Assert.equalsStrictly(true, isChildrenComponentArray(['', 'sss']));
    Assert.equalsStrictly(true, isChildrenComponentArray([new Bs5EffBaseComponent()]));
    Assert.equalsStrictly(true, isChildrenComponentArray([new TestBs5EffObj()]));
    Assert.equalsStrictly(true, isChildrenComponentArray(['','sss', new Bs5EffBaseComponent(), new TestBs5EffObj()]));
    Assert.equalsStrictly(false, isChildrenComponentArray(['','sss', new Bs5EffBaseComponent(), new TestBs5EffObj(), 123]));
}

function testIsChildrenComponent2DArray(){
    // 这里是 is 判断，所以直接处理 布尔值 就行了。
    Assert.equalsStrictly(false, isChildrenComponent2DArray(undefined));
    Assert.equalsStrictly(false, isChildrenComponent2DArray(null));
    Assert.equalsStrictly(false, isChildrenComponent2DArray(NaN));
    Assert.equalsStrictly(false, isChildrenComponent2DArray(''));
    Assert.equalsStrictly(false, isChildrenComponent2DArray('sss'));
    Assert.equalsStrictly(false, isChildrenComponent2DArray(new String('')));
    Assert.equalsStrictly(false, isChildrenComponent2DArray(new String('sss')));
    Assert.equalsStrictly(false, isChildrenComponent2DArray(123));
    Assert.equalsStrictly(false, isChildrenComponent2DArray(-1));
    Assert.equalsStrictly(false, isChildrenComponent2DArray(new Number(123)));
    Assert.equalsStrictly(false, isChildrenComponent2DArray(new Number(-1)));
    Assert.equalsStrictly(false, isChildrenComponent2DArray(true));
    Assert.equalsStrictly(false, isChildrenComponent2DArray(false));
    Assert.equalsStrictly(false, isChildrenComponent2DArray(new Boolean(true)));
    Assert.equalsStrictly(false, isChildrenComponent2DArray(new Boolean(false)));
    Assert.equalsStrictly(false, isChildrenComponent2DArray(Symbol('uid')));
    Assert.equalsStrictly(false, isChildrenComponent2DArray(Symbol.for('uid')));
    Assert.equalsStrictly(false, isChildrenComponent2DArray(Error));
    Assert.equalsStrictly(false, isChildrenComponent2DArray(Bootstrap5Object));
    Assert.equalsStrictly(false, isChildrenComponent2DArray(testIsChildrenComponent2DArray));
    Assert.equalsStrictly(false, isChildrenComponent2DArray(function(){}));
    Assert.equalsStrictly(false, isChildrenComponent2DArray(()=>{}));
    Assert.equalsStrictly(false, isChildrenComponent2DArray([]));
    Assert.equalsStrictly(false, isChildrenComponent2DArray([1,2,3]));
    Assert.equalsStrictly(false, isChildrenComponent2DArray([[]]));
    Assert.equalsStrictly(false, isChildrenComponent2DArray([[1,2,3],[4,5,6]]));
    Assert.equalsStrictly(false, isChildrenComponent2DArray(new Map()));
    Assert.equalsStrictly(false, isChildrenComponent2DArray(new Map([['a',1],['b', 2]])));
    Assert.equalsStrictly(false, isChildrenComponent2DArray(new Set()));
    Assert.equalsStrictly(false, isChildrenComponent2DArray(new Set([1,2,3])));
    Assert.equalsStrictly(false, isChildrenComponent2DArray(/123/));
    Assert.equalsStrictly(false, isChildrenComponent2DArray(new RegExp('123')));
    Assert.equalsStrictly(false, isChildrenComponent2DArray({}));
    Assert.equalsStrictly(false, isChildrenComponent2DArray({a:1, b:2}));
    Assert.equalsStrictly(false, isChildrenComponent2DArray(new Object()));
    // 测试组件对象 和 类继承
    class TestBs5EffObj extends Bs5EffBaseComponent {};
    Assert.equalsStrictly(false, isChildrenComponent2DArray(new Bs5EffBaseComponent()));
    Assert.equalsStrictly(false, isChildrenComponent2DArray(new TestBs5EffObj()));
    // 测试数组
    Assert.equalsStrictly(true, isChildrenComponent2DArray([['']]));
    Assert.equalsStrictly(true, isChildrenComponent2DArray([['', 'sss']]));
    Assert.equalsStrictly(true, isChildrenComponent2DArray([[new Bs5EffBaseComponent()]]));
    Assert.equalsStrictly(true, isChildrenComponent2DArray([[new TestBs5EffObj()]]));
    Assert.equalsStrictly(true, isChildrenComponent2DArray([['','sss', new Bs5EffBaseComponent(), new TestBs5EffObj()]]));
    Assert.equalsStrictly(false, isChildrenComponent2DArray([['','sss', new Bs5EffBaseComponent(), new TestBs5EffObj(), 123]]));
}

// 导出测试函数
export {
    testIsContentObject, testIsContentObjectArray, testIsContentObjectSet, testIsContentObject2DArray,
    testIsChildrenComponent, testIsChildrenComponentArray, testIsChildrenComponent2DArray
}