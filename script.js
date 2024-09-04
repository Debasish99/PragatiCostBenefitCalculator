function calculate() {
    let salary = parseFloat(document.getElementById('salary').value);
    let hoursPerDay = parseFloat(document.getElementById('hoursPerDay').value);
    let daysPerWeek = parseFloat(document.getElementById('daysPerWeek').value);

    let estimatedHours = parseFloat(document.getElementById('estimatedHours').value);
    let estimatedMinutes = parseFloat(document.getElementById('estimatedMinutes').value);
    let actualHours = parseFloat(document.getElementById('actualHours').value);
    let actualMinutes = parseFloat(document.getElementById('actualMinutes').value);

    const conversionRate = 83.97; // Example rate

    if (isNaN(salary) || isNaN(hoursPerDay) || isNaN(daysPerWeek) ||
        (isNaN(estimatedHours) && isNaN(estimatedMinutes)) ||
        (isNaN(actualHours) && isNaN(actualMinutes))) {
        alert("Please fill in all fields with valid numbers.");
        return;
    }

    let totalEstimatedTime = estimatedHours + estimatedMinutes / 60;
    let totalActualTime = actualHours + actualMinutes / 60;

    let totalHoursPerMonth = hoursPerDay * daysPerWeek * 4.33;
    let hourlyWage = salary / totalHoursPerMonth;

    let timeSaved = totalEstimatedTime - totalActualTime;
    let costSavings = timeSaved * hourlyWage;
    let costSavingsUSD = costSavings / conversionRate;

    let timeSavedYear = timeSaved * daysPerWeek * 52;
    let costSavingsYear = costSavings * daysPerWeek * 52;
    let costSavingsUSDYear = costSavingsUSD * daysPerWeek * 52;

    document.getElementById('hourlyWage').innerText = hourlyWage.toFixed(2);
    document.getElementById('timeSaved').innerText = timeSaved.toFixed(2);
    document.getElementById('costSavings').innerText = costSavings.toFixed(2);
    document.getElementById('costSavingsUSD').innerText = costSavingsUSD.toFixed(2);
    document.getElementById('timeSavedYear').innerText = timeSavedYear.toFixed(2);
    document.getElementById('costSavingsYear').innerText = costSavingsYear.toFixed(2);
    document.getElementById('costSavingsUSDYear').innerText = costSavingsUSDYear.toFixed(2);
}
