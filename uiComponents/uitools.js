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
    BTN_GROUP_SIZE, BTN_SIZE, BTN_COR, myRandNumStr
}