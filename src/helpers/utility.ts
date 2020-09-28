import _ from 'lodash';

export const memoize = (fn: (...args:any) => any) => {
    let lastArgs: Array<any> = [];
    let lastResult: any = null;
    let called: boolean = false;
    
    function memoized(...args: any): ReturnType<typeof fn> {
        const newArgs = [];

        for (let _i = 0; _i < arguments.length; _i++) {
            newArgs[_i] = arguments[_i];
        }

        if (called && _.isEqual(newArgs, lastArgs)) {
            return lastResult;
        }

        lastResult = fn.apply(window,newArgs);
        called = true;
        lastArgs = newArgs;
        return lastResult;
    }
    return memoized;
}