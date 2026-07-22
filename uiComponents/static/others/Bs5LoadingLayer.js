/**
 * In my license, all codes can be shared free of charge. 
 * However, If my code is taken for commercial use, please maintain it yourself. 
 * I am not obligated to take responsibility for your business application.
 * Here is my email "pangdongcan@live.com"
 * 
 * Copyright © 2025 Micheal Pang. All rights reserved.
 * 
 * @file This file "Bs5LoadingLayer.js" is part of project "pdc-js-framework" , which is belong to Michael Pang (It's Me).
 * @module uiComponents/static/others/Bs5LoadingLayer
 * @author Micheal Pang (Dongcan Pang)
 * @since 2025-08-15
 * @description 这是关于 Bootstrap 5 的 UI 组件绘制用到的 加载动画 的绘制处理类。
 */
"use strict"; // 这是严格模式下的 Javascript 代码

import { Bootstrap5Object } from "../base/Bootstrap5Object.js";
import { myRandNumStr, LOADING_TYPE } from "../../uitools.js";
import { autoVnAofString, throwError } from "../../../utils/valid.js";
import { VerificationError } from "../../../models/errors.js";
import { mystdout } from "../../../utils/string.js";

/**
 * 这里是 static 静态组件的一个加载动画的绘制处理。它有2种不同的动画：border 和 grow 。
 * 
 * 当选择的类型是 border 时，代表它绘制的是一个转圈的圆环。
 * 当选择的类型是 grow 时，代表它绘制的是3个不同颜色的会闪现的圆形。
 * 
 * 在页面处理上，他是一个遮罩层，默认为隐藏。当 dynamic 组件需要时，它才会显示这个 div
 */
class Bs5LoadingLayer extends Bootstrap5Object {

    /**
     * 这里是 static 静态组件的一个加载动画的绘制处理。它有2种不同的动画：border 和 grow 。
     * 
     * 当选择的类型是 border 时，代表它绘制的是一个转圈的圆环。
     * 当选择的类型是 grow 时，代表它绘制的是3个不同颜色的会闪现的圆形。
     * 
     * 在页面处理上，他是一个遮罩层，默认为隐藏。当 dynamic 组件需要时，它才会显示这个 div
     * @param {string} id 遮罩层的 ID
     * @param {string} type 遮罩层的加载图形。默认是 'border' ，也可以修改为 'grow'。参考常量 LOADING_TYPE 。
     * 如果传入一些不是 LOADING_TYPE 的内容，则抛异常。
     * @throws 如果参数 param 校验不通过，会抛出 VerificationError 异常。
     */
    constructor(id='loadingLayer'+myRandNumStr(), type=LOADING_TYPE.border){

        // 参数校验（对于信息处理，最好加上 trim）
        let idVal = autoVnAofString(
            id, false, {className:Bs5LoadingLayer.name, methodName:'constructor', paramName:'id'}).trim();
        let typeVal = autoVnAofString(
            type, false, {className:Bs5LoadingLayer.name, methodName:'constructor', paramName:'type'}).trim();

        // 检测 type 的值，是否在指定范围内。不在的话，抛出 VerificationError 异常
        throwError(
            !Object.values(LOADING_TYPE).includes(typeVal), 
            mystdout`在 ${Bs5LoadingLayer} 的 constructor 方法中，检测到参数 type 的值不在要求的范围 ${Object.values(LOADING_TYPE)} 中`, 
            VerificationError);

        // 先拼接可用的 content 内部信息。
        // 这个加载动画，实际上就是一个 div模态层，内部包住 div动画层。
        // 所以，我们这里先拼接内容，再用 super 生成一个 div 就行了。
        let myContent = [];
        if(typeVal.toLowerCase() === LOADING_TYPE.grow){
            // 对于grow模式来说，就是 3 个会闪的东西
            myContent.push(`<div class="spinner-grow text-danger me-1" role="status"><span class="visually-hidden">Loading...</span></div>`);
            myContent.push(`<div class="spinner-grow text-warning me-1" role="status"><span class="visually-hidden">Loading...</span></div>`);
            myContent.push(`<div class="spinner-grow text-info me-1" role="status"><span class="visually-hidden">Loading...</span></div>`);
        }else{
            // 普通类型来说，就是一个转圈的东西
            myContent.push(`<div class="spinner-border" role="status"><span class="visually-hidden">Loading...</span></div>`);
        }

        //父类构造函数，初始化
        super('div', {id:idVal, type:'loading', class:'modal align-items-center justify-content-center'}, myContent);
    }
}

/**
 * 导出公用部分
 */
export {
    Bs5LoadingLayer
}