/**
 * In my license, all codes can be shared free of charge. 
 * However, If my code is taken for commercial use, please maintain it yourself. 
 * I am not obligated to take responsibility for your business application.
 * Here is my email "pangdongcan@live.com"
 * 
 * Copyright © 2025 Micheal Pang. All rights reserved.
 * 
 * @file This file "Bs5EffBaseComponent.js" is part of project "pdc-js-framework" , which is belong to Michael Pang (It's Me).
 * @author Micheal Pang (Dongcan Pang)
 * @since 2025-08-25
 * @description 这是关于 Bootstrap 5 的 UI 动态组件库的基础类。它跟静态基础类不一样，静态基础类是一次性绘制，而动态组件是动态修改页面的信息。
 */
"use strict"; // 这是严格模式下的 Javascript 代码

// 导入外部模块
import { myRandNumStr } from "../../uitools.js";
import { Bootstrap5Object } from "../../static.js";
import * as vu from "../../../utils/valid.js";

// ======== Symbol 变量，用于定义一些 非常规的方法名。这些方法一般不会用到，也不需要用。只有扩展子类时，会用到。

/**
 * 受保护的方法：getMyId。用于获取动态组件的 ID 信息。 #myId;
 */
const PROTECTED_GET_MYID = Symbol.for('bs5_eff_protected_get_myId');
/**
 * 受保护的方法：setMyId。用于设置动态组件的 ID 信息。 #myId;
 */
const PROTECTED_SET_MYID = Symbol.for('bs5_eff_protected_set_myId');
/**
 * 受保护的方法：getMyCssClass。用于获取动态组件的 css class 样式信息。 #myCssClass;
 */
const PROTECTED_GET_MYCSSCLASS = Symbol.for('bs5_eff_protected_get_myCssClass');
/**
 * 受保护的方法：setMyCssClass。用于设置动态组件的 css class 样式信息。 #myCssClass;
 */
const PROTECTED_SET_MYCSSCLASS = Symbol.for('bs5_eff_protected_set_myCssClass');
/**
 * 受保护的方法：getMySubConfig。用于获取动态组件的 二级配置对象。#mySubConfig;
 */
const PROTECTED_GET_MYSUBCONFIG = Symbol.for('bs5_eff_projected_get_mySubConfig');
/**
 * 受保护的方法：setMySubConfig。用于设置动态组件的 二级配置对象。#mySubConfig;
 */
const PROTECTED_SET_MYSUBCONFIG = Symbol.for('bs5_eff_projected_set_mySubConfig');
/**
 * 受保护的方法：getBootstrapObject。用于获取动态组件的 静态UI对象。#bootstrapObject;
 */
const PROTECTED_GET_BOOTSTRAPOBJECT = Symbol.for('bs5_eff_protected_get_bootstrapobject');
/**
 * 受保护的方法：setBootstrapObject。用于设置动态组件的 静态UI对象。#bootstrapObject;
 */
const PROTECTED_SET_BOOTSTRAPOBJECT = Symbol.for('bs5_eff_protected_set_bootstrapobject');

/**
 * 这是一个基础的动态组件类。它是作为其它组件的父类的存在。它定义了一些规范的函数接口，以及一些通用的属性。
 * 对于派生的子类，可以在这个类的基础上，进一步开发。
 * 
 * 他有4个私有属性 #myId; #myCssClass; #mySubConfig; #bootstrapObject; 可通过 protected 的 Symbol 方法名 来进行 get 和 set 操作
 */
class Bs5EffBaseComponent {

    /**
     * 私有属性，组件ID，用于定位组件
     */
    #myId;
    /**
     * 私有属性，组件样式，用于渲染
     */
    #myCssClass;
    /**
     * 私有属性，组件的二级配置对象，用于其它处理
     */
    #mySubConfig; 
    /**
     * 私有属性，组件的内置静态 UI 组件对象。
     */
    #bootstrapObject;

