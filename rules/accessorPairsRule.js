"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Lint = require('tslint/lib/lint');
var validator = require('eslint/lib/rules/accessor-pairs');
var AccessorPairsWalker = (function (_super) {
    __extends(AccessorPairsWalker, _super);
    function AccessorPairsWalker(sourceFile, options) {
        _super.call(this, sourceFile, options);
        this.validator = validator.create({
            options: options.ruleArguments,
            report: function (node, text) {
                console.log(node, text);
            }
        });
    }
    AccessorPairsWalker.prototype.visitObjectLiteralExpression = function (node) {
        this.validator.ObjectExpression(node);
        this.walkChildren(node);
    };
    AccessorPairsWalker.prototype.visitPropertyAccessExpression = function (node) {
        this.validator.ObjectExpression(node);
        this.walkChildren(node);
    };
    AccessorPairsWalker.prototype.visitElementAccessExpression = function (node) {
        this.validator.ObjectExpression(node);
        this.walkChildren(node);
    };
    return AccessorPairsWalker;
}(Lint.RuleWalker));
var Rule = (function (_super) {
    __extends(Rule, _super);
    function Rule() {
        _super.apply(this, arguments);
    }
    Rule.prototype.apply = function (sourceFile) {
        var walker = new AccessorPairsWalker(sourceFile, this.getOptions());
        return this.applyWithWalker(walker);
    };
    return Rule;
}(Lint.Rules.AbstractRule));
exports.Rule = Rule;
