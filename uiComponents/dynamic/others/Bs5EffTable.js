/**
 * In my license, all codes can be shared free of charge. 
 * However, If my code is taken for commercial use, please maintain it yourself. 
 * I am not obligated to take responsibility for your business application.
 * Here is my email "pangdongcan@live.com"
 * 
 * Copyright © 2025 Micheal Pang. All rights reserved.
 * 
 * @file This file "Bs5EffTable.js" is part of project "pdc-js-framework" , which is belong to Michael Pang (It's Me).
 * @module uiComponents/dynamic/others/Bs5EffTable
 * @author  Micheal Pang (Dongcan Pang)
 * @since  2025-08-29
 * @description  这是这个库里面的一个 表格展示 组件。它派生自 基类 Bs5EffBaseComponent
 */
"use strict"; // 这是严格模式下的 Javascript 代码

import { validTypesByConfigs, VDATA_TYPE } from "../../../utils/valid.js";
import { isTargetObject, mergeObject, valueOfString } from "../../../utils/datatype.js";
import { myRandNumStr, TABLE_DEFAULT_CONFIG } from "../../uitools.js";
import { Bs5EffBaseComponent, PROTECTED_GET_BOOTSTRAPOBJECT, PROTECTED_GET_MYID, PROTECTED_SET_BOOTSTRAPOBJECT } from "../base/Bs5EffBaseComponent.js";
import { Bs5Table } from "../../static.js";

/**
 * 这是组件库中的一个 简易表格展示 组件。它派生自 基类 Bs5EffBaseComponent
 * 在展示上，它仅仅是一个 table 标签，或者一个套了 div 的 table 标签。
 */
class Bs5EffTable extends Bs5EffBaseComponent {

    /**
     * @property {Array<string>} #header 标题数据对象。因为 刷新时还需要比对，所以要保留在组件内部
     */
    #header ;

    /**
     * @property {Array<Bs5EffBaseComponent>} #components 组件列表。在写入页面时，先把组件ID写入 表格，然后再逐个替换。所以要保留 组件列表。
     */
    #components ; 

