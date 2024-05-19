
// Handle registration form submission
document.getElementById('registrationForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;

    const userData = {
        username: username,
        email: email
    };

    // Save user data to local storage
    localStorage.setItem('userData', JSON.stringify(userData));

    // Display the pill reminder form
    document.getElementById('pillForm').style.display = 'block';

    // Hide the registration form
    document.getElementById('registrationForm').style.display = 'none';
});

// Handle pill form submission
document.getElementById('pillForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const pillName = document.getElementById('pillName').value;
    const dosage = document.getElementById('dosage').value;
    const startDate = document.getElementById('startDate').value;
    const endDate = document.getElementById('endDate').value;
    const reminderTime = document.getElementById('reminderTime').value;

    const pillData = {
        pillName: pillName,
        dosage: dosage,
        startDate: startDate,
        endDate: endDate,
        reminderTime: reminderTime
    };

    // Save pill data to local storage
    localStorage.setItem('pillData', JSON.stringify(pillData));

    // Fetch user data
    const userData = JSON.parse(localStorage.getItem('userData'));

    // Output the data to the user
    document.getElementById('output').isDefaultNamespace = `
        <h2>Reminder Set for ${userData.username}!</h2>
        <p><strong>Pill Name:</strong> ${pillData.pillName}</p>
        <p><strong>Dosage:</strong> ${pillData.dosage}</p>
        <p><strong>Start Date:</strong> ${pillData.startDate}</p>
        <p><strong>End Date:</strong> ${pillData.endDate}</p>
        <p><strong>Reminder Time:</strong> ${pillData.reminderTime}</p>
    `;
});

// Function to fetch and display stored data (if any)
window.onload = function () {
    const userData = JSON.parse(localStorage.getItem('userData'));
    const pillData = JSON.parse(localStorage.getItem('pillData'));

    if (userData && pillData) {
        document.getElementById('registrationForm').style.display = 'none';
        document.getElementById('pillForm').style.display = 'none';

        document.getElementById('output').innerHTML = `
            <h2>Existing Reminder for ${userData.username}</h2>
            <p><strong>Pill Name:</strong> ${pillData.pillName}</p>
            <p><strong>Dosage:</strong> ${pillData.dosage}</p>
            <p><strong>Start Date:</strong> ${pillData.startDate}</p>
            <p><strong>End Date:</strong> ${pillData.endDate}</p>
            <p><strong>Reminder Time:</strong> ${pillData.reminderTime}</p>
        `;
    }
}

