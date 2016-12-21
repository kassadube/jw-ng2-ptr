"use strict";
var _ = require("lodash");
function test() {
    var output = _.padStart("Hello TypeScript!", 20, " ");
    console.log(output);
}
test();
