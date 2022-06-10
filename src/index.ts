import {foo} from "./bar"

function add(a: number, b: number): number {
    printFoo();
    return a + b + a;
}

function printFoo(): void {
    const text = foo();
    console.log(text);
}

let result = add(1, 2);
console.log(result);