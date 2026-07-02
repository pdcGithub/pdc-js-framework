# 1. Introduction

This is an experimental JavaScript framework, which can also be called a toolkit. It's all programmed using ECMAScript 6+ syntax. The purpose of developing the framework is to make native JavaScript programming in the browser simpler and more object-oriented. Because during the design, modular handling was taken into account. So, the JavaScript modules in the utils folder inside the framework can run on their own and don't depend on other components. For version control, I usually use tags here. I don't recommend having multiple duplicate versions existing at the same time.

As for the overall idea of the code, it comes from another project of my own: <https://github.com/pdcGithub/my-mickarea-tool>. While working on another project, I found a lot of apis in native JavaScript that too complicated to use. So I wanted to tweak it and make some changes myself. The code for this project is mostly organized and migrated from another project, but it's not exactly the same.

> Note: The framework is intended for native JavaScript development in browsers, and it's not recommended to use it with NodeJS. This framework is still under development and gets updated from time to time.

> For the UI components, I'm using the Bootstrap 5 style files here. I'll update the instructions after the integration is done.

# 2. Folder Structure

Now, let me explain the meaning of each folder in this project. To minimize differences in usage caused by code organization, I designed an interface for each external module. You just need to call this interface file when using it.

```
├─demos  ( This is examples for demonstration purposes )
│      ......
│      
├─models (This is the model folder, used to store some custom models)
│  │  errors.js      (External exception-related model interface)
│  │  normal.js      (External normal model interface)
│  │  
│  ├─errors
│  │      ......     (Specific exception model class)
│  └─normal
│         ......     (Specific normal model class)
│          
├─tests  (This is an internal testing program)
│  │  testAll.html   (Test page that can call all modules)
│  │  testTools.js   (This is a test toolkit, only for testing within this framework, not recommended for external use)
│  │  
│  ├─models          
│  │      ......     (Specific test code, organized by module into folders)
│  │      
│  └─utils
│         ......     (Specific test code, organized by module into folders)
│              
├─thirdpartys  (These are some third-party modules, not yet organized)
│      ......
│      
├─uiComponents  (This is the framework's UI component, still under development)
│      ......
│      
└─utils  (These are some utility modules that can run independently of the framework, relying only on models)
    │  datatype.js      (External Interface of the Data Processing Module)
    │  html.js          (External interface of the HTML processing module)
    │  string.js        (External interface of the String processing module)
    │  valid.js         (External Interface of the Validation Processing Module)
    │  
    ├─datatype
    │      ......    (The specific implementation code, divided into folders by module)
    │      
    └─valid
           ......    (The specific implementation code, divided into folders by module)
```

# 3. How To Use

If you want to use this framework, you can just download it. I don't offer packing and compressing into a single file for now. The user can handle it on their own. Since it's based on the browser's native JavaScript syntax, these external modules can be integrated with any JavaScript framework.

## 3.1 Examples Of Importing A Module

Depending on your needs, you can import only the specified functions:

```js
import { myToString } from "../utils/string.js";
```

You can also import the entire module:

```js
import * as du from "../utils/datatype.js";
```

> When importing modules, make sure the file's relative path is correct.

## 3.2 Complete Examples

The demo code is written based on HTML and native JavaScript. When testing it, it's recommended to serve it over HTTP rather than running it locally via the file protocol. If you're using the VSCode editor, try using the Live Server extension. 

> A single-page example, with JavaScript embedded in the HTML: [demo1.html](/demos/demo1.html)

> A single-page example, with JavaScript in a separate file: [demo2.html](/demos/demo2.html) [demo2.js](/demos/demo2.js)

# 4. About Internationalization

Because I am an individual developer and currently do not have time to handle internationalization. Therefore, the code comments and exception descriptions will include Simplified Chinese.
