
document.getElementById('medicationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const pillname = document.getElementById('pillname').value;
    const dosage = document.getElementById('dosage').value;
    const startdate = document.getElementById('startdate').value;
    const enddate = document.getElementById('enddate').value;
    const reminder = document.getElementById('reminder').value;

    const formData = {
        username: username,
        pillname: pillname,
        dosage: dosage,
        startdate: startdate,
        enddate: enddate,
        reminder: reminder
    };

    console.log(JSON.stringify(formData, null, 2));
});