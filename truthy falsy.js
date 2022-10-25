// falsy values //
console.log(Boolean(0));
console.log(Boolean(null));
console.log(Boolean(""));
console.log(Boolean(undefined));
console.log(Boolean(NaN));
console.log(Boolean(false));


// example //

let height = 0;
if (height) {
    console.log("Height is : ", height);
} else {
    console.log("Height is undefined");
}

const name = "Mohammad Naim";
if (name) {
    console.log("Your name is :", name);
} else {
    console.log("Please enter your name");
}

let weight = '';
if (weight) {
    console.log("Weight is : ", weight);
} else {
    console.log("Weight is undefined");
}

const age = "false";
if (!age) {
    console.log("Age is : ", age);
} else {
    console.log("Enter your age");
}

// truthy values //
console.log(Boolean(true));
console.log(Boolean({}));
console.log(Boolean([]));
console.log(Boolean(43));
console.log(Boolean("0"));
console.log(Boolean("false"));
console.log(Boolean(new Date()));
console.log(Boolean(-4));
console.log(Boolean(12n));
console.log(Boolean(Infinity));
console.log(Boolean(-Infinity));