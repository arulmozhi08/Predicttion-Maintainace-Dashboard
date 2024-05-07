function redirectToAlerts(machine) {
    window.location.href = `alerts.html?machine=${machine}`;
}

function goBack() {
    window.history.back();
}

document.addEventListener('DOMContentLoaded', function() {
    const machineName = new URLSearchParams(window.location.search).get('machine');
    document.getElementById('machineName').textContent = machineName;

    const alertsList = document.getElementById('alertsList');
    const alerts = [
        'High vibration detected',
        'Low fluid level warning',
        'Anomaly in pressure readings',
        'Temperature exceeding threshold'
    ];

    alerts.forEach(alert => {
        const listItem = document.createElement('li');
        listItem.textContent = alert;
        alertsList.appendChild(listItem);
    });

    const alertContainer = document.getElementById('alertContainer');
    const alertMessage = document.createElement('div');
    alertMessage.classList.add('alert-message');
    alertMessage.textContent = `Alert for ${machineName}: High vibration detected`;
    alertContainer.appendChild(alertMessage);
});
