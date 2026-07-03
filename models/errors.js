/**
 * In my license, all codes can be shared free of charge. 
 * However, If my code is taken for commercial use, please maintain it yourself. 
 * I am not obligated to take responsibility for your business application.
 * Here is my email "pangdongcan@live.com"
 * 
 * Copyright © 2025 Micheal Pang. All rights reserved.
 * 
 * @file This file "errors.js" is part of project "pdc-js-framework" , which is belong to Michael Pang (It's Me).
 * @module models/errors
 * @author  Micheal Pang (Dongcan Pang)
 * @since  2025-08-29
 * @description  这里是自定义异常类的 一个 公用接口模块。保证对外接口一致。
 * （注意：请不要直接调用这个模块下面的子模块，因为它们可能修改路径。使用时，请统一导入本模块。）
 */
"use strict"; // 这是严格模式下的 Javascript 代码

import { ClassCreationError } from "./errors/ClassCreationError.js";
import { ParameterError } from "./errors/ParameterError.js";
import { VerificationError } from "./errors/VerificationError.js";

// 导出共享的内容
export {
    ClassCreationError, /* 类创建对象时的异常 */
    ParameterError,     /* 参数异常 */
    VerificationError   /* 操作验证时的异常 */
}