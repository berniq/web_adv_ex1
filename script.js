// Add event listener to the "=" button
document.getElementById('calculateButton').addEventListener('click', function () {
    // Get the values of the two input fields
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);

    // Check if the inputs are valid numbers
    if (!isNaN(num1) && !isNaN(num2)) {
        // Perform the addition
        const sum = num1 + num2;

        // Display the result
        document.getElementById('result').innerText = `Result: ${sum}`;
    } else {
        // Display an error message if inputs are invalid
        document.getElementById('result').innerText = 'Please enter valid numbers.';
    }
});
