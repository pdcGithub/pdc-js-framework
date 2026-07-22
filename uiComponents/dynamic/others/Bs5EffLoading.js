/**
 * In my license, all codes can be shared free of charge. 
 * However, If my code is taken for commercial use, please maintain it yourself. 
 * I am not obligated to take responsibility for your business application.
 * Here is my email "pangdongcan@live.com"
 * 
 * Copyright © 2025 Micheal Pang. All rights reserved.
 * 
 * @file This file "Bs5EffLoading.js" is part of project "pdc-js-framework" , which is belong to Michael Pang (It's Me).
 * @module uiComponents/dynamic/others/Bs5EffLoading
 * @author Micheal Pang (Dongcan Pang)
 * @since 2025-08-28
 * @description 这是这个库里面的一个 加载动画 组件。它派生自 基类 Bs5EffBaseComponent
 */
"use strict"; // 这是严格模式下的 Javascript 代码

import { Bs5EffBaseComponent, PROTECTED_GET_MYID, PROTECTED_SET_BOOTSTRAPOBJECT } from "../base/Bs5EffBaseComponent.js";
import { Bs5LoadingLayer } from "../../static.js";
import { myRandNumStr, LOADING_TYPE } from "../../uitools.js";
import { autoVnAofString, throwError } from "../../../utils/valid.js";
import { VerificationError } from "../../../models/errors.js";
import { mystdout } from "../../../utils/string.js";

/**
 * 这里是 dynamic 动态组件的一个加载动画的操作处理。它有2种不同的动画：border 和 grow 。
 * 
 * 当选择的类型是 border 时，代表它绘制的是一个转圈的圆环。
 * 当选择的类型是 grow 时，代表它绘制的是3个不同颜色的会闪现的圆形。
 * 
 * 在页面处理上，他是一个遮罩层，默认为隐藏。当 dynamic 组件需要时，它才会显示这个 div。
 * 这个类在实现上是继承了 Bs5EffBaseComponent 类。但是，它重写了 constructor, show, hide 3个方法。
 */
class Bs5EffLoading extends Bs5EffBaseComponent {

    /**
     * 这里是 dynamic 动态组件的一个加载动画的操作处理。它有2种不同的动画：border 和 grow 。
     * 
     * 当选择的类型是 border 时，代表它绘制的是一个转圈的圆环。
     * 当选择的类型是 grow 时，代表它绘制的是3个不同颜色的会闪现的圆形。
     * 
     * 这是页面处理时，显示加载中的遮罩层。它可以预先插入页面，也可以不插入。因为在 show 方法执行时，会自动处理。
     * 虽然他继承 Bs5EffBaseComponent ，但是它只有 show 和 hide 的处理，其它操作方法，它不实现。
     * @param {string} id 遮罩层的ID。它必须是非空字符串。默认为 一个随机字符串
     * @param {string} type 遮罩层的加载图形。默认是 'border' ，也可以修改为 'grow'。参考常量 LOADING_TYPE 。
     * 如果传入一些不是 LOADING_TYPE 的内容，则抛异常。
     * @throws 如果参数 param 校验不通过，会抛出 VerificationError 异常。
     */
    constructor(id=('loading'+myRandNumStr()), type=LOADING_TYPE.border){
        
        // 参数校验（这里要校验3个东西：id，type，以及type的值是否在规定值内）
        let idVal = autoVnAofString(id, false, {className:Bs5EffLoading.name, methodName:'constructor', paramName:'id'}).trim();
        let typeVal = autoVnAofString(type, false, {className:Bs5EffLoading.name, methodName:'constructor', paramName:'type'}).trim();
        // 校验值域
        throwError(
            !Object.values(LOADING_TYPE).includes(typeVal), 
            mystdout`在 ${Bs5EffLoading} 的 constructor 方法中，检测到参数 type 的值不在要求的范围 ${Object.values(LOADING_TYPE)} 中`, 
            VerificationError);
        
        // 父类 Bs5EffBaseComponent 初始化
        // 因为子类和父类有一些嵌套关系和处理上的关系，所以先初始化父类。在得到一个 Bs5EffBaseComponent 对象后，再修改比较好。
        super(idVal);
        
        // 将内置 UI 对象改为 static.js 中的 Bs5LoadingLayer
        let tmp = new Bs5LoadingLayer(idVal, typeVal);
        this[PROTECTED_SET_BOOTSTRAPOBJECT](tmp);
    }

    /**
     * （重写父类方法）组件的显示操作
     * @override
     */
    show(){
        // 首先，判断页面上是否已经存在；如果不存在需要先插入 body 中。
        let myId = this[PROTECTED_GET_MYID]();
        let isExists = document.querySelectorAll('#'+myId).length>0;
        // 如果不存在，先插入
        if(!isExists) this.writeToPage(document.body);
        // 处理显示
        document.getElementById(myId).classList.add('d-flex');
    }

    /**
     * （重写父类方法）组件的隐藏操作
     * @override
     */
    hide(){
        // 首先，判断页面上是否已经存在；如果不存在则无需执行
        let myId = this[PROTECTED_GET_MYID]();
        let isExists = document.querySelectorAll('#'+myId).length>0;
        // 处理隐藏
        if(isExists) document.getElementById(myId).classList.remove('d-flex');
    }

}

/**
 * 导出公用部分
 */
export {
    Bs5EffLoading
}