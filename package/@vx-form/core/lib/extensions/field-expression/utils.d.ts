export declare function evalStringExpression(expression: string, argNames: string[]): any;
export declare function evalExpressionValueSetter(expression: string, argNames: string[]): (value: any) => void;
export declare function evalExpression(expression: string | Function | boolean, thisArg: any, argVal: any[]): any;
