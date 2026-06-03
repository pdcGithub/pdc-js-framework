/**
 * In my license, all codes can be shared free of charge. 
 * However, If my code is taken for commercial use, please maintain it yourself. 
 * I am not obligated to take responsibility for your business application.
 * Here is my email "pangdongcan@live.com"
 * 
 * Copyright © 2026 Micheal Pang. All rights reserved.
 * 
 * @file This file "VerificationError.js" is part of project "pdc-js-framework" , which is belong to Michael Pang (It's Me).
 * @author  Micheal Pang (Dongcan Pang)
 * @since  2026-03-03
 * @description 这是关于操作验证时发生的异常。
 */
"use strict"; // 这是严格模式下的 Javascript 代码

/**
 * 自定义的一个 Error 类。它用于表示 操作验证时发生的异常
 */
class VerificationError extends Error {

    /**
     * 这里创建一个 VerificationError 对象。它需要一个“描述信息”作为入参
     * @param {String} message 一个描述信息字符串
     */
    constructor(message){
        super(message);
        this.name = VerificationError.name;
    }
}

/**
 * 导出公用部分
 */
export {
    VerificationError
}