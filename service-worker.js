// service-worker.js
self.addEventListener('push', function(event) {
    const options = {
        body: event.data ? event.data.text() : 'No payload',
        icon: 'images/icon.png',
        badge: 'images/badge.png'
    };
    event.waitUntil(
        self.registration.showNotification('New Notification', options)
    );
});