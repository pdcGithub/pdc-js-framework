/**
 * In my license, all codes can be shared free of charge. 
 * However, If my code is taken for commercial use, please maintain it yourself. 
 * I am not obligated to take responsibility for your business application.
 * Here is my email "pangdongcan@live.com"
 * 
 * Copyright © 2026 Micheal Pang. All rights reserved.
 * 
 * @file This file "testHtml.js" is part of project "pdc-js-framework" , which is belong to Michael Pang (It's Me).
 * @author  Micheal Pang (Dongcan Pang)
 * @since  2026-06-04
 * @description  这里负责测试 utils/html.js 这个模块的处理是否有问题。
 */
"use strict"; // 这是严格模式下的 Javascript 代码

import { Assert } from "../testTools.js";
import { VerificationError } from "../../models/errors.js";
import { DOM_PARSER, drawTag } from "../../utils/html.js";

/**
 * 关于 domParser 对象的测试
 */
function testDomParser() {
    // 首先测试 DOM_PARSER 是不是对象
    Assert.equalsStrictly(true, typeof DOM_PARSER === 'object');
    Assert.equalsStrictly(true, !Array.isArray(DOM_PARSER));
    // 然后测试 parseFromString 函数是否存在
    Assert.equalsStrictly(true, typeof DOM_PARSER.parseFromString === 'function');
    // 最后测试 parseFromString 函数是否可用
    let htmlStr = `
    <div id="test1">xxx</div>
    `;
    let htmlDoc = DOM_PARSER.parseFromString(htmlStr, 'text/html');
    let obj1 = htmlDoc.querySelector('#test1');
    let obj2 = htmlDoc.getElementById('test1');
    // 查看构建的 document 对象中，是否存在 test1 这个 div 标签。并且内部的内容是 xxx
    Assert.equalsStrictly('xxx', obj1.getHTML());
    Assert.equalsStrictly('xxx', obj2.getHTML());
}

/**
 * 关于 HtmlUtil 的测试
 */
function testDrawTag() {

    // 在我的框架中， js 的数据类型中主要有以下几种：
    // ===> 空（undefined\null\NaN）、
    // ===> 字符串（基础+对象）、数字（基础+对象）、布尔（基础+对象）、Symbol、类、函数、
    // ===> 数组、Map、Set、
    // ===> 正则、普通对象

    // 首先是参数检测 第1个参数
    Assert.throwsErrorsNone(()=>{ drawTag(undefined, {}, ''); }); // 默认值
    Assert.throwsErrors(()=>{ drawTag(null, {}, ''); }, VerificationError);
    Assert.throwsErrors(()=>{ drawTag(NaN, {}, ''); }, VerificationError);
    Assert.throwsErrors(()=>{ drawTag('', {}, ''); }, VerificationError);
    Assert.throwsErrorsNone(()=>{ drawTag('sss', {}, ''); });
    Assert.throwsErrors(()=>{ drawTag(new String(''), {}, ''); }, VerificationError);
    Assert.throwsErrorsNone(()=>{ drawTag(new String('sss'), {}, ''); });
    Assert.throwsErrors(()=>{ drawTag(123, {}, ''); }, VerificationError);
    Assert.throwsErrors(()=>{ drawTag(new Number(123), {}, ''); }, VerificationError);
    Assert.throwsErrors(()=>{ drawTag(true, {}, ''); }, VerificationError);
    Assert.throwsErrors(()=>{ drawTag(false, {}, ''); }, VerificationError);
    Assert.throwsErrors(()=>{ drawTag(new Boolean(true), {}, ''); }, VerificationError);
    Assert.throwsErrors(()=>{ drawTag(new Boolean(false), {}, ''); }, VerificationError);
    Assert.throwsErrors(()=>{ drawTag(Symbol.for('guid'), {}, ''); }, VerificationError);
    Assert.throwsErrors(()=>{ drawTag(Error, {}, ''); }, VerificationError);
    Assert.throwsErrors(()=>{ drawTag(testDrawTag, {}, ''); }, VerificationError);
    Assert.throwsErrors(()=>{ drawTag(()=>{}, {}, ''); }, VerificationError);
    Assert.throwsErrors(()=>{ drawTag(function(){}, {}, ''); }, VerificationError);
    Assert.throwsErrors(()=>{ drawTag([], {}, ''); }, VerificationError);
    Assert.throwsErrors(()=>{ drawTag([1,2,3], {}, ''); }, VerificationError);
    Assert.throwsErrors(()=>{ drawTag([[]], {}, ''); }, VerificationError);
    Assert.throwsErrors(()=>{ drawTag([[1,2,3]], {}, ''); }, VerificationError);
    Assert.throwsErrors(()=>{ drawTag(new Map(), {}, ''); }, VerificationError);
    Assert.throwsErrors(()=>{ drawTag(new Map([['a',1],['b',2]]), {}, ''); }, VerificationError);
    Assert.throwsErrors(()=>{ drawTag(new Set(), {}, ''); }, VerificationError);
    Assert.throwsErrors(()=>{ drawTag(new Set([1,2,3]), {}, ''); }, VerificationError);
    Assert.throwsErrors(()=>{ drawTag(/123/, {}, ''); }, VerificationError);
    Assert.throwsErrors(()=>{ drawTag({}, {}, ''); }, VerificationError);
    Assert.throwsErrors(()=>{ drawTag({a:1, b:2}, {}, ''); }, VerificationError);
    Assert.throwsErrors(()=>{ drawTag(new Object(), {}, ''); }, VerificationError);
    // 第2个参数(对象或者字符串)
    Assert.throwsErrorsNone(()=>{ drawTag('sss', undefined, ''); }); // 默认值
    Assert.throwsErrors(()=>{ drawTag('sss', null, ''); }, VerificationError);
    Assert.throwsErrors(()=>{ drawTag('sss', NaN, ''); }, VerificationError);
    Assert.throwsErrorsNone(()=>{ drawTag('sss', '', ''); });
    Assert.throwsErrorsNone(()=>{ drawTag('sss', 'sss', ''); });
    Assert.throwsErrorsNone(()=>{ drawTag('sss', new String(''), ''); });
    Assert.throwsErrorsNone(()=>{ drawTag('sss', new String('sss'), ''); });
    Assert.throwsErrors(()=>{ drawTag('sss', 123, ''); }, VerificationError);
    Assert.throwsErrors(()=>{ drawTag('sss', new Number(123), ''); }, VerificationError);
    Assert.throwsErrors(()=>{ drawTag('sss', true, ''); }, VerificationError);
    Assert.throwsErrors(()=>{ drawTag('sss', false, ''); }, VerificationError);
    Assert.throwsErrors(()=>{ drawTag('sss', new Boolean(true), ''); }, VerificationError);
    Assert.throwsErrors(()=>{ drawTag('sss', new Boolean(false), ''); }, VerificationError);
    Assert.throwsErrors(()=>{ drawTag('sss', Symbol.for('guid'), ''); }, VerificationError);
    Assert.throwsErrors(()=>{ drawTag('sss', Error, ''); }, VerificationError);
    Assert.throwsErrors(()=>{ drawTag('sss', testDrawTag, ''); }, VerificationError);
    Assert.throwsErrors(()=>{ drawTag('sss', ()=>{}, ''); }, VerificationError);
    Assert.throwsErrors(()=>{ drawTag('sss', function(){}, ''); }, VerificationError);
    Assert.throwsErrors(()=>{ drawTag('sss', [], ''); }, VerificationError);
    Assert.throwsErrors(()=>{ drawTag('sss', [1,2,3], ''); }, VerificationError);
    Assert.throwsErrors(()=>{ drawTag('sss', [[]], ''); }, VerificationError);
    Assert.throwsErrors(()=>{ drawTag('sss', [[1,2,3]], ''); }, VerificationError);
    Assert.throwsErrors(()=>{ drawTag('sss', new Map(), ''); }, VerificationError);
    Assert.throwsErrors(()=>{ drawTag('sss', new Map([['a',1],['b',2]]), ''); }, VerificationError);
    Assert.throwsErrors(()=>{ drawTag('sss', new Set(), ''); }, VerificationError);
    Assert.throwsErrors(()=>{ drawTag('sss', new Set([1,2,3]), ''); }, VerificationError);
    Assert.throwsErrors(()=>{ drawTag('sss', /123/, ''); }, VerificationError);
    Assert.throwsErrorsNone(()=>{ drawTag('sss', {}, ''); });
    Assert.throwsErrorsNone(()=>{ drawTag('sss', {a:1, b:2}, ''); });
    Assert.throwsErrorsNone(()=>{ drawTag('sss', new Object(), ''); });
    // 第3个参数
    Assert.throwsErrorsNone(()=>{ drawTag('sss', {}, undefined); }); // 默认值
    Assert.throwsErrors(()=>{ drawTag('sss', {}, null); }, VerificationError);
    Assert.throwsErrors(()=>{ drawTag('sss', {}, NaN); }, VerificationError);
    Assert.throwsErrorsNone(()=>{ drawTag('sss', {}, ''); });
    Assert.throwsErrorsNone(()=>{ drawTag('sss', {}, 'sss'); });
    Assert.throwsErrorsNone(()=>{ drawTag('sss', {}, new String('')); });
    Assert.throwsErrorsNone(()=>{ drawTag('sss', {}, new String('sss')); });
    Assert.throwsErrors(()=>{ drawTag('sss', {}, 123); }, VerificationError);
    Assert.throwsErrors(()=>{ drawTag('sss', {}, new Number(123)); }, VerificationError);
    Assert.throwsErrors(()=>{ drawTag('sss', {}, true); }, VerificationError);
    Assert.throwsErrors(()=>{ drawTag('sss', {}, false); }, VerificationError);
    Assert.throwsErrors(()=>{ drawTag('sss', {}, new Boolean(true)); }, VerificationError);
    Assert.throwsErrors(()=>{ drawTag('sss', {}, new Boolean(false)); }, VerificationError);
    Assert.throwsErrors(()=>{ drawTag('sss', {}, Symbol.for('guid')); }, VerificationError);
    Assert.throwsErrors(()=>{ drawTag('sss', {}, Error); }, VerificationError);
    Assert.throwsErrors(()=>{ drawTag('sss', {}, testDrawTag); }, VerificationError);
    Assert.throwsErrors(()=>{ drawTag('sss', {}, ()=>{}); }, VerificationError);
    Assert.throwsErrors(()=>{ drawTag('sss', {}, function(){}); }, VerificationError);
    Assert.throwsErrors(()=>{ drawTag('sss', {}, []); }, VerificationError);
    Assert.throwsErrors(()=>{ drawTag('sss', {}, [1,2,3]); }, VerificationError);
    Assert.throwsErrors(()=>{ drawTag('sss', {}, [[]]); }, VerificationError);
    Assert.throwsErrors(()=>{ drawTag('sss', {}, [[1,2,3]]); }, VerificationError);
    Assert.throwsErrors(()=>{ drawTag('sss', {}, new Map()); }, VerificationError);
    Assert.throwsErrors(()=>{ drawTag('sss', {}, new Map([['a',1],['b',2]])); }, VerificationError);
    Assert.throwsErrors(()=>{ drawTag('sss', {}, new Set()); }, VerificationError);
    Assert.throwsErrors(()=>{ drawTag('sss', {}, new Set([1,2,3])); }, VerificationError);
    Assert.throwsErrors(()=>{ drawTag('sss', {}, /123/); }, VerificationError);
    Assert.throwsErrors(()=>{ drawTag('sss', {}, {}); }, VerificationError);
    Assert.throwsErrors(()=>{ drawTag('sss', {}, {a:1, b:2}); }, VerificationError);
    Assert.throwsErrors(()=>{ drawTag('sss', {}, new Object()); }, VerificationError);
    // 参数合规情况下，看输出结果是否合规
    Assert.throwsErrorsNone(()=>{
        // 全默认
        Assert.equalsStrictly('<unknow></unknow>', drawTag());
        Assert.equalsStrictly('<div></div>', drawTag('div'));
        Assert.equalsStrictly('<div a="1"></div>', drawTag('div', {a:1}));
        Assert.equalsStrictly('<div name="222"></div>', drawTag('div', 'name="222"'));
        Assert.equalsStrictly('<div a="1" b="2">xxx</div>', drawTag('div', {a:1, b:2}, 'xxx'));
        // 没有结束标签的标签 "meta", "link", "br", "hr" .... 
        // 随便测试，有没有统一转小写的处理。因为 html 标签名 和 属性名 是不区分大小写的。
        Assert.equalsStrictly('<area/>', drawTag("AREA"));
        Assert.equalsStrictly('<base/>', drawTag("BASE"));
        Assert.equalsStrictly('<br/>', drawTag("BR"));
        Assert.equalsStrictly('<col/>', drawTag("COL"));
        Assert.equalsStrictly('<embed/>', drawTag("EMBED"));
        Assert.equalsStrictly('<hr/>', drawTag("HR"));
        Assert.equalsStrictly('<img/>', drawTag("IMG"));
        Assert.equalsStrictly('<input/>', drawTag("INPUT"));
        Assert.equalsStrictly('<link/>', drawTag("LINK"));
        Assert.equalsStrictly('<meta/>', drawTag("META"));
        Assert.equalsStrictly('<param/>', drawTag("PARAM"));
        Assert.equalsStrictly('<source/>', drawTag("SOURCE"));
        Assert.equalsStrictly('<track/>', drawTag("TRACK"));
        Assert.equalsStrictly('<wbr/>', drawTag("WBR"));
    });
}

// =========== 导出
export{
    testDomParser, testDrawTag
}