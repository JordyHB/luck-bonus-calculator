function returnInput() {
    // gets the amount of work hours input on the form
    const hoursWorked = document.getElementById('hours-field').value;
    // get the amount of work minutes from the input form
    const minWorked = document.getElementById('minutes-field').value;
    // gets the amount of jobs done input on the form
    const jobsDone = document.getElementById('jobs-field').value;
    // preps the output field variables
    const minBonusField = document.getElementById('orders-needed-min')
    console.log(minBonusField)
    const midBonusField = document.getElementById('orders-needed-mid')
    console.log(midBonusField)
    const maxBonusField = document.getElementById('orders-needed-high')
    console.log(maxBonusField)
    minBonusField.innerHTML = (Math.floor(hoursWorked * 2.50)).toString()
    midBonusField.innerHTML = (Math.floor(hoursWorked * 2.7)).toString()
    maxBonusField.innerHTML = (Math.floor(hoursWorked * 2.90)).toString()

    event.preventDefault();
}

console.log('hello')

