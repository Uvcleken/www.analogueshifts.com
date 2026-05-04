// NotificationCenter.js

class NotificationCenter {
    constructor() {
        this.subscribers = {};
    }

    subscribe(priority, callback) {
        if (!this.subscribers[priority]) {
            this.subscribers[priority] = [];
        }
        this.subscribers[priority].push(callback);
    }

    notify(priority, notification) {
        if (this.subscribers[priority]) {
            this.subscribers[priority].forEach(callback => callback(notification));
        }
    }

    displayNotification(notification) {
        // Functionality to display notification on UI
        console.log(`Notification: ${notification.title} - Priority: ${notification.priority}`);
    }
}

// Example Usage
const nc = new NotificationCenter();

nc.subscribe(1, (notification) => {
    nc.displayNotification(notification);
});

nc.notify(1, { title: 'New message!', priority: 1 });