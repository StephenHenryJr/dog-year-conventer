let submit = document.getElementById('submit');
let input = document.getElementById('input');

let calculateDogYears = () => {

    let myAge = input.value;

    //First 2 years of dog's life
    let earlyYears = 2;
    //
    earlyYears *= 10.5;

    // My age - the 2 first dog years
    let laterYears = myAge - 2;
    // Later years of dog's life
    laterYears *= 4;
    //

    // Early and later years of dog life
    let myAgeInDogYears = earlyYears + laterYears;
    //

    if (input.value > 0) {
        document.querySelector('p').innerHTML = `Hello there, you are exactly ${myAgeInDogYears} years old in dog years!`;
    } else {
        document.querySelector('p').innerHTML = `Please enter a valid number above 0!`
    }
}

// calculateDogYears()
submit.addEventListener('click', calculateDogYears)