    /**
     * 这是组件库中的一个 简易表格展示 组件。它派生自 基类 Bs5EffBaseComponent
     * 在展示上，它仅仅是一个 table 标签，或者一个套了 div 的 table 标签。
     * 
     * @param {string} id 组件 ID ；
     * @param {Array<string>} headerInfo 表格的标题信息，一个字符串数组 ；如果某列数据需要隐藏，将字符串加一个后缀 '_hide' 即可。它会把 列名作为 tr 的属性名，数据作为 属性的值。
     * @param {Array<Array<string|Bs5EffBaseComponent>>} bodyInfo 表格的内容信息，一个二维数组。它的内容可以是字符串 也可以是 Bs5EffBaseComponent 组件对象；
     * @param {object} [options] 可选配置参数。
     * @param {boolean} [options.rowStriped] 行数据是否以条纹样式显示。默认为 false ；
     * @param {boolean} [options.colStriped] 列数据是否以条纹样式显示。默认为 false ；
     * @param {boolean} [options.hover] 表格在悬停时，是否高亮显示。默认为 false ；
     * @param {boolean} [options.bordered] 表格是否显示边框。默认为 false；
     * @param {string} [options.borderColor] 表格如果显示边框，则颜色可调整（参考 BTN_COR）。默认 为空字符串 ；
     * @param {boolean} [options.borderLess] 是否完全没有边框（一般情况，行与行之间有分隔线。如果为true 则分割线都没有）。默认为 false ；
     * @param {boolean} [options.moreCompact] 是否更加让表格显示时更加紧凑。默认为 false ；
     * @param {boolean} [options.groupDivider] 是否在 header 和 body 之间显示一条分割线 。默认为 false ；
     * @param {boolean} [options.alignMiddle] 是否让表格内容垂直居中。 默认为 false ；
     * @param {boolean} [options.responsive] 是否让表格水平自适应滚动。默认为 false ；
     * @param {string} [options.responsiveSize] 这是自适应滚动的响应大小(参考 sm,md,lg,xl,xxl)。大于这个值，将不会自适应滚动。默认为 空 字符串 ；
     * @throws 如果参数 param 校验不通过，会抛出 VerificationError 异常。
     */
    constructor(id='myTable'+myRandNumStr(), headerInfo=[], bodyInfo=[[]], options={}){

        // 参数校验（主参数）
        let mainParams = validTypesByConfigs({
            id :         {value:id, type:VDATA_TYPE.string, canBeEmpty:false},
            headerInfo : {value:headerInfo, type:VDATA_TYPE.targetObjArray, canBeEmpty:true, targetTypes:[String]},
            bodyInfo :   {value:bodyInfo,   type:VDATA_TYPE.targetObj2DArray, canBeEmpty:true, targetTypes:[String, Bs5EffBaseComponent]}, 
            options :    {value:options,    type:VDATA_TYPE.objectliteral}
        }, 'constructor', Bs5EffTable.name);

        // 可选参数的默认值处理
        let newOptions = mergeObject(TABLE_DEFAULT_CONFIG, options);

        // 参数校验（可选参数）
        let optionParams = validTypesByConfigs({
            rowStriped : { value:newOptions['rowStriped'], type:VDATA_TYPE.boolean},  // 行条纹样式 布尔值
            colStriped : { value:newOptions['colStriped'], type:VDATA_TYPE.boolean},  // 列条纹样式 布尔值
            hover : { value:newOptions['hover'], type:VDATA_TYPE.boolean},   // 鼠标悬停效果 布尔值
            bordered : { value:newOptions['bordered'], type:VDATA_TYPE.boolean},      // 表格边框 布尔值
            borderColor : { value:newOptions['borderColor'], type:VDATA_TYPE.string, canBeEmpty:true}, // 边框颜色 可空 字符串
            borderLess : { value:newOptions['borderLess'], type:VDATA_TYPE.boolean}, // 无边框 布尔值（与 边框、边框颜色、分隔线 互斥） 
            moreCompact : { value:newOptions['moreCompact'], type:VDATA_TYPE.boolean}, // 紧凑显示 布尔值
            groupDivider : { value:newOptions['groupDivider'], type:VDATA_TYPE.boolean}, // 表头和表体的 分割线 布尔值
            alignMiddle : { value:newOptions['alignMiddle'], type:VDATA_TYPE.boolean},   // 内容垂直居中 布尔值
            responsive : { value:newOptions['responsive'], type:VDATA_TYPE.boolean},     // 表格自适应水平滚动 布尔值
            responsiveSize : { value:newOptions['responsiveSize'], type:VDATA_TYPE.string, canBeEmpty:true}  // 表格自适应滚动的响应大小 可空 字符串
        }, 'constructor', Bs5EffTable.name);
        
        // 父类初始化（父类初始化后，才可以用 this 引用内部对象和函数）
        // 因为 静态组件和动态组件的配置是一样的。所以，可选配置直接传入就行了
        super(mainParams['id'], '', optionParams);
        // 内部属性初始化（这样的话，后续调用就不会出现 私有属性 不存在的问题）
        this.#components = [];
        this.#header = [];
        
        // 这里处理 body 信息中。（表格组件的表体部分，对于其它组件对象采用 先绘制id，再补充组建的方式。所以要记录body中有哪些组件）
        let strArrBodyInfo = this.#transformBodyInfo(bodyInfo);
        
        // 将内置 UI 对象改为 bootstrap5UI.js 中的 Bs5Table
        // Bs5Table 中的可选配置 和 Bs5EffTable 一样，传过去就行了。
        // 这要注意，bodyInfo 传入的是 经过转换的 字符串二维数组，而不是 原二维数组
        // 另外， Bs5Table 参数有对应的校验。如果抛了 VerificationError 要注意
        let tmp = new Bs5Table(mainParams['id'], headerInfo, strArrBodyInfo, optionParams);
        this[PROTECTED_SET_BOOTSTRAPOBJECT](tmp);

        // 表头信息处理（放这里是因为，BsTable 有校验。先校验通过再赋值，比较好）
        this.#header = headerInfo;
    }

    /**
     * (这是一个私有的函数，外部应该是不可见的) 这里是 表格的 tbody 部分内容信息转换。因为 body 中的元素可能是动态组件。
     * 所以，为了绘制和方便处理组件，都是需要先把组件转换为 component 标签。组件对象存储在内部的 #components 数组。
     * 
     * @param {Array<Array<String|Bs5EffBaseComponent>>} bodyInfo 表格的内容信息，一个二维数组。它的内容可以是字符串 也可以是 Bs5EffBaseComponent 组件对象；
     * @returns {Array<Array<String>>} 一个 纯字符串 二维数组。
     * @throws 如果参数 param 校验不通过，会抛出 VerificationError 异常。
     */
    #transformBodyInfo(bodyInfo=[[]]){
        
