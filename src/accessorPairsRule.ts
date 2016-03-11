import * as ts from 'typescript';
import * as Lint from 'tslint/lib/lint';
const validator = require('eslint/lib/rules/accessor-pairs');

class AccessorPairsWalker extends Lint.RuleWalker {
  private validator:any;

  constructor(sourceFile:ts.SourceFile, options:Lint.IOptions) {
    super(sourceFile, options);
    this.validator = validator.create({
      options: options.ruleArguments,
      report(node, text){
        console.log(node, text);
      }
    });
  }

  protected visitObjectLiteralExpression(node:ts.ObjectLiteralExpression) {
    this.validator.ObjectExpression(node);
    this.walkChildren(node);
  }
  
  protected visitPropertyAccessExpression(node:ts.PropertyAccessExpression) {
    this.validator.ObjectExpression(node);
    this.walkChildren(node);
  }
  protected visitElementAccessExpression(node:ts.ElementAccessExpression) {
    this.validator.ObjectExpression(node);
    this.walkChildren(node);
  }
}

export class Rule extends Lint.Rules.AbstractRule {
  public apply(sourceFile:ts.SourceFile):Lint.RuleFailure[] {
    const walker = new AccessorPairsWalker(sourceFile, this.getOptions());
    // console.log(this.getOptions());
    // console.log(sourceFile);
    return this.applyWithWalker(walker);
  }
}

