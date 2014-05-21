define(function(require, exports, module) {

    console.log("I'm in hello !");
    var $ = require("$");
    $("#hello").text("Hello Sea :)");

    // 顶级标识根据模块系统的基础路径来解析并引入
    require("arale/calendar/1.0.0/calendar.css");
    // 通过别名来解析并引入
    var cal = require("calendar");
    new cal({
        trigger: $("#calendar")
    });
    
});