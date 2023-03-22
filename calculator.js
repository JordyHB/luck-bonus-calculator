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
    minBonusField.innerHTML = (Math.ceil(hoursWorked * 2.4951)).toString()
    midBonusField.innerHTML = (Math.ceil(hoursWorked * 2.6951)).toString()
    maxBonusField.innerHTML = (Math.ceil(hoursWorked * 2.8951)).toString()

    event.preventDefault();
}

console.log('hello')

