function submitForm() {
    const form = document.getElementById('medicationForm');
    const formData = new FormData(form);

    const data = {
        first_name: formData.get('first_name'),
        last_name: formData.get('last_name'),
        age: formData.get('age'),
        gender: formData.get('gender'),
        phone: formData.get('phone'),
        address: formData.get('address'),
        city: formData.get('city'),
        state: formData.get('state'),
        pill_name: formData.get('pill_name'),
        dosage: formData.get('dosage'),
        start_date: formData.get('start_date'),
        end_date: formData.get('end_date'),
        reminder_time: formData.get('reminder_time'),
        reminder: formData.get('reminder') ? true : false
    };

    console.log(JSON.stringify(data)); // This will log the data to the console as JSON

    // Example of storing the data in localStorage
    localStorage.setItem('medicationData', JSON.stringify(data));
    alert('Data saved successfully!');
}