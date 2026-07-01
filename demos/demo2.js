/**
 * In my license, all codes can be shared free of charge. 
 * However, If my code is taken for commercial use, please maintain it yourself. 
 * I am not obligated to take responsibility for your business application.
 * Here is my email "pangdongcan@live.com"
 * 
 * Copyright © 2026 Micheal Pang. All rights reserved.
 * 
 * @file This file "demo2.js" is part of project "pdc-js-framework" , which is belong to Michael Pang (It's Me).
 * @author  Micheal Pang (Dongcan Pang)
 * @since  2026-07-01
 * @description  This is a demo. It will show you how to call modules of this project.
 */
"use strict"; // 这是严格模式下的 Javascript 代码

// ============= import some necessary modules.
import { DOM_PARSER, drawTag } from "../utils/html.js";
import { myToString } from "../utils/string.js";
// ============= import everything of module datatype.js and add an alias named 'du'.
import * as du from "../utils/datatype.js";

// create a function to display information.
function show(){
    // 
    let num1 = 100;
    let content = `type of ${num1} is number. it is ${myToString(du.isNumber(num1))}`;
    // 
    let testDiv = drawTag('div', {id:'test1'}, content);
    let newDoc = DOM_PARSER.parseFromString(testDiv, 'text/html');
    document.body.append(newDoc.getElementById('test1'));
}

// execute
show();