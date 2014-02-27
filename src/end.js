}());
// End dimple

// AMD support for RequireJs
(function (globalContext) {
    "use strict";

    if (typeof define === "function" && define.amd) {
        // d3 does not register itself within the global namespace if it detects AMD
        // yet dimple relies on d3's availability globally.
        define("dimple", ["d3"], function (d3) {
            // register d3 in the global namespace so that dimple can use it
            globalContext.d3 = d3;
            // return the dimple object as the module
            return globalContext.dimple;
        });
    }
}(this));