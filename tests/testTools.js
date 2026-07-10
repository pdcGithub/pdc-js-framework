/**
 * In my license, all codes can be shared free of charge. 
 * However, If my code is taken for commercial use, please maintain it yourself. 
 * I am not obligated to take responsibility for your business application.
 * Here is my email "pangdongcan@live.com"
 * 
 * Copyright © 2026 Micheal Pang. All rights reserved.
 * 
 * @file This file "testTools.js" is part of project "pdc-js-framework" , which is belong to Michael Pang (It's Me).
 * @author  Micheal Pang (Dongcan Pang)
 * @since  2026-06-03
 * @description  这里是一个进行测试时用到的工具集合。这里的工具和外部的 utils 中的有所区分。
 */
"use strict"; // 这是严格模式下的 Javascript 代码

// 导入一些工具
// ==> myToString 函数用于数据转字符串处理。因为直接输出有可能因为类型转换，导致报错
import { myToString } from "../utils/string.js";

/**
 * 创建一个处理 dom 的对象。这个对象浏览器才有，NodeJS 中是没有的。
 */
const domParser = new DOMParser();

/**
 * 这是一个把字符串转换为 Node 对象数组的一个处理函数。
 * @param {String} htmlText html 字符串
 * @returns {ChildNode[]} 一个能放入 html 标签对象中的 Node 数组
 */
function convertStringToHtmlNodes(htmlText){
    
    // 先通过 domParser 转为 dom 对象
    let tempDom = domParser.parseFromString(htmlText, 'text/html');
    
    // 将临时 dom 对象的 body 中的内容（NodeList 或者 HtmlCollection）取出，并转换为有效的数组
    let tmpArr = Array.from(tempDom.body.childNodes).map(value=>{
        if(value instanceof Text){
            return new Text(value.wholeText.replaceAll('\n', ''));
        }else{
            return value;
        }
    });
    
    // 返回处理好的数组
    return tmpArr;
}

/**
 * 这是一个汇报函数，用于汇报这些测试的程序是否异常
 * @param {String} moduleInfo 这是模块的信息，一般填写模块名或者路径
 * @param  {...Function} funcs 这是要执行的测试函数名，可以多个，以逗号分隔开
 */
function report(moduleInfo, ...funcs) {

    console.log(new Date(), '===', `report === 开始测试 ${moduleInfo} ===`);

    // 首先，查找 id 是 result 的标签
    let resultDiv = document.getElementById('result');

    // 如果页面没有 id 为 result 的 div 标签。则直接插入一个
    if(resultDiv===undefined || resultDiv===null) {
        // 插入一个 id 为 result 的标签
        document.body.append(...convertStringToHtmlNodes('<div id="result" desc="inserted by function report."></div>'));
        // 重新赋值
        resultDiv = document.getElementById('result');
    }
    
    // 构建一个 hr 标签
    resultDiv.append(...convertStringToHtmlNodes('<hr/>'));
    // 添加一个关于模块的描述信息
    resultDiv.append(...convertStringToHtmlNodes(`<div>这里测试的模块是&nbsp;&nbsp;${moduleInfo}&nbsp;&nbsp;</div>`));

    // 这里统计一下执行结果
    let funcCount = 0;    // 测试函数计数
    let successCount = 0; // 测试成功数
    let failCount = 0;    // 测试失败数
    let funcErrorCount = 0;    // 测试函数异常计数（这里指的是 测试函数 抛异常的情况）

    // 这里记录执行失败、异常的函数名单
    let failArr = [];

    // 开始循环遍历，把测试函数都执行一次。
    funcs.forEach(func=>{
        // 这里执行程序
        try{
            // 这个测试函数，可以返回 true，也可以不返回值。不返回值的话，就是 undefined 了。
            let boolResult = func();
            if(boolResult===true || boolResult===undefined) {
                successCount += 1;
            }else{
                failCount += 1;
                // 记录失败的函数名
                failArr.push(func.name);
            }
        }catch(err){
            console.error(`发现一个测试函数异常 ${myToString(func)}`, "==",err.name, "==", err);
            funcErrorCount += 1;
            // 记录失败的函数名
            failArr.push(func.name);
        }finally{
            funcCount += 1;
            // 增加一个关于执行的函数信息输出
            console.log(new Date(), '===', `report === 执行了函数 ===> ${func.name?func.name:func.toString()}`);
        }
    });

    // 最后汇总信息，并写入页面
    resultDiv.append(...convertStringToHtmlNodes(`
    <div>
        <span>一共执行了&nbsp;&nbsp;${funcCount}&nbsp;&nbsp;个测试函数</span>，其中
        <span style="color:green;">成功&nbsp;&nbsp;${successCount}个&nbsp;&nbsp;</span>，
        <span style="color:red;">失败&nbsp;&nbsp;${failCount}&nbsp;&nbsp;个</span>，
        <span style="color:purple;">异常&nbsp;&nbsp;${funcErrorCount}&nbsp;&nbsp;个</span>
    </div>`));

    // 如果有失败、异常信息，还需要输出函数名
    if(failCount + funcErrorCount>=1){
        resultDiv.append(...convertStringToHtmlNodes(`<div>发现有异常的函数是：${failArr.join('&nbsp;,&nbsp;')}</div>`));
    }

}

