document.querySelector('#btn').addEventListener('click', dogYears);

function dogYears() {
    let firstTwoYears = 10.5;
    let userAge = document.querySelector('#inputAge').value;
    userAge = userAge*4;
    let dogAgeCalc = Math.floor(firstTwoYears + userAge);
    let ageInDogYears = `This is your age in dog years ${dogAgeCalc}😲`;
    document.h2.innerTEXT(ageInDogYears);
    // console.log(ageInDogYears);
}