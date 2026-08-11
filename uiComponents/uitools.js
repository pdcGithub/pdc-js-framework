/**
 * In my license, all codes can be shared free of charge. 
 * However, If my code is taken for commercial use, please maintain it yourself. 
 * I am not obligated to take responsibility for your business application.
 * Here is my email "pangdongcan@live.com"
 * 
 * Copyright © 2026 Micheal Pang. All rights reserved.
 * 
 * @file This file "uitools.js" is part of project "pdc-js-framework" , which is belong to Michael Pang (It's Me).
 * @module uiComponents/uitools
 * @author  Micheal Pang (Dongcan Pang)
 * @since  2026-07-14
 * @description  这是关于 Bootstrap 5 的 UI 绘制用到的 一些函数 和 常量的 模块。这个模块在组件内部用得多，外部用的少。
 */
"use strict"; // 这是严格模式下的 Javascript 代码

/**
 * 常量：按钮组大小 样式字符串。
 */
const BTN_GROUP_SIZE = {
    /** 小号样式 */
    small : 'btn-group-sm', 
    /** 普通样式 */
    normal:'',
    /** 大号样式 */
    big : 'btn-group-lg'
}

/**
 * 常量：按钮大小 样式字符串。
 */
const BTN_SIZE = {
    /** 小号样式 */
    small : "btn-sm",
    /** 普通样式 */
    normal : "", 
    /** 大号样式 */
    big : "btn-lg"
}

/**
 * 常量：按钮颜色 样式字符串。
 */
const BTN_COR = {
    /* 蓝 */
    primary : "primary", 
    /* 灰 */
    secondary : "secondary", 
    /* 绿 */
    success : "success", 
    /* 亮蓝 */
    info : "info", 
    /* 黄 */
    warning : "warning", 
    /* 红 */
    danger : "danger", 
    /* 浅灰 */
    light : "light", 
    /* 深灰 */
    dark : "dark",
    /* 链接。这个会改变按钮外观为一个链接 */
    link : "link"
}

/**
 * 常量：加载动画，类型字符串
 */
const LOADING_TYPE = {
    /**
     * 圆环
     */
    border: 'border',
    /**
     * 闪烁的圆点
     */
    grow: 'grow'
}

/**
 * 常量：Table 组件的可选参数的默认值
 */
const TABLE_DEFAULT_CONFIG = {
    /**
     * 表格的行是否以条纹样式显示。默认为 false ；
     */
    rowStriped : false, 
    /**
     * 表格的列是否以条纹样式显示。默认为 false ；
     */
    colStriped : false, 
    /**
     * 表格在鼠标悬停时，是否高亮显示。默认为 false ；
     */
    hover : false, 
    /**
     * 表格是否显示边框。默认为 false；
     */
    bordered : false, 
    /**
     * 表格如果显示边框，则颜色可调整（参考 BTN_COR）。默认 为空字符串 ；
     */
    borderColor : '', 
    /**
     * 表格是否完全没有边框（一般情况，行与行之间有分隔线。如果为true 则分割线都没有）。默认为 false ；
     */
    borderLess : false, 
    /**
     * 表格显示时，是否更加紧凑。默认为 false ；
     */
    moreCompact : false, 
    /**
     * 表格显示时，是否在 header 和 body 之间显示一条分割线 。默认为 false ；
     */
    groupDivider : false, 
    /**
     * 表格显示时，是否让表格内容垂直居中。 默认为 false ；
     */
    alignMiddle : false, 
    /**
     * 表格显示时，是否让表格水平自适应滚动。默认为 false ；
     */
    responsive : false,
    /**
     * 表格显示时，自适应滚动的响应大小(参考 sm,md,lg,xl,xxl)。大于这个值，将不会自适应滚动。默认为 空 字符串 ；
     */
    responsiveSize : ''
}

/**
 * 这是一个ui组件内部使用的随机函数。它可以随机出数字字符串。至于字符串的长度，大约是7-8位。
 * 如果未来有更精确的需要，可以开发其它随机函数。
 * @returns {string} 一个随机的数字字符串（大约是8位）
 */
function myRandNumStr(){
    return (Math.random()+"").substring(10);
}

/**
 * 导出公用内容
 */
export{
    BTN_GROUP_SIZE, BTN_SIZE, BTN_COR, LOADING_TYPE, TABLE_DEFAULT_CONFIG, myRandNumStr
}