/**
 * 比较2个 Map 对象的值，是否相等。这个值指的是 key 和 value 2个方面。
 * 如果 map1 或者 map2 不是 Map 对象，直接返回 false 。如果 map1 和 map2 是空 Map ，直接 true 。
 * 对于 value 比较，更多是一个 "===" 操作
 * @param {Map} map1 待匹配的 Map 对象 1
 * @param {Map} map2 待匹配的 Map 对象 2
 * @returns {boolean} 如果 2 个待匹配的 Map 对象，key 和 value 均一致，则返回 true ；否则，返回 false
 */
function isMapEquals(map1, map2) {
    
    // 定义一个返回值
    let result = true;

    // 首先判断是否为 Map 对象，不是的话 false
    if(!(map1 instanceof Map && map2 instanceof Map)){
        result = false;
        return result;
    }

    // 判断 map1 和 map2 的 键值对数量是否匹配。不匹配的话，false
    if(map1.size !== map2.size) {
        result = false;
        return result;
    }

    // 获取 map 的 keys，并转为数组
    let myKeys = Array.from(map1.keys());
    // 开始匹配 value 内容
    for(let i=0;i<myKeys.length;i++){
        // 获取 map1 的 临时 key  和 value
        let tmpK1 = myKeys[i];
        let tmpV1 = map1.get(tmpK1);
        // 先看看 map2 有没有这个key。没有这个 key 就 false
        if(!map2.has(tmpK1)){
            result = false;
            break;
        }
        // 有的话，再比对 value 是否相等。不等 就 false
        let tmpV2 = map2.get(tmpK1);
        if(tmpV2!==tmpV1){
            result = false;
            break;
        }
    }

    // 返回结果 
    return result;
}

/**
 * 比较2个 object 对象的值，是否相等。这个值指的是 key 和 value 2个方面。
 * 如果 object1 或者 object2 不是 object 对象，直接返回 false 。如果 object1 和 object2 是空 object（没有键值对） ，直接 true 。
 * 对于 value 比较，更多是一个 "===" 操作。这里不做递归判断
 * @param {Object} object1 待匹配的 object 对象 1
 * @param {Object} object2 待匹配的 object 对象 2
 * @returns {boolean} 如果 2 个待匹配的 object 对象，key 和 value 均一致，则返回 true ；否则，返回 false
 */
function isObjectEquals(obj1, obj2) {
    
    // 定义一个返回值
    let result = true;

    // 首先判断是否为 object 对象，不是的话 false
    if(!(typeof obj1 === 'object' && typeof obj2 === 'object')){
        result = false;
        return result;
    }

    // 判断 obj1 和 obj2 的 键值对数量是否匹配。不匹配的话，false
    if(Object.keys(obj1).length !== Object.keys(obj2).length) {
        result = false;
        return result;
    }

    // 获取 obj1 的 keys，并转为数组
    let myKeys = Object.keys(obj1);
    // 开始匹配 value 内容
    for(let i=0;i<myKeys.length;i++){
        // 获取 obj1 的 临时 key  和 value
        let tmpK1 = myKeys[i];
        let tmpV1 = obj1[tmpK1];
        // 先看看 obj2 有没有这个key。没有这个 key 就 false
        if(!obj2.hasOwnProperty(tmpK1)){
            result = false;
            break;
        }
        // 有的话，再比对 value 是否相等。不等 就 false。（对于嵌套对象，暂时没有办法明确判断出值是否相等）
        let tmpV2 = obj2[tmpK1]
        if(tmpV2!==tmpV1){
            result = false;
            break;
        }
    }

    // 返回结果 
    return result;
}

/**
 * 这里是一个断言异常，一般用于表示断言判断失败。当预测值 和 实际值 不吻合，则抛出 断言异常。
 */
