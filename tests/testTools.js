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

    // 首先，查找 id 是 result 的标签
    let resultDiv = document.getElementById('result');
    
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
            console.error(`发现一个测试函数异常 ${func.name}`, "==",err.name, "==", err);
            funcErrorCount += 1;
            // 记录失败的函数名
            failArr.push(func.name);
        }finally{
            funcCount += 1;
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
     * 判断两个值，是否相等
     * @param {*} expectedValue 期望值
     * @param {*} actualValue 实际值
     */
    static equals(expectedValue, actualValue) {
        let errMsg = `函数 ${this.equals.name} 监测出异常 expected=${expectedValue}, 但是 actual=${actualValue}`;
        if(!(expectedValue==actualValue)) throw new AssertError(errMsg);
    }

    /**
     * 判断两个值，是否严格相等。这里的判断不是 "==" 是 "==="
     * @param {*} expectedValue 期望值
     * @param {*} actualValue 实际值
     */
    static equalsStrictly(expectedValue, actualValue){
        let errMsg = `函数 ${this.equalsStrictly.name} 监测出异常 expected=${expectedValue}, 但是 actual=${actualValue}`;
        if(!(expectedValue===actualValue)) throw new AssertError(errMsg);
    }

    /**
     * 判断参数传入的函数，是否有抛出 errorClasses 指定的一些异常类
     * @param {Function} func 这是一个待执行的无参函数
     * @param  {...Error} errorClasses 这是一个不定参数，内容是异常类。即Error类或者它的子类
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
        if(!isExist) throw new AssertError(`函数 ${this.throwsErrors.name} 检测到异常抛出 ${errOfFunc.name}，但是没有在指定的异常类名单内。${errorClasses.join(',')}`);
    }

    /**
     * 判断传入的函数，执行时会否不抛出异常。
     * @param {Function} func 这是一个待执行的无参函数
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