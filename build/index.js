import { foo } from "./bar";
function add(a, b) {
    printFoo();
    return a + b + a;
}
function printFoo() {
    const text = foo();
    console.log(text);
}
let result = add(1, 2);
console.log(result);