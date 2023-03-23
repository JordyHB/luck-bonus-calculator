function returnInput() {
    // gets the amount of work hours input on the form
    const hoursWorked = document.getElementById('hours-field').value;
    // get the amount of work minutes from the input form
    const minWorked = document.getElementById('minutes-field').value;
    // gets the amount of jobs done input on the form
    const jobsDone = document.getElementById('jobs-field').value;

    // preps the general output field variables
    const minBonusField = document.getElementById('orders-needed-min')
    const midBonusField = document.getElementById('orders-needed-mid')
    const maxBonusField = document.getElementById('orders-needed-high')
    // multiplies the input of the hours + the decimals of the minutes field by neccesary number to get the different bonuses
    minBonusField.innerHTML = (Math.ceil((Number(hoursWorked) + Number(minWorked) / 60) * 2.4951)).toString()
    midBonusField.innerHTML = (Math.ceil((Number(hoursWorked) + Number(minWorked) / 60) * 2.6951)).toString()
    maxBonusField.innerHTML = (Math.ceil((Number(hoursWorked) + Number(minWorked) / 60) * 2.8951)).toString()

    // preps the personal output field variables
    const personalScore = document.getElementById('personal-score')
    const tillMaxScore = document.getElementById('till-max')
    const tillMidScore = document.getElementById('till-mid')
    const tillMinScore = document.getElementById('till-min')

    // returns the personal score by dividing orders done by hours + minutes worked
    personalScore.innerHTML = (Number(jobsDone) / (Number(hoursWorked) + Number(minWorked) / 60)).toFixed(2).toString()
    // prevents the page refreshing on form submit
    event.preventDefault();
}

console.log('hello')

