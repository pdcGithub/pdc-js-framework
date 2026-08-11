/**
 * In my license, all codes can be shared free of charge. 
 * However, If my code is taken for commercial use, please maintain it yourself. 
 * I am not obligated to take responsibility for your business application.
 * Here is my email "pangdongcan@live.com"
 * 
 * Copyright © 2025 Micheal Pang. All rights reserved.
 * 
 * @file This file "Bs5Table.js" is part of project "pdc-js-framework" , which is belong to Michael Pang (It's Me).
 * @module uiComponents/static/others/Bs5Table
 * @author Micheal Pang (Dongcan Pang)
 * @since 2025-08-15
 * @description  这是关于 Bootstrap 5 的 UI 组件绘制用到的 表格 的绘制处理类。
 */
"use strict"; // 这是严格模式下的 Javascript 代码

import { VerificationError } from "../../../models/errors.js";
import { validTypesByConfigs, VDATA_TYPE, throwError } from "../../../utils/valid.js";
import { isEmpty2DArray, isString, isTargetObject, mergeObject, valueOfString } from "../../../utils/datatype.js";
import { myRandNumStr, TABLE_DEFAULT_CONFIG } from "../../uitools.js";
import { Bootstrap5Object } from "../base/Bootstrap5Object.js";
import { mystdout } from "../../../utils/string.js";

/**
 * 这里是 static 静态组件的一个表格的绘制处理。它有多种不同的配置，具体可参考构造函数中的 options 配置。
 * 在页面处理上，他是一个完整的 table 标签。在显示样式上，它有较多的参数处理。
 */
class Bs5Table extends Bootstrap5Object {

    /**
     * 私有属性：二级配置参数。它是这个 Bs5Table 类的可选配置。
     * 一般来说，在参数校验完毕后，才会生成这个内容。至于它的键和值，参考 TABLE_DEFAULT_CONFIG 常量。
     */
    #subConfig ;

