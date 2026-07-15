/**
 * In my license, all codes can be shared free of charge. 
 * However, If my code is taken for commercial use, please maintain it yourself. 
 * I am not obligated to take responsibility for your business application.
 * Here is my email "pangdongcan@live.com"
 * 
 * Copyright © 2026 Micheal Pang. All rights reserved.
 * 
 * @file This file "testEvent.js" is part of project "pdc-js-framework" , which is belong to Michael Pang (It's Me).
 * @author  Micheal Pang (Dongcan Pang)
 * @since  2026-07-14
 * @description  这里是 UI Components 组件的 event 模块测试
 */
"use strict"; // 这是严格模式下的 Javascript 代码

import { DOM_PARSER } from "../../utils/html.js";
import { Assert } from "../testTools.js";
import {
    PDC_BEGIN, PDC_RUNNING, PDC_END, 
    EVENT_PDC_BEGIN, EVENT_PDC_RUNNING, EVENT_PDC_END 
} from "../../uiComponents/events.js";

function testEventName(){
    // 这里对事件名称的值进行测试
    Assert.equalsStrictly("pdc.begin", PDC_BEGIN);
    Assert.equalsStrictly("pdc.running", PDC_RUNNING);
    Assert.equalsStrictly("pdc.end", PDC_END);
}

function testEventObject(){
    // 这里测试事件的传播、接收，是否正常处理

    // 在 document 监听 指定的事件
    document.addEventListener(PDC_BEGIN, event=>console.log(new Date(), event.type, event));
    document.addEventListener(PDC_RUNNING,event=>console.log(new Date(), event.type, event));
    document.addEventListener(PDC_END, event=>console.log(new Date(), event.type, event));

    // 首先，增加3个按钮，在点击时，传播事件
    let htmlStr = `
    <div id="eventTest">
        <div id="eventTestDesc">留意控制台，点击按钮后的输出信息</div>
        <button class="btn btn-primary" type="button" id="event1">开始 点击</button>&nbsp;&nbsp;
        <button class="btn btn-primary" type="button" id="event2">进行中 点击</button>&nbsp;&nbsp;
        <button class="btn btn-primary" type="button" id="event3">结束 点击</button>
    </div>
    `;
    let newDoc = DOM_PARSER.parseFromString(htmlStr, 'text/html');
    // 插入页面
    document.body.append(newDoc.getElementById('eventTest'));
    // 增加按钮点击处理
    document.getElementById('event1').addEventListener('click', event=>{ document.dispatchEvent(EVENT_PDC_BEGIN); });
    document.getElementById('event2').addEventListener('click', event=>{ document.dispatchEvent(EVENT_PDC_RUNNING); });
    document.getElementById('event3').addEventListener('click', event=>{
        // 这里尝试由按钮传播事件，看看document 是否获取成功。 
        document.getElementById('event3').dispatchEvent(EVENT_PDC_END);
    });
}

export{
    testEventName, testEventObject
}