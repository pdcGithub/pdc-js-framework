/**
 * In my license, all codes can be shared free of charge. 
 * However, If my code is taken for commercial use, please maintain it yourself. 
 * I am not obligated to take responsibility for your business application.
 * Here is my email "pangdongcan@live.com"
 * 
 * Copyright © 2026 Micheal Pang. All rights reserved.
 * 
 * @file This file "events.js" is part of project "pdc-js-framework" , which is belong to Michael Pang (It's Me).
 * @module uiComponents/event
 * @author  Micheal Pang (Dongcan Pang)
 * @since  2026-07-14
 * @description  这里是一些自定义的事件。以浏览器运行环境来说，事件处理比条件判断更加容易处理。
 * 在使用上，需要定义2个东西：事件名称、事件对象。
 */
"use strict"; // 这是严格模式下的 Javascript 代码

/**
 * 事件名：程序执行开始
 */
const PDC_BEGIN = "pdc.begin";

/**
 * 事件名：程序执行中
 */
const PDC_RUNNING = "pdc.running";

/**
 * 事件名：程序执行结束
 */
const PDC_END = "pdc.end";

/**
 * 定义一个事件：程序执行开始
 */
const EVENT_PDC_BEGIN = new Event(PDC_BEGIN, {bubbles:true, cancelable:true, composed:true});

/**
 * 定义一个事件：程序执行中
 */
const EVENT_PDC_RUNNING = new Event(PDC_RUNNING, {bubbles:true, cancelable:true, composed:true});

/**
 * 定义一个事件：程序执行完成
 */
const EVENT_PDC_END = new Event(PDC_END, {bubbles:true, cancelable:true, composed:true});

// 导出
export {
    // 事件名称
    PDC_BEGIN, PDC_RUNNING, PDC_END,
    // 事件对象
    EVENT_PDC_BEGIN, EVENT_PDC_RUNNING, EVENT_PDC_END
}