    /**
     * 这里是 static 静态组件的一个表格的绘制处理。它有多种不同的配置，具体可参考构造函数中的 options 配置。
     * 在页面处理上，他是一个完整的 table 标签。在显示样式上，它有较多的参数处理。
     * @param {string} id 组件 ID ；非空字符串。默认为 随机字符串
     * @param {Array<string>} headerInfo 表格的标题信息，一个字符串数组 ；如果某列数据需要隐藏，将字符串加一个后缀 '_hide' 即可。它会把 列名作为 tr 的属性名，数据作为 属性的值。默认：空一维数组。
     * @param {Array<Array<string|Bootstrap5Object>>} bodyInfo 表格的内容信息，一个二维数组。它的内容可以是字符串 也可以是 Bootstrap5Object ；默认：空2维数组。
     * @param {object} [options] 可选配置参数。它有一些可选配置，但是在程序内部，会校验最后合并的对象，是否有完整的参数。
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
    constructor(id='bs5Table'+myRandNumStr(), headerInfo=[], bodyInfo=[[]], options={}){

        // =========== 首先校验 固定参数（id，headerInfo，bodyInfo，options）
        let mainParams = validTypesByConfigs({
            // id 非空字符串
            id : {value:id, type:VDATA_TYPE.string, canBeEmpty:false},
            // headerInfo 可空的数组，内容为字符串
            headerInfo : {value:headerInfo, type:VDATA_TYPE.targetObjArray, canBeEmpty:true, targetTypes:[String]},
            // bodyInfo 可空的二维数组，内容为字符串 或者 Bootstrap5Object 对象
            bodyInfo : {value:bodyInfo, type:VDATA_TYPE.targetObj2DArray, canBeEmpty:true, targetTypes:[String, Bootstrap5Object]},
            // options 对象字面量，不可为 undefined 
            options : {value:options, type:VDATA_TYPE.objectliteral, canBeEmpty:false}
        }, 'constructor', Bs5Table.name);

        // =========== 再然后，用默认值，合并可选参数，保证需要的参数都有值
        let newOptions = mergeObject(TABLE_DEFAULT_CONFIG, mainParams['options']);
        
        // =========== 最后，校验 newOptions 中的可选参数。因为已经合并和默认值，所以每个参数都应该存在，而不是 undefined
        let subParams = validTypesByConfigs({
            // 行条纹样式 布尔值
            rowStriped : { value:newOptions['rowStriped'], type:VDATA_TYPE.boolean},
            // 列条纹样式 布尔值
            colStriped : { value:newOptions['colStriped'], type:VDATA_TYPE.boolean},
            // 鼠标悬停效果 布尔值
            hover : { value:newOptions['hover'], type:VDATA_TYPE.boolean},
            // 表格边框 布尔值
            bordered : { value:newOptions['bordered'], type:VDATA_TYPE.boolean},
            // 边框颜色 可空 字符串
            borderColor : { value:newOptions['borderColor'], type:VDATA_TYPE.string, canBeEmpty:true},
            // 无边框 布尔值（与 边框、边框颜色、分隔线 互斥） 
            borderLess : { value:newOptions['borderLess'], type:VDATA_TYPE.boolean},
            // 紧凑显示 布尔值
            moreCompact : { value:newOptions['moreCompact'], type:VDATA_TYPE.boolean},
            // 表头和表体的 分割线 布尔值
            groupDivider : { value:newOptions['groupDivider'], type:VDATA_TYPE.boolean},
            // 内容垂直居中 布尔值
            alignMiddle : { value:newOptions['alignMiddle'], type:VDATA_TYPE.boolean}, 
            // 表格自适应水平滚动 布尔值
            responsive : { value:newOptions['responsive'], type:VDATA_TYPE.boolean}, 
            // 表格自适应滚动的响应大小 可空 字符串
            responsiveSize : { value:newOptions['responsiveSize'], type:VDATA_TYPE.string, canBeEmpty:true} 
        }, 'constructor', Bs5Table.name);

        // =========== 处理字符型参数的前后空白字符。
        mainParams['id'] = mainParams['id'].trim();
        subParams['borderColor'] = subParams['borderColor'].trim();
        subParams['responsiveSize'] = subParams['responsiveSize'].trim();

        // =========== 调用父类 Bootstrap5Object 构建一个 table 标签 (对于一些对象内部的私有内容，要创建后才能设置)
        super('table', {id:mainParams['id'], class:'table'});

        // 把可选的二级配置，放入对象内部。
        this.#subConfig = subParams ;

        // 生成表格标题信息，并写入 table 
        this.addContentElements(this.getHeaderString(headerInfo));
        // 生成表格数据信息，并写入 table
        this.addContentElements(this.getBodyString(headerInfo, bodyInfo));

        // 处理可配置项(groupDivider 在 tbody 上)
        if(this.#subConfig['rowStriped']) this.addCssClass('table-striped');
        if(this.#subConfig['colStriped']) this.addCssClass('table-striped-columns');
        if(this.#subConfig['hover']) this.addCssClass('table-hover');
        if(this.#subConfig['moreCompact']) this.addCssClass('table-sm');
        if(this.#subConfig['borderLess']){
            this.addCssClass('table-borderless');
        }else{
            if(this.#subConfig['bordered']) this.addCssClass('table-bordered');
            if(this.#subConfig['borderColor'].length>0) this.addCssClass(`border-${this.#subConfig['borderColor']}`);
        }
        if(this.#subConfig['alignMiddle']) this.addCssClass('align-middle');
    }

    /**
     * 这个是 thead 标签的构建处理。它构建完成后，会返回 thead 标签的字符串信息。
     * @param {Array<String>} header 表格的标题信息字符串数组。如果有列需要隐藏，则在字符串加一个 '_hide' 后缀。默认，空一维数组。
     * @returns 构造完毕，返回 thead 标签字符串信息。
     * @throws 如果参数 header 不符合参数定义，抛出 VerificationError 。
     */
    getHeaderString(header=[]){

        // 首先，校验 header 是不是一个一维数组，且内容是字符串。
        // 通过校验后，这里是对象引用传递，所以用原参数名即可
        validTypesByConfigs({
            header : { value:header, type:VDATA_TYPE.targetObjArray, canBeEmpty:true, targetTypes:[String] }
        }, 'getHeaderString', Bs5Table.name);

        // 开始构建 thead 内容
        let thead = new Bootstrap5Object('thead');
        let tr = new Bootstrap5Object('tr');
        for(let i=0;i<header.length;i++){
            // 标题 第一个列，自动拼一个 # 号
            if(i===0) tr.addContentElements('<th>#</th>');
            // 如果没有 _hide 后缀 才写入表格
            if(!header[i].endsWith('_hide')) tr.addContentElements(`<th>${header[i]}</th>`);
        }
        thead.addContentElements(tr);

        // 返回字符串
        return thead.toHtmlString();
    }

