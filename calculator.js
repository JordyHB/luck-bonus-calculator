function returnInput() {
    const hoursWorked = document.getElementById('hours-field').value;
    const jobsDone = document.getElementById('jobs-field').value;
    if (jobsDone / hoursWorked > 2.9) {
        console.log('congrats you were lucky this week')
    } else {
        console.log('stinky')
    }
}

console.log('hello')