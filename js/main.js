document.querySelector('#btn').addEventListener('click', dogYears);

function dogYears() {
    let userAge = document.querySelector('#inputAge').value;
    let firstTwoYearsAndAfter = Math.round(10.5 + userAge * 4);
    ageInDogYears = `This is your age in dog years ${firstTwoYearsAndAfter}😲`;
    document.querySelector('#displayDogAge').innerText = ageInDogYears;
}