        // 首先是参数校验
        validTypesByConfigs({
            bodyInfo : {value:bodyInfo,   type:VDATA_TYPE.targetObj2DArray, canBeEmpty:true, targetTypes:[String, Bs5EffBaseComponent]}
        }, '#transformBodyInfo', Bs5EffTable.name);

        // 先清空组件数组。因为每次调用这个东西，代表重新绘制一次表格。原有的组件会被淘汰
        this.#components.length = 0;

        // 将bodyInfo转换为一个 纯字符串 二维数组
        return bodyInfo.map(row=>{
            return row.map(col=>{
                // 这里如果是 字符串，直接 就赋值了。
                let val = valueOfString(col);
                // 如果是 组件，则需要处理
                if(isTargetObject(col, Bs5EffBaseComponent)){
                    // 转换为标签信息
                    val = `<component id="${col[PROTECTED_GET_MYID]()}">`;
                    // 真正的组件，放入数组
                    this.#components.push(col);
                }
                // 返回
                return val;
            });
        });
    }

    /**
     * (这是一个私有的函数，外部应该是不可见的) 这里将转换之前插入的组件标记信息，把真正的组件写入页面
     */
    #writeComponent(){

        // 首先，判断是否有 组件需要替换，没有的话，就不执行了
        this.#components.forEach(cmpt=>{
            // 获取组件的唯一ID
            let myId = cmpt[PROTECTED_GET_MYID]();
            // 搜索组件
            let target = document.querySelectorAll(`component[id="${myId}"]`);
            // 搜索到的话，就处理 第一个
            if(target.length>0){
                // 如果标签存在，则替换
                let parent = target[0].parentElement;
                target[0].remove();
                cmpt.writeToPage(parent);
            }
        });
    }

    /**
     * 表格写入页面后的刷新处理，只刷新数据部分，不刷新标题。
     * 另外，关于表头和表体的数据校验，也会在这里进行。
     * 注意：如果 table 组件没有在页面上，这个函数不会执行对应的处理
     * 
     * @param {Array<Array<string|Bs5EffBaseComponent>>} newDatas 表格的内容信息，一个二维数组。它的内容可以是字符串 也可以是 Bs5EffBaseComponent ；
     * @throws 如果参数 param 校验不通过，会抛出 VerificationError 异常。
     */
    refreshTable(newDatas=[[]]){
        
        // 首先是参数校验
        validTypesByConfigs({
            newDatas : {value:newDatas,   type:VDATA_TYPE.targetObj2DArray, canBeEmpty:true, targetTypes:[String, Bs5EffBaseComponent]}
        }, 'refreshTable', Bs5EffTable.name);

        // 获取 table 组件的 ID 信息 (对于组件搜索，这是很常用的内容)
        let tableId = this[PROTECTED_GET_MYID]();

        // 先判断table是否已经插入，如果没有那就不执行
        if(document.querySelectorAll(`#${tableId}`).length<=0) return false;

        // 清理掉原有的 tbody 内容 (这里 tbody 标签还是保留的)
        let tbody = document.querySelector(`#${tableId} tbody`);
        tbody.innerHTML = '';

        // 把 newDatas 转换为 纯字符串 二维数组。以及记录新的组件数组。
        let strArrBodyDatas = this.#transformBodyInfo(newDatas);

        // 如果有内容，才进行构造分析
        if(strArrBodyDatas.length>0){
            // 这里使用的是 静态组件的处理，保持静态和动态的一致性
            // 在构造函数，我们创建了一个 静态对象 Bs5Table ，利用它的内置方法就行了。
            let newBodyStr = this[PROTECTED_GET_BOOTSTRAPOBJECT]().getBodyString(this.#header, strArrBodyDatas);
            // tbody 内容更新
            tbody.innerHTML = newBodyStr;
            // 把 component 标签，替换为组件。
            this.#writeComponent();
        }
    }

    /**
     * @override 
     * (重写父类方法，因为这里需要 额外处理 内嵌组件) 将这个组件写入到页面的对应 html 元素中。
     * 
     * @param {HTMLElement} target 页面的对应 html 元素。如果不填，默认是 document.body 对象
     */
    writeToPage(target=document.body){

        // 这些做一个参数校验。
        validTypesByConfigs({
            target: {value:target, type:VDATA_TYPE.htmlElem}
        }, 'writeToPage', Bs5EffTable.name);
        
        // 先写入页面(这里的父类是 Bs5EffBaseComponent)
        super.writeToPage(target);
        
        // 把 component 标签，替换为组件。
        this.#writeComponent();
    }

}

/**
 * 导出公用部分
 */
export {
    Bs5EffTable
}