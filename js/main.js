document.querySelector('#btn').addEventListener('click', dogYears);

function dogYears() {
    const userAge = document.querySelector('#inputAge').value;
    const firstTwoYearsAndAfter = Math.round(10.5 + userAge * 4);
    document.querySelector('#displayDogAge').innerHTML = `This is your age in dog years ${firstTwoYearsAndAfter}😲`;
}
const result = document.querySelector('#displayDogAge').innerTEXT = dogYears;