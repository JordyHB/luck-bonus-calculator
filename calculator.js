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
    // multiplies the input of the hours + the decimals of the minutes field by necessary number to get the different bonuses
    minBonusField.innerHTML =
        (Math.ceil((Number(hoursWorked) + Number(minWorked) / 60) * 2.4951)).toString()
    midBonusField.innerHTML =
        (Math.ceil((Number(hoursWorked) + Number(minWorked) / 60) * 2.6951)).toString()
    maxBonusField.innerHTML =
        (Math.ceil((Number(hoursWorked) + Number(minWorked) / 60) * 2.8951)).toString()

    // preps the personal output field variables
    const personalScore = document.getElementById('personal-score')
    const tillMaxScore = document.getElementById('till-max')
    const tillMidScore = document.getElementById('till-mid')
    const tillMinScore = document.getElementById('till-min')
    // variable to track the number of orders ahead or short of the goal
    let orderBalance

    // returns the personal score by dividing orders done by hours + minutes worked
    personalScore.innerHTML =
        (Number(jobsDone) / (Number(hoursWorked) + Number(minWorked) / 60)).toFixed(2).toString()
    if (personalScore.innerHTML >= 2.896) {
        // adds the money you are currently getting from the bonus
        personalScore.innerHTML =
            `${personalScore.innerHTML} (€${jobsDone * 1.50.toFixed(2)})`
    }
    // sets level for showing how much you get currently with mid bonus
     else if (personalScore.innerHTML >= 2.696) {
        // adds the money you are currently getting from the bonus
        personalScore.innerHTML =
            `${personalScore.innerHTML} (€${jobsDone * 0.50.toFixed(2)})`
    }
    // sets level for showing how much you get currently with min bonus
     else if (personalScore.innerHTML >= 2.496) {
        // adds the money you are currently getting from the bonus
        personalScore.innerHTML =
            `${personalScore.innerHTML} (€${jobsDone * 0.25.toFixed(2)})`
    }
    // if not above last thresshold prints no bonus
     else {
         personalScore.innerHTML =
             `${personalScore.innerHTML} (no bonus)`
    }

    // sets order balance for the max field
    orderBalance = Number(maxBonusField.innerHTML - Number(jobsDone))
    // checks to see if orderBalance is a negative number for output
    if (orderBalance < 0) {
        // converts order balance from a negative to a positive number
        orderBalance *= -1
        // sets the output field
        tillMaxScore.innerHTML = orderBalance + ' order(s) ahead'
    }
    // if positive number means user is behind on orders
    else if (orderBalance > 0) {
        // sets the output field
        tillMaxScore.innerHTML = orderBalance + ' order(s) behind'
    }
    // else statement for if the user is on pace
    else {
        // sets the output
        tillMaxScore.innerHTML = 'Current bonus'
    }

    // sets order balance for the mid field
    orderBalance = Number(midBonusField.innerHTML - Number(jobsDone))
    // checks to see if orderBalance is a negative number for output
    if (orderBalance < 0) {
        // converts order balance from a negative to a positive number
        orderBalance *= -1
        // sets the output field
        tillMidScore.innerHTML = orderBalance + ' order(s) ahead  :)'
    }
    // if positive number means user is behind on orders
    else if (orderBalance > 0) {
        // sets the output field
        tillMidScore.innerHTML = orderBalance + ' order(s) behind  :('
    }
    // else statement for if the user is on pace
    else {
        // sets the output
        tillMidScore.innerHTML = 'Current bonus'
    }

    // sets order balance for the min field
    orderBalance = Number(minBonusField.innerHTML - Number(jobsDone))
    console.log(orderBalance)
    // checks to see if orderBalance is a negative number for output
    if (orderBalance < 0) {
        // converts order balance from a negative to a positive number
        orderBalance *= -1
        // sets the output field
        tillMinScore.innerHTML = orderBalance + ' order(s) ahead  :)'
    }
    // if positive number means user is behind on orders
    else if (orderBalance > 0) {
        // sets the output field
        tillMinScore.innerHTML = orderBalance + ' order(s) behind  :('
    }
    // else statement for if the user is on pace
    else {
        // sets the output
        tillMinScore.innerHTML = 'Current bonus'
    }

    // adds the monetary value of getting the bonus to the output.
    maxBonusField.innerHTML =
        `${maxBonusField.innerHTML} (€${Number(maxBonusField.innerHTML) * 1.50.toFixed(2)})`
    // adds the monetary value of getting the bonus to the output.
    midBonusField.innerHTML =
        `${midBonusField.innerHTML} (€${Number(midBonusField.innerHTML) * 0.50.toFixed(2)})`
    // adds the monetary value of getting the bonus to the output.
    minBonusField.innerHTML =
        `${minBonusField.innerHTML} (€${Number(minBonusField.innerHTML) * 0.25.toFixed(2)})`



    // prevents the page refreshing on form submit
    event.preventDefault();
}

console.log('hello')

