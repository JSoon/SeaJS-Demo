define("seaJS/helloSeaJS/1.0.0/main-debug", [ "./hello-debug", "jquery/jquery/1.10.1/jquery-debug" ], function(require) {
    console.log("I'm in main !");
    var hello = require("./hello-debug");
});

define("seaJS/helloSeaJS/1.0.0/hello-debug", [ "jquery/jquery/1.10.1/jquery-debug" ], function(require, exports, module) {
    console.log("I'm in hello !");
    var $ = require("jquery/jquery/1.10.1/jquery-debug");
    $("#hello").text("Hello Sea :)");
});
