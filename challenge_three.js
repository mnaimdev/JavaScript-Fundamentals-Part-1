// coding challenge three //

// example one //
// Dolphins score
// const scoreOneDolphins = 96;
// const scoreTwoDolphins = 108;
// const scoreThreeDolphins = 89;

// Koalas score
// const scoreOneKoalas = 88;
// const scoreTwoKoalas = 91;
// const scoreThreeKoalas = 110;

// example two //
// // Dolphins score
// const scoreOneDolphins = 97;
// const scoreTwoDolphins = 112;
// const scoreThreeDolphins = 101;

// // Koalas score
// const scoreOneKoalas = 109;
// const scoreTwoKoalas = 95;
// const scoreThreeKoalas = 123;

// example three //
// Dolphins score
const scoreOneDolphins = 97;
const scoreTwoDolphins = 112;
const scoreThreeDolphins = 101;

// Koalas score
const scoreOneKoalas = 109;
const scoreTwoKoalas = 95;
const scoreThreeKoalas = 106;

// Dolphins average score
const averageScoreDolphins = (scoreOneDolphins + scoreTwoDolphins + scoreThreeDolphins) / 3;

// Koalas average score
const averageScoreKoalas = (scoreOneKoalas + scoreTwoKoalas + scoreThreeKoalas) / 3;

if (averageScoreDolphins >= 100 && averageScoreKoalas >= 100) {
    if (averageScoreDolphins > averageScoreKoalas) {
        console.log("Team Dolphins wins the 🏆 ", averageScoreDolphins);
    }

    else if (averageScoreDolphins === averageScoreKoalas) {
        console.log("Both team win the 🏆!");
    } 
    
    else {
        console.log("Team Koalas wins the 🏆 ", averageScoreKoalas);
    }

} else {
    console.log("No one wins the 🏆");
}

console.log(averageScoreDolphins);
console.log(averageScoreKoalas);

 