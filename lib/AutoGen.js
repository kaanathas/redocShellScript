"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AutoGenDoc = void 0;
var SampleCodeGen_1 = require("./SampleCodeGen");
var AutoGenDoc = /** @class */ (function () {
    function AutoGenDoc() {
        this.creation = new SampleCodeGen_1.DocsCreation();
    }
    AutoGenDoc.prototype.generateDocs = function (filePath) {
        try {
            this.creation.HtmlDocCreate(filePath);
            this.creation.ReactDocCreate(filePath);
        }
        catch (e) {
            console.log("this wsa an error while sample genaration" + e);
        }
    };
    return AutoGenDoc;
}());
exports.AutoGenDoc = AutoGenDoc;
