// type conversion //

const inputYear = "1999";
const birthYear = Number(inputYear);

console.log(Number("Mohammad Naim"));
console.log(typeof NaN);

const value = 23;
const stringValue = String(value);
console.log(stringValue);
console.log(typeof stringValue);

// type coercion //
console.log("I am Mohammad Naim. " + "I am " + 23 + " years old.");

console.log("23" + "24" + 3); // 23243
console.log("23" - "24" - 3); // -4
console.log("23" + "24" - 3); //2321
console.log("25" - "24" - 3); // -2


console.log("25" * 2); // 50
console.log("25" * "2"); // 50

console.log("25" / 2); // 12.5
console.log("25" / "2"); // 12.5

let n = "1" + 1;
n = n - 1;
console.log(n); // 10

console.log(2 + 3 + 4 + "5"); // "95"
console.log("10" - "4" - "3" - 2 + "5"); // 15

