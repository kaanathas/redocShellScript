"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AutoGen_1 = require("./AutoGen");
var env;
process.argv.forEach(function (val, index) {
    console.log(val + "  " + index + "    in node");
    // env[index]=val;
});
var startCreataion = new AutoGen_1.AutoGenDoc();
var filelocation = process.argv[2];
startCreataion.generateDocs(filelocation);