class AssertError extends Error {
    /**
     * 这里创建一个 AssertError 对象。它需要一个“描述信息”作为入参
     * @param {String} message 一个描述信息字符串
     */
    constructor(message){
        super(message);
        this.name = AssertError.name;
    }
}

/**
 * 这是一个断言静态类，程序测试用。它内部都是一些静态方法。
 */
class Assert {

    /**
     * 这个构造函数，用于避免类被 new 初始化
     * @throws 这是一个不能初始化的类，如果 new 创建实例，则抛异常 AssertError 。
     */
    constructor(){
        if(new.target === Assert) throw new AssertError(`Assert 工具类不能通过 new 初始化，它是静态的`);
    }

    /**
     * 判断两个值，是否相等
     * @param {*} expectedValue 期望值
     * @param {*} actualValue 实际值
     * @throws 如果2值不等，抛出 AssertError 异常。
     */
    static equals(expectedValue, actualValue) {
        let errMsg = `函数 ${this.equals.name} 监测出异常 expected=${myToString(expectedValue)}, 但是 actual=${myToString(actualValue)}`;
        if(!(expectedValue==actualValue)) throw new AssertError(errMsg);
    }

    /**
     * 判断两个值，是否严格相等。这里的判断不是 "==" 是 "==="
     * @param {*} expectedValue 期望值
     * @param {*} actualValue 实际值
     * @throws 如果2值不等，抛出 AssertError 异常。
     */
    static equalsStrictly(expectedValue, actualValue){
        let errMsg = `函数 ${this.equalsStrictly.name} 监测出异常 expected=${myToString(expectedValue)}, 但是 actual=${myToString(actualValue)}`;
        if(!(expectedValue===actualValue)) throw new AssertError(errMsg);
    }

    /**
     * 判断2个Map的内部值，是否相等。这里对比的核心是 Map 对象的内部 key 和 value 是否相等。不等的话，抛 AssertError 异常。
     * 如果 Map 对象内部没有元素，那就直接 相等。
     * 如果 Map 对象内部有任何一个 key 和 value 不相等，则不相等。抛 AssertError 异常。
     * 如果 2个待处理值，不是 Map 对象，则直接抛 AssertError 异常。
     * @param {Map} expectedMap 期望值
     * @param {Map} actualMap 实际值
     * @throws 如果2值不等、参数类型不对，抛出 AssertError 异常。
     */
    static mapEquals(expectedMap, actualMap) {
        let errMsg = `函数 ${this.mapEquals.name} 监测出异常 expectedMap=${myToString(expectedMap)}, 但是 actualMap=${myToString(actualMap)}`;
        if(!isMapEquals(expectedMap, actualMap)) {
            // 如果不等于，那需要打印出不等的双方，然后再console比对
            console.log(new Date(), "2个Map对象不相等", expectedMap, actualMap);
            throw new AssertError(errMsg);
        }
    }

    /**
     * 判断2个object的内部值，是否相等。这里对比的核心是 object 对象的内部 key 和 value 是否相等。不等的话，抛 AssertError 异常。
     * 如果 object 对象内部没有元素，那就直接 相等。
     * 如果 object 对象内部有任何一个 key 和 value 不相等，则不相等。抛 AssertError 异常。
     * 如果 2个待处理值，不是 object 对象，则直接抛 AssertError 异常。
     * @param {object} expectedObject 期望值
     * @param {object} actualObject 实际值
     * @throws 如果2值不等、参数类型不对，抛出 AssertError 异常。
     */
    static objectEquals(expectedObject, actualObject) {
        let errMsg = `函数 ${this.objectEquals.name} 监测出异常 expectedObject=${myToString(expectedObject)}, 但是 actualObject=${myToString(actualObject)}`;
        if(!isObjectEquals(expectedObject, actualObject)) {
            // 如果不等于，那需要打印出不等的双方，然后再console比对
            console.log(new Date(), "2个Object对象不相等", expectedObject, actualObject);
            throw new AssertError(errMsg);
        }
    }

