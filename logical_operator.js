// logical operator //
// const hasDriversLicense = true;
// const hasGoodVision = true;
// const isTired = true;

// first //
// if (hasDriversLicense && hasGoodVision && isTired) {
//     console.log("Sarah is able to drive!");
// } else {
//     console.log("Someone is able to drive!");
// }

// second //
// if (hasDriversLicense && hasGoodVision && !isTired) {
//     console.log("Sarah is able to drive!");
// } else {
//     console.log("Someone is able to drive!");
// }

// third //
// if (!hasDriversLicense && hasGoodVision || isTired) {
//     console.log("Sarah is able to drive!");
// } else {
//     console.log("Someone is able to drive!");
// }

// fourth //
const speakInEnglish = prompt("Is your country speaks English? Write true or false!");
const lessThanFiftyMillion = prompt("Have your population less than 50 Million? Write true or false!");
const isIsland = prompt("Is your country has Island? Write true or false!");

if (speakInEnglish || lessThanFiftyMillion || isIsland) {
    console.log("You should live in Portugal :)");
}

else if (speakInEnglish === "" || lessThanFiftyMillion === "" || isIsland === "") {
    alert("Please give your answer!");
    // reload the current page with this methods choose only one, your choice //
    // document.location.reload();
    // window.location.reload();
    // history.go();
}

else {
    console.log("unless you live in Canada :D");
}
