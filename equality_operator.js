// equality operator //
const numNeighbours = Number(prompt("How many neighbour countries does your country have?"));

if (numNeighbours === 1) {
    console.log("Only 1 border!");
}

else if (numNeighbours > 1) {
    console.log("More than 1 border!");
}

else if (numNeighbours !== Number) {
    alert("This is not a number");
}

else {
    console.log("No borders");
}

// another example //
// const value = Number(prompt("Enter your favourite number between 10 - 30"));

// if (value < 10 || value > 30) {
//   alert("Please enter number between 10 to 30");
// } 

// else if (value >= 10 || value <= 30) {
//     console.log("You are right");
//         if (value === 23) {
//             console.log("You select 23");
//           } else if (value === 17) {
//             console.log("You select 17");
//           } else if (value === 29) {
//             console.log("You select 29");
//           } else if (value === 24) {
//             console.log("You select 24");
//           }
    
//       }
// else {
//     console.log("Invalid number")
// }
