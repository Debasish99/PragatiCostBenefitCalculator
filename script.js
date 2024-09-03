function calculate() {
    let salary = parseFloat(document.getElementById('salary').value);
    let hoursPerDay = parseFloat(document.getElementById('hoursPerDay').value);
    let daysPerWeek = parseFloat(document.getElementById('daysPerWeek').value);
    let estimatedHours = parseFloat(document.getElementById('estimatedHours').value);
    let actualHours = parseFloat(document.getElementById('actualHours').value);
    const conversionRate = 83.97; // 1 USD = 83 INR (example rate)
    
    if (isNaN(salary) || isNaN(hoursPerDay) || isNaN(daysPerWeek) || isNaN(estimatedHours) || isNaN(actualHours)) {
        alert("Please fill in all fields with valid numbers.");
        return;
    }
    
    let totalHoursPerMonth = hoursPerDay * daysPerWeek * 4.33;
    let hourlyWage = salary / totalHoursPerMonth;
    
    let timeSaved = estimatedHours - actualHours;
    let costSavings = timeSaved * hourlyWage;
    let costSavingsUSD = costSavings / conversionRate;
    
    document.getElementById('hourlyWage').innerText = hourlyWage.toFixed(2);
    document.getElementById('timeSaved').innerText = timeSaved.toFixed(2);
    document.getElementById('costSavings').innerText = costSavings.toFixed(2);
    document.getElementById('costSavingsUSD').innerText = costSavingsUSD.toFixed(2);
}
