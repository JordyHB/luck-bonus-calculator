function returnInput() {
    // gets the amount of work hours input on the form
    const hoursWorked = document.getElementById('hours-field');
    // get the amount of work minutes from the input form
    const minWorked = document.getElementById('minutes-field');
    // gets the amount of jobs done input on the form
    const jobsDone = document.getElementById('jobs-field');

    // makes sure hours worked isnt 0 or empty to prevent dividing by 0
    if (Number(hoursWorked.value) === 0 || hoursWorked.value === '') {
        hoursWorked.value = 1
    }

    // preps the general output field variables
    const minBonusField = document.getElementById('orders-needed-min')
    const midBonusField = document.getElementById('orders-needed-mid')
    const maxBonusField = document.getElementById('orders-needed-high')
    // multiplies the input of the hours + the decimals of the minutes field by necessary number to get the different bonuses
    minBonusField.innerHTML =
        (Math.ceil((Number(hoursWorked.value) + Number(minWorked.value) / 60) * 2.4951)).toString()
    midBonusField.innerHTML =
        (Math.ceil((Number(hoursWorked.value) + Number(minWorked.value) / 60) * 2.6951)).toString()
    maxBonusField.innerHTML =
        (Math.ceil((Number(hoursWorked.value) + Number(minWorked.value) / 60) * 2.8951)).toString()

    // preps the personal output field variables
    const personalScore = document.getElementById('personal-score')
    const tillMaxScore = document.getElementById('till-max')
    const tillMidScore = document.getElementById('till-mid')
    const tillMinScore = document.getElementById('till-min')
    // variable to track the number of orders ahead or short of the goal
    let orderBalance

    // returns the personal score by dividing orders done by hours + minutes worked
    personalScore.innerHTML =
        (Number(jobsDone.value) / (Number(hoursWorked.value) + Number(minWorked.value) / 60)).toFixed(2).toString()
    if (personalScore.innerHTML >= 2.896) {
        // adds the money you are currently getting from the bonus
        personalScore.innerHTML =
            `${personalScore.innerHTML} (€${jobsDone.value * 1.50.toFixed(2)})`
    }
    // sets level for showing how much you get currently with mid bonus
     else if (personalScore.innerHTML >= 2.696) {
        // adds the money you are currently getting from the bonus
        personalScore.innerHTML =
            `${personalScore.innerHTML} (€${jobsDone.value * 0.50.toFixed(2)})`
    }
    // sets level for showing how much you get currently with min bonus
     else if (personalScore.innerHTML >= 2.496) {
        // adds the money you are currently getting from the bonus
        personalScore.innerHTML =
            `${personalScore.innerHTML} (€${jobsDone.value * 0.25.toFixed(2)})`
    }
    // if not above last thresshold prints no bonus
     else {
         personalScore.innerHTML =
             `${personalScore.innerHTML} (no bonus)`
    }

    // sets order balance for the max field
    orderBalance = Number(maxBonusField.innerHTML - jobsDone.value)
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
    orderBalance = Number(midBonusField.innerHTML - Number(jobsDone.value))
    // checks to see if orderBalance is a negative number for output
    if (orderBalance < 0) {
        // converts order balance from a negative to a positive number
        orderBalance *= -1
        // sets the output field
        tillMidScore.innerHTML = orderBalance + ' order(s) ahead'
    }
    // if positive number means user is behind on orders
    else if (orderBalance > 0) {
        // sets the output field
        tillMidScore.innerHTML = orderBalance + ' order(s) behind'
    }
    // else statement for if the user is on pace
    else {
        // sets the output
        tillMidScore.innerHTML = 'Current bonus'
    }

    // sets order balance for the min field
    orderBalance = Number(minBonusField.innerHTML - Number(jobsDone.value))
    // checks to see if orderBalance is a negative number for output
    if (orderBalance < 0) {
        // converts order balance from a negative to a positive number
        orderBalance *= -1
        // sets the output field
        tillMinScore.innerHTML = orderBalance + ' order(s) ahead'
    }
    // if positive number means user is behind on orders
    else if (orderBalance > 0) {
        // sets the output field
        tillMinScore.innerHTML = orderBalance + ' order(s) behind'
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
}

// Fetches all input fields on the page
const inputFields = document.querySelectorAll('input')
// loops through all the input fields in the page giving them an event listener
for (let i = 0; i < inputFields.length ; i++) {
    inputFields[i].addEventListener('input', (e) => {
        // validates wether it's a number lower than 10.000
       if (/^\d+$/g.test(e.data) && inputFields[i].value.length <= 4) {
          // checks if the input is in the minute field to set a max of 59
           if (e.target.id === 'minutes-field')  {
               // allows the entry if less than 60
               if (e.target.value < 60) {
                   returnInput()
               }
               // blocks the input
               else {
                   e.target.value = e.target.value.slice(0, -1)
               }
           }

           // allows up to a 10.000 on all other fields
           else {
               // updates the page
               returnInput()
           }
       }
       // limits the size of the number
       else if (inputFields[i].value.length > 4) {
           // removes input if longer than 4
           e.target.value = e.target.value.slice(0, -1)
       }
        // also updates on a backspace
       else if (e.inputType === 'deleteContentBackward') {
           returnInput()
       }
        // prevents invalid inputs by replacing them
       else {
           e.target.value = e.target.value.replace(/\D+/g, '')
       }})
}





