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
            let boolResult = func();
            if(boolResult) {
                successCount += 1;
            }else{
                failCount += 1;
                // 记录失败的函数名
                failArr.push(func.name);
            }
        }catch(err){
            console.error(`发现一个测试函数异常 ${func.name}`, err.name, err);
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
 * 导出的内容
 */
export {
    report
}