    /**
     * 这个是 tbody 标签的构建处理。它构建完成后，会返回 tbody 标签的字符串信息（隐藏的列，会生成到 tr 标签的属性上）。
     * 注意：这里的 headerInfo 必须是和 `getHeaderString` 方法一致。否则，构建出来的内容可能没法组成一个 table 
     * @param {Array<String>} headerInfo 表格的标题信息字符串数组。如果有列需要隐藏，则在字符串加一个 '_hide' 后缀。默认，空一维数组。
     * @param {Array<Array<String|Bootstrap5Object>>} bodyInfo 表格的数据二维数组。在处理时，会根据 headerInfo 的后缀，来决定生成到哪里。默认空2维数组
     * @returns 构造完毕，返回 tbody 标签字符串信息。
     * @throws 如果参数 headerInfo 或者 bodyInfo 不符合参数定义，抛出 VerificationError 。
     */
    getBodyString(headerInfo=[], bodyInfo=[[]]){

        // 首先校验 header、body 参数
        // 通过校验后，这里是对象引用传递，所以用原参数名即可
        validTypesByConfigs({
            headerInfo : { value:headerInfo, type:VDATA_TYPE.targetObjArray, canBeEmpty:true, targetTypes:[String] },
            bodyInfo   : { value:bodyInfo, type:VDATA_TYPE.targetObj2DArray, canBeEmpty:true, targetTypes:[String, Bootstrap5Object]}
        }, 'getBodyString', Bs5Table.name);

        // 然后，比对 headerInfo 和 bodyInfo 长度是否匹配。
        // 这里有个前提，body 不是空二维数组才校对。因为表格是可以 只有标题，而没有内容的。但是，有内容则必须与标题长度一致。
        let hLen = headerInfo.length; // header 长度
        let bLenArr = bodyInfo.map(arr=>arr.length); // body 每行的长度 数组
        throwError(
            !isEmpty2DArray(bodyInfo) && bLenArr.filter(len=>len!==hLen).length>0,
            mystdout`在 ${Bs5Table.name} - getBodyString 中，参数 headerInfo 长度=${hLen} 和 bodyInfo 行长度 不一致。bodyInfo 行长度数组=${bLenArr} 。`,
            VerificationError
        );

        // 这是 数据部分 tbody 标签信息。
        let tbody = new Bootstrap5Object('tbody');

        // groupDivider 处理在 tbody 上 ，不在 table 上。
        // 并且 分隔线 和 borderLess 处理互斥
        if(!this.#subConfig['borderLess'] && this.#subConfig['groupDivider']) tbody.addCssClass('table-group-divider');

        // 根据 body 二维数组循环构建
        for(let j=0;j<bodyInfo.length;j++){

            /// 行循环，构建的是 tr 标签
            let tmpTr = new Bootstrap5Object('tr');

            for(let x=0;x<bodyInfo[j].length;x++){

                // 数据第一个列，自动拼接一个序号
                if(x===0) tmpTr.addContentElements(`<td><strong>${j+1}</strong></td>`);

                // 这里要处理隐藏的内容：
                if(headerInfo[x].endsWith('_hide')){
                    // 隐藏列，写入 tr 作为属性；
                    tmpTr.addAttribute(headerInfo[x].substring(0, headerInfo[x].lastIndexOf('_')), bodyInfo[j][x]);
                }else{
                    // 非隐藏列，写入 td 
                    let tmpTd = new Bootstrap5Object('td');
                    let tmpContent = mystdout`${bodyInfo[j][x]}`;
                    if(isString(bodyInfo[j][x])) tmpContent = valueOfString(bodyInfo[j][x]);
                    if(isTargetObject(bodyInfo[j][x], Bootstrap5Object)) tmpContent = bodyInfo[j][x].toHtmlString();

                    // 将值写入 td
                    tmpTd.addContentElements(tmpContent);
                    // 将 td 写入 tr
                    tmpTr.addContentElements(tmpTd);
                }
            }

            tbody.addContentElements(tmpTr);
        }

        // 把 tbody 输出为 标签字符串
        return tbody.toHtmlString();
    }

    /**
     * @override 重写输出，因为有个 responsive 层要添加。
     * @returns {string} Html 标签信息的字符串
     */
    toHtmlString(){

        // 这里，我们需要从 subConfig 中取出保存的 responsive 信息。根据信息来判断 响应层的处理。
        let responsive = this.#subConfig['responsive']; // 是否启用，布尔值
        let responsiveSize = this.#subConfig['responsiveSize']; // 大小尺寸， 可空字符串。
        // 
        if(responsive){
            let ffix = responsiveSize.length>0?`-${responsiveSize}`:'';
            let div = new Bootstrap5Object('div', {class:`table-responsive${ffix}`});
            div.addContentElements(super.toHtmlString());
            return div.toHtmlString();
        }else{
            // 不需要 responsive 的话，直接用基础的 toHtmlString 输出就行了。
            return super.toHtmlString();
        }
    }
}

/**
 * 导出公用部分
 */
export {
    Bs5Table
}