    /**
     * Bs5EffBaseComponent 的构造函数。主要用于初始化 #myId、#myCssClass、#mySubConfig、#bootstrapObject 这些内置对象
     * @param {string} id 组件ID，用于定位组件。如果不填，默认会生成一个随机ID
     * @param {string} cssClass 组件样式，用于渲染。默认为 空字符串
     * @param {object} subconfig 组件的二级配置对象，用于其它扩展的处理。默认为空对象字面量 {}
     */
    constructor(id=('Bs5EffBaseComponent'+myRandNumStr()), cssClass='', subconfig={}){
        // 参数校验 + 赋值
        this.#myId = vu.autoVnAofString(
            id, false, {className:Bs5EffBaseComponent.name, methodName:'constructor', paramName:'id'});
        this.#myCssClass = vu.autoVnAofString(
            cssClass, true, {className:Bs5EffBaseComponent.name, methodName:'constructor', paramName:'cssClass'});
        this.#mySubConfig = vu.autoVnAofObjectLiteral(
            subconfig, false, {className:Bs5EffBaseComponent.name, methodName:'constructor', paramName:'subconfig'});
        // 静态 ui 组件对象
        this.#bootstrapObject = new Bootstrap5Object('div', {'id':this.#myId, 'class':this.#myCssClass});
    }

    // ====================== 关于私有属性的 getter 和 setter 处理

    [PROTECTED_GET_MYID](){
        return this.#myId;
    }

    [PROTECTED_GET_MYCSSCLASS](){
        return this.#myCssClass;
    }

    [PROTECTED_GET_MYSUBCONFIG](){
        return this.#mySubConfig;
    }

    [PROTECTED_GET_BOOTSTRAPOBJECT](){
        return this.#bootstrapObject;
    }

    [PROTECTED_SET_MYID](id){
        // 设置
        this.#myId = vu.autoVnAofString(
            id, false, {className:Bs5EffBaseComponent.name, methodName:'PROTECTED_SET_MYID', paramName:'id'});
    }

    [PROTECTED_SET_MYCSSCLASS](cssClass){
        // 设置
        this.#myCssClass = vu.autoVnAofString(
            cssClass, true, {className:Bs5EffBaseComponent.name, methodName:'PROTECTED_SET_MYCSSCLASS', paramName:'cssClass'});
    }

    [PROTECTED_SET_MYSUBCONFIG](subconfig){
        // 设置
        this.#mySubConfig = vu.autoVnAofObjectLiteral(
            subconfig, false, {className:Bs5EffBaseComponent.name, methodName:'PROTECTED_SET_MYSUBCONFIG', paramName:'subconfig'});
    }

    [PROTECTED_SET_BOOTSTRAPOBJECT](object){
        // 设置
        this.#bootstrapObject = vu.autoVnAofTargetObject(
            object, {className:Bs5EffBaseComponent.name, methodName:'PROTECTED_SET_BOOTSTRAPOBJECT', paramName:'object'}, Bootstrap5Object
        );
    }

    // ====================== 关于私有属性的 getter 和 setter 处理  =========== 结束

    /**
     * 获取这个组件的 html 字符串
     * @returns {string} 组件的 html 字符串
     */
    getHtmlString(){
        return this.#bootstrapObject.toHtmlString();
    }

    /**
     * 获取这个组件的 html dom 对象数组。
     * @returns {Array<object>} 组件的 html dom 对象数组。
     */
    getHtmlDomObjectArray(){
        return this.#bootstrapObject.toHtmlDomObject();
    }

    /**
     * 将这个组件写入到页面的对应 html 元素中。有一点要注意：document 是 Document 对象；但 document.body 是 HTMLElement
     * @param {HTMLElement} target 页面的对应 html 元素。如果不填，默认是 document.body 。
     */
    writeToPage(target=document.body){

        // 参数校验
        vu.autoVnAofHtmlElement(target, {className:Bs5EffBaseComponent.name, methodName:this.writeToPage.name, paramName:'target'});

        // 获取当前组件的 html dom 对象数组。它将写入页面
        target.append(...this.getHtmlDomObjectArray());
    }

    /**
     * 组件的显示操作
     */
    show(){
        document.getElementById(this.#myId).classList.remove('visually-hidden');
    }

    /**
     * 组件的隐藏操作
     */
    hide(){
        document.getElementById(this.#myId).classList.add('visually-hidden');
    }

    /**
     * 组件的禁用操作
     */
    disable(){
        document.getElementById(this.#myId).setAttribute('disabled','true');
    }

    /**
     * 组建的启用操作
     */
    enable(){
        document.getElementById(this.#myId).removeAttribute('disabled');
    }
}

/**
 * 导出公用部分
 */
export{
    Bs5EffBaseComponent, 

    PROTECTED_GET_MYID, PROTECTED_GET_MYCSSCLASS, PROTECTED_GET_MYSUBCONFIG, PROTECTED_GET_BOOTSTRAPOBJECT,
    PROTECTED_SET_MYID, PROTECTED_SET_MYCSSCLASS, PROTECTED_SET_MYSUBCONFIG, PROTECTED_SET_BOOTSTRAPOBJECT
}