    /**
     * 判断参数传入的函数，是否有抛出 errorClasses 指定的一些异常类
     * @param {Function} func 这是一个待执行的无参函数
     * @param  {...Error} errorClasses 这是一个不定参数，内容是异常类。即Error类或者它的子类
     * @returns {Error} 如果执行成功，抛出指定异常，则返回这个异常对象 errOfFunc
     * @throws 如参数类型不对，或者指定的函数没有抛异常、没有抛出指定异常；抛出 AssertError 异常。
     */
    static throwsErrors(func, ...errorClasses) {
        // 首先，判断参数对不对
        if(typeof func !== 'function') throw new AssertError(`函数 ${this.throwsErrors.name} 参数 func 不是一个可执行函数。`);
        if(errorClasses.length<=0) throw new AssertError(`函数 ${this.throwsErrors.name} 参数 errors 没有传入`);
        
        // 执行 func 函数，并检测抛出的类是否存在于 errorClasses 中
        let errOfFunc = undefined;
        try{
            func();
        }catch(err){
            errOfFunc = err;
        }
        // 对于这个程序，不抛异常，或者抛了一些非指定的异常，都是错的。
        if(errOfFunc===undefined) throw new AssertError(`函数 ${this.throwsErrors.name} 没有检测到任何的异常被抛出。`);
        // 
        let isExist = false;
        for(let i=0;i<errorClasses.length;i++){
            // 如果当前异常，符合传入的异常类数组，则跳出循环
            if(errOfFunc instanceof errorClasses[i]) {
                isExist=true; 
                break;
            }
        }
        // 如果没有符合的异常类
        if(!isExist) throw new AssertError(
            `函数 ${this.throwsErrors.name} 检测到异常抛出 ${errOfFunc.name}，但是没有在指定的异常类名单内。${myToString(errorClasses)}`
        );

        // 如果有异常，则返回这个异常，方便其它程序处理
        return errOfFunc;
    }

    /**
     * 判断参数传入的函数，是否有抛出 errorClasses 指定的一些异常类。在 throwsErrors 基础上，增加对异常消息的校验。
     * 这个函数的作用是，当你抛出了一些同类型异常，那就需要判断 message 内容，是否为你想要的。
     * @param {Function} func 这是一个待执行的无参函数
     * @param {RegExp} messageRegexp 用于异常信息校验的正则对象 或者 正则表达式
     * @param  {...Error} errorClasses errorClasses 这是一个不定参数，内容是异常类。即Error类或者它的子类
     * @throws 如参数类型不对、指定的函数没有抛异常、没有抛出指定异常、异常信息不匹配；抛出 AssertError 异常。
     */
    static throwsErrorsWithMsg(func, messageRegexp, ...errorClasses){

        // 检验 messageRegexp 是否为正则表达式 或者 正则对象
        if(!(messageRegexp instanceof RegExp)) {
            throw new AssertError(
                `函数 ${this.throwsErrorsWithMsg.name} 的参数 messageRegexp=${myToString(messageRegexp)} 不是正则对象或者表达式。`
            );
        }

        // 先执行一次，看看是否有异常
        // 如参数类型不对，或者指定的函数没有抛异常、没有抛出指定异常；抛出 AssertError 异常。
        // 如果执行成功，抛出指定异常，则返回这个异常对象 errOfFunc
        let errOfFunc = undefined ;
        try{
            errOfFunc = this.throwsErrors(func, ...errorClasses);
        }catch(myError){
            // 如果捕捉到异常，那说明 throwsErrors 函数检验不通过。抛出到外部即可。
            throw myError;
        }
        
        // 这里应该有结果的。因为如果 errOfFunc 如果没有，在 throwsErrors 已经处理了。
        if(errOfFunc!==undefined){
            let message = errOfFunc.message ? errOfFunc.message.trim() : '';
            if(!messageRegexp.test(message)) {
                throw new AssertError(
                    `函数 ${this.throwsErrorsWithMsg.name} 检测到的异常信息不符合预期。 regexp=${messageRegexp} msg=${message}`
                );
            }
        }else{
            throw new AssertError(`函数 ${this.throwsErrorsWithMsg.name} 没有检测到任何的异常被抛出。`);
        }
    }

    /**
     * 判断传入的函数，执行时会否不抛出异常。
     * @param {Function} func 这是一个待执行的无参函数
     * @throws 如果参数类型不对，或者指定的函数执行时抛异常；抛出 AssertError 异常。
     */
    static throwsErrorsNone(func) {
        
        // 首先，判断参数对不对
        if(typeof func !== 'function') throw new AssertError(`函数 ${this.throwsErrorsNone.name} 参数 func 不是一个可执行函数。`);
        
        // 判断抛出异常的情况
        let errOfFunc = undefined;
        try{
            func();
        }catch(err){
            errOfFunc = err;
        }

        // 如果有抛异常，则抛出 断言异常。因为这里是不允许抛异常的。
        if(errOfFunc!==undefined) {
            throw new AssertError(`函数 ${this.throwsErrorsNone.name} 函数 func=${func.name} 执行时发生异常。${errOfFunc.name+"="+errOfFunc.message}`);
        }
    }

}

/**
 * 导出的内容
 */
export {
    report, Assert